import { Body, Controller, Get, Post, Render } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
@Controller()
export class AppController {
  projects: Array<any>;
  socials: Array<any>;
  values: Array<any>;
  constructor() {
    this.projects = [
      {
        title: 'Social Blogging App',
        description:
          'A basic blogging web app which is built on top of <b>Angular 8 and Firebase</b>. The user can view, create, edit and delete their own blogs. User can book tickets for tours and provide them offline to validate the purchase. <br/> Logo Courtesy: Sakthibala',
        link: 'https://vibrant-nightingale-1f752e.netlify.app/',
        img: 'https://vibrant-nightingale-1f752e.netlify.app/assets/images/finalized.jpg',
        class: "class='btn btn-warning rounded-pill'",
        social: true,
      },
      {
        title: 'Lotus Traders',
        description:
          'An E-commerce application used to rent products, hire people and opt services for events like Engagement. The application is built on <b>Next.JS, Nest.JS, TypeORM and MySQL</b>. Deployments are done using <b>Heroku and Netlify</b> which involves CI/CD',
        link: 'https://www.lotusdecoreandrental.com',
        img: 'https://lotusdecoreandrental.com/logo.png',
        class: "class='btn btn-pink rounded-pill'",
        lotus: true,
      },
      {
        title: 'AmplifyC',
        description:
          "This project is used for managing compliance of companies incorporated. This project is being used by 25 users and it's currently in testing phase. This project involved <b>Vue.JS, Nest.JS, MongoDB, Celery, Redis Queue and Docker Container </b>",
        link: 'https://sathyanarayanan-v.github.io/AmplifyCClient/',
        img: 'https://sathyanarayanan-v.github.io/AmplifyCClient/img/logo.3d45e3b5.svg',
        class: "class='btn btn-primary rounded-pill'",
        amplifyc: true,
      },
    ];
    this.socials = [
      {
        title: 'Github',
        description:
          'Maintaining around <strong>9 public repositories.</strong> Worked exclusively on <strong>Full - Stack Web Application.</strong> I have also worked partially on developing desktop apps with electron and C#. Not to wonder, I have also developed a basic <strong>Alexa Skill.</strong>',
        link: 'https://github.com/sathyanarayanan-v',
        img: '/img/github.jpeg',
      },
      {
        title: 'Facebook',
        description:
          "Get to know whom I know, where I've been, and what I've done on my Facebook page. I live in Chico, CA, and have been part of groups that give and take stuff we no longer need so that others are able to benefit from it. <br/> <span style='font-size:12px !important;'>Photo by <a href='https://unsplash.com/@theshubhamdhage?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Shubham Dhage</a> on <a href='https://unsplash.com/s/photos/facebook?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Unsplash</a></span>",
        link: 'https://www.facebook.com/people/Sathya/100054658068732/',
        img: '/img/facebook.jpg',
      },
      {
        title: 'Linkedin',
        description:
          "Having more than 150 followers and connections on linkedin, I always reach out to people appreciating their efforts to bring good things to the universe. I have also given my first post on Linkedin showing one of my projects. <br/> <span style='font-size:12px !important;'>Photo by <a href='https://unsplash.com/@alexbemore?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Alexander Shatov</a> on <a href='https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Unsplash</a></span>",
        link: 'https://linkedin.com/in/sathyanarayanan-vaithianathan/',
        img: '/img/linkedin.jpg',
      },
    ];
    this.values = [
      {
        title: 'Highly adaptive',
        description:
          'Having a willingness to bend and break habits, I challenge myself when circumstances change. I face problems, pivot among distractions, and politely proceed forward. I consistently focus on improvement. I always believe <strong>mistakes are always an opportunity to learn.</strong>',
        img: 'https://dummyimage.com/720x480/e46ea3/ffffff.png&text=Im+=+possible',
        link: 'https://dummyimage.com/720x480/e46ea3/ffffff.png&text=Im+=+possible',
      },
      {
        title: 'Entrepreneurial spirit',
        description:
          "Beside being a developer, I'm also an entrepreneur since 2018. I started <a href='https://bezzietech.com' target='_blank'>BezzieTech</a> for developing, deploying and maintaining web applications. As an entrepreneur, I always seek growth and understanding, and embraces challenges and opportunites. ",
        img: 'https://dummyimage.com/720x480/1bb2dc/ffffff.png&text=BezzieTech',
        link: 'https://bezzietech.com',
      },
      {
        title: 'Self motivated',
        description:
          'Are you managing a big team? <strong>You never have to worry about how I work!</strong> I got this. With little supervision and direction to the work, I bring perfection and attention to detail. A greater level of individual participation will lead to a better understanding, I believe.',
        img: "https://dummyimage.com/720x480/e46ea3/ffffff.png&text=I+can't+<+I'll+try",
        link: "https://dummyimage.com/720x480/e46ea3/ffffff.png&text=I+can't+<+I'll+try",
      },
    ];
  }

  @Get('')
  @Render('home')
  getStatus() {
    return { projects: this.projects };
  }

  @Get('about-me')
  @Render('aboutme/index')
  getHealth() {
    return { socials: this.socials, values: this.values };
  }

  @Get('services')
  @Render('services/index')
  getServices() {
    return { message: 'hello' };
  }

  @Get('home')
  @Render('home')
  home() {
    return { message: 'hello' };
  }

  @Post('api/contact-us')
  async sendMessage(@Body() mail: any) {
    if (!(mail.email && mail.fullName)) {
      return;
    }
    let transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: parseInt(process.env.MAIL_PORT, 10),
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.MAIL_USERNAME, // generated ethereal user
        pass: process.env.MAIL_PASSWORD, // generated ethereal password
      },
    });

    // send mail with defined transport object
    try {
      let info = await transporter.sendMail({
        from:
          '' +
          `"${mail.fullName || 'No name provided'} 👻"` +
          `${process.env.MAIL_USERNAME}`, // sender address
        to: 'svvsathyanarayanan@gmail.com', // list of receivers
        subject: mail.fullName + ' is trying to reach you from website ✔', // Subject line
        text: mail.subject, // plain text Body
        html:
          '<b> Subject: </b>' +
          mail.subject +
          '. <br/><b> Email: </b>' +
          mail.email +
          '. <br/><b> Message: </b>' +
          mail.message +
          '.</b>',
      });
      console.log('success ', info);
    } catch (err) {
      console.log('error', err);
    }
  }
}
