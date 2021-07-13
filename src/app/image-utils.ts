export const chooseImageFromTextAndNight = (icon:string) => {
    return {
        "01n":"../assets/moon.png",
        "01d":"../assets/sun.png",
        "02d":"../assets/cloudy.png",
        "02n":"../assets/Cloudy-moon.png",
        "03d":"../assets/clouds.png",
        "03n":"../assets/clouds.png",
        "04d":"../assets/clouds.png",
        "04n":"../assets/clouds.png",
        "09d":"../assets/rainy.png",
        "09n":"../assets/rainy.png",
        "11d":"../assets/thunderstorm.png",
        "11n":"../assets/thunderstorm.png",
        "13d":"../assets/snow.png",
        "13n":"../assets/snow.png",
    }[icon] || ""
}

