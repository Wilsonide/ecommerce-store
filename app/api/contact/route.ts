import nodemailer from "nodemailer";
export async function POST (req: Request){
    try{
        const { name, email, phone, message } = await req.json();
        if (!name || !email || !message || !phone) {
            return new Response("All fields are required", { status: 400 });
        }
        const transporter = nodemailer.createTransport({
        service : "gmail",
        host : "smtp.gmail.com",
        port: 587,
        secure: false,
           
            
        auth: {
            user : process.env.USER_EMAIL ,
            pass : process.env.APP_PASSWORD
        },
        tls: {
            rejectUnauthorized: false,
            }

        })

        const mailOptions = {
            from : process.env.USER_EMAIL,
            to: email,
            subject: `Ichekuwoods Contact Form Submission from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
                      
               
        }

        await transporter.sendMail(mailOptions)

        return new Response(JSON.stringify({message: "Email sent successfully",status:200 }))
    }
    
     catch (error:any) {
        console.log(error)
        return new Response(JSON.stringify({ status: 500, message: error.message }), { status: 500 });

        
    }
}