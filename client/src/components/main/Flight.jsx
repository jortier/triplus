import React from 'react';
import styled from 'styled-components';

const SVG = styled.svg.attrs({
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 49.47 341.57',
})`
  position: fixed;
  top: 30vh;
  right: 5vw;
  width: 5rem;
  height: 50vh;

  @media screen and (max-width: 1080px) {
    width: 3rem;
    height: 40vh;
  }
  @media ${({ theme }) => theme.device.mobile} {
    display: none;
  }
`;

export default function Flight() {
  const style1 = { fill: 'none', stroke: '#e9edf3', strokeWidth: '3px', strokeMiterlimit: '10' };
  const style2 = { fill: '#3287f7' };
  const style3 = { fill: '#fff', stroke: '#8d97a1', strokeWidth: '2px', strokeMiterlimit: '10' };

  return (
    <SVG>
      {/* <defs>
        <style>.cls-1{fill:none;stroke:#e9edf3;stroke-width:3px;}.cls-1,.cls-3{stroke-miterlimit:10;}.cls-2{fill:#3287f7;}.cls-3{fill:#fff;stroke:#8d97a1;stroke-width:2px;}</style>
      </defs> */}
      <g id='레이어_2' data-name='레이어 2'>
        <g id='레이어_1-2' data-name='레이어 1'>
          <path
            style={style1}
            d='M23.9,21.84s17.34,10.37,14,25-18,36.38-18,52.51-1.42,19.18,10.84,30.85,14.61,4.4,14.62,20.4-19.27,26.88-19.27,40.82,21.07,25.48,8.57,48.79S4.89,264.9,4.24,257.08s6.82-9.43,10.39-7.67,10.73,11.1,13.66,49.79'
          />
          <circle style={style2} cx='20.48' cy='20.16' r='1.43' />
          <path
            style={style2}
            d='M20.53,0C16.28,0,14,3,14,6.58s6.5,10.57,6.5,10.57C26.44,10.24,26.94,8,26.94,5.74A6.25,6.25,0,0,0,20.53,0Zm-.05,10.12a4.29,4.29,0,1,1,4.29-4.29A4.29,4.29,0,0,1,20.48,10.12Z'
          />
          <path
            style={style2}
            d='M30.41,328.64s.21,8.21,0,9.26-1.95,3.57-2.6,3.67-2.17-2-2.41-2.73-.31-9.86-.31-9.86l-3.26-2s-1,1.06-1.69.66,0-2,0-2l-1.94-1.37s-1.14.9-1.86.47-.45-2.05-.45-2.05L13,320.71l-.14-1.07,12.38,1.9.66-7.51-3.92-2.35-.06-3.19,5.68,2.22,6-1.65.16,2.28-4.21,2.41.77,7.76,11-2.07.49,1.48-2.48,1.67s.54,1.41-.26,1.92-1.88-.83-1.88-.83l-1.93.92s.6,1.64-.23,2.52-2.19-.46-2.19-.46Z'
          />
          <circle style={style3} cx='37.02' cy='46.84' r='3.82' />
          <circle style={style3} cx='19.06' cy='95.53' r='3.82' />
          <circle style={style3} cx='44.66' cy='143.86' r='3.82' />
          <circle style={style3} cx='33.2' cy='211.63' r='3.82' />
          <circle style={style3} cx='4.82' cy='255.04' r='3.82' />
        </g>
      </g>
    </SVG>

    // <Wrapper>
    //   <SVG>
    //     <g id='레이어_2' data-name='레이어 2'>
    //       <g id='레이어_1-2' data-name='레이어 1'>
    //         <circle style={{ fill: 'none', stroke: '#3386f7' }} cx='18.83' cy='20.16' r='1.43' />
    //         <path
    //           style={blue}
    //           d='M18.87,0c-4.25,0-6.5,3-6.5,6.58s6.5,10.57,6.5,10.57C24.78,10.24,25.28,8,25.28,5.74A6.25,6.25,0,0,0,18.87,0Zm0,10.12a4.29,4.29,0,1,1,4.28-4.29A4.29,4.29,0,0,1,18.83,10.12Z'
    //         />
    //         <path
    //           style={blue}
    //           d='M28.75,328.64s.21,8.21,0,9.26-1.95,3.57-2.6,3.67-2.16-2-2.41-2.73-.3-9.86-.3-9.86l-3.27-2s-1,1.06-1.69.66,0-2,0-2l-1.95-1.37s-1.13.9-1.86.47-.45-2.05-.45-2.05l-2.92-2.05-.14-1.07,12.38,1.9.66-7.51-3.92-2.35-.06-3.19,5.68,2.22,6-1.65.16,2.28-4.21,2.41.77,7.76,11-2.07.5,1.48-2.49,1.67s.54,1.41-.26,1.92-1.87-.83-1.87-.83l-1.94.92s.6,1.64-.23,2.52-2.19-.46-2.19-.46Z'
    //         />
    //         <path
    //           style={{ fill: 'aqua' }}
    //           d='M28.61,27.67l1.61-1.18a28.32,28.32,0,0,0-4.16-4.65l-1.29,1.53A26.92,26.92,0,0,1,28.61,27.67Z'
    //         />
    //         <path
    //           style={{ fill: 'aqua' }}
    //           d='M32.72,35.33l1.88-.69a31.59,31.59,0,0,0-2.67-5.57l-1.71,1A30.16,30.16,0,0,1,32.72,35.33Z'
    //         />
    //         <path
    //           style={{ fill: 'aqua' }}
    //           d='M34.4,43.81l2-.07a30.31,30.31,0,0,0-.88-6.13l-1.94.49A27.6,27.6,0,0,1,34.4,43.81Z'
    //         />
    //         <path
    //           style={{ fill: 'aqua' }}
    //           d='M36.18,48.59c.08-.59.13-1.17.17-1.75l-2-.13c0,.54-.08,1.08-.15,1.64a29.81,29.81,0,0,1-.82,4.06l1.93.53A30.44,30.44,0,0,0,36.18,48.59Z'
    //         />
    //         <path
    //           style={{ fill: 'aqua' }}
    //           d='M32.49,55.18a57.39,57.39,0,0,1-2.32,5.42l1.8.87c1-2.12,1.78-3.9,2.4-5.6Z'
    //         />
    //         <path
    //           style={{ fill: 'aqua' }}
    //           d='M30.63,64.17l-1.79-.9-1.48,2.88-1.27,2.44,1.78.92c.42-.83.84-1.64,1.26-2.44C29.64,66.09,30.14,65.13,30.63,64.17Z'
    //         />
    //         <path
    //           style={{ fill: 'aqua' }}
    //           d='M26.52,72.17l-1.79-.89c-1,2-1.81,3.78-2.54,5.49l1.84.79C24.75,75.88,25.56,74.11,26.52,72.17Z'
    //         />
    //         <path
    //           style={{ fill: 'aqua' }}
    //           d='M22.91,80.3l-1.86-.71c-.75,1.94-1.39,3.82-2,5.75L21,85.9C21.56,84,22.18,82.2,22.91,80.3Z'
    //         />
    //         <path
    //           style={{ fill: 'aqua' }}
    //           d='M18.72,97.48l-2-.22c-.21,2-.35,4-.4,6.06l2,.06C18.38,101.38,18.51,99.39,18.72,97.48Z'
    //         />
    //         <path d='M20.25,88.75l-1.94-.47c-.48,2-.88,4-1.19,6l2,.3C19.4,92.6,19.78,90.65,20.25,88.75Z' />
    //         <path
    //           style={{ fill: 'aqua' }}
    //           d='M18.8,112.14a40.11,40.11,0,0,1-.49-5.81l-2,0a41.42,41.42,0,0,0,.52,6.11Z'
    //         />
    //         <path
    //           style={{ fill: 'aqua' }}
    //           d='M17.47,115.49a25.46,25.46,0,0,0,2.3,5.77l1.75-1A23.07,23.07,0,0,1,19.41,115Z'
    //         />
    //         <path
    //           style={{ fill: 'aqua' }}
    //           d='M25.79,128.35l1.27-1.55a23.43,23.43,0,0,1-4-4.12l-1.6,1.2A25.94,25.94,0,0,0,25.79,128.35Z'
    //         />
    //         <path
    //           style={{ fill: 'aqua' }}
    //           d='M34.37,131.88c-.64-.44-1.3-.86-2-1.3-1-.65-2-1.31-3-2l-1.15,1.64c1,.72,2.06,1.4,3.07,2.06.66.42,1.31.85,1.94,1.28Z'
    //         />
    //         <path
    //           style={{ fill: 'aqua' }}
    //           d='M39.4,139.36l1.72-1a17.1,17.1,0,0,0-4.26-4.66l-1.24,1.57A15,15,0,0,1,39.4,139.36Z'
    //         />
    //         <path
    //           style={{ fill: 'aqua' }}
    //           d='M43.09,145.94a16.62,16.62,0,0,0-.68-4.65l-1.91.58a14.49,14.49,0,0,1,.59,4.1v.44c0,.36,0,.71,0,1.06l2,.06c0-.37,0-.74,0-1.12Z'
    //         />
    //         <path
    //           style={{ fill: 'aqua' }}
    //           d='M39.71,156.07l1.92.56a36,36,0,0,0,1.22-6l-2-.23A34.51,34.51,0,0,1,39.71,156.07Z'
    //         />
    //         <path
    //           style={{ fill: 'aqua' }}
    //           d='M36.34,164.18l1.77.93a49.76,49.76,0,0,0,2.54-5.56l-1.87-.71A46.68,46.68,0,0,1,36.34,164.18Z'
    //         />
    //         <path
    //           style={{ fill: 'aqua' }}
    //           d='M31.75,171.82l1.68,1.08c1-1.6,2.13-3.32,3.2-5.13l-1.73-1C33.86,168.54,32.77,170.23,31.75,171.82Z'
    //         />
    //         <path
    //           style={{ fill: 'aqua' }}
    //           d='M27,179.55l1.76.95c1-1.79,2.08-3.57,3-5.08l-1.69-1.08C29.14,175.88,28,177.71,27,179.55Z'
    //         />
    //         <path
    //           style={{ fill: 'aqua' }}
    //           d='M25.64,182.31a23.52,23.52,0,0,0-1.83,6l2,.31a21.82,21.82,0,0,1,1.67-5.46Z'
    //         />
    //         <path
    //           style={{ fill: 'aqua' }}
    //           d='M25.58,191.4l-2,0c0,.54,0,1.09.09,1.63a24.39,24.39,0,0,0,.92,4.54l1.92-.57a22.88,22.88,0,0,1-.85-4.17C25.62,192.37,25.59,191.88,25.58,191.4Z'
    //         />
    //         <path
    //           style={{ fill: 'aqua' }}
    //           d='M29.5,204.54c-.74-1.65-1.44-3.21-2-4.76l-1.87.72c.62,1.6,1.33,3.18,2.08,4.86l.32.69,1.82-.81Z'
    //         />
    //         <path
    //           style={{ fill: 'aqua' }}
    //           d='M29.18,208.78c.86,2,1.53,3.79,2.08,5.53l1.91-.61c-.58-1.8-1.26-3.61-2.15-5.7Z'
    //         />
    //         <path
    //           style={{ fill: 'aqua' }}
    //           d='M35.18,222.63a50.44,50.44,0,0,0-1.16-6l-1.94.5a48,48,0,0,1,1.11,5.76Z'
    //         />
    //         <path
    //           style={{ fill: 'aqua' }}
    //           d='M33.49,225.82c.11,1.37.16,2.79.16,4.23,0,.54,0,1.1,0,1.66l2,.06c0-.59,0-1.16,0-1.72,0-1.49-.06-3-.16-4.38Z'
    //         />
    //         <path
    //           style={{ fill: 'aqua' }}
    //           d='M32.16,240.21l1.87.69a24.15,24.15,0,0,0,1.43-6.07l-2-.19A22.55,22.55,0,0,1,32.16,240.21Z'
    //         />
    //         <path
    //           style={{ fill: 'aqua' }}
    //           d='M28,247.88,29.65,249a38.15,38.15,0,0,0,3.16-5.28l-1.8-.88A37.36,37.36,0,0,1,28,247.88Z'
    //         />
    //         <path
    //           style={{ fill: 'aqua' }}
    //           d='M22.26,254.55,23.65,256a49.78,49.78,0,0,0,4.14-4.51l-1.55-1.26A50.35,50.35,0,0,1,22.26,254.55Z'
    //         />
    //         <path
    //           style={{ fill: 'orange' }}
    //           d='M7.74,264.23l.65,1.89A30.1,30.1,0,0,0,14,263.45l-1-1.72A29,29,0,0,1,7.74,264.23Z'
    //         />
    //         <path
    //           style={{ fill: 'orange' }}
    //           d='M4.32,264.92c-2,0-2.31-1.05-2.32-2.08l-2,0c0,2.58,1.6,4.06,4.33,4.06a7.65,7.65,0,0,0,.93-.05l-.22-2A6,6,0,0,1,4.32,264.92Z'
    //         />
    //         <path
    //           style={{ fill: 'orange' }}
    //           d='M3,258.89c.62-1.5,1.25-2.85,1.86-4L3.07,254c-.64,1.21-1.29,2.61-1.94,4.18q-.31.78-.54,1.47l1.9.62C2.62,259.8,2.79,259.36,3,258.89Z'
    //         />
    //         <path
    //           style={{ fill: 'orange' }}
    //           d='M9.91,249.65h0l.23,0,.22-2c-.15,0-.34,0-.45,0-1.8,0-3.51,1.19-5.22,3.63l1.63,1.15C7.6,250.61,8.84,249.65,9.91,249.65Z'
    //         />
    //         <path
    //           style={{ fill: 'orange' }}
    //           d='M13.48,249.41,12,250.8a16.64,16.64,0,0,1,2.88,4.82l1.84-.79A18.08,18.08,0,0,0,13.48,249.41Z'
    //         />
    //         <path
    //           style={{ fill: 'green' }}
    //           d='M18.72,260.24c.91-.69,1.8-1.43,2.68-2.19l-1.31-1.51c-.67.58-1.35,1.14-2,1.68-.06-.18-.12-.35-.19-.53l-1.88.67c.13.37.26.74.39,1.13l-.94.66,1.13,1.65.44-.31c.24.81.48,1.66.72,2.54l1.93-.51C19.35,262.37,19,261.27,18.72,260.24Z'
    //         />
    //         <path
    //           style={{ fill: 'green' }}
    //           d='M20.41,266.45l-1.94.47c.44,1.82.87,3.78,1.29,5.84l2-.4C21.29,270.28,20.85,268.29,20.41,266.45Z'
    //         />
    //         <path
    //           style={{ fill: 'green' }}
    //           d='M22.3,275.32l-2,.37c.35,1.87.7,3.86,1,5.9l2-.32C23,279.21,22.65,277.2,22.3,275.32Z'
    //         />
    //         <path
    //           style={{ fill: 'green' }}
    //           d='M23.81,284.25l-2,.3c.31,2.05.6,4.05.86,5.94l2-.27C24.42,288.32,24.13,286.31,23.81,284.25Z'
    //         />
    //         <path
    //           style={{ fill: 'green' }}
    //           d='M25.08,293.21l-2,.25c.29,2.23.53,4.25.72,6l2-.23C25.6,297.48,25.36,295.45,25.08,293.21Z'
    //         />
    //         <path
    //           style={{ fill: 'green' }}
    //           d='M24.13,302.41c.18,1.72.28,2.75.29,2.87l1,.91.95-1.1c0-.11-.11-1.15-.29-2.88Z'
    //         />
    //         <circle
    //           style={{
    //             fill: '#fff',
    //             stroke: '#8d97a1',
    //             strokeMiterlimit: '10',
    //             strokeWidth: '2px',
    //           }}
    //           cx='35.02'
    //           cy='46.84'
    //           r='3.82'
    //         />
    //         <circle
    //           style={{
    //             fill: '#fff',
    //             stroke: '#8d97a1',
    //             strokeMiterlimit: '10',
    //             strokeWidth: '2px',
    //           }}
    //           cx='18.06'
    //           cy='95.53'
    //           r='3.82'
    //         />
    //         <circle
    //           style={{
    //             fill: '#fff',
    //             stroke: '#8d97a1',
    //             strokeMiterlimit: '10',
    //             strokeWidth: '2px',
    //           }}
    //           cx='41.66'
    //           cy='143.86'
    //           r='3.82'
    //         />
    //         <circle
    //           style={{
    //             fill: '#fff',
    //             stroke: '#8d97a1',
    //             strokeMiterlimit: '10',
    //             strokeWidth: '2px',
    //           }}
    //           cx='31.2'
    //           cy='211.63'
    //           r='3.82'
    //         />
    //         <circle
    //           style={{
    //             fill: '#fff',
    //             stroke: '#8d97a1',
    //             strokeMiterlimit: '10',
    //             strokeWidth: '2px',
    //           }}
    //           cx='4.82'
    //           cy='255.04'
    //           r='3.82'
    //         />
    //       </g>
    //     </g>
    //   </SVG>
    // </Wrapper>
  );
}
