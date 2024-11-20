import React from "react";
import { useSmoothScrollToSection } from "../utils/Helpers";

function Lesson9() {
  useSmoothScrollToSection();
  return (
    <div>
      <h2>Lesson 9: かぶき (Kabuki)</h2>
      <section id="section1">
        <h3>9.1: Past Tense Short Forms</h3>
        <div className="indent">
          <p>
            For past tense paradign of short forms, there are three rules to
            understand:
          </p>
          <ol>
            <li>
              Verbs: Replace the <i>te</i>-form endings て and で with た and
              だ.
            </li>
            <li>
              い-adjectives: Replace the last い with かった. You may also think
              of this in terms of "dropping です from the long form".
            </li>
            <li>
              な-adjectives and nouns: Replace the long form でした ending with
              だった.
              <br />
              Negation: ない conjugates as an い-adjective. Therefore, for all
              categories, you can replace the last ない with なかった.
            </li>
          </ol>
          <table className="table-list table-mini table-border-orange">
            <thead>
              <tr>
                <th colSpan="2" className="table-header text-orange">
                  Past, affirmative
                </th>
                <th className="table-header text-black">compare with:</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowSpan="2" style={{ verticalAlign: "top" }}>
                  • verbs:
                </td>
                <td>
                  食べ<span className="underline-orange">た</span>
                </td>
                <td>
                  食べ<span className="underline-orange">て</span>
                </td>
              </tr>
              <tr>
                <td>
                  読ん<span className="underline-orange">だ</span>
                </td>
                <td>
                  読ん<span className="underline-orange">で</span>
                </td>
              </tr>
              <tr>
                <td>• い-adjectives:</td>
                <td>
                  かわい<span className="underline-orange">かった</span>
                </td>
                <td>
                  かわいい / かわい
                  <span className="underline-orange">かったです</span>
                </td>
              </tr>
              <tr>
                <td>• な-adjectives:</td>
                <td>
                  静か<span className="underline-orange">だった</span>
                </td>
                <td>
                  静か<span className="underline-orange">でした</span>
                </td>
              </tr>
              <tr>
                <td>• noun + です:</td>
                <td>
                  学生<span className="underline-orange">だった</span>
                </td>
                <td>
                  学生<span className="underline-orange">でした</span>
                </td>
              </tr>
            </tbody>
            <thead>
              <tr>
                <th colSpan="3" className="table-header text-orange">
                  Past, negative
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>• verbs:</td>
                <td>
                  読んな<span className="underline-orange">かった</span>
                </td>
                <td>
                  読んな<span className="underline-orange">い</span>
                </td>
              </tr>
              <tr>
                <td>• い-adjectives:</td>
                <td>
                  かわいくな<span className="underline-orange">かった</span>
                </td>
                <td>
                  かわいくな
                  <span className="underline-orange">い</span>
                </td>
              </tr>
              <tr>
                <td>• な-adjectives:</td>
                <td>
                  静かじゃな<span className="underline-orange">かった</span>
                </td>
                <td>
                  静かじゃな<span className="underline-orange">い</span>
                </td>
              </tr>
              <tr>
                <td>• noun + です:</td>
                <td>
                  学生じゃな<span className="underline-orange">かった</span>
                </td>
                <td>
                  学生じゃな<span className="underline-orange">い</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="section2">
        <h3>9.2: Past Tense Short Forms in Informal Speech</h3>
        <div className="indent">
          <p></p>
        </div>
      </section>

      <section id="section3">
        <h3>9.3: Past Tense Short Forms in Quoted Speech: ~と思います</h3>
        <div className="indent">
          <p></p>
        </div>
      </section>

      <section id="section4">
        <h3>9.4: Past Tense Short Forms in Quoted Speech: ~と言っていました</h3>
        <div className="indent">
          <p></p>
        </div>
      </section>

      <section id="section5">
        <h3>9.5: Qualifying Nouns with Verbs and Adjectives</h3>
        <div className="indent">
          <p></p>
        </div>
      </section>

      <section id="section6">
        <h3>9.6: もう~ました and まだ~ていません</h3>
        <div className="indent">
          <p></p>
        </div>
      </section>

      <section id="section7">
        <h3>9.7: Explanation から, Situation</h3>
        <div className="indent">
          <p></p>
        </div>
      </section>
    </div>
  );
}

export default Lesson9;
