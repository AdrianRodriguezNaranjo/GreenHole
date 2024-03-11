export interface MaterialsItems {
    id: number;
    title: string;
    text1: string;
    text2: string;
    image: number;
  }
  
  export const items: MaterialsItems[] = [
    {
      id: 1,
      title: "Plastic",
      text1: "The category include plastic packaging,  that is used in homes, as well as food packaging and what comes from bathrooms (for example, shampoo bottles) along with large plastic films and foam plastic.",
      text2: "Packaging must be empty and bottles without liquid. It is advisable to rinse the packaging so that it does not smell during storage. It is good to reduce the volume in order to make the best use of space.",
      image: 6
    },
    {
      id: 2,
      title: "Paper",
      text1: "Press the packaging tightly together. It saves space and reduces overload. The corrugated cardboard can be printed, plastic-coated and colored. Tapes may be included.",
      text2: "Plastic or food scraps, which reduce the recycling value of the material, should be removed.",
      image: 3
    },
    {
      id: 3,
      title: "Electronic devices",
      text1: "All larger electrical appliances (so-called white goods), television and monitors go into this category. It is important that screens do not break, as harmful substances can then be released into the environment.",
      text2: "Smaller electronic devices are collected as well. Be sure to remove batteries from devices whenever possible and sort them out.",
      image: 4
    },
    {
      id: 4,
      title: "Hazardous waste",
      text1: "This category includes all types of light bulbs, batteries and hazardous waste. Note that it is important that light bulbs do not break, as harmful substances can then be released into the environment.",
      text2: "Batteries from electric cars are not accepted. They must be returned to an authorized recipient of this waste. Medicines are accepted free of charge in all pharmacies.",
      image: 5
    },
    {
      id: 5,
      title: "Metal",
      text1: "Metal is a valuable material that can be recycled over and over again.",
      text2: "Food metal containers belongs to yellow bin and metal accesorries to specialized Clean Point.",
      image: 2
    },
    {
      id: 6,
      title: "Textiles",
      text1: "Clothes must be clean, dry and packed in a plastic bag. Unusable textiles are clarified with other textiles.",
      text2: "It's good to keep the pairs of shoes in bags or tie the laces together so pairs are easily found. It saves labor and effort in sorting and prevents waste.",
      image: 3
    },
    {
      id: 7,
      title: "General Waste",
      text1: "Items that do not fit into other categories. Contains porcelain, mixed waste and food waste. ",
      text2: "Please note that larger items go in a container at recycling centers or Clean points.",
      image: 3
    },
    {
      id: 8,
      title: "Glass",
      text1: "Glass containers must be empty and clean. Porcelain, ceramics or other minerals are not included in this category.",
      text2: "",
      image: 2
    },
  ];
  