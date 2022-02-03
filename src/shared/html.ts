const resetPasswordEmail = `
<!doctype html>
<html lang="en-US">

<head>
    <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
    <title>Reset Password Email - %username%</title>
    <meta name="description" content="Reset Password Email - %username%.">
    <style type="text/css">
        a:hover {text-decoration: underline !important;}
    </style>
</head>

<body marginheight="0" topmargin="0" marginwidth="0" style="margin: 0px; background-color: #f2f3f8;" leftmargin="0">
    <!--100% body table-->
    <table cellspacing="0" border="0" cellpadding="0" width="100%" bgcolor="#f2f3f8"
        style="@import url(https://fonts.googleapis.com/css?family=Rubik:300,400,500,700|Open+Sans:300,400,600,700); font-family: 'Open Sans', sans-serif;">
        <tr>
            <td>
                <table style="background-color: #f2f3f8; max-width:670px;  margin:0 auto;" width="100%" border="0"
                    align="center" cellpadding="0" cellspacing="0">
                    <tr>
                        <td style="height:80px;">&nbsp;</td>
                    </tr>
                    <tr>
                        <td style="text-align:center;">
                          <a href="https://lotusdecorandrental.com" title="logo" target="_blank">
                            <img width="200" height="200" src="https://lotusdecoreandrental.com/logo.png" title="logo" alt="logo">
                          </a>
                        </td>
                    </tr>
                    <tr>
                        <td style="height:20px;">&nbsp;</td>
                    </tr>
                    <tr>
                        <td>
                            <table width="95%" border="0" align="center" cellpadding="0" cellspacing="0"
                                style="max-width:670px;background:#fff; border-radius:3px; text-align:center;-webkit-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);-moz-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);box-shadow:0 6px 18px 0 rgba(0,0,0,.06);">
                                <tr>
                                    <td style="height:40px;">&nbsp;</td>
                                </tr>
                                <tr>
                                    <td style="padding:0 35px;">
                                        <h1 style="color:#1e1e2d; font-weight:500; margin:0;font-size:32px;font-family:'Rubik',sans-serif;">You have
                                            requested to reset your password</h1>
                                        <span
                                            style="display:inline-block; vertical-align:middle; margin:29px 0 26px; border-bottom:1px solid #cecece; width:100px;"></span>
                                        <p style="color:#455056; font-size:15px;line-height:24px; margin:0;">
                                            We cannot simply send you your old password.
                                           A new and strong password has been generated for you. To login please use this as your new password
                                        </p>
                                        <p 
                                            style="background:#E9C8DD;text-decoration:none !important; font-weight:500; margin-top:35px; color:#fff;text-transform:none; font-size:14px;padding:10px 24px;display:inline-block;border-radius:10px;color:black;">%password%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="height:40px;">&nbsp;</td>
                                </tr>
                            </table>
                        </td>
                    <tr>
                        <td style="height:20px;">&nbsp;</td>
                    </tr>
                    <tr>
                        <td style="text-align:center;">
                            <p style="font-size:14px; color:rgba(69, 80, 86, 0.7411764705882353); line-height:18px; margin:0 0 0;">&copy; <strong>www.bezzietech.com</strong></p>
                        </td>
                    </tr>
                    <tr>
                        <td style="height:80px;">&nbsp;</td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
    <!--/100% body table-->
</body>

</html>`;

const orderPlacedEmailTemplate = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html
  xmlns="http://www.w3.org/1999/xhtml"
  xmlns:v="urn:schemas-microsoft-com:vml"
  xmlns:o="urn:schemas-microsoft-com:office:office"
