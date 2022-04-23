import nodemailer, { Transporter } from "nodemailer";

const user: string = <string>process.env.EMAIL;
const pass: string = <string>process.env.EMAIL_PWORD;

const main = async (recipient: string, mailOptions: any) => {
  // Create a transporter for sending email
  const transporter: Transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user,
      pass,
    },
  });

  mailOptions.from = user;
  mailOptions.to = recipient;

  try {
    transporter.sendMail(mailOptions);
  } catch (e: any) {
    console.log("ERROR: ", e.message);
  }
};

export default main;
