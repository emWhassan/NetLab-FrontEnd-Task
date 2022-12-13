import arbeidImage from "../assets/images/arbeid.png"
import faktabokImage from "../assets/images/faktabok.png"
import spacexImage from "../assets/images/spacex.png"

export const tileData = [
  {
    title: "Title 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut facilisis, nibh nec lacinia ultricies",
    type: "info",
    onPress: () => {
     return window.open('https://noa.stami.no/', '_blank');
    }
  },
  {
    title: "Title 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut facilisis, nibh nec lacinia ultricies",
    type: "info",
    onPress: () => {
     return window.open('https://noa.stami.no/', '_blank');
    }
  },
  {
    title: "Title 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut facilisis, nibh nec lacinia ultricies",
    type: "info",
    onPress: () => {
     return window.open('https://noa.stami.no/', '_blank');
    }
  },
  {
    title: "Title 4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut facilisis, nibh nec lacinia ultricies",
    type: "info",
    onPress: () => {
     return window.open('https://noa.stami.no/', '_blank');
    }
  },
  {
    title: "Title 5",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut facilisis, nibh nec lacinia ultricies",
    type: "info",
    onPress: () => {
     return window.open('https://noa.stami.no/', '_blank');
    }
  },
  {
    title: "Title 6",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut facilisis, nibh nec lacinia ultricies",
    type: "success",
    onPress: () => {
     return window.open('https://noa.stami.no/', '_blank');
    }
  }
]

export const pdfsData = [
  {
    title: "Faktabok om arbeidsmiljø og helse 2021 (pdf)",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut facilisis",
    image: faktabokImage,
    onPress: () => {}
  },
  {
    title: "Arbeidsmiljøet i Norge og EU -en sammenlikning",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut facilisis",
    image: arbeidImage,
    onPress: () => {}
  }
]
export const videosData = [
  {
    title: "Fakta om arbeid og helse",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut facilisis, adipiscing elit. Ut facilisis",
    image: spacexImage,
    src: "https://www.youtube.com/embed/UaaF0IgzGSI"
  },
  {
    title: "Fakta om arbeid og helse",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut facilisis, adipiscing elit. Ut facilisis",
    image: spacexImage,
    src: "https://www.youtube.com/embed/Dm_OjZ5gBLA"
  },
]