>
  <head>
    <!--[if gte mso 9]>
      <xml>
        <o:OfficeDocumentSettings>
          <o:AllowPNG />
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
      </xml>
    <![endif]-->
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="x-apple-disable-message-reformatting" />
    <!--[if !mso]><!-->
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <!--<![endif]-->
    <title></title>

    <style type="text/css">
      table,
      td {
        color: #000000;
      }
      @media (max-width: 480px) {
        #u_content_menu_1 .v-padding {
          padding: 5px 35px !important;
        }
        #u_content_menu_2 .v-padding {
          padding: 5px 38px 5px 32px !important;
        }
        #u_content_menu_4 .v-padding {
          padding: 5px 40px 5px 50px !important;
        }
        #u_content_menu_3 .v-padding {
          padding: 5px 40px 5px 55px !important;
        }
      }
      @media only screen and (min-width: 660px) {
        .u-row {
          width: 640px !important;
        }
        .u-row .u-col {
          vertical-align: top;
        }

        .u-row .u-col-100 {
          width: 640px !important;
        }
      }

      @media (max-width: 660px) {
        .u-row-container {
          max-width: 100% !important;
          padding-left: 0px !important;
          padding-right: 0px !important;
        }
        .u-row .u-col {
          min-width: 320px !important;
          max-width: 100% !important;
          display: block !important;
        }
        .u-row {
          width: calc(100% - 40px) !important;
        }
        .u-col {
          width: 100% !important;
        }
        .u-col > div {
          margin: 0 auto;
        }
      }
      body {
        margin: 0;
        padding: 0;
      }

      table,
      tr,
      td {
        vertical-align: top;
        border-collapse: collapse;
      }

      p {
        margin: 0;
      }

      .ie-container table,
      .mso-container table {
        table-layout: fixed;
      }

      * {
        line-height: inherit;
      }

      a[x-apple-data-detectors="true"] {
        color: inherit !important;
        text-decoration: none !important;
      }
    </style>
  </head>

  <body
    class="clean-body u_body"
    style="
      margin: 0;
      padding: 0;
      -webkit-text-size-adjust: 100%;
      background-color: #e7e7e7;
      color: #000000;
    "
  >
    <!--[if IE]><div class="ie-container"><![endif]-->
    <!--[if mso]><div class="mso-container"><![endif]-->
    <table
      style="
        border-collapse: collapse;
        table-layout: fixed;
        border-spacing: 0;
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
        vertical-align: top;
        min-width: 320px;
        margin: 0 auto;
        background-color: #e7e7e7;
        width: 100%;
      "
      cellpadding="0"
      cellspacing="0"
    >
      <tbody>
        <tr style="vertical-align: top">
          <td
            style="
              word-break: break-word;
              border-collapse: collapse !important;
              vertical-align: top;
            "
          >
            <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #e7e7e7;"><![endif]-->

            <div
              class="u-row-container"
              style="padding: 20px 0px 0px; background-color: transparent"
            >
              <div
                class="u-row"
                style="
                  margin: 0 auto;
                  min-width: 320px;
                  max-width: 640px;
                  overflow-wrap: break-word;
                  word-wrap: break-word;
                  word-break: break-word;
                  background-color: #ffffff;
                "
              >
                <div
                  style="
                    border-collapse: collapse;
                    display: table;
                    width: 100%;
                    background-color: transparent;
                  "
                >
                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 20px 0px 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:640px;"><tr style="background-color: #ffffff;"><![endif]-->

                  <!--[if (mso)|(IE)]><td align="center" width="640" style="width: 640px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                  <div
                    class="u-col u-col-100"
                    style="
                      max-width: 320px;
                      min-width: 640px;
                      display: table-cell;
                      vertical-align: top;
                    "
                  >
                    <div style="width: 100% !important">
                      <!--[if (!mso)&(!IE)]><!--><div
                        style="
                          padding: 0px;
                          border-top: 0px solid transparent;
                          border-left: 0px solid transparent;
                          border-right: 0px solid transparent;
                          border-bottom: 0px solid transparent;
                        "
                      ><!--<![endif]-->
                        <table
                          style="font-family: arial, helvetica, sans-serif"
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          border="0"
                        >
                          <tbody>
                            <tr>
                              <td
                                style="
                                  overflow-wrap: break-word;
                                  word-break: break-word;
                                  padding: 0px;
                                  font-family: arial, helvetica, sans-serif;
                                "
                                align="left"
                              >
                                <table
                                  width="100%"
                                  cellpadding="0"
                                  cellspacing="0"
                                  border="0"
                                >
                                  <tr>
                                    <td
                                      style="
                                        padding-right: 0px;
                                        padding-left: 0px;
                                      "
                                      align="center"
                                    >
                                      <img
                                        align="center"
                                        border="0"
                                        src="https://lotusdecoreandrental.com/logo.png"
                                        alt="Image"
                                        title="Image"
                                        style="
                                          outline: none;
                                          text-decoration: none;
                                          -ms-interpolation-mode: bicubic;
                                          clear: both;
                                          display: inline-block !important;
                                          border: none;
                                          height: auto;
                                          float: none;
                                          width: 33%;
                                          max-width: 211.2px;
                                        "
                                        width="211.2"
                                      />
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <!--[if (!mso)&(!IE)]><!-->
                      </div>
                      <!--<![endif]-->
                    </div>
                  </div>
                  <!--[if (mso)|(IE)]></td><![endif]-->
                  <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                </div>
              </div>
            </div>

            <div
              class="u-row-container"
              style="padding: 0px; background-color: transparent"
            >
              <div
                class="u-row"
                style="
                  margin: 0 auto;
                  min-width: 320px;
                  max-width: 640px;
                  overflow-wrap: break-word;
                  word-wrap: break-word;
                  word-break: break-word;
                  background-color: #ffffff;
                "
              >
                <div
                  style="
                    border-collapse: collapse;
                    display: table;
                    width: 100%;
                    background-color: transparent;
                  "
                >
                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:640px;"><tr style="background-color: #ffffff;"><![endif]-->

                  <!--[if (mso)|(IE)]><td align="center" width="640" style="width: 640px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                  <div
                    class="u-col u-col-100"
                    style="
                      max-width: 320px;
                      min-width: 640px;
                      display: table-cell;
                      vertical-align: top;
                    "
                  >
                    <div style="width: 100% !important">
                      <!--[if (!mso)&(!IE)]><!--><div
                        style="
                          padding: 0px;
                          border-top: 0px solid transparent;
                          border-left: 0px solid transparent;
                          border-right: 0px solid transparent;
                          border-bottom: 0px solid transparent;
                        "
                      ><!--<![endif]-->
                        <table
                          style="font-family: arial, helvetica, sans-serif"
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          border="0"
                        >
                          <tbody>
                            <tr>
                              <td
                                style="
                                  overflow-wrap: break-word;
                                  word-break: break-word;
                                  padding: 0px 10px 10px;
                                  font-family: arial, helvetica, sans-serif;
                                "
                                align="left"
                              >
                                <table
                                  height="0px"
                                  align="center"
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  width="100%"
                                  style="
                                    border-collapse: collapse;
                                    table-layout: fixed;
                                    border-spacing: 0;
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    vertical-align: top;
                                    border-top: 3px solid #bbbbbb;
                                    -ms-text-size-adjust: 100%;
                                    -webkit-text-size-adjust: 100%;
                                  "
                                >
                                  <tbody>
                                    <tr style="vertical-align: top">
                                      <td
                                        style="
                                          word-break: break-word;
                                          border-collapse: collapse !important;
                                          vertical-align: top;
                                          font-size: 0px;
                                          line-height: 0px;
                                          mso-line-height-rule: exactly;
                                          -ms-text-size-adjust: 100%;
                                          -webkit-text-size-adjust: 100%;
                                        "
                                      >
                                        <span>&#160;</span>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <table
                          style="font-family: arial, helvetica, sans-serif"
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          border="0"
                        >
                          <tbody>
                            <tr>
                              <td
                                style="
                                  overflow-wrap: break-word;
                                  word-break: break-word;
                                  padding: 40px 10px 20px;
                                  font-family: arial, helvetica, sans-serif;
                                "
                                align="left"
                              >
                                <table
                                  width="100%"
                                  cellpadding="0"
                                  cellspacing="0"
                                  border="0"
                                >
                                  <tr>
                                    <td
                                      style="
                                        padding-right: 0px;
                                        padding-left: 0px;
                                      "
                                      align="center"
                                    >
                                      <img
                                        align="center"
                                        border="0"
                                        src="https://img.bayengage.com/assets/1613615720006-tick (1).jpg"
                                        alt="Image"
                                        title="Image"
                                        style="
                                          outline: none;
                                          text-decoration: none;
                                          -ms-interpolation-mode: bicubic;
                                          clear: both;
                                          display: inline-block !important;
                                          border: none;
                                          height: auto;
                                          float: none;
                                          width: 100%;
                                          max-width: 106px;
                                        "
                                        width="106"
                                      />
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <table
                          style="font-family: arial, helvetica, sans-serif"
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          border="0"
                        >
                          <tbody>
                            <tr>
                              <td
                                style="
                                  overflow-wrap: break-word;
                                  word-break: break-word;
                                  padding: 20px 10px 10px;
                                  font-family: arial, helvetica, sans-serif;
                                "
                                align="left"
                              >
                                <div
                                  style="
                                    line-height: 140%;
                                    text-align: left;
                                    word-wrap: break-word;
                                  "
                                >
                                  <p
                                    style="
                                      font-size: 14px;
                                      line-height: 140%;
                                      text-align: center;
                                    "
                                  >
                                    <span
                                      style="
                                        font-size: 18px;
                                        line-height: 25.2px;
                                        color: #4a4a4a;
                                      "
                                      ><strong
                                        >Thank you for placing your order
                                      </strong></span
                                    >
                                  </p>
                                  <p
                                    style="
                                      font-size: 14px;
                                      line-height: 140%;
                                      text-align: center;
                                    "
                                  >
                                    <span
                                      style="
                                        font-size: 18px;
                                        line-height: 25.2px;
                                        color: #4a4a4a;
                                      "
                                      ><strong>with our store!</strong></span
                                    >
                                  </p>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <table
                          style="font-family: arial, helvetica, sans-serif"
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          border="0"
                        >
                          <tbody>
                            <tr>
                              <td
                                style="
                                  overflow-wrap: break-word;
                                  word-break: break-word;
                                  padding: 10px 10px 20px;
                                  font-family: arial, helvetica, sans-serif;
                                "
                                align="left"
                              >
                                <div
                                  style="
                                    line-height: 140%;
                                    text-align: left;
                                    word-wrap: break-word;
                                  "
                                >
                                  <p
                                    style="
                                      font-size: 14px;
                                      line-height: 140%;
                                      text-align: center;
                                    "
                                  >
                                    <span
                                      style="
                                        font-size: 12px;
                                        line-height: 16.8px;
                                      "
                                      ><strong
                                        ><span
                                          style="
                                            color: #4a4a4a;
                                            line-height: 16.8px;
                                            font-size: 12px;
                                          "
                                          >This email is to confirm your recent
                                          order</span
                                        ></strong
                                      ></span
                                    >
                                  </p>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <!--[if (!mso)&(!IE)]><!-->
                      </div>
                      <!--<![endif]-->
                    </div>
                  </div>
                  <!--[if (mso)|(IE)]></td><![endif]-->
                  <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                </div>
              </div>
            </div>

            <div
              class="u-row-container"
              style="padding: 0px; background-color: transparent"
            >
              <div
                class="u-row"
                style="
                  margin: 0 auto;
                  min-width: 320px;
                  max-width: 640px;
                  overflow-wrap: break-word;
                  word-wrap: break-word;
                  word-break: break-word;
                  background-color: #000000;
                "
              >
                <div
                  style="
                    border-collapse: collapse;
                    display: table;
                    width: 100%;
                    background-color: transparent;
                  "
                >
                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:640px;"><tr style="background-color: #000000;"><![endif]-->

                  <!--[if (mso)|(IE)]><td align="center" width="640" style="width: 640px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                  <div
                    class="u-col u-col-100"
                    style="
                      max-width: 320px;
                      min-width: 640px;
                      display: table-cell;
                      vertical-align: top;
                    "
                  >
                    <div style="width: 100% !important">
                      <!--[if (!mso)&(!IE)]><!--><div
                        style="
                          padding: 0px;
                          border-top: 0px solid transparent;
                          border-left: 0px solid transparent;
                          border-right: 0px solid transparent;
                          border-bottom: 0px solid transparent;
                        "
                      ><!--<![endif]-->
                        <table
                          id="u_content_menu_1"
                          style="font-family: arial, helvetica, sans-serif"
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          border="0"
                        >
                          <tbody>
                            <tr>
                              <td
                                style="
                                  overflow-wrap: break-word;
                                  word-break: break-word;
                                  padding: 10px;
                                  font-family: arial, helvetica, sans-serif;
                                "
                                align="left"
                              >
                                <div class="menu" style="text-align: center">
                                  <!--[if (mso)|(IE)]><table role="presentation" border="0" cellpadding="0" cellspacing="0" align="center"><tr><![endif]-->

                                  <!--[if (mso)|(IE)]><td style="padding:5px 110px"><![endif]-->

                                  <span
                                    style="
                                      padding: 5px 110px;
                                      display: inline-block;
                                      color: #ced4d9;
                                      font-family: arial black, avant garde,
                                        arial;
                                      font-size: 15px;
                                    "
                                    class="v-padding"
                                  >
                                    Products
                                  </span>

                                  <!--[if (mso)|(IE)]></td><![endif]-->

                                  <!--[if (mso)|(IE)]><td style="padding:5px 110px"><![endif]-->

                                  <span
                                    style="
                                      padding: 5px 110px;
                                      display: inline-block;
                                      color: #ced4d9;
                                      font-family: arial black, avant garde,
                                        arial;
                                      font-size: 15px;
                                    "
                                    class="v-padding"
                                  >
                                    Price
                                  </span>

                                  <!--[if (mso)|(IE)]></td><![endif]-->

                                  <!--[if (mso)|(IE)]></tr></table><![endif]-->
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <!--[if (!mso)&(!IE)]><!-->
                      </div>
                      <!--<![endif]-->
                    </div>
                  </div>
                  <!--[if (mso)|(IE)]></td><![endif]-->
                  <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                </div>
              </div>
            </div>

            <div
              class="u-row-container"
              style="padding: 0px; background-color: transparent"
            >
              <div
                class="u-row"
                style="
                  margin: 0 auto;
                  min-width: 320px;
                  max-width: 640px;
                  overflow-wrap: break-word;
                  word-wrap: break-word;
                  word-break: break-word;
                  background-color: #ffffff;
                "
              >
                <div
                  style="
                    border-collapse: collapse;
                    display: table;
                    width: 100%;
                    background-color: transparent;
                  "
                >
                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:640px;"><tr style="background-color: #ffffff;"><![endif]-->

                  <!--[if (mso)|(IE)]><td align="center" width="640" style="width: 640px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                  <div
                    class="u-col u-col-100"
                    style="
                      max-width: 320px;
                      min-width: 640px;
                      display: table-cell;
                      vertical-align: top;
                    "
                  >
                    <div style="width: 100% !important">
                      <!--[if (!mso)&(!IE)]><!--><div
                        style="
                          padding: 0px;
                          border-top: 0px solid transparent;
                          border-left: 0px solid transparent;
                          border-right: 0px solid transparent;
                          border-bottom: 0px solid transparent;
                        "
                      ><!--<![endif]-->
                        %productList%

                        <table
                          style="font-family: arial, helvetica, sans-serif"
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          border="0"
                        >
                          <tbody>
                            <tr>
                              <td
                                style="
                                  overflow-wrap: break-word;
                                  word-break: break-word;
                                  padding: 10px;
                                  font-family: arial, helvetica, sans-serif;
                                "
                                align="left"
                              >
                                <table
                                  height="0px"
                                  align="center"
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  width="100%"
                                  style="
                                    border-collapse: collapse;
                                    table-layout: fixed;
                                    border-spacing: 0;
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    vertical-align: top;
                                    border-top: 2px solid #bbbbbb;
                                    -ms-text-size-adjust: 100%;
                                    -webkit-text-size-adjust: 100%;
                                  "
                                >
                                  <tbody>
                                    <tr style="vertical-align: top">
                                      <td
                                        style="
                                          word-break: break-word;
                                          border-collapse: collapse !important;
                                          vertical-align: top;
                                          font-size: 0px;
                                          line-height: 0px;
                                          mso-line-height-rule: exactly;
                                          -ms-text-size-adjust: 100%;
                                          -webkit-text-size-adjust: 100%;
                                        "
                                      >
                                        <span>&#160;</span>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <table
                          id="u_content_menu_3"
                          style="font-family: arial, helvetica, sans-serif"
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          border="0"
                        >
                          <tbody>
                            <tr>
                              <td
                                style="
                                  overflow-wrap: break-word;
                                  word-break: break-word;
                                  padding: 20px 10px;
                                  font-family: arial, helvetica, sans-serif;
                                "
                                align="left"
                              >
                                <div class="menu" style="text-align: center">
                                  <!--[if (mso)|(IE)]><table role="presentation" border="0" cellpadding="0" cellspacing="0" align="center"><tr><![endif]-->

                                  <!--[if (mso)|(IE)]><td style="padding:5px 120px 5px 127px"><![endif]-->

                                  <span
                                    style="
                                      padding: 5px 120px 5px 127px;
                                      display: inline-block;
                                      color: #444444;
                                      font-family: arial, helvetica, sans-serif;
                                      font-size: 15px;
                                    "
                                    class="v-padding"
                                  >
                                    TOTAL
                                  </span>

                                  <!--[if (mso)|(IE)]></td><![endif]-->

                                  <!--[if (mso)|(IE)]><td style="padding:5px 120px 5px 127px"><![endif]-->

                                  <span
                                    style="
                                      padding: 5px 120px 5px 127px;
                                      display: inline-block;
                                      color: #444444;
                                      font-family: arial, helvetica, sans-serif;
                                      font-size: 15px;
                                    "
                                    class="v-padding"
                                  >
                                    $%total%
                                  </span>

                                  <!--[if (mso)|(IE)]></td><![endif]-->

                                  <!--[if (mso)|(IE)]></tr></table><![endif]-->
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <table
                          style="font-family: arial, helvetica, sans-serif"
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          border="0"
                        >
                          <tbody>
                            <tr>
                              <td
                                style="
                                  overflow-wrap: break-word;
                                  word-break: break-word;
                                  padding: 10px 10px 20px;
                                  font-family: arial, helvetica, sans-serif;
                                "
                                align="left"
                              >
                                <table
                                  height="0px"
                                  align="center"
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  width="100%"
                                  style="
                                    border-collapse: collapse;
                                    table-layout: fixed;
                                    border-spacing: 0;
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    vertical-align: top;
                                    border-top: 2px solid #bbbbbb;
                                    -ms-text-size-adjust: 100%;
                                    -webkit-text-size-adjust: 100%;
                                  "
                                >
                                  <tbody>
                                    <tr style="vertical-align: top">
                                      <td
                                        style="
                                          word-break: break-word;
                                          border-collapse: collapse !important;
                                          vertical-align: top;
                                          font-size: 0px;
                                          line-height: 0px;
                                          mso-line-height-rule: exactly;
                                          -ms-text-size-adjust: 100%;
                                          -webkit-text-size-adjust: 100%;
                                        "
                                      >
                                        <span>&#160;</span>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <table
                          style="font-family: arial, helvetica, sans-serif"
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          border="0"
                        >
                          <tbody>
                            <tr>
                              <td
                                style="
                                  overflow-wrap: break-word;
                                  word-break: break-word;
                                  padding: 20px 20px 40px;
                                  font-family: arial, helvetica, sans-serif;
                                "
                                align="left"
                              >
                                <div
                                  style="
                                    line-height: 140%;
                                    text-align: left;
                                    word-wrap: break-word;
                                  "
                                >
                                  <p
                                    style="
                                      font-size: 14px;
                                      line-height: 140%;
                                      text-align: center;
                                    "
                                  >
                                    This email was sent to
                                    <span
                                      style="
                                        color: #000000;
                                        font-size: 14px;
                                        line-height: 19.6px;
                                      "
                                      ><span
                                        style="
                                          font-size: 14px;
                                          line-height: 19.6px;
                                        "
                                        >%firstname% %lastname%</span
                                      >.
                                    </span>
                                  </p>
                                  <p
                                    style="
                                      font-size: 14px;
                                      line-height: 140%;
                                      text-align: center;
                                    "
                                  >
                                    To ensure delivery to your inbox (not bulk
                                    or junk folders), you can add
                                    <a
                                      style="
                                        color: #e03e2d;
                                        font-size: 14px;
                                        line-height: 19.6px;
                                        text-decoration: none;
                                      "
                                      href="mailto:no-reply@bezzietech.com"
                                      >no-reply@bezzietech.com</a
                                    >
                                    to your address book or safe list.
                                  </p>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <!--[if (!mso)&(!IE)]><!-->
                      </div>
                      <!--<![endif]-->
                    </div>
                  </div>
                  <!--[if (mso)|(IE)]></td><![endif]-->
                  <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                </div>
              </div>
            </div>

            <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
          </td>
        </tr>
      </tbody>
    </table>
    <!--[if mso]></div><![endif]-->
    <!--[if IE]></div><![endif]-->
  </body>
