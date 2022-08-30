import { keyframes } from "styled-components";

export const ani = {
	rubberBand: keyframes`
    0%{
        transform:scale3d(1,1,1);
    }
    30%{
        transform:scale3d(1.25,.75,1);
    }

    40%{
        transform:scale3d(.75,1.25,1);
    }

    50%{
        transform:scale3d(1.15,.85,1);
    }

    65%{
        transform:scale3d(.95,1.05,1);
    }

    75%{
        transform:scale3d(1.05,.95,1);
    }

    100%{
        transform:scale3d(1,1,1);
    }
    `,
	scroll: keyframes`
        0%{
            transform: translateY(-20%); 
        }100%{
            transform: translateY(0%); 
        }
    `,
	button: keyframes`
		0%{
			width: 0;
		}100%{
			width: 100%;
		}
	`,
	fade: keyframes`
		0%{
			transform: scale(.001);
		}100%{
			transform: scale(1);
		}
	`,
	bars: {
		js: keyframes`
			0%{
				transform: translateX(-100%)
			}100%{
				transform: translateX(100)
			}
		`,

	},
	fadeIn: keyframes`
		0%{
			opacity: 0;
			transform: scale3d(1, 1, 1)
		}25%{
			transform: scale3d(.7, .7, .7)
		}50%{
			transform: scale3d(1.3, 1.3, 1.3)
		}100%{
			transform: scale3d(1, 1, 1)
			opacity: 1;
		}
	`,
	rotate: keyframes`
	0%{
		opacity: 0;
		transform: translateX(-300%) rotate(-360deg) 
	}50%{
		opacity: .5;
		transform: translateX(-150%) rotate(-180deg) 
		
	}100%{
		opacity: 1;
		transform: translateX(0) rotate(0deg) 
	}
	`,
	fadeUp: keyframes`
		0%{
			opacity: 0;
			transform: translateY(500%)
		}100%{
			opacity: 1;
			transform: translateY(	0%)
		}
	`,
	opacity: keyframes`
		0%{
			opacity: 0;
		}100%{
			opacity: 1;
		}
	`
};