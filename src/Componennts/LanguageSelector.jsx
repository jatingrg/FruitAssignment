
import React from 'react';

const LanguageSelector = ({ targetLanguage, onLanguageChange }) => {
  return (
    <div>
      <label htmlFor="language-select">Select language:</label>
      <select
        id="language-select"
        value={targetLanguage}
        onChange={onLanguageChange}
      >
        <option value="af">Afrikaans</option>
        <option value="sq">Albanian</option>
        <option value="am">Amharic</option>
        <option value="ar">Arabic</option>
        <option value="hy">Armenian</option>
        <option value="az">Azerbaijani</option>
        <option value="eu">Basque</option>
        <option value="be">Belarusian</option>
        <option value="bn">Bengali</option>
        <option value="bs">Bosnian</option>
        <option value="ca">Catalan</option>
        <option value="ceb">Cebuano</option>
        <option value="ny">Chichewa</option>
        <option value="zh-CN">Chinese (Simplified)</option>
        <option value="zh-TW">Chinese (Traditional)</option>
        <option value="co">Corsican</option>
        <option value="hr">Croatian</option>
        <option value="cs">Czech</option>
        <option value="da">Danish</option>
        <option value="nl">Dutch</option>
        <option value="en">English</option>
        <option value="eo">Esperanto</option>
        <option value="et">Estonian</option>
        <option value="fi">Finnish</option>
        <option value="fr">French</option>
        <option value="fy">Frisian</option>
        <option value="gl">Galician</option>
        <option value="ka">Georgian</option>
        <option value="de">German</option>
        <option value="el">Greek</option>
        <option value="gu">Gujarati</option>
        <option value="ht">Haitian Creole</option>
        <option value="ha">Hausa</option>
        <option value="haw">Hawaiian</option>
        <option value="he">Hebrew</option>
        <option value="hi">Hindi</option>
        <option value="hmn">Hmong</option>
        <option value="hu">Hungarian</option>
        <option value="is">Icelandic</option>
        <option value="ig">Igbo</option>
        <option value="id">Indonesian</option>
        <option value="ia">Interlingua</option>
        <option value="ie">Interlingue</option>
        <option value="it">Italian</option>
        <option value="ja">Japanese</option>
        <option value="jw">Javanese</option>
        <option value="kn">Kannada</option>
        <option value="km">Khmer</option>
        <option value="ko">Korean</option>
        <option value="la">Latin</option>
        <option value="lv">Latvian</option>
        <option value="lt">Lithuanian</option>
        <option value="lu">Luganda</option>
        <option value="mk">Macedonian</option>
        <option value="mg">Malagasy</option>
        <option value="ml">Malayalam</option>
        <option value="ms">Malay</option>
        <option value="mt">Maltese</option>
        <option value="mi">Maori</option>
        <option value="mr">Marathi</option>
        <option value="my">Myanmar (Burmese)</option>
        <option value="ne">Nepali</option>
        <option value="no">Norwegian</option>
        <option value="or">Odia</option>
        <option value="ps">Pashto</option>
        <option value="fa">Persian</option>
        <option value="pl">Polish</option>
        <option value="pt">Portuguese</option>
        <option value="pa">Punjabi</option>
        <option value="qu">Quechua</option>
        <option value="ro">Romanian</option>
        <option value="ru">Russian</option>
        <option value="sm">Samoan</option>
        <option value="gd">Scots Gaelic</option>
        <option value="sr">Serbian</option>
        <option value="st">Sesotho</option>
        <option value="sn">Shona</option>
        <option value="sd">Sindhi</option>
        <option value="si">Sinhala</option>
        <option value="sk">Slovak</option>
        <option value="sl">Slovenian</option>
        <option value="so">Somali</option>
        <option value="es">Spanish</option>
        <option value="su">Sundanese</option>
        <option value="sw">Swahili</option>
        <option value="sv">Swedish</option>
        <option value="tl">Tagalog</option>
        <option value="tg">Tajik</option>
        <option value="ta">Tamil</option>
        <option value="te">Telugu</option>
        <option value="th">Thai</option>
        <option value="tr">Turkish</option>
        <option value="uk">Ukrainian</option>
        <option value="ur">Urdu</option>
        <option value="vi">Vietnamese</option>
        <option value="cy">Welsh</option>
        <option value="xh">Xhosa</option>
        <option value="yi">Yiddish</option>
        <option value="yo">Yoruba</option>
        <option value="zu">Zulu</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