</html>
`;

export function getResetPasswordMail(username: string, password: string) {
  return resetPasswordEmail
    .replace('%username%', username)
    .replace('%password%', password);
}

export function orderPlacedEmail(
  products: Array<{
    title: string;
    quantity: string;
    fromDateString: string;
    toDateString: string;
    price: string;
    url: string;
  }>,
  consumer: {
    firstName: string;
    lastName: string;
    addressLine1: string;
    city: string;
    state: string;
    phone: string;
  },
  orderSummary: {
    subTotal: string;
    deliveryCharge: string;
    tax: string;
    total: string;
  },
) {
  let orders = '';
  for (let i = 0; i < products.length; i++) {
    orders += `<table
                          id="u_content_menu_2"
                          style="font-family: arial, helvetica, sans-serif"
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          border="0"
                        >
                          <tbody>
                            <tr>
                              <td
                                style="
                                  overflow-wrap: break-word;
                                  word-break: break-word;
                                  padding: 20px 10px;
                                  font-family: arial, helvetica, sans-serif;
                                "
                                align="left"
                              >
                                <div class="menu" style="text-align: center">
                                  <!--[if (mso)|(IE)]><table role="presentation" border="0" cellpadding="0" cellspacing="0" align="center"><tr><![endif]-->

                                  <!--[if (mso)|(IE)]><td style="padding:5px 115px 5px 105px"><![endif]-->

                                  <span
                                    style="
                                      padding: 5px 115px 5px 105px;
                                      display: inline-block;
                                      color: #444444;
                                      font-family: arial, helvetica, sans-serif;
                                      font-size: 15px;
                                    "
                                    class="v-padding"
                                  >
                                    ${products[i].quantity} X ${
      products[i].title
    }
                                  </span>

                                  <!--[if (mso)|(IE)]></td><![endif]-->

                                  <!--[if (mso)|(IE)]><td style="padding:5px 115px 5px 105px"><![endif]-->

                                  <span
                                    style="
                                      padding: 5px 115px 5px 105px;
                                      display: inline-block;
                                      color: #444444;
                                      font-family: arial, helvetica, sans-serif;
                                      font-size: 15px;
                                    "
                                    class="v-padding"
                                  >
                                    $${
                                      parseFloat(products[i].price) *
                                      parseInt(products[i].quantity)
                                    }
                                  </span>

                                  <!--[if (mso)|(IE)]></td><![endif]-->

                                  <!--[if (mso)|(IE)]></tr></table><![endif]-->
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>`;
  }
  orders += `<table
                          id="u_content_menu_2"
                          style="font-family: arial, helvetica, sans-serif"
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          border="0"
                        >
                          <tbody>
                            <tr>
                              <td
                                style="
                                  overflow-wrap: break-word;
                                  word-break: break-word;
                                  padding: 20px 10px;
                                  font-family: arial, helvetica, sans-serif;
                                "
                                align="left"
                              >
                                <div class="menu" style="text-align: center">
                                  <!--[if (mso)|(IE)]><table role="presentation" border="0" cellpadding="0" cellspacing="0" align="center"><tr><![endif]-->

                                  <!--[if (mso)|(IE)]><td style="padding:5px 115px 5px 105px"><![endif]-->

                                  <span
                                    style="
                                      padding: 5px 115px 5px 105px;
                                      display: inline-block;
                                      color: #444444;
                                      font-family: arial, helvetica, sans-serif;
                                      font-size: 15px;
                                    "
                                    class="v-padding"
                                  >
                                    Delivery

                                  </span>

                                  <!--[if (mso)|(IE)]></td><![endif]-->

                                  <!--[if (mso)|(IE)]><td style="padding:5px 115px 5px 105px"><![endif]-->

                                  <span
                                    style="
                                      padding: 5px 115px 5px 105px;
                                      display: inline-block;
                                      color: #444444;
                                      font-family: arial, helvetica, sans-serif;
                                      font-size: 15px;
                                    "
                                    class="v-padding"
                                  >
                                    $${orderSummary.deliveryCharge}
                                  </span>

                                  <!--[if (mso)|(IE)]></td><![endif]-->

                                  <!--[if (mso)|(IE)]></tr></table><![endif]-->
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>`;

  let order = orderPlacedEmailTemplate
    .replace('%productList%', orders)
    .replace('%firstname%', consumer.firstName)
    .replace('%lastname%', consumer.lastName)
    .replace('%addressLine1%', consumer.addressLine1)
    .replace('%city%', consumer.city)
    .replace('%phone%', consumer.phone)
    .replace('%subTotal%', orderSummary.subTotal)
    .replace('%deliveryCharge%', orderSummary.deliveryCharge)
    .replace('%tax%', orderSummary.tax)
    .replace('%total%', orderSummary.total);

  return order;
}
