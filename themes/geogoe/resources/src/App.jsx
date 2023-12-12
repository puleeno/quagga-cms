import { PureComponent } from 'preact/compat';
import { Button, InputGroup, FormGroup } from "@blueprintjs/core";
import './scss/app.scss'

class App extends PureComponent {
  render() {
    return (
      <>
        <header>
          <nav>
            <div className="container">
              <div className="d-flex">
                <figure><a title="Geogoe" href="#TODO"><img alt="Geogoe" src="https://geogoe.com/images/logo-white.png" /></a></figure>
                <form>
                  <div className="d-flex">
                    <FormGroup>
                      <InputGroup
                          placeholder="Your email"
                          type='email'
                          inputClassName='form-control'
                      />
                    </FormGroup>
                    <FormGroup>
                      <InputGroup
                          placeholder="Password"
                          type='password'
                          inputClassName='form-control'
                      />
                    </FormGroup>
                    <Button text="Sign in" className="btn" type='submit' disabled />
                  </div>
                </form>
              </div>
            </div>
          </nav>
        </header>
        <main>
          <section id="block-01">
            <div className="container">
              <figure><img src="https://www.geogoe.com/user_images/141527833402.jpeg" /></figure>
              <div className="d-flex">
                <div>
                  <h3>Geogoe /jēǝ’gō/, a cityzenship-and ethnicity based socialnetwork</h3>
                  <h3>Do you know enough not to have a prejudice?</h3>
                  <p>Geogoe helps you connect and share with people in all the nations what you care about in you life</p>
                  <h3>Staatsangehörigkeit und Herkunftsland basierendes soziales Netzwerk</h3>
                  <h3>基於國籍和民族的社交網絡</h3>
                  <h3>Mạng xã hội dựa trên dân tộc và quốc tịch</h3>
                </div>
                <form>
                  <h3>Sign up</h3>

                  <FormGroup>
                    <InputGroup
                      placeholder="First Name"
                      inputClassName='form-control'
                    />
                  </FormGroup>

                  <FormGroup>
                    <InputGroup
                      placeholder="Last Name"
                      inputClassName='form-control'
                    />
                  </FormGroup>

                  <FormGroup>
                    <InputGroup
                      placeholder="Your nickname"
                      inputClassName='form-control'
                    />
                  </FormGroup>

                  <FormGroup>
                    <InputGroup
                      placeholder="Your email"
                      inputClassName='form-control'
                      type='email'
                    />
                  </FormGroup>

                  <FormGroup>
                    <InputGroup
                      placeholder="Password"
                      type='password'
                      inputClassName='form-control'
                    />
                  </FormGroup>

                  <FormGroup>
                    <InputGroup
                      placeholder="Confirm password"
                      type='password'
                      inputClassName='form-control'
                    />
                  </FormGroup>

                  <FormGroup>
                    <div class="bp5-html-select">
                      <select class="form-control">
                        <option selected>Gender</option>
                        <option value="female">Female</option>
                        <option value="male">Male</option>
                      </select>
                      <span class="bp5-icon bp5-icon-double-caret-vertical"></span>
                    </div>
                  </FormGroup>
                  
                  <FormGroup>
                    <InputGroup
                      placeholder="Your nationality / ethnicity"
                      inputClassName='form-control'
                    />
                  </FormGroup>
                  
                  <FormGroup>
                    <div class="bp5-html-select">
                      <select class="form-control">
                        <option selected>Your residence</option>
                        <optgroup label="Eastern Asia">
                          <option value="cn" >China</option>
                          <option value="tw" >Taiwan</option>
                          <option value="hk" >Hong Kong, China</option>
                          <option value="mo" >Macau</option>
                          <option value="kp" >Democratic People's Republic of Korea</option>
                          <option value="jp" >Japan</option>
                          <option value="mng">Mongolia</option>
                          <option value="kr" >Republic of Korea</option>
                        </optgroup>
                        <optgroup label="South-central Asia">
                          <option value="af">Afghanistan</option>
                          <option value="bd">Bangladesh</option>
                          <option value="bt">Bhutan</option>
                          <option value="in">India</option>
                          <option value="ir">Iran (Islamic Republic of)</option>
                          <option value="kz">Kazakhstan</option>
                          <option value="kg">Kyrgyzstan</option>
                          <option value="mv">Maldives</option>
                          <option value="np">Nepal</option>
                          <option value="pk">Pakistan</option>
                          <option value="lk">Sri Lanka</option>
                          <option value="tj">Tajikistan</option>
                          <option value="tm">Turkmenistan</option>
                          <option value="uz">Uzbekistan</option>
                        </optgroup>
                        <optgroup label="Western Asia">
                          <option value="am">Armenia</option>
                          <option value="az">Azerbaijan</option>
                          <option value="bh">Bahrain</option>
                          <option value="cy">Cyprus</option>
                          <option value="ge">Georgia</option>
                          <option value="Iraq">iq</option>
                          <option value="il">Israel</option>
                          <option value="jo">Jordan</option>
                          <option value="kw">Kuwait</option>
                          <option value="lb">Lebanon</option>
                          <option value="ps">Palestinian Territories</option>
                          <option value="om">Oman</option>
                          <option value="qa">Qatar</option>
                          <option value="sa">Saudi Arabia</option>
                          <option value="sy">Syrian Arab Republic</option>
                          <option value="tr">Turkey</option>
                          <option value="ae">United Arab Emirates</option>
                          <option value="ye">Yemen</option>
                        </optgroup>
                        <optgroup label="Eastern Europe">
                          <option value="by">Belarus</option>
                          <option value="bg">Bulgaria</option>
                          <option value="cs">Czech Republic</option>
                          <option value="hu">Hungary</option>
                          <option value="pl">Poland</option>
                          <option value="md">Republic of Moldova</option>
                          <option value="ro">Romania</option>
                          <option value="ru">Russian Federation</option>
                          <option value="sk">Slovakia</option>
                          <option value="ua">Ukraine</option>
                        </optgroup>
                        <optgroup label="Southern Europe">
                          <option value="al">Albania</option>
                          <option value="ad">Andorra</option>
                          <option value="ba">Bosnia and Herzegovina</option>
                          <option value="hr">Croatia</option>
                          <option value="gi">Gibraltar</option>
                          <option value="gr">Greece</option>
                          <option value="va">Holy See</option>
                          <option value="it">Italy</option>
                          <option value="mt">Malta</option>
                          <option value="mne">Montenegro</option>
                          <option value="pt">Portugal</option>
                          <option value="sm">San Marino</option>
                          <option value="sr">Serbia</option>
                          <option value="si">Slovenia</option>
                          <option value="es">Spain</option>
                          <option value="mk">Macedonia</option>
                        </optgroup>
                        <optgroup label="Western Europe">
                          <option value="fr">France</option>
                          <option value="at">Austria</option>
                          <option value="be">Belgium</option>
                          <option value="de">Germany</option>
                          <option value="li">Liechtenstein</option>
                          <option value="lu">Luxembourg</option>
                          <option value="mc">Monaco</option>
                          <option value="nl">Netherlands</option>
                          <option value="ch">Switzerland</option>
                        </optgroup>
                        <optgroup label="Eastern Africa">
                          <option value="bi">Burundi</option>
                          <option value="km">Comoros</option>
                          <option value="dj">Djibouti</option>
                          <option value="er">Eritrea</option>
                          <option value="et">Ethiopia</option>
                          <option value="ke">Kenya</option>
                          <option value="mg">Madagascar</option>
                          <option value="mw">Malawi</option>
                          <option value="mu">Mauritius</option>
                          <option value="mz">Mozambique</option>
                          <option value="re">Reunion</option>
                          <option value="rw">Rwanda</option>
                          <option value="sc">Seychelles</option>
                          <option value="so">Somalia</option>
                          <option value="ug">Uganda</option>
                          <option value="tz">United Republic of Tanzania</option>
                          <option value="zm">Zambia</option>
                          <option value="zw">Zimbabwe</option>
                        </optgroup>
                        <optgroup label="Middle Africa">
                          <option value="ao">Angola</option>
                          <option value="cm">Cameroon</option>
                          <option value="cf">Central African Republic</option>
                          <option value="td">Chad</option>
                          <option value="cg">Congo</option>
                          <option value="zr">Democratic Republic of the Congo</option>
                          <option value="gq">Equatorial Guinea</option>
                          <option value="ga">Gabon</option>
                          <option value="st">Sao Tome and Principe</option>
                        </optgroup>
                        <optgroup label="Northern Africa">
                          <option value="dz">Algeria</option>
                          <option value="eg">Egypt</option>
                          <option value="ly">Libyan Arab Jamahiriya</option>
                          <option value="ma">Morocco</option>
                          <option value="sd">Sudan</option>
                          <option value="tn">Tunisia</option>
                          <option value="eh">Western Sahara</option>
                          <option value="pm">Saint Pierre and Miquelon</option>
                        </optgroup>
                        <optgroup label="Southern Africa">
                          <option value="bw">Botswana</option>
                          <option value="ls">Lesotho</option>
                          <option value="na">Namibia</option>
                          <option value="za">South Africa</option>
                          <option value="sz">Swaziland</option>
                        </optgroup>
                        <optgroup label="Western Africa">
                          <option value="bj">Benin</option>
                          <option value="bf">Burkina Faso</option>
                          <option value="cv">Cape Verde</option>
                          <option value="ci">Cote d'Ivoire</option>
                          <option value="gm">Gambia</option>
                          <option value="gh">Ghana</option>
                          <option value="gn">Guinea</option>
                          <option value="gw">Guinea-Bissau</option>
                          <option value="lr">Liberia</option>
                          <option value="ml">Mali</option>
                          <option value="mr">Mauritania</option>
                          <option value="ne">Niger</option>
                          <option value="ng">Nigeria</option>
                          <option value="sh">Saint Helena</option>
                          <option value="sn">Senegal</option>
                          <option value="sl">Sierra Leone</option>
                          <option value="tg">Togo</option>
                        </optgroup>
                        <optgroup label="Latin America and the Caribbean">
                          <option value="ai">Anguilla</option>
                          <option value="ag">Antigua and Barbuda</option>
                          <option value="aw">Aruba</option>
                          <option value="bs">Bahamas</option>
                          <option value="bb">Barbados</option>
                          <option value="vg">British Virgin Islands</option>
                          <option value="ky">Cayman Islands</option>
                          <option value="cu">Cuba</option>
                          <option value="dm">Dominica</option>
                          <option value="do">Dominican Republic</option>
                          <option value="gd">Grenada</option>
                          <option value="gp">Guadeloupe</option>
                          <option value="ht">Haiti</option>
                          <option value="jm">Jamaica</option>
                          <option value="mq">Martinique</option>
                          <option value="ms">Montserrat</option>
                          <option value="an">Netherlands Antilles</option>
                          <option value="pr">Puerto Rico</option>
                          <option value="kn">Saint Kitts and Nevis</option>
                          <option value="lc">Saint Lucia</option>
                          <option value="vc">Saint Vincent and the Grenadines</option>
                          <option value="tt">Trinidad and Tobago</option>
                          <option value="tc">Turks and Caicos Islands</option>
                          <option value="vi">United States Virgin Islands</option>
                        </optgroup>
                        <optgroup label="Central America">
                          <option value="bz">Belize</option>
                          <option value="cr">Costa Rica</option>
                          <option value="sv">El Salvador</option>
                          <option value="gt">Guatemala</option>
                          <option value="hn">Honduras</option>
                          <option value="mx">Mexico</option>
                          <option value="ni">Nicaragua</option>
                          <option value="pa">Panama</option>
                        </optgroup>
                        <optgroup label="South America">
                          <option value="ar" >Argentina</option>
                          <option value="bo" >Bolivia</option>
                          <option value="br" >Brazil</option>
                          <option value="cl" >Chile</option>
                          <option value="co" >Colombia</option>
                          <option value="ec" >Ecuador</option>
                          <option value="fk" >Falkland Islands (Malvinas)</option>
                          <option value="gf" >French Guiana</option>
                          <option value="gy" >Guyana</option>
                          <option value="py" >Paraguay</option>
                          <option value="pe" >Peru</option>
                          <option value="sur">Suriname</option>
                          <option value="uy" >Uruguay</option>
                          <option value="ve" >Venezuela</option>
                        </optgroup>
                        <optgroup label="Northern America">
                          <option value="us">United State of America</option>
                          <option value="bm">Bermuda</option>
                          <option value="ca">Canada</option>
                          <option value="gl">Greenland</option>
                        </optgroup>
                        <optgroup label="Oceania">
                          <option value="as">American Samoa</option>
                          <option value="au">Australia</option>
                          <option value="cx">Christmas island</option>
                          <option value="cc">Cocos (Keeling) island</option>
                          <option value="ck">Cook Islands</option>
                          <option value="fj">Fiji</option>
                          <option value="pf">French Polynesia</option>
                          <option value="gu">Guam</option>
                          <option value="ki">Kiribati</option>
                          <option value="mh">Marshall Islands</option>
                          <option value="fm">Micronesia (Federated States of)</option>
                          <option value="nr">Nauru</option>
                          <option value="nc">New Caledonia</option>
                          <option value="nz">New Zealand</option>
                          <option value="nu">Niue</option>
                          <option value="nf">Norfolk Island</option>
                          <option value="mp">Northern Mariana Islands</option>
                          <option value="pw">Palau</option>
                          <option value="pg">Papua New Guinea</option>
                          <option value="pn">Pitcairn</option>
                          <option value="ws">Samoa</option>
                          <option value="sb">Solomon Islands</option>
                          <option value="tk">Tokelau</option>
                          <option value="to">Tonga</option>
                          <option value="tv">Tuvalu</option>
                          <option value="vu">Vanuatu</option>
                          <option value="wf">Wallis and Futuna Islands</option>
                        </optgroup>
                      </select>
                      <span class="bp5-icon bp5-icon-double-caret-vertical"></span>
                    </div>
                  </FormGroup>
                  
                  
                  
                 
                  
                  <Button text="Sign in" className="btn w-100" type='submit' disabled />
                </form>
              </div>
            </div>
          </section>
         
        </main>
        <footer>
          <div className="footer__copyright">
            <hr />
            © Geogoe Inc.
          </div>
          <div className="footer__blank"></div>
        </footer>
      </>
    );
  }
}

export default App;