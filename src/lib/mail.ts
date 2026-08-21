export type ContactInquiry = {
  name: string;
  email: string;
  country: string;
  inquiry: string;
  message: string;
};

export async function sendContactInquiry(inquiry: ContactInquiry): Promise<void> {
  const to = process.env.CONTACT_TO_EMAIL ?? "sales@aspenimaging.com";
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

  await client.send(
    new SendEmailCommand({
      Source: from,
      Destination: { ToAddresses: [to] },
      ReplyToAddresses: [inquiry.email],
      Message: {
        Subject: { Data: `Aspen Imaging inquiry: ${inquiry.inquiry}` },
        Body: { Text: { Data: body } },
      },
    }),
  );
}
