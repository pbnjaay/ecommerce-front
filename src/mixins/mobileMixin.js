const mobileMixin = {
  computed: {
    isMobile() {
      return screen.width <= 900;
    }
  }
};
export default mobileMixin;
