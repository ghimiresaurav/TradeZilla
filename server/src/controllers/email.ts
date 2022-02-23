import nodemailer, { Transporter } from "nodemailer";

const user: string = <string>process.env.EMAIL;
const pass: string = <string>process.env.EMAIL_PWORD;
let recipient: string = "ghimiresaurav09@gmail.com";
// recipient = "spd.sajag@gmail.com";
recipient = "sp49041719@student.ku.edu.np";

const min: number = 100000;
const max: number = 999999;

const getOTP = () => Math.round(Math.random() * (max - min) + min);

const main = async () => {
  const transporter: Transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user,
      pass,
    },
  });

  const OTP: number = getOTP();

  const mailOptions: any = {
    from: user,
    to: recipient,
    subject: "EMAIL VERIFICAITON",

    text: `DO NOT REPLY TO THIS EMAIL.\nYOUR EMAIL VERIFICATION CODE IS ${OTP}.\nDO NOT SHARE THIS CODE WITH ANYONE.`,

    html: `<h1>DO NOT REPLY TO THIS EMAIL</h1>
    <h2>YOUR VERIFICATION CODE IS ${OTP}</h2>
    <h2>DO NOT SHARE THIS CODE WITH ANYONE</h2>
    <strong>-TradeZilla</strong>`,
  };

  transporter.sendMail(mailOptions, (err, res) => {
    if (err) console.error(`ERROR: ${err}`);
  });
};

export default main;
