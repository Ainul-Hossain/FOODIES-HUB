import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

export default function Settings(){
    let prevTheme = localStorage.getItem("Theme");
    const [theme, setTheme] = useState(prevTheme);

    const primaryColors = [
        "rgb(255, 0, 86)",
        "rgb(33, 150, 243)",
        "rgb(255, 193, 7)",
        "rgb(0, 200, 83)",
        "rgb(156, 39, 176)"
    ];

    let prevColor = Number(localStorage.getItem('setColor'));
    const [primaryColor, setPrimaryColor] = useState(prevColor);

    const fontSizes = [
        {
            title: "Small",
            value: "12px"
        },
        {
            title: "Medium",
            value: "16px"
        },
        {
            title: "Large",
            value: "20px"
        }
    ];

    let prevFont = Number(localStorage.getItem("setFont"));
    const [fontSize, setFontSize] = useState(prevFont);

    const animationSpeeds = [
        {
              title: "Slow",
              value: 2
        },
        {
              title: "Medium",
              value: 1
        },
        {
              title: "Fast",
              value: .5
        }
    ];

    let prevAnimation = Number(localStorage.getItem('setAnimation'));
    const [animationSpeed, setAnimationSpeed] = useState(prevAnimation);

    let storeSettings = JSON.parse(localStorage.getItem('storeSettings'));
    const [settings, setSettings] = useState(storeSettings || {
        "--background-color": "#fff",
        "--background-light": "#fff",
        "--primary-color": "rgb(255, 0, 86)",
        "--shadow-color": "rgba(0,0,0,0.2)",
        "--text-color": "#0A0A0A",
        "--text-light": "#575757",
        "--font-size": "16px",
        "--animation-speed": 1
    });

    const themes = [
        {
            "--background-color": "#fff",
            "--background-light": "#fff",
            "--shadow-color": "rgba(0,0,0,0.2)",
            "--text-color": "#0A0A0A",
            "--text-light": "#575757"
        },
        {
            "--background-color": "rgb(29, 29, 29)",
            "--background-light": "rgb(77, 77, 77)",
            "--shadow-color": "rgba(0,0,0,0.2)",
            "--text-color": "#ffffff",
            "--text-light": "#eceaea",
        }
    ];

    function changeTheme(i) {
        const _theme = {
          ...themes[i],
        };
        setTheme(i === 0 ? "light" : "dark");
        localStorage.setItem("Theme", i === 0? 'light': 'dark');
        let _settings = {
          ...settings,
        };
        for (let key in _theme) {
          _settings[key] = _theme[key];
        }
        localStorage.setItem("storeSettings", JSON.stringify(_settings));
        setSettings(_settings);
    }

    function changeColor(i){
        const _color = primaryColors[i];
        let _settings = {...settings};
        _settings["--primary-color"] = _color;
        localStorage.setItem('setColor', i);
        localStorage.setItem('storeSettings', JSON.stringify(_settings));
        if(i !== prevColor){
            setPrimaryColor(i);
        }else{
            setPrimaryColor(prevColor);
        }
        setSettings(_settings);
    }

    function changeFontSize(i) {
        const _size = fontSizes[i];
        let _settings = {
          ...settings,
        };
        _settings["--font-size"] = _size.value;
        localStorage.setItem("setFont", i);
        localStorage.setItem("storeSettings", JSON.stringify(_settings));
        setFontSize(i);
        setSettings(_settings);
    }

    function changeAnimationSpeed(i){
        const _animationSpeed = animationSpeeds[i];
        let _settings = {...settings};
        _settings["--animation-speed"] = _animationSpeed.value;
        localStorage.setItem('setAnimation', i);
        localStorage.setItem("storeSettings", JSON.stringify(_settings));
        setAnimationSpeed(i);
        setSettings(_settings);
    }

    useEffect(()=>{
        const root = document.documentElement;
        for(let key in settings){
            root.style.setProperty(key, settings[key]);
        }
    }, [settings]);

    //console.log(prevTheme, prevColor, prevFont, prevAnimation);

    return (
        <div>
            <div className="section d-block">
                <h2>Preferred Theme</h2>
                <div className="options-container">
                    <div className="option light" onClick={()=>changeTheme(0)}>
                        {
                            theme === 'light' && (
                                <div className="check">
                                    <FontAwesomeIcon icon={faCheck}/>
                                </div>
                            )
                        }
                    </div>
                    <div className="option dark" onClick={()=>changeTheme(1)}>
                        {
                            theme === 'dark' && (
                                <div className="check">
                                    <FontAwesomeIcon icon={faCheck}/>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>

            <div className="section d-block">
                <h2>Primary Color</h2>
                <div className="options-container">
                    {
                        primaryColors.map((color, i)=>{
                            return (
                                <div key={i} className="option light" style={{backgroundColor:color}} onClick={()=>changeColor(i)}>
                                    {
                                        primaryColor === i && (
                                            <div className="check">
                                                <FontAwesomeIcon icon={faCheck}/>
                                            </div>
                                        )
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <div className="section d-block">
                <h2>Font Size</h2>
                <div className="options-container">
                    {
                        fontSizes.map((size, i)=>{
                            return (
                                <button key={i} className="btn" onClick={()=>changeFontSize(i)}>
                                    {size.title}
                                    
                                    {
                                        fontSize === i && <span><FontAwesomeIcon icon={faCheck}/></span>
                                    }
                                </button>
                            )
                        })
                    }
                </div>
            </div>

            <div className="section d-block">
                <h2>Animation Speed</h2>
                <div className="options-container">
                    {
                        animationSpeeds.map((speed, i)=>{
                            return (
                                <button key={i} className="btn" onClick={()=>changeAnimationSpeed(i)}>
                                    {speed.title}
                                    
                                    {
                                        animationSpeed === i && <span><FontAwesomeIcon icon={faCheck}/></span>
                                    }
                                </button>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}