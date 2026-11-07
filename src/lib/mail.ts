export type ContactInquiry = {
  name: string;
  email: string;
  country: string;
  inquiry: string;
  message: string;
};

const COPY_RECIPIENT = "bdhkim0@gmail.com";

function inquiryRecipients(): string[] {
  const configured = (process.env.CONTACT_TO_EMAIL ?? "sales@aspenimaging.com")
    .split(",")
    .map((address) => address.trim())
    .filter(Boolean);

  if (!configured.some((address) => address.toLowerCase() === COPY_RECIPIENT)) {
    configured.push(COPY_RECIPIENT);
  }

  return configured;
}

export async function sendContactInquiry(inquiry: ContactInquiry): Promise<void> {
  const to = inquiryRecipients();
  const from = process.env.CONTACT_FROM_EMAIL;
  const region = process.env.AWS_REGION ?? process.env.AWS_DEFAULT_REGION ?? "us-east-1";
  const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
  const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;

  if (!from) {
    console.info("Contact inquiry received (CONTACT_FROM_EMAIL not configured)", inquiry);
    return;
  }

  const { SESClient, SendEmailCommand } = await import("@aws-sdk/client-ses");
  const client = new SESClient({
    region,
    ...(accessKeyId && secretAccessKey
      ? { credentials: { accessKeyId, secretAccessKey } }
      : {}),
  });

  const body = [
    `Name: ${inquiry.name}`,
    `Email: ${inquiry.email}`,
    `Country: ${inquiry.country}`,
    `Inquiry: ${inquiry.inquiry}`,
    "",
    inquiry.message,
  ].join("\n");

  const message = {
    Subject: { Data: `Aspen Imaging inquiry: ${inquiry.inquiry}` },
    Body: { Text: { Data: body } },
  };
  const primary = (process.env.CONTACT_TO_EMAIL ?? "sales@aspenimaging.com").split(",")[0].trim();

  const results = await Promise.allSettled(
    to.map((address) =>
      client.send(
        new SendEmailCommand({
          Source: from,
          Destination: { ToAddresses: [address] },
          ReplyToAddresses: [inquiry.email],
          Message: message,
        }),
      ),
    ),
  );

  results.forEach((result, index) => {
    if (result.status === "rejected") {
      console.error(`Failed to send contact inquiry to ${to[index]}`, result.reason);
    }
  });

  const primaryResult = results[to.findIndex((address) => address.toLowerCase() === primary.toLowerCase())];
  if (primaryResult?.status === "rejected") {
    throw primaryResult.reason;
  }
}
