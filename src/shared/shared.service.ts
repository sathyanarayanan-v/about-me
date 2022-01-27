import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { loggerInstance } from 'src/logger/index';
import { orderPlacedEmail } from './html';
import * as moment from 'moment';
@Injectable()
export class SharedService {
  constructor() {}
  sendMail = (
    to: string,
    subject: string,
    fromName: string,
    html?: string,
    from: string = 'no-reply@bezzietech.com',
  ) => {
    const mailOptions = {
      from: {
        name: 'Lotus Traders',
        address: from,
      },
      to: to,
      subject,
      html,
    };
    const mailTransport = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: parseInt(process.env.MAIL_PORT, 10),
      secure: process.env.SECURE_MAIL == 'true',
      requireTLS: process.env.REQUIRE_TLS == 'true',
      auth: {
        type: 'login',
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
      },
    });
    mailTransport.verify(function (error, success) {
      if (error) {
        console.log(error);
      } else {
        console.log('Server is ready to take our messages');
      }
    });
    return new Promise<boolean>((resolve, reject) => {
      mailTransport.sendMail(mailOptions, function (error: any, response: any) {
        if (error) {
          loggerInstance.log(
            `Some error occurerd while sending mail. ${error}`,
            'error',
            'Nodemailer',
          );
          reject(false);
        } else {
          console.log(response);
          loggerInstance.log(
            `Mail successfully sent to email - ${to}`,
            'info',
            'Nodemailer',
          );
          resolve(true);
        }
      });
    });
  };

  // private getMappedProducts(item) {
  //   let title = '';
  //   let quantity = '';
  //   let fromDateString =
  //     moment(item.fromDate, 'MM/DD/YYYYThh:mm:ss').format(
  //       'DD MMM YYYY HH:MM A',
  //     ) || '';
  //   let toDateString =
  //     moment(item.toDate, 'MM/DD/YYYYThh:mm:ss').format(
  //       'DD MMM YYYY HH:MM A',
  //     ) || '';
  //   let price = item['productTotal'];
  //   let url = '';

  //   if (item.product) {
  //     title = item.product.title;
  //     quantity = item.quantity.toString();
  //     if (item.product.images && item.product.images.length) {
  //       url = item.product.images[0].url;
  //     }
  //   }
  //   if (item.service) {
  //     title = item.title;
  //     quantity = '1';
  //     if (item.images && item.images.length) {
  //       url = item.images[0].url;
  //     }
  //   }
  //   return {
  //     title,
  //     quantity,
  //     fromDateString,
  //     toDateString,
  //     price,
  //     url,
  //   };
  // }
  // sendOrderPlacedEmail(order: Order) {
  //   const responseModifiedOrder = order.toResponseObject();
  //   const products = responseModifiedOrder.cartItems.map(
  //     this.getMappedProducts,
  //   );
  //   const consumer = {
  //     firstName: order.consumer.firstName,
  //     lastName: order.consumer.lastName,
  //     addressLine1: order.addressLine1,
  //     city: order.city,
  //     state: order.state,
  //     phone: order.consumer.phone,
  //   };
  //   const orderSummary = {
  //     subTotal: responseModifiedOrder.subTotal.toString(),
  //     deliveryCharge: responseModifiedOrder.deliveryCharge.toString(),
  //     tax: '0.0',
  //     total: responseModifiedOrder.totalPrice.toString(),
  //   };

  //   const htmlToSend = orderPlacedEmail(products, consumer, orderSummary);
  //   return this.sendMail(
  //     order.consumer.email,
  //     'Your order has been placed',
  //     'Lotus Event Management',
  //     htmlToSend,
  //   );
  // }
}
