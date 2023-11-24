import { Attributes, ComponentChildren, Ref, ComponentChild } from 'preact';
import { Classes, Code, Divider, FormGroup, H5, Icon, InputGroup, Intent, Switch, Tooltip } from "@blueprintjs/core";
import { PureComponent } from 'preact/compat';

class App extends PureComponent {
  render(props?: Readonly<Attributes & { children?: ComponentChildren; ref?: Ref<any> | undefined; }> | undefined, state?: Readonly<{}> | undefined, context?: any): ComponentChild {
    return (
        <>
          <header>
            <nav>
              <div className="container">
                <div className="d-flex">
                  <figure><a href="#"><img src="https://geogoe.com/images/logo-white.png" alt="Geogoe" /></a></figure>
                  <div>
                    <form class="js-form-login">
                      <div class="d-flex flex-no-wrap">
                        <InputGroup placeholder="Your Email" />
                        <input class="form-control" placeholder="Your Email" type="text" />
                        <input class="form-control" placeholder="Password" type="password" />
                        <button class="btn" type="submit">Sign in</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </nav>
          </header>
          <main>
            <section id="block-01">
              <div className="container">
                <figure><img src="https://www.geogoe.com/user_images/141527833402.jpeg" /></figure>
                <div class="d-flex">
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
                    <input class="form-control" placeholder="Your Email" type="text" />
                    <input class="form-control" placeholder="Your Email" type="text" />
                    <input class="form-control" placeholder="Your Email" type="text" />
                    <input class="form-control" placeholder="Your Email" type="text" />
                    <input class="form-control" placeholder="Your Email" type="text" />
                    <input class="form-control" placeholder="Your Email" type="text" />
                    <input class="form-control" placeholder="Your Email" type="text" />
                    <input class="form-control" placeholder="Your Email" type="text" />
                    <input class="form-control" placeholder="Your Email" type="text" />
                    <input class="form-control" placeholder="Your Email" type="text" />
                    <input class="form-control" placeholder="Your Email" type="text" />
                  </form>
                </div>
              </div>
            </section>
          </main>
          <footer>123</footer>
        </>
    );
  }
}

export default App;