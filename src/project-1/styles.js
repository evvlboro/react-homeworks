import styled from 'styled-components';

import bg from './assets/images/bg.png';
import weatherCloudy from './assets/images/weather-icon-cloudy.png';
import weatherRainy from './assets/images/weather-icon-rainy.png';
import weatherSunny from './assets/images/weather-icon-sunny.png';
import rainy from './assets/images/rainy.png';
import humidity from './assets/images/humidity.png';

export const Wrapper = styled.section`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    .body {
        background-image: url(${bg});
        background-size: auto;
        min-height: 100vh;
    }

    main {
        width: 910px;
        margin: 0 auto;
    }

    .head {
        display: flex;
        justify-content: center;
        padding-top: 60px;
        padding-bottom: 83px;
    }

    .head .cloudy {
        width: 114px;
        background-image: url(${weatherCloudy});
    }

    .head .rainy {
        width: 100px;
        background-image: url(${weatherRainy});
    }

    .head .sunny {
        width: 88px;
        background-image: url(${weatherSunny});
    }

    .head .icon {
        margin-right: 30px;
        background-size: contain;
        background-repeat: no-repeat;
        height: 88px;
    }

    .head .current-date {
        display: flex;
        flex-direction: column;
    }

    .head .current-date p {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 28px;
        color: #fff;
        display: inline-block;
        margin-top: 15px;
        margin-bottom: 10px;
    }

    .head .current-date span {
        font-family: 'Roboto', sans-serif;
        font-weight: 200;
        font-size: 14px;
        color: #fff;
        text-transform: uppercase;
    }

    .current-weather {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 38px;
    }

    .current-weather .temperature {
        position: relative;
        font-family: 'Roboto', sans-serif;
        font-weight: 200;
        font-size: 350px;
        line-height: 1;
        color: #fff;
        margin-bottom: 100px;
    }

    .current-weather .temperature::after {
        position: absolute;
        top: 53px;
        right: -70px;
        content: '';
        display: inline-block;
        width: 37px;
        height: 41px;
        border: solid 5px #fff;
        border-radius: 50%;
    }

    .current-weather .meta span {
        font-family: 'Roboto', sans-serif;
        font-weight: 200;
        font-size: 19px;
        color: #fff;
        display: inline-flex;
        align-items: flex-start;
    }

    .current-weather .meta span:first-child {
        margin-right: 81px;
    }

    .current-weather .meta .rainy::before {
        content: '';
        display: inline-block;
        width: 26px;
        height: 26px;
        background-image: url(${rainy});
        margin-right: 11px;
    }

    .current-weather .meta .humidity::before {
        content: '';
        display: inline-block;
        width: 19px;
        height: 28px;
        background-image: url(${humidity});
        margin-right: 11px;
    }

    .filter {
        position: absolute;
        top: 2%;
        right: 2%;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }

    .filter .checkbox {
        position: relative;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 16px;
        text-transform: uppercase;
        color: #fff;
        display: inline-flex;
        align-items: center;
        margin-bottom: 25px;
    }

    .filter .checkbox:hover {
        cursor: pointer;
    }

    .filter .checkbox::after {
        content: '';
        display: inline-block;
        width: 25px;
        height: 25px;
        border: solid 1px #fff;
        border-radius: 3px;
        margin-left: 14px;
    }

    .filter .checkbox.selected::before {
        content: '✓';
        position: absolute;
        right: 7px;
    }

    .filter .custom-input {
        margin-bottom: 26px;
    }

    .filter .custom-input label {
        display: inline-block;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 16px;
        text-transform: uppercase;
        color: #fff;
        margin-right: 14px;
    }

    .filter .custom-input input {
        border-bottom: solid 1px #fff;
        border-top: none;
        border-right: none;
        border-left: none;
        background: transparent;
        width: 40px;
        outline: none;
        color: #fff;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 16px;
        text-align: center;
    }

    .filter button {
        background-color: #C584BC;
        border: none;
        padding: 10px 15px;
        border-radius: 8px;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 16px;
        letter-spacing: 1px;
        color: #fff;
        text-transform: uppercase;
    }

    .filter button:hover {
        cursor: pointer;
        background-color: #966590;
    }
    .filter button:disabled {
        cursor: not-allowed;
        background-color: #966590;
        opacity: 0.3;
    }

    .forecast {
        display: flex;
        padding-bottom: 40px;
    }

    .forecast .day {
        position: relative;
        width: 130px;
        height: 204px;
        background-color: #C486BB;
        color: #fff;
        padding-top: 35px;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .forecast .day:hover {
        background-color: #D9A9CE;
    }

    .forecast .day.selected {
        background-color: #D9A9CE;
    }

    .forecast .day p {
        display: inline-block;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 18px;
        margin-bottom: 90px;
    }

    .forecast .day span::after {
        margin-left: 5px;
        transform: translateY(-15px);
        content: '';
        display: inline-block;
        width: 5px;
        height: 6px;
        border: solid 1px #fff;
        border-radius: 50%;
    }

    .forecast .day span {
        position: relative;
        font-family: 'Roboto', sans-serif;
        font-weight: 200;
        font-size: 30px;
    }

    .forecast .day.cloudy::before {
        position: absolute;
        top: 86px;
        content: '';
        display: block;
        width: 62px;
        height: 37px;
        background-image: url(${weatherCloudy});
        background-size: contain;
        background-repeat: no-repeat;
    }

    .forecast .day.rainy::before {
        position: absolute;
        top: 86px;
        content: '';
        display: block;
        width: 43px;
        height: 37px;
        background-image: url(${weatherRainy});
        background-size: contain;
        background-repeat: no-repeat;
    }

    .forecast .day.sunny::before {
        position: absolute;
        top: 86px;
        content: '';
        display: block;
        width: 37px;
        height: 37px;
        background-image: url(${weatherSunny});
        background-size: contain;
        background-repeat: no-repeat;
    }

    .forecast .message {
      font-family: Roboto,sans-serif;
      font-weight: 400;
      font-size: 28px;
      color: #fff;
      position: absolute;
      bottom: 50%;
      left: 50%;
      -webkit-transform: translate(-50%,-50%);
      transform: translate(-50%,-50%);
    }
`;
