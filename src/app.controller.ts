import { AuthGuard } from '@nestjs/passport';
import { Body, Controller, Get, Post, Render } from '@nestjs/common';

@Controller()
export class AppController {
  projects: Array<any>;
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
  }
  @Get('')
  @Render('home')
  getStatus() {
    return { projects: this.projects };
  }

  @Get('products')
  @Render('products/index')
  getHealth() {
    return { message: 'hello' };
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
  sendMessage(@Body() mail) {
    console.log(mail);
  }
}
