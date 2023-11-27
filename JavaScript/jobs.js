const amazon = [
  {
    name: "Fulfillment Center Associate",
    image:
      "https://m.media-amazon.com/images/G/01/wfs/Hero/US_HP_FC_Tile_800x500._CB1671664519_.jpg",
    offerLink: "https://smrturl.co/o/506546/53422580?s1=Primerewardspot",
  },

  {
    name: "Sortation Center Associate",
    image:
      "https://m.media-amazon.com/images/G/01/wfs/Hero/US_HP_SC_Tile_800x500._CB1671664519_.jpg",
    offerLink: "https://smrturl.co/o/506546/53426378?s1=RewardsAvenue ",
  },

  {
    name: "Delivery Station Associate",
    image:
      "https://m.media-amazon.com/images/G/01/wfs/Hero/US_HP_DS_Tile_800x500._CB1671664519_.jpg",
    offerLink: "https://smrturl.co/o/506546/53381034?s1=ctconnect",
  },

  {
    name: "XL Warehouse Associate",
    image:
      "https://m.media-amazon.com/images/G/01/wfs/Hero/US_HP_XL_Tile_800x500._CB1671664519_.jpg",
    offerLink: "https://smrturl.co/o/506546/53286755?s1=Amazon",
  },

  {
    name: "Distribution Center Associate",
    image:
      "https://m.media-amazon.com/images/G/01/wfs/Hero/US_HP_DCA_Tile_800x500._CB1671664519_.jpg",
    offerLink: "https://smrturl.co/o/506546/53374882?s1=Pizza",
  },

  {
    name: "Grocery Warehouse Associate",
    image:
      "https://m.media-amazon.com/images/G/01/wfs/Hero/US_HP_GroceryWarehouse_Tile_800x500._CB1671664519_.jpg",
    offerLink: "https://smrturl.co/o/506546/53313786?s1=CYOWalmart",
  },

  {
    name: "Amazon Air Associate",
    image:
      "https://m.media-amazon.com/images/G/01/wfs/Hero/US_HP_Air_Tile_800x500._CB1671664519_.jpg",
    offerLink: "https://smrturl.co/o/506546/53286755?s1=Amazon",
  },

  {
    name: "Amazon DSP Delivery Associate",
    image:
      "https://m.media-amazon.com/images/G/01/wfs/Hero/US_HP_DSP_Tile_800x500._CB1671664519_.jpg",
    offerLink: "https://smrturl.co/o/506546/53359961?s1=PG",
  },
];

const amazonData = amazon.map((item) => {
  return item;
});

let popAmazons = document.querySelector(".pop-amazons");
popAmazons.innerHTML = amazonData
  .map((item) => {
    return `
    
    <div class="jobs-card">
    <div class="w-[100%] h-[100px]">
      <img
        class="w-[100%] h-[100%]"
        src="${item.image}"
        alt=""
      />
    </div>

    <p>${item.name}</p>
    <p class="jobs-btn"><a href="${item.offerLink}" target="_blank">Apply</a> </p>
  </div>
    
    `;
  })
  .join("");
