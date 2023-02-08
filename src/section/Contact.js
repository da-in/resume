import React from 'react';
import SectionTitle from '../components/SectionTitle';

function Contact({ scrollRef }) {
  return (
    <div
      ref={(cur) => {
        if (cur) {
          scrollRef.current[1] = cur;
        }
      }}
    >
      <SectionTitle>최다인(Choi da-in)</SectionTitle>
      <table>
        <tbody>
          <tr>
            <th>Phone</th>
            <td>
              <span>010-6611-5291</span>
            </td>
          </tr>
          <tr>
            <th>Email</th>
            <td>
              <a href="mailto:talown@naver.com">talown@naver.com</a>
            </td>
          </tr>
          <tr>
            <th>Github</th>
            <td>
              <a href="https://github.com/da-in">github.com/da-in</a>
            </td>
          </tr>
          <tr>
            <th>Blog</th>
            <td>
              <a href="https://da-in.github.io">dain.github.io</a>
            </td>
          </tr>
          {/* <tr>
                <th>Instagram</th>
                <td>
                    <a href="https://www.instagram.com/dain.py/">
                        @dain.py
                    </a>
                </td>
            </tr> */}
        </tbody>
      </table>
      <br />
      <SectionTitle>학력 사항</SectionTitle>
      <table>
        <tbody>
          <tr>
            <th>대학교</th>
            <td>
              <span>숭실대학교 (서울) / 본교</span>
            </td>
          </tr>
          <tr>
            <th></th>
            <td>
              <span>2017.03 입학 ~ 2023.02.17 졸업예정</span>
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <SectionTitle>외국어 능력 및 해외 경험</SectionTitle>
      <table>
        <tbody>
          <tr>
            <th>영어</th>
            <td>
              <span>OPIc IM2 (2022.06.15 취득)</span>
            </td>
          </tr>
          <tr>
            <th>해외 경험</th>
            <td>
              <span>숭실대학교 동계 인도 해외봉사단 Support Staff</span>
            </td>
          </tr>
          <tr>
            <th></th>
            <td>
              <span>숭실대학교 동계 인도 해외봉사단 Support Staff</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Contact;
