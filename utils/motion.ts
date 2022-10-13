export const imageFade = {
  hide: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.7,
    },
  },
  exit: {
    opacity: 0,
  },
};

export const textSlide = {
  hide: {
    x: -100,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
    },
  },
  exit: {
    x: 100,
    opacity: 0,
  },
};
