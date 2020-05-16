import getMessageFromPopup from "../utils/getMessageFromPopup.js";
import { updateStore } from "../store";
import waitForElement from "../utils/waitForElement.js";

const blockSavedProfile = (store) => {
    getMessageFromPopup("blockUserFromSavedProfiles", msg => {
        localStorage.setItem("igHelperProfileToBlock", JSON.stringify(msg.value));
        openProfile(msg.value);
    });
    autoBlockProfile(store);
};

const unfollowSavedProfile = (store) => {
    getMessageFromPopup("unfollowUserFromSavedProfiles", msg => {
        localStorage.setItem("igHelperProfileToUnfollow", JSON.stringify(msg.value));
        openProfile(msg.value);
    });
    autoUnfollowProfile(store);
};

const autoBlockProfile = (store) => {
    const condition = localStorage.getItem("igHelperProfileToBlock") && JSON.parse(localStorage.getItem("igHelperProfileToBlock")) != null && JSON.parse( localStorage.getItem("igHelperProfileToBlock") ) == window.location.href;
    if (condition) {
        waitForElement("#react-root > section > main > div > header > section", 500, () => {
            openBlockModal();
            setTimeout(() => {
                clickBlockButton();
                confirmBlock();
                removeProfileFromStorage(store);
                removeProfileToBlock();
            }, 700);
        });
    }
};

const autoUnfollowProfile = (store) => {
    const condition = localStorage.getItem("igHelperProfileToUnfollow") && JSON.parse(localStorage.getItem("igHelperProfileToUnfollow")) != null && JSON.parse( localStorage.getItem("igHelperProfileToUnfollow") ) == window.location.href;
    if (condition) {
        waitForElement("#react-root > section > main > div > header > section", 500, () => {
            clickUnfollowButton();
            setTimeout(() => {
                confirmUnfollow();
                removeProfileFromStorage(store);
                removeProfileToUnfollow();
            }, 700);
        });
    }
}

const openProfile = (profile) => {
    window.open(profile, "_self");
};

const openBlockModal = () => {
    document.querySelector("#react-root > section > main > div > header > section > div.nZSzR > div.AFWDX > button").click();
};

const clickBlockButton = () => {
    document.querySelector("body > div.RnEpo.Yx5HN > div > div > div > button:nth-child(1)").click();
};

const clickUnfollowButton = () => {
    document.querySelector("#react-root > section > main > div > header > section > div.nZSzR > div.Igw0E.IwRSH.eGOV_._4EzTm > span > span.vBF20._1OSdk > button").click();
};

const confirmBlock = () => {
    document.querySelector("body > div.RnEpo.Yx5HN > div > div > div.mt3GC > button.aOOlW.bIiDR").click();
};

const confirmUnfollow = () => {
    document.querySelector("body > div.RnEpo.Yx5HN > div > div > div.mt3GC > button.aOOlW.-Cab_").click();
};

const removeProfileFromStorage = (store) => {
    const profile = window.location.href;
    store.igHelperStore.savedProfiles = store.igHelperStore.savedProfiles.filter(el => el !== profile);
    updateStore(store);
};

const removeProfileToBlock = () => {
    localStorage.setItem("igHelperProfileToBlock", "");
};

const removeProfileToUnfollow = () => {
    localStorage.setItem("igHelperProfileToUnfollow", "");
};

export { blockSavedProfile, unfollowSavedProfile };