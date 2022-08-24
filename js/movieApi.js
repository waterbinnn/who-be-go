var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { MOVIE_URL } from './BASE_URL.js';
const serviceKey = '노션에 있는 한국영화자료원 인증키';
const getMovieInfo = (movieSeq) => __awaiter(void 0, void 0, void 0, function* () {
    const url = MOVIE_URL + `&ServiceKey=${serviceKey}&detail=Y&${movieSeq}`;
    // `https://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&ServiceKey=${serviceKey}&detail=Y&${movieSeq}`;
    try {
        const response = yield fetch(url, {
            method: 'GET',
        });
        const json = yield response.json();
        return json.Data[0].Result[0];
    }
    catch (err) {
        console.error(err);
    }
});
export { getMovieInfo };
