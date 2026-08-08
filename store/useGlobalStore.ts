import { create } from "zustand";

export type EventIconType = 'heart' | 'clock' | 'map-pin';

export interface EventItem {
    iconType: EventIconType;
    title: string;
    time: string;
    location: string;
    description: string;
}
export interface ProgramItem {
    time: string;
    title: string;
    desc: string;
}

interface GlobalState {
    man: string; /// жених
    woman: string; /// невеста
    weddingDay: string; /// дата свадьюы в текстовом формате
    location: string; //// место проведения свадьбы
    locationRegion: string; /// регион места проведения свадьбы
    weddingDate: Date, // дата свадьбы для обратного отсчета
    events: EventItem[]; /// список событий в день свадьбы
    program: ProgramItem[]; /// список мероприятий в день свадьбы
}

export const useGlobalStore = create<GlobalState>()(() => ({
    man: "Михаил",
    woman: "Анна",
    weddingDay: "14 сентября 2026 года",
    location: "Усадьба «Архангельское»",
    locationRegion: "Московская область",
    weddingDate: new Date("2026-09-14T16:00:00"),
    events: [
        {
            iconType: 'heart',
            title: "Церемония",
            time: "16:00",
            location: "Белый зал усадьбы",
            description: "Торжественная регистрация брака в окружении самых близких людей.",
        },
        {
            iconType: 'clock',
            title: "Коктейльный час",
            time: "17:00",
            location: "Терраса с видом на парк",
            description: "Прогулка, фотографии и лёгкие закуски в ожидании праздничного ужина.",
        },
        {
            iconType: 'map-pin',
            title: "Банкет",
            time: "18:30",
            location: "Большой зал",
            description: "Праздничный ужин, живая музыка и танцы до самого утра.",
        },
    ],
    program : [
        { time: "14:00", title: "Сбор гостей", desc: "Добро пожаловать! Встреча гостей, шампанское." },
        { time: "16:00", title: "Торжественная церемония", desc: "Обмен клятвами и кольцами в Белом зале." },
        { time: "17:00", title: "Коктейльный час", desc: "Фотографии, живая музыка, лёгкие закуски на террасе." },
        { time: "18:30", title: "Праздничный ужин", desc: "Торжественный банкет с авторским меню от шеф-повара." },
        { time: "20:00", title: "Первый танец", desc: "Танец молодожёнов и открытие танцпола для гостей." },
        { time: "21:30", title: "Торт", desc: "Разрезание свадебного торта и праздничный десерт." },
        { time: "00:00", title: "Финальный фейерверк", desc: "Яркое завершение незабываемого вечера под звёздами." },
    ],
}));
