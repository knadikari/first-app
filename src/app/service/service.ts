import { School } from './school';
import { District } from './district';
import { News } from './news';

export class Service {
    schools: School[];
    districts: District[];
    news: News[];

    constructor() {
        this.setDistrict();
        this.setSchools();
        this.setNews();
    }

    getDistrict() {
        return this.districts;
    }

    getSchool(id: Number) {
        if (id != 0) {
            return this.schools.find(x => x.id == id).names;
        } else {
            return ['Select the School'];
        }
    }

    getNews() {
        return this.news;
    }

    getNewForHome() {
        var newsforhome = new Array<News>();
        this.news.forEach(obj =>{
            newsforhome.push(obj);
        });
        return newsforhome;
    }

    getSingleNews(id: Number) {
        return this.news.find(x => x.id == id);
    }

    setDistrict() {
        this.districts = [
            { id:1, name: 'Colombo'},
            { id:2, name:'Gampaha'} 
          ];
    }

    setSchools() {
        this.schools= [
            {id:1, names:['ABC', 'DVP']},
            {id:2, names:['GHF', 'RTY']}
          ];
    }

    setNews() {
        this.news=[
            {id:1, title:'Vidusara Article', image:'assets/images/Article1.jpg', date:new Date(), summary:'Vidusara Aticle', description:''},
            {id:2, title:'Congratulations!', image:'assets/images/Article2.jpg', date:new Date(), summary:'Sri Lanka Team for IMO 2019 returned to the island on 23rd from University of Bath, UK where the IMO was held this year. Parents', description:''},
            {id:3, title:'Sri Lanka Team to IMO 2019', image:'assets/images/Article3.jpg', date:new Date(), summary:'Sri Lanka Team to IMO 2019 60th International Mathematical Olympiad this year will be held from 14th to 22nd of July at the University of Bath in UK. ', description:''},
            {id:4, title:'President Meets Sri Lanka Team to International Mathematics Olympiad', image:'assets/images/Article4.jpg', date:new Date(), summary:'President Meets Sri Lanka Team to International Mathematics Olympiad The President invited the Sri Lanka Team to IMO 2019 to wish them best of success', description:''},
            {id:5, title:'TIMO & HKIMO Heats: Award Ceremony – 2019', image:'', date:new Date(), summary:'TIMO & HKIMO Heats: Award Ceremony – 2019 The Award Ceremony 2019 for TIMO and HKIMO Heats was held at the New Arts Theatre of', description:''},

        ]
    }

}