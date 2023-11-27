const GiftCard = [
  {
    name: "CTConnect - Gift Card 100 ($2.88)",
    title: "Have a chance to win a $100 Voucher!",
    OfferLink: "https://smrturl.co/o/506546/53381034?s1=ctconnect",
    image: "https://i.gyazo.com/328b1ebd82378cbfb9266bc312b8d6d2.png",
  },

  {
    name: "ConsumerTestConnect - Win $100 Doordash Gift Card ($2.56)",
    title: "Finish the Last Request to GET a $100 Doordash Gift Card Now!",
    OfferLink: "https://smrturl.co/o/506546/53426384?s1=ConsumerTestConnect",
    image: "https://i.gyazo.com/aeec72ec17c86f4587d08c4e3307098d.png",
  },

  {
    name: "RewardsAvenue - Youtube Premium Gift Card ($2.24)",
    title:
      "Finish One Last Steps to GET Youtube Premium Gift Card for YOU Now!",
    OfferLink: "https://smrturl.co/o/506546/53426378?s1=RewardsAvenue ",
    image: "https://i.gyazo.com/3f6242ae7b15473dc666cb2f73fbf769.png",
  },

  {
    name: "Primerewardspot - Win $500 Walmart Gift Card ($1.92)",
    title: "Finish a Short Survey and You Can Win with Walmart!",
    OfferLink: "https://smrturl.co/o/506546/53422580?s1=Primerewardspot ",
    image: "https://i.gyazo.com/2d1970b1fdfed912990dc09a0c3dbcca.png",
  },

  {
    name: "PG - Chevron Gift Card ($2.52)",
    title: "$300 Chevron Gas Station Gift Card",
    OfferLink: "https://smrturl.co/o/506546/53359961?s1=PG",
    image: "https://i.gyazo.com/7870c1cb71b780936678e6c06a4149fb.png",
  },

  {
    name: "Amazon.com Gift Card V2 ($2.00)",
    title: "Win a $500 Amazon.com Gift Card now!",
    OfferLink: "https://smrturl.co/o/506546/53286755?s1=Amazon",
    image: "https://i.gyazo.com/5f7351a5489c3f4db86a70ab1c217a71.png",
  },

  {
    name: "CYO - Walmart Gift Card ($2.08)",
    title: "Get a $500 Walmart eGift Card!",
    OfferLink: "https://smrturl.co/o/506546/53313786?s1=CYOWalmart",
    image: "https://i.gyazo.com/58b9b75fe279f091f2b7bf5815b5a7a7.png",
  },

  {
    name: "EDW - Pizza Gift Card ($1.92)",
    title: "Enter for a $25 Pizza Gift Card!",
    OfferLink: "https://smrturl.co/o/506546/53374882?s1=Pizza",
    image: "https://i.gyazo.com/a14f26bd15c30da501662d65e143235e.png",
  },

  {
    name: "PrizeGrab - Win Taco Bell $75 ($2.40)",
    title: "Finish One Last Steps to GET a $75 Taco Bell Gift Card Now!",
    OfferLink: "https://smrturl.co/o/506546/53420274?s1=PrizeGrab ",
    image: "https://i.gyazo.com/44dc13359b0e1ab2eac0c0207e292d33.png",
  },

  {
    name: "Prizegrab - SouthWest 750 ($2.52)",
    title: "Win a $750 SouthWest Airlines Gift Card!",
    OfferLink: "https://smrturl.co/o/506546/53426638?s1=Prizegrab",
    image: "https://i.gyazo.com/e28e5912c6e8a792e4405c1eedeb077e.png",
  },

  {
    name: "CTConnect - iPhone 15 ($2.88)",
    title: "Have a chance to win a brand new iPhone 15!",
    OfferLink: "https://smrturl.co/o/506546/53424937?s1=iPhone",
    image: "https://i.gyazo.com/ceb57dd41119ca984001955e5ee9df1d.png",
  },

  {
    name: "Rewards US - Google Play $100 v2 ($1.80)",
    title: "Your Chance to get a $100 Google Play Gift Card",
    OfferLink: "https://smrturl.co/o/506546/53265173?s1=GooglePlay",
    image: "https://i.gyazo.com/b9c9787069b66d01642ab4f83ac5aa92.png",
  },
];
//gift card data
const giftContainer = document.querySelector(".gift-container");
let giftCard = GiftCard.map((item, index) => {
  return item;
});

let gift = giftCard
  .map((item) => {
    let { image, OfferLink } = item;
    return ` 
          <div class="card">
         
              <div class="img">
              <a href="${OfferLink}" target="_blank"><img src="${image}" class="w-[100%] h-[100%]"/></a> 
              </div> 
               
          </div>
          `;
  })
  .join("");

giftContainer.innerHTML = gift;
//observe
let card = document.querySelectorAll(".card");
let observe = new IntersectionObserver(
  (item) => {
    item.forEach((item) => {
      if (item.isIntersecting) {
        item.target.style.transform = "scale(1)";
      } else {
        item.target.style.transform = "scale(0)";
      }
    });
  },
  { threshold: 0.5 }
);

card.forEach((card) => observe.observe(card));

//observe

let jobsCard = document.querySelectorAll(".jobs");

let jobObserve = new IntersectionObserver(
  (item) => {
    item.forEach((job) => {
      if (job.isIntersecting) {
        job.target.style.transform = "translateX(0)";
        job.target.style.opacity = "1";
      } else {
        job.target.style.transform = "translateX(-200px)";
        job.target.style.opacity = "0";
      }
    });
  },
  { threshold: 0.1 }
);

jobsCard.forEach((jobs) => jobObserve.observe(jobs));

//jobs observe
let give = document.querySelectorAll(".give");
let GiveObserve = new IntersectionObserver(
  (item) => {
    item.forEach((give) => {
      if (give.isIntersecting) {
        give.target.style.opacity = "1";
        give.target.style.transform = "skew(0deg)";
      } else {
        give.target.style.opacity = "0";
        give.target.style.transform = "skew(37deg)";
      }
    });
  },
  { threshold: 0.1 }
);

give.forEach((give) => GiveObserve.observe(give));

//give observe
