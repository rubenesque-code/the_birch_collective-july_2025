type Showreel = {
  isOpen: boolean;
};

type SiteState = {
  showreel: Showreel;
};

export const siteInitState: SiteState = {
  showreel: {
    isOpen: false
  }
};

export const siteState = $state(siteInitState);

export const updateSiteState = {
  showreel: {
    toggleIsOpen: () => {
      siteState.showreel.isOpen = !siteState.showreel.isOpen;
    },

    setIsOpen: (value: boolean) => {
      siteState.showreel.isOpen = value
    },

    /* 		isOpen: (arg0: { value: boolean; onOpen?: () => void; onClose?: () => void }) => {
          if (arg0.onOpen) arg0.onOpen();
          if (arg0.onClose) arg0.onClose();
    
          siteState.showreel.isOpen = arg0.value;
        } */
  }
};

export { type SiteState };
