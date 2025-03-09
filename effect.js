function openNav() {
  document.getElementById("sideNav").style.width = "250px";
}

function closeNav() {
  document.getElementById("sideNav").style.width = "0";
}
/*
      Phishing Email Code
*/
//Format: [claims to be, email address, Email Header/title, Email Body, isPhishing: T/F, Email Overview[subject line, sender info, content+language, Links, requests for money/info, summary]]
var currentEmail = -1;
var emailsLeft = 3;
var correctEmails = [false, false, false, false, false];
var EmailList = [
  [
    "Amazon",
    "support@amazvn.com",
    " Urgent: Issue with Your Recent Amazon Order #123-4567890-1234567",
    "Dear Valued Customer,\n \nWe regret to inform you that there has been an issue with your recent order #123-4567890-1234567. \n \nOur system detected a discrepancy that may cause delays in your delivery.\n \nTo resolve the issue and prevent any disruption to your order, please verify your account details by clicking the link below: http://amazxn.com\n\nPlease note, your order will be temporarily on hold until we receive the updated information. If we do not hear from you within 24 hours, we will be forced to cancel your order.\n\nWe apologize for any inconvenience and appreciate your prompt attention to this matter.\n\n\nThank you for choosing Amazon.\n\nSincerely, Amazon Customer Support",
    true,
    [],
  ],
  [
    "FedEx",
    "tracking@fedex.com",
    "Your FedEx Package Delivery Has Been Delayed",
    "Dear Customer,\n\nWe attempted to deliver your package (Tracking Number: #1234567), but were unable to complete the delivery. Possible reasons include:\n\nNo one was available to receive the package\nDelivery location was inaccessible\nAdditional delivery information is needed\nTo reschedule your delivery or update delivery instructions, please visit:\n\nhttps://fedex.com/manage to Manage Delivery Options\n\nIf we do not receive updated instructions, another attempt will be made on the next business day. After multiple failed attempts, your package may be returned to the sender.\n\nThank you for choosing FedEx.\n\nBest,\nFedEx Customer Service",
    false,
  ],
  [
    "PayPal",
    "service@pavpal.com",
    "Invoice #INV-908765 Due - Immediate Action Required",
    "Dear Customer,\n\nAn invoice has been issued to your PayPal account for $652.49 from Wilson Tech Solutions. This payment will be automatically deducted within 24 hours.\n\nInvoice Summary:\n\nInvoice Number: INV-908765\nAmount Due: $652.49\nPayment Status: Pending\nDue Date: February 23, 2025\nIf you did not authorize this transaction, you can cancel it by clicking the link below:\n\nhttps://paypal.invoice.com/inv908765\n\nIf you need assistance, contact PayPal Support immediately at 888-221-1161.\n\nThank you,\nPayPal Billing Team",
    true,
  ],
  [
    "Troy Wallace",
    "troy_wallace@gmail.com",
    "[External] Urgent Request for Gift Cards Before Our Next Meeting",
    "Sorry to spring this on you,\n\nI need a quick favor before our upcoming meeting. I'm tied up in back-to-back calls and won't be able to step out, but I need you to purchase some Amazon gift cards for client appreciation.\n\nCan you pick up $250 worth of gift cards and send me the codes as soon as possible? It's important we have these ready before the meeting. Once you get them, just scratch off the back and email me the codes. You'll be reimbursed.\n\nLet me know once you've done this. I appreciate your help!\n\nBest,\nTroy Wallace\nHead of Buisness Management",
    true,
  ],
  [
    "Grandma Edna",
    "grandma_edna@gmail.com",
    "Snacks for your visit",
    "Hi honey, what snacks would you like for your upcoming visit?",
    false,
  ],
  [
    [
      "The subject of the email said <strong>Urgent</strong> which manipulates you into thinking that if you don't act immediately you will lose your package, and can sometimes put you in a panicked state.",
      "One of the ways we know this is a phishing email is that the email came from support@amaz<strong>v</strong>n.com NOT from support@amaz<strong>o</strong>n.com",
      "The content of this raises a ton of alarms, the email is vauge and does not state what the package is, and the email links you to a website that looks like amazon.com which is bad for 2 different reasons. <br><br>This link goes to <strong>http</strong>://ama<strong>x</strong>n.com, there is usually an S at the end of http which stands for secure which means this site is not secure, additionally there is a typo in the url of amazon.com",
      "This email does not explicitly request information, however most emails like this bring you to a fake login page which sends your information to the hacker",
    ],
    [
      "The subject of the email is ok because it is not urgent and seems likea  normal email",
      "The email is sent from an email ending in <strong>fedex.com</strong> which only the real FedEx has access to",
      "The vaugeness of the email may raise some alarms but, it is not asking for any information<br><br>The link in the email we know is the real FedEx link, so the link is fine",
      "There is no request for money or information, which this combined with all of the other categories tells us that this email is not a phish",
    ],
    [
      "The subject gives a sense of urgency which tips us off and makes us alert about the rest of the email.",
      "The sender information for this email is tricky, scammers do things like this a lot. The email address listed comes from @pa<strong>v</strong>pal.com, the V looks a lot like a Y. <br><br> This alone is a clear sign that it is a phishing email, but lets keep looking for more.",
      "<strong>First lets look at the invoice itself</strong>: This invoice is from Wilson Tech solutions, we don't know if the owner of this email account did work with that company so just the name and dollar amount is not enough to call it a phish. <br><br> <strong>Second lets look at the phone number listed:</strong> If you look it up it is the actual PayPal support number which scammers sometimes use to throw you off their scent. <br><br> <strong>Finally, lets look at the link: </strong> The link in this email may seem innocent at a first glance, but this is another tactic used by scammers that most people do not know about. This link is actually linking to invoice.com and not paypal.com, The scammer would use soemthing a bit more specific as invoice.com is already registered, but this is a tricky scam. You can easily remedy this by running the link through virustotal.com if you have any suspicion, this funcitonality is included in the chrome extension linked on the top bar.",
      "This email is requesting money, but since it is claiming to be from paypal it might be legit. You should be careful around any email requesting money, even if you are expecting it because you never know how advanced a scammer is.",
    ],
    [
      "There is a pretty dead giveaway in the email title, since the title contains <strong>[external]</strong> it is coming from outside the organization which is a major red flag and a sign to immediately delete an email. On top of this there is a sense of urgency in the title which if you think it is from your boss may cause panic.",
      "This email comes from an address ending in <strong>@gmail.com</strong> which is very sketchy for someone that is supposed to be within a company.",
      "This email is claiming to be from your boss which is questionable at this point because of the sender address and the subject line. The request for information is where it really ramps up.",
      "The person claiming to be your boss wants gift cards(super wierd) and wants you to email the codes to him for some reason. By this point this email should have set off all of your alarms as it is an obvious scam.<br><br> Sadly, this is a common scam that a suprising amount of people fall for because they don't treat every email like an investigation.",
    ],
    [
      "The subject is innocent and there is nothing to look at there.",
      "The sender info seems fine, but be careful of emails claiming to be family and always double check sender emails.",
      "The content of this email is comepltely fine, although beware of scammers trying to start a conversation with you and asking for informaiton late into the conversation.",
      "This email is just asking for snack selections which is completely fine and does not raise any alarms.",
    ],
  ],
];
//Email Overview[subject line, sender info, content+language, requests for money/info]
function loadEmail(emailNum) {
  document.getElementsByClassName("mail-content")[0].style.display = "flex";
  if (window.innerWidth < 769) {
    document.getElementsByClassName("mail-side")[0].style.display = "none";
  }
  if (correctEmails[emailNum] == true) {
    var flag = document.getElementById("flag");
    if (flag.classList != "fa-solid fa-flag") {
      flag.classList = "fa-solid fa-flag";
    }
  } else {
    document.getElementById("flag").classList = "fa-regular fa-flag";
  }
  currentEmail = emailNum;
  hideBanner();
  document.getElementsByClassName("flag")[0].style.display = "flex";
  document.getElementById("pfp").style.display = "flex";
  document.getElementById("name").innerText = "From: " + EmailList[emailNum][0];
  document.getElementById("email").innerText =
    "Reply-To: " + EmailList[emailNum][1];
  document.getElementById("title").innerText = EmailList[emailNum][2];
  document.getElementById("content").innerText = EmailList[emailNum][3];
}
function checkFlag() {
  if (currentEmail != -1) {
    document.getElementsByClassName("mail-banner")[0].style.display = "block";
    document.getElementById("mail-button").style.display = "flex";
    if (EmailList[currentEmail][4] == true) {
      //Correct Banner
      emailsLeft -= 1;
      document.getElementsByClassName("mail-banner")[0].style.border =
        "4px solid green";
      document.getElementById("email-" + currentEmail).style.background =
        "lightgreen";
      correctEmails[currentEmail] = true;
      loadBanner();
      if (emailsLeft < 1) {
        alert("activity complete!");
      }
    } else {
      //Incorrect Banner
      document.getElementsByClassName("mail-banner")[0].style.border =
        "4px solid red";
      loadBanner();
    }
  }
}
function loadBanner() {
  var elementList = document.getElementsByClassName("mail-banner-body");
  var textList = EmailList[5];
  for (var i = 0; i < elementList.length; i++) {
    elementList[i].innerHTML = textList[currentEmail][i];
  }
}
function hideBanner() {
  document.getElementsByClassName("mail-banner")[0].style.display = "none";
}
function toggleFlag() {
  var flag = document.getElementById("flag");
  if (flag.classList != "fa-solid fa-flag") {
    flag.classList = "fa-solid fa-flag";
    checkFlag();
  }
}

function backArrow() {
  document.getElementsByClassName("mail-side")[0].style.display = "block";
  document.getElementsByClassName("mail-content")[0].style.display = "none";
}
