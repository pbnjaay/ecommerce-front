const showMenuMixin = {
  data() {
    return { isShow: false };
  },
  methods: {
    showMenu() {
      this.isShow = !this.isShow;
    },
    closeMenu() {
      this.isShow = false;
    }
  }
};

export default showMenuMixin;
