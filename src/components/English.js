import React from 'react';
import MetaTags from 'react-meta-tags';
import { useHistory } from "react-router-dom";
import img from "../placeholder.jpg"
import MenuBar from"./menuBar";


function English(props) {
  const history = useHistory();

  return (
    <div className="App">
      {MenuBar((id) => {
            history.push({
              pathname: '/study',
              state: { id: id }
      })})}
      <MetaTags>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width,initial-scale=1"/>
        <meta name="description" content="Tech news article: Computers Will Destroy Us All"/>
        <meta name="author" content="Article Author"/>
        <meta name="keywords" content="AI,cybersecurity"/>
        <title>Computers Will Destroy Us All</title>
      </MetaTags>


      <body>
        <header>
          <h1>
            Our Website Name
          </h1>
          <h3>
            Your source for cyber web news stuff
          </h3>
        </header>

        <div class="container">
          <h2>
            Computers Will Destroy Us All
          </h2>

          <h4>
            Written by Article Author. Published MM/DD/YYYY.
          </h4>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget risus vitae massa semper aliquam quis mattis quam. Morbi vitae tortor tempus, placerat leo et, suscipit lectus. Phasellus ut euismod massa, eu eleifend ipsum. Nulla eu neque commodo, dapibus dolor eget, dictum arcu. In nec purus eu tellus consequat ultricies. Donec feugiat tempor turpis, rutrum sagittis mi venenatis at. Sed molestie lorem a blandit congue. Ut pellentesque odio quis leo volutpat, vitae vulputate felis condimentum. Praesent vulputate fermentum lorem, id rhoncus sem vehicula eu. Quisque ullamcorper, orci adipiscing auctor viverra, velit arcu malesuada metus, in volutpat tellus sem at justo.
          </p>

          <div class="mid-article" style={{margin:"18px 18px 200px"}}>
            <img src={img} alt="img"/>
            <p class="image-caption">
              Caption for this image.
            </p>
          </div>

          <p>
            Fusce non fermentum mi. Praesent vel lobortis elit. Nulla sodales, risus quis sollicitudin iaculis, felis dolor aliquet purus, eget elementum velit nunc eu dolor. Curabitur elit tellus, dictum non sem sit amet, viverra lobortis velit. Quisque facilisis, neque cursus ullamcorper ornare, dolor metus aliquam lacus, pharetra porttitor massa neque ut ligula. Vivamus laoreet nulla diam, eget adipiscing felis scelerisque sit amet. Mauris egestas, nisi vitae cursus tincidunt, urna ipsum facilisis eros, ut venenatis dui tellus sit amet orci. Nullam a rhoncus diam, eget tristique felis. Nulla egestas adipiscing fermentum. Aenean sagittis libero at eros ornare molestie. Morbi convallis ornare imperdiet. Mauris convallis tristique erat ac eleifend.
          </p>

          <p>
            Nunc ullamcorper neque nunc, vitae sollicitudin nunc placerat nec. Suspendisse vel enim ultrices, fringilla urna luctus, lacinia est. Quisque mattis dictum sapien vitae laoreet. Suspendisse ultricies, <a href="https://www.google.com">lorem</a> id tempor elementum, turpis magna pharetra purus, ac pulvinar metus ante quis nisi. Praesent dui massa, egestas dictum mi ut, tempus consequat neque. Maecenas urna tellus, fermentum at velit ac, commodo ultricies orci. Morbi augue dui, tincidunt et purus quis, consequat dictum enim.
          </p>
        </div>

        <div class="related-bar">
          <div class="related-article">
            <img class="article-image" src={img} alt="img"/>
            <h3>
              <a href="https://www.google.com" class="related-title">Quiz: What Kind Of AI Apocalypse Are You?</a>
            </h3>
          </div>
          <div class="related-article">
            <img class="article-image" src={img} alt="img"/>
            <h3>
              <a href="https://www.google.com" class="related-title">Why I Injected Myself With Pure Silicon</a>
            </h3>
          </div>
          <div class="related-article">
            <img class="article-image" src={img} alt="img"/>
            <h3>
              <a href="https://www.google.com" class="related-title">Roko's Basilisk: You Don't Want To See This</a>
            </h3>
          </div>
        </div>
        <footer>
          <p>
            Published by Publisher Name. Copyright 20XX.
          </p>
        </footer>
      </body>
    </div>
  );
}
export default English;