import Particles from "react-tsparticles";
import React from 'react';

export default class ParticlesTs extends React.Component {
      render() {
        return (
            <Particles
            className="partc"
            id="tsparticles"
            init={this.particlesInit}
            loaded={this.particlesLoaded}
            options={{
                "background": {
                  "color": {
                    "value": "#131313"
                  }
                },
                "fullScreen": {
                  "enable": true,
                  "zIndex": 0
                },
                "interactivity": {
                  "events": {
                    "onClick": {
                      "enable": true,
                      "mode": "push"
                    },
                    "onHover": {
                      "enable": true,
                      "mode": "repulse"
                    }
                  }
                },
                "particles": {
                  "color": {
                    "value": "#ff0000",
                    "animation": {
                      "h": {
                        "speed": 20
                      }
                    }
                  },
                  "links": {
                    "color": {
                          "value":  "#17ac28"
                    },
                    "enable": true,
                    "opacity": 0.3
                  },
                  "move": {
                    "enable": true,
                    "outModes": {
                      "bottom": "out",
                      "left": "out",
                      "right": "out",
                      "top": "out"
                    },
                    "speed": 6
                  },
                  "number": {
                    "density": {
                      "enable": true
                    },
                    "value": 80
                  },
                  "opacity": {
                    "value": 0.4
                  },
                  "size": {
                    "value": {
                      "min": 0.1,
                      "max": 3
                    }
                  }
                }
              }}
          />
        );
      }
}
