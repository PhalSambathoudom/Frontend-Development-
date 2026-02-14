import lioMessi from "./assets/Messi.jpg";
import cristianRonaldo from "./assets/CR7.jpg";
import neymarJR from "./assets/Neymar.jpg";
import robertLewandoski from "./assets/Lewandoski.jpg";
import gianluigiBuffon from "./assets/Buffon.jpg";

export const footballers = [
  {
    id: 1,
    name: "Lionel Messi",
    club: "Inter Miami",
    position: "Forward",
    image: {
      src: lioMessi,
      alt: "Inter Miami Heart.",
    },
  },
  {
    id: 2,
    name: "Cristiano Ronaldo",
    club: "Al Nassr",
    position: "Forward",
    image: {
      src: cristianRonaldo,
      alt: "Al Nassr Striker",
    },
  },
  {
    id: 3,
    name: "Neymar Jr",
    club: "Santos",
    position: "Forward",
    image: {
      src: neymarJR,
      alt: "Santos Key player.",
    },
  },
  {
    id: 4,
    name: "Robert Lewandowski",
    club: "FC Barcelona",
    position: "Striker",
    image: {
      src: robertLewandoski,
      alt: "Barcelona Striker",
    },
  },
  {
    id: 5,
    name: "Gianluigi Buffon",
    club: "Retired",
    position: "Goalkeeper",
    image: {
      src: gianluigiBuffon,
      alt: "Italian Legend.",
    },
  }
];

export default footballers;