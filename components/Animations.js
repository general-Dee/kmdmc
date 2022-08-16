// Home page animation
export const homeContainer = {
    hidden: {
        opacity: 0,
        height: 0,
    },
    show: {
        opacity: 1,
        height: "100vh",
        transition: {
            duration: 1,
        },
    },
    hide: {
        opacity: 0,
        height: 0,
        transition: {
            duration: 0.75,
        },
    }
};

// social media animation
export const sm = {
    hidden: {
        opacity: 0,
        x:0
    },
    show: {
        opacity: 1,
        x:20,
        transition: {
            duration: .8,
        },
    },
    hide: {
        opacity: 0,
        transition: {
            duration: 1,
        },
    }
}

// logo animation
export const logo = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition: {
            duration: .5,
        },
    },
    hide: {
        opacity: 0,
        transition: {
            duration: 1,
        },
    }
}

// banner h2 annimation
export const bannerText = {
    hidden: {
        opacity: 0,
        x: 200
    },
    show: {
        opacity: 1,
        x: 0,
        height: "100vh",
        transition: {
            duration: .5,
        },
    },
    hide: {
        opacity: 0,
        x: 200,
        transition: {
            duration: 1,
        },
    }
}

// About us page animation
export const aboutUs = {
    hidden: {
        opacity: 0,
        height: 0,
    },
    show: {
        opacity: 1,
        height: "100vh",
        transition: {
            duration: 1,
        },
    },
    hide: {
        opacity: 0,
        height: 0,
        transition: {
            duration: 0.75,
        },
    }
}
export const projects = {
    hidden: {
        opacity: 0,
        x: 200
    },
    show: {
        opacity: 1,
        x: 0,
        height: "100vh",
        transition: {
            duration: .5,
        },
    },
    hide: {
        opacity: 0,
        x: 200,
        transition: {
            duration: 0.75,
        },
    }
}