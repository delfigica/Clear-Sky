export const chooseImageFromTextAndNight = (icon:string) => {
    return {
        "01n":"https://raw.githubusercontent.com/delfigica/Clear-Sky/main/src/assets/moon.png",
        "01d":"https://raw.githubusercontent.com/delfigica/Clear-Sky/main/src/assets/sun.png",
        "02d":"https://raw.githubusercontent.com/delfigica/Clear-Sky/main/src/assets/cloudy.png",
        "02n":"https://raw.githubusercontent.com/delfigica/Clear-Sky/main/src/assets/Cloudy-moon.png",
        "03d":"https://raw.githubusercontent.com/delfigica/Clear-Sky/main/src/assets/clouds.png",
        "03n":"https://raw.githubusercontent.com/delfigica/Clear-Sky/main/src/assets/clouds.png",
        "04d":"https://raw.githubusercontent.com/delfigica/Clear-Sky/main/src/assets/clouds.png",
        "04n":"https://raw.githubusercontent.com/delfigica/Clear-Sky/main/src/assets/clouds.png",
        "09d":"https://raw.githubusercontent.com/delfigica/Clear-Sky/main/src/assets/rainy.png",
        "09n":"https://raw.githubusercontent.com/delfigica/Clear-Sky/main/src/assets/rainy.png",
        "11d":"https://raw.githubusercontent.com/delfigica/Clear-Sky/main/src/assets/thunderstorm.png",
        "11n":"https://raw.githubusercontent.com/delfigica/Clear-Sky/main/src/assets/thunderstorm.png",
        "13d":"https://raw.githubusercontent.com/delfigica/Clear-Sky/main/src/assets/snow.png",
        "13n":"https://raw.githubusercontent.com/delfigica/Clear-Sky/main/src/assets/snow.png",
    }[icon] || ""
}

