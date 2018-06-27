export interface WeeklyWeather {
    date: string;
    temperature: number;
    icon: Icon;
}
export interface DetailedWeather {
    hour: string;
    date: string;
    temperature: number;
    rain: number;
    wind: number;
    icon: Icon;
    snow: number;
}

export interface GroupWeather {
    listWeeklyWeather: WeeklyWeather[];
    listDetailedWeather: DetailedWeather[];
}

interface Icon {
    src: string;
    description: string;
}
