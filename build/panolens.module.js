import { Cache, Texture, RGBFormat, RGBAFormat, CubeTexture, EventDispatcher, VideoTexture, LinearFilter, SpriteMaterial, Sprite, Color, CanvasTexture, DoubleSide, Vector3, Mesh, BackSide, Object3D, SphereBufferGeometry, MeshBasicMaterial, BufferGeometry, BufferAttribute, ShaderLib, BoxBufferGeometry, ShaderMaterial, Matrix4, Vector2, Quaternion, PlaneBufferGeometry, Math as Math$1, MOUSE, PerspectiveCamera, OrthographicCamera, Euler, Scene, StereoCamera, WebGLRenderTarget, NearestFilter, WebGLRenderer, Raycaster, Frustum, REVISION as REVISION$1 } from 'three';

const version="0.13.1";const peerDependencies={three:"^0.105.2"};

/**
 * REVISION
 * @module REVISION
 * @example PANOLENS.REVISION
 * @type {string} revision
 */
const REVISION = version.split( '.' )[ 1 ];

/**
 * VERSION
 * @module VERSION
 * @example PANOLENS.VERSION
 * @type {string} version
 */
const VERSION = version;

/**
 * THREEJS REVISION
 * @module THREE_REVISION
 * @example PANOLENS.THREE_REVISION
 * @type {string} threejs revision
 */
const THREE_REVISION = peerDependencies.three.split( '.' )[ 1 ];

/**
 * THREEJS VERSION
 * @module THREE_VERSION
 * @example PANOLENS.THREE_VERSION
 * @type {string} threejs version
 */
const THREE_VERSION = peerDependencies.three.replace( /[^0-9.]/g, '' );

/**
 * CONTROLS
 * @module CONTROLS
 * @example PANOLENS.CONTROLS.ORBIT
 * @property {number} ORBIT 0
 * @property {number} DEVICEORIENTATION 1
 */
const CONTROLS = { ORBIT: 0, DEVICEORIENTATION: 1 };

/**
 * MODES
 * @module MODES
 * @example PANOLENS.MODES.UNKNOWN
 * @property {number} UNKNOWN 0
 * @property {number} NORMAL 1
 * @property {number} CARDBOARD 2
 * @property {number} STEREO 3
 */
const MODES = { UNKNOWN: 0, NORMAL: 1, CARDBOARD: 2, STEREO: 3 };

/**
 * Data URI Images
 * @module DataImage
 * @example PANOLENS.DataImage.Info
 * @property {string} Info Information Icon
 * @property {string} Arrow Arrow Icon
 * @property {string} FullscreenEnter Fullscreen Enter Icon
 * @property {string} FullscreenLeave Fullscreen Leave Icon
 * @property {string} VideoPlay Video Play Icon
 * @property {string} VideoPause Video Pause Icon
 * @property {string} WhiteTile White Tile Icon
 * @property {string} Setting Settings Icon
 * @property {string} ChevronRight Chevron Right Icon
 * @property {string} Check Check Icon
 * @property {string} ViewIndicator View Indicator Icon
 */
const DataImage = {
    Info: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAABIAAAASABGyWs+AAAACXZwQWcAAABAAAAAQADq8/hgAAADBklEQVR42u2bP08UQRiHnzFaSYCI/xoksdBIqGwIiYWRUBISExpCQ0ej38FWOmlIKKhoMPEbaCxsrrHiYrQgOSlQEaICrT+LHSPZzNzt3s3c3Hn7lHvLzvv82L2dm30XKioqKgYY062BJF0HpoA7wARwBbhsPz4DjoEG8AnYNcZ8Sx1Op8IXJM1KWpdUV3nq9m9nJV1I7VNGfEzSM0mNNqR9NOwxx1L7NRMflbQm6SSgeJ4TO8Zoat+8/LKkg4jieQ4kLaf2RtKwpJ0uiufZkTScSn5S0l5C+b/sSZrstvyMpKPU5uc4kjTTjkvpeYCkaeA1/+7hvcIZMGuMqUULQNIU8Aa4ltrWwyHwyBizGzwASSPAe+B2assW7AH3jTE/i+xcZoa12Qfy2Bo3i+5cKABl99zF1GYlWFTBeULLS0DZrOsDcDNggTXgc27bLWA64BhfgHvGmB8dHUXZ1DM0S45xliKMs9bKr+klIOkqsBrwv9JtVq1DewEAT4Ch1BYdMGQdygeg7Df4SmqDAKyoyXpCszPgITCeuvoAjFuX0gE8jljUdv7bCtiOOJ7XpdUZ8L/gdXHOA5QtYH5NXXVgbrgWWn1nwFTqaiPgdPIFcDd1tRFwOl307DwRuZgXwLvctgfA04hjOp18AcReZ6sZY16e3yDpUuQxnU6+S2AkcjEpcDr1zxOXSPgCKLSa0mc4nXwB/EpdbQScTr4AGqmrjYDTyRfAx9TVRsDp5Aug8LJyH+F0cgZg58z11BUHpO5ruGh2G3ybuuqAeF2aBfAqddUB8bq0OgP2U1cegH3aOQOMMb+BrdTVB2DLupQLwLIOnKY26IBT6+ClaQDGmO/ARmqLDtiwDn7HVkcY+EdjNoTlCI+tYhO2iUppm6HKslPUq2qQKHpUe8AFsjaUXuUQWCgqXyoAG8IuME/WkNRrnAHzZfqDSgdgQ6gBc2Td3b3CMTBXtkOsIzTIjZLnQhjcVtlcEIPZLJ0LoVvt8s/Va+3yuSAG84UJRxB98cpM9dJURUVFxSDzBxKde4Lk3/h2AAAAAElFTkSuQmCC', 
    Arrow: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAABIAAAASABGyWs+AAAACXZwQWcAAABAAAAAQADq8/hgAAADPklEQVR42u2bMUscQRiG30/SRaJEI1ZKUiRErNIELRUbQYSAnX8hpVUgkDYp0wgWVjYW+QcJaQzYpLojJIXhtDDEKBpj65ti58ixmdmb2ZvZ7+T2AUHudmfmeXf2bnb3O6CmpqZmgJGqOiI5AWAWwEMA0wDuArht3r4CcAagBeAbgIaI/NQOp1fhIZKLJN+SbDKcptl3keSQtk+I+BjJVyRbJaRdtEybY9p+ReKjJN+QvIwonufS9DGq7ZuXXyd5nFA8zzHJdW1vkLxDcrdC8Ty7JO9oyc+QPFCUb3NAcqZq+TmSp9rmHZySnCvjErwOIPkUwHv8+w7vF64ALIrIfrIASM4C+ADgnratgxMACyLSiB4AyREAnwE80LbswgGAJyJy4bNxyApr6wbIw4xxy3djrwCYfeeuaZsFsEbPdULXU4DZqusLgMkEA21P05EEbf8A8FhEzos28pkBLxLKL5s/r/M1kEkz9vKQHGeatf05yfmOfubNa7G5JDle5NhtBjwHMBz5yFwAWBaRT+0XzP8pZsKwcQiH2fX8Ycojb+kzxUw4ZJn7CSQXqpRPHMKCq7+iZJ71Mvdy/DftXSQ6HcJdSDaqPPKW/mPOBO+lcbvzCU35RCFM2PpwnQKzZQfdgfe0dxH5dLA6uQJ4pC2fIASrkyuA6X6QjxyC1ckVQNn7bNHlI4ZgdXIFUObiJJl8pBCsTjGfuIwA2Cv4FN7xbYjkjqsRAHuIePXoCiDF1Zk2VidXAL+1R5sAq5MrgJb2aBNgdXIF8FV7tAmwOrkCCFs73wysTtYATHFCU3vEEWm6Ci6KvgY/ao86Ik6XogDeaY86Ik6XbjPgSHvkEThCwQy45XpDRK5JbgN4GWkgUyR9H65MRQxgW0SunZ5FezK7pfwd8e8MV8UfAPdF5Jdrg8JrAbPjprZFD2wWyQP6j8ZSEufRmGlgQ9umBBvd5IOgbjFUKLu+XnWBhG+rpsFVZGUo/coJgFVf+aAATAgNACvICpL6jSsAKyH1QcEBmBD2ASwhq+7uF84ALIVWiPUEB7lQsiOEwS2VzQUxmMXSuRCqKpd/zX4rl88FMZg/mLAEcSN+MlP/aKqmpqZmkPkL0hSjwOpNKxwAAAAASUVORK5CYII=',
    FullscreenEnter: 'data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjRkZGRkZGIiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz4KICAgIDxwYXRoIGQ9Ik03IDE0SDV2NWg1di0ySDd2LTN6bS0yLTRoMlY3aDNWNUg1djV6bTEyIDdoLTN2Mmg1di01aC0ydjN6TTE0IDV2MmgzdjNoMlY1aC01eiIvPgo8L3N2Zz4=',
    FullscreenLeave: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggc3R5bGU9ImZpbGw6I2ZmZiIgZD0iTTE0LDE0SDE5VjE2SDE2VjE5SDE0VjE0TTUsMTRIMTBWMTlIOFYxNkg1VjE0TTgsNUgxMFYxMEg1VjhIOFY1TTE5LDhWMTBIMTRWNUgxNlY4SDE5WiIgLz48L3N2Zz4=',
    VideoPlay: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggc3R5bGU9ImZpbGw6I2ZmZiIgZD0iTTgsNS4xNFYxOS4xNEwxOSwxMi4xNEw4LDUuMTRaIiAvPjwvc3ZnPg==',
    VideoPause: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggc3R5bGU9ImZpbGw6I2ZmZiIgZD0iTTE0LDE5LjE0SDE4VjUuMTRIMTRNNiwxOS4xNEgxMFY1LjE0SDZWMTkuMTRaIiAvPjwvc3ZnPg==',
    WhiteTile: 'data:image/png;base64,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',
    Setting: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAABIAAAASABGyWs+AAAACXZwQWcAAABAAAAAQADq8/hgAAADn0lEQVR42u2bzUsVURjGnyO6CPzAMnTjppAo3LTwH1CqTfaxbeOiRS37A0wXtROFVi1aRBs3LWohSIGbQAQXViBGRhG0UIRKUCpK7q/FnOB2uc6cOXNmRnGe3eW+H8/7zLln3vNxpQoVKlQ4wjBFJAFOSRqX1O7osivpvjHmU1nChBZglvSYLYJbS0EanCvIJzWK+gnsyH34/8OuMaYjb265jwCgz6N4SWq3vodbAEmnS/KtBDgoAgyU5BteAOAkMAPcBroc7PskDWfgN+wyDwBdltMMcDI3tYBnde/pHeARMNTErgd4APzweP834oeN1dMkz5DlsFNn/yyv4kdiSK4At4AO4CqwGaDwRmza2B0210qM7YhrXU59ANAq6bWkwQTTn5KO5fIE0uVYlXTeGLOXFMx1DrjlULwKKN41x6DlnIjEEQCckPRe0okCiguJr5LOGGO+xhm5jICJQ1i8LOeJJKPYEQAMKvrtt5ZdjSf2FM0Fq/sZJI2A6UNcvCz36TiDfUcAcE1SPu/U6Mm8k/TFfu6XdFb5iX3dGPM8lQfwNod3+TowBnQ3yddtv1vPIe+b1JIBiwEJ1IAJ208k5W21trWA+V/5CHAcmAtU/A2P/DcCiTAHHE8tgCVhgLvAXgYCk17Jo/yTGfLuWe7Zd72AC8CWB4n3OAz7mLytNkZabAEXMhfeQKYfWEpJZCxA3rGUOZeA/qDF15FpAz47EvlNk9neI2e3jeWCz0BbmvipNkSMMX8kuSZYM8Z8zyqAjbHmaN5mOeYjgIXrU93MWrxHrNQjrqiDkQMLHwG+OdqF3NN3jeXKzU8AoF1SzdH8XKhJUO7HZDXLMbwAwICkJUULFxe0SbqSVQAbw3Xi7Ze0ZLmGAzAKbHs0JGU1QtvAaIjCW4B7ZOvJy2qFa5a730RPtBiaz0CgnkiZi6F5fBZDVMvho7EhcuS3xJJ2hV9IupgTqaLw0hhzab8vq23xOG/r+LDsKjLgYVzxUnU0ltwK2wDezUyJmEwqXgp/PL4rvxthaeCSI+zxuA10J8ZkWdJNSb2SLkvayKHwDRu71+ZajrG941J8agALDQ3GU/a/IvMkYCPzmCbtLNEVmacNtgs5iP9fYVNEV1Q6Hez7yNZSL+J2SarTcpqiyV2iUkG0IvPFvbz5FbEn+KEk3wMjwMeSfCsBXFBdly9CAPk9ydyffpECuB5tZfVJjaKWueOSfinln6YK4lahQoUKRxd/AcRPGTcQCAUQAAAAAElFTkSuQmCC',
    ChevronRight: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTguNTksMTYuNThMMTMuMTcsMTJMOC41OSw3LjQxTDEwLDZMMTYsMTJMMTAsMThMOC41OSwxNi41OFoiIC8+PC9zdmc+',
    Check: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTIxLDdMOSwxOUwzLjUsMTMuNUw0LjkxLDEyLjA5TDksMTYuMTdMMTkuNTksNS41OUwyMSw3WiIgLz48L3N2Zz4=',
    ViewIndicator: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBpZD0idmlldy1pbmRpY2F0b3IiIGhlaWdodD0iMzAiIHdpZHRoPSIzMCIgdmlld0JveD0iLTIuNSAtMSAzMCAzMCI+Cgk8c3R5bGUgdHlwZT0idGV4dC9jc3MiPi5zdDB7c3Ryb2tlLXdpZHRoOjI7c3Ryb2tlLW1pdGVybGltaXQ6MTA7ZmlsbDpub25lO30uc3Qxe3N0cm9rZS13aWR0aDo2O3N0cm9rZS1taXRlcmxpbWl0OjEwO30KCTwvc3R5bGU+Cgk8Zz4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNIDEyLjUgMCBBIDEyLjUgMTIuNSAwIDAgMCAtMTIuNSAwIEEgMTIuNSAxMi41IDAgMCAwIDEyLjUgMCIgdHJhbnNmb3JtPSJtYXRyaXgoMSwwLDAsMSwxMywxNS41KSI+PC9wYXRoPgoJCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0gMTMgMCBMIDEwIDIgTCAxNiAyIFoiPjwvcGF0aD4KCQk8cGF0aCBjbGFzcz0ic3QyIiBkPSJNIDIgMCBBIDIgMiAwIDAgMCAtMiAwIEEgMiAyIDAgMCAwIDIgMCIgdHJhbnNmb3JtPSJtYXRyaXgoMSwwLDAsMSwxMywxNS41KSI+PC9wYXRoPgoJCTxwYXRoIGNsYXNzPSJzdDEiIGlkPSJpbmRpY2F0b3IiIHRyYW5zZm9ybT0ibWF0cml4KDEsMCwwLDEsMTMsMTUuNSkiPjwvcGF0aD4KCTwvZz4KPC9zdmc+'
};

/**
 * @module ImageLoader
 * @description Image loader with progress based on {@link https://github.com/mrdoob/three.js/blob/master/src/loaders/ImageLoader.js}
 */
const ImageLoader = {

    /**
     * Load image
     * @example PANOLENS.ImageLoader.load( IMAGE_URL )
     * @method load
     * @param  {string}   url        - An image url
     * @param  {function} onLoad     - On load callback
     * @param  {function} onProgress - In progress callback
     * @param  {function} onError    - On error callback
     */
    load: function ( url, onLoad = () => {}, onProgress = () => {}, onError = () => {} ) {

        // Enable cache
        Cache.enabled = true;

        let cached, request, arrayBufferView, blob, urlCreator, image, reference;
	
        // Reference key
        for ( let iconName in DataImage ) {
	
            if ( DataImage.hasOwnProperty( iconName ) && url === DataImage[ iconName ] ) {
	
                reference = iconName;
	
            }
	
        }
	
        // Cached
        cached = Cache.get( reference ? reference : url );
	
        if ( cached !== undefined ) {
	
            if ( onLoad ) {
	
                setTimeout( function () {
	
                    onProgress( { loaded: 1, total: 1 } );
                    onLoad( cached );
	
                }, 0 );
	
            }
	
            return cached;
	
        }
		
        // Construct a new XMLHttpRequest
        urlCreator = window.URL || window.webkitURL;
        image = document.createElementNS( 'http://www.w3.org/1999/xhtml', 'img' );
	
        // Add to cache
        Cache.add( reference ? reference : url, image );
	
        const onImageLoaded = () => {
	
            urlCreator.revokeObjectURL( image.src );
            onLoad( image );
	
        };

        if ( url.indexOf( 'data:' ) === 0 ) {

            image.addEventListener( 'load', onImageLoaded, false );
            image.src = url;
            return image;
        }
	
        image.crossOrigin = this.crossOrigin !== undefined ? this.crossOrigin : '';
	
        request = new window.XMLHttpRequest();
        request.open( 'GET', url, true );
        request.responseType = 'arraybuffer';
        request.addEventListener( 'error', onError );
        request.addEventListener( 'progress', event => {

            if  ( !event ) return;

            const { loaded, total, lengthComputable } = event;
            
            if ( lengthComputable ) {
	
                onProgress( { loaded, total } );
	
            }
	
        } );
        
        request.addEventListener( 'loadend', event => {

            if  ( !event ) return;
            const { currentTarget: { response } } = event;

            arrayBufferView = new Uint8Array( response );
            blob = new window.Blob( [ arrayBufferView ] );
				
            image.addEventListener( 'load', onImageLoaded, false );
            image.src = urlCreator.createObjectURL( blob );
	
        } );
	
        request.send(null);
	
    }

};

/**
 * @module TextureLoader
 * @description Texture loader based on {@link https://github.com/mrdoob/three.js/blob/master/src/loaders/TextureLoader.js}
 */
const TextureLoader = {

    /**
     * Load image texture
     * @example PANOLENS.TextureLoader.load( IMAGE_URL )
     * @method load
     * @param  {string}   url        - An image url
     * @param  {function} onLoad     - On load callback
     * @param  {function} onProgress - In progress callback
     * @param  {function} onError    - On error callback
     * @return {THREE.Texture}   	 - Image texture
     */
    load: function ( url, onLoad = () => {}, onProgress, onError ) {

        var texture = new Texture(); 

        ImageLoader.load( url, function ( image ) {

            texture.image = image;

            // JPEGs can't have an alpha channel, so memory can be saved by storing them as RGB.
            const isJPEG = url.search( /\.(jpg|jpeg)$/ ) > 0 || url.search( /^data\:image\/jpeg/ ) === 0;

            texture.format = isJPEG ? RGBFormat : RGBAFormat;
            texture.needsUpdate = true;

            onLoad( texture );

        }, onProgress, onError );

        return texture;

    }

};

/**
 * @module CubeTextureLoader
 * @description Cube Texture Loader based on {@link https://github.com/mrdoob/three.js/blob/master/src/loaders/CubeTextureLoader.js}
 */
const CubeTextureLoader = {

    /**
     * Load 6 images as a cube texture
     * @example PANOLENS.CubeTextureLoader.load( [ 'px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png' ] )
     * @method load
     * @param  {array}   urls        - array of 6 urls to images, one for each side of the CubeTexture. The urls should be specified in the following order: pos-x, neg-x, pos-y, neg-y, pos-z, neg-z
     * @param  {function} onLoad     - On load callback
     * @param  {function} onProgress - In progress callback
     * @param  {function} onError    - On error callback
     * @return {THREE.CubeTexture}   - Cube texture
     */
    load: function ( urls, onLoad = () => {}, onProgress = () => {}, onError ) {

	   var texture, loaded, progress, all, loadings;

	   texture = new CubeTexture( [] );

	   loaded = 0;
	   progress = {};
	   all = {};

	   urls.map( function ( url, index ) {

		   ImageLoader.load( url, function ( image ) {

			   texture.images[ index ] = image;

			   loaded++;

			   if ( loaded === 6 ) {

				   texture.needsUpdate = true;

				   onLoad( texture );

			   }

		   }, function ( event ) {

			   progress[ index ] = { loaded: event.loaded, total: event.total };

			   all.loaded = 0;
			   all.total = 0;
			   loadings = 0;

			   for ( var i in progress ) {

				   loadings++;
				   all.loaded += progress[ i ].loaded;
				   all.total += progress[ i ].total;

			   }

			   if ( loadings < 6 ) {

				   all.total = all.total / loadings * 6;

			   }

			   onProgress( all );

		   }, onError );

	   } );

	   return texture;

    }

};

/**
 * @classdesc User Media
 * @constructor
 * @param {object} [constraints={ video: { width: { ideal: 1920 }, height: { ideal: 1080 }, facingMode: { exact: 'environment' } }, audio: false }]
 */
function Media ( constraints ) {

    const defaultConstraints = { video: { width: { ideal: 1920 }, height: { ideal: 1080 }, facingMode: { exact: 'environment' } }, audio: false };

    this.constraints = Object.assign( defaultConstraints, constraints );

    this.container = null;
    this.scene = null;
    this.element = null;
    this.devices = [];
    this.stream = null;
    this.ratioScalar = 1;
    this.videoDeviceIndex = 0;

}
Media.prototype = Object.assign( Object.create( EventDispatcher.prototype ), {

    setContainer: function ( container ) {

        this.container = container;

    },

    setScene: function ( scene ) {

        this.scene = scene;

    },

    /**
     * Enumerate devices
     * @memberOf Media
     * @instance
     * @returns {Promise}
     */
    enumerateDevices: function () {

        const devices = this.devices;
        const resolvedPromise = new Promise( resolve => { resolve( devices ); } );

        return devices.length > 0 ? resolvedPromise : window.navigator.mediaDevices.enumerateDevices();

    },

    /**
     * Switch to next available video device
     * @memberOf Media
     * @instance
     */
    switchNextVideoDevice: function () {

        const stop = this.stop.bind( this );
        const start = this.start.bind( this );
        const setVideDeviceIndex = this.setVideDeviceIndex.bind( this );

        let index = this.videoDeviceIndex;

        this.getDevices( 'video' )
            .then( devices => {
                stop();
                index++;
                if ( index >= devices.length ) {
                    setVideDeviceIndex( 0 );
                    index--;
                } else {
                    setVideDeviceIndex( index );
                }

                start( devices[ index ] );
            

            } );

    },

    /**
     * Get devices
     * @param {string} type - type keyword to match device.kind
     * @memberOf Media
     * @instance
     */
    getDevices: function ( type = 'video' ) {

        const devices = this.devices;
        const validate = _devices => {

            return _devices.map( device => { 
                
                if ( !devices.includes( device ) ) { devices.push( device ); }
                return device; 
            
            } );
            
        };
        const filter = _devices => {

            const reg = new RegExp( type, 'i' );
            return _devices.filter( device => reg.test( device.kind ) );

        };

        return this.enumerateDevices()
            .then( validate )
            .then( filter );

    },

    /**
     * Get user media
     * @param {MediaStreamConstraints} constraints
     * @memberOf Media
     * @instance
     */
    getUserMedia: function ( constraints ) {

        const setMediaStream = this.setMediaStream.bind( this );
        const playVideo = this.playVideo.bind( this );
        const onCatchError = error => { console.warn( `PANOLENS.Media: ${error}` ); };

        return window.navigator.mediaDevices.getUserMedia( constraints )
            .then( setMediaStream )
            .then( playVideo )
            .catch( onCatchError );

    },

    /**
     * Set video device index
     * @param {number} index 
     * @memberOf Media
     * @instance
     */
    setVideDeviceIndex: function ( index ) {

        this.videoDeviceIndex = index;

    },

    /**
     * Start streaming
     * @param {MediaDeviceInfo} [targetDevice]
     * @memberOf Media
     * @instance
     */
    start: function( targetDevice ) {

        const constraints = this.constraints;
        const getUserMedia = this.getUserMedia.bind( this );
        const onVideoDevices = devices => {

            if ( !devices || devices.length === 0 ) {

                throw Error( 'no video device found' );

            }

            const device = targetDevice || devices[ 0 ];
            constraints.video.deviceId = device.deviceId;

            return getUserMedia( constraints );

        };

        this.element = this.createVideoElement();

        return this.getDevices().then( onVideoDevices );

    },

    /**
     * Stop streaming
     * @memberOf Media
     * @instance
     */
    stop: function () {

        const stream = this.stream;

        if ( stream && stream.active ) {

            const track = stream.getTracks()[ 0 ];

            track.stop();

            window.removeEventListener( 'resize', this.onWindowResize.bind( this ) );

            this.element = null;
            this.stream = null;

        }

    },

    /**
     * Set media stream
     * @param {MediaStream} stream 
     * @memberOf Media
     * @instance
     */
    setMediaStream: function ( stream ) {

        this.stream = stream;
        this.element.srcObject = stream;

        if ( this.scene ) {

            this.scene.background = this.createVideoTexture();

        }
        
        window.addEventListener( 'resize', this.onWindowResize.bind( this ) );

    },

    /**
     * Play video element
     * @memberOf Media
     * @instance
     */
    playVideo: function () {

        const { element } = this;

        if ( element ) {

            element.play();
            this.dispatchEvent( { type: 'play' } );

        }

    },

    /**
     * Pause video element
     * @memberOf Media
     * @instance
     */
    pauseVideo: function () {

        const { element } = this;

        if ( element ) {

            element.pause();
            this.dispatchEvent( { type: 'pause' } );

        }

    },

    /**
     * Create video texture
     * @memberOf Media
     * @instance
     * @returns {THREE.VideoTexture}
     */
    createVideoTexture: function () {

        const video = this.element;
        const texture = new VideoTexture( video );

        texture.generateMipmaps = false;
        texture.minFilter = LinearFilter;
        texture.magFilter = LinearFilter;
        texture.format = RGBFormat;
        texture.center.set( 0.5, 0.5 );

        video.addEventListener( 'canplay', this.onWindowResize.bind( this ) );

        return texture;

    },

    /**
     * Create video element
     * @memberOf Media
     * @instance
     * @returns {HTMLVideoElement}
     * @fires Media#canplay
     */
    createVideoElement: function() {

        const dispatchEvent = this.dispatchEvent.bind( this );
        const video = document.createElement( 'video' );

        /**
         * Video can play event
         * @type {object}
         * @event Media#canplay
         */
        const canPlay = () => dispatchEvent( { type: 'canplay' } );
        
        video.setAttribute( 'autoplay', '' );
        video.setAttribute( 'muted', '' );
        video.setAttribute( 'playsinline', '' );

        video.style.position = 'absolute';
        video.style.top = '0';
        video.style.left = '0';
        video.style.width = '100%';
        video.style.height = '100%';
        video.style.objectPosition = 'center';
        video.style.objectFit = 'cover';
        video.style.display = this.scene ? 'none' : '';

        video.addEventListener( 'canplay', canPlay );

        return video;

    },

    /**
     * On window resize event
     * @param {Event} event 
     * @memberOf Media
     * @instance
     */
    onWindowResize: function () {

        if ( this.element && this.element.videoWidth && this.element.videoHeight && this.scene ) {

            const { clientWidth: width, clientHeight: height } = this.container;
            const texture = this.scene.background;
            const { videoWidth, videoHeight } = this.element;
            const cameraRatio = videoHeight / videoWidth;
            const viewportRatio = this.container ? width / height : 1.0;
            const ratio = cameraRatio * viewportRatio * this.ratioScalar;

            if ( width > height ) {
                texture.repeat.set( ratio, 1 );
            } else {
                texture.repeat.set( 1, 1 / ratio );
            }

        }

    }

} );

/**
 * @classdesc Reticle 3D Sprite
 * @constructor
 * @param {THREE.Color} [color=0xffffff] - Color of the reticle sprite
 * @param {boolean} [autoSelect=true] - Auto selection
 * @param {number} [dwellTime=1500] - Duration for dwelling sequence to complete
 */

function Reticle ( color = 0xffffff, autoSelect = true, dwellTime = 1500 ) {

    this.dpr = window.devicePixelRatio;

    const { canvas, context } = this.createCanvas();
    const material = new SpriteMaterial( { color, map: this.createCanvasTexture( canvas ) } );

    Sprite.call( this, material );

    this.canvasWidth = canvas.width;
    this.canvasHeight = canvas.height;
    this.context = context;
    this.color = color instanceof Color ? color : new Color( color );    

    this.autoSelect = autoSelect;
    this.dwellTime = dwellTime;
    this.rippleDuration = 500;
    this.position.z = -10;
    this.center.set( 0.5, 0.5 );
    this.scale.set( 0.5, 0.5, 1 );

    this.startTimestamp = null;
    this.timerId = null;
    this.callback = null;

    this.frustumCulled = false;

    this.updateCanvasArcByProgress( 0 );

}
Reticle.prototype = Object.assign( Object.create( Sprite.prototype ), {

    constructor: Reticle,

    /**
     * Set material color
     * @param {THREE.Color} color 
     * @memberOf Reticle
     * @instance
     */
    setColor: function ( color ) {

        this.material.color.copy( color instanceof Color ? color : new Color( color ) );

    },

    /**
     * Create canvas texture
     * @param {HTMLCanvasElement} canvas 
     * @memberOf Reticle
     * @instance
     * @returns {THREE.CanvasTexture}
     */
    createCanvasTexture: function ( canvas ) {

        const texture = new CanvasTexture( canvas );
        texture.minFilter = LinearFilter;
        texture.magFilter = LinearFilter;
        texture.generateMipmaps = false;

        return texture;

    },

    /**
     * Create canvas element
     * @memberOf Reticle
     * @instance
     * @returns {object} object
     * @returns {HTMLCanvasElement} object.canvas
     * @returns {CanvasRenderingContext2D} object.context
     */
    createCanvas: function () {

        const width = 32;
        const height = 32;
        const canvas = document.createElement( 'canvas' );
        const context = canvas.getContext( '2d' );
        const dpr = this.dpr;

        canvas.width = width * dpr;
        canvas.height = height * dpr;
        context.scale( dpr, dpr );

        context.shadowBlur = 5;
        context.shadowColor = 'rgba(200,200,200,0.9)';

        return { canvas, context };

    },

    /**
     * Update canvas arc by progress
     * @param {number} progress 
     * @memberOf Reticle
     * @instance
     */
    updateCanvasArcByProgress: function ( progress ) {

        const context = this.context;
        const { canvasWidth, canvasHeight, material } = this;
        const dpr = this.dpr;
        const degree = progress * Math.PI * 2;
        const color = this.color.getStyle();
        const x = canvasWidth * 0.5 / dpr;
        const y = canvasHeight * 0.5 / dpr;
        const lineWidth = 3;
        
        context.clearRect( 0, 0, canvasWidth, canvasHeight );
        context.beginPath();

        if ( progress === 0 ) {
            context.arc( x, y, canvasWidth / 16, 0, 2 * Math.PI );
            context.fillStyle = color;
            context.fill();
        } else {
            context.arc( x, y, canvasWidth / 4 - lineWidth, -Math.PI / 2, -Math.PI / 2 + degree );
            context.strokeStyle = color;
            context.lineWidth = lineWidth;
            context.stroke();
        }

        context.closePath();

        material.map.needsUpdate = true;

    },

    /**
     * Ripple effect
     * @memberOf Reticle
     * @instance
     * @fires Reticle#reticle-ripple-start
     * @fires Reticle#reticle-ripple-end
     */
    ripple: function () {

        const context = this.context;
        const { canvasWidth, canvasHeight, material } = this;
        const duration = this.rippleDuration;
        const timestamp = performance.now();
        const color = this.color;
        const dpr = this.dpr;
        const x = canvasWidth * 0.5 / dpr;
        const y = canvasHeight * 0.5 / dpr;

        const update = () => {

            const timerId = window.requestAnimationFrame( update );
            const elapsed = performance.now() - timestamp;
            const progress = elapsed / duration;
            const opacity = 1.0 - progress > 0 ? 1.0 - progress : 0;
            const radius = progress * canvasWidth * 0.5 / dpr;

            context.clearRect( 0, 0, canvasWidth, canvasHeight );
            context.beginPath();
            context.arc( x, y, radius, 0, Math.PI * 2 );
            context.fillStyle = `rgba(${color.r * 255}, ${color.g * 255}, ${color.b * 255}, ${opacity})`;
            context.fill();
            context.closePath();

            if ( progress >= 1.0 ) {

                window.cancelAnimationFrame( timerId );
                this.updateCanvasArcByProgress( 0 );

                /**
                 * Reticle ripple end event
                 * @type {object}
                 * @event Reticle#reticle-ripple-end
                 */
                this.dispatchEvent( { type: 'reticle-ripple-end' } );

            }

            material.map.needsUpdate = true;

        };

        /**
         * Reticle ripple start event
         * @type {object}
         * @event Reticle#reticle-ripple-start
         */
        this.dispatchEvent( { type: 'reticle-ripple-start' } );

        update();

    },

    /**
     * Make reticle visible
     * @memberOf Reticle
     * @instance
     */
    show: function () {

        this.visible = true;

    },

    /**
     * Make reticle invisible
     * @memberOf Reticle
     * @instance
     */
    hide: function () {

        this.visible = false;

    },

    /**
     * Start dwelling
     * @param {function} callback 
     * @memberOf Reticle
     * @instance
     * @fires Reticle#reticle-start
     */
    start: function ( callback ) {

        if ( !this.autoSelect ) {

            return;

        }

        /**
         * Reticle start event
         * @type {object}
         * @event Reticle#reticle-start
         */
        this.dispatchEvent( { type: 'reticle-start' } );

        this.startTimestamp = performance.now();
        this.callback = callback;
        this.update();

    },

    /**
     * End dwelling
     * @memberOf Reticle
     * @instance
     * @fires Reticle#reticle-end
     */
    end: function(){

        if ( !this.startTimestamp ) { return; }

        window.cancelAnimationFrame( this.timerId );

        this.updateCanvasArcByProgress( 0 );
        this.callback = null;
        this.timerId = null;
        this.startTimestamp = null;

        /**
         * Reticle end event
         * @type {object}
         * @event Reticle#reticle-end
         */
        this.dispatchEvent( { type: 'reticle-end' } );

    },

    /**
     * Update dwelling
     * @memberOf Reticle
     * @instance
     * @fires Reticle#reticle-update
     */
    update: function () {

        this.timerId = window.requestAnimationFrame( this.update.bind( this ) );

        const elapsed = performance.now() - this.startTimestamp;
        const progress = elapsed / this.dwellTime;

        this.updateCanvasArcByProgress( progress );

        /**
         * Reticle update event
         * @type {object}
         * @event Reticle#reticle-update
         */
        this.dispatchEvent( { type: 'reticle-update', progress } );

        if ( progress >= 1.0 ) {

            window.cancelAnimationFrame( this.timerId );
            if ( this.callback ) { this.callback(); }
            this.end();
            this.ripple();

        }

    }

} );

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var Tween = createCommonjsModule(function (module, exports) {
/**
 * Tween.js - Licensed under the MIT license
 * https://github.com/tweenjs/tween.js
 * ----------------------------------------------
 *
 * See https://github.com/tweenjs/tween.js/graphs/contributors for the full list of contributors.
 * Thank you all, you're awesome!
 */


var _Group = function () {
	this._tweens = {};
	this._tweensAddedDuringUpdate = {};
};

_Group.prototype = {
	getAll: function () {

		return Object.keys(this._tweens).map(function (tweenId) {
			return this._tweens[tweenId];
		}.bind(this));

	},

	removeAll: function () {

		this._tweens = {};

	},

	add: function (tween) {

		this._tweens[tween.getId()] = tween;
		this._tweensAddedDuringUpdate[tween.getId()] = tween;

	},

	remove: function (tween) {

		delete this._tweens[tween.getId()];
		delete this._tweensAddedDuringUpdate[tween.getId()];

	},

	update: function (time, preserve) {

		var tweenIds = Object.keys(this._tweens);

		if (tweenIds.length === 0) {
			return false;
		}

		time = time !== undefined ? time : TWEEN.now();

		// Tweens are updated in "batches". If you add a new tween during an update, then the
		// new tween will be updated in the next batch.
		// If you remove a tween during an update, it may or may not be updated. However,
		// if the removed tween was added during the current batch, then it will not be updated.
		while (tweenIds.length > 0) {
			this._tweensAddedDuringUpdate = {};

			for (var i = 0; i < tweenIds.length; i++) {

				var tween = this._tweens[tweenIds[i]];

				if (tween && tween.update(time) === false) {
					tween._isPlaying = false;

					if (!preserve) {
						delete this._tweens[tweenIds[i]];
					}
				}
			}

			tweenIds = Object.keys(this._tweensAddedDuringUpdate);
		}

		return true;

	}
};

var TWEEN = new _Group();

TWEEN.Group = _Group;
TWEEN._nextId = 0;
TWEEN.nextId = function () {
	return TWEEN._nextId++;
};


// Include a performance.now polyfill.
// In node.js, use process.hrtime.
if (typeof (self) === 'undefined' && typeof (process) !== 'undefined' && process.hrtime) {
	TWEEN.now = function () {
		var time = process.hrtime();

		// Convert [seconds, nanoseconds] to milliseconds.
		return time[0] * 1000 + time[1] / 1000000;
	};
}
// In a browser, use self.performance.now if it is available.
else if (typeof (self) !== 'undefined' &&
         self.performance !== undefined &&
		 self.performance.now !== undefined) {
	// This must be bound, because directly assigning this function
	// leads to an invocation exception in Chrome.
	TWEEN.now = self.performance.now.bind(self.performance);
}
// Use Date.now if it is available.
else if (Date.now !== undefined) {
	TWEEN.now = Date.now;
}
// Otherwise, use 'new Date().getTime()'.
else {
	TWEEN.now = function () {
		return new Date().getTime();
	};
}


TWEEN.Tween = function (object, group) {
	this._object = object;
	this._valuesStart = {};
	this._valuesEnd = {};
	this._valuesStartRepeat = {};
	this._duration = 1000;
	this._repeat = 0;
	this._repeatDelayTime = undefined;
	this._yoyo = false;
	this._isPlaying = false;
	this._reversed = false;
	this._delayTime = 0;
	this._startTime = null;
	this._easingFunction = TWEEN.Easing.Linear.None;
	this._interpolationFunction = TWEEN.Interpolation.Linear;
	this._chainedTweens = [];
	this._onStartCallback = null;
	this._onStartCallbackFired = false;
	this._onUpdateCallback = null;
	this._onRepeatCallback = null;
	this._onCompleteCallback = null;
	this._onStopCallback = null;
	this._group = group || TWEEN;
	this._id = TWEEN.nextId();

};

TWEEN.Tween.prototype = {
	getId: function () {
		return this._id;
	},

	isPlaying: function () {
		return this._isPlaying;
	},

	to: function (properties, duration) {

		this._valuesEnd = Object.create(properties);

		if (duration !== undefined) {
			this._duration = duration;
		}

		return this;

	},

	duration: function duration(d) {
		this._duration = d;
		return this;
	},

	start: function (time) {

		this._group.add(this);

		this._isPlaying = true;

		this._onStartCallbackFired = false;

		this._startTime = time !== undefined ? typeof time === 'string' ? TWEEN.now() + parseFloat(time) : time : TWEEN.now();
		this._startTime += this._delayTime;

		for (var property in this._valuesEnd) {

			// Check if an Array was provided as property value
			if (this._valuesEnd[property] instanceof Array) {

				if (this._valuesEnd[property].length === 0) {
					continue;
				}

				// Create a local copy of the Array with the start value at the front
				this._valuesEnd[property] = [this._object[property]].concat(this._valuesEnd[property]);

			}

			// If `to()` specifies a property that doesn't exist in the source object,
			// we should not set that property in the object
			if (this._object[property] === undefined) {
				continue;
			}

			// Save the starting value.
			this._valuesStart[property] = this._object[property];

			if ((this._valuesStart[property] instanceof Array) === false) {
				this._valuesStart[property] *= 1.0; // Ensures we're using numbers, not strings
			}

			this._valuesStartRepeat[property] = this._valuesStart[property] || 0;

		}

		return this;

	},

	stop: function () {

		if (!this._isPlaying) {
			return this;
		}

		this._group.remove(this);
		this._isPlaying = false;

		if (this._onStopCallback !== null) {
			this._onStopCallback(this._object);
		}

		this.stopChainedTweens();
		return this;

	},

	end: function () {

		this.update(Infinity);
		return this;

	},

	stopChainedTweens: function () {

		for (var i = 0, numChainedTweens = this._chainedTweens.length; i < numChainedTweens; i++) {
			this._chainedTweens[i].stop();
		}

	},

	group: function (group) {
		this._group = group;
		return this;
	},

	delay: function (amount) {

		this._delayTime = amount;
		return this;

	},

	repeat: function (times) {

		this._repeat = times;
		return this;

	},

	repeatDelay: function (amount) {

		this._repeatDelayTime = amount;
		return this;

	},

	yoyo: function (yoyo) {

		this._yoyo = yoyo;
		return this;

	},

	easing: function (easingFunction) {

		this._easingFunction = easingFunction;
		return this;

	},

	interpolation: function (interpolationFunction) {

		this._interpolationFunction = interpolationFunction;
		return this;

	},

	chain: function () {

		this._chainedTweens = arguments;
		return this;

	},

	onStart: function (callback) {

		this._onStartCallback = callback;
		return this;

	},

	onUpdate: function (callback) {

		this._onUpdateCallback = callback;
		return this;

	},

	onRepeat: function onRepeat(callback) {

		this._onRepeatCallback = callback;
		return this;

	},

	onComplete: function (callback) {

		this._onCompleteCallback = callback;
		return this;

	},

	onStop: function (callback) {

		this._onStopCallback = callback;
		return this;

	},

	update: function (time) {

		var property;
		var elapsed;
		var value;

		if (time < this._startTime) {
			return true;
		}

		if (this._onStartCallbackFired === false) {

			if (this._onStartCallback !== null) {
				this._onStartCallback(this._object);
			}

			this._onStartCallbackFired = true;
		}

		elapsed = (time - this._startTime) / this._duration;
		elapsed = (this._duration === 0 || elapsed > 1) ? 1 : elapsed;

		value = this._easingFunction(elapsed);

		for (property in this._valuesEnd) {

			// Don't update properties that do not exist in the source object
			if (this._valuesStart[property] === undefined) {
				continue;
			}

			var start = this._valuesStart[property] || 0;
			var end = this._valuesEnd[property];

			if (end instanceof Array) {

				this._object[property] = this._interpolationFunction(end, value);

			} else {

				// Parses relative end values with start as base (e.g.: +10, -3)
				if (typeof (end) === 'string') {

					if (end.charAt(0) === '+' || end.charAt(0) === '-') {
						end = start + parseFloat(end);
					} else {
						end = parseFloat(end);
					}
				}

				// Protect against non numeric properties.
				if (typeof (end) === 'number') {
					this._object[property] = start + (end - start) * value;
				}

			}

		}

		if (this._onUpdateCallback !== null) {
			this._onUpdateCallback(this._object, elapsed);
		}

		if (elapsed === 1) {

			if (this._repeat > 0) {

				if (isFinite(this._repeat)) {
					this._repeat--;
				}

				// Reassign starting values, restart by making startTime = now
				for (property in this._valuesStartRepeat) {

					if (typeof (this._valuesEnd[property]) === 'string') {
						this._valuesStartRepeat[property] = this._valuesStartRepeat[property] + parseFloat(this._valuesEnd[property]);
					}

					if (this._yoyo) {
						var tmp = this._valuesStartRepeat[property];

						this._valuesStartRepeat[property] = this._valuesEnd[property];
						this._valuesEnd[property] = tmp;
					}

					this._valuesStart[property] = this._valuesStartRepeat[property];

				}

				if (this._yoyo) {
					this._reversed = !this._reversed;
				}

				if (this._repeatDelayTime !== undefined) {
					this._startTime = time + this._repeatDelayTime;
				} else {
					this._startTime = time + this._delayTime;
				}

				if (this._onRepeatCallback !== null) {
					this._onRepeatCallback(this._object);
				}

				return true;

			} else {

				if (this._onCompleteCallback !== null) {

					this._onCompleteCallback(this._object);
				}

				for (var i = 0, numChainedTweens = this._chainedTweens.length; i < numChainedTweens; i++) {
					// Make the chained tweens start exactly at the time they should,
					// even if the `update()` method was called way past the duration of the tween
					this._chainedTweens[i].start(this._startTime + this._duration);
				}

				return false;

			}

		}

		return true;

	}
};


TWEEN.Easing = {

	Linear: {

		None: function (k) {

			return k;

		}

	},

	Quadratic: {

		In: function (k) {

			return k * k;

		},

		Out: function (k) {

			return k * (2 - k);

		},

		InOut: function (k) {

			if ((k *= 2) < 1) {
				return 0.5 * k * k;
			}

			return - 0.5 * (--k * (k - 2) - 1);

		}

	},

	Cubic: {

		In: function (k) {

			return k * k * k;

		},

		Out: function (k) {

			return --k * k * k + 1;

		},

		InOut: function (k) {

			if ((k *= 2) < 1) {
				return 0.5 * k * k * k;
			}

			return 0.5 * ((k -= 2) * k * k + 2);

		}

	},

	Quartic: {

		In: function (k) {

			return k * k * k * k;

		},

		Out: function (k) {

			return 1 - (--k * k * k * k);

		},

		InOut: function (k) {

			if ((k *= 2) < 1) {
				return 0.5 * k * k * k * k;
			}

			return - 0.5 * ((k -= 2) * k * k * k - 2);

		}

	},

	Quintic: {

		In: function (k) {

			return k * k * k * k * k;

		},

		Out: function (k) {

			return --k * k * k * k * k + 1;

		},

		InOut: function (k) {

			if ((k *= 2) < 1) {
				return 0.5 * k * k * k * k * k;
			}

			return 0.5 * ((k -= 2) * k * k * k * k + 2);

		}

	},

	Sinusoidal: {

		In: function (k) {

			return 1 - Math.cos(k * Math.PI / 2);

		},

		Out: function (k) {

			return Math.sin(k * Math.PI / 2);

		},

		InOut: function (k) {

			return 0.5 * (1 - Math.cos(Math.PI * k));

		}

	},

	Exponential: {

		In: function (k) {

			return k === 0 ? 0 : Math.pow(1024, k - 1);

		},

		Out: function (k) {

			return k === 1 ? 1 : 1 - Math.pow(2, - 10 * k);

		},

		InOut: function (k) {

			if (k === 0) {
				return 0;
			}

			if (k === 1) {
				return 1;
			}

			if ((k *= 2) < 1) {
				return 0.5 * Math.pow(1024, k - 1);
			}

			return 0.5 * (- Math.pow(2, - 10 * (k - 1)) + 2);

		}

	},

	Circular: {

		In: function (k) {

			return 1 - Math.sqrt(1 - k * k);

		},

		Out: function (k) {

			return Math.sqrt(1 - (--k * k));

		},

		InOut: function (k) {

			if ((k *= 2) < 1) {
				return - 0.5 * (Math.sqrt(1 - k * k) - 1);
			}

			return 0.5 * (Math.sqrt(1 - (k -= 2) * k) + 1);

		}

	},

	Elastic: {

		In: function (k) {

			if (k === 0) {
				return 0;
			}

			if (k === 1) {
				return 1;
			}

			return -Math.pow(2, 10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI);

		},

		Out: function (k) {

			if (k === 0) {
				return 0;
			}

			if (k === 1) {
				return 1;
			}

			return Math.pow(2, -10 * k) * Math.sin((k - 0.1) * 5 * Math.PI) + 1;

		},

		InOut: function (k) {

			if (k === 0) {
				return 0;
			}

			if (k === 1) {
				return 1;
			}

			k *= 2;

			if (k < 1) {
				return -0.5 * Math.pow(2, 10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI);
			}

			return 0.5 * Math.pow(2, -10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI) + 1;

		}

	},

	Back: {

		In: function (k) {

			var s = 1.70158;

			return k * k * ((s + 1) * k - s);

		},

		Out: function (k) {

			var s = 1.70158;

			return --k * k * ((s + 1) * k + s) + 1;

		},

		InOut: function (k) {

			var s = 1.70158 * 1.525;

			if ((k *= 2) < 1) {
				return 0.5 * (k * k * ((s + 1) * k - s));
			}

			return 0.5 * ((k -= 2) * k * ((s + 1) * k + s) + 2);

		}

	},

	Bounce: {

		In: function (k) {

			return 1 - TWEEN.Easing.Bounce.Out(1 - k);

		},

		Out: function (k) {

			if (k < (1 / 2.75)) {
				return 7.5625 * k * k;
			} else if (k < (2 / 2.75)) {
				return 7.5625 * (k -= (1.5 / 2.75)) * k + 0.75;
			} else if (k < (2.5 / 2.75)) {
				return 7.5625 * (k -= (2.25 / 2.75)) * k + 0.9375;
			} else {
				return 7.5625 * (k -= (2.625 / 2.75)) * k + 0.984375;
			}

		},

		InOut: function (k) {

			if (k < 0.5) {
				return TWEEN.Easing.Bounce.In(k * 2) * 0.5;
			}

			return TWEEN.Easing.Bounce.Out(k * 2 - 1) * 0.5 + 0.5;

		}

	}

};

TWEEN.Interpolation = {

	Linear: function (v, k) {

		var m = v.length - 1;
		var f = m * k;
		var i = Math.floor(f);
		var fn = TWEEN.Interpolation.Utils.Linear;

		if (k < 0) {
			return fn(v[0], v[1], f);
		}

		if (k > 1) {
			return fn(v[m], v[m - 1], m - f);
		}

		return fn(v[i], v[i + 1 > m ? m : i + 1], f - i);

	},

	Bezier: function (v, k) {

		var b = 0;
		var n = v.length - 1;
		var pw = Math.pow;
		var bn = TWEEN.Interpolation.Utils.Bernstein;

		for (var i = 0; i <= n; i++) {
			b += pw(1 - k, n - i) * pw(k, i) * v[i] * bn(n, i);
		}

		return b;

	},

	CatmullRom: function (v, k) {

		var m = v.length - 1;
		var f = m * k;
		var i = Math.floor(f);
		var fn = TWEEN.Interpolation.Utils.CatmullRom;

		if (v[0] === v[m]) {

			if (k < 0) {
				i = Math.floor(f = m * (1 + k));
			}

			return fn(v[(i - 1 + m) % m], v[i], v[(i + 1) % m], v[(i + 2) % m], f - i);

		} else {

			if (k < 0) {
				return v[0] - (fn(v[0], v[0], v[1], v[1], -f) - v[0]);
			}

			if (k > 1) {
				return v[m] - (fn(v[m], v[m], v[m - 1], v[m - 1], f - m) - v[m]);
			}

			return fn(v[i ? i - 1 : 0], v[i], v[m < i + 1 ? m : i + 1], v[m < i + 2 ? m : i + 2], f - i);

		}

	},

	Utils: {

		Linear: function (p0, p1, t) {

			return (p1 - p0) * t + p0;

		},

		Bernstein: function (n, i) {

			var fc = TWEEN.Interpolation.Utils.Factorial;

			return fc(n) / fc(i) / fc(n - i);

		},

		Factorial: (function () {

			var a = [1];

			return function (n) {

				var s = 1;

				if (a[n]) {
					return a[n];
				}

				for (var i = n; i > 1; i--) {
					s *= i;
				}

				a[n] = s;
				return s;

			};

		})(),

		CatmullRom: function (p0, p1, p2, p3, t) {

			var v0 = (p2 - p0) * 0.5;
			var v1 = (p3 - p1) * 0.5;
			var t2 = t * t;
			var t3 = t * t2;

			return (2 * p1 - 2 * p2 + v0 + v1) * t3 + (- 3 * p1 + 3 * p2 - 2 * v0 - v1) * t2 + v0 * t + p1;

		}

	}

};

// UMD (Universal Module Definition)
(function (root) {

	{

		// Node.js
		module.exports = TWEEN;

	}

})();
});

/**
 * @classdesc Information spot attached to panorama
 * @constructor
 * @param {number} [scale=300] - Default scale
 * @param {string} [imageSrc=PANOLENS.DataImage.Info] - Image overlay info
 * @param {boolean} [animated=true] - Enable default hover animation
 */
function Infospot ( scale = 300, imageSrc, animated ) {
	
    const duration = 500, scaleFactor = 1.3;

    imageSrc = imageSrc || DataImage.Info;

    Sprite.call( this );

    this.type = 'infospot';

    this.animated = animated !== undefined ? animated : true;
    this.isHovering = false;

    /*
     * TODO: Three.js bug hotfix for sprite raycasting r104
     * https://github.com/mrdoob/three.js/issues/14624
     */
    this.frustumCulled = false;

    this.element = null;
    this.toPanorama = null;
    this.cursorStyle = null;

    this.mode = MODES.NORMAL;

    this.scale.set( scale, scale, 1 );
    this.rotation.y = Math.PI;

    this.container = null;

    this.originalRaycast = this.raycast;

    // Event Handler
    this.HANDLER_FOCUS = null;	

    this.material.side = DoubleSide;
    this.material.depthTest = false;
    this.material.transparent = true;
    this.material.opacity = 0;

    this.scaleUpAnimation = new Tween.Tween();
    this.scaleDownAnimation = new Tween.Tween();


    const postLoad = function ( texture ) {

        if ( !this.material ) { return; }

        const ratio = texture.image.width / texture.image.height;
        const textureScale = new Vector3();

        texture.image.width = texture.image.naturalWidth || 64;
        texture.image.height = texture.image.naturalHeight || 64;

        this.scale.set( ratio * scale, scale, 1 );

        textureScale.copy( this.scale );

        this.scaleUpAnimation = new Tween.Tween( this.scale )
            .to( { x: textureScale.x * scaleFactor, y: textureScale.y * scaleFactor }, duration )
            .easing( Tween.Easing.Elastic.Out );

        this.scaleDownAnimation = new Tween.Tween( this.scale )
            .to( { x: textureScale.x, y: textureScale.y }, duration )
            .easing( Tween.Easing.Elastic.Out );

        this.material.map = texture;
        this.material.needsUpdate = true;

    }.bind( this );

    // Add show and hide animations
    this.showAnimation = new Tween.Tween( this.material )
        .to( { opacity: 1 }, duration )
        .onStart( this.enableRaycast.bind( this, true ) )
        .onStart( () => {
            this.dispatchEvent({ type: 'show-start' });
        } )
        .onComplete( () => {
            this.dispatchEvent({ type: 'show-complete' });
        } )
        .easing( Tween.Easing.Quartic.Out );

    this.hideAnimation = new Tween.Tween( this.material )
        .to( { opacity: 0 }, duration )
        .onStart( this.enableRaycast.bind( this, false ) )
        .onStart( () => {
            this.dispatchEvent({ type: 'hide-start' });
        } )
        .onComplete( () => {
            this.dispatchEvent({ type: 'hide-complete' });
        } )
        .easing( Tween.Easing.Quartic.Out );

    // Attach event listeners
    this.addEventListener( 'click', this.onClick );
    this.addEventListener( 'hover', this.onHover );
    this.addEventListener( 'hoverenter', this.onHoverStart );
    this.addEventListener( 'hoverleave', this.onHoverEnd );
    this.addEventListener( 'panolens-dual-eye-effect', this.onDualEyeEffect );
    this.addEventListener( 'panolens-container', this.setContainer.bind( this ) );
    this.addEventListener( 'dismiss', this.onDismiss );
    this.addEventListener( 'panolens-infospot-focus', this.setFocusMethod );

    TextureLoader.load( imageSrc, postLoad );	

}
Infospot.prototype = Object.assign( Object.create( Sprite.prototype ), {

    constructor: Infospot,

    /**
     * Set infospot container
     * @param {HTMLElement|object} data - Data with container information
     * @memberOf Infospot
     * @instance
     */
    setContainer: function ( data ) {

        let container;
	
        if ( data instanceof HTMLElement ) {
	
            container = data;
	
        } else if ( data && data.container ) {
	
            container = data.container;
	
        }
	
        // Append element if exists
        if ( container && this.element ) {
	
            container.appendChild( this.element );
	
        }
	
        this.container = container;
	
    },

    /**
     * Get container
     * @memberOf Infospot
     * @instance
     * @return {HTMLElement} - The container of this infospot
     */
    getContainer: function () {

        return this.container;

    },

    /**
     * This will be called by a click event
     * Translate and lock the hovering element if any
     * @param  {object} event - Event containing mouseEvent with clientX and clientY
     * @memberOf Infospot
     * @instance
     */
    onClick: function ( event ) {

        if ( this.element && this.getContainer() ) {

            this.onHoverStart( event );

            // Lock element
            this.lockHoverElement();

        }

    },

    /**
     * Dismiss current element if any
     * @param  {object} event - Dismiss event
     * @memberOf Infospot
     * @instance
     */
    onDismiss: function () {

        if ( this.element ) {

            this.unlockHoverElement();
            this.onHoverEnd();

        }

    },

    /**
     * This will be called by a mouse hover event
     * Translate the hovering element if any
     * @param  {object} event - Event containing mouseEvent with clientX and clientY
     * @memberOf Infospot
     * @instance
     */
    onHover: function () {},

    /**
     * This will be called on a mouse hover start
     * Sets cursor style to 'pointer', display the element and scale up the infospot
     * @param {object} event
     * @memberOf Infospot
     * @instance
     */
    onHoverStart: function ( event ) {

        if ( !this.getContainer() ) { return; }

        const cursorStyle = this.cursorStyle || ( this.mode === MODES.NORMAL ? 'pointer' : 'default' );
        const { scaleDownAnimation, scaleUpAnimation, element } = this;

        this.isHovering = true;
        this.container.style.cursor = cursorStyle;
		
        if ( this.animated ) {

            scaleDownAnimation.stop();
            scaleUpAnimation.start();

        }
		
        if ( element && event.mouseEvent.clientX >= 0 && event.mouseEvent.clientY >= 0 ) {

            const { left, right, style } = element;

            if ( this.mode === MODES.CARDBOARD || this.mode === MODES.STEREO ) {

                style.display = 'none';
                left.style.display = 'block';
                right.style.display = 'block';

                // Store element width for reference
                element._width = left.clientWidth;
                element._height = left.clientHeight;

            } else {

                style.display = 'block';
                if ( left ) { left.style.display = 'none'; }
                if ( right ) { right.style.display = 'none'; }

                // Store element width for reference
                element._width = element.clientWidth;
                element._height = element.clientHeight;

            }
			
        }

    },

    /**
     * This will be called on a mouse hover end
     * Sets cursor style to 'default', hide the element and scale down the infospot
     * @memberOf Infospot
     * @instance
     */
    onHoverEnd: function () {

        if ( !this.getContainer() ) { return; }

        const { scaleDownAnimation, scaleUpAnimation, element } = this;

        this.isHovering = false;
        this.container.style.cursor = 'default';

        if ( this.animated ) {

            scaleUpAnimation.stop();
            scaleDownAnimation.start();

        }

        if ( element && !this.element.locked ) {

            const { left, right, style } = element;

            style.display = 'none';
            if ( left ) { left.style.display = 'none'; }
            if ( right ) { right.style.display = 'none'; }

            this.unlockHoverElement();

        }

    },

    /**
     * On dual eye effect handler
     * Creates duplicate left and right element
     * @param  {object} event - panolens-dual-eye-effect event
     * @memberOf Infospot
     * @instance
     */
    onDualEyeEffect: function ( event ) {
		
        if ( !this.getContainer() ) { return; }

        let element, halfWidth, halfHeight;

        this.mode = event.mode;

        element = this.element;

        halfWidth = this.container.clientWidth / 2;
        halfHeight = this.container.clientHeight / 2;

        if ( !element ) {

            return;

        }

        if ( !element.left && !element.right ) {

            element.left = element.cloneNode( true );
            element.right = element.cloneNode( true );

        }

        if ( this.mode === MODES.CARDBOARD || this.mode === MODES.STEREO ) {

            element.left.style.display = element.style.display;
            element.right.style.display = element.style.display;
            element.style.display = 'none';

        } else {

            element.style.display = element.left.style.display;
            element.left.style.display = 'none';
            element.right.style.display = 'none';

        }

        // Update elements translation
        this.translateElement( halfWidth, halfHeight );

        this.container.appendChild( element.left );
        this.container.appendChild( element.right );

    },

    /**
     * Translate the hovering element by css transform
     * @param  {number} x - X position on the window screen
     * @param  {number} y - Y position on the window screen
     * @memberOf Infospot
     * @instance
     */
    translateElement: function ( x, y ) {

        if ( !this.element._width || !this.element._height || !this.getContainer() ) {

            return;

        }

        let left, top, element, width, height, delta, container;

        container = this.container;
        element = this.element;
        width = element._width / 2;
        height = element._height / 2;
        delta = element.verticalDelta !== undefined ? element.verticalDelta : 40;

        left = x - width;
        top = y - height - delta;

        if ( ( this.mode === MODES.CARDBOARD || this.mode === MODES.STEREO ) 
				&& element.left && element.right
				&& !( x === container.clientWidth / 2 && y === container.clientHeight / 2 ) ) {

            left = container.clientWidth / 4 - width + ( x - container.clientWidth / 2 );
            top = container.clientHeight / 2 - height - delta + ( y - container.clientHeight / 2 );

            this.setElementStyle( 'transform', element.left, 'translate(' + left + 'px, ' + top + 'px)' );

            left += container.clientWidth / 2;

            this.setElementStyle( 'transform', element.right, 'translate(' + left + 'px, ' + top + 'px)' );

        } else {

            this.setElementStyle( 'transform', element, 'translate(' + left + 'px, ' + top + 'px)' );

        }

    },

    /**
     * Set vendor specific css
     * @param {string} type - CSS style name
     * @param {HTMLElement} element - The element to be modified
     * @param {string} value - Style value
     * @memberOf Infospot
     * @instance
     */
    setElementStyle: function ( type, element, value ) {

        const style = element.style;

        if ( type === 'transform' ) {

            style.webkitTransform = style.msTransform = style.transform = value;

        }

    },

    /**
     * Set hovering text content
     * @param {string} text - Text to be displayed
     * @memberOf Infospot
     * @instance
     */
    setText: function ( text ) {

        if ( this.element ) {

            this.element.textContent = text;

        }

    },

    /**
     * Set cursor css style on hover
     * @memberOf Infospot
     * @instance
     */
    setCursorHoverStyle: function ( style ) {

        this.cursorStyle = style;

    },

    /**
     * Add hovering text element
     * @param {string} text - Text to be displayed
     * @param {number} [delta=40] - Vertical delta to the infospot
     * @memberOf Infospot
     * @instance
     */
    addHoverText: function ( text, delta = 40 ) {

        if ( !this.element ) {

            this.element = document.createElement( 'div' );
            this.element.style.display = 'none';
            this.element.style.color = '#fff';
            this.element.style.top = 0;
            this.element.style.maxWidth = '50%';
            this.element.style.maxHeight = '50%';
            this.element.style.textShadow = '0 0 3px #000000';
            this.element.style.fontFamily = '"Trebuchet MS", Helvetica, sans-serif';
            this.element.style.position = 'absolute';
            this.element.classList.add( 'panolens-infospot' );
            this.element.verticalDelta = delta;

        }

        this.setText( text );

    },

    /**
     * Add hovering element by cloning an element
     * @param {HTMLDOMElement} el - Element to be cloned and displayed
     * @param {number} [delta=40] - Vertical delta to the infospot
     * @memberOf Infospot
     * @instance
     */
    addHoverElement: function ( el, delta = 40 ) {

        if ( !this.element ) { 

            this.element = el.cloneNode( true );
            this.element.style.display = 'none';
            this.element.style.top = 0;
            this.element.style.position = 'absolute';
            this.element.classList.add( 'panolens-infospot' );
            this.element.verticalDelta = delta;

        }

    },

    /**
     * Remove hovering element
     * @memberOf Infospot
     * @instance
     */
    removeHoverElement: function () {

        if ( this.element ) { 

            if ( this.element.left ) {

                this.container.removeChild( this.element.left );
                this.element.left = null;

            }

            if ( this.element.right ) {

                this.container.removeChild( this.element.right );
                this.element.right = null;

            }

            this.container.removeChild( this.element );
            this.element = null;

        }

    },

    /**
     * Lock hovering element
     * @memberOf Infospot
     * @instance
     */
    lockHoverElement: function () {

        if ( this.element ) { 

            this.element.locked = true;

        }

    },

    /**
     * Unlock hovering element
     * @memberOf Infospot
     * @instance
     */
    unlockHoverElement: function () {

        if ( this.element ) { 

            this.element.locked = false;

        }

    },

    /**
     * Enable raycasting
     * @param {boolean} [enabled=true]
     * @memberOf Infospot
     * @instance
     */
    enableRaycast: function ( enabled = true ) {

        if ( enabled ) {

            this.raycast = this.originalRaycast;

        } else {

            this.raycast = () => {};

        }

    },

    /**
     * Show infospot
     * @param  {number} [delay=0] - Delay time to show
     * @memberOf Infospot
     * @instance
     */
    show: function ( delay = 0 ) {

        const { animated, hideAnimation, showAnimation, material } = this;

        if ( animated ) {

            hideAnimation.stop();
            showAnimation.delay( delay ).start();

        } else {

            this.enableRaycast( true );
            material.opacity = 1;

        }

    },

    /**
     * Hide infospot
     * @param  {number} [delay=0] - Delay time to hide
     * @memberOf Infospot
     * @instance
     */
    hide: function ( delay = 0 ) {

        const { animated, hideAnimation, showAnimation, material } = this;

        if ( animated ) {

            showAnimation.stop();
            hideAnimation.delay( delay ).start();

        } else {

            this.enableRaycast( false );
            material.opacity = 0;

        }
		
    },

    /**
     * Set focus event handler
     * @memberOf Infospot
     * @instance
     */
    setFocusMethod: function ( event ) {

        if ( event ) {

            this.HANDLER_FOCUS = event.method;

        }

    },

    /**
     * Focus camera center to this infospot
     * @param {number} [duration=1000] - Duration to tween
     * @param {function} [easing=TWEEN.Easing.Exponential.Out] - Easing function
     * @memberOf Infospot
     * @instance
     */
    focus: function ( duration, easing ) {

        if ( this.HANDLER_FOCUS ) {

            this.HANDLER_FOCUS( this.position, duration, easing );
            this.onDismiss();

        }

    },

    /**
     * Dispose
     * @memberOf Infospot
     * @instance
     */
    dispose: function () {

        const { geometry, material } = this;

        this.removeHoverElement();

        if ( this.parent ) {

            this.parent.remove( this );

        }

        if ( material && material.map ) { material.map.dispose(); material.map = null; }
        if ( geometry ) { geometry.dispose(); this.geometry = null; }
        if ( material ) { material.dispose(); this.material = null; }

    }

} );

/**
 * @classdesc Widget for controls
 * @constructor
 * @param {HTMLElement} container - A domElement where default control widget will be attached to
 */
function Widget ( container ) {

    if ( !container ) {

        console.warn( 'PANOLENS.Widget: No container specified' );

    }

    EventDispatcher.call( this );

    this.DEFAULT_TRANSITION  = 'all 0.27s ease';
    this.TOUCH_ENABLED = !!(( 'ontouchstart' in window ) || window.DocumentTouch && document instanceof DocumentTouch);
    this.PREVENT_EVENT_HANDLER = function ( event ) {
        event.preventDefault();
        event.stopPropagation();
    };

    this.container = container;

    this.barElement = null;
    this.fullscreenElement = null;
    this.videoElement = null;
    this.settingElement = null;

    this.mainMenu = null;

    this.activeMainItem = null;
    this.activeSubMenu = null;
    this.mask = null;

}

Widget.prototype = Object.assign( Object.create( EventDispatcher.prototype ), {

    constructor: Widget,

    /**
     * Add control bar
     * @memberOf Widget
     * @instance
     */
    addControlBar: function () {

        if ( !this.container ) {

            console.warn( 'Widget container not set' ); 
            return; 
        }

        var scope = this, bar, styleTranslate, styleOpacity, gradientStyle;

        gradientStyle = 'linear-gradient(bottom, rgba(0,0,0,0.2), rgba(0,0,0,0))';

        bar = document.createElement( 'div' );
        bar.style.width = '100%';
        bar.style.height = '44px';
        bar.style.float = 'left';
        bar.style.transform = bar.style.webkitTransform = bar.style.msTransform = 'translateY(-100%)';
        bar.style.background = '-webkit-' + gradientStyle;
        bar.style.background = '-moz-' + gradientStyle;
        bar.style.background = '-o-' + gradientStyle;
        bar.style.background = '-ms-' + gradientStyle;
        bar.style.background = gradientStyle;
        bar.style.transition = this.DEFAULT_TRANSITION;
        bar.style.pointerEvents = 'none';
        bar.isHidden = false;
        bar.toggle = function () {
            bar.isHidden = !bar.isHidden;
            styleTranslate = bar.isHidden ? 'translateY(0)' : 'translateY(-100%)';
            styleOpacity = bar.isHidden ? 0 : 1;
            bar.style.transform = bar.style.webkitTransform = bar.style.msTransform = styleTranslate;
            bar.style.opacity = styleOpacity;
        };

        // Menu
        var menu = this.createDefaultMenu();
        this.mainMenu = this.createMainMenu( menu );
        bar.appendChild( this.mainMenu );

        // Mask
        var mask = this.createMask();
        this.mask = mask;
        this.container.appendChild( mask );

        // Dispose
        bar.dispose = function () {

            if ( scope.fullscreenElement ) {

                bar.removeChild( scope.fullscreenElement );
                scope.fullscreenElement.dispose();
                scope.fullscreenElement = null;

            }

            if ( scope.settingElement ) {

                bar.removeChild( scope.settingElement );
                scope.settingElement.dispose();
                scope.settingElement = null;

            }

            if ( scope.videoElement ) {

                bar.removeChild( scope.videoElement );
                scope.videoElement.dispose();
                scope.videoElement = null;

            }

        };

        this.container.appendChild( bar );

        // Mask events
        this.mask.addEventListener( 'mousemove', this.PREVENT_EVENT_HANDLER, true );
        this.mask.addEventListener( 'mouseup', this.PREVENT_EVENT_HANDLER, true );
        this.mask.addEventListener( 'mousedown', this.PREVENT_EVENT_HANDLER, true );
        this.mask.addEventListener( scope.TOUCH_ENABLED ? 'touchend' : 'click', function ( event ) {

            event.preventDefault();
            event.stopPropagation();

            scope.mask.hide();
            scope.settingElement.deactivate();

        }, false );

        // Event listener
        this.addEventListener( 'control-bar-toggle', bar.toggle );

        this.barElement = bar;

    },

    /**
     * Create default menu
     * @memberOf Widget
     * @instance
     */
    createDefaultMenu: function () {

        var scope = this, handler;

        handler = function ( method, data ) {

            return function () {

                scope.dispatchEvent( { 

                    type: 'panolens-viewer-handler', 
                    method: method, 
                    data: data 

                } ); 

            };

        };

        return [

            { 
                title: 'Control', 
                subMenu: [ 
                    { 
                        title: this.TOUCH_ENABLED ? 'Touch' : 'Mouse', 
                        handler: handler( 'enableControl', CONTROLS.ORBIT )
                    },
                    { 
                        title: 'Sensor', 
                        handler: handler( 'enableControl', CONTROLS.DEVICEORIENTATION ) 
                    } 
                ]
            },

            { 
                title: 'Mode', 
                subMenu: [ 
                    { 
                        title: 'Normal',
                        handler: handler( 'disableEffect' )
                    }, 
                    { 
                        title: 'Cardboard',
                        handler: handler( 'enableEffect', MODES.CARDBOARD )
                    },
                    { 
                        title: 'Stereoscopic',
                        handler: handler( 'enableEffect', MODES.STEREO )
                    }
                ]
            }

        ];

    },

    /**
     * Add buttons on top of control bar
     * @param {string} name - The control button name to be created
     * @memberOf Widget
     * @instance
     */
    addControlButton: function ( name ) {

        let element;

        switch( name ) {

        case 'fullscreen':

            element = this.createFullscreenButton();
            this.fullscreenElement = element; 

            break;

        case 'setting':

            element = this.createSettingButton();
            this.settingElement = element;

            break;

        case 'video':

            element = this.createVideoControl();
            this.videoElement = element;

            break;

        default:

            return;

        }

        if ( !element ) {

            return;

        }

        this.barElement.appendChild( element );

    },

    /**
     * Create modal mask
     * @memberOf Widget
     * @instance
     */
    createMask: function () {

        const element = document.createElement( 'div' );
        element.style.position = 'absolute';
        element.style.top = 0;
        element.style.left = 0;
        element.style.width = '100%';
        element.style.height = '100%';
        element.style.background = 'transparent';
        element.style.display = 'none';

        element.show = function () {

            this.style.display = 'block';

        };

        element.hide = function () {

            this.style.display = 'none';

        };

        return element;

    },

    /**
     * Create Setting button to toggle menu
     * @memberOf Widget
     * @instance
     */
    createSettingButton: function () {

        let scope = this, item;

        function onTap ( event ) {

            event.preventDefault();
            event.stopPropagation();

            scope.mainMenu.toggle();

            if ( this.activated ) {
	
                this.deactivate();

            } else {

                this.activate();

            }

        }

        item = this.createCustomItem( { 

            style: { 

                backgroundImage: 'url("' + DataImage.Setting + '")',
                webkitTransition: this.DEFAULT_TRANSITION,
                transition: this.DEFAULT_TRANSITION

            },

            onTap: onTap

        } );

        item.activate = function () {

            this.style.transform = 'rotate3d(0,0,1,90deg)';
            this.activated = true;
            scope.mask.show();

        };

        item.deactivate = function () {

            this.style.transform = 'rotate3d(0,0,0,0)';
            this.activated = false;
            scope.mask.hide();

            if ( scope.mainMenu && scope.mainMenu.visible ) {

                scope.mainMenu.hide();
				
            }

            if ( scope.activeSubMenu && scope.activeSubMenu.visible ) {

                scope.activeSubMenu.hide();

            }

            if ( scope.mainMenu && scope.mainMenu._width ) {

                scope.mainMenu.changeSize( scope.mainMenu._width );
                scope.mainMenu.unslideAll();

            }
			
        };

        item.activated = false;

        return item;

    },

    /**
     * Create Fullscreen button
     * @return {HTMLSpanElement} - The dom element icon for fullscreen
     * @memberOf Widget
     * @instance
     * @fires Widget#panolens-viewer-handler
     */
    createFullscreenButton: function () {

        let scope = this, item, isFullscreen = false, tapSkipped = true, stylesheetId;

        const { container } = this;

        stylesheetId = 'panolens-style-addon';

        // Don't create button if no support
        if ( !document.fullscreenEnabled       && 
			!document.webkitFullscreenEnabled &&
			!document.mozFullScreenEnabled    &&
			!document.msFullscreenEnabled ) {
            return;
        }

        function onTap ( event ) {

            event.preventDefault();
            event.stopPropagation();

            tapSkipped = false;

            if ( !isFullscreen ) {

                if ( container.requestFullscreen ) { container.requestFullscreen(); }
                if ( container.msRequestFullscreen ) { container.msRequestFullscreen(); }
                if ( container.mozRequestFullScreen ) { container.mozRequestFullScreen(); }
                if ( container.webkitRequestFullscreen ) { container.webkitRequestFullscreen( Element.ALLOW_KEYBOARD_INPUT ); }
              
                isFullscreen = true;

            } else {

                if ( document.exitFullscreen ) { document.exitFullscreen(); }
                if ( document.msExitFullscreen ) { document.msExitFullscreen(); }
                if ( document.mozCancelFullScreen ) { document.mozCancelFullScreen(); }
                if ( document.webkitExitFullscreen ) { document.webkitExitFullscreen( ); }

                isFullscreen = false;

            }

            this.style.backgroundImage = ( isFullscreen ) 
                ? 'url("' + DataImage.FullscreenLeave + '")' 
                : 'url("' + DataImage.FullscreenEnter + '")';

        }

        function onFullScreenChange () {

            if ( tapSkipped ) {

                isFullscreen = !isFullscreen; 

                item.style.backgroundImage = ( isFullscreen ) 
                    ? 'url("' + DataImage.FullscreenLeave + '")' 
                    : 'url("' + DataImage.FullscreenEnter + '")';

            }

            /**
             * Viewer handler event
             * @type {object}
             * @event Widget#panolens-viewer-handler
             * @property {string} method - 'onWindowResize' function call on Viewer
             */
            scope.dispatchEvent( { type: 'panolens-viewer-handler', method: 'onWindowResize' } );

            tapSkipped = true;

        }

        document.addEventListener( 'fullscreenchange', onFullScreenChange, false );
        document.addEventListener( 'webkitfullscreenchange', onFullScreenChange, false );
        document.addEventListener( 'mozfullscreenchange', onFullScreenChange, false );
        document.addEventListener( 'MSFullscreenChange', onFullScreenChange, false );

        item = this.createCustomItem( { 

            style: { 

                backgroundImage: 'url("' + DataImage.FullscreenEnter + '")' 

            },

            onTap: onTap

        } );

        // Add fullscreen stlye if not exists
        if ( !document.querySelector( '#' + stylesheetId ) ) {
            const sheet = document.createElement( 'style' );
            sheet.id = stylesheetId;
            sheet.innerHTML = ':-webkit-full-screen { width: 100% !important; height: 100% !important }';
            document.body.appendChild( sheet );
        }
		
        return item;

    },

    /**
     * Create video control container
     * @memberOf Widget
     * @instance
     * @return {HTMLSpanElement} - The dom element icon for video control
     */
    createVideoControl: function () {

        const item = document.createElement( 'span' );
        item.style.display = 'none';
        item.show = function () { 

            item.style.display = '';

        };

        item.hide = function () { 

            item.style.display = 'none';
            item.controlButton.paused = true;
            item.controlButton.update();

        };

        item.controlButton = this.createVideoControlButton();
        item.seekBar = this.createVideoControlSeekbar();
		
        item.appendChild( item.controlButton );
        item.appendChild( item.seekBar );

        item.dispose = function () {

            item.removeChild( item.controlButton );
            item.removeChild( item.seekBar );

            item.controlButton.dispose();
            item.controlButton = null;

            item.seekBar.dispose();
            item.seekBar = null;

        };

        this.addEventListener( 'video-control-show', item.show );
        this.addEventListener( 'video-control-hide', item.hide );

        return item;

    },

    /**
     * Create video control button
     * @memberOf Widget
     * @instance
     * @return {HTMLSpanElement} - The dom element icon for video control
     * @fires Widget#panolens-viewer-handler
     */
    createVideoControlButton: function () {

        const scope = this;

        function onTap ( event ) {

            event.preventDefault();
            event.stopPropagation();

            /**
             * Viewer handler event
             * @type {object}
             * @event Widget#panolens-viewer-handler
             * @property {string} method - 'toggleVideoPlay' function call on Viewer
             */
            scope.dispatchEvent( { type: 'panolens-viewer-handler', method: 'toggleVideoPlay', data: !this.paused } );

            this.paused = !this.paused;

            item.update();

        }
        const item = this.createCustomItem( { 

            style: { 

                float: 'left',
                backgroundImage: 'url("' + DataImage.VideoPlay + '")'

            },

            onTap: onTap

        } );

        item.paused = true;

        item.update = function ( paused ) {

            this.paused = paused !== undefined ? paused : this.paused;

            this.style.backgroundImage = 'url("' + ( this.paused 
                ? DataImage.VideoPlay 
                : DataImage.VideoPause ) + '")';

        };

        return item;

    },

    /**
     * Create video seekbar
     * @memberOf Widget
     * @instance
     * @return {HTMLSpanElement} - The dom element icon for video seekbar
     * @fires Widget#panolens-viewer-handler
     */
    createVideoControlSeekbar: function () {

        let scope = this, item, progressElement, progressElementControl,
            isDragging = false, mouseX, percentageNow, percentageNext;

        progressElement = document.createElement( 'div' );
        progressElement.style.width = '0%';
        progressElement.style.height = '100%';
        progressElement.style.backgroundColor = '#fff';

        progressElementControl = document.createElement( 'div' );
        progressElementControl.style.float = 'right';
        progressElementControl.style.width = '14px';
        progressElementControl.style.height = '14px';
        progressElementControl.style.transform = 'translate(7px, -5px)';
        progressElementControl.style.borderRadius = '50%';
        progressElementControl.style.backgroundColor = '#ddd';

        progressElementControl.addEventListener( 'mousedown', onMouseDown, { passive: true } );
        progressElementControl.addEventListener( 'touchstart', onMouseDown,  { passive: true } );

        function onMouseDown ( event ) {

            event.stopPropagation();
			
            isDragging = true;
			
            mouseX = event.clientX || ( event.changedTouches && event.changedTouches[0].clientX );

            percentageNow = parseInt( progressElement.style.width ) / 100;

            addControlListeners();
        }

        function onVideoControlDrag ( event ) {

            if( isDragging ){

                const clientX = event.clientX || ( event.changedTouches && event.changedTouches[0].clientX );
				
                percentageNext = ( clientX - mouseX ) / item.clientWidth;

                percentageNext = percentageNow + percentageNext;

                percentageNext = percentageNext > 1 ? 1 : ( ( percentageNext < 0 ) ? 0 : percentageNext );

                item.setProgress ( percentageNext );

                /**
                 * Viewer handler event
                 * @type {object}
                 * @event Widget#panolens-viewer-handler
                 * @property {string} method - 'setVideoCurrentTime' function call on Viewer
                 * @property {number} data - Percentage of current video. Range from 0.0 to 1.0
                 */
                scope.dispatchEvent( { type: 'panolens-viewer-handler', method: 'setVideoCurrentTime', data: percentageNext } );

            }

        }

        function onVideoControlStop ( event ) {

            event.stopPropagation();

            isDragging = false;

            removeControlListeners();

        }

        function addControlListeners () {

            scope.container.addEventListener( 'mousemove', onVideoControlDrag, { passive: true } );
            scope.container.addEventListener( 'mouseup', onVideoControlStop, { passive: true } );
            scope.container.addEventListener( 'touchmove', onVideoControlDrag, { passive: true } );
            scope.container.addEventListener( 'touchend', onVideoControlStop, { passive: true } );


        }

        function removeControlListeners () {

            scope.container.removeEventListener( 'mousemove', onVideoControlDrag, false );
            scope.container.removeEventListener( 'mouseup', onVideoControlStop, false );
            scope.container.removeEventListener( 'touchmove', onVideoControlDrag, false );
            scope.container.removeEventListener( 'touchend', onVideoControlStop, false );

        }

        function onTap ( event ) {

            event.preventDefault();
            event.stopPropagation();

            if ( event.target === progressElementControl ) { return; }

            const percentage = ( event.changedTouches && event.changedTouches.length > 0 )
                ? ( event.changedTouches[0].pageX - event.target.getBoundingClientRect().left ) / this.clientWidth
                : event.offsetX / this.clientWidth;

            /**
             * Viewer handler event
             * @type {object}
             * @property {string} method - 'setVideoCurrentTime' function call on Viewer
             * @property {number} data - Percentage of current video. Range from 0.0 to 1.0
             */
            scope.dispatchEvent( { type: 'panolens-viewer-handler', method: 'setVideoCurrentTime', data: percentage } );

            item.setProgress( event.offsetX / this.clientWidth );

        }
        function onDispose () {

            removeControlListeners();
            progressElement = null;
            progressElementControl = null;

        }

        progressElement.appendChild( progressElementControl );

        item = this.createCustomItem( {

            style: { 

                float: 'left',
                width: '30%',
                height: '4px',
                marginTop: '20px',
                backgroundColor: 'rgba(188,188,188,0.8)'

            },

            onTap: onTap,
            onDispose: onDispose

        } );

        item.appendChild( progressElement );

        item.setProgress = function( percentage ) {

            progressElement.style.width = percentage * 100 + '%';

        };		

        this.addEventListener( 'video-update', function ( event ) { 

            item.setProgress( event.percentage ); 

        } );

        item.progressElement = progressElement;
        item.progressElementControl = progressElementControl;

        return item;

    },

    /**
     * Create menu item
     * @param  {string} title - Title to display
     * @memberOf Widget
     * @instance
     * @return {HTMLElement} - An anchor tag element
     */
    createMenuItem: function ( title ) {

        const scope = this; 
        const item = document.createElement( 'a' );
        item.textContent = title;
        item.style.display = 'block';
        item.style.padding = '10px';
        item.style.textDecoration = 'none';
        item.style.cursor = 'pointer';
        item.style.pointerEvents = 'auto';
        item.style.transition = this.DEFAULT_TRANSITION;

        item.slide = function ( right ) {

            this.style.transform = 'translateX(' + ( right ? '' : '-' ) + '100%)';

        };

        item.unslide = function () {

            this.style.transform = 'translateX(0)';

        };

        item.setIcon = function ( url ) {

            if ( this.icon ) {

                this.icon.style.backgroundImage = 'url(' + url + ')';

            }

        };

        item.setSelectionTitle = function ( title ) {

            if ( this.selection ) {

                this.selection.textContent = title;

            }

        };

        item.addSelection = function ( name ) {
			
            const selection = document.createElement( 'span' );
            selection.style.fontSize = '13px';
            selection.style.fontWeight = '300';
            selection.style.float = 'right';

            this.selection = selection;
            this.setSelectionTitle( name );
            this.appendChild( selection );
			
            return this;

        };

        item.addIcon = function ( url = DataImage.ChevronRight, left = false, flip = false ) {
			
            const element = document.createElement( 'span' );
            element.style.float = left ? 'left' : 'right';
            element.style.width = '17px';
            element.style.height = '17px';
            element.style[ 'margin' + ( left ? 'Right' : 'Left' ) ] = '12px';
            element.style.backgroundSize = 'cover';

            if ( flip ) {

                element.style.transform = 'rotateZ(180deg)';

            }

            this.icon = element;
            this.setIcon( url );
            this.appendChild( element );

            return this;

        };

        item.addSubMenu = function ( title, items ) {

            this.subMenu = scope.createSubMenu( title, items );

            return this;

        };

        item.addEventListener( 'mouseenter', function () {
			
            this.style.backgroundColor = '#e0e0e0';

        }, false );

        item.addEventListener( 'mouseleave', function () {
			
            this.style.backgroundColor = '#fafafa';

        }, false );

        return item;

    },

    /**
     * Create menu item header
     * @param  {string} title - Title to display
     * @memberOf Widget
     * @instance
     * @return {HTMLElement} - An anchor tag element
     */
    createMenuItemHeader: function ( title ) {

        const header = this.createMenuItem( title );

        header.style.borderBottom = '1px solid #333';
        header.style.paddingBottom = '15px';

        return header;

    },

    /**
     * Create main menu
     * @param  {array} menus - Menu array list
     * @memberOf Widget
     * @instance
     * @return {HTMLElement} - A span element
     */
    createMainMenu: function ( menus ) {
		
        let scope = this, menu = this.createMenu();

        menu._width = 200;
        menu.changeSize( menu._width );

        function onTap ( event ) {

            event.preventDefault();
            event.stopPropagation();

            let mainMenu = scope.mainMenu, subMenu = this.subMenu;

            function onNextTick () {

                mainMenu.changeSize( subMenu.clientWidth );
                subMenu.show();
                subMenu.unslideAll();

            }

            mainMenu.hide();
            mainMenu.slideAll();
            mainMenu.parentElement.appendChild( subMenu );

            scope.activeMainItem = this;
            scope.activeSubMenu = subMenu;

            window.requestAnimationFrame( onNextTick );

        }
        for ( var i = 0; i < menus.length; i++ ) {

            var item = menu.addItem( menus[ i ].title );

            item.style.paddingLeft = '20px';

            item.addIcon()
                .addEventListener( scope.TOUCH_ENABLED ? 'touchend' : 'click', onTap, false );

            if ( menus[ i ].subMenu && menus[ i ].subMenu.length > 0 ) {

                var title = menus[ i ].subMenu[ 0 ].title;

                item.addSelection( title )
                    .addSubMenu( menus[ i ].title, menus[ i ].subMenu );

            }

        }

        return menu;

    },

    /**
     * Create sub menu
     * @param {string} title - Sub menu title
     * @param {array} items - Item array list
     * @memberOf Widget
     * @instance
     * @return {HTMLElement} - A span element
     */
    createSubMenu: function ( title, items ) {

        let scope = this, menu, subMenu = this.createMenu();

        subMenu.items = items;
        subMenu.activeItem = null;

        function onTap ( event ) {

            event.preventDefault();
            event.stopPropagation();

            menu = scope.mainMenu;
            menu.changeSize( menu._width );
            menu.unslideAll();
            menu.show();
            subMenu.slideAll( true );
            subMenu.hide();

            if ( this.type !== 'header' ) {

                subMenu.setActiveItem( this );
                scope.activeMainItem.setSelectionTitle( this.textContent );

                if ( this.handler ) { this.handler(); }

            }

        }

        subMenu.addHeader( title ).addIcon( undefined, true, true ).addEventListener( scope.TOUCH_ENABLED ? 'touchend' : 'click', onTap, false );

        for ( let i = 0; i < items.length; i++ ) {

            const item = subMenu.addItem( items[ i ].title );

            item.style.fontWeight = 300;
            item.handler = items[ i ].handler;
            item.addIcon( ' ', true );
            item.addEventListener( scope.TOUCH_ENABLED ? 'touchend' : 'click', onTap, false );

            if ( !subMenu.activeItem ) {

                subMenu.setActiveItem( item );

            }

        }

        subMenu.slideAll( true );

        return subMenu;
		
    },

    /**
     * Create general menu
     * @memberOf Widget
     * @instance
     * @return {HTMLElement} - A span element
     */
    createMenu: function () {

        const scope = this;
        const menu = document.createElement( 'span' );
        const style = menu.style;

        style.padding = '5px 0';
        style.position = 'fixed';
        style.bottom = '100%';
        style.right = '14px';
        style.backgroundColor = '#fafafa';
        style.fontFamily = 'Helvetica Neue';
        style.fontSize = '14px';
        style.visibility = 'hidden';
        style.opacity = 0;
        style.boxShadow = '0 0 12pt rgba(0,0,0,0.25)';
        style.borderRadius = '2px';
        style.overflow = 'hidden';
        style.willChange = 'width, height, opacity';
        style.pointerEvents = 'auto';
        style.transition = this.DEFAULT_TRANSITION;

        menu.visible = false;

        menu.changeSize = function ( width, height ) {

            if ( width ) {

                this.style.width = width + 'px';

            }

            if ( height ) {

                this.style.height = height + 'px';

            }

        };

        menu.show = function () {

            this.style.opacity = 1;
            this.style.visibility = 'visible';
            this.visible = true;

        };

        menu.hide = function () {

            this.style.opacity = 0;
            this.style.visibility = 'hidden';
            this.visible = false;

        };

        menu.toggle = function () {

            if ( this.visible ) {

                this.hide();

            } else {

                this.show();

            }

        };

        menu.slideAll = function ( right ) {

            for ( let i = 0; i < menu.children.length; i++ ){

                if ( menu.children[ i ].slide ) {

                    menu.children[ i ].slide( right );

                }

            }

        };

        menu.unslideAll = function () {

            for ( let i = 0; i < menu.children.length; i++ ){

                if ( menu.children[ i ].unslide ) {

                    menu.children[ i ].unslide();

                }

            }

        };

        menu.addHeader = function ( title ) {

            const header = scope.createMenuItemHeader( title );
            header.type = 'header';

            this.appendChild( header );

            return header;

        };

        menu.addItem = function ( title ) {

            const item = scope.createMenuItem( title );
            item.type = 'item';

            this.appendChild( item );

            return item;

        };

        menu.setActiveItem = function ( item ) {

            if ( this.activeItem ) {

                this.activeItem.setIcon( ' ' );

            }

            item.setIcon( DataImage.Check );

            this.activeItem = item;

        };

        menu.addEventListener( 'mousemove', this.PREVENT_EVENT_HANDLER, true );
        menu.addEventListener( 'mouseup', this.PREVENT_EVENT_HANDLER, true );
        menu.addEventListener( 'mousedown', this.PREVENT_EVENT_HANDLER, true );

        return menu;

    },

    /**
     * Create custom item element
     * @memberOf Widget
     * @instance
     * @return {HTMLSpanElement} - The dom element icon
     */
    createCustomItem: function ( options = {} ) {

        const scope = this;
        const item = options.element || document.createElement( 'span' );
        const { onDispose } = options;

        item.style.cursor = 'pointer';
        item.style.float = 'right';
        item.style.width = '44px';
        item.style.height = '100%';
        item.style.backgroundSize = '60%';
        item.style.backgroundRepeat = 'no-repeat';
        item.style.backgroundPosition = 'center';
        item.style.webkitUserSelect = 
		item.style.MozUserSelect = 
		item.style.userSelect = 'none';
        item.style.position = 'relative';
        item.style.pointerEvents = 'auto';

        // White glow on icon
        item.addEventListener( scope.TOUCH_ENABLED ? 'touchstart' : 'mouseenter', function() {
            item.style.filter = 
			item.style.webkitFilter = 'drop-shadow(0 0 5px rgba(255,255,255,1))';
        }, { passive: true });
        item.addEventListener( scope.TOUCH_ENABLED ? 'touchend' : 'mouseleave', function() {
            item.style.filter = 
			item.style.webkitFilter = '';
        }, { passive: true });

        this.mergeStyleOptions( item, options.style );

        if ( options.onTap ) {

            item.addEventListener( scope.TOUCH_ENABLED ? 'touchend' : 'click', options.onTap, false );

        }

        item.dispose = function () {

            item.removeEventListener( scope.TOUCH_ENABLED ? 'touchend' : 'click', options.onTap, false );

            if ( onDispose ) { options.onDispose(); }

        };
		
        return item;

    },

    /**
     * Merge item css style
     * @param  {HTMLElement} element - The element to be merged with style
     * @param  {object} options - The style options
     * @memberOf Widget
     * @instance
     * @return {HTMLElement} - The same element with merged styles
     */
    mergeStyleOptions: function ( element, options = {} ) {

        for ( let property in options ){

            if ( options.hasOwnProperty( property ) ) {

                element.style[ property ] = options[ property ];

            }

        }

        return element;

    },

    /**
     * Dispose widgets by detaching dom elements from container
     * @memberOf Widget
     * @instance
     */
    dispose: function () {

        if ( this.barElement ) {
            this.container.removeChild( this.barElement );
            this.barElement.dispose();
            this.barElement = null;

        }

    }
	
} );

/**
 * @classdesc Base Panorama
 * @constructor
 * @param {THREE.Geometry} geometry - The geometry for this panorama
 * @param {THREE.Material} material - The material for this panorama
 */
function Panorama ( geometry, material ) {

    Mesh.call( this, geometry, material );

    this.type = 'panorama';

    this.ImageQualityLow = 1;
    this.ImageQualityFair = 2;
    this.ImageQualityMedium = 3;
    this.ImageQualityHigh = 4;
    this.ImageQualitySuperHigh = 5;

    this.animationDuration = 1000;

    this.defaultInfospotSize = 350;

    this.container = undefined;

    this.loaded = false;

    this.linkedSpots = [];

    this.isInfospotVisible = false;
	
    this.linkingImageURL = undefined;
    this.linkingImageScale = undefined;

    this.material.side = BackSide;
    this.material.opacity = 0;

    this.scale.x *= -1;
    this.renderOrder = -1;

    this.active = false;

    this.infospotAnimation = new Tween.Tween( this ).to( {}, this.animationDuration / 2 );

    this.addEventListener( 'load', this.fadeIn.bind( this ) );
    this.addEventListener( 'panolens-container', this.setContainer.bind( this ) );
    this.addEventListener( 'click', this.onClick.bind( this ) );

    this.setupTransitions();

}

Panorama.prototype = Object.assign( Object.create( Mesh.prototype ), {

    constructor: Panorama,

    /**
     * Adding an object
     * To counter the scale.x = -1, it will automatically add an 
     * empty object with inverted scale on x
     * @memberOf Panorama
     * @instance
     * @param {THREE.Object3D} object - The object to be added
     */
    add: function ( object ) {

        let invertedObject;

        if ( arguments.length > 1 ) {

            for ( var i = 0; i < arguments.length; i ++ ) {

                this.add( arguments[ i ] );

            }

            return this;

        }

        // In case of infospots
        if ( object instanceof Infospot ) {

            invertedObject = object;

            if ( object.dispatchEvent ) {

                const { container } = this;

                if ( container ) { object.dispatchEvent( { type: 'panolens-container', container } ); }
				
                object.dispatchEvent( { type: 'panolens-infospot-focus', method: function ( vector, duration, easing ) {

                    /**
                     * Infospot focus handler event
                     * @type {object}
                     * @event Panorama#panolens-viewer-handler
                     * @property {string} method - Viewer function name
                     * @property {*} data - The argument to be passed into the method
                     */
                    this.dispatchEvent( { type: 'panolens-viewer-handler', method: 'tweenControlCenter', data: [ vector, duration, easing ] } );


                }.bind( this ) } );
            }

        } else {

            // Counter scale.x = -1 effect
            invertedObject = new Object3D();
            invertedObject.scale.x = -1;
            invertedObject.scalePlaceHolder = true;
            invertedObject.add( object );

        }

        Object3D.prototype.add.call( this, invertedObject );

    },

    load: function () {

        this.onLoad();
		
    },

    /**
     * Click event handler
     * @param  {object} event - Click event
     * @memberOf Panorama
     * @instance
     * @fires Infospot#dismiss
     */
    onClick: function ( event ) {

        if ( event.intersects && event.intersects.length === 0 ) {

            this.traverse( function ( object ) {

                /**
                 * Dimiss event
                 * @type {object}
                 * @event Infospot#dismiss
                 */
                object.dispatchEvent( { type: 'dismiss' } );

            } );

        }

    },

    /**
     * Set container of this panorama 
     * @param {HTMLElement|object} data - Data with container information
     * @memberOf Panorama
     * @instance
     * @fires Infospot#panolens-container
     */
    setContainer: function ( data ) {

        let container;

        if ( data instanceof HTMLElement ) {

            container = data;

        } else if ( data && data.container ) {

            container = data.container;

        }

        if ( container ) {

            this.children.forEach( function ( child ) {

                if ( child instanceof Infospot && child.dispatchEvent ) {

                    /**
                     * Set container event
                     * @type {object}
                     * @event Infospot#panolens-container
                     * @property {HTMLElement} container - The container of this panorama
                     */
                    child.dispatchEvent( { type: 'panolens-container', container: container } );

                }

            } );

            this.container = container;

        }

    },

    /**
     * This will be called when panorama is loaded
     * @memberOf Panorama
     * @instance
     * @fires Panorama#load
     */
    onLoad: function () {

        this.loaded = true;

        /**
         * Load panorama event
         * @type {object}
         * @event Panorama#load
         */
        this.dispatchEvent( { type: 'load' } );

    },

    /**
     * This will be called when panorama is in progress
     * @memberOf Panorama
     * @instance
     * @fires Panorama#progress
     */
    onProgress: function ( progress ) {

        /**
         * Loading panorama progress event
         * @type {object}
         * @event Panorama#progress
         * @property {object} progress - The progress object containing loaded and total amount
         */
        this.dispatchEvent( { type: 'progress', progress: progress } );

    },

    /**
     * This will be called when panorama loading has error
     * @memberOf Panorama
     * @instance
     * @fires Panorama#error
     */
    onError: function () {

        /**
         * Loading panorama error event
         * @type {object}
         * @event Panorama#error
         */
        this.dispatchEvent( { type: 'error' } );

    },

    /**
     * Get zoom level based on window width
     * @memberOf Panorama
     * @instance
     * @return {number} zoom level indicating image quality
     */
    getZoomLevel: function () {

        let zoomLevel;

        if ( window.innerWidth <= 800 ) {

            zoomLevel = this.ImageQualityFair;

        } else if ( window.innerWidth > 800 &&  window.innerWidth <= 1280 ) {

            zoomLevel = this.ImageQualityMedium;

        } else if ( window.innerWidth > 1280 && window.innerWidth <= 1920 ) {

            zoomLevel = this.ImageQualityHigh;

        } else if ( window.innerWidth > 1920 ) {

            zoomLevel = this.ImageQualitySuperHigh;

        } else {

            zoomLevel = this.ImageQualityLow;

        }

        return zoomLevel;

    },

    /**
     * Update texture of a panorama
     * @memberOf Panorama
     * @instance
     * @param {THREE.Texture} texture - Texture to be updated
     */
    updateTexture: function ( texture ) {

        this.material.map = texture;
        this.material.needsUpdate = true;

    },

    /**
     * Toggle visibility of infospots in this panorama
     * @param  {boolean} isVisible - Visibility of infospots
     * @param  {number} delay - Delay in milliseconds to change visibility
     * @memberOf Panorama
     * @instance
     * @fires Panorama#infospot-animation-complete
     */
    toggleInfospotVisibility: function ( isVisible, delay ) {

        delay = ( delay !== undefined ) ? delay : 0;

        const visible = ( isVisible !== undefined ) ? isVisible : ( this.isInfospotVisible ? false : true );

        this.traverse( function ( object ) {

            if ( object instanceof Infospot ) {

                if ( visible ) {

                    object.show( delay );

                } else {

                    object.hide( delay );

                }

            }

        } );

        this.isInfospotVisible = visible;

        // Animation complete event
        this.infospotAnimation.onComplete( function () {

            /**
             * Complete toggling infospot visibility
             * @event Panorama#infospot-animation-complete
             * @type {object} 
             */
            this.dispatchEvent( { type: 'infospot-animation-complete', visible: visible } );

        }.bind( this ) ).delay( delay ).start();

    },

    /**
     * Set image of this panorama's linking infospot
     * @memberOf Panorama
     * @instance
     * @param {string} url   - Url to the image asset
     * @param {number} scale - Scale factor of the infospot
     */
    setLinkingImage: function ( url, scale ) {

        this.linkingImageURL = url;
        this.linkingImageScale = scale;

    },

    /**
     * Link one-way panorama
     * @param  {Panorama} pano  - The panorama to be linked to
     * @param  {THREE.Vector3} position - The position of infospot which navigates to the pano
     * @param  {number} [imageScale=300] - Image scale of linked infospot
     * @param  {string} [imageSrc=DataImage.Arrow] - The image source of linked infospot
     * @memberOf Panorama
     * @instance
     */
    link: function ( pano, position, imageScale, imageSrc ) {

        let scale, img;

        this.visible = true;

        if ( !position ) {

            console.warn( 'Please specify infospot position for linking' );

            return;

        }

        // Infospot scale
        if ( imageScale !== undefined ) {

            scale = imageScale;

        } else if ( pano.linkingImageScale !== undefined ) {

            scale = pano.linkingImageScale;

        } else {

            scale = 300;

        }


        // Infospot image
        if ( imageSrc ) {

            img = imageSrc;

        } else if ( pano.linkingImageURL ) {

            img = pano.linkingImageURL;

        } else {

            img = DataImage.Arrow;

        }

        // Creates a new infospot
        const spot = new Infospot( scale, img );
        spot.position.copy( position );
        spot.toPanorama = pano;
        spot.addEventListener( 'click', function () {

            /**
             * Viewer handler event
             * @type {object}
             * @event Panorama#panolens-viewer-handler
             * @property {string} method - Viewer function name
             * @property {*} data - The argument to be passed into the method
             */
            this.dispatchEvent( { type: 'panolens-viewer-handler', method: 'setPanorama', data: pano } );

        }.bind( this ) );

        this.linkedSpots.push( spot );

        this.add( spot );

        this.visible = false;

    },

    reset: function () {

        this.children.length = 0;	

    },

    setupTransitions: function () {

        this.fadeInAnimation = new Tween.Tween( this.material )
            .easing( Tween.Easing.Quartic.Out )
            .onStart( function () {

                this.visible = true;
                // this.material.visible = true;

                /**
                 * Enter panorama fade in start event
                 * @event Panorama#enter-fade-start
                 * @type {object} 
                 */
                this.dispatchEvent( { type: 'enter-fade-start' } );

            }.bind( this ) );

        this.fadeOutAnimation = new Tween.Tween( this.material )
            .easing( Tween.Easing.Quartic.Out )
            .onComplete( function () {

                this.visible = false;
                // this.material.visible = true;

                /**
                 * Leave panorama complete event
                 * @event Panorama#leave-complete
                 * @type {object} 
                 */
                this.dispatchEvent( { type: 'leave-complete' } );

            }.bind( this ) );

        this.enterTransition = new Tween.Tween( this )
            .easing( Tween.Easing.Quartic.Out )
            .onComplete( function () {

                /**
                 * Enter panorama and animation complete event
                 * @event Panorama#enter-complete
                 * @type {object} 
                 */
                this.dispatchEvent( { type: 'enter-complete' } );

            }.bind ( this ) )
            .start();

        this.leaveTransition = new Tween.Tween( this )
            .easing( Tween.Easing.Quartic.Out );

    },

    onFadeAnimationUpdate: function () {

        if (this.material && this.material.uniforms && this.material.uniforms.opacity ) {
            uniforms.opacity.value = this.material.opacity;
        }

    },

    /**
     * Start fading in animation
     * @memberOf Panorama
     * @instance
     * @fires Panorama#enter-fade-complete
     */
    fadeIn: function ( duration ) {

        duration = duration >= 0 ? duration : this.animationDuration;

        this.fadeOutAnimation.stop();
        this.fadeInAnimation
            .to( { opacity: 1 }, duration )
            .onUpdate( this.onFadeAnimationUpdate.bind( this ) )
            .onComplete( function () {

                this.toggleInfospotVisibility( true, duration / 2 );

                /**
                 * Enter panorama fade complete event
                 * @event Panorama#enter-fade-complete
                 * @type {object} 
                 */
                this.dispatchEvent( { type: 'enter-fade-complete' } );			

            }.bind( this ) )
            .start();

    },

    /**
     * Start fading out animation
     * @memberOf Panorama
     * @instance
     */
    fadeOut: function ( duration ) {

        duration = duration >= 0 ? duration : this.animationDuration;

        this.fadeInAnimation.stop();
        this.fadeOutAnimation
            .to( { opacity: 0 }, duration )
            .onUpdate( this.onFadeAnimationUpdate.bind( this ) )
            .start();

    },

    /**
     * This will be called when entering a panorama 
     * @memberOf Panorama
     * @instance
     * @fires Panorama#enter
     * @fires Panorama#enter-start
     */
    onEnter: function () {

        const duration = this.animationDuration;

        this.leaveTransition.stop();
        this.enterTransition
            .to( {}, duration )
            .onStart( function () {

                /**
                 * Enter panorama and animation starting event
                 * @event Panorama#enter-start
                 * @type {object} 
                 */
                this.dispatchEvent( { type: 'enter-start' } );
				
                if ( this.loaded ) {

                    this.fadeIn( duration );

                } else {

                    this.load();

                }
				
            }.bind( this ) )
            .start();

        /**
         * Enter panorama event
         * @event Panorama#enter
         * @type {object} 
         */
        this.dispatchEvent( { type: 'enter' } );

        this.children.forEach( child => {

            child.dispatchEvent( { type: 'panorama-enter' } );

        } );

        this.active = true;

    },

    /**
     * This will be called when leaving a panorama
     * @memberOf Panorama
     * @instance
     * @fires Panorama#leave
     */
    onLeave: function () {

        const duration = this.animationDuration;

        this.enterTransition.stop();
        this.leaveTransition
            .to( {}, duration )
            .onStart( function () {

                /**
                 * Leave panorama and animation starting event
                 * @event Panorama#leave-start
                 * @type {object} 
                 */
                this.dispatchEvent( { type: 'leave-start' } );

                this.fadeOut( duration );
                this.toggleInfospotVisibility( false );

            }.bind( this ) )
            .start();

        /**
         * Leave panorama event
         * @event Panorama#leave
         * @type {object} 
         */
        this.dispatchEvent( { type: 'leave' } );

        this.children.forEach( child => {

            child.dispatchEvent( { type: 'panorama-leave' } );

        } );

        this.active = false;

    },

    /**
     * Dispose panorama
     * @memberOf Panorama
     * @instance
     */
    dispose: function () {

        this.infospotAnimation.stop();
        this.fadeInAnimation.stop();
        this.fadeOutAnimation.stop();
        this.enterTransition.stop();
        this.leaveTransition.stop();

        /**
         * On panorama dispose handler
         * @type {object}
         * @event Panorama#panolens-viewer-handler
         * @property {string} method - Viewer function name
         * @property {*} data - The argument to be passed into the method
         */
        this.dispatchEvent( { type: 'panolens-viewer-handler', method: 'onPanoramaDispose', data: this } );

        // recursive disposal on 3d objects
        function recursiveDispose ( object ) {

            const { geometry, material } = object;

            for ( var i = object.children.length - 1; i >= 0; i-- ) {

                recursiveDispose( object.children[i] );
                object.remove( object.children[i] );

            }

            if ( object instanceof Infospot ) {

                object.dispose();

            }
			
            if ( geometry ) { geometry.dispose(); object.geometry = null; }
            if ( material ) { material.dispose(); object.material = null; }

        }

        recursiveDispose( this );

        if ( this.parent ) {

            this.parent.remove( this );

        }

    }

} );

/**
 * @classdesc Equirectangular based image panorama
 * @constructor
 * @param {string} image - Image url or HTMLImageElement
 */
function ImagePanorama ( image, _geometry, _material ) {

    const radius = 5000;
    const geometry = _geometry || new SphereBufferGeometry( radius, 60, 40 );
    const material = _material || new MeshBasicMaterial( { opacity: 0, transparent: true } );

    Panorama.call( this, geometry, material );

    this.src = image;
    this.radius = radius;

}

ImagePanorama.prototype = Object.assign( Object.create( Panorama.prototype ), {

    constructor: ImagePanorama,

    /**
     * Load image asset
     * @param  {*} src - Url or image element
     * @memberOf ImagePanorama
     * @instance
     */
    load: function ( src ) {

        src = src || this.src;

        if ( !src ) { 

            console.warn( 'Image source undefined' );

            return; 

        } else if ( typeof src === 'string' ) {

            TextureLoader.load( src, this.onLoad.bind( this ), this.onProgress.bind( this ), this.onError.bind( this ) );

        } else if ( src instanceof HTMLImageElement ) {

            this.onLoad( new Texture( src ) );

        }

    },

    /**
     * This will be called when image is loaded
     * @param  {THREE.Texture} texture - Texture to be updated
     * @memberOf ImagePanorama
     * @instance
     */
    onLoad: function ( texture ) {

        texture.minFilter = texture.magFilter = LinearFilter;
        texture.needsUpdate = true;
		
        this.updateTexture( texture );

        window.requestAnimationFrame( Panorama.prototype.onLoad.bind( this ) );

    },

    /**
     * Reset
     * @memberOf ImagePanorama
     * @instance
     */
    reset: function () {

        Panorama.prototype.reset.call( this );

    },

    /**
     * Dispose
     * @memberOf ImagePanorama
     * @instance
     */
    dispose: function () {

        const { material: { map } } = this;

        // Release cached image
        Cache.remove( this.src );

        if ( map ) { map.dispose(); }

        Panorama.prototype.dispose.call( this );

    }

} );

/**
 * @classdesc Empty panorama
 * @constructor
 */
function EmptyPanorama () {

    const geometry = new BufferGeometry();
    const material = new MeshBasicMaterial( { color: 0x000000, opacity: 0, transparent: true } );

    geometry.addAttribute( 'position', new BufferAttribute( new Float32Array(), 1 ) );

    Panorama.call( this, geometry, material );

}

EmptyPanorama.prototype = Object.assign( Object.create( Panorama.prototype ), {

    constructor: EmptyPanorama

} );

/**
 * @classdesc Cubemap-based panorama
 * @constructor
 * @param {array} images - Array of 6 urls to images, one for each side of the CubeTexture. The urls should be specified in the following order: pos-x, neg-x, pos-y, neg-y, pos-z, neg-z
 */
function CubePanorama ( images = [] ){

    const edgeLength = 10000;
    const shader = Object.assign( {}, ShaderLib[ 'cube' ] );
    const geometry = new BoxBufferGeometry( edgeLength, edgeLength, edgeLength );
    const material = new ShaderMaterial( {

        fragmentShader: shader.fragmentShader,
        vertexShader: shader.vertexShader,
        uniforms: shader.uniforms,
        side: BackSide,
        transparent: true

    } );

    Panorama.call( this, geometry, material );

    this.images = images;
    this.edgeLength = edgeLength;
    this.material.uniforms.opacity.value = 0;

}

CubePanorama.prototype = Object.assign( Object.create( Panorama.prototype ), {

    constructor: CubePanorama,

    /**
     * Load 6 images and bind listeners
     * @memberOf CubePanorama
     * @instance
     */
    load: function () {

        CubeTextureLoader.load( 	

            this.images, 

            this.onLoad.bind( this ), 
            this.onProgress.bind( this ), 
            this.onError.bind( this ) 

        );

    },

    /**
     * This will be called when 6 textures are ready
     * @param  {THREE.CubeTexture} texture - Cube texture
     * @memberOf CubePanorama
     * @instance
     */
    onLoad: function ( texture ) {
		
        this.material.uniforms[ 'tCube' ].value = texture;

        Panorama.prototype.onLoad.call( this );

    },

    /**
     * Dispose
     * @memberOf CubePanorama
     * @instance
     */
    dispose: function () {	

        const { value } = this.material.uniforms.tCube;

        this.images.forEach( ( image ) => { Cache.remove( image ); } );

        if ( value instanceof CubeTexture ) {

            value.dispose();

        }

        Panorama.prototype.dispose.call( this );

    }

} );

/**
 * @classdesc Basic panorama with 6 pre-defined grid images
 * @constructor
 */
function BasicPanorama () {

    const images = [];

    for ( let i = 0; i < 6; i++ ) {

        images.push( DataImage.WhiteTile );

    }

    CubePanorama.call( this, images );

}

BasicPanorama.prototype = Object.assign( Object.create( CubePanorama.prototype ), {

    constructor: BasicPanorama

} );

/**
 * @classdesc Video Panorama
 * @constructor
 * @param {string} src - Equirectangular video url
 * @param {object} [options] - Option for video settings
 * @param {HTMLElement} [options.videoElement] - HTML5 video element contains the video
 * @param {boolean} [options.loop=true] - Specify if the video should loop in the end
 * @param {boolean} [options.muted=true] - Mute the video or not. Need to be true in order to autoplay on some browsers
 * @param {boolean} [options.autoplay=false] - Specify if the video should auto play
 * @param {boolean} [options.playsinline=true] - Specify if video should play inline for iOS. If you want it to auto play inline, set both autoplay and muted options to true
 * @param {string} [options.crossOrigin="anonymous"] - Sets the cross-origin attribute for the video, which allows for cross-origin videos in some browsers (Firefox, Chrome). Set to either "anonymous" or "use-credentials".
 * @param {number} [radius=5000] - The minimum radius for this panoram
 */
function VideoPanorama ( src, options = {} ) {

    const radius = 5000;
    const geometry = new SphereBufferGeometry( radius, 60, 40 );
    const material = new MeshBasicMaterial( { opacity: 0, transparent: true } );

    Panorama.call( this, geometry, material );

    this.src = src;

    this.options = {

        videoElement: document.createElement( 'video' ),
        loop: true,
        muted: true,
        autoplay: false,
        playsinline: true,
        crossOrigin: 'anonymous'

    };

    Object.assign( this.options, options );

    this.videoElement = this.options.videoElement;
    this.videoProgress = 0;
    this.radius = radius;

    this.addEventListener( 'leave', this.pauseVideo.bind( this ) );
    this.addEventListener( 'enter-fade-start', this.resumeVideoProgress.bind( this ) );
    this.addEventListener( 'video-toggle', this.toggleVideo.bind( this ) );
    this.addEventListener( 'video-time', this.setVideoCurrentTime.bind( this ) );

}
VideoPanorama.prototype = Object.assign( Object.create( Panorama.prototype ), {

    constructor: VideoPanorama,

    isMobile: function () {

        let check = false;
        (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})( window.navigator.userAgent || window.navigator.vendor || window.opera );
        return check;

    },

    /**
     * Load video panorama
     * @memberOf VideoPanorama
     * @instance
     * @fires  Panorama#panolens-viewer-handler
     */
    load: function () {

        const { muted, loop, autoplay, playsinline, crossOrigin } = this.options;
        const video = this.videoElement;
        const material = this.material;
        const onProgress = this.onProgress.bind( this );
        const onLoad = this.onLoad.bind( this );

        video.loop = loop;
        video.autoplay = autoplay;
        video.playsinline = playsinline;
        video.crossOrigin = crossOrigin;
        video.muted = muted;
		
        if ( playsinline ) {

            video.setAttribute( 'playsinline', '' );
            video.setAttribute( 'webkit-playsinline', '' );

        } 

        const onloadeddata = function() {

            this.setVideoTexture( video );

            if ( autoplay ) {

                /**
                 * Viewer handler event
                 * @type {object}
                 * @property {string} method - 'updateVideoPlayButton'
                 * @property {boolean} data - Pause video or not
                 */
                this.dispatchEvent( { type: 'panolens-viewer-handler', method: 'updateVideoPlayButton', data: false } );

            }

            // For mobile silent autoplay
            if ( this.isMobile() ) {

                video.pause();

                if ( autoplay && muted ) {

                    /**
                     * Viewer handler event
                     * @type {object}
                     * @property {string} method - 'updateVideoPlayButton'
                     * @property {boolean} data - Pause video or not
                     */
                    this.dispatchEvent( { type: 'panolens-viewer-handler', method: 'updateVideoPlayButton', data: false } );

                } else {

                    /**
                     * Viewer handler event
                     * @type {object}
                     * @property {string} method - 'updateVideoPlayButton'
                     * @property {boolean} data - Pause video or not
                     */
                    this.dispatchEvent( { type: 'panolens-viewer-handler', method: 'updateVideoPlayButton', data: true } );

                }
				
            }

            const loaded = () => {

                // Fix for threejs r89 delayed update
                material.map.needsUpdate = true;

                onProgress( { loaded: 1, total: 1 } );
                onLoad();

            };

            window.requestAnimationFrame( loaded );
			
        };

        /**
         * Ready state of the audio/video element
         * 0 = HAVE_NOTHING - no information whether or not the audio/video is ready
         * 1 = HAVE_METADATA - metadata for the audio/video is ready
         * 2 = HAVE_CURRENT_DATA - data for the current playback position is available, but not enough data to play next frame/millisecond
         * 3 = HAVE_FUTURE_DATA - data for the current and at least the next frame is available
         * 4 = HAVE_ENOUGH_DATA - enough data available to start playing
         */
        if ( video.readyState > 2 ) {

            onloadeddata.call( this );

        } else {

            if ( video.querySelectorAll( 'source' ).length === 0 ) {

                const source = document.createElement( 'source' );
                source.src = this.src;
                video.appendChild( source );

            }

            video.load();
        }

        video.addEventListener( 'loadeddata', onloadeddata.bind( this ) );
		
        video.addEventListener( 'timeupdate', function () {

            this.videoProgress = video.duration >= 0 ? video.currentTime / video.duration : 0;

            /**
             * Viewer handler event
             * @type {object}
             * @property {string} method - 'onVideoUpdate'
             * @property {number} data - The percentage of video progress. Range from 0.0 to 1.0
             */
            this.dispatchEvent( { type: 'panolens-viewer-handler', method: 'onVideoUpdate', data: this.videoProgress } );

        }.bind( this ) );

        video.addEventListener( 'ended', function () {
			
            if ( !loop ) {

                this.resetVideo();
                this.dispatchEvent( { type: 'panolens-viewer-handler', method: 'updateVideoPlayButton', data: true } );

            }

        }.bind( this ), false ); 

    },

    /**
     * Set video texture
     * @memberOf VideoPanorama
     * @instance
     * @param {HTMLVideoElement} video  - The html5 video element
     * @fires Panorama#panolens-viewer-handler
     */
    setVideoTexture: function ( video ) {

        if ( !video ) return;

        const videoTexture = new VideoTexture( video );
        videoTexture.minFilter = LinearFilter;
        videoTexture.magFilter = LinearFilter;
        videoTexture.format = RGBFormat;

        this.updateTexture( videoTexture );
	
    },

    /**
     * Reset
     * @memberOf VideoPanorama
     * @instance
     */
    reset: function () {

        this.videoElement = undefined;	

        Panorama.prototype.reset.call( this );

    },

    /**
     * Check if video is paused
     * @memberOf VideoPanorama
     * @instance
     * @return {boolean} - is video paused or not
     */
    isVideoPaused: function () {

        return this.videoElement.paused;

    },

    /**
     * Toggle video to play or pause
     * @memberOf VideoPanorama
     * @instance
     */
    toggleVideo: function () {

        const video = this.videoElement;

        if ( !video ) { return; }

        video[ video.paused ? 'play' : 'pause' ]();

    },

    /**
     * Set video currentTime
     * @memberOf VideoPanorama
     * @instance
     * @param {object} event - Event contains percentage. Range from 0.0 to 1.0
     */
    setVideoCurrentTime: function ( { percentage } ) {

        const video = this.videoElement;

        if ( video && !Number.isNaN( percentage ) && percentage !== 1 ) {

            video.currentTime = video.duration * percentage;

            this.dispatchEvent( { type: 'panolens-viewer-handler', method: 'onVideoUpdate', data: percentage } );

        }

    },

    /**
     * Play video
     * @memberOf VideoPanorama
     * @instance
     * @fires VideoPanorama#play
     * @fires VideoPanorama#play-error
     */
    playVideo: function () {

        const video = this.videoElement;
        const playVideo = this.playVideo.bind( this );
        const dispatchEvent = this.dispatchEvent.bind( this );
        const onSuccess = () => {

            /**
             * Play event
             * @type {object}
             * @event VideoPanorama#play
             *
             */
            dispatchEvent( { type: 'play' } );

        };
        const onError = ( error ) => {

            // Error playing video. Retry next frame. Possibly Waiting for user interaction
            window.requestAnimationFrame( playVideo );

            /**
             * Play event
             * @type {object}
             * @event VideoPanorama#play-error
             *
             */
            dispatchEvent( { type: 'play-error', error } );

        };

        if ( video && video.paused ) {

            video.play().then( onSuccess ).catch( onError );

        }

    },

    /**
     * Pause video
     * @memberOf VideoPanorama
     * @instance
     * @fires VideoPanorama#pause
     */
    pauseVideo: function () {

        const video = this.videoElement;

        if ( video && !video.paused ) {

            video.pause();

        }

        /**
         * Pause event
         * @type {object}
         * @event VideoPanorama#pause
         *
         */
        this.dispatchEvent( { type: 'pause' } );

    },

    /**
     * Resume video
     * @memberOf VideoPanorama
     * @instance
     */
    resumeVideoProgress: function () {

        const video = this.videoElement;

        if ( video.readyState >= 4 && video.autoplay && !this.isMobile() ) {

            this.playVideo();

            /**
             * Viewer handler event
             * @type {object}
             * @property {string} method - 'updateVideoPlayButton'
             * @property {boolean} data - Pause video or not
             */
            this.dispatchEvent( { type: 'panolens-viewer-handler', method: 'updateVideoPlayButton', data: false } );

        } else {

            this.pauseVideo();

            /**
             * Viewer handler event
             * @type {object}
             * @property {string} method - 'updateVideoPlayButton'
             * @property {boolean} data - Pause video or not
             */
            this.dispatchEvent( { type: 'panolens-viewer-handler', method: 'updateVideoPlayButton', data: true } );

        }

        this.setVideoCurrentTime( { percentage: this.videoProgress } );

    },

    /**
     * Reset video at stating point
     * @memberOf VideoPanorama
     * @instance
     */
    resetVideo: function () {

        const video = this.videoElement;

        if ( video ) {

            this.setVideoCurrentTime( { percentage: 0 } );

        }

    },

    /**
     * Check if video is muted
     * @memberOf VideoPanorama
     * @instance
     * @return {boolean} - is video muted or not
     */
    isVideoMuted: function () {

        return this.videoElement.muted;

    },

    /**
     * Mute video
     * @memberOf VideoPanorama
     * @instance
     */
    muteVideo: function () {

        const video = this.videoElement;

        if ( video && !video.muted ) {

            video.muted = true;

        }

        this.dispatchEvent( { type: 'volumechange' } );

    },

    /**
     * Unmute video
     * @memberOf VideoPanorama
     * @instance
     */
    unmuteVideo: function () {

        const video = this.videoElement;

        if ( video && this.isVideoMuted() ) {

            video.muted = false;

        }

        this.dispatchEvent( { type: 'volumechange' } );

    },

    /**
     * Returns the video element
     * @memberOf VideoPanorama
     * @instance
     * @returns {HTMLElement}
     */
    getVideoElement: function () {

        return this.videoElement;

    },

    /**
     * Dispose video panorama
     * @memberOf VideoPanorama
     * @instance
     */
    dispose: function () {

        const { material: { map } } = this;

        this.pauseVideo();
		
        this.removeEventListener( 'leave', this.pauseVideo.bind( this ) );
        this.removeEventListener( 'enter-fade-start', this.resumeVideoProgress.bind( this ) );
        this.removeEventListener( 'video-toggle', this.toggleVideo.bind( this ) );
        this.removeEventListener( 'video-time', this.setVideoCurrentTime.bind( this ) );

        if ( map ) { map.dispose(); }

        Panorama.prototype.dispose.call( this );

    }

} );

/**
 * @classdesc Google Street View Loader
 * @constructor
 * @param {object} parameters 
 */
function GoogleStreetviewLoader ( parameters = {} ) {

    this._parameters = parameters;
    this._zoom = null;
    this._panoId = null;
    this._panoClient = new google.maps.StreetViewService();
    this._count = 0;
    this._total = 0;
    this._canvas = [];
    this._ctx = [];
    this._wc = 0;
    this._hc = 0;
    this.result = null;
    this.rotation = 0;
    this.copyright = '';
    this.onSizeChange = null;
    this.onPanoramaLoad = null;

    this.levelsW = [ 1, 2, 4, 7, 13, 26 ];
    this.levelsH = [ 1, 1, 2, 4, 7, 13 ];

    this.widths = [ 416, 832, 1664, 3328, 6656, 13312 ];
    this.heights = [ 416, 416, 832, 1664, 3328, 6656 ];

    this.maxW = 6656;
    this.maxH = 6656;

    let gl;

    try {

        const canvas = document.createElement( 'canvas' );

        gl = canvas.getContext( 'experimental-webgl' );

        if( !gl ) {

            gl = canvas.getContext( 'webgl' );

        }

    }
    catch ( error ) {

    }

    this.maxW = Math.max( gl.getParameter( gl.MAX_TEXTURE_SIZE ), this.maxW );
    this.maxH = Math.max( gl.getParameter( gl.MAX_TEXTURE_SIZE ), this.maxH );

}

Object.assign( GoogleStreetviewLoader.prototype, {

    constructor: GoogleStreetviewLoader,

    /**
     * Set progress
     * @param {number} loaded 
     * @param {number} total 
     * @memberOf GoogleStreetviewLoader
     * @instance
     */
    setProgress: function ( loaded, total ) {

        if ( this.onProgress ) {

            this.onProgress( { loaded: loaded, total: total } );

        }
		
    },

    /**
     * Adapt texture to zoom
     * @memberOf GoogleStreetviewLoader
     * @instance
     */
    adaptTextureToZoom: function () {

        const w = this.widths [ this._zoom ];
        const h = this.heights[ this._zoom ];

        const maxW = this.maxW;
        const maxH = this.maxH;

        this._wc = Math.ceil( w / maxW );
        this._hc = Math.ceil( h / maxH );

        for( let y = 0; y < this._hc; y++ ) {
            for( let x = 0; x < this._wc; x++ ) {
                const c = document.createElement( 'canvas' );
                if( x < ( this._wc - 1 ) ) c.width = maxW; else c.width = w - ( maxW * x );
                if( y < ( this._hc - 1 ) ) c.height = maxH; else c.height = h - ( maxH * y );
                this._canvas.push( c );
                this._ctx.push( c.getContext( '2d' ) );
            }
        }

    },

    /**
     * Compose from tile
     * @param {number} x 
     * @param {number} y 
     * @param {*} texture 
     * @memberOf GoogleStreetviewLoader
     * @instance
     */
    composeFromTile: function ( x, y, texture ) {

        const maxW = this.maxW;
        const maxH = this.maxH;

        x *= 512;
        y *= 512;

        const px = Math.floor( x / maxW );
        const py = Math.floor( y / maxH );

        x -= px * maxW;
        y -= py * maxH;

        this._ctx[ py * this._wc + px ].drawImage( texture, 0, 0, texture.width, texture.height, x, y, 512, 512 );

        this.progress();
		
    },

    /**
     * Progress
     * @memberOf GoogleStreetviewLoader
     * @instance
     */
    progress: function() {

        this._count++;
		
        this.setProgress( this._count, this._total );
		
        if ( this._count === this._total) {

            this.canvas = this._canvas;
            this.panoId = this._panoId;
            this.zoom = this._zoom;

            if ( this.onPanoramaLoad ) {

                this.onPanoramaLoad( this._canvas[ 0 ] );

            }

        }
    },

    /**
     * Compose panorama
     * @memberOf GoogleStreetviewLoader
     * @instance
     */
    composePanorama: function () {

        this.setProgress( 0, 1 );
		
        const w = this.levelsW[ this._zoom ];
        const h = this.levelsH[ this._zoom ];
        const self = this;
			
        this._count = 0;
        this._total = w * h;

        const { useWebGL } = this._parameters;

        for( let y = 0; y < h; y++ ) {
            for( let x = 0; x < w; x++ ) {
                const url = 'https://geo0.ggpht.com/cbk?cb_client=maps_sv.tactile&authuser=0&hl=en&output=tile&zoom=' + this._zoom + '&x=' + x + '&y=' + y + '&panoid=' + this._panoId + '&nbt&fover=2';
                ( function( x, y ) { 
                    if( useWebGL ) {
                        const texture = TextureLoader.load( url, null, function() {
                            self.composeFromTile( x, y, texture );
                        } );
                    } else {
                        const img = new Image();
                        img.addEventListener( 'load', function() {
                            self.composeFromTile( x, y, this );			
                        } );
                        img.crossOrigin = '';
                        img.src = url;
                    }
                } )( x, y );
            }
        }
		
    },

    /**
     * Load
     * @param {string} panoid 
     * @memberOf GoogleStreetviewLoader
     * @instance
     */
    load: function ( panoid ) {

        this.loadPano( panoid );

    },

    /**
     * Load panorama
     * @param {string} id
     * @memberOf GoogleStreetviewLoader
     * @instance
     */
    loadPano: function( id ) {

        const self = this;
        this._panoClient.getPanoramaById( id, function (result, status) {
            if (status === google.maps.StreetViewStatus.OK) {
                self.result = result;
                self.copyright = result.copyright;
                self._panoId = result.location.pano;
                self.composePanorama();
            }
        });
		
    },

    /**
     * Set zoom level
     * @param {number} z 
     * @memberOf GoogleStreetviewLoader
     * @instance
     */
    setZoom: function( z ) {

        this._zoom = z;
        this.adaptTextureToZoom();
    }
	
} );

/**
 * @classdesc Google streetview panorama
 * @description [How to get Panorama ID]{@link http://stackoverflow.com/questions/29916149/google-maps-streetview-how-to-get-panorama-id}
 * @constructor
 * @param {string} panoId - Panorama id from Google Streetview 
 * @param {string} [apiKey] - Google Street View API Key
 */
function GoogleStreetviewPanorama ( panoId, apiKey ) {

    ImagePanorama.call( this );

    this.panoId = panoId;

    this.gsvLoader = null;

    this.loadRequested = false;

    this.setupGoogleMapAPI( apiKey );

}

GoogleStreetviewPanorama.prototype = Object.assign( Object.create( ImagePanorama.prototype ), {

    constructor: GoogleStreetviewPanorama,

    /**
     * Load Google Street View by panorama id
     * @param {string} panoId - Gogogle Street View panorama id
     * @memberOf GoogleStreetviewPanorama
     * @instance
     */
    load: function ( panoId ) {

        this.loadRequested = true;

        panoId = ( panoId || this.panoId ) || {};

        if ( panoId && this.gsvLoader ) {

            this.loadGSVLoader( panoId );

        }

    },

    /**
     * Setup Google Map API
     * @param {string}  apiKey
     * @memberOf GoogleStreetviewPanorama
     * @instance
     */
    setupGoogleMapAPI: function ( apiKey ) {

        const script = document.createElement( 'script' );
        script.src = 'https://maps.googleapis.com/maps/api/js?';
        script.src += apiKey ? 'key=' + apiKey : '';
        script.onreadystatechange = this.setGSVLoader.bind( this );
        script.onload = this.setGSVLoader.bind( this );

        document.querySelector( 'head' ).appendChild( script );

    },

    /**
     * Set GSV Loader
     * @memberOf GoogleStreetviewPanorama
     * @instance
     */
    setGSVLoader: function () {

        this.gsvLoader = new GoogleStreetviewLoader();

        if ( this.loadRequested ) {

            this.load();

        }

    },

    /**
     * Get GSV Loader
     * @memberOf GoogleStreetviewPanorama
     * @instance
     * @return {GoogleStreetviewLoader} GSV Loader instance
     */
    getGSVLoader: function () {

        return this.gsvLoader;

    },

    /**
     * Load GSV Loader
     * @param  {string} panoId - Gogogle Street View panorama id
     * @memberOf GoogleStreetviewPanorama
     * @instance
     */
    loadGSVLoader: function ( panoId ) {

        this.loadRequested = false;

        this.gsvLoader.onProgress = this.onProgress.bind( this );

        this.gsvLoader.onPanoramaLoad = this.onLoad.bind( this );

        this.gsvLoader.setZoom( this.getZoomLevel() );

        this.gsvLoader.load( panoId );

        this.gsvLoader.loaded = true;
    },

    /**
     * This will be called when panorama is loaded
     * @param  {HTMLCanvasElement} canvas - Canvas where the tiles have been drawn
     * @memberOf GoogleStreetviewPanorama
     * @instance
     */
    onLoad: function ( canvas ) {

        ImagePanorama.prototype.onLoad.call( this, new Texture( canvas ) );

    },

    /**
     * Reset
     * @memberOf GoogleStreetviewPanorama
     * @instance
     */
    reset: function () {

        this.gsvLoader = undefined;

        ImagePanorama.prototype.reset.call( this );

    }

} );

/**
 * Stereographic projection shader
 * based on http://notlion.github.io/streetview-stereographic
 * @author pchen66
 */

/**
 * @description Stereograhpic Shader
 * @module StereographicShader
 * @property {object} uniforms
 * @property {THREE.Texture} uniforms.tDiffuse diffuse map
 * @property {number} uniforms.resolution image resolution
 * @property {THREE.Matrix4} uniforms.transform transformation matrix
 * @property {number} uniforms.zoom image zoom factor
 * @property {number} uniforms.opacity image opacity
 * @property {string} vertexShader vertex shader
 * @property {string} fragmentShader fragment shader
 */
const StereographicShader = {

    uniforms: {

        'tDiffuse': { value: new Texture() },
        'resolution': { value: 1.0 },
        'transform': { value: new Matrix4() },
        'zoom': { value: 1.0 },
        'opacity': { value: 1.0 }

    },

    vertexShader: [

        'varying vec2 vUv;',

        'void main() {',

        'vUv = uv;',
        'gl_Position = vec4( position, 1.0 );',

        '}' 

    ].join( '\n' ),

    fragmentShader: [

        'uniform sampler2D tDiffuse;',
        'uniform float resolution;',
        'uniform mat4 transform;',
        'uniform float zoom;',
        'uniform float opacity;',

        'varying vec2 vUv;',

        'const float PI = 3.141592653589793;',

        'void main(){',

        'vec2 position = -1.0 +  2.0 * vUv;',

        'position *= vec2( zoom * resolution, zoom * 0.5 );',

        'float x2y2 = position.x * position.x + position.y * position.y;',
        'vec3 sphere_pnt = vec3( 2. * position, x2y2 - 1. ) / ( x2y2 + 1. );',

        'sphere_pnt = vec3( transform * vec4( sphere_pnt, 1.0 ) );',

        'vec2 sampleUV = vec2(',
        '(atan(sphere_pnt.y, sphere_pnt.x) / PI + 1.0) * 0.5,',
        '(asin(sphere_pnt.z) / PI + 0.5)',
        ');',

        'gl_FragColor = texture2D( tDiffuse, sampleUV );',

        'gl_FragColor.a *= opacity;',

        '}'

    ].join( '\n' )

};

/**
 * @classdesc Little Planet
 * @constructor
 * @param {string} type 		- Type of little planet basic class
 * @param {string} source 		- URL for the image source
 * @param {number} [size=10000] - Size of plane geometry
 * @param {number} [ratio=0.5]  - Ratio of plane geometry's height against width
 */
function LittlePlanet ( type = 'image', source, size = 10000, ratio = 0.5 ) {

    if ( type === 'image' ) {

        ImagePanorama.call( this, source, this.createGeometry( size, ratio ), this.createMaterial( size ) );

    }

    this.size = size;
    this.ratio = ratio;
    this.EPS = 0.000001;
    this.frameId = null;

    this.dragging = false;
    this.userMouse = new Vector2();

    this.quatA = new Quaternion();
    this.quatB = new Quaternion();
    this.quatCur = new Quaternion();
    this.quatSlerp = new Quaternion();

    this.vectorX = new Vector3( 1, 0, 0 );
    this.vectorY = new Vector3( 0, 1, 0 );

    this.addEventListener( 'window-resize', this.onWindowResize );

}

LittlePlanet.prototype = Object.assign( Object.create( ImagePanorama.prototype ), {

    constructor: LittlePlanet,

    add: function ( object ) {

        if ( arguments.length > 1 ) {
			
            for ( let i = 0; i < arguments.length; i ++ ) {

                this.add( arguments[ i ] );

            }

            return this;

        }

        if ( object instanceof Infospot ) {

            object.material.depthTest = false;
			
        }

        ImagePanorama.prototype.add.call( this, object );

    },

    createGeometry: function ( size, ratio ) {

        return new PlaneBufferGeometry( size, size * ratio );

    },

    createMaterial: function ( size ) {

        const shader = Object.assign( {}, StereographicShader ), uniforms = shader.uniforms;

        uniforms.zoom.value = size;
        uniforms.opacity.value = 0.0;

        return new ShaderMaterial( {

            uniforms: uniforms,
            vertexShader: shader.vertexShader,
            fragmentShader: shader.fragmentShader,
            side: BackSide,
            transparent: true

        } );
		
    },

    registerMouseEvents: function () {

        this.container.addEventListener( 'mousedown', this.onMouseDown.bind( this ), { passive: true } );
        this.container.addEventListener( 'mousemove', this.onMouseMove.bind( this ), { passive: true } );
        this.container.addEventListener( 'mouseup', this.onMouseUp.bind( this ), { passive: true } );
        this.container.addEventListener( 'touchstart', this.onMouseDown.bind( this ), { passive: true } );
        this.container.addEventListener( 'touchmove', this.onMouseMove.bind( this ), { passive: true } );
        this.container.addEventListener( 'touchend', this.onMouseUp.bind( this ), { passive: true } );
        this.container.addEventListener( 'mousewheel', this.onMouseWheel.bind( this ), { passive: false } );
        this.container.addEventListener( 'DOMMouseScroll', this.onMouseWheel.bind( this ), { passive: false } );
        this.container.addEventListener( 'contextmenu', this.onContextMenu.bind( this ), { passive: true } );
		
    },

    unregisterMouseEvents: function () {

        this.container.removeEventListener( 'mousedown', this.onMouseDown.bind( this ), false );
        this.container.removeEventListener( 'mousemove', this.onMouseMove.bind( this ), false );
        this.container.removeEventListener( 'mouseup', this.onMouseUp.bind( this ), false );
        this.container.removeEventListener( 'touchstart', this.onMouseDown.bind( this ), false );
        this.container.removeEventListener( 'touchmove', this.onMouseMove.bind( this ), false );
        this.container.removeEventListener( 'touchend', this.onMouseUp.bind( this ), false );
        this.container.removeEventListener( 'mousewheel', this.onMouseWheel.bind( this ), false );
        this.container.removeEventListener( 'DOMMouseScroll', this.onMouseWheel.bind( this ), false );
        this.container.removeEventListener( 'contextmenu', this.onContextMenu.bind( this ), false );
		
    },

    onMouseDown: function ( event ) {

        const inputCount = ( event.touches && event.touches.length ) || 1 ;

        switch ( inputCount ) {

        case 1:

            const x = ( event.clientX >= 0 ) ? event.clientX : event.touches[ 0 ].clientX;
            const y = ( event.clientY >= 0 ) ? event.clientY : event.touches[ 0 ].clientY;

            this.dragging = true;
            this.userMouse.set( x, y );

            break;

        case 2:

            const dx = event.touches[ 0 ].pageX - event.touches[ 1 ].pageX;
            const dy = event.touches[ 0 ].pageY - event.touches[ 1 ].pageY;
            const distance = Math.sqrt( dx * dx + dy * dy );
            this.userMouse.pinchDistance = distance;

            break;

        default:

            break;

        }

        this.onUpdateCallback();

    },

    onMouseMove: function ( event ) {

        const inputCount = ( event.touches && event.touches.length ) || 1 ;

        switch ( inputCount ) {

        case 1:

            const x = ( event.clientX >= 0 ) ? event.clientX : event.touches[ 0 ].clientX;
            const y = ( event.clientY >= 0 ) ? event.clientY : event.touches[ 0 ].clientY;

            const angleX = Math$1.degToRad( x - this.userMouse.x ) * 0.4;
            const angleY = Math$1.degToRad( y - this.userMouse.y ) * 0.4;

            if ( this.dragging ) {
                this.quatA.setFromAxisAngle( this.vectorY, angleX );
                this.quatB.setFromAxisAngle( this.vectorX, angleY );
                this.quatCur.multiply( this.quatA ).multiply( this.quatB );
                this.userMouse.set( x, y );
            }

            break;

        case 2:

            const dx = event.touches[ 0 ].pageX - event.touches[ 1 ].pageX;
            const dy = event.touches[ 0 ].pageY - event.touches[ 1 ].pageY;
            const distance = Math.sqrt( dx * dx + dy * dy );

            this.addZoomDelta( this.userMouse.pinchDistance - distance );

            break;

        default:

            break;

        }

    },

    onMouseUp: function () {

        this.dragging = false;

    },

    onMouseWheel: function ( event ) {

        event.preventDefault();
        event.stopPropagation();

        let delta = 0;

        if ( event.wheelDelta !== undefined ) { // WebKit / Opera / Explorer 9

            delta = event.wheelDelta;

        } else if ( event.detail !== undefined ) { // Firefox

            delta = - event.detail;

        }

        this.addZoomDelta( delta );
        this.onUpdateCallback();

    },

    addZoomDelta: function ( delta ) {

        const uniforms = this.material.uniforms;
        const lowerBound = this.size * 0.1;
        const upperBound = this.size * 10;

        uniforms.zoom.value += delta;

        if ( uniforms.zoom.value <= lowerBound ) {

            uniforms.zoom.value = lowerBound;

        } else if ( uniforms.zoom.value >= upperBound ) {

            uniforms.zoom.value = upperBound;

        }

    },

    onUpdateCallback: function () {

        this.frameId = window.requestAnimationFrame( this.onUpdateCallback.bind( this ) );

        this.quatSlerp.slerp( this.quatCur, 0.1 );

        if ( this.material ) {

            this.material.uniforms.transform.value.makeRotationFromQuaternion( this.quatSlerp );

        }
        
        if ( !this.dragging && 1.0 - this.quatSlerp.clone().dot( this.quatCur ) < this.EPS ) {
			
            window.cancelAnimationFrame( this.frameId );

        }

    },

    reset: function () {

        this.quatCur.set( 0, 0, 0, 1 );
        this.quatSlerp.set( 0, 0, 0, 1 );
        this.onUpdateCallback();

    },

    onLoad: function ( texture ) {

        this.material.uniforms.resolution.value = this.container.clientWidth / this.container.clientHeight;

        this.registerMouseEvents();
        this.onUpdateCallback();
		
        this.dispatchEvent( { type: 'panolens-viewer-handler', method: 'disableControl' } );

        ImagePanorama.prototype.onLoad.call( this, texture );
		
    },

    onLeave: function () {

        this.unregisterMouseEvents();

        this.dispatchEvent( { type: 'panolens-viewer-handler', method: 'enableControl', data: CONTROLS.ORBIT } );

        window.cancelAnimationFrame( this.frameId );

        ImagePanorama.prototype.onLeave.call( this );
		
    },

    onWindowResize: function () {

        this.material.uniforms.resolution.value = this.container.clientWidth / this.container.clientHeight;

    },

    onContextMenu: function () {

        this.dragging = false;

    },

    dispose: function () {	

        this.unregisterMouseEvents();

        ImagePanorama.prototype.dispose.call( this );

    }

});

/**
 * @classdesc Image Little Planet
 * @constructor
 * @param {string} source 		- URL for the image source
 * @param {number} [size=10000] - Size of plane geometry
 * @param {number} [ratio=0.5]  - Ratio of plane geometry's height against width
 */
function ImageLittlePlanet ( source, size, ratio ) {

    LittlePlanet.call( this, 'image', source, size, ratio );

}

ImageLittlePlanet.prototype = Object.assign( Object.create( LittlePlanet.prototype ), {

    constructor: ImageLittlePlanet,

    /**
     * On loaded with texture
     * @param {THREE.Texture} texture
     * @memberOf ImageLittlePlanet
     * @instance
     */
    onLoad: function ( texture ) {

        this.updateTexture( texture );

        LittlePlanet.prototype.onLoad.call( this, texture );

    },
    
    /**
     * Update texture
     * @param {THREE.Texture} texture 
     * @memberOf ImageLittlePlanet
     * @instance
     */
    updateTexture: function ( texture ) {

        texture.minFilter = texture.magFilter = LinearFilter;
		
        this.material.uniforms[ 'tDiffuse' ].value = texture;

    },

    /**
     * Dispose
     * @memberOf ImageLittlePlanet
     * @instance
     */
    dispose: function () {

        const tDiffuse = this.material.uniforms[ 'tDiffuse' ];

        if ( tDiffuse && tDiffuse.value ) {

            tDiffuse.value.dispose();

        }

        LittlePlanet.prototype.dispose.call( this );

    }

} );

/**
 * @classdesc Camera panorama
 * @description See {@link https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamConstraints|MediaStreamConstraints} for constraints
 * @param {object} - camera constraints
 * @constructor
 */
function CameraPanorama ( constraints ) {

    const radius = 5000;
    const geometry = new SphereBufferGeometry( radius, 60, 40 );
    const material = new MeshBasicMaterial( { visible: false });

    Panorama.call( this, geometry, material );

    this.media = new Media( constraints );
    this.radius = radius;

    this.addEventListener( 'enter', this.start.bind( this ) );
    this.addEventListener( 'leave', this.stop.bind( this ) );
    this.addEventListener( 'panolens-container', this.onPanolensContainer.bind( this ) );
    this.addEventListener( 'panolens-scene', this.onPanolensScene.bind( this ) );

}

CameraPanorama.prototype = Object.assign( Object.create( Panorama.prototype ), {

    constructor: CameraPanorama,

    /**
     * On container event
     * @param {object} event
     * @memberOf CameraPanorama
     * @instance
     */
    onPanolensContainer: function ( { container } ) {

        this.media.setContainer( container );

    },

    /**
     * On scene event
     * @param {object} event 
     * @memberOf CameraPanorama
     * @instance
     */
    onPanolensScene: function ( { scene } ) {

        this.media.setScene( scene );

    },

    /**
     * Start camera streaming
     * @memberOf CameraPanorama
     * @instance
     * @returns {Promise}
     */
    start: function () {

        return this.media.start();

    },

    /**
     * Stop camera streaming
     * @memberOf CameraPanorama
     * @instance
     */
    stop: function () {

        this.media.stop();

    },

} );

/**
 * @classdesc Orbit Controls
 * @constructor
 * @external OrbitControls
 * @param {THREE.Object} object 
 * @param {HTMLElement} domElement 
 */
function OrbitControls ( object, domElement ) {

    this.object = object;
    this.domElement = ( domElement !== undefined ) ? domElement : document;
    this.frameId = null;

    // API

    // Set to false to disable this control
    this.enabled = true;

    /*
     * "target" sets the location of focus, where the control orbits around
     * and where it pans with respect to.
     */
    this.target = new Vector3();

    // center is old, deprecated; use "target" instead
    this.center = this.target;

    /*
     * This option actually enables dollying in and out; left as "zoom" for
     * backwards compatibility
     */
    this.noZoom = false;
    this.zoomSpeed = 1.0;

    // Limits to how far you can dolly in and out ( PerspectiveCamera only )
    this.minDistance = 0;
    this.maxDistance = Infinity;

    // Limits to how far you can zoom in and out ( OrthographicCamera only )
    this.minZoom = 0;
    this.maxZoom = Infinity;

    // Set to true to disable this control
    this.noRotate = false;
    this.rotateSpeed = -0.15;

    // Set to true to disable this control
    this.noPan = true;
    this.keyPanSpeed = 7.0;	// pixels moved per arrow key push

    // Set to true to automatically rotate around the target
    this.autoRotate = false;
    this.autoRotateSpeed = 2.0; // 30 seconds per round when fps is 60

    /*
     * How far you can orbit vertically, upper and lower limits.
     * Range is 0 to Math.PI radians.
     */
    this.minPolarAngle = 0; // radians
    this.maxPolarAngle = Math.PI; // radians

    // Momentum
  	this.momentumDampingFactor = 0.90;
  	this.momentumScalingFactor = -0.005;
  	this.momentumKeydownFactor = 20;

  	// Fov
  	this.minFov = 30;
  	this.maxFov = 120;

    /*
     * How far you can orbit horizontally, upper and lower limits.
     * If set, must be a sub-interval of the interval [ - Math.PI, Math.PI ].
     */
    this.minAzimuthAngle = - Infinity; // radians
    this.maxAzimuthAngle = Infinity; // radians

    // Set to true to disable use of the keys
    this.noKeys = false;

    // The four arrow keys
    this.keys = { LEFT: 37, UP: 38, RIGHT: 39, BOTTOM: 40 };

    // Mouse buttons
    this.mouseButtons = { ORBIT: MOUSE.LEFT, ZOOM: MOUSE.MIDDLE, PAN: MOUSE.RIGHT };

    /*
     * //////////
     * internals
     */

    var scope = this;

    var EPS = 10e-8;
    var MEPS = 10e-5;

    var rotateStart = new Vector2();
    var rotateEnd = new Vector2();
    var rotateDelta = new Vector2();

    var panStart = new Vector2();
    var panEnd = new Vector2();
    var panDelta = new Vector2();
    var panOffset = new Vector3();

    var offset = new Vector3();

    var dollyStart = new Vector2();
    var dollyEnd = new Vector2();
    var dollyDelta = new Vector2();

    var theta = 0;
    var phi = 0;
    var phiDelta = 0;
    var thetaDelta = 0;
    var scale = 1;
    var pan = new Vector3();

    var lastPosition = new Vector3();
    var lastQuaternion = new Quaternion();

    var momentumLeft = 0, momentumUp = 0;
    var eventPrevious;
    var momentumOn = false;

    var keyUp, keyBottom, keyLeft, keyRight;

    var STATE = { NONE: -1, ROTATE: 0, DOLLY: 1, PAN: 2, TOUCH_ROTATE: 3, TOUCH_DOLLY: 4, TOUCH_PAN: 5 };

    var state = STATE.NONE;

    // for reset

    this.target0 = this.target.clone();
    this.position0 = this.object.position.clone();
    this.zoom0 = this.object.zoom;

    // so camera.up is the orbit axis

    var quat = new Quaternion().setFromUnitVectors( object.up, new Vector3( 0, 1, 0 ) );
    var quatInverse = quat.clone().inverse();

    // events

    var changeEvent = { type: 'change' };
    var startEvent = { type: 'start' };
    var endEvent = { type: 'end' };

    this.setLastQuaternion = function ( quaternion ) {
        lastQuaternion.copy( quaternion );
        scope.object.quaternion.copy( quaternion );
    };

    this.getLastPosition = function () {
        return lastPosition;
    };

    this.rotateLeft = function ( angle ) {

        if ( angle === undefined ) {

            angle = getAutoRotationAngle();

        }

        thetaDelta -= angle;


    };

    this.rotateUp = function ( angle ) {

        if ( angle === undefined ) {

            angle = getAutoRotationAngle();

        }

        phiDelta -= angle;

    };

    // pass in distance in world space to move left
    this.panLeft = function ( distance ) {

        var te = this.object.matrix.elements;

        // get X column of matrix
        panOffset.set( te[ 0 ], te[ 1 ], te[ 2 ] );
        panOffset.multiplyScalar( - distance );

        pan.add( panOffset );

    };

    // pass in distance in world space to move up
    this.panUp = function ( distance ) {

        var te = this.object.matrix.elements;

        // get Y column of matrix
        panOffset.set( te[ 4 ], te[ 5 ], te[ 6 ] );
        panOffset.multiplyScalar( distance );

        pan.add( panOffset );

    };

    /*
     * pass in x,y of change desired in pixel space,
     * right and down are positive
     */
    this.pan = function ( deltaX, deltaY ) {

        var element = scope.domElement === document ? scope.domElement.body : scope.domElement;

        if ( scope.object instanceof PerspectiveCamera ) {

            // perspective
            var position = scope.object.position;
            var offset = position.clone().sub( scope.target );
            var targetDistance = offset.length();

            // half of the fov is center to top of screen
            targetDistance *= Math.tan( ( scope.object.fov / 2 ) * Math.PI / 180.0 );

            // we actually don't use screenWidth, since perspective camera is fixed to screen height
            scope.panLeft( 2 * deltaX * targetDistance / element.clientHeight );
            scope.panUp( 2 * deltaY * targetDistance / element.clientHeight );

        } else if ( scope.object instanceof OrthographicCamera ) {

            // orthographic
            scope.panLeft( deltaX * (scope.object.right - scope.object.left) / element.clientWidth );
            scope.panUp( deltaY * (scope.object.top - scope.object.bottom) / element.clientHeight );

        } else {

            // camera neither orthographic or perspective
            console.warn( 'WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.' );

        }

    };

    this.momentum = function(){
		
        if ( !momentumOn ) return;

        if ( Math.abs( momentumLeft ) < MEPS && Math.abs( momentumUp ) < MEPS ) { 

            momentumOn = false; 
            return;
        }

        momentumUp   *= this.momentumDampingFactor;
        momentumLeft *= this.momentumDampingFactor;

        thetaDelta -= this.momentumScalingFactor * momentumLeft;
        phiDelta   -= this.momentumScalingFactor * momentumUp;

    };

    this.dollyIn = function ( dollyScale ) {

        if ( dollyScale === undefined ) {

            dollyScale = getZoomScale();

        }

        if ( scope.object instanceof PerspectiveCamera ) {

            scale /= dollyScale;

        } else if ( scope.object instanceof OrthographicCamera ) {

            scope.object.zoom = Math.max( this.minZoom, Math.min( this.maxZoom, this.object.zoom * dollyScale ) );
            scope.object.updateProjectionMatrix();
            scope.dispatchEvent( changeEvent );

        } else {

            console.warn( 'WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.' );

        }

    };

    this.dollyOut = function ( dollyScale ) {

        if ( dollyScale === undefined ) {

            dollyScale = getZoomScale();

        }

        if ( scope.object instanceof PerspectiveCamera ) {

            scale *= dollyScale;

        } else if ( scope.object instanceof OrthographicCamera ) {

            scope.object.zoom = Math.max( this.minZoom, Math.min( this.maxZoom, this.object.zoom / dollyScale ) );
            scope.object.updateProjectionMatrix();
            scope.dispatchEvent( changeEvent );

        } else {

            console.warn( 'WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.' );

        }

    };

    this.update = function ( ignoreUpdate ) {

        var position = this.object.position;

        offset.copy( position ).sub( this.target );

        // rotate offset to "y-axis-is-up" space
        offset.applyQuaternion( quat );

        // angle from z-axis around y-axis

        theta = Math.atan2( offset.x, offset.z );

        // angle from y-axis

        phi = Math.atan2( Math.sqrt( offset.x * offset.x + offset.z * offset.z ), offset.y );

        if ( this.autoRotate && state === STATE.NONE ) {

            this.rotateLeft( getAutoRotationAngle() );

        }

        this.momentum();

        theta += thetaDelta;
        phi += phiDelta;

        // restrict theta to be between desired limits
        theta = Math.max( this.minAzimuthAngle, Math.min( this.maxAzimuthAngle, theta ) );

        // restrict phi to be between desired limits
        phi = Math.max( this.minPolarAngle, Math.min( this.maxPolarAngle, phi ) );

        // restrict phi to be betwee EPS and PI-EPS
        phi = Math.max( EPS, Math.min( Math.PI - EPS, phi ) );

        var radius = offset.length() * scale;

        // restrict radius to be between desired limits
        radius = Math.max( this.minDistance, Math.min( this.maxDistance, radius ) );

        // move target to panned location
        this.target.add( pan );

        offset.x = radius * Math.sin( phi ) * Math.sin( theta );
        offset.y = radius * Math.cos( phi );
        offset.z = radius * Math.sin( phi ) * Math.cos( theta );

        // rotate offset back to "camera-up-vector-is-up" space
        offset.applyQuaternion( quatInverse );

        position.copy( this.target ).add( offset );

        this.object.lookAt( this.target );

        thetaDelta = 0;
        phiDelta = 0;
        scale = 1;
        pan.set( 0, 0, 0 );

        /*
         * update condition is:
         * min(camera displacement, camera rotation in radians)^2 > EPS
         * using small-angle approximation cos(x/2) = 1 - x^2 / 8
         */
        if ( lastPosition.distanceToSquared( this.object.position ) > EPS
		    || 8 * (1 - lastQuaternion.dot(this.object.quaternion)) > EPS ) {

            if ( ignoreUpdate !== true ) { this.dispatchEvent( changeEvent ); }

            lastPosition.copy( this.object.position );
            lastQuaternion.copy (this.object.quaternion );

        }

    };


    this.reset = function () {

        state = STATE.NONE;

        this.target.copy( this.target0 );
        this.object.position.copy( this.position0 );
        this.object.zoom = this.zoom0;

        this.object.updateProjectionMatrix();
        this.dispatchEvent( changeEvent );

        this.update();

    };

    this.getPolarAngle = function () {

        return phi;

    };

    this.getAzimuthalAngle = function () {

        return theta;

    };

    function getAutoRotationAngle() {

        return 2 * Math.PI / 60 / 60 * scope.autoRotateSpeed;

    }

    function getZoomScale() {

        return Math.pow( 0.95, scope.zoomSpeed );

    }

    function onMouseDown( event ) {

        momentumOn = false;

   		momentumLeft = momentumUp = 0;

        if ( scope.enabled === false ) return;
        event.preventDefault();

        if ( event.button === scope.mouseButtons.ORBIT ) {
            if ( scope.noRotate === true ) return;

            state = STATE.ROTATE;

            rotateStart.set( event.clientX, event.clientY );

        } else if ( event.button === scope.mouseButtons.ZOOM ) {
            if ( scope.noZoom === true ) return;

            state = STATE.DOLLY;

            dollyStart.set( event.clientX, event.clientY );

        } else if ( event.button === scope.mouseButtons.PAN ) {
            if ( scope.noPan === true ) return;

            state = STATE.PAN;

            panStart.set( event.clientX, event.clientY );

        }

        if ( state !== STATE.NONE ) {
            document.addEventListener( 'mousemove', onMouseMove, false );
            document.addEventListener( 'mouseup', onMouseUp, false );
            scope.dispatchEvent( startEvent );
        }

        scope.update();

    }

    function onMouseMove( event ) {

        if ( scope.enabled === false ) return;

        event.preventDefault();

        var element = scope.domElement === document ? scope.domElement.body : scope.domElement;

        if ( state === STATE.ROTATE ) {

            if ( scope.noRotate === true ) return;

            rotateEnd.set( event.clientX, event.clientY );
            rotateDelta.subVectors( rotateEnd, rotateStart );

            // rotating across whole screen goes 360 degrees around
            scope.rotateLeft( 2 * Math.PI * rotateDelta.x / element.clientWidth * scope.rotateSpeed );

            // rotating up and down along whole screen attempts to go 360, but limited to 180
            scope.rotateUp( 2 * Math.PI * rotateDelta.y / element.clientHeight * scope.rotateSpeed );

            rotateStart.copy( rotateEnd );

            if( eventPrevious ){
                momentumLeft = event.clientX - eventPrevious.clientX;
                momentumUp = event.clientY - eventPrevious.clientY;
            }

            eventPrevious = event;

        } else if ( state === STATE.DOLLY ) {

            if ( scope.noZoom === true ) return;

            dollyEnd.set( event.clientX, event.clientY );
            dollyDelta.subVectors( dollyEnd, dollyStart );

            if ( dollyDelta.y > 0 ) {

                scope.dollyIn();

            } else if ( dollyDelta.y < 0 ) {

                scope.dollyOut();

            }

            dollyStart.copy( dollyEnd );

        } else if ( state === STATE.PAN ) {

            if ( scope.noPan === true ) return;

            panEnd.set( event.clientX, event.clientY );
            panDelta.subVectors( panEnd, panStart );

            scope.pan( panDelta.x, panDelta.y );

            panStart.copy( panEnd );

        }

        if ( state !== STATE.NONE ) scope.update();

    }

    function onMouseUp( /* event */ ) {

        momentumOn = true;

        eventPrevious = undefined;

        if ( scope.enabled === false ) return;

        document.removeEventListener( 'mousemove', onMouseMove, false );
        document.removeEventListener( 'mouseup', onMouseUp, false );
        scope.dispatchEvent( endEvent );
        state = STATE.NONE;

    }

    function onMouseWheel( event ) {

        if ( scope.enabled === false || scope.noZoom === true || state !== STATE.NONE ) return;

        event.preventDefault();
        event.stopPropagation();

        var delta = 0;

        if ( event.wheelDelta !== undefined ) { // WebKit / Opera / Explorer 9

            delta = event.wheelDelta;

        } else if ( event.detail !== undefined ) { // Firefox

            delta = - event.detail;

        }

        if ( delta > 0 ) {

            // scope.dollyOut();
            scope.object.fov = ( scope.object.fov < scope.maxFov ) 
                ? scope.object.fov + 1
                : scope.maxFov;
            scope.object.updateProjectionMatrix();

        } else if ( delta < 0 ) {

            // scope.dollyIn();
            scope.object.fov = ( scope.object.fov > scope.minFov ) 
                ? scope.object.fov - 1
                : scope.minFov;
            scope.object.updateProjectionMatrix();

        }

        scope.update();
        scope.dispatchEvent( changeEvent );
        scope.dispatchEvent( startEvent );
        scope.dispatchEvent( endEvent );

    }

    function onKeyUp ( event ) {

        switch ( event.keyCode ) {

        case scope.keys.UP:
            keyUp = false;
            break;

        case scope.keys.BOTTOM:
            keyBottom = false;
            break;

        case scope.keys.LEFT:
            keyLeft = false;
            break;

        case scope.keys.RIGHT:
            keyRight = false;
            break;

        }

    }

    function onKeyDown( event ) {

        if ( scope.enabled === false || scope.noKeys === true || scope.noRotate === true ) return;

        switch ( event.keyCode ) {

        case scope.keys.UP:
            keyUp = true;
            break;

        case scope.keys.BOTTOM:
            keyBottom = true;
            break;

        case scope.keys.LEFT:
            keyLeft = true;
            break;

        case scope.keys.RIGHT:
            keyRight = true;
            break;

        }

        if (keyUp || keyBottom || keyLeft || keyRight) {

            momentumOn = true;

            if (keyUp) momentumUp = - scope.rotateSpeed * scope.momentumKeydownFactor;
            if (keyBottom) momentumUp = scope.rotateSpeed * scope.momentumKeydownFactor;
            if (keyLeft) momentumLeft = - scope.rotateSpeed * scope.momentumKeydownFactor;
            if (keyRight) momentumLeft = scope.rotateSpeed * scope.momentumKeydownFactor;

        }

    }

    function touchstart( event ) {

        momentumOn = false;

        momentumLeft = momentumUp = 0;

        if ( scope.enabled === false ) return;

        switch ( event.touches.length ) {

        case 1:	// one-fingered touch: rotate

            if ( scope.noRotate === true ) return;

            state = STATE.TOUCH_ROTATE;

            rotateStart.set( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY );
            break;

        case 2:	// two-fingered touch: dolly

            if ( scope.noZoom === true ) return;

            state = STATE.TOUCH_DOLLY;

            var dx = event.touches[ 0 ].pageX - event.touches[ 1 ].pageX;
            var dy = event.touches[ 0 ].pageY - event.touches[ 1 ].pageY;
            var distance = Math.sqrt( dx * dx + dy * dy );

            dollyStart.set( 0, distance );

            break;

        case 3: // three-fingered touch: pan

            if ( scope.noPan === true ) return;

            state = STATE.TOUCH_PAN;

            panStart.set( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY );
            break;

        default:

            state = STATE.NONE;

        }

        if ( state !== STATE.NONE ) scope.dispatchEvent( startEvent );

    }

    function touchmove( event ) {

        if ( scope.enabled === false ) return;

        event.preventDefault();
        event.stopPropagation();

        var element = scope.domElement === document ? scope.domElement.body : scope.domElement;

        switch ( event.touches.length ) {

        case 1: // one-fingered touch: rotate

            if ( scope.noRotate === true ) return;
            if ( state !== STATE.TOUCH_ROTATE ) return;

            rotateEnd.set( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY );
            rotateDelta.subVectors( rotateEnd, rotateStart );

            // rotating across whole screen goes 360 degrees around
            scope.rotateLeft( 2 * Math.PI * rotateDelta.x / element.clientWidth * scope.rotateSpeed );
            // rotating up and down along whole screen attempts to go 360, but limited to 180
            scope.rotateUp( 2 * Math.PI * rotateDelta.y / element.clientHeight * scope.rotateSpeed );

            rotateStart.copy( rotateEnd );

            if( eventPrevious ){
                momentumLeft = event.touches[ 0 ].pageX - eventPrevious.pageX;
                momentumUp = event.touches[ 0 ].pageY - eventPrevious.pageY;
            }

            eventPrevious = {
                pageX: event.touches[ 0 ].pageX,
                pageY: event.touches[ 0 ].pageY,
            };

            scope.update();
            break;

        case 2: // two-fingered touch: dolly

            if ( scope.noZoom === true ) return;
            if ( state !== STATE.TOUCH_DOLLY ) return;

            var dx = event.touches[ 0 ].pageX - event.touches[ 1 ].pageX;
            var dy = event.touches[ 0 ].pageY - event.touches[ 1 ].pageY;
            var distance = Math.sqrt( dx * dx + dy * dy );

            dollyEnd.set( 0, distance );
            dollyDelta.subVectors( dollyEnd, dollyStart );

            if ( dollyDelta.y < 0 ) {

                scope.object.fov = ( scope.object.fov < scope.maxFov ) 
                    ? scope.object.fov + 1
                    : scope.maxFov;
                scope.object.updateProjectionMatrix();

            } else if ( dollyDelta.y > 0 ) {

                scope.object.fov = ( scope.object.fov > scope.minFov ) 
                    ? scope.object.fov - 1
                    : scope.minFov;
                scope.object.updateProjectionMatrix();

            }

            dollyStart.copy( dollyEnd );

            scope.update();
            scope.dispatchEvent( changeEvent );
            break;

        case 3: // three-fingered touch: pan

            if ( scope.noPan === true ) return;
            if ( state !== STATE.TOUCH_PAN ) return;

            panEnd.set( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY );
            panDelta.subVectors( panEnd, panStart );

            scope.pan( panDelta.x, panDelta.y );

            panStart.copy( panEnd );

            scope.update();
            break;

        default:

            state = STATE.NONE;

        }

    }

    function touchend( /* event */ ) {

        momentumOn = true;

        eventPrevious = undefined;

        if ( scope.enabled === false ) return;

        scope.dispatchEvent( endEvent );
        state = STATE.NONE;

    }

    this.dispose = function() {

        this.domElement.removeEventListener( 'mousedown', onMouseDown );
        this.domElement.removeEventListener( 'mousewheel', onMouseWheel );
        this.domElement.removeEventListener( 'DOMMouseScroll', onMouseWheel );

        this.domElement.removeEventListener( 'touchstart', touchstart );
        this.domElement.removeEventListener( 'touchend', touchend );
        this.domElement.removeEventListener( 'touchmove', touchmove );

        window.removeEventListener( 'keyup', onKeyUp );
        window.removeEventListener( 'keydown', onKeyDown );

    };

    // this.domElement.addEventListener( 'contextmenu', function ( event ) { event.preventDefault(); }, false );
    this.domElement.addEventListener( 'mousedown', onMouseDown, { passive: false } );
    this.domElement.addEventListener( 'mousewheel', onMouseWheel, { passive: false } );
    this.domElement.addEventListener( 'DOMMouseScroll', onMouseWheel, { passive: false } ); // firefox

    this.domElement.addEventListener( 'touchstart', touchstart, { passive: false } );
    this.domElement.addEventListener( 'touchend', touchend, { passive: false } );
    this.domElement.addEventListener( 'touchmove', touchmove, { passive: false } );

    window.addEventListener( 'keyup', onKeyUp, { passive: false } );
    window.addEventListener( 'keydown', onKeyDown, { passive: false } );

    // force an update at start
    this.update();

}
OrbitControls.prototype = Object.assign( Object.create( EventDispatcher.prototype ), {

    constructor: OrbitControls

} );

/**
 * @classdesc Device Orientation Control
 * @constructor
 * @external DeviceOrientationControls
 * @param {THREE.Camera} camera 
 * @param {HTMLElement} domElement 
 */
function DeviceOrientationControls ( camera, domElement ) {

    var scope = this;
    var changeEvent = { type: 'change' };

    var rotY = 0;
    var rotX = 0;
    var tempX = 0;
    var tempY = 0;

    this.camera = camera;
    this.camera.rotation.reorder( 'YXZ' );
    this.domElement = ( domElement !== undefined ) ? domElement : document;

    this.enabled = true;

    this.deviceOrientation = {};
    this.screenOrientation = 0;

    this.alpha = 0;
    this.alphaOffsetAngle = 0;


    var onDeviceOrientationChangeEvent = function( event ) {

        scope.deviceOrientation = event;

    };

    var onScreenOrientationChangeEvent = function() {

        scope.screenOrientation = window.orientation || 0;

    };

    var onTouchStartEvent = function (event) {

        event.preventDefault();
        event.stopPropagation();

        tempX = event.touches[ 0 ].pageX;
        tempY = event.touches[ 0 ].pageY;

    };

    var onTouchMoveEvent = function (event) {

        event.preventDefault();
        event.stopPropagation();

        rotY += Math$1.degToRad( ( event.touches[ 0 ].pageX - tempX ) / 4 );
        rotX += Math$1.degToRad( ( tempY - event.touches[ 0 ].pageY ) / 4 );

        scope.updateAlphaOffsetAngle( rotY );

        tempX = event.touches[ 0 ].pageX;
        tempY = event.touches[ 0 ].pageY;

    };

    // The angles alpha, beta and gamma form a set of intrinsic Tait-Bryan angles of type Z-X'-Y''

    var setCameraQuaternion = function( quaternion, alpha, beta, gamma, orient ) {

        var zee = new Vector3( 0, 0, 1 );

        var euler = new Euler();

        var q0 = new Quaternion();

        var q1 = new Quaternion( - Math.sqrt( 0.5 ), 0, 0, Math.sqrt( 0.5 ) ); // - PI/2 around the x-axis

        var vectorFingerY;
        var fingerQY = new Quaternion();
        var fingerQX = new Quaternion();

        if ( scope.screenOrientation == 0 ) {

            vectorFingerY = new Vector3( 1, 0, 0 );
            fingerQY.setFromAxisAngle( vectorFingerY, -rotX );

        } else if ( scope.screenOrientation == 180 ) {

            vectorFingerY = new Vector3( 1, 0, 0 );
            fingerQY.setFromAxisAngle( vectorFingerY, rotX );

        } else if ( scope.screenOrientation == 90 ) {

            vectorFingerY = new Vector3( 0, 1, 0 );
            fingerQY.setFromAxisAngle( vectorFingerY, rotX );

        } else if ( scope.screenOrientation == - 90) {

            vectorFingerY = new Vector3( 0, 1, 0 );
            fingerQY.setFromAxisAngle( vectorFingerY, -rotX );

        }

        q1.multiply( fingerQY );
        q1.multiply( fingerQX );

        euler.set( beta, alpha, - gamma, 'YXZ' ); // 'ZXY' for the device, but 'YXZ' for us

        quaternion.setFromEuler( euler ); // orient the device

        quaternion.multiply( q1 ); // camera looks out the back of the device, not the top

        quaternion.multiply( q0.setFromAxisAngle( zee, - orient ) ); // adjust for screen orientation

    };

    this.connect = function() {

        onScreenOrientationChangeEvent(); // run once on load

        window.addEventListener( 'orientationchange', onScreenOrientationChangeEvent, { passive: true } );
        window.addEventListener( 'deviceorientation', onDeviceOrientationChangeEvent, { passive: true } );
        window.addEventListener( 'deviceorientation', this.update.bind( this ), { passive: true } );

        scope.domElement.addEventListener( 'touchstart', onTouchStartEvent, { passive: false } );
        scope.domElement.addEventListener( 'touchmove', onTouchMoveEvent, { passive: false } );

        scope.enabled = true;

    };

    this.disconnect = function() {

        window.removeEventListener( 'orientationchange', onScreenOrientationChangeEvent, false );
        window.removeEventListener( 'deviceorientation', onDeviceOrientationChangeEvent, false );
        window.removeEventListener( 'deviceorientation', this.update.bind( this ), false );

        scope.domElement.removeEventListener( 'touchstart', onTouchStartEvent, false );
        scope.domElement.removeEventListener( 'touchmove', onTouchMoveEvent, false );

        scope.enabled = false;

    };

    this.update = function( ignoreUpdate ) {

        if ( scope.enabled === false ) return;

        var alpha = scope.deviceOrientation.alpha ? Math$1.degToRad( scope.deviceOrientation.alpha ) + scope.alphaOffsetAngle : 0; // Z
        var beta = scope.deviceOrientation.beta ? Math$1.degToRad( scope.deviceOrientation.beta ) : 0; // X'
        var gamma = scope.deviceOrientation.gamma ? Math$1.degToRad( scope.deviceOrientation.gamma ) : 0; // Y''
        var orient = scope.screenOrientation ? Math$1.degToRad( scope.screenOrientation ) : 0; // O

        setCameraQuaternion( scope.camera.quaternion, alpha, beta, gamma, orient );
        scope.alpha = alpha;

        if ( ignoreUpdate !== true ) { scope.dispatchEvent( changeEvent ); }

    };

    this.updateAlphaOffsetAngle = function( angle ) {

        this.alphaOffsetAngle = angle;
        this.update();

    };

    this.dispose = function() {

        this.disconnect();

    };

    this.connect();

}
DeviceOrientationControls.prototype = Object.assign( Object.create( EventDispatcher.prototype), {

    constructor: DeviceOrientationControls

} );

/**
 * @classdesc Google Cardboard Effect Composer
 * @constructor
 * @external CardboardEffect
 * @param {THREE.WebGLRenderer} renderer 
 */
function CardboardEffect ( renderer ) {

    var _camera = new OrthographicCamera( - 1, 1, 1, - 1, 0, 1 );

    var _scene = new Scene();

    var _stereo = new StereoCamera();
    _stereo.aspect = 0.5;

    var _params = { minFilter: LinearFilter, magFilter: NearestFilter, format: RGBAFormat };

    var _renderTarget = new WebGLRenderTarget( 512, 512, _params );
    _renderTarget.scissorTest = true;
    _renderTarget.texture.generateMipmaps = false;

    /*
     * Distortion Mesh ported from:
     * https://github.com/borismus/webvr-boilerplate/blob/master/src/distortion/barrel-distortion-fragment.js
     */

    var distortion = new Vector2( 0.441, 0.156 );

    var geometry = new PlaneBufferGeometry( 1, 1, 10, 20 ).removeAttribute( 'normal' ).toNonIndexed();

    var positions = geometry.attributes.position.array;
    var uvs = geometry.attributes.uv.array;

    // duplicate
    geometry.attributes.position.count *= 2;
    geometry.attributes.uv.count *= 2;

    var positions2 = new Float32Array( positions.length * 2 );
    positions2.set( positions );
    positions2.set( positions, positions.length );

    var uvs2 = new Float32Array( uvs.length * 2 );
    uvs2.set( uvs );
    uvs2.set( uvs, uvs.length );

    var vector = new Vector2();
    var length = positions.length / 3;

    for ( var i = 0, l = positions2.length / 3; i < l; i ++ ) {

        vector.x = positions2[ i * 3 + 0 ];
        vector.y = positions2[ i * 3 + 1 ];

        var dot = vector.dot( vector );
        var scalar = 1.5 + ( distortion.x + distortion.y * dot ) * dot;

        var offset = i < length ? 0 : 1;

        positions2[ i * 3 + 0 ] = ( vector.x / scalar ) * 1.5 - 0.5 + offset;
        positions2[ i * 3 + 1 ] = ( vector.y / scalar ) * 3.0;

        uvs2[ i * 2 ] = ( uvs2[ i * 2 ] + offset ) * 0.5;

    }

    geometry.attributes.position.array = positions2;
    geometry.attributes.uv.array = uvs2;

    //

    var material = new MeshBasicMaterial( { map: _renderTarget.texture } );
    var mesh = new Mesh( geometry, material );
    _scene.add( mesh );

    //

    this.setSize = function ( width, height ) {

        renderer.setSize( width, height );

        var pixelRatio = renderer.getPixelRatio();

        _renderTarget.setSize( width * pixelRatio, height * pixelRatio );

    };

    this.render = function ( scene, camera ) {

        scene.updateMatrixWorld();

        if ( camera.parent === null ) camera.updateMatrixWorld();

        _stereo.update( camera );

        var width = _renderTarget.width / 2;
        var height = _renderTarget.height;

        if ( renderer.autoClear ) renderer.clear();

        _renderTarget.scissor.set( 0, 0, width, height );
        _renderTarget.viewport.set( 0, 0, width, height );
        renderer.setRenderTarget( _renderTarget );
        renderer.render( scene, _stereo.cameraL );

        renderer.clearDepth();

        _renderTarget.scissor.set( width, 0, width, height );
        _renderTarget.viewport.set( width, 0, width, height );
        renderer.setRenderTarget( _renderTarget );
        renderer.render( scene, _stereo.cameraR );

        renderer.clearDepth();

        renderer.setRenderTarget( null );
        renderer.render( _scene, _camera );
    };

}

/**
 * @classdesc Stereo Effect Composer
 * @constructor
 * @external StereoEffect
 * @param {THREE.WebGLRenderer} renderer 
 */
const StereoEffect = function ( renderer ) {

    var _stereo = new StereoCamera();
    _stereo.aspect = 0.5;
    var size = new Vector2();

    this.setEyeSeparation = function ( eyeSep ) {

        _stereo.eyeSep = eyeSep;

    };

    this.setSize = function ( width, height ) {

        renderer.setSize( width, height );

    };

    this.render = function ( scene, camera ) {

        scene.updateMatrixWorld();

        if ( camera.parent === null ) camera.updateMatrixWorld();

        _stereo.update( camera );

        renderer.getSize( size );

        if ( renderer.autoClear ) renderer.clear();
        renderer.setScissorTest( true );

        renderer.setScissor( 0, 0, size.width / 2, size.height );
        renderer.setViewport( 0, 0, size.width / 2, size.height );
        renderer.render( scene, _stereo.cameraL );

        renderer.setScissor( size.width / 2, 0, size.width / 2, size.height );
        renderer.setViewport( size.width / 2, 0, size.width / 2, size.height );
        renderer.render( scene, _stereo.cameraR );

        renderer.setScissorTest( false );

    };

};

/**
 * @classdesc Viewer contains pre-defined scene, camera and renderer
 * @constructor
 * @param {object} [options] - Use custom or default config options
 * @param {HTMLElement} [options.container] - A HTMLElement to host the canvas
 * @param {THREE.Scene} [options.scene=THREE.Scene] - A THREE.Scene which contains panorama and 3D objects
 * @param {THREE.Camera} [options.camera=THREE.PerspectiveCamera] - A THREE.Camera to view the scene
 * @param {THREE.WebGLRenderer} [options.renderer=THREE.WebGLRenderer] - A THREE.WebGLRenderer to render canvas
 * @param {boolean} [options.controlBar=true] - Show/hide control bar on the bottom of the container
 * @param {array}   [options.controlButtons=[]] - Button names to mount on controlBar if controlBar exists, Defaults to ['fullscreen', 'setting', 'video']
 * @param {boolean} [options.autoHideControlBar=false] - Auto hide control bar when click on non-active area
 * @param {boolean} [options.autoHideInfospot=true] - Auto hide infospots when click on non-active area
 * @param {boolean} [options.horizontalView=false] - Allow only horizontal camera control
 * @param {number}  [options.clickTolerance=10] - Distance tolerance to tigger click / tap event
 * @param {number}  [options.cameraFov=60] - Camera field of view value
 * @param {boolean} [options.reverseDragging=false] - Reverse dragging direction
 * @param {boolean} [options.enableReticle=false] - Enable reticle for mouseless interaction other than VR mode
 * @param {number}  [options.dwellTime=1500] - Dwell time for reticle selection in ms
 * @param {boolean} [options.autoReticleSelect=true] - Auto select a clickable target after dwellTime
 * @param {boolean} [options.viewIndicator=false] - Adds an angle view indicator in upper left corner
 * @param {number}  [options.indicatorSize=30] - Size of View Indicator
 * @param {string}  [options.output='none'] - Whether and where to output raycast position. Could be 'console' or 'overlay'
 * @param {boolean} [options.autoRotate=false] - Auto rotate
 * @param {number}  [options.autoRotateSpeed=2.0] - Auto rotate speed as in degree per second. Positive is counter-clockwise and negative is clockwise.
 * @param {number}  [options.autoRotateActivationDuration=5000] - Duration before auto rotatation when no user interactivity in ms
 * @param {boolean} [options.autoCentre=false] - Automatically align new scenes to the current direction of the viewer
 */
function Viewer ( options ) {

    let container;

    options = options || {};
    options.controlBar = options.controlBar !== undefined ? options.controlBar : true;
    options.controlButtons = options.controlButtons || [ 'fullscreen', 'setting', 'video' ];
    options.autoHideControlBar = options.autoHideControlBar !== undefined ? options.autoHideControlBar : false;
    options.autoHideInfospot = options.autoHideInfospot !== undefined ? options.autoHideInfospot : true;
    options.horizontalView = options.horizontalView !== undefined ? options.horizontalView : false;
    options.clickTolerance = options.clickTolerance || 10;
    options.cameraFov = options.cameraFov || 60;
    options.reverseDragging = options.reverseDragging || false;
    options.enableReticle = options.enableReticle || false;
    options.dwellTime = options.dwellTime || 1500;
    options.autoReticleSelect = options.autoReticleSelect !== undefined ? options.autoReticleSelect : true;
    options.viewIndicator = options.viewIndicator !== undefined ? options.viewIndicator : false;
    options.indicatorSize = options.indicatorSize || 30;
    options.output = options.output ? options.output : 'none';
    options.autoRotate = options.autoRotate || false;
    options.autoRotateSpeed = options.autoRotateSpeed || 2.0;
    options.autoRotateActivationDuration = options.autoRotateActivationDuration || 5000;
    options.autoCentre = options.autoCentre || false;

    this.options = options;

    /*
     * CSS Icon
     * const styleLoader = new StyleLoader();
     * styleLoader.inject( 'icono' );
     */

    // Container
    if ( options.container ) {

        container = options.container;
        container._width = container.clientWidth;
        container._height = container.clientHeight;

    } else {

        container = document.createElement( 'div' );
        container.classList.add( 'panolens-container' );
        container.style.width = '100%';
        container.style.height = '100%';
        container._width = window.innerWidth;
        container._height = window.innerHeight;
        document.body.appendChild( container );

    }

    this.container = container;

    this.camera = options.camera || new PerspectiveCamera( this.options.cameraFov, this.container.clientWidth / this.container.clientHeight, 1, 10000 );
    this.scene = options.scene || new Scene();
    this.renderer = options.renderer || new WebGLRenderer( { alpha: true, antialias: false } );
    this.sceneReticle = new Scene();

    this.viewIndicatorSize = this.options.indicatorSize;

    this.reticle = {};
    this.tempEnableReticle = this.options.enableReticle;

    this.mode = MODES.NORMAL;

    this.panorama = null;
    this.widget = null;

    this.hoverObject = null;
    this.infospot = null;
    this.pressEntityObject = null;
    this.pressObject = null;

    this.raycaster = new Raycaster();
    this.raycasterPoint = new Vector2();
    this.userMouse = new Vector2();
    this.updateCallbacks = [];
    this.requestAnimationId = null;

    this.cameraFrustum = new Frustum();
    this.cameraViewProjectionMatrix = new Matrix4();

    this.autoRotateRequestId = null;

    this.outputDivElement = null;

    this.touchSupported = 'ontouchstart' in window || window.DocumentTouch && document instanceof DocumentTouch;

    // Handler references
    this.HANDLER_MOUSE_DOWN = this.onMouseDown.bind( this );
    this.HANDLER_MOUSE_UP = this.onMouseUp.bind( this );
    this.HANDLER_MOUSE_MOVE = this.onMouseMove.bind( this );
    this.HANDLER_WINDOW_RESIZE = this.onWindowResize.bind( this );
    this.HANDLER_KEY_DOWN = this.onKeyDown.bind( this );
    this.HANDLER_KEY_UP = this.onKeyUp.bind( this );
    this.HANDLER_TAP = this.onTap.bind( this, {
        clientX: this.container.clientWidth / 2,
        clientY: this.container.clientHeight / 2
    } );

    // Flag for infospot output
    this.OUTPUT_INFOSPOT = false;

    // Animations
    this.tweenLeftAnimation = new Tween.Tween();
    this.tweenUpAnimation = new Tween.Tween();

    // Renderer
    this.renderer.setPixelRatio( window.devicePixelRatio );
    this.renderer.setSize( this.container.clientWidth, this.container.clientHeight );
    this.renderer.setClearColor( 0x000000, 0 );
    this.renderer.autoClear = false;

    // Append Renderer Element to container
    this.renderer.domElement.classList.add( 'panolens-canvas' );
    this.renderer.domElement.style.display = 'block';
    this.container.style.backgroundColor = '#000';
    this.container.appendChild( this.renderer.domElement );

    // Camera Controls
    this.OrbitControls = new OrbitControls( this.camera, this.container );
    this.OrbitControls.id = 'orbit';
    this.OrbitControls.minDistance = 1;
    this.OrbitControls.noPan = true;
    this.OrbitControls.autoRotate = this.options.autoRotate;
    this.OrbitControls.autoRotateSpeed = this.options.autoRotateSpeed;

    this.DeviceOrientationControls = new DeviceOrientationControls( this.camera, this.container );
    this.DeviceOrientationControls.id = 'device-orientation';
    this.DeviceOrientationControls.enabled = false;
    this.camera.position.z = 1;

    // Register change event if passiveRenering
    if ( this.options.passiveRendering ) {

        console.warn( 'passiveRendering is now deprecated' );

    }

    // Controls
    this.controls = [ this.OrbitControls, this.DeviceOrientationControls ];
    this.control = this.OrbitControls;

    // Cardboard effect
    this.CardboardEffect = new CardboardEffect( this.renderer );
    this.CardboardEffect.setSize( this.container.clientWidth, this.container.clientHeight );

    // Stereo effect
    this.StereoEffect = new StereoEffect( this.renderer );
    this.StereoEffect.setSize( this.container.clientWidth, this.container.clientHeight );

    this.effect = this.CardboardEffect;

    // Add default hidden reticle
    this.addReticle();

    // Lock horizontal view
    if ( this.options.horizontalView ) {
        this.OrbitControls.minPolarAngle = Math.PI / 2;
        this.OrbitControls.maxPolarAngle = Math.PI / 2;
    }

    // Add Control UI
    if ( this.options.controlBar !== false ) {
        this.addDefaultControlBar( this.options.controlButtons );
    }

    // Add View Indicator
    if ( this.options.viewIndicator ) {
        this.addViewIndicator();
    }

    // Reverse dragging direction
    if ( this.options.reverseDragging ) {
        this.reverseDraggingDirection();
    }

    // Register event if reticle is enabled, otherwise defaults to mouse
    if ( this.options.enableReticle ) {
        this.enableReticleControl();
    } else {
        this.registerMouseAndTouchEvents();
    }

    // Output infospot position to an overlay container if specified
    if ( this.options.output === 'overlay' ) {
        this.addOutputElement();
    }

    // Register dom event listeners
    this.registerEventListeners();

    // Animate
    this.animate.call( this );

}
Viewer.prototype = Object.assign( Object.create( EventDispatcher.prototype ), {

    constructor: Viewer,

    /**
     * Add an object to the scene
     * Automatically hookup with panolens-viewer-handler listener
     * to communicate with viewer method
     * @param {THREE.Object3D} object - The object to be added
     * @memberOf Viewer
     * @instance
     */
    add: function ( object ) {

        if ( arguments.length > 1 ) {

            for ( let i = 0; i < arguments.length; i ++ ) {

                this.add( arguments[ i ] );

            }

            return this;

        }

        this.scene.add( object );

        // All object added to scene has 'panolens-viewer-handler' event to handle viewer communication
        if ( object.addEventListener ) {

            object.addEventListener( 'panolens-viewer-handler', this.eventHandler.bind( this ) );

        }

        // All object added to scene being passed with container
        if ( object instanceof Panorama && object.dispatchEvent ) {

            object.dispatchEvent( { type: 'panolens-container', container: this.container } );

        }

        if ( object instanceof CameraPanorama ) {

            object.dispatchEvent( { type: 'panolens-scene', scene: this.scene } );

        }

        // Hookup default panorama event listeners
        if ( object.type === 'panorama' ) {

            this.addPanoramaEventListener( object );

            if ( !this.panorama ) {

                this.setPanorama( object );

            }

        }

    },

    /**
     * Remove an object from the scene
     * @param  {THREE.Object3D} object - Object to be removed
     * @memberOf Viewer
     * @instance
     */
    remove: function ( object ) {

        if ( object.removeEventListener ) {

            object.removeEventListener( 'panolens-viewer-handler', this.eventHandler.bind( this ) );

        }

        this.scene.remove( object );

    },

    /**
     * Add default control bar
     * @param {array} array - The control buttons array
     * @memberOf Viewer
     * @instance
     */
    addDefaultControlBar: function ( array ) {

        if ( this.widget ) {

            console.warn( 'Default control bar exists' );
            return;

        }

        const widget = new Widget( this.container );
        widget.addEventListener( 'panolens-viewer-handler', this.eventHandler.bind( this ) );
        widget.addControlBar();
        array.forEach( buttonName => {

            widget.addControlButton( buttonName );

        } );

        this.widget = widget;

    },

    /**
     * Set a panorama to be the current one
     * @param {Panorama} pano - Panorama to be set
     * @memberOf Viewer
     * @instance
     */
    setPanorama: function ( pano ) {

        const leavingPanorama = this.panorama;

        if ( pano.type === 'panorama' && leavingPanorama !== pano ) {

            // Clear exisiting infospot
            this.hideInfospot();

            const afterEnterComplete = () => {

                if ( leavingPanorama ) { leavingPanorama.onLeave(); }
                pano.removeEventListener( 'enter-fade-start', afterEnterComplete );

                if ( this.options.autoCentre ) {

                    this.centreActivePanorama();

                }

            };

            pano.addEventListener( 'enter-fade-start', afterEnterComplete );

            // Assign and enter panorama
            (this.panorama = pano).onEnter();
			
        }

    },

    /**
     * Event handler to execute commands from child objects
     * @param {object} event - The dispatched event with method as function name and data as an argument
     * @memberOf Viewer
     * @instance
     */
    eventHandler: function ( event ) {

        if ( event.method && this[ event.method ] ) {

            this[ event.method ]( event.data );

        }

    },

    /**
     * Dispatch event to all descendants
     * @param  {object} event - Event to be passed along
     * @memberOf Viewer
     * @instance
     */
    dispatchEventToChildren: function ( event ) {

        this.scene.traverse( function ( object ) {

            if ( object.dispatchEvent ) {

                object.dispatchEvent( event );

            }

        });

    },

    /**
     * Set widget content
     * @method activateWidgetItem
     * @param  {integer} controlIndex - Control index
     * @param  {integer} mode - Modes for effects
     * @memberOf Viewer
     * @instance
     */
    activateWidgetItem: function ( controlIndex, mode ) {

        const mainMenu = this.widget.mainMenu;
        const ControlMenuItem = mainMenu.children[ 0 ];
        const ModeMenuItem = mainMenu.children[ 1 ];

        let item;

        if ( controlIndex !== undefined ) {

            switch ( controlIndex ) {

            case 0:

                item = ControlMenuItem.subMenu.children[ 1 ];

                break;

            case 1:

                item = ControlMenuItem.subMenu.children[ 2 ];

                break;
					
            default:

                item = ControlMenuItem.subMenu.children[ 1 ];

                break;	

            }

            ControlMenuItem.subMenu.setActiveItem( item );
            ControlMenuItem.setSelectionTitle( item.textContent );

        }

        if ( mode !== undefined ) {

            switch( mode ) {

            case MODES.CARDBOARD:

                item = ModeMenuItem.subMenu.children[ 2 ];

                break;

            case MODES.STEREO:

                item = ModeMenuItem.subMenu.children[ 3 ];
					
                break;

            default:

                item = ModeMenuItem.subMenu.children[ 1 ];

                break;
            }

            ModeMenuItem.subMenu.setActiveItem( item );
            ModeMenuItem.setSelectionTitle( item.textContent );

        }

    },

    /**
     * Enable rendering effect
     * @param  {MODES} mode - Modes for effects
     * @memberOf Viewer
     * @instance
     */
    enableEffect: function ( mode ) {

        if ( this.mode === mode ) { return; }
        if ( mode === MODES.NORMAL ) { this.disableEffect(); return; }
        else { this.mode = mode; }

        const fov = this.camera.fov;

        switch( mode ) {

        case MODES.CARDBOARD:

            this.effect = this.CardboardEffect;
            this.enableReticleControl();

            break;

        case MODES.STEREO:

            this.effect = this.StereoEffect;
            this.enableReticleControl();
				
            break;

        default:

            this.effect = null;
            this.disableReticleControl();

            break;

        }

        this.activateWidgetItem( undefined, this.mode );

        /**
         * Dual eye effect event
         * @type {object}
         * @event Infospot#panolens-dual-eye-effect
         * @property {MODES} mode - Current display mode
         */
        this.dispatchEventToChildren( { type: 'panolens-dual-eye-effect', mode: this.mode } );

        // Force effect stereo camera to update by refreshing fov
        this.camera.fov = fov + 10e-3;
        this.effect.setSize( this.container.clientWidth, this.container.clientHeight );
        this.render();
        this.camera.fov = fov;

        /**
         * Dispatch mode change event
         * @type {object}
         * @event Viewer#mode-change
         * @property {MODES} mode - Current display mode
         */
        this.dispatchEvent( { type: 'mode-change', mode: this.mode } );

    },

    /**
     * Disable additional rendering effect
     * @memberOf Viewer
     * @instance
     */
    disableEffect: function () {

        if ( this.mode === MODES.NORMAL ) { return; }

        this.mode = MODES.NORMAL;
        this.disableReticleControl();

        this.activateWidgetItem( undefined, this.mode );

        /**
         * Dual eye effect event
         * @type {object}
         * @event Infospot#panolens-dual-eye-effect
         * @property {MODES} mode - Current display mode
         */
        this.dispatchEventToChildren( { type: 'panolens-dual-eye-effect', mode: this.mode } );

        this.renderer.setSize( this.container.clientWidth, this.container.clientHeight );
        this.render();

        /**
         * Dispatch mode change event
         * @type {object}
         * @event Viewer#mode-change
         * @property {MODES} mode - Current display mode
         */
        this.dispatchEvent( { type: 'mode-change', mode: this.mode } );
    },

    /**
     * Enable reticle control
     * @memberOf Viewer
     * @instance
     */
    enableReticleControl: function () {

        if ( this.reticle.visible ) { return; }

        this.tempEnableReticle = true;

        // Register reticle event and unregister mouse event
        this.unregisterMouseAndTouchEvents();
        this.reticle.show();
        this.registerReticleEvent();
        this.updateReticleEvent();

    },

    /**
     * Disable reticle control
     * @memberOf Viewer
     * @instance
     */
    disableReticleControl: function () {

        this.tempEnableReticle = false;

        // Register mouse event and unregister reticle event
        if ( !this.options.enableReticle ) {

            this.reticle.hide();
            this.unregisterReticleEvent();
            this.registerMouseAndTouchEvents();

        } else {

            this.updateReticleEvent();

        }

    },

    /**
     * Enable auto rotation
     * @memberOf Viewer
     * @instance
     */
    enableAutoRate: function () {

        this.options.autoRotate = true;
        this.OrbitControls.autoRotate = true;

    },

    /**
     * Disable auto rotation
     * @memberOf Viewer
     * @instance
     */
    disableAutoRate: function () {

        clearTimeout( this.autoRotateRequestId );
        this.options.autoRotate = false;
        this.OrbitControls.autoRotate = false;

    },

    /**
     * Toggle video play or stop
     * @param {boolean} pause
     * @memberOf Viewer
     * @instance
     * @fires Viewer#video-toggle
     */
    toggleVideoPlay: function ( pause ) {

        if ( this.panorama instanceof VideoPanorama ) {

            /**
             * Toggle video event
             * @type {object}
             * @event Viewer#video-toggle
             */
            this.panorama.dispatchEvent( { type: 'video-toggle', pause: pause } );

        }

    },

    /**
     * Set currentTime in a video
     * @param {number} percentage - Percentage of a video. Range from 0.0 to 1.0
     * @memberOf Viewer
     * @instance
     * @fires Viewer#video-time
     */
    setVideoCurrentTime: function ( percentage ) {

        if ( this.panorama instanceof VideoPanorama ) {

            /**
             * Setting video time event
             * @type {object}
             * @event Viewer#video-time
             * @property {number} percentage - Percentage of a video. Range from 0.0 to 1.0
             */
            this.panorama.dispatchEvent( { type: 'video-time', percentage: percentage } );

        }

    },

    /**
     * This will be called when video updates if an widget is present
     * @param {number} percentage - Percentage of a video. Range from 0.0 to 1.0
     * @memberOf Viewer
     * @instance
     * @fires Viewer#video-update
     */
    onVideoUpdate: function ( percentage ) {

        const { widget } = this;

        /**
         * Video update event
         * @type {object}
         * @event Viewer#video-update
         * @property {number} percentage - Percentage of a video. Range from 0.0 to 1.0
         */
        if( widget ) { widget.dispatchEvent( { type: 'video-update', percentage: percentage } ); }

    },

    /**
     * Add update callback to be called every animation frame
     * @param {function} callback
     * @memberOf Viewer
     * @instance
     */
    addUpdateCallback: function ( fn ) {

        if ( fn ) {

            this.updateCallbacks.push( fn );

        }

    },

    /**
     * Remove update callback
     * @param  {function} fn - The function to be removed
     * @memberOf Viewer
     * @instance
     */
    removeUpdateCallback: function ( fn ) {

        const index = this.updateCallbacks.indexOf( fn );

        if ( fn && index >= 0 ) {

            this.updateCallbacks.splice( index, 1 );

        }

    },

    /**
     * Show video widget
     * @memberOf Viewer
     * @instance
     */
    showVideoWidget: function () {

        const { widget } = this;

        /**
         * Show video widget event
         * @type {object}
         * @event Viewer#video-control-show
         */
        if( widget ) { widget.dispatchEvent( { type: 'video-control-show' } ); }

    },

    /**
     * Hide video widget
     * @memberOf Viewer
     * @instance
     */
    hideVideoWidget: function () {

        const { widget } = this;

        /**
         * Hide video widget
         * @type {object}
         * @event Viewer#video-control-hide
         */
        if( widget ) { widget.dispatchEvent( { type: 'video-control-hide' } ); }

    },

    /**
     * Update video play button
     * @param {boolean} paused 
     * @memberOf Viewer
     * @instance
     */
    updateVideoPlayButton: function ( paused ) {

        const { widget } = this;

        if ( widget && widget.videoElement && widget.videoElement.controlButton ) {

            widget.videoElement.controlButton.update( paused );

        }

    },

    /**
     * Add default panorama event listeners
     * @param {Panorama} pano - The panorama to be added with event listener
     * @memberOf Viewer
     * @instance
     */
    addPanoramaEventListener: function ( pano ) {

        // Set camera control on every panorama
        pano.addEventListener( 'enter-fade-start', this.setCameraControl.bind( this ) );

        // Show and hide widget event only when it's VideoPanorama
        if ( pano instanceof VideoPanorama ) {

            pano.addEventListener( 'enter-fade-start', this.showVideoWidget.bind( this ) );
            pano.addEventListener( 'leave', function () {

                if ( !(this.panorama instanceof VideoPanorama) ) {

                    this.hideVideoWidget.call( this );

                }
				
            }.bind( this ) );

        }

    },

    /**
     * Set camera control
     * @memberOf Viewer
     * @instance
     */
    setCameraControl: function () {

        this.OrbitControls.target.copy( this.panorama.position );

    },

    /**
     * Get current camera control
     * @return {object} - Current navigation control
     * @memberOf Viewer
     * @instance
     * @returns {THREE.OrbitControls|THREE.DeviceOrientationControls}
     */
    getControl: function () {

        return this.control;

    },

    /**
     * Get scene
     * @memberOf Viewer
     * @instance
     * @return {THREE.Scene} - Current scene which the viewer is built on
     */
    getScene: function () {

        return this.scene;

    },

    /**
     * Get camera
     * @memberOf Viewer
     * @instance
     * @return {THREE.Camera} - The scene camera
     */
    getCamera: function () {

        return this.camera;

    },

    /**
     * Get renderer
     * @memberOf Viewer
     * @instance
     * @return {THREE.WebGLRenderer} - The renderer using webgl
     */
    getRenderer: function () {

        return this.renderer;

    },

    /**
     * Get container
     * @memberOf Viewer
     * @instance
     * @return {HTMLElement} - The container holds rendererd canvas
     */
    getContainer: function () {

        return this.container;

    },

    /**
     * Get control id
     * @memberOf Viewer
     * @instance
     * @return {string} - Control id. 'orbit' or 'device-orientation'
     */
    getControlId: function () {

        return this.control.id;

    },

    /**
     * Get next navigation control id
     * @memberOf Viewer
     * @instance
     * @return {string} - Next control id
     */
    getNextControlId: function () {

        return this.controls[ this.getNextControlIndex() ].id;

    },

    /**
     * Get next navigation control index
     * @memberOf Viewer
     * @instance
     * @return {number} - Next control index
     */
    getNextControlIndex: function () {

        const controls = this.controls;
        const control = this.control;
        const nextIndex = controls.indexOf( control ) + 1;

        return ( nextIndex >= controls.length ) ? 0 : nextIndex;

    },

    /**
     * Set field of view of camera
     * @param {number} fov
     * @memberOf Viewer
     * @instance
     */
    setCameraFov: function ( fov ) {

        this.camera.fov = fov;
        this.camera.updateProjectionMatrix();

    },

    /**
     * Enable control by index
     * @param  {CONTROLS} index - Index of camera control
     * @memberOf Viewer
     * @instance
     */
    enableControl: function ( index ) {

        index = ( index >= 0 && index < this.controls.length ) ? index : 0;

        this.control.enabled = false;

        this.control = this.controls[ index ];

        this.control.enabled = true;

        switch ( index ) {

        case CONTROLS.ORBIT:

            this.camera.position.copy( this.panorama.position );
            this.camera.position.z += 1;

            break;

        case CONTROLS.DEVICEORIENTATION:

            this.camera.position.copy( this.panorama.position );

            break;

        default:

            break;
        }

        this.control.update();

        this.activateWidgetItem( index, undefined );

    },

    /**
     * Disable current control
     * @memberOf Viewer
     * @instance
     */
    disableControl: function () {

        this.control.enabled = false;

    },

    /**
     * Toggle next control
     * @memberOf Viewer
     * @instance
     */
    toggleNextControl: function () {

        this.enableControl( this.getNextControlIndex() );

    },

    /**
     * Screen Space Projection
     * @memberOf Viewer
     * @instance
     */
    getScreenVector: function ( worldVector ) {

        const vector = worldVector.clone();
        const widthHalf = ( this.container.clientWidth ) / 2;
        const heightHalf = this.container.clientHeight / 2;

        vector.project( this.camera );

        vector.x = ( vector.x * widthHalf ) + widthHalf;
        vector.y = - ( vector.y * heightHalf ) + heightHalf;
        vector.z = 0;

        return vector;

    },

    /**
     * Calculate the camera rotation around the y axis, relative to to facing directly down +z axis (in radians)
     * @memberOf Viewer
     * @instance
     * @returns {number} Current angle of rotation of the camera (radians)
     */
    getCameraHeading: function () {

        const cameraForward = new Vector3();
        this.camera.getWorldDirection(cameraForward);
        var rotation = Math.atan2(cameraForward.z, cameraForward.x);
        return rotation + Math$1.degToRad(180);

    },

    /**
     * Check Sprite in Viewport
     * @memberOf Viewer
     * @instance
     */
    checkSpriteInViewport: function ( sprite ) {

        this.camera.matrixWorldInverse.getInverse( this.camera.matrixWorld );
        this.cameraViewProjectionMatrix.multiplyMatrices( this.camera.projectionMatrix, this.camera.matrixWorldInverse );
        this.cameraFrustum.setFromMatrix( this.cameraViewProjectionMatrix );

        return sprite.visible && this.cameraFrustum.intersectsSprite( sprite );

    },

    /**
     * Reverse dragging direction
     * @memberOf Viewer
     * @instance
     */
    reverseDraggingDirection: function () {

        this.OrbitControls.rotateSpeed *= -1;
        this.OrbitControls.momentumScalingFactor *= -1;

    },

    /**
     * Add reticle 
     * @memberOf Viewer
     * @instance
     */
    addReticle: function () {

        this.reticle = new Reticle( 0xffffff, true, this.options.dwellTime );
        this.reticle.hide();
        this.camera.add( this.reticle );
        this.sceneReticle.add( this.camera );

    },

    /**
     * Rotate the active panorama to align to the current forward heading of the camera 
     * @memberOf Viewer
     * @instance
     */
    centreActivePanorama() {

        var currentHeading = this.getCameraHeading();
        // Rotate against the current heading
        this.panorama.rotation.y = currentHeading * -1;

    },

    /**
     * Tween control looking center
     * @param {THREE.Vector3} vector - Vector to be looked at the center
     * @param {number} [duration=1000] - Duration to tween
     * @param {function} [easing=TWEEN.Easing.Exponential.Out] - Easing function
     * @memberOf Viewer
     * @instance
     */
    tweenControlCenter: function ( vector, duration, easing ) {

        if ( this.control !== this.OrbitControls ) {

            return;

        }

        // Pass in arguments as array
        if ( vector instanceof Array ) {

            duration = vector[ 1 ];
            easing = vector[ 2 ];
            vector = vector[ 0 ];

        }

        duration = duration !== undefined ? duration : 1000;
        easing = easing || Tween.Easing.Exponential.Out;

        let scope, ha, va, chv, cvv, hv, vv, vptc, ov, nv;

        scope = this;

        chv = this.camera.getWorldDirection( new Vector3() );
        cvv = chv.clone();

        vptc = this.panorama.getWorldPosition( new Vector3() ).sub( this.camera.getWorldPosition( new Vector3() ) );

        hv = vector.clone();
        // Scale effect
        hv.x *= -1;
        hv.add( vptc ).normalize();
        vv = hv.clone();

        chv.y = 0;
        hv.y = 0;

        ha = Math.atan2( hv.z, hv.x ) - Math.atan2( chv.z, chv.x );
        ha = ha > Math.PI ? ha - 2 * Math.PI : ha;
        ha = ha < -Math.PI ? ha + 2 * Math.PI : ha;
        va = Math.abs( cvv.angleTo( chv ) + ( cvv.y * vv.y <= 0 ? vv.angleTo( hv ) : -vv.angleTo( hv ) ) );
        va *= vv.y < cvv.y ? 1 : -1;

        ov = { left: 0, up: 0 };
        nv = { left: 0, up: 0 };

        this.tweenLeftAnimation.stop();
        this.tweenUpAnimation.stop();

        this.tweenLeftAnimation = new Tween.Tween( ov )
            .to( { left: ha }, duration )
            .easing( easing )
            .onUpdate(function(ov){
                scope.control.rotateLeft( ov.left - nv.left );
                nv.left = ov.left;
            })
            .start();

        this.tweenUpAnimation = new Tween.Tween( ov )
            .to( { up: va }, duration )
            .easing( easing )
            .onUpdate(function(ov){
                scope.control.rotateUp( ov.up - nv.up );
                nv.up = ov.up;
            })
            .start();

    },

    /**
     * Tween control looking center by object
     * @param {THREE.Object3D} object - Object to be looked at the center
     * @param {number} [duration=1000] - Duration to tween
     * @param {function} [easing=TWEEN.Easing.Exponential.Out] - Easing function
     * @memberOf Viewer
     * @instance
     */
    tweenControlCenterByObject: function ( object, duration, easing ) {

        let isUnderScalePlaceHolder = false;

        object.traverseAncestors( function ( ancestor ) {

            if ( ancestor.scalePlaceHolder ) {

                isUnderScalePlaceHolder = true;

            }
        } );

        if ( isUnderScalePlaceHolder ) {

            const invertXVector = new Vector3( -1, 1, 1 );

            this.tweenControlCenter( object.getWorldPosition( new Vector3() ).multiply( invertXVector ), duration, easing );

        } else {

            this.tweenControlCenter( object.getWorldPosition( new Vector3() ), duration, easing );

        }

    },

    /**
     * This is called when window size is changed
     * @fires Viewer#window-resize
     * @param {number} [windowWidth] - Specify if custom element has changed width
     * @param {number} [windowHeight] - Specify if custom element has changed height
     * @memberOf Viewer
     * @instance
     */
    onWindowResize: function ( windowWidth, windowHeight ) {

        let width, height;

        const expand = this.container.classList.contains( 'panolens-container' ) || this.container.isFullscreen;

        if ( windowWidth !== undefined && windowHeight !== undefined ) {

            width = windowWidth;
            height = windowHeight;
            this.container._width = windowWidth;
            this.container._height = windowHeight;

        } else {

            const isAndroid = /(android)/i.test(window.navigator.userAgent);

            const adjustWidth = isAndroid 
                ? Math.min(document.documentElement.clientWidth, window.innerWidth || 0) 
                : Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

            const adjustHeight = isAndroid 
                ? Math.min(document.documentElement.clientHeight, window.innerHeight || 0) 
                : Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

            width = expand ? adjustWidth : this.container.clientWidth;
            height = expand ? adjustHeight : this.container.clientHeight;

            this.container._width = width;
            this.container._height = height;

        }

        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();

        this.renderer.setSize( width, height );

        // Update reticle
        if ( this.options.enableReticle || this.tempEnableReticle ) {

            this.updateReticleEvent();

        }

        /**
         * Window resizing event
         * @type {object}
         * @event Viewer#window-resize
         * @property {number} width  - Width of the window
         * @property {number} height - Height of the window
         */
        this.dispatchEvent( { type: 'window-resize', width: width, height: height });
        this.scene.traverse( function ( object ) {

            if ( object.dispatchEvent ) {

                object.dispatchEvent( { type: 'window-resize', width: width, height: height });

            }

        } );

    },

    /**
     * Add output element
     * @memberOf Viewer
     * @instance
     */
    addOutputElement: function () {

        const element = document.createElement( 'div' );
        element.style.position = 'absolute';
        element.style.right = '10px';
        element.style.top = '10px';
        element.style.color = '#fff';
        this.container.appendChild( element );
        this.outputDivElement = element;

    },

    /**
     * Output position in developer console by holding down Ctrl button
     * @memberOf Viewer
     * @instance
     */
    outputPosition: function () {

        const intersects = this.raycaster.intersectObject( this.panorama, true );

        if ( intersects.length > 0 ) {

            const point = intersects[ 0 ].point.clone();
            const converter = new Vector3( -1, 1, 1 );
            const world = this.panorama.getWorldPosition( new Vector3() );
            point.sub( world ).multiply( converter );

            const message = `${point.x.toFixed(2)}, ${point.y.toFixed(2)}, ${point.z.toFixed(2)}`;

            if ( point.length() === 0 ) { return; }

            switch ( this.options.output ) {

            case 'console':
                console.info( message );
                break;

            case 'overlay':
                this.outputDivElement.textContent = message;
                break;

            default:
                break;

            }

        }

    },

    /**
     * On mouse down
     * @param {MouseEvent} event 
     * @memberOf Viewer
     * @instance
     */
    onMouseDown: function ( event ) {

        event.preventDefault();

        this.userMouse.x = ( event.clientX >= 0 ) ? event.clientX : event.touches[0].clientX;
        this.userMouse.y = ( event.clientY >= 0 ) ? event.clientY : event.touches[0].clientY;
        this.userMouse.type = 'mousedown';
        this.onTap( event );

    },

    /**
     * On mouse move
     * @param {MouseEvent} event 
     * @memberOf Viewer
     * @instance
     */
    onMouseMove: function ( event ) {

        event.preventDefault();
        this.userMouse.type = 'mousemove';
        this.onTap( event );

    },

    /**
     * On mouse up
     * @param {MouseEvent} event 
     * @memberOf Viewer
     * @instance
     */
    onMouseUp: function ( event ) {

        let onTarget = false;

        this.userMouse.type = 'mouseup';

        const type = ( this.userMouse.x >= event.clientX - this.options.clickTolerance 
				&& this.userMouse.x <= event.clientX + this.options.clickTolerance
				&& this.userMouse.y >= event.clientY - this.options.clickTolerance
				&& this.userMouse.y <= event.clientY + this.options.clickTolerance ) 
				||  ( event.changedTouches 
				&& this.userMouse.x >= event.changedTouches[0].clientX - this.options.clickTolerance
				&& this.userMouse.x <= event.changedTouches[0].clientX + this.options.clickTolerance 
				&& this.userMouse.y >= event.changedTouches[0].clientY - this.options.clickTolerance
				&& this.userMouse.y <= event.changedTouches[0].clientY + this.options.clickTolerance ) 
            ? 'click' : undefined;

        // Event should happen on canvas
        if ( event && event.target && !event.target.classList.contains( 'panolens-canvas' ) ) { return; }

        event.preventDefault();

        if ( event.changedTouches && event.changedTouches.length === 1 ) {

            onTarget = this.onTap( { clientX: event.changedTouches[0].clientX, clientY: event.changedTouches[0].clientY }, type );
		
        } else {

            onTarget = this.onTap( event, type );

        }

        this.userMouse.type = 'none';

        if ( onTarget ) { 

            return; 

        }

        if ( type === 'click' ) {

            const { options: { autoHideInfospot, autoHideControlBar }, panorama, toggleControlBar } = this;

            if ( autoHideInfospot && panorama ) {

                panorama.toggleInfospotVisibility();

            }

            if ( autoHideControlBar ) {

                toggleControlBar();

            }

        }

    },

    /**
     * On tap eveny frame
     * @param {MouseEvent} event 
     * @param {string} type 
     * @memberOf Viewer
     * @instance
     */
    onTap: function ( event, type ) {

        const { left, top } = this.container.getBoundingClientRect();
        const { clientWidth, clientHeight } = this.container;

        this.raycasterPoint.x = ( ( event.clientX - left ) / clientWidth ) * 2 - 1;
        this.raycasterPoint.y = - ( ( event.clientY - top ) / clientHeight ) * 2 + 1;

        this.raycaster.setFromCamera( this.raycasterPoint, this.camera );

        // Return if no panorama 
        if ( !this.panorama ) { 

            return; 

        }

        // output infospot information
        if ( event.type !== 'mousedown' && this.touchSupported || this.OUTPUT_INFOSPOT ) { 

            this.outputPosition(); 

        }

        const intersects = this.raycaster.intersectObjects( this.panorama.children, true );
        const intersect_entity = this.getConvertedIntersect( intersects );
        const intersect = ( intersects.length > 0 ) ? intersects[0].object : undefined;

        if ( this.userMouse.type === 'mouseup'  ) {

            if ( intersect_entity && this.pressEntityObject === intersect_entity && this.pressEntityObject.dispatchEvent ) {

                this.pressEntityObject.dispatchEvent( { type: 'pressstop-entity', mouseEvent: event } );

            }

            this.pressEntityObject = undefined;

        }

        if ( this.userMouse.type === 'mouseup'  ) {

            if ( intersect && this.pressObject === intersect && this.pressObject.dispatchEvent ) {

                this.pressObject.dispatchEvent( { type: 'pressstop', mouseEvent: event } );

            }

            this.pressObject = undefined;

        }

        if ( type === 'click' ) {

            this.panorama.dispatchEvent( { type: 'click', intersects: intersects, mouseEvent: event } );

            if ( intersect_entity && intersect_entity.dispatchEvent ) {

                intersect_entity.dispatchEvent( { type: 'click-entity', mouseEvent: event } );

            }

            if ( intersect && intersect.dispatchEvent ) {

                intersect.dispatchEvent( { type: 'click', mouseEvent: event } );

            }

        } else {

            this.panorama.dispatchEvent( { type: 'hover', intersects: intersects, mouseEvent: event } );

            if ( ( this.hoverObject && intersects.length > 0 && this.hoverObject !== intersect_entity )
				|| ( this.hoverObject && intersects.length === 0 ) ){

                if ( this.hoverObject.dispatchEvent ) {

                    this.hoverObject.dispatchEvent( { type: 'hoverleave', mouseEvent: event } );

                    this.reticle.end();

                }

                this.hoverObject = undefined;

            }

            if ( intersect_entity && intersects.length > 0 ) {

                if ( this.hoverObject !== intersect_entity ) {

                    this.hoverObject = intersect_entity;

                    if ( this.hoverObject.dispatchEvent ) {

                        this.hoverObject.dispatchEvent( { type: 'hoverenter', mouseEvent: event } );

                        // Start reticle timer
                        if ( this.options.autoReticleSelect && this.options.enableReticle || this.tempEnableReticle ) {
                            this.reticle.start( this.onTap.bind( this, event, 'click' ) );
                        }

                    }

                }

                if ( this.userMouse.type === 'mousedown' && this.pressEntityObject != intersect_entity ) {

                    this.pressEntityObject = intersect_entity;

                    if ( this.pressEntityObject.dispatchEvent ) {

                        this.pressEntityObject.dispatchEvent( { type: 'pressstart-entity', mouseEvent: event } );

                    }

                }

                if ( this.userMouse.type === 'mousedown' && this.pressObject != intersect ) {

                    this.pressObject = intersect;

                    if ( this.pressObject.dispatchEvent ) {

                        this.pressObject.dispatchEvent( { type: 'pressstart', mouseEvent: event } );

                    }

                }

                if ( this.userMouse.type === 'mousemove' || this.options.enableReticle ) {

                    if ( intersect && intersect.dispatchEvent ) {

                        intersect.dispatchEvent( { type: 'hover', mouseEvent: event } );

                    }

                    if ( this.pressEntityObject && this.pressEntityObject.dispatchEvent ) {

                        this.pressEntityObject.dispatchEvent( { type: 'pressmove-entity', mouseEvent: event } );

                    }

                    if ( this.pressObject && this.pressObject.dispatchEvent ) {

                        this.pressObject.dispatchEvent( { type: 'pressmove', mouseEvent: event } );

                    }

                }

            }

            if ( !intersect_entity && this.pressEntityObject && this.pressEntityObject.dispatchEvent ) {

                this.pressEntityObject.dispatchEvent( { type: 'pressstop-entity', mouseEvent: event } );

                this.pressEntityObject = undefined;

            }

            if ( !intersect && this.pressObject && this.pressObject.dispatchEvent ) {

                this.pressObject.dispatchEvent( { type: 'pressstop', mouseEvent: event } );

                this.pressObject = undefined;

            }

        }

        // Infospot handler
        if ( intersect && intersect instanceof Infospot ) {

            this.infospot = intersect;
			
            if ( type === 'click' ) {

                return true;

            }
			

        } else if ( this.infospot ) {

            this.hideInfospot();

        }

        // Auto rotate
        if ( this.options.autoRotate && this.userMouse.type !== 'mousemove' ) {

            // Auto-rotate idle timer
            clearTimeout( this.autoRotateRequestId );

            if ( this.control === this.OrbitControls ) {

                this.OrbitControls.autoRotate = false;
                this.autoRotateRequestId = window.setTimeout( this.enableAutoRate.bind( this ), this.options.autoRotateActivationDuration );

            }

        }		

    },

    /**
     * Get converted intersect
     * @param {array} intersects 
     * @memberOf Viewer
     * @instance
     */
    getConvertedIntersect: function ( intersects ) {

        let intersect;

        for ( let i = 0; i < intersects.length; i++ ) {

            if ( intersects[i].distance >= 0 && intersects[i].object && !intersects[i].object.passThrough ) {

                if ( intersects[i].object.entity && intersects[i].object.entity.passThrough ) {
                    continue;
                } else if ( intersects[i].object.entity && !intersects[i].object.entity.passThrough ) {
                    intersect = intersects[i].object.entity;
                    break;
                } else {
                    intersect = intersects[i].object;
                    break;
                }

            }

        }

        return intersect;

    },

    /**
     * Hide infospot
     * @memberOf Viewer
     * @instance
     */
    hideInfospot: function () {

        if ( this.infospot ) {

            this.infospot.onHoverEnd();

            this.infospot = undefined;

        }

    },

    /**
     * Toggle control bar
     * @memberOf Viewer
     * @instance
     * @fires Viewer#control-bar-toggle
     */
    toggleControlBar: function () {

        const { widget } = this;

        /**
         * Toggle control bar event
         * @type {object}
         * @event Viewer#control-bar-toggle
         */
        if ( widget ) {

            widget.dispatchEvent( { type: 'control-bar-toggle' } );

        }

    },

    /**
     * On key down
     * @param {KeyboardEvent} event 
     * @memberOf Viewer
     * @instance
     */
    onKeyDown: function ( event ) {

        if ( this.options.output && this.options.output !== 'none' && event.key === 'Control' ) {

            this.OUTPUT_INFOSPOT = true;

        }

    },

    /**
     * On key up
     * @param {KeyboardEvent} event 
     * @memberOf Viewer
     * @instance
     */
    onKeyUp: function () {

        this.OUTPUT_INFOSPOT = false;

    },

    /**
     * Update control and callbacks
     * @memberOf Viewer
     * @instance
     */
    update: function () {

        Tween.update();

        this.updateCallbacks.forEach( function( callback ){ callback(); } );

        this.control.update();

        this.scene.traverse( function( child ){
            if ( child instanceof Infospot 
				&& child.element 
				&& ( this.hoverObject === child 
					|| child.element.style.display !== 'none' 
					|| (child.element.left && child.element.left.style.display !== 'none')
					|| (child.element.right && child.element.right.style.display !== 'none') ) ) {
                if ( this.checkSpriteInViewport( child ) ) {
                    const { x, y } = this.getScreenVector( child.getWorldPosition( new Vector3() ) );
                    child.translateElement( x, y );
                } else {
                    child.onDismiss();
                }
				
            }
        }.bind( this ) );

    },

    /**
     * Rendering function to be called on every animation frame
     * Render reticle last
     * @memberOf Viewer
     * @instance
     */
    render: function () {

        if ( this.mode === MODES.CARDBOARD || this.mode === MODES.STEREO ) {

            this.renderer.clear();
            this.effect.render( this.scene, this.camera );
            this.effect.render( this.sceneReticle, this.camera );
			

        } else {

            this.renderer.clear();
            this.renderer.render( this.scene, this.camera );
            this.renderer.clearDepth();
            this.renderer.render( this.sceneReticle, this.camera );

        }

    },

    /**
     * Animate
     * @memberOf Viewer
     * @instance
     */
    animate: function () {

        this.requestAnimationId = window.requestAnimationFrame( this.animate.bind( this ) );

        this.onChange();

    },

    /**
     * On change
     * @memberOf Viewer
     * @instance
     */
    onChange: function () {

        this.update();
        this.render();

    },

    /**
     * Register mouse and touch event on container
     * @memberOf Viewer
     * @instance
     */
    registerMouseAndTouchEvents: function () {

        const options = { passive: false };

        this.container.addEventListener( 'mousedown' , 	this.HANDLER_MOUSE_DOWN, options );
        this.container.addEventListener( 'mousemove' , 	this.HANDLER_MOUSE_MOVE, options );
        this.container.addEventListener( 'mouseup'	 , 	this.HANDLER_MOUSE_UP  , options );
        this.container.addEventListener( 'touchstart', 	this.HANDLER_MOUSE_DOWN, options );
        this.container.addEventListener( 'touchend'  , 	this.HANDLER_MOUSE_UP  , options );

    },

    /**
     * Unregister mouse and touch event on container
     * @memberOf Viewer
     * @instance
     */
    unregisterMouseAndTouchEvents: function () {

        this.container.removeEventListener( 'mousedown' ,  this.HANDLER_MOUSE_DOWN, false );
        this.container.removeEventListener( 'mousemove' ,  this.HANDLER_MOUSE_MOVE, false );
        this.container.removeEventListener( 'mouseup'	,  this.HANDLER_MOUSE_UP  , false );
        this.container.removeEventListener( 'touchstart',  this.HANDLER_MOUSE_DOWN, false );
        this.container.removeEventListener( 'touchend'  ,  this.HANDLER_MOUSE_UP  , false );

    },

    /**
     * Register reticle event
     * @memberOf Viewer
     * @instance
     */
    registerReticleEvent: function () {

        this.addUpdateCallback( this.HANDLER_TAP );

    },

    /**
     * Unregister reticle event
     * @memberOf Viewer
     * @instance
     */
    unregisterReticleEvent: function () {

        this.removeUpdateCallback( this.HANDLER_TAP );

    },

    /**
     * Update reticle event
     * @memberOf Viewer
     * @instance
     */
    updateReticleEvent: function () {

        const clientX = this.container.clientWidth / 2 + this.container.offsetLeft;
        const clientY = this.container.clientHeight / 2;

        this.removeUpdateCallback( this.HANDLER_TAP );
        this.HANDLER_TAP = this.onTap.bind( this, { clientX, clientY } );
        this.addUpdateCallback( this.HANDLER_TAP );

    },

    /**
     * Register container and window listeners
     * @memberOf Viewer
     * @instance
     */
    registerEventListeners: function () {

        // Resize Event
        window.addEventListener( 'resize' , this.HANDLER_WINDOW_RESIZE, true );

        // Keyboard Event
        window.addEventListener( 'keydown', this.HANDLER_KEY_DOWN, true );
        window.addEventListener( 'keyup'  , this.HANDLER_KEY_UP	 , true );

    },

    /**
     * Unregister container and window listeners
     * @memberOf Viewer
     * @instance
     */
    unregisterEventListeners: function () {

        // Resize Event
        window.removeEventListener( 'resize' , this.HANDLER_WINDOW_RESIZE, true );

        // Keyboard Event
        window.removeEventListener( 'keydown', this.HANDLER_KEY_DOWN, true );
        window.removeEventListener( 'keyup'  , this.HANDLER_KEY_UP  , true );

    },

    /**
     * Dispose all scene objects and clear cache
     * @memberOf Viewer
     * @instance
     */
    dispose: function () {

        this.tweenLeftAnimation.stop();
        this.tweenUpAnimation.stop();

        // Unregister dom event listeners
        this.unregisterEventListeners();

        // recursive disposal on 3d objects
        function recursiveDispose ( object ) {

            for ( let i = object.children.length - 1; i >= 0; i-- ) {

                recursiveDispose( object.children[i] );
                object.remove( object.children[i] );

            }

            if ( object instanceof Panorama || object instanceof Infospot ) {

                object.dispose();
                object = null;

            } else if ( object.dispatchEvent ){

                object.dispatchEvent( 'dispose' );

            }

        }

        recursiveDispose( this.scene );

        // dispose widget
        if ( this.widget ) {

            this.widget.dispose();
            this.widget = null;

        }

        // clear cache
        if ( Cache && Cache.enabled ) {

            Cache.clear();

        }

    },

    /**
     * Destroy viewer by disposing and stopping requestAnimationFrame
     * @memberOf Viewer
     * @instance
     */
    destroy: function () {

        this.dispose();
        this.render();
        window.cancelAnimationFrame( this.requestAnimationId );		

    },

    /**
     * On panorama dispose
     * @memberOf Viewer
     * @instance
     */
    onPanoramaDispose: function ( panorama ) {

        if ( panorama instanceof VideoPanorama ) {

            this.hideVideoWidget();

        }

        if ( panorama === this.panorama ) {

            this.panorama = null;

        }

    },

    /**
     * Load ajax call
     * @param {string} url - URL to be requested
     * @param {function} [callback] - Callback after request completes
     * @memberOf Viewer
     * @instance
     */
    loadAsyncRequest: function ( url, callback = () => {} ) {

        const request = new window.XMLHttpRequest();
        request.onloadend = function ( event ) {
            callback( event );
        };
        request.open( 'GET', url, true );
        request.send( null );

    },

    /**
     * View indicator in upper left
     * @memberOf Viewer
     * @instance
     */
    addViewIndicator: function () {

        const scope = this;

        function loadViewIndicator ( asyncEvent ) {

            if ( asyncEvent.loaded === 0 ) return;

            const viewIndicatorDiv = asyncEvent.target.responseXML.documentElement;
            viewIndicatorDiv.style.width = scope.viewIndicatorSize + 'px';
            viewIndicatorDiv.style.height = scope.viewIndicatorSize + 'px';
            viewIndicatorDiv.style.position = 'absolute';
            viewIndicatorDiv.style.top = '10px';
            viewIndicatorDiv.style.left = '10px';
            viewIndicatorDiv.style.opacity = '0.5';
            viewIndicatorDiv.style.cursor = 'pointer';
            viewIndicatorDiv.id = 'panolens-view-indicator-container';

            scope.container.appendChild( viewIndicatorDiv );

            const indicator = viewIndicatorDiv.querySelector( '#indicator' );
            const setIndicatorD = function () {

                scope.radius = scope.viewIndicatorSize * 0.225;
                scope.currentPanoAngle = scope.camera.rotation.y - Math$1.degToRad( 90 );
                scope.fovAngle = Math$1.degToRad( scope.camera.fov ) ;
                scope.leftAngle = -scope.currentPanoAngle - scope.fovAngle / 2;
                scope.rightAngle = -scope.currentPanoAngle + scope.fovAngle / 2;
                scope.leftX = scope.radius * Math.cos( scope.leftAngle );
                scope.leftY = scope.radius * Math.sin( scope.leftAngle );
                scope.rightX = scope.radius * Math.cos( scope.rightAngle );
                scope.rightY = scope.radius * Math.sin( scope.rightAngle );
                scope.indicatorD = 'M ' + scope.leftX + ' ' + scope.leftY + ' A ' + scope.radius + ' ' + scope.radius + ' 0 0 1 ' + scope.rightX + ' ' + scope.rightY;

                if ( scope.leftX && scope.leftY && scope.rightX && scope.rightY && scope.radius ) {

                    indicator.setAttribute( 'd', scope.indicatorD );

                }

            };

            scope.addUpdateCallback( setIndicatorD );

            const indicatorOnMouseEnter = function () {

                this.style.opacity = '1';

            };

            const indicatorOnMouseLeave = function () {

                this.style.opacity = '0.5';

            };

            viewIndicatorDiv.addEventListener( 'mouseenter', indicatorOnMouseEnter );
            viewIndicatorDiv.addEventListener( 'mouseleave', indicatorOnMouseLeave );
        }

        this.loadAsyncRequest( DataImage.ViewIndicator, loadViewIndicator );

    },

    /**
     * Append custom control item to existing control bar
     * @param {object} [option={}] - Style object to overwirte default element style. It takes 'style', 'onTap' and 'group' properties.
     * @memberOf Viewer
     * @instance
     */
    appendControlItem: function ( option ) {

        const item = this.widget.createCustomItem( option );		

        if ( option.group === 'video' ) {

            this.widget.videoElement.appendChild( item );

        } else {

            this.widget.barElement.appendChild( item );

        }

        return item;

    },

    /**
     * Clear all cached files
     * @memberOf Viewer
     * @instance
     */
    clearAllCache: function () {

        Cache.clear();

    }

} );

if ( REVISION$1 != THREE_REVISION ) {

    console.warn( `three.js version is not matched. Please consider use the target revision ${THREE_REVISION}` );

}

/**
 * Panolens.js
 * @author pchen66
 * @namespace PANOLENS
 */
window.TWEEN = Tween;

export { BasicPanorama, CONTROLS, CameraPanorama, CubePanorama, CubeTextureLoader, DataImage, EmptyPanorama, GoogleStreetviewPanorama, ImageLittlePlanet, ImageLoader, ImagePanorama, Infospot, LittlePlanet, MODES, Media, Panorama, REVISION, Reticle, THREE_REVISION, THREE_VERSION, TextureLoader, VERSION, VideoPanorama, Viewer, Widget };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFub2xlbnMubW9kdWxlLmpzIiwic291cmNlcyI6WyIuLi9zcmMvQ29uc3RhbnRzLmpzIiwiLi4vc3JjL0RhdGFJbWFnZS5qcyIsIi4uL3NyYy9sb2FkZXJzL0ltYWdlTG9hZGVyLmpzIiwiLi4vc3JjL2xvYWRlcnMvVGV4dHVyZUxvYWRlci5qcyIsIi4uL3NyYy9sb2FkZXJzL0N1YmVUZXh0dXJlTG9hZGVyLmpzIiwiLi4vc3JjL21lZGlhL01lZGlhLmpzIiwiLi4vc3JjL2ludGVyZmFjZS9SZXRpY2xlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0B0d2VlbmpzL3R3ZWVuLmpzL3NyYy9Ud2Vlbi5qcyIsIi4uL3NyYy9pbmZvc3BvdC9JbmZvc3BvdC5qcyIsIi4uL3NyYy93aWRnZXQvV2lkZ2V0LmpzIiwiLi4vc3JjL3Bhbm9yYW1hL1Bhbm9yYW1hLmpzIiwiLi4vc3JjL3Bhbm9yYW1hL0ltYWdlUGFub3JhbWEuanMiLCIuLi9zcmMvcGFub3JhbWEvRW1wdHlQYW5vcmFtYS5qcyIsIi4uL3NyYy9wYW5vcmFtYS9DdWJlUGFub3JhbWEuanMiLCIuLi9zcmMvcGFub3JhbWEvQmFzaWNQYW5vcmFtYS5qcyIsIi4uL3NyYy9wYW5vcmFtYS9WaWRlb1Bhbm9yYW1hLmpzIiwiLi4vc3JjL2xvYWRlcnMvR29vZ2xlU3RyZWV0dmlld0xvYWRlci5qcyIsIi4uL3NyYy9wYW5vcmFtYS9Hb29nbGVTdHJlZXR2aWV3UGFub3JhbWEuanMiLCIuLi9zcmMvc2hhZGVycy9TdGVyZW9ncmFwaGljU2hhZGVyLmpzIiwiLi4vc3JjL3Bhbm9yYW1hL0xpdHRsZVBsYW5ldC5qcyIsIi4uL3NyYy9wYW5vcmFtYS9JbWFnZUxpdHRsZVBsYW5ldC5qcyIsIi4uL3NyYy9wYW5vcmFtYS9DYW1lcmFQYW5vcmFtYS5qcyIsIi4uL3NyYy9saWIvY29udHJvbHMvT3JiaXRDb250cm9scy5qcyIsIi4uL3NyYy9saWIvY29udHJvbHMvRGV2aWNlT3JpZW50YXRpb25Db250cm9scy5qcyIsIi4uL3NyYy9saWIvZWZmZWN0cy9DYXJkYm9hcmRFZmZlY3QuanMiLCIuLi9zcmMvbGliL2VmZmVjdHMvU3RlcmVvRWZmZWN0LmpzIiwiLi4vc3JjL3ZpZXdlci9WaWV3ZXIuanMiLCIuLi9zcmMvQ2hlY2suanMiLCIuLi9zcmMvUGFub2xlbnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdmVyc2lvbiwgcGVlckRlcGVuZGVuY2llcyB9IGZyb20gJy4uL3BhY2thZ2UuanNvbic7XG5cbi8qKlxuICogUkVWSVNJT05cbiAqIEBtb2R1bGUgUkVWSVNJT05cbiAqIEBleGFtcGxlIFBBTk9MRU5TLlJFVklTSU9OXG4gKiBAdHlwZSB7c3RyaW5nfSByZXZpc2lvblxuICovXG5leHBvcnQgY29uc3QgUkVWSVNJT04gPSB2ZXJzaW9uLnNwbGl0KCAnLicgKVsgMSBdO1xuXG4vKipcbiAqIFZFUlNJT05cbiAqIEBtb2R1bGUgVkVSU0lPTlxuICogQGV4YW1wbGUgUEFOT0xFTlMuVkVSU0lPTlxuICogQHR5cGUge3N0cmluZ30gdmVyc2lvblxuICovXG5leHBvcnQgY29uc3QgVkVSU0lPTiA9IHZlcnNpb247XG5cbi8qKlxuICogVEhSRUVKUyBSRVZJU0lPTlxuICogQG1vZHVsZSBUSFJFRV9SRVZJU0lPTlxuICogQGV4YW1wbGUgUEFOT0xFTlMuVEhSRUVfUkVWSVNJT05cbiAqIEB0eXBlIHtzdHJpbmd9IHRocmVlanMgcmV2aXNpb25cbiAqL1xuZXhwb3J0IGNvbnN0IFRIUkVFX1JFVklTSU9OID0gcGVlckRlcGVuZGVuY2llcy50aHJlZS5zcGxpdCggJy4nIClbIDEgXTtcblxuLyoqXG4gKiBUSFJFRUpTIFZFUlNJT05cbiAqIEBtb2R1bGUgVEhSRUVfVkVSU0lPTlxuICogQGV4YW1wbGUgUEFOT0xFTlMuVEhSRUVfVkVSU0lPTlxuICogQHR5cGUge3N0cmluZ30gdGhyZWVqcyB2ZXJzaW9uXG4gKi9cbmV4cG9ydCBjb25zdCBUSFJFRV9WRVJTSU9OID0gcGVlckRlcGVuZGVuY2llcy50aHJlZS5yZXBsYWNlKCAvW14wLTkuXS9nLCAnJyApO1xuXG4vKipcbiAqIENPTlRST0xTXG4gKiBAbW9kdWxlIENPTlRST0xTXG4gKiBAZXhhbXBsZSBQQU5PTEVOUy5DT05UUk9MUy5PUkJJVFxuICogQHByb3BlcnR5IHtudW1iZXJ9IE9SQklUIDBcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBERVZJQ0VPUklFTlRBVElPTiAxXG4gKi9cbmV4cG9ydCBjb25zdCBDT05UUk9MUyA9IHsgT1JCSVQ6IDAsIERFVklDRU9SSUVOVEFUSU9OOiAxIH07XG5cbi8qKlxuICogTU9ERVNcbiAqIEBtb2R1bGUgTU9ERVNcbiAqIEBleGFtcGxlIFBBTk9MRU5TLk1PREVTLlVOS05PV05cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBVTktOT1dOIDBcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBOT1JNQUwgMVxuICogQHByb3BlcnR5IHtudW1iZXJ9IENBUkRCT0FSRCAyXG4gKiBAcHJvcGVydHkge251bWJlcn0gU1RFUkVPIDNcbiAqL1xuZXhwb3J0IGNvbnN0IE1PREVTID0geyBVTktOT1dOOiAwLCBOT1JNQUw6IDEsIENBUkRCT0FSRDogMiwgU1RFUkVPOiAzIH07IiwiLyoqXG4gKiBEYXRhIFVSSSBJbWFnZXNcbiAqIEBtb2R1bGUgRGF0YUltYWdlXG4gKiBAZXhhbXBsZSBQQU5PTEVOUy5EYXRhSW1hZ2UuSW5mb1xuICogQHByb3BlcnR5IHtzdHJpbmd9IEluZm8gSW5mb3JtYXRpb24gSWNvblxuICogQHByb3BlcnR5IHtzdHJpbmd9IEFycm93IEFycm93IEljb25cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBGdWxsc2NyZWVuRW50ZXIgRnVsbHNjcmVlbiBFbnRlciBJY29uXG4gKiBAcHJvcGVydHkge3N0cmluZ30gRnVsbHNjcmVlbkxlYXZlIEZ1bGxzY3JlZW4gTGVhdmUgSWNvblxuICogQHByb3BlcnR5IHtzdHJpbmd9IFZpZGVvUGxheSBWaWRlbyBQbGF5IEljb25cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBWaWRlb1BhdXNlIFZpZGVvIFBhdXNlIEljb25cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBXaGl0ZVRpbGUgV2hpdGUgVGlsZSBJY29uXG4gKiBAcHJvcGVydHkge3N0cmluZ30gU2V0dGluZyBTZXR0aW5ncyBJY29uXG4gKiBAcHJvcGVydHkge3N0cmluZ30gQ2hldnJvblJpZ2h0IENoZXZyb24gUmlnaHQgSWNvblxuICogQHByb3BlcnR5IHtzdHJpbmd9IENoZWNrIENoZWNrIEljb25cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBWaWV3SW5kaWNhdG9yIFZpZXcgSW5kaWNhdG9yIEljb25cbiAqL1xuY29uc3QgRGF0YUltYWdlID0ge1xuICAgIEluZm86ICdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUVBQUFBQkFDQVlBQUFDcWFYSGVBQUFBQm1KTFIwUUFBQUFBQUFENVE3dC9BQUFBQ1hCSVdYTUFBQUJJQUFBQVNBQkd5V3MrQUFBQUNYWndRV2NBQUFCQUFBQUFRQURxOC9oZ0FBQURCa2xFUVZSNDJ1MmJQMDhVUVJpSG56RmFTWUNJL3hva3NkQklxR3dJaVlXUlVCSVNFeHBDUTBlajM4RldPbWxJS0tob01QRWJhQ3hzcnJIaVlyUWdPU2xRRWFJQ3JUK0xIU1Baek56dDNzM2MzSG43bEh2THp2djgyTDJkbTMwWEtpb3FLZ1lZMDYyQkpGMEhwb0E3d0FSd0JiaHNQejREam9FRzhBbllOY1o4U3gxT3A4SVhKTTFLV3BkVVYzbnE5bTluSlYxSTdWTkdmRXpTTTBtTk5xUjlOT3d4eDFMN05STWZsYlFtNlNTZ2VKNFRPOFpvYXQrOC9MS2tnNGppZVE0a0xhZjJSdEt3cEowdWl1ZlprVFNjU241UzBsNUMrYi9zU1pyc3R2eU1wS1BVNXVjNGtqVFRqa3ZwZVlDa2FlQTEvKzdodmNJWk1HdU1xVVVMUU5JVThBYTRsdHJXd3lId3lCaXpHendBU1NQQWUrQjJhc3NXN0FIM2pURS9pK3hjWm9hMTJRZnkyQm8zaSs1Y0tBQmw5OXpGMUdZbFdGVEJlVUxMUzBEWnJPc0RjRE5nZ1RYZ2MyN2JMV0E2NEJoZmdIdkdtQjhkSFVYWjFETTBTNDV4bGlLTXM5YktyK2tsSU9rcXNCcnd2OUp0VnExRGV3RUFUNENoMUJZZE1HUWR5Z2VnN0RmNFNtcURBS3lveVhwQ3N6UGdJVENldXZvQWpGdVgwZ0U4amxqVWR2N2JDdGlPT0o3WHBkVVo4TC9nZFhIT0E1UXRZSDVOWFhWZ2JyZ1dXbjFud0ZUcWFpUGdkUElGY0RkMXRSRndPbDMwN0R3UnVaZ1h3THZjdGdmQTA0aGpPcDE4QWNSZVo2c1pZMTZlM3lEcFV1UXhuVTYrUzJBa2NqRXBjRHIxenhPWFNQZ0NLTFNhMG1jNG5Yd0IvRXBkYlFTY1RyNEFHcW1yallEVHlSZkF4OVRWUnNEcDVBdWc4TEp5SCtGMGNnWmc1OHoxMUJVSHBPNXJ1R2gyRzN5YnV1cUFlRjJhQmZBcWRkVUI4YnEwT2dQMlUxY2VnSDNhT1FPTU1iK0JyZFRWQjJETHVwUUx3TElPbktZMjZJQlQ2K0NsYVFER21PL0FSbXFMRHRpd0RuN0hWa2NZK0Vkak5vVGxDSSt0WWhPMmlVcHBtNkhLc2xQVXEycVFLSHBVZThBRnNqYVVYdVVRV0NncVh5b0FHOEl1TUUvV2tOUnJuQUh6WmZxRFNnZGdRNmdCYzJUZDNiM0NNVEJYdGtPc0l6VElqWkxuUWhqY1Z0bGNFSVBaTEowTG9WdnQ4cy9WYSszeXVTQUc4NFVKUnhCOThjcE05ZEpVUlVWRnhTRHpCeEtkZTRMazMvaDJBQUFBQUVsRlRrU3VRbUNDJywgXG4gICAgQXJyb3c6ICdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUVBQUFBQkFDQVlBQUFDcWFYSGVBQUFBQm1KTFIwUUFBQUFBQUFENVE3dC9BQUFBQ1hCSVdYTUFBQUJJQUFBQVNBQkd5V3MrQUFBQUNYWndRV2NBQUFCQUFBQUFRQURxOC9oZ0FBQURQa2xFUVZSNDJ1MmJNVXNjUVJpRzMwL1NSYUpFSTFaS1VpUkVyTklFTFJVYlFZU0FuWDhocFZVZ2tEWXAwd2dXVmpZVytRY0phUXpZcExvakpJWGh0RERFS0JwajY1dGk1OGl4bWRtYjJadlo3K1QyQVVIdWRtZm1lWGYyYm5iM082Q21wcVptZ0pHcU9pSTVBV0FXd0VNQTB3RHVBcmh0M3I0Q2NBYWdCZUFiZ0lhSS9OUU9wMWZoSVpLTEpOK1NiREtjcHRsM2tlU1F0aytJK0JqSlZ5UmJKYVJkdEV5Ylk5cCtSZUtqSk4rUXZJd29udWZTOURHcTdadVhYeWQ1bkZBOHp6SEpkVzF2a0x4RGNyZEM4VHk3Sk85b3ljK1FQRkNVYjNOQWNxWnErVG1TcDlybUhaeVNuQ3ZqRXJ3T0lQa1V3SHY4K3c3dkY2NEFMSXJJZnJJQVNNNEMrQURnbnJhdGd4TUFDeUxTaUI0QXlSRUFud0U4MExic3dnR0FKeUp5NGJOeHlBcHI2d2JJdzR4eHkzZGpyd0NZZmVldWFac0ZzRWJQZFVMWFU0RFpxdXNMZ01rRUEyMVAwNUVFYmY4QThGaEV6b3MyOHBrQkx4TEtMNXMvci9NMWtFa3o5dktRSEdlYXRmMDV5Zm1PZnViTmE3RzVKRGxlNU5odEJqd0hNQno1eUZ3QVdCYVJUKzBYelA4cFpzS3djUWlIMmZYOFljb2piK2t6eFV3NFpKbjdDU1FYcXBSUEhNS0NxNytpWko3MU12ZHkvRGZ0WFNRNkhjSmRTRGFxUFBLVy9tUE9CTytsY2J2ekNVMzVSQ0ZNMlBwd25RS3paUWZkZ2ZlMGR4SDVkTEE2dVFKNHBDMmZJQVNya3l1QTZYNlFqeHlDMWNrVlFObjdiTkhsSTRaZ2RYSUZVT2JpSkpsOHBCQ3NUakdmdUl3QTJDdjRGTjd4Yllqa2pxc1JBSHVJZVBYb0NpREYxWmsyVmlkWEFMKzFSNXNBcTVNcmdKYjJhQk5nZFhJRjhGVjd0QW13T3JrQ0NGczczd3lzVHRZQVRIRkNVM3ZFRVdtNkNpNkt2Z1kvYW84NklrNlhvZ0RlYVk4NklrNlhialBnU0h2a0VUaEN3UXk0NVhwRFJLNUpiZ040R1drZ1V5UjlINjVNUlF4Z1cwU3VuWjVGZXpLN3Bmd2Q4ZThNVjhVZkFQZEY1SmRyZzhKckFiUGpwclpGRDJ3V3lRUDZqOFpTRXVmUm1HbGdROXVtQkJ2ZDVJT2diakZVS0x1K1huV0JoRytycHNGVlpHVW8vY29KZ0ZWZithQUFUQWdOQUN2SUNwTDZqU3NBS3lIMVFjRUJtQkQyQVN3aHErN3VGODRBTElWV2lQVUVCN2xRc2lPRXdTMlZ6UVV4bU1YU3VSQ3FLcGQvelg0cmw4OEZNWmcvbUxBRWNTTitNbFAvYUtxbXBxWm1rUGtMMGhTandPcE5LeHdBQUFBQVNVVk9SSzVDWUlJPScsXG4gICAgRnVsbHNjcmVlbkVudGVyOiAnZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCbWFXeHNQU0lqUmtaR1JrWkdJaUJvWldsbmFIUTlJakkwSWlCMmFXVjNRbTk0UFNJd0lEQWdNalFnTWpRaUlIZHBaSFJvUFNJeU5DSWdlRzFzYm5NOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6SXdNREF2YzNabklqNEtJQ0FnSUR4d1lYUm9JR1E5SWswd0lEQm9NalIyTWpSSU1Ib2lJR1pwYkd3OUltNXZibVVpTHo0S0lDQWdJRHh3WVhSb0lHUTlJazAzSURFMFNEVjJOV2cxZGkweVNEZDJMVE42YlMweUxUUm9NbFkzYUROV05VZzFkalY2YlRFeUlEZG9MVE4yTW1nMWRpMDFhQzB5ZGpONlRURTBJRFYyTW1nemRqTm9NbFkxYUMwMWVpSXZQZ284TDNOMlp6ND0nLFxuICAgIEZ1bGxzY3JlZW5MZWF2ZTogJ2RhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEQ5NGJXd2dkbVZ5YzJsdmJqMGlNUzR3SWlCbGJtTnZaR2x1WnowaVZWUkdMVGdpUHo0OElVUlBRMVJaVUVVZ2MzWm5JRkJWUWt4SlF5QWlMUzh2VnpOREx5OUVWRVFnVTFaSElERXVNUzh2UlU0aUlDSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OUhjbUZ3YUdsamN5OVRWa2N2TVM0eEwwUlVSQzl6ZG1jeE1TNWtkR1FpUGp4emRtY2dlRzFzYm5NOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6SXdNREF2YzNabklpQjRiV3h1Y3pwNGJHbHVhejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TVRrNU9TOTRiR2x1YXlJZ2RtVnljMmx2YmowaU1TNHhJaUIzYVdSMGFEMGlNalFpSUdobGFXZG9kRDBpTWpRaUlIWnBaWGRDYjNnOUlqQWdNQ0F5TkNBeU5DSStQSEJoZEdnZ2MzUjViR1U5SW1acGJHdzZJMlptWmlJZ1pEMGlUVEUwTERFMFNERTVWakUyU0RFMlZqRTVTREUwVmpFMFRUVXNNVFJJTVRCV01UbElPRll4TmtnMVZqRTBUVGdzTlVneE1GWXhNRWcxVmpoSU9GWTFUVEU1TERoV01UQklNVFJXTlVneE5sWTRTREU1V2lJZ0x6NDhMM04yWno0PScsXG4gICAgVmlkZW9QbGF5OiAnZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQRDk0Yld3Z2RtVnljMmx2YmowaU1TNHdJaUJsYm1OdlpHbHVaejBpVlZSR0xUZ2lQejQ4SVVSUFExUlpVRVVnYzNabklGQlZRa3hKUXlBaUxTOHZWek5ETHk5RVZFUWdVMVpISURFdU1TOHZSVTRpSUNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk5SGNtRndhR2xqY3k5VFZrY3ZNUzR4TDBSVVJDOXpkbWN4TVM1a2RHUWlQanh6ZG1jZ2VHMXNibk05SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpJd01EQXZjM1puSWlCNGJXeHVjenA0YkdsdWF6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNVGs1T1M5NGJHbHVheUlnZG1WeWMybHZiajBpTVM0eElpQjNhV1IwYUQwaU1qUWlJR2hsYVdkb2REMGlNalFpSUhacFpYZENiM2c5SWpBZ01DQXlOQ0F5TkNJK1BIQmhkR2dnYzNSNWJHVTlJbVpwYkd3NkkyWm1aaUlnWkQwaVRUZ3NOUzR4TkZZeE9TNHhORXd4T1N3eE1pNHhORXc0TERVdU1UUmFJaUF2UGp3dmMzWm5QZz09JyxcbiAgICBWaWRlb1BhdXNlOiAnZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQRDk0Yld3Z2RtVnljMmx2YmowaU1TNHdJaUJsYm1OdlpHbHVaejBpVlZSR0xUZ2lQejQ4SVVSUFExUlpVRVVnYzNabklGQlZRa3hKUXlBaUxTOHZWek5ETHk5RVZFUWdVMVpISURFdU1TOHZSVTRpSUNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk5SGNtRndhR2xqY3k5VFZrY3ZNUzR4TDBSVVJDOXpkbWN4TVM1a2RHUWlQanh6ZG1jZ2VHMXNibk05SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpJd01EQXZjM1puSWlCNGJXeHVjenA0YkdsdWF6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNVGs1T1M5NGJHbHVheUlnZG1WeWMybHZiajBpTVM0eElpQjNhV1IwYUQwaU1qUWlJR2hsYVdkb2REMGlNalFpSUhacFpYZENiM2c5SWpBZ01DQXlOQ0F5TkNJK1BIQmhkR2dnYzNSNWJHVTlJbVpwYkd3NkkyWm1aaUlnWkQwaVRURTBMREU1TGpFMFNERTRWalV1TVRSSU1UUk5OaXd4T1M0eE5FZ3hNRlkxTGpFMFNEWldNVGt1TVRSYUlpQXZQand2YzNablBnPT0nLFxuICAgIFdoaXRlVGlsZTogJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBZ0FBQUFJQUJBTUFBQUFHVnNuSkFBQUFCR2RCVFVFQUFMR1BDL3hoQlFBQUFDQmpTRkpOQUFCNkpnQUFnSVFBQVBvQUFBQ0E2QUFBZFRBQUFPcGdBQUE2bUFBQUYzQ2N1bEU4QUFBQjFXbFVXSFJZVFV3NlkyOXRMbUZrYjJKbExuaHRjQUFBQUFBQVBIZzZlRzF3YldWMFlTQjRiV3h1Y3pwNFBTSmhaRzlpWlRwdWN6cHRaWFJoTHlJZ2VEcDRiWEIwYXowaVdFMVFJRU52Y21VZ05TNDBMakFpUGdvZ0lDQThjbVJtT2xKRVJpQjRiV3h1Y3pweVpHWTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5MekU1T1Rrdk1ESXZNakl0Y21SbUxYTjViblJoZUMxdWN5TWlQZ29nSUNBZ0lDQThjbVJtT2tSbGMyTnlhWEIwYVc5dUlISmtaanBoWW05MWREMGlJZ29nSUNBZ0lDQWdJQ0FnSUNCNGJXeHVjenAwYVdabVBTSm9kSFJ3T2k4dmJuTXVZV1J2WW1VdVkyOXRMM1JwWm1Zdk1TNHdMeUkrQ2lBZ0lDQWdJQ0FnSUR4MGFXWm1Pa052YlhCeVpYTnphVzl1UGpFOEwzUnBabVk2UTI5dGNISmxjM05wYjI0K0NpQWdJQ0FnSUNBZ0lEeDBhV1ptT2s5eWFXVnVkR0YwYVc5dVBqRThMM1JwWm1ZNlQzSnBaVzUwWVhScGIyNCtDaUFnSUNBZ0lDQWdJRHgwYVdabU9sQm9iM1J2YldWMGNtbGpTVzUwWlhKd2NtVjBZWFJwYjI0K01qd3ZkR2xtWmpwUWFHOTBiMjFsZEhKcFkwbHVkR1Z5Y0hKbGRHRjBhVzl1UGdvZ0lDQWdJQ0E4TDNKa1pqcEVaWE5qY21sd2RHbHZiajRLSUNBZ1BDOXlaR1k2VWtSR1BnbzhMM2c2ZUcxd2JXVjBZVDRLQXRpQUJRQUFBQ1JRVEZSRkFBQUFBQUFBQmdZR0J3Y0hIaDRlS3lzcng4Zkh5OHZMek16TTdPenNBQUFBQmdZRytxN1NaZ0FBQUFwMFVrNVRBUDcrL3Y3Ky92NysvaUp4L2E4QUFBT3dTVVJCVkhqYTdkMGhic05BRUFWUW82U0ZJNlhFY0FMRGNnTkx2VUJ2RUJRVmhwa1dWWVdsaFNzVkZTN3Q1UUlzaFJ0Njk1bEVBU1pQKzhjN2Exa3pETDFmeisvenl1dnpwNkZidm9kZHJMNnVEZDF5R1o1ZVhsZGViMThOM2ZJeDdBKzU4cHJtaG02NURmdkRjZDA5NTJsdTZKYWJGYkQvelZwclpqMWx6Y3lzK2ZqOXo4eFRadGJUOHJ2OHlXbHU2QllBSWdBQUFBQUFBQUFBQUFCQU02UVhFQUVBQUFBQUFBQUFnSjJnbmFBSWlJQTNRMnFBR2dBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQVFKc0FEa1ZGQUFBQUFBQThCajBHUlVBRVJFQUVSRUFFUkVBRVJFQUVBQUFBQUFBQUFBQjJnbmFDSWlBQ1BwbFJBOVFBTlVBRVJBQUFBRVZRRVJRQkVSQ0JWbGZBY1ozYWVab2J1c1VLTUdCaFY2S1VFbEhHS0JFUkpSNi9meEV4UmtRWmw5L2xUOFMxb1ZzdWhxeVlNbVBLakNrenZmY0Nwc3hvaHJ3WTBRMDZFQUVBQUFBQUFBQUFBQUNnR2RJTGlBQUFBQUFBQUFBQXdFN1FUbEFFUk1DYklUVkFEUUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBd0ttd1ExRVJBQUFBQUFDUFFZOUJFUkFCRVJBQkVSQUJFUkFCRVJBQkFBQUFBQUFBQUlDZG9KMmdDSWlBVDJiVUFEVkFEUkFCRVFBQVFCRlVCRVZBQkVSZ0V5dkFsSm0rVjRBcE02Yk1tREpqeW93cE02Yk1kTjBMbURLakdmSmlSRGZvUUFRQUFBQUFBQUFBQUFDQVprZ3ZJQUlBQUFBQUFBQUFBRHRCTzBFUkVBRnZodFFBTlFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFLZkNEa1ZGQUFBQUFBQThCajBHUlVBRVJFQUVSRUFFUkVBRVJFQUVBQUFBQUFBQUFBQjJnbmFDSWlBQ1BwbFJBOVFBTlVBRVJBQUFBRVZRRVJRQkVSQ0JUYXdBVTJiNlhnR216Smd5WThxTUtUT216Smd5MDNVdllNcU1ac2lMRWQyZ0F4RUFBQUFBQUFBQUFBQUFtaUc5Z0FnQUFBQUFBQUFBQU93RTdRUkZRQVM4R1ZJRDFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBSndLT3hRVkFRQUFBQUR3R1BRWUZBRVJFQUVSRUFFUkVBRVJFQUVSQUFBQUFBQUFBQURZQ2RvSmlvQUkrR1JHRFZBRDFBQVJFQUVBQUJSQlJWQUVSRUFFTnJFQ1RKbnBld1dZTW1QS2pDa3pwc3lZTW1QS1ROZTlnQ2t6bWlFdlJuU0REa1FBQUFBQUFBQUFBQUFBYUliMEFpSUFBQUFBQUFBQUFMQVR0Qk1VQVJId1prZ05VQU1BQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUhBcTdGQlVCQUFBQUFEQVk5QmpVQVJFUUFSRVFBUkVRQVJFUUFSRUFBQUFBQUFBQUFCZ0oyZ25LQUlpNEpNWk5VQU5VQU5FUUFRQUFGQUVGVUVSRUFFUjJNUUtNR1dtN3hWZ3lvd3BNNTBQV2VuOXVnTkdYejFYYW9jQUZnQUFBQUJKUlU1RXJrSmdnZz09JyxcbiAgICBTZXR0aW5nOiAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFFQUFBQUJBQ0FZQUFBQ3FhWEhlQUFBQUJtSkxSMFFBQUFBQUFBRDVRN3QvQUFBQUNYQklXWE1BQUFCSUFBQUFTQUJHeVdzK0FBQUFDWFp3UVdjQUFBQkFBQUFBUUFEcTgvaGdBQUFEbjBsRVFWUjQydTJielVzVlVSakdueU82Q1B6QU1uVGpwcEFvM0xUd0gxQ3FUZmF4YmVPaVJTMzdBMHdYdFJPRlZpMWFSQnMzTFdvaFNJR2JRQVFYVmlCR1JoRzBVSVJLVUNwSzdxL0ZuT0IydWM2Y09YTm1SbkdlM2VXK0g4Lzd6TGxuM3ZOeHBRb1ZLbFE0d2pCRkpBRk9TUnFYMU83b3NpdnB2akhtVTFuQ2hCWmdsdlNZTFlKYlMwRWFuQ3ZJSnpXSytnbnN5SDM0LzhPdU1hWWpiMjY1andDZ3o2TjRTV3Ezdm9kYkFFbW5TL0t0QkRnb0FneVU1QnRlQU9Ba01BUGNCcm9jN1Bza0RXZmdOK3d5RHdCZGx0TU1jREkzdFlCbmRlL3BIZUFSTU5URXJnZDRBUHp3ZVA4MzRvZU4xZE1rejVEbHNGTm4veXl2NGtkaVNLNEF0NEFPNENxd0dhRHdSbXphMkIwMjEwcU03WWhyWFU1OUFOQXE2Yldrd1FUVG41S081ZklFMHVWWWxYVGVHTE9YRk14MURyamxVTHdLS040MXg2RGxuSWpFRVFDY2tQUmUwb2tDaWd1SnI1TE9HR08reGhtNWpJQ0pRMWk4TE9lSkpLUFlFUUFNS3ZydHQ1WmRqU2YyRk0wRnEvc1pKSTJBNlVOY3ZDejM2VGlEZlVjQWNFMVNQdS9VNk1tOGsvVEZmdTZYZEZiNWlYM2RHUE04bFFmd05vZDMrVG93Qm5RM3lkZHR2MXZQSWUrYjFKSUJpd0VKMUlBSjIwOGs1VzIxdHJXQStWLzVDSEFjbUF0VS9BMlAvRGNDaVRBSEhFOHRnQ1ZoZ0x2QVhnWUNrMTdKby95VEdmTHVXZTdaZDcyQUM4Q1dCNG4zT0F6N21MeXROa1phYkFFWE1oZmVRS1lmV0VwSlpDeEEzckdVT1plQS9xREYxNUZwQXo0N0V2bE5rOW5lSTJlM2plV0N6MEJibXZpcE5rU01NWDhrdVNaWU04Wjh6eXFBamJIbWFONW1PZVlqZ0lYclU5M01XcnhIck5RanJxaURrUU1MSHdHK09kcUYzTk4zamVYS3pVOEFvRjFTemRIOFhLaEpVTzdIWkRYTE1id0F3SUNrSlVVTEZ4ZTBTYnFTVlFBYnczWGk3WmUwWkxtR0F6QUtiSHMwSkdVMVF0dkFhSWpDVzRCN1pPdkp5MnFGYTVhNzMwUlB0QmlhejBDZ25raVppNkY1ZkJaRFZNdmhvN0VoY3VTM3hKSjJoVjlJdXBnVHFhTHcwaGh6YWI4dnEyM3hPRy9yK0xEc0tqTGdZVnp4VW5VMGx0d0syd0RlelV5Sm1Fd3FYZ3AvUEw0cnZ4dGhhZUNTSSt6eHVBMTBKOFprV2RKTlNiMlNMa3ZheUtId0RSdTcxK1phanJHOTQxSjhhZ0FMRFEzR1UvYS9Jdk1rWUNQem1DYnRMTkVWbWFjTnRnczVpUDlmWVZORVYxUTZIZXo3eU5aU0wrSjJTYXJUY3BxaXlWMmlVa0cwSXZQRnZiejVGYkVuK0tFazN3TWp3TWVTZkNzQlhGQmRseTlDQVBrOXlkeWZmcEVDdUI1dFpmVkpqYUtXdWVPU2ZpbmxuNllLNGxhaFFvVUtSeGQvQWNSUEdUY1FDQVVRQUFBQUFFbEZUa1N1UW1DQycsXG4gICAgQ2hldnJvblJpZ2h0OiAnZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQRDk0Yld3Z2RtVnljMmx2YmowaU1TNHdJaUJsYm1OdlpHbHVaejBpVlZSR0xUZ2lQejQ4SVVSUFExUlpVRVVnYzNabklGQlZRa3hKUXlBaUxTOHZWek5ETHk5RVZFUWdVMVpISURFdU1TOHZSVTRpSUNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk5SGNtRndhR2xqY3k5VFZrY3ZNUzR4TDBSVVJDOXpkbWN4TVM1a2RHUWlQanh6ZG1jZ2VHMXNibk05SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpJd01EQXZjM1puSWlCNGJXeHVjenA0YkdsdWF6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNVGs1T1M5NGJHbHVheUlnZG1WeWMybHZiajBpTVM0eElpQjNhV1IwYUQwaU1qUWlJR2hsYVdkb2REMGlNalFpSUhacFpYZENiM2c5SWpBZ01DQXlOQ0F5TkNJK1BIQmhkR2dnWkQwaVRUZ3VOVGtzTVRZdU5UaE1NVE11TVRjc01USk1PQzQxT1N3M0xqUXhUREV3TERaTU1UWXNNVEpNTVRBc01UaE1PQzQxT1N3eE5pNDFPRm9pSUM4K1BDOXpkbWMrJyxcbiAgICBDaGVjazogJ2RhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEQ5NGJXd2dkbVZ5YzJsdmJqMGlNUzR3SWlCbGJtTnZaR2x1WnowaVZWUkdMVGdpUHo0OElVUlBRMVJaVUVVZ2MzWm5JRkJWUWt4SlF5QWlMUzh2VnpOREx5OUVWRVFnVTFaSElERXVNUzh2UlU0aUlDSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OUhjbUZ3YUdsamN5OVRWa2N2TVM0eEwwUlVSQzl6ZG1jeE1TNWtkR1FpUGp4emRtY2dlRzFzYm5NOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6SXdNREF2YzNabklpQjRiV3h1Y3pwNGJHbHVhejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TVRrNU9TOTRiR2x1YXlJZ2RtVnljMmx2YmowaU1TNHhJaUIzYVdSMGFEMGlNalFpSUdobGFXZG9kRDBpTWpRaUlIWnBaWGRDYjNnOUlqQWdNQ0F5TkNBeU5DSStQSEJoZEdnZ1pEMGlUVEl4TERkTU9Td3hPVXd6TGpVc01UTXVOVXcwTGpreExERXlMakE1VERrc01UWXVNVGRNTVRrdU5Ua3NOUzQxT1V3eU1TdzNXaUlnTHo0OEwzTjJaejQ9JyxcbiAgICBWaWV3SW5kaWNhdG9yOiAnZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQRDk0Yld3Z2RtVnljMmx2YmowaU1TNHdJaUJsYm1OdlpHbHVaejBpVlZSR0xUZ2lQejRLUENGRVQwTlVXVkJGSUhOMlp5QlFWVUpNU1VNZ0lpMHZMMWN6UXk4dlJGUkVJRk5XUnlBeExqRXZMMFZPSWlBaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdlIzSmhjR2hwWTNNdlUxWkhMekV1TVM5RVZFUXZjM1puTVRFdVpIUmtJajRLUEhOMlp5QjRiV3h1Y3owaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jaUlIaHRiRzV6T25oc2FXNXJQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh4T1RrNUwzaHNhVzVySWlCcFpEMGlkbWxsZHkxcGJtUnBZMkYwYjNJaUlHaGxhV2RvZEQwaU16QWlJSGRwWkhSb1BTSXpNQ0lnZG1sbGQwSnZlRDBpTFRJdU5TQXRNU0F6TUNBek1DSStDZ2s4YzNSNWJHVWdkSGx3WlQwaWRHVjRkQzlqYzNNaVBpNXpkREI3YzNSeWIydGxMWGRwWkhSb09qSTdjM1J5YjJ0bExXMXBkR1Z5YkdsdGFYUTZNVEE3Wm1sc2JEcHViMjVsTzMwdWMzUXhlM04wY205clpTMTNhV1IwYURvMk8zTjBjbTlyWlMxdGFYUmxjbXhwYldsME9qRXdPMzBLQ1R3dmMzUjViR1UrQ2drOFp6NEtDUWs4Y0dGMGFDQmpiR0Z6Y3owaWMzUXdJaUJrUFNKTklERXlMalVnTUNCQklERXlMalVnTVRJdU5TQXdJREFnTUNBdE1USXVOU0F3SUVFZ01USXVOU0F4TWk0MUlEQWdNQ0F3SURFeUxqVWdNQ0lnZEhKaGJuTm1iM0p0UFNKdFlYUnlhWGdvTVN3d0xEQXNNU3d4TXl3eE5TNDFLU0krUEM5d1lYUm9QZ29KQ1R4d1lYUm9JR05zWVhOelBTSnpkRElpSUdROUlrMGdNVE1nTUNCTUlERXdJRElnVENBeE5pQXlJRm9pUGp3dmNHRjBhRDRLQ1FrOGNHRjBhQ0JqYkdGemN6MGljM1F5SWlCa1BTSk5JRElnTUNCQklESWdNaUF3SURBZ01DQXRNaUF3SUVFZ01pQXlJREFnTUNBd0lESWdNQ0lnZEhKaGJuTm1iM0p0UFNKdFlYUnlhWGdvTVN3d0xEQXNNU3d4TXl3eE5TNDFLU0krUEM5d1lYUm9QZ29KQ1R4d1lYUm9JR05zWVhOelBTSnpkREVpSUdsa1BTSnBibVJwWTJGMGIzSWlJSFJ5WVc1elptOXliVDBpYldGMGNtbDRLREVzTUN3d0xERXNNVE1zTVRVdU5Ta2lQand2Y0dGMGFENEtDVHd2Wno0S1BDOXpkbWMrJ1xufTtcblxuZXhwb3J0IHsgRGF0YUltYWdlIH07IiwiaW1wb3J0IHsgRGF0YUltYWdlIH0gZnJvbSAnLi4vRGF0YUltYWdlLmpzJztcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcblxuLyoqXG4gKiBAbW9kdWxlIEltYWdlTG9hZGVyXG4gKiBAZGVzY3JpcHRpb24gSW1hZ2UgbG9hZGVyIHdpdGggcHJvZ3Jlc3MgYmFzZWQgb24ge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9tcmRvb2IvdGhyZWUuanMvYmxvYi9tYXN0ZXIvc3JjL2xvYWRlcnMvSW1hZ2VMb2FkZXIuanN9XG4gKi9cbmNvbnN0IEltYWdlTG9hZGVyID0ge1xuXG4gICAgLyoqXG4gICAgICogTG9hZCBpbWFnZVxuICAgICAqIEBleGFtcGxlIFBBTk9MRU5TLkltYWdlTG9hZGVyLmxvYWQoIElNQUdFX1VSTCApXG4gICAgICogQG1ldGhvZCBsb2FkXG4gICAgICogQHBhcmFtICB7c3RyaW5nfSAgIHVybCAgICAgICAgLSBBbiBpbWFnZSB1cmxcbiAgICAgKiBAcGFyYW0gIHtmdW5jdGlvbn0gb25Mb2FkICAgICAtIE9uIGxvYWQgY2FsbGJhY2tcbiAgICAgKiBAcGFyYW0gIHtmdW5jdGlvbn0gb25Qcm9ncmVzcyAtIEluIHByb2dyZXNzIGNhbGxiYWNrXG4gICAgICogQHBhcmFtICB7ZnVuY3Rpb259IG9uRXJyb3IgICAgLSBPbiBlcnJvciBjYWxsYmFja1xuICAgICAqL1xuICAgIGxvYWQ6IGZ1bmN0aW9uICggdXJsLCBvbkxvYWQgPSAoKSA9PiB7fSwgb25Qcm9ncmVzcyA9ICgpID0+IHt9LCBvbkVycm9yID0gKCkgPT4ge30gKSB7XG5cbiAgICAgICAgLy8gRW5hYmxlIGNhY2hlXG4gICAgICAgIFRIUkVFLkNhY2hlLmVuYWJsZWQgPSB0cnVlO1xuXG4gICAgICAgIGxldCBjYWNoZWQsIHJlcXVlc3QsIGFycmF5QnVmZmVyVmlldywgYmxvYiwgdXJsQ3JlYXRvciwgaW1hZ2UsIHJlZmVyZW5jZTtcblx0XG4gICAgICAgIC8vIFJlZmVyZW5jZSBrZXlcbiAgICAgICAgZm9yICggbGV0IGljb25OYW1lIGluIERhdGFJbWFnZSApIHtcblx0XG4gICAgICAgICAgICBpZiAoIERhdGFJbWFnZS5oYXNPd25Qcm9wZXJ0eSggaWNvbk5hbWUgKSAmJiB1cmwgPT09IERhdGFJbWFnZVsgaWNvbk5hbWUgXSApIHtcblx0XG4gICAgICAgICAgICAgICAgcmVmZXJlbmNlID0gaWNvbk5hbWU7XG5cdFxuICAgICAgICAgICAgfVxuXHRcbiAgICAgICAgfVxuXHRcbiAgICAgICAgLy8gQ2FjaGVkXG4gICAgICAgIGNhY2hlZCA9IFRIUkVFLkNhY2hlLmdldCggcmVmZXJlbmNlID8gcmVmZXJlbmNlIDogdXJsICk7XG5cdFxuICAgICAgICBpZiAoIGNhY2hlZCAhPT0gdW5kZWZpbmVkICkge1xuXHRcbiAgICAgICAgICAgIGlmICggb25Mb2FkICkge1xuXHRcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCBmdW5jdGlvbiAoKSB7XG5cdFxuICAgICAgICAgICAgICAgICAgICBvblByb2dyZXNzKCB7IGxvYWRlZDogMSwgdG90YWw6IDEgfSApO1xuICAgICAgICAgICAgICAgICAgICBvbkxvYWQoIGNhY2hlZCApO1xuXHRcbiAgICAgICAgICAgICAgICB9LCAwICk7XG5cdFxuICAgICAgICAgICAgfVxuXHRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWQ7XG5cdFxuICAgICAgICB9XG5cdFx0XG4gICAgICAgIC8vIENvbnN0cnVjdCBhIG5ldyBYTUxIdHRwUmVxdWVzdFxuICAgICAgICB1cmxDcmVhdG9yID0gd2luZG93LlVSTCB8fCB3aW5kb3cud2Via2l0VVJMO1xuICAgICAgICBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyggJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwnLCAnaW1nJyApO1xuXHRcbiAgICAgICAgLy8gQWRkIHRvIGNhY2hlXG4gICAgICAgIFRIUkVFLkNhY2hlLmFkZCggcmVmZXJlbmNlID8gcmVmZXJlbmNlIDogdXJsLCBpbWFnZSApO1xuXHRcbiAgICAgICAgY29uc3Qgb25JbWFnZUxvYWRlZCA9ICgpID0+IHtcblx0XG4gICAgICAgICAgICB1cmxDcmVhdG9yLnJldm9rZU9iamVjdFVSTCggaW1hZ2Uuc3JjICk7XG4gICAgICAgICAgICBvbkxvYWQoIGltYWdlICk7XG5cdFxuICAgICAgICB9O1xuXG4gICAgICAgIGlmICggdXJsLmluZGV4T2YoICdkYXRhOicgKSA9PT0gMCApIHtcblxuICAgICAgICAgICAgaW1hZ2UuYWRkRXZlbnRMaXN0ZW5lciggJ2xvYWQnLCBvbkltYWdlTG9hZGVkLCBmYWxzZSApO1xuICAgICAgICAgICAgaW1hZ2Uuc3JjID0gdXJsO1xuICAgICAgICAgICAgcmV0dXJuIGltYWdlO1xuICAgICAgICB9XG5cdFxuICAgICAgICBpbWFnZS5jcm9zc09yaWdpbiA9IHRoaXMuY3Jvc3NPcmlnaW4gIT09IHVuZGVmaW5lZCA/IHRoaXMuY3Jvc3NPcmlnaW4gOiAnJztcblx0XG4gICAgICAgIHJlcXVlc3QgPSBuZXcgd2luZG93LlhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgIHJlcXVlc3Qub3BlbiggJ0dFVCcsIHVybCwgdHJ1ZSApO1xuICAgICAgICByZXF1ZXN0LnJlc3BvbnNlVHlwZSA9ICdhcnJheWJ1ZmZlcic7XG4gICAgICAgIHJlcXVlc3QuYWRkRXZlbnRMaXN0ZW5lciggJ2Vycm9yJywgb25FcnJvciApO1xuICAgICAgICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoICdwcm9ncmVzcycsIGV2ZW50ID0+IHtcblxuICAgICAgICAgICAgaWYgICggIWV2ZW50ICkgcmV0dXJuO1xuXG4gICAgICAgICAgICBjb25zdCB7IGxvYWRlZCwgdG90YWwsIGxlbmd0aENvbXB1dGFibGUgfSA9IGV2ZW50O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoIGxlbmd0aENvbXB1dGFibGUgKSB7XG5cdFxuICAgICAgICAgICAgICAgIG9uUHJvZ3Jlc3MoIHsgbG9hZGVkLCB0b3RhbCB9ICk7XG5cdFxuICAgICAgICAgICAgfVxuXHRcbiAgICAgICAgfSApO1xuICAgICAgICBcbiAgICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCAnbG9hZGVuZCcsIGV2ZW50ID0+IHtcblxuICAgICAgICAgICAgaWYgICggIWV2ZW50ICkgcmV0dXJuO1xuICAgICAgICAgICAgY29uc3QgeyBjdXJyZW50VGFyZ2V0OiB7IHJlc3BvbnNlIH0gfSA9IGV2ZW50O1xuXG4gICAgICAgICAgICBhcnJheUJ1ZmZlclZpZXcgPSBuZXcgVWludDhBcnJheSggcmVzcG9uc2UgKTtcbiAgICAgICAgICAgIGJsb2IgPSBuZXcgd2luZG93LkJsb2IoIFsgYXJyYXlCdWZmZXJWaWV3IF0gKTtcblx0XHRcdFx0XG4gICAgICAgICAgICBpbWFnZS5hZGRFdmVudExpc3RlbmVyKCAnbG9hZCcsIG9uSW1hZ2VMb2FkZWQsIGZhbHNlICk7XG4gICAgICAgICAgICBpbWFnZS5zcmMgPSB1cmxDcmVhdG9yLmNyZWF0ZU9iamVjdFVSTCggYmxvYiApO1xuXHRcbiAgICAgICAgfSApO1xuXHRcbiAgICAgICAgcmVxdWVzdC5zZW5kKG51bGwpO1xuXHRcbiAgICB9XG5cbn07XG5cbmV4cG9ydCB7IEltYWdlTG9hZGVyIH07IiwiaW1wb3J0IHsgSW1hZ2VMb2FkZXIgfSBmcm9tICcuL0ltYWdlTG9hZGVyLmpzJztcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcblxuLyoqXG4gKiBAbW9kdWxlIFRleHR1cmVMb2FkZXJcbiAqIEBkZXNjcmlwdGlvbiBUZXh0dXJlIGxvYWRlciBiYXNlZCBvbiB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL21yZG9vYi90aHJlZS5qcy9ibG9iL21hc3Rlci9zcmMvbG9hZGVycy9UZXh0dXJlTG9hZGVyLmpzfVxuICovXG5jb25zdCBUZXh0dXJlTG9hZGVyID0ge1xuXG4gICAgLyoqXG4gICAgICogTG9hZCBpbWFnZSB0ZXh0dXJlXG4gICAgICogQGV4YW1wbGUgUEFOT0xFTlMuVGV4dHVyZUxvYWRlci5sb2FkKCBJTUFHRV9VUkwgKVxuICAgICAqIEBtZXRob2QgbG9hZFxuICAgICAqIEBwYXJhbSAge3N0cmluZ30gICB1cmwgICAgICAgIC0gQW4gaW1hZ2UgdXJsXG4gICAgICogQHBhcmFtICB7ZnVuY3Rpb259IG9uTG9hZCAgICAgLSBPbiBsb2FkIGNhbGxiYWNrXG4gICAgICogQHBhcmFtICB7ZnVuY3Rpb259IG9uUHJvZ3Jlc3MgLSBJbiBwcm9ncmVzcyBjYWxsYmFja1xuICAgICAqIEBwYXJhbSAge2Z1bmN0aW9ufSBvbkVycm9yICAgIC0gT24gZXJyb3IgY2FsbGJhY2tcbiAgICAgKiBAcmV0dXJuIHtUSFJFRS5UZXh0dXJlfSAgIFx0IC0gSW1hZ2UgdGV4dHVyZVxuICAgICAqL1xuICAgIGxvYWQ6IGZ1bmN0aW9uICggdXJsLCBvbkxvYWQgPSAoKSA9PiB7fSwgb25Qcm9ncmVzcywgb25FcnJvciApIHtcblxuICAgICAgICB2YXIgdGV4dHVyZSA9IG5ldyBUSFJFRS5UZXh0dXJlKCk7IFxuXG4gICAgICAgIEltYWdlTG9hZGVyLmxvYWQoIHVybCwgZnVuY3Rpb24gKCBpbWFnZSApIHtcblxuICAgICAgICAgICAgdGV4dHVyZS5pbWFnZSA9IGltYWdlO1xuXG4gICAgICAgICAgICAvLyBKUEVHcyBjYW4ndCBoYXZlIGFuIGFscGhhIGNoYW5uZWwsIHNvIG1lbW9yeSBjYW4gYmUgc2F2ZWQgYnkgc3RvcmluZyB0aGVtIGFzIFJHQi5cbiAgICAgICAgICAgIGNvbnN0IGlzSlBFRyA9IHVybC5zZWFyY2goIC9cXC4oanBnfGpwZWcpJC8gKSA+IDAgfHwgdXJsLnNlYXJjaCggL15kYXRhXFw6aW1hZ2VcXC9qcGVnLyApID09PSAwO1xuXG4gICAgICAgICAgICB0ZXh0dXJlLmZvcm1hdCA9IGlzSlBFRyA/IFRIUkVFLlJHQkZvcm1hdCA6IFRIUkVFLlJHQkFGb3JtYXQ7XG4gICAgICAgICAgICB0ZXh0dXJlLm5lZWRzVXBkYXRlID0gdHJ1ZTtcblxuICAgICAgICAgICAgb25Mb2FkKCB0ZXh0dXJlICk7XG5cbiAgICAgICAgfSwgb25Qcm9ncmVzcywgb25FcnJvciApO1xuXG4gICAgICAgIHJldHVybiB0ZXh0dXJlO1xuXG4gICAgfVxuXG59O1xuXG5leHBvcnQgeyBUZXh0dXJlTG9hZGVyIH07IiwiaW1wb3J0IHsgSW1hZ2VMb2FkZXIgfSBmcm9tICcuL0ltYWdlTG9hZGVyLmpzJztcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcblxuLyoqXG4gKiBAbW9kdWxlIEN1YmVUZXh0dXJlTG9hZGVyXG4gKiBAZGVzY3JpcHRpb24gQ3ViZSBUZXh0dXJlIExvYWRlciBiYXNlZCBvbiB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL21yZG9vYi90aHJlZS5qcy9ibG9iL21hc3Rlci9zcmMvbG9hZGVycy9DdWJlVGV4dHVyZUxvYWRlci5qc31cbiAqL1xuY29uc3QgQ3ViZVRleHR1cmVMb2FkZXIgPSB7XG5cbiAgICAvKipcbiAgICAgKiBMb2FkIDYgaW1hZ2VzIGFzIGEgY3ViZSB0ZXh0dXJlXG4gICAgICogQGV4YW1wbGUgUEFOT0xFTlMuQ3ViZVRleHR1cmVMb2FkZXIubG9hZCggWyAncHgucG5nJywgJ254LnBuZycsICdweS5wbmcnLCAnbnkucG5nJywgJ3B6LnBuZycsICduei5wbmcnIF0gKVxuICAgICAqIEBtZXRob2QgbG9hZFxuICAgICAqIEBwYXJhbSAge2FycmF5fSAgIHVybHMgICAgICAgIC0gYXJyYXkgb2YgNiB1cmxzIHRvIGltYWdlcywgb25lIGZvciBlYWNoIHNpZGUgb2YgdGhlIEN1YmVUZXh0dXJlLiBUaGUgdXJscyBzaG91bGQgYmUgc3BlY2lmaWVkIGluIHRoZSBmb2xsb3dpbmcgb3JkZXI6IHBvcy14LCBuZWcteCwgcG9zLXksIG5lZy15LCBwb3MteiwgbmVnLXpcbiAgICAgKiBAcGFyYW0gIHtmdW5jdGlvbn0gb25Mb2FkICAgICAtIE9uIGxvYWQgY2FsbGJhY2tcbiAgICAgKiBAcGFyYW0gIHtmdW5jdGlvbn0gb25Qcm9ncmVzcyAtIEluIHByb2dyZXNzIGNhbGxiYWNrXG4gICAgICogQHBhcmFtICB7ZnVuY3Rpb259IG9uRXJyb3IgICAgLSBPbiBlcnJvciBjYWxsYmFja1xuICAgICAqIEByZXR1cm4ge1RIUkVFLkN1YmVUZXh0dXJlfSAgIC0gQ3ViZSB0ZXh0dXJlXG4gICAgICovXG4gICAgbG9hZDogZnVuY3Rpb24gKCB1cmxzLCBvbkxvYWQgPSAoKSA9PiB7fSwgb25Qcm9ncmVzcyA9ICgpID0+IHt9LCBvbkVycm9yICkge1xuXG5cdCAgIHZhciB0ZXh0dXJlLCBsb2FkZWQsIHByb2dyZXNzLCBhbGwsIGxvYWRpbmdzO1xuXG5cdCAgIHRleHR1cmUgPSBuZXcgVEhSRUUuQ3ViZVRleHR1cmUoIFtdICk7XG5cblx0ICAgbG9hZGVkID0gMDtcblx0ICAgcHJvZ3Jlc3MgPSB7fTtcblx0ICAgYWxsID0ge307XG5cblx0ICAgdXJscy5tYXAoIGZ1bmN0aW9uICggdXJsLCBpbmRleCApIHtcblxuXHRcdCAgIEltYWdlTG9hZGVyLmxvYWQoIHVybCwgZnVuY3Rpb24gKCBpbWFnZSApIHtcblxuXHRcdFx0ICAgdGV4dHVyZS5pbWFnZXNbIGluZGV4IF0gPSBpbWFnZTtcblxuXHRcdFx0ICAgbG9hZGVkKys7XG5cblx0XHRcdCAgIGlmICggbG9hZGVkID09PSA2ICkge1xuXG5cdFx0XHRcdCAgIHRleHR1cmUubmVlZHNVcGRhdGUgPSB0cnVlO1xuXG5cdFx0XHRcdCAgIG9uTG9hZCggdGV4dHVyZSApO1xuXG5cdFx0XHQgICB9XG5cblx0XHQgICB9LCBmdW5jdGlvbiAoIGV2ZW50ICkge1xuXG5cdFx0XHQgICBwcm9ncmVzc1sgaW5kZXggXSA9IHsgbG9hZGVkOiBldmVudC5sb2FkZWQsIHRvdGFsOiBldmVudC50b3RhbCB9O1xuXG5cdFx0XHQgICBhbGwubG9hZGVkID0gMDtcblx0XHRcdCAgIGFsbC50b3RhbCA9IDA7XG5cdFx0XHQgICBsb2FkaW5ncyA9IDA7XG5cblx0XHRcdCAgIGZvciAoIHZhciBpIGluIHByb2dyZXNzICkge1xuXG5cdFx0XHRcdCAgIGxvYWRpbmdzKys7XG5cdFx0XHRcdCAgIGFsbC5sb2FkZWQgKz0gcHJvZ3Jlc3NbIGkgXS5sb2FkZWQ7XG5cdFx0XHRcdCAgIGFsbC50b3RhbCArPSBwcm9ncmVzc1sgaSBdLnRvdGFsO1xuXG5cdFx0XHQgICB9XG5cblx0XHRcdCAgIGlmICggbG9hZGluZ3MgPCA2ICkge1xuXG5cdFx0XHRcdCAgIGFsbC50b3RhbCA9IGFsbC50b3RhbCAvIGxvYWRpbmdzICogNjtcblxuXHRcdFx0ICAgfVxuXG5cdFx0XHQgICBvblByb2dyZXNzKCBhbGwgKTtcblxuXHRcdCAgIH0sIG9uRXJyb3IgKTtcblxuXHQgICB9ICk7XG5cblx0ICAgcmV0dXJuIHRleHR1cmU7XG5cbiAgICB9XG5cbn07XG5cbmV4cG9ydCB7IEN1YmVUZXh0dXJlTG9hZGVyIH07IiwiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xuXG4vKipcbiAqIEBjbGFzc2Rlc2MgVXNlciBNZWRpYVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge29iamVjdH0gW2NvbnN0cmFpbnRzPXsgdmlkZW86IHsgd2lkdGg6IHsgaWRlYWw6IDE5MjAgfSwgaGVpZ2h0OiB7IGlkZWFsOiAxMDgwIH0sIGZhY2luZ01vZGU6IHsgZXhhY3Q6ICdlbnZpcm9ubWVudCcgfSB9LCBhdWRpbzogZmFsc2UgfV1cbiAqL1xuZnVuY3Rpb24gTWVkaWEgKCBjb25zdHJhaW50cyApIHtcblxuICAgIGNvbnN0IGRlZmF1bHRDb25zdHJhaW50cyA9IHsgdmlkZW86IHsgd2lkdGg6IHsgaWRlYWw6IDE5MjAgfSwgaGVpZ2h0OiB7IGlkZWFsOiAxMDgwIH0sIGZhY2luZ01vZGU6IHsgZXhhY3Q6ICdlbnZpcm9ubWVudCcgfSB9LCBhdWRpbzogZmFsc2UgfTtcblxuICAgIHRoaXMuY29uc3RyYWludHMgPSBPYmplY3QuYXNzaWduKCBkZWZhdWx0Q29uc3RyYWludHMsIGNvbnN0cmFpbnRzICk7XG5cbiAgICB0aGlzLmNvbnRhaW5lciA9IG51bGw7XG4gICAgdGhpcy5zY2VuZSA9IG51bGw7XG4gICAgdGhpcy5lbGVtZW50ID0gbnVsbDtcbiAgICB0aGlzLmRldmljZXMgPSBbXTtcbiAgICB0aGlzLnN0cmVhbSA9IG51bGw7XG4gICAgdGhpcy5yYXRpb1NjYWxhciA9IDE7XG4gICAgdGhpcy52aWRlb0RldmljZUluZGV4ID0gMDtcblxufTtcblxuTWVkaWEucHJvdG90eXBlID0gT2JqZWN0LmFzc2lnbiggT2JqZWN0LmNyZWF0ZSggVEhSRUUuRXZlbnREaXNwYXRjaGVyLnByb3RvdHlwZSApLCB7XG5cbiAgICBzZXRDb250YWluZXI6IGZ1bmN0aW9uICggY29udGFpbmVyICkge1xuXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xuXG4gICAgfSxcblxuICAgIHNldFNjZW5lOiBmdW5jdGlvbiAoIHNjZW5lICkge1xuXG4gICAgICAgIHRoaXMuc2NlbmUgPSBzY2VuZTtcblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBFbnVtZXJhdGUgZGV2aWNlc1xuICAgICAqIEBtZW1iZXJPZiBNZWRpYVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgICAqL1xuICAgIGVudW1lcmF0ZURldmljZXM6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBjb25zdCBkZXZpY2VzID0gdGhpcy5kZXZpY2VzO1xuICAgICAgICBjb25zdCByZXNvbHZlZFByb21pc2UgPSBuZXcgUHJvbWlzZSggcmVzb2x2ZSA9PiB7IHJlc29sdmUoIGRldmljZXMgKTsgfSApO1xuXG4gICAgICAgIHJldHVybiBkZXZpY2VzLmxlbmd0aCA+IDAgPyByZXNvbHZlZFByb21pc2UgOiB3aW5kb3cubmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5lbnVtZXJhdGVEZXZpY2VzKCk7XG5cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU3dpdGNoIHRvIG5leHQgYXZhaWxhYmxlIHZpZGVvIGRldmljZVxuICAgICAqIEBtZW1iZXJPZiBNZWRpYVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIHN3aXRjaE5leHRWaWRlb0RldmljZTogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGNvbnN0IHN0b3AgPSB0aGlzLnN0b3AuYmluZCggdGhpcyApO1xuICAgICAgICBjb25zdCBzdGFydCA9IHRoaXMuc3RhcnQuYmluZCggdGhpcyApO1xuICAgICAgICBjb25zdCBzZXRWaWRlRGV2aWNlSW5kZXggPSB0aGlzLnNldFZpZGVEZXZpY2VJbmRleC5iaW5kKCB0aGlzICk7XG5cbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy52aWRlb0RldmljZUluZGV4O1xuXG4gICAgICAgIHRoaXMuZ2V0RGV2aWNlcyggJ3ZpZGVvJyApXG4gICAgICAgICAgICAudGhlbiggZGV2aWNlcyA9PiB7XG4gICAgICAgICAgICAgICAgc3RvcCgpO1xuICAgICAgICAgICAgICAgIGluZGV4Kys7XG4gICAgICAgICAgICAgICAgaWYgKCBpbmRleCA+PSBkZXZpY2VzLmxlbmd0aCApIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0VmlkZURldmljZUluZGV4KCAwICk7XG4gICAgICAgICAgICAgICAgICAgIGluZGV4LS07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0VmlkZURldmljZUluZGV4KCBpbmRleCApO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHN0YXJ0KCBkZXZpY2VzWyBpbmRleCBdICk7XG4gICAgICAgICAgICBcblxuICAgICAgICAgICAgfSApO1xuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEdldCBkZXZpY2VzXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgLSB0eXBlIGtleXdvcmQgdG8gbWF0Y2ggZGV2aWNlLmtpbmRcbiAgICAgKiBAbWVtYmVyT2YgTWVkaWFcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBnZXREZXZpY2VzOiBmdW5jdGlvbiAoIHR5cGUgPSAndmlkZW8nICkge1xuXG4gICAgICAgIGNvbnN0IGRldmljZXMgPSB0aGlzLmRldmljZXM7XG4gICAgICAgIGNvbnN0IHZhbGlkYXRlID0gX2RldmljZXMgPT4ge1xuXG4gICAgICAgICAgICByZXR1cm4gX2RldmljZXMubWFwKCBkZXZpY2UgPT4geyBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoICFkZXZpY2VzLmluY2x1ZGVzKCBkZXZpY2UgKSApIHsgZGV2aWNlcy5wdXNoKCBkZXZpY2UgKTsgfVxuICAgICAgICAgICAgICAgIHJldHVybiBkZXZpY2U7IFxuICAgICAgICAgICAgXG4gICAgICAgICAgICB9ICk7XG4gICAgICAgICAgICBcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgZmlsdGVyID0gX2RldmljZXMgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCByZWcgPSBuZXcgUmVnRXhwKCB0eXBlLCAnaScgKTtcbiAgICAgICAgICAgIHJldHVybiBfZGV2aWNlcy5maWx0ZXIoIGRldmljZSA9PiByZWcudGVzdCggZGV2aWNlLmtpbmQgKSApO1xuXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZW51bWVyYXRlRGV2aWNlcygpXG4gICAgICAgICAgICAudGhlbiggdmFsaWRhdGUgKVxuICAgICAgICAgICAgLnRoZW4oIGZpbHRlciApO1xuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEdldCB1c2VyIG1lZGlhXG4gICAgICogQHBhcmFtIHtNZWRpYVN0cmVhbUNvbnN0cmFpbnRzfSBjb25zdHJhaW50c1xuICAgICAqIEBtZW1iZXJPZiBNZWRpYVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIGdldFVzZXJNZWRpYTogZnVuY3Rpb24gKCBjb25zdHJhaW50cyApIHtcblxuICAgICAgICBjb25zdCBzZXRNZWRpYVN0cmVhbSA9IHRoaXMuc2V0TWVkaWFTdHJlYW0uYmluZCggdGhpcyApO1xuICAgICAgICBjb25zdCBwbGF5VmlkZW8gPSB0aGlzLnBsYXlWaWRlby5iaW5kKCB0aGlzICk7XG4gICAgICAgIGNvbnN0IG9uQ2F0Y2hFcnJvciA9IGVycm9yID0+IHsgY29uc29sZS53YXJuKCBgUEFOT0xFTlMuTWVkaWE6ICR7ZXJyb3J9YCApOyB9O1xuXG4gICAgICAgIHJldHVybiB3aW5kb3cubmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEoIGNvbnN0cmFpbnRzIClcbiAgICAgICAgICAgIC50aGVuKCBzZXRNZWRpYVN0cmVhbSApXG4gICAgICAgICAgICAudGhlbiggcGxheVZpZGVvIClcbiAgICAgICAgICAgIC5jYXRjaCggb25DYXRjaEVycm9yICk7XG5cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2V0IHZpZGVvIGRldmljZSBpbmRleFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBcbiAgICAgKiBAbWVtYmVyT2YgTWVkaWFcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBzZXRWaWRlRGV2aWNlSW5kZXg6IGZ1bmN0aW9uICggaW5kZXggKSB7XG5cbiAgICAgICAgdGhpcy52aWRlb0RldmljZUluZGV4ID0gaW5kZXg7XG5cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU3RhcnQgc3RyZWFtaW5nXG4gICAgICogQHBhcmFtIHtNZWRpYURldmljZUluZm99IFt0YXJnZXREZXZpY2VdXG4gICAgICogQG1lbWJlck9mIE1lZGlhXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgc3RhcnQ6IGZ1bmN0aW9uKCB0YXJnZXREZXZpY2UgKSB7XG5cbiAgICAgICAgY29uc3QgY29uc3RyYWludHMgPSB0aGlzLmNvbnN0cmFpbnRzO1xuICAgICAgICBjb25zdCBnZXRVc2VyTWVkaWEgPSB0aGlzLmdldFVzZXJNZWRpYS5iaW5kKCB0aGlzICk7XG4gICAgICAgIGNvbnN0IG9uVmlkZW9EZXZpY2VzID0gZGV2aWNlcyA9PiB7XG5cbiAgICAgICAgICAgIGlmICggIWRldmljZXMgfHwgZGV2aWNlcy5sZW5ndGggPT09IDAgKSB7XG5cbiAgICAgICAgICAgICAgICB0aHJvdyBFcnJvciggJ25vIHZpZGVvIGRldmljZSBmb3VuZCcgKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBkZXZpY2UgPSB0YXJnZXREZXZpY2UgfHwgZGV2aWNlc1sgMCBdO1xuICAgICAgICAgICAgY29uc3RyYWludHMudmlkZW8uZGV2aWNlSWQgPSBkZXZpY2UuZGV2aWNlSWQ7XG5cbiAgICAgICAgICAgIHJldHVybiBnZXRVc2VyTWVkaWEoIGNvbnN0cmFpbnRzICk7XG5cbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLmNyZWF0ZVZpZGVvRWxlbWVudCgpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmdldERldmljZXMoKS50aGVuKCBvblZpZGVvRGV2aWNlcyApO1xuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFN0b3Agc3RyZWFtaW5nXG4gICAgICogQG1lbWJlck9mIE1lZGlhXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgc3RvcDogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGNvbnN0IHN0cmVhbSA9IHRoaXMuc3RyZWFtO1xuXG4gICAgICAgIGlmICggc3RyZWFtICYmIHN0cmVhbS5hY3RpdmUgKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IHRyYWNrID0gc3RyZWFtLmdldFRyYWNrcygpWyAwIF07XG5cbiAgICAgICAgICAgIHRyYWNrLnN0b3AoKTtcblxuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdyZXNpemUnLCB0aGlzLm9uV2luZG93UmVzaXplLmJpbmQoIHRoaXMgKSApO1xuXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5zdHJlYW0gPSBudWxsO1xuXG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTZXQgbWVkaWEgc3RyZWFtXG4gICAgICogQHBhcmFtIHtNZWRpYVN0cmVhbX0gc3RyZWFtIFxuICAgICAqIEBtZW1iZXJPZiBNZWRpYVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIHNldE1lZGlhU3RyZWFtOiBmdW5jdGlvbiAoIHN0cmVhbSApIHtcblxuICAgICAgICB0aGlzLnN0cmVhbSA9IHN0cmVhbTtcbiAgICAgICAgdGhpcy5lbGVtZW50LnNyY09iamVjdCA9IHN0cmVhbTtcblxuICAgICAgICBpZiAoIHRoaXMuc2NlbmUgKSB7XG5cbiAgICAgICAgICAgIHRoaXMuc2NlbmUuYmFja2dyb3VuZCA9IHRoaXMuY3JlYXRlVmlkZW9UZXh0dXJlKCk7XG5cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoICdyZXNpemUnLCB0aGlzLm9uV2luZG93UmVzaXplLmJpbmQoIHRoaXMgKSApO1xuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFBsYXkgdmlkZW8gZWxlbWVudFxuICAgICAqIEBtZW1iZXJPZiBNZWRpYVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIHBsYXlWaWRlbzogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGNvbnN0IHsgZWxlbWVudCB9ID0gdGhpcztcblxuICAgICAgICBpZiAoIGVsZW1lbnQgKSB7XG5cbiAgICAgICAgICAgIGVsZW1lbnQucGxheSgpO1xuICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdwbGF5JyB9ICk7XG5cbiAgICAgICAgfVxuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFBhdXNlIHZpZGVvIGVsZW1lbnRcbiAgICAgKiBAbWVtYmVyT2YgTWVkaWFcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBwYXVzZVZpZGVvOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgY29uc3QgeyBlbGVtZW50IH0gPSB0aGlzO1xuXG4gICAgICAgIGlmICggZWxlbWVudCApIHtcblxuICAgICAgICAgICAgZWxlbWVudC5wYXVzZSgpO1xuICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdwYXVzZScgfSApO1xuXG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgdmlkZW8gdGV4dHVyZVxuICAgICAqIEBtZW1iZXJPZiBNZWRpYVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEByZXR1cm5zIHtUSFJFRS5WaWRlb1RleHR1cmV9XG4gICAgICovXG4gICAgY3JlYXRlVmlkZW9UZXh0dXJlOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgY29uc3QgdmlkZW8gPSB0aGlzLmVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IHRleHR1cmUgPSBuZXcgVEhSRUUuVmlkZW9UZXh0dXJlKCB2aWRlbyApO1xuXG4gICAgICAgIHRleHR1cmUuZ2VuZXJhdGVNaXBtYXBzID0gZmFsc2U7XG4gICAgICAgIHRleHR1cmUubWluRmlsdGVyID0gVEhSRUUuTGluZWFyRmlsdGVyO1xuICAgICAgICB0ZXh0dXJlLm1hZ0ZpbHRlciA9IFRIUkVFLkxpbmVhckZpbHRlcjtcbiAgICAgICAgdGV4dHVyZS5mb3JtYXQgPSBUSFJFRS5SR0JGb3JtYXQ7XG4gICAgICAgIHRleHR1cmUuY2VudGVyLnNldCggMC41LCAwLjUgKTtcblxuICAgICAgICB2aWRlby5hZGRFdmVudExpc3RlbmVyKCAnY2FucGxheScsIHRoaXMub25XaW5kb3dSZXNpemUuYmluZCggdGhpcyApICk7XG5cbiAgICAgICAgcmV0dXJuIHRleHR1cmU7XG5cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIHZpZGVvIGVsZW1lbnRcbiAgICAgKiBAbWVtYmVyT2YgTWVkaWFcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcmV0dXJucyB7SFRNTFZpZGVvRWxlbWVudH1cbiAgICAgKiBAZmlyZXMgTWVkaWEjY2FucGxheVxuICAgICAqL1xuICAgIGNyZWF0ZVZpZGVvRWxlbWVudDogZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgY29uc3QgZGlzcGF0Y2hFdmVudCA9IHRoaXMuZGlzcGF0Y2hFdmVudC5iaW5kKCB0aGlzICk7XG4gICAgICAgIGNvbnN0IHZpZGVvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ3ZpZGVvJyApO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBWaWRlbyBjYW4gcGxheSBldmVudFxuICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAgICAgKiBAZXZlbnQgTWVkaWEjY2FucGxheVxuICAgICAgICAgKi9cbiAgICAgICAgY29uc3QgY2FuUGxheSA9ICgpID0+IGRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ2NhbnBsYXknIH0gKTtcbiAgICAgICAgXG4gICAgICAgIHZpZGVvLnNldEF0dHJpYnV0ZSggJ2F1dG9wbGF5JywgJycgKTtcbiAgICAgICAgdmlkZW8uc2V0QXR0cmlidXRlKCAnbXV0ZWQnLCAnJyApO1xuICAgICAgICB2aWRlby5zZXRBdHRyaWJ1dGUoICdwbGF5c2lubGluZScsICcnICk7XG5cbiAgICAgICAgdmlkZW8uc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICB2aWRlby5zdHlsZS50b3AgPSAnMCc7XG4gICAgICAgIHZpZGVvLnN0eWxlLmxlZnQgPSAnMCc7XG4gICAgICAgIHZpZGVvLnN0eWxlLndpZHRoID0gJzEwMCUnO1xuICAgICAgICB2aWRlby5zdHlsZS5oZWlnaHQgPSAnMTAwJSc7XG4gICAgICAgIHZpZGVvLnN0eWxlLm9iamVjdFBvc2l0aW9uID0gJ2NlbnRlcic7XG4gICAgICAgIHZpZGVvLnN0eWxlLm9iamVjdEZpdCA9ICdjb3Zlcic7XG4gICAgICAgIHZpZGVvLnN0eWxlLmRpc3BsYXkgPSB0aGlzLnNjZW5lID8gJ25vbmUnIDogJyc7XG5cbiAgICAgICAgdmlkZW8uYWRkRXZlbnRMaXN0ZW5lciggJ2NhbnBsYXknLCBjYW5QbGF5ICk7XG5cbiAgICAgICAgcmV0dXJuIHZpZGVvO1xuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIE9uIHdpbmRvdyByZXNpemUgZXZlbnRcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudCBcbiAgICAgKiBAbWVtYmVyT2YgTWVkaWFcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBvbldpbmRvd1Jlc2l6ZTogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGlmICggdGhpcy5lbGVtZW50ICYmIHRoaXMuZWxlbWVudC52aWRlb1dpZHRoICYmIHRoaXMuZWxlbWVudC52aWRlb0hlaWdodCAmJiB0aGlzLnNjZW5lICkge1xuXG4gICAgICAgICAgICBjb25zdCB7IGNsaWVudFdpZHRoOiB3aWR0aCwgY2xpZW50SGVpZ2h0OiBoZWlnaHQgfSA9IHRoaXMuY29udGFpbmVyO1xuICAgICAgICAgICAgY29uc3QgdGV4dHVyZSA9IHRoaXMuc2NlbmUuYmFja2dyb3VuZDtcbiAgICAgICAgICAgIGNvbnN0IHsgdmlkZW9XaWR0aCwgdmlkZW9IZWlnaHQgfSA9IHRoaXMuZWxlbWVudDtcbiAgICAgICAgICAgIGNvbnN0IGNhbWVyYVJhdGlvID0gdmlkZW9IZWlnaHQgLyB2aWRlb1dpZHRoO1xuICAgICAgICAgICAgY29uc3Qgdmlld3BvcnRSYXRpbyA9IHRoaXMuY29udGFpbmVyID8gd2lkdGggLyBoZWlnaHQgOiAxLjA7XG4gICAgICAgICAgICBjb25zdCByYXRpbyA9IGNhbWVyYVJhdGlvICogdmlld3BvcnRSYXRpbyAqIHRoaXMucmF0aW9TY2FsYXI7XG5cbiAgICAgICAgICAgIGlmICggd2lkdGggPiBoZWlnaHQgKSB7XG4gICAgICAgICAgICAgICAgdGV4dHVyZS5yZXBlYXQuc2V0KCByYXRpbywgMSApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0ZXh0dXJlLnJlcGVhdC5zZXQoIDEsIDEgLyByYXRpbyApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH1cblxufSApO1xuXG5leHBvcnQgeyBNZWRpYSB9OyIsIlxuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xuXG4vKipcbiAqIEBjbGFzc2Rlc2MgUmV0aWNsZSAzRCBTcHJpdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtUSFJFRS5Db2xvcn0gW2NvbG9yPTB4ZmZmZmZmXSAtIENvbG9yIG9mIHRoZSByZXRpY2xlIHNwcml0ZVxuICogQHBhcmFtIHtib29sZWFufSBbYXV0b1NlbGVjdD10cnVlXSAtIEF1dG8gc2VsZWN0aW9uXG4gKiBAcGFyYW0ge251bWJlcn0gW2R3ZWxsVGltZT0xNTAwXSAtIER1cmF0aW9uIGZvciBkd2VsbGluZyBzZXF1ZW5jZSB0byBjb21wbGV0ZVxuICovXG5cbmZ1bmN0aW9uIFJldGljbGUgKCBjb2xvciA9IDB4ZmZmZmZmLCBhdXRvU2VsZWN0ID0gdHJ1ZSwgZHdlbGxUaW1lID0gMTUwMCApIHtcblxuICAgIHRoaXMuZHByID0gd2luZG93LmRldmljZVBpeGVsUmF0aW87XG5cbiAgICBjb25zdCB7IGNhbnZhcywgY29udGV4dCB9ID0gdGhpcy5jcmVhdGVDYW52YXMoKTtcbiAgICBjb25zdCBtYXRlcmlhbCA9IG5ldyBUSFJFRS5TcHJpdGVNYXRlcmlhbCggeyBjb2xvciwgbWFwOiB0aGlzLmNyZWF0ZUNhbnZhc1RleHR1cmUoIGNhbnZhcyApIH0gKTtcblxuICAgIFRIUkVFLlNwcml0ZS5jYWxsKCB0aGlzLCBtYXRlcmlhbCApO1xuXG4gICAgdGhpcy5jYW52YXNXaWR0aCA9IGNhbnZhcy53aWR0aDtcbiAgICB0aGlzLmNhbnZhc0hlaWdodCA9IGNhbnZhcy5oZWlnaHQ7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICB0aGlzLmNvbG9yID0gY29sb3IgaW5zdGFuY2VvZiBUSFJFRS5Db2xvciA/IGNvbG9yIDogbmV3IFRIUkVFLkNvbG9yKCBjb2xvciApOyAgICBcblxuICAgIHRoaXMuYXV0b1NlbGVjdCA9IGF1dG9TZWxlY3Q7XG4gICAgdGhpcy5kd2VsbFRpbWUgPSBkd2VsbFRpbWU7XG4gICAgdGhpcy5yaXBwbGVEdXJhdGlvbiA9IDUwMDtcbiAgICB0aGlzLnBvc2l0aW9uLnogPSAtMTA7XG4gICAgdGhpcy5jZW50ZXIuc2V0KCAwLjUsIDAuNSApO1xuICAgIHRoaXMuc2NhbGUuc2V0KCAwLjUsIDAuNSwgMSApO1xuXG4gICAgdGhpcy5zdGFydFRpbWVzdGFtcCA9IG51bGw7XG4gICAgdGhpcy50aW1lcklkID0gbnVsbDtcbiAgICB0aGlzLmNhbGxiYWNrID0gbnVsbDtcblxuICAgIHRoaXMuZnJ1c3R1bUN1bGxlZCA9IGZhbHNlO1xuXG4gICAgdGhpcy51cGRhdGVDYW52YXNBcmNCeVByb2dyZXNzKCAwICk7XG5cbn07XG5cblJldGljbGUucHJvdG90eXBlID0gT2JqZWN0LmFzc2lnbiggT2JqZWN0LmNyZWF0ZSggVEhSRUUuU3ByaXRlLnByb3RvdHlwZSApLCB7XG5cbiAgICBjb25zdHJ1Y3RvcjogUmV0aWNsZSxcblxuICAgIC8qKlxuICAgICAqIFNldCBtYXRlcmlhbCBjb2xvclxuICAgICAqIEBwYXJhbSB7VEhSRUUuQ29sb3J9IGNvbG9yIFxuICAgICAqIEBtZW1iZXJPZiBSZXRpY2xlXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgc2V0Q29sb3I6IGZ1bmN0aW9uICggY29sb3IgKSB7XG5cbiAgICAgICAgdGhpcy5tYXRlcmlhbC5jb2xvci5jb3B5KCBjb2xvciBpbnN0YW5jZW9mIFRIUkVFLkNvbG9yID8gY29sb3IgOiBuZXcgVEhSRUUuQ29sb3IoIGNvbG9yICkgKTtcblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgY2FudmFzIHRleHR1cmVcbiAgICAgKiBAcGFyYW0ge0hUTUxDYW52YXNFbGVtZW50fSBjYW52YXMgXG4gICAgICogQG1lbWJlck9mIFJldGljbGVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcmV0dXJucyB7VEhSRUUuQ2FudmFzVGV4dHVyZX1cbiAgICAgKi9cbiAgICBjcmVhdGVDYW52YXNUZXh0dXJlOiBmdW5jdGlvbiAoIGNhbnZhcyApIHtcblxuICAgICAgICBjb25zdCB0ZXh0dXJlID0gbmV3IFRIUkVFLkNhbnZhc1RleHR1cmUoIGNhbnZhcyApO1xuICAgICAgICB0ZXh0dXJlLm1pbkZpbHRlciA9IFRIUkVFLkxpbmVhckZpbHRlcjtcbiAgICAgICAgdGV4dHVyZS5tYWdGaWx0ZXIgPSBUSFJFRS5MaW5lYXJGaWx0ZXI7XG4gICAgICAgIHRleHR1cmUuZ2VuZXJhdGVNaXBtYXBzID0gZmFsc2U7XG5cbiAgICAgICAgcmV0dXJuIHRleHR1cmU7XG5cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGNhbnZhcyBlbGVtZW50XG4gICAgICogQG1lbWJlck9mIFJldGljbGVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fSBvYmplY3RcbiAgICAgKiBAcmV0dXJucyB7SFRNTENhbnZhc0VsZW1lbnR9IG9iamVjdC5jYW52YXNcbiAgICAgKiBAcmV0dXJucyB7Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEfSBvYmplY3QuY29udGV4dFxuICAgICAqL1xuICAgIGNyZWF0ZUNhbnZhczogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGNvbnN0IHdpZHRoID0gMzI7XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IDMyO1xuICAgICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnY2FudmFzJyApO1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoICcyZCcgKTtcbiAgICAgICAgY29uc3QgZHByID0gdGhpcy5kcHI7XG5cbiAgICAgICAgY2FudmFzLndpZHRoID0gd2lkdGggKiBkcHI7XG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSBoZWlnaHQgKiBkcHI7XG4gICAgICAgIGNvbnRleHQuc2NhbGUoIGRwciwgZHByICk7XG5cbiAgICAgICAgY29udGV4dC5zaGFkb3dCbHVyID0gNTtcbiAgICAgICAgY29udGV4dC5zaGFkb3dDb2xvciA9ICdyZ2JhKDIwMCwyMDAsMjAwLDAuOSknO1xuXG4gICAgICAgIHJldHVybiB7IGNhbnZhcywgY29udGV4dCB9O1xuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSBjYW52YXMgYXJjIGJ5IHByb2dyZXNzXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHByb2dyZXNzIFxuICAgICAqIEBtZW1iZXJPZiBSZXRpY2xlXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgdXBkYXRlQ2FudmFzQXJjQnlQcm9ncmVzczogZnVuY3Rpb24gKCBwcm9ncmVzcyApIHtcblxuICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5jb250ZXh0O1xuICAgICAgICBjb25zdCB7IGNhbnZhc1dpZHRoLCBjYW52YXNIZWlnaHQsIG1hdGVyaWFsIH0gPSB0aGlzO1xuICAgICAgICBjb25zdCBkcHIgPSB0aGlzLmRwcjtcbiAgICAgICAgY29uc3QgZGVncmVlID0gcHJvZ3Jlc3MgKiBNYXRoLlBJICogMjtcbiAgICAgICAgY29uc3QgY29sb3IgPSB0aGlzLmNvbG9yLmdldFN0eWxlKCk7XG4gICAgICAgIGNvbnN0IHggPSBjYW52YXNXaWR0aCAqIDAuNSAvIGRwcjtcbiAgICAgICAgY29uc3QgeSA9IGNhbnZhc0hlaWdodCAqIDAuNSAvIGRwcjtcbiAgICAgICAgY29uc3QgbGluZVdpZHRoID0gMztcbiAgICAgICAgXG4gICAgICAgIGNvbnRleHQuY2xlYXJSZWN0KCAwLCAwLCBjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0ICk7XG4gICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG5cbiAgICAgICAgaWYgKCBwcm9ncmVzcyA9PT0gMCApIHtcbiAgICAgICAgICAgIGNvbnRleHQuYXJjKCB4LCB5LCBjYW52YXNXaWR0aCAvIDE2LCAwLCAyICogTWF0aC5QSSApO1xuICAgICAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgICAgICAgICAgIGNvbnRleHQuZmlsbCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29udGV4dC5hcmMoIHgsIHksIGNhbnZhc1dpZHRoIC8gNCAtIGxpbmVXaWR0aCwgLU1hdGguUEkgLyAyLCAtTWF0aC5QSSAvIDIgKyBkZWdyZWUgKTtcbiAgICAgICAgICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSBjb2xvcjtcbiAgICAgICAgICAgIGNvbnRleHQubGluZVdpZHRoID0gbGluZVdpZHRoO1xuICAgICAgICAgICAgY29udGV4dC5zdHJva2UoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQuY2xvc2VQYXRoKCk7XG5cbiAgICAgICAgbWF0ZXJpYWwubWFwLm5lZWRzVXBkYXRlID0gdHJ1ZTtcblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSaXBwbGUgZWZmZWN0XG4gICAgICogQG1lbWJlck9mIFJldGljbGVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAZmlyZXMgUmV0aWNsZSNyZXRpY2xlLXJpcHBsZS1zdGFydFxuICAgICAqIEBmaXJlcyBSZXRpY2xlI3JldGljbGUtcmlwcGxlLWVuZFxuICAgICAqL1xuICAgIHJpcHBsZTogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmNvbnRleHQ7XG4gICAgICAgIGNvbnN0IHsgY2FudmFzV2lkdGgsIGNhbnZhc0hlaWdodCwgbWF0ZXJpYWwgfSA9IHRoaXM7XG4gICAgICAgIGNvbnN0IGR1cmF0aW9uID0gdGhpcy5yaXBwbGVEdXJhdGlvbjtcbiAgICAgICAgY29uc3QgdGltZXN0YW1wID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgICAgIGNvbnN0IGNvbG9yID0gdGhpcy5jb2xvcjtcbiAgICAgICAgY29uc3QgZHByID0gdGhpcy5kcHI7XG4gICAgICAgIGNvbnN0IHggPSBjYW52YXNXaWR0aCAqIDAuNSAvIGRwcjtcbiAgICAgICAgY29uc3QgeSA9IGNhbnZhc0hlaWdodCAqIDAuNSAvIGRwcjtcblxuICAgICAgICBjb25zdCB1cGRhdGUgPSAoKSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IHRpbWVySWQgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCB1cGRhdGUgKTtcbiAgICAgICAgICAgIGNvbnN0IGVsYXBzZWQgPSBwZXJmb3JtYW5jZS5ub3coKSAtIHRpbWVzdGFtcDtcbiAgICAgICAgICAgIGNvbnN0IHByb2dyZXNzID0gZWxhcHNlZCAvIGR1cmF0aW9uO1xuICAgICAgICAgICAgY29uc3Qgb3BhY2l0eSA9IDEuMCAtIHByb2dyZXNzID4gMCA/IDEuMCAtIHByb2dyZXNzIDogMDtcbiAgICAgICAgICAgIGNvbnN0IHJhZGl1cyA9IHByb2dyZXNzICogY2FudmFzV2lkdGggKiAwLjUgLyBkcHI7XG5cbiAgICAgICAgICAgIGNvbnRleHQuY2xlYXJSZWN0KCAwLCAwLCBjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0ICk7XG4gICAgICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY29udGV4dC5hcmMoIHgsIHksIHJhZGl1cywgMCwgTWF0aC5QSSAqIDIgKTtcbiAgICAgICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gYHJnYmEoJHtjb2xvci5yICogMjU1fSwgJHtjb2xvci5nICogMjU1fSwgJHtjb2xvci5iICogMjU1fSwgJHtvcGFjaXR5fSlgO1xuICAgICAgICAgICAgY29udGV4dC5maWxsKCk7XG4gICAgICAgICAgICBjb250ZXh0LmNsb3NlUGF0aCgpO1xuXG4gICAgICAgICAgICBpZiAoIHByb2dyZXNzID49IDEuMCApIHtcblxuICAgICAgICAgICAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSggdGltZXJJZCApO1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQ2FudmFzQXJjQnlQcm9ncmVzcyggMCApO1xuXG4gICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICogUmV0aWNsZSByaXBwbGUgZW5kIGV2ZW50XG4gICAgICAgICAgICAgICAgICogQHR5cGUge29iamVjdH1cbiAgICAgICAgICAgICAgICAgKiBAZXZlbnQgUmV0aWNsZSNyZXRpY2xlLXJpcHBsZS1lbmRcbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ3JldGljbGUtcmlwcGxlLWVuZCcgfSApO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1hdGVyaWFsLm1hcC5uZWVkc1VwZGF0ZSA9IHRydWU7XG5cbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0aWNsZSByaXBwbGUgc3RhcnQgZXZlbnRcbiAgICAgICAgICogQHR5cGUge29iamVjdH1cbiAgICAgICAgICogQGV2ZW50IFJldGljbGUjcmV0aWNsZS1yaXBwbGUtc3RhcnRcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAncmV0aWNsZS1yaXBwbGUtc3RhcnQnIH0gKTtcblxuICAgICAgICB1cGRhdGUoKTtcblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBNYWtlIHJldGljbGUgdmlzaWJsZVxuICAgICAqIEBtZW1iZXJPZiBSZXRpY2xlXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgc2hvdzogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIHRoaXMudmlzaWJsZSA9IHRydWU7XG5cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogTWFrZSByZXRpY2xlIGludmlzaWJsZVxuICAgICAqIEBtZW1iZXJPZiBSZXRpY2xlXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgaGlkZTogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFN0YXJ0IGR3ZWxsaW5nXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgXG4gICAgICogQG1lbWJlck9mIFJldGljbGVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAZmlyZXMgUmV0aWNsZSNyZXRpY2xlLXN0YXJ0XG4gICAgICovXG4gICAgc3RhcnQ6IGZ1bmN0aW9uICggY2FsbGJhY2sgKSB7XG5cbiAgICAgICAgaWYgKCAhdGhpcy5hdXRvU2VsZWN0ICkge1xuXG4gICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXRpY2xlIHN0YXJ0IGV2ZW50XG4gICAgICAgICAqIEB0eXBlIHtvYmplY3R9XG4gICAgICAgICAqIEBldmVudCBSZXRpY2xlI3JldGljbGUtc3RhcnRcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAncmV0aWNsZS1zdGFydCcgfSApO1xuXG4gICAgICAgIHRoaXMuc3RhcnRUaW1lc3RhbXAgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICAgICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEVuZCBkd2VsbGluZ1xuICAgICAqIEBtZW1iZXJPZiBSZXRpY2xlXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQGZpcmVzIFJldGljbGUjcmV0aWNsZS1lbmRcbiAgICAgKi9cbiAgICBlbmQ6IGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgaWYgKCAhdGhpcy5zdGFydFRpbWVzdGFtcCApIHsgcmV0dXJuOyB9XG5cbiAgICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKCB0aGlzLnRpbWVySWQgKTtcblxuICAgICAgICB0aGlzLnVwZGF0ZUNhbnZhc0FyY0J5UHJvZ3Jlc3MoIDAgKTtcbiAgICAgICAgdGhpcy5jYWxsYmFjayA9IG51bGw7XG4gICAgICAgIHRoaXMudGltZXJJZCA9IG51bGw7XG4gICAgICAgIHRoaXMuc3RhcnRUaW1lc3RhbXAgPSBudWxsO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXRpY2xlIGVuZCBldmVudFxuICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAgICAgKiBAZXZlbnQgUmV0aWNsZSNyZXRpY2xlLWVuZFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdyZXRpY2xlLWVuZCcgfSApO1xuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSBkd2VsbGluZ1xuICAgICAqIEBtZW1iZXJPZiBSZXRpY2xlXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQGZpcmVzIFJldGljbGUjcmV0aWNsZS11cGRhdGVcbiAgICAgKi9cbiAgICB1cGRhdGU6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICB0aGlzLnRpbWVySWQgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCB0aGlzLnVwZGF0ZS5iaW5kKCB0aGlzICkgKTtcblxuICAgICAgICBjb25zdCBlbGFwc2VkID0gcGVyZm9ybWFuY2Uubm93KCkgLSB0aGlzLnN0YXJ0VGltZXN0YW1wO1xuICAgICAgICBjb25zdCBwcm9ncmVzcyA9IGVsYXBzZWQgLyB0aGlzLmR3ZWxsVGltZTtcblxuICAgICAgICB0aGlzLnVwZGF0ZUNhbnZhc0FyY0J5UHJvZ3Jlc3MoIHByb2dyZXNzICk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldGljbGUgdXBkYXRlIGV2ZW50XG4gICAgICAgICAqIEB0eXBlIHtvYmplY3R9XG4gICAgICAgICAqIEBldmVudCBSZXRpY2xlI3JldGljbGUtdXBkYXRlXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ3JldGljbGUtdXBkYXRlJywgcHJvZ3Jlc3MgfSApO1xuXG4gICAgICAgIGlmICggcHJvZ3Jlc3MgPj0gMS4wICkge1xuXG4gICAgICAgICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUoIHRoaXMudGltZXJJZCApO1xuICAgICAgICAgICAgaWYgKCB0aGlzLmNhbGxiYWNrICkgeyB0aGlzLmNhbGxiYWNrKCk7IH1cbiAgICAgICAgICAgIHRoaXMuZW5kKCk7XG4gICAgICAgICAgICB0aGlzLnJpcHBsZSgpO1xuXG4gICAgICAgIH1cblxuICAgIH1cblxufSApO1xuXG5leHBvcnQgeyBSZXRpY2xlIH07IiwiLyoqXG4gKiBUd2Vlbi5qcyAtIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxuICogaHR0cHM6Ly9naXRodWIuY29tL3R3ZWVuanMvdHdlZW4uanNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3R3ZWVuanMvdHdlZW4uanMvZ3JhcGhzL2NvbnRyaWJ1dG9ycyBmb3IgdGhlIGZ1bGwgbGlzdCBvZiBjb250cmlidXRvcnMuXG4gKiBUaGFuayB5b3UgYWxsLCB5b3UncmUgYXdlc29tZSFcbiAqL1xuXG5cbnZhciBfR3JvdXAgPSBmdW5jdGlvbiAoKSB7XG5cdHRoaXMuX3R3ZWVucyA9IHt9O1xuXHR0aGlzLl90d2VlbnNBZGRlZER1cmluZ1VwZGF0ZSA9IHt9O1xufTtcblxuX0dyb3VwLnByb3RvdHlwZSA9IHtcblx0Z2V0QWxsOiBmdW5jdGlvbiAoKSB7XG5cblx0XHRyZXR1cm4gT2JqZWN0LmtleXModGhpcy5fdHdlZW5zKS5tYXAoZnVuY3Rpb24gKHR3ZWVuSWQpIHtcblx0XHRcdHJldHVybiB0aGlzLl90d2VlbnNbdHdlZW5JZF07XG5cdFx0fS5iaW5kKHRoaXMpKTtcblxuXHR9LFxuXG5cdHJlbW92ZUFsbDogZnVuY3Rpb24gKCkge1xuXG5cdFx0dGhpcy5fdHdlZW5zID0ge307XG5cblx0fSxcblxuXHRhZGQ6IGZ1bmN0aW9uICh0d2Vlbikge1xuXG5cdFx0dGhpcy5fdHdlZW5zW3R3ZWVuLmdldElkKCldID0gdHdlZW47XG5cdFx0dGhpcy5fdHdlZW5zQWRkZWREdXJpbmdVcGRhdGVbdHdlZW4uZ2V0SWQoKV0gPSB0d2VlbjtcblxuXHR9LFxuXG5cdHJlbW92ZTogZnVuY3Rpb24gKHR3ZWVuKSB7XG5cblx0XHRkZWxldGUgdGhpcy5fdHdlZW5zW3R3ZWVuLmdldElkKCldO1xuXHRcdGRlbGV0ZSB0aGlzLl90d2VlbnNBZGRlZER1cmluZ1VwZGF0ZVt0d2Vlbi5nZXRJZCgpXTtcblxuXHR9LFxuXG5cdHVwZGF0ZTogZnVuY3Rpb24gKHRpbWUsIHByZXNlcnZlKSB7XG5cblx0XHR2YXIgdHdlZW5JZHMgPSBPYmplY3Qua2V5cyh0aGlzLl90d2VlbnMpO1xuXG5cdFx0aWYgKHR3ZWVuSWRzLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHRpbWUgPSB0aW1lICE9PSB1bmRlZmluZWQgPyB0aW1lIDogVFdFRU4ubm93KCk7XG5cblx0XHQvLyBUd2VlbnMgYXJlIHVwZGF0ZWQgaW4gXCJiYXRjaGVzXCIuIElmIHlvdSBhZGQgYSBuZXcgdHdlZW4gZHVyaW5nIGFuIHVwZGF0ZSwgdGhlbiB0aGVcblx0XHQvLyBuZXcgdHdlZW4gd2lsbCBiZSB1cGRhdGVkIGluIHRoZSBuZXh0IGJhdGNoLlxuXHRcdC8vIElmIHlvdSByZW1vdmUgYSB0d2VlbiBkdXJpbmcgYW4gdXBkYXRlLCBpdCBtYXkgb3IgbWF5IG5vdCBiZSB1cGRhdGVkLiBIb3dldmVyLFxuXHRcdC8vIGlmIHRoZSByZW1vdmVkIHR3ZWVuIHdhcyBhZGRlZCBkdXJpbmcgdGhlIGN1cnJlbnQgYmF0Y2gsIHRoZW4gaXQgd2lsbCBub3QgYmUgdXBkYXRlZC5cblx0XHR3aGlsZSAodHdlZW5JZHMubGVuZ3RoID4gMCkge1xuXHRcdFx0dGhpcy5fdHdlZW5zQWRkZWREdXJpbmdVcGRhdGUgPSB7fTtcblxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0d2Vlbklkcy5sZW5ndGg7IGkrKykge1xuXG5cdFx0XHRcdHZhciB0d2VlbiA9IHRoaXMuX3R3ZWVuc1t0d2Vlbklkc1tpXV07XG5cblx0XHRcdFx0aWYgKHR3ZWVuICYmIHR3ZWVuLnVwZGF0ZSh0aW1lKSA9PT0gZmFsc2UpIHtcblx0XHRcdFx0XHR0d2Vlbi5faXNQbGF5aW5nID0gZmFsc2U7XG5cblx0XHRcdFx0XHRpZiAoIXByZXNlcnZlKSB7XG5cdFx0XHRcdFx0XHRkZWxldGUgdGhpcy5fdHdlZW5zW3R3ZWVuSWRzW2ldXTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0dHdlZW5JZHMgPSBPYmplY3Qua2V5cyh0aGlzLl90d2VlbnNBZGRlZER1cmluZ1VwZGF0ZSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cblx0fVxufTtcblxudmFyIFRXRUVOID0gbmV3IF9Hcm91cCgpO1xuXG5UV0VFTi5Hcm91cCA9IF9Hcm91cDtcblRXRUVOLl9uZXh0SWQgPSAwO1xuVFdFRU4ubmV4dElkID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4gVFdFRU4uX25leHRJZCsrO1xufTtcblxuXG4vLyBJbmNsdWRlIGEgcGVyZm9ybWFuY2Uubm93IHBvbHlmaWxsLlxuLy8gSW4gbm9kZS5qcywgdXNlIHByb2Nlc3MuaHJ0aW1lLlxuaWYgKHR5cGVvZiAoc2VsZikgPT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiAocHJvY2VzcykgIT09ICd1bmRlZmluZWQnICYmIHByb2Nlc3MuaHJ0aW1lKSB7XG5cdFRXRUVOLm5vdyA9IGZ1bmN0aW9uICgpIHtcblx0XHR2YXIgdGltZSA9IHByb2Nlc3MuaHJ0aW1lKCk7XG5cblx0XHQvLyBDb252ZXJ0IFtzZWNvbmRzLCBuYW5vc2Vjb25kc10gdG8gbWlsbGlzZWNvbmRzLlxuXHRcdHJldHVybiB0aW1lWzBdICogMTAwMCArIHRpbWVbMV0gLyAxMDAwMDAwO1xuXHR9O1xufVxuLy8gSW4gYSBicm93c2VyLCB1c2Ugc2VsZi5wZXJmb3JtYW5jZS5ub3cgaWYgaXQgaXMgYXZhaWxhYmxlLlxuZWxzZSBpZiAodHlwZW9mIChzZWxmKSAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgIHNlbGYucGVyZm9ybWFuY2UgIT09IHVuZGVmaW5lZCAmJlxuXHRcdCBzZWxmLnBlcmZvcm1hbmNlLm5vdyAhPT0gdW5kZWZpbmVkKSB7XG5cdC8vIFRoaXMgbXVzdCBiZSBib3VuZCwgYmVjYXVzZSBkaXJlY3RseSBhc3NpZ25pbmcgdGhpcyBmdW5jdGlvblxuXHQvLyBsZWFkcyB0byBhbiBpbnZvY2F0aW9uIGV4Y2VwdGlvbiBpbiBDaHJvbWUuXG5cdFRXRUVOLm5vdyA9IHNlbGYucGVyZm9ybWFuY2Uubm93LmJpbmQoc2VsZi5wZXJmb3JtYW5jZSk7XG59XG4vLyBVc2UgRGF0ZS5ub3cgaWYgaXQgaXMgYXZhaWxhYmxlLlxuZWxzZSBpZiAoRGF0ZS5ub3cgIT09IHVuZGVmaW5lZCkge1xuXHRUV0VFTi5ub3cgPSBEYXRlLm5vdztcbn1cbi8vIE90aGVyd2lzZSwgdXNlICduZXcgRGF0ZSgpLmdldFRpbWUoKScuXG5lbHNlIHtcblx0VFdFRU4ubm93ID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblx0fTtcbn1cblxuXG5UV0VFTi5Ud2VlbiA9IGZ1bmN0aW9uIChvYmplY3QsIGdyb3VwKSB7XG5cdHRoaXMuX29iamVjdCA9IG9iamVjdDtcblx0dGhpcy5fdmFsdWVzU3RhcnQgPSB7fTtcblx0dGhpcy5fdmFsdWVzRW5kID0ge307XG5cdHRoaXMuX3ZhbHVlc1N0YXJ0UmVwZWF0ID0ge307XG5cdHRoaXMuX2R1cmF0aW9uID0gMTAwMDtcblx0dGhpcy5fcmVwZWF0ID0gMDtcblx0dGhpcy5fcmVwZWF0RGVsYXlUaW1lID0gdW5kZWZpbmVkO1xuXHR0aGlzLl95b3lvID0gZmFsc2U7XG5cdHRoaXMuX2lzUGxheWluZyA9IGZhbHNlO1xuXHR0aGlzLl9yZXZlcnNlZCA9IGZhbHNlO1xuXHR0aGlzLl9kZWxheVRpbWUgPSAwO1xuXHR0aGlzLl9zdGFydFRpbWUgPSBudWxsO1xuXHR0aGlzLl9lYXNpbmdGdW5jdGlvbiA9IFRXRUVOLkVhc2luZy5MaW5lYXIuTm9uZTtcblx0dGhpcy5faW50ZXJwb2xhdGlvbkZ1bmN0aW9uID0gVFdFRU4uSW50ZXJwb2xhdGlvbi5MaW5lYXI7XG5cdHRoaXMuX2NoYWluZWRUd2VlbnMgPSBbXTtcblx0dGhpcy5fb25TdGFydENhbGxiYWNrID0gbnVsbDtcblx0dGhpcy5fb25TdGFydENhbGxiYWNrRmlyZWQgPSBmYWxzZTtcblx0dGhpcy5fb25VcGRhdGVDYWxsYmFjayA9IG51bGw7XG5cdHRoaXMuX29uUmVwZWF0Q2FsbGJhY2sgPSBudWxsO1xuXHR0aGlzLl9vbkNvbXBsZXRlQ2FsbGJhY2sgPSBudWxsO1xuXHR0aGlzLl9vblN0b3BDYWxsYmFjayA9IG51bGw7XG5cdHRoaXMuX2dyb3VwID0gZ3JvdXAgfHwgVFdFRU47XG5cdHRoaXMuX2lkID0gVFdFRU4ubmV4dElkKCk7XG5cbn07XG5cblRXRUVOLlR3ZWVuLnByb3RvdHlwZSA9IHtcblx0Z2V0SWQ6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy5faWQ7XG5cdH0sXG5cblx0aXNQbGF5aW5nOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX2lzUGxheWluZztcblx0fSxcblxuXHR0bzogZnVuY3Rpb24gKHByb3BlcnRpZXMsIGR1cmF0aW9uKSB7XG5cblx0XHR0aGlzLl92YWx1ZXNFbmQgPSBPYmplY3QuY3JlYXRlKHByb3BlcnRpZXMpO1xuXG5cdFx0aWYgKGR1cmF0aW9uICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuX2R1cmF0aW9uID0gZHVyYXRpb247XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fSxcblxuXHRkdXJhdGlvbjogZnVuY3Rpb24gZHVyYXRpb24oZCkge1xuXHRcdHRoaXMuX2R1cmF0aW9uID0gZDtcblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblxuXHRzdGFydDogZnVuY3Rpb24gKHRpbWUpIHtcblxuXHRcdHRoaXMuX2dyb3VwLmFkZCh0aGlzKTtcblxuXHRcdHRoaXMuX2lzUGxheWluZyA9IHRydWU7XG5cblx0XHR0aGlzLl9vblN0YXJ0Q2FsbGJhY2tGaXJlZCA9IGZhbHNlO1xuXG5cdFx0dGhpcy5fc3RhcnRUaW1lID0gdGltZSAhPT0gdW5kZWZpbmVkID8gdHlwZW9mIHRpbWUgPT09ICdzdHJpbmcnID8gVFdFRU4ubm93KCkgKyBwYXJzZUZsb2F0KHRpbWUpIDogdGltZSA6IFRXRUVOLm5vdygpO1xuXHRcdHRoaXMuX3N0YXJ0VGltZSArPSB0aGlzLl9kZWxheVRpbWU7XG5cblx0XHRmb3IgKHZhciBwcm9wZXJ0eSBpbiB0aGlzLl92YWx1ZXNFbmQpIHtcblxuXHRcdFx0Ly8gQ2hlY2sgaWYgYW4gQXJyYXkgd2FzIHByb3ZpZGVkIGFzIHByb3BlcnR5IHZhbHVlXG5cdFx0XHRpZiAodGhpcy5fdmFsdWVzRW5kW3Byb3BlcnR5XSBpbnN0YW5jZW9mIEFycmF5KSB7XG5cblx0XHRcdFx0aWYgKHRoaXMuX3ZhbHVlc0VuZFtwcm9wZXJ0eV0ubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBDcmVhdGUgYSBsb2NhbCBjb3B5IG9mIHRoZSBBcnJheSB3aXRoIHRoZSBzdGFydCB2YWx1ZSBhdCB0aGUgZnJvbnRcblx0XHRcdFx0dGhpcy5fdmFsdWVzRW5kW3Byb3BlcnR5XSA9IFt0aGlzLl9vYmplY3RbcHJvcGVydHldXS5jb25jYXQodGhpcy5fdmFsdWVzRW5kW3Byb3BlcnR5XSk7XG5cblx0XHRcdH1cblxuXHRcdFx0Ly8gSWYgYHRvKClgIHNwZWNpZmllcyBhIHByb3BlcnR5IHRoYXQgZG9lc24ndCBleGlzdCBpbiB0aGUgc291cmNlIG9iamVjdCxcblx0XHRcdC8vIHdlIHNob3VsZCBub3Qgc2V0IHRoYXQgcHJvcGVydHkgaW4gdGhlIG9iamVjdFxuXHRcdFx0aWYgKHRoaXMuX29iamVjdFtwcm9wZXJ0eV0gPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gU2F2ZSB0aGUgc3RhcnRpbmcgdmFsdWUuXG5cdFx0XHR0aGlzLl92YWx1ZXNTdGFydFtwcm9wZXJ0eV0gPSB0aGlzLl9vYmplY3RbcHJvcGVydHldO1xuXG5cdFx0XHRpZiAoKHRoaXMuX3ZhbHVlc1N0YXJ0W3Byb3BlcnR5XSBpbnN0YW5jZW9mIEFycmF5KSA9PT0gZmFsc2UpIHtcblx0XHRcdFx0dGhpcy5fdmFsdWVzU3RhcnRbcHJvcGVydHldICo9IDEuMDsgLy8gRW5zdXJlcyB3ZSdyZSB1c2luZyBudW1iZXJzLCBub3Qgc3RyaW5nc1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLl92YWx1ZXNTdGFydFJlcGVhdFtwcm9wZXJ0eV0gPSB0aGlzLl92YWx1ZXNTdGFydFtwcm9wZXJ0eV0gfHwgMDtcblxuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzO1xuXG5cdH0sXG5cblx0c3RvcDogZnVuY3Rpb24gKCkge1xuXG5cdFx0aWYgKCF0aGlzLl9pc1BsYXlpbmcpIHtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH1cblxuXHRcdHRoaXMuX2dyb3VwLnJlbW92ZSh0aGlzKTtcblx0XHR0aGlzLl9pc1BsYXlpbmcgPSBmYWxzZTtcblxuXHRcdGlmICh0aGlzLl9vblN0b3BDYWxsYmFjayAhPT0gbnVsbCkge1xuXHRcdFx0dGhpcy5fb25TdG9wQ2FsbGJhY2sodGhpcy5fb2JqZWN0KTtcblx0XHR9XG5cblx0XHR0aGlzLnN0b3BDaGFpbmVkVHdlZW5zKCk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fSxcblxuXHRlbmQ6IGZ1bmN0aW9uICgpIHtcblxuXHRcdHRoaXMudXBkYXRlKEluZmluaXR5KTtcblx0XHRyZXR1cm4gdGhpcztcblxuXHR9LFxuXG5cdHN0b3BDaGFpbmVkVHdlZW5zOiBmdW5jdGlvbiAoKSB7XG5cblx0XHRmb3IgKHZhciBpID0gMCwgbnVtQ2hhaW5lZFR3ZWVucyA9IHRoaXMuX2NoYWluZWRUd2VlbnMubGVuZ3RoOyBpIDwgbnVtQ2hhaW5lZFR3ZWVuczsgaSsrKSB7XG5cdFx0XHR0aGlzLl9jaGFpbmVkVHdlZW5zW2ldLnN0b3AoKTtcblx0XHR9XG5cblx0fSxcblxuXHRncm91cDogZnVuY3Rpb24gKGdyb3VwKSB7XG5cdFx0dGhpcy5fZ3JvdXAgPSBncm91cDtcblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblxuXHRkZWxheTogZnVuY3Rpb24gKGFtb3VudCkge1xuXG5cdFx0dGhpcy5fZGVsYXlUaW1lID0gYW1vdW50O1xuXHRcdHJldHVybiB0aGlzO1xuXG5cdH0sXG5cblx0cmVwZWF0OiBmdW5jdGlvbiAodGltZXMpIHtcblxuXHRcdHRoaXMuX3JlcGVhdCA9IHRpbWVzO1xuXHRcdHJldHVybiB0aGlzO1xuXG5cdH0sXG5cblx0cmVwZWF0RGVsYXk6IGZ1bmN0aW9uIChhbW91bnQpIHtcblxuXHRcdHRoaXMuX3JlcGVhdERlbGF5VGltZSA9IGFtb3VudDtcblx0XHRyZXR1cm4gdGhpcztcblxuXHR9LFxuXG5cdHlveW86IGZ1bmN0aW9uICh5b3lvKSB7XG5cblx0XHR0aGlzLl95b3lvID0geW95bztcblx0XHRyZXR1cm4gdGhpcztcblxuXHR9LFxuXG5cdGVhc2luZzogZnVuY3Rpb24gKGVhc2luZ0Z1bmN0aW9uKSB7XG5cblx0XHR0aGlzLl9lYXNpbmdGdW5jdGlvbiA9IGVhc2luZ0Z1bmN0aW9uO1xuXHRcdHJldHVybiB0aGlzO1xuXG5cdH0sXG5cblx0aW50ZXJwb2xhdGlvbjogZnVuY3Rpb24gKGludGVycG9sYXRpb25GdW5jdGlvbikge1xuXG5cdFx0dGhpcy5faW50ZXJwb2xhdGlvbkZ1bmN0aW9uID0gaW50ZXJwb2xhdGlvbkZ1bmN0aW9uO1xuXHRcdHJldHVybiB0aGlzO1xuXG5cdH0sXG5cblx0Y2hhaW46IGZ1bmN0aW9uICgpIHtcblxuXHRcdHRoaXMuX2NoYWluZWRUd2VlbnMgPSBhcmd1bWVudHM7XG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fSxcblxuXHRvblN0YXJ0OiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcblxuXHRcdHRoaXMuX29uU3RhcnRDYWxsYmFjayA9IGNhbGxiYWNrO1xuXHRcdHJldHVybiB0aGlzO1xuXG5cdH0sXG5cblx0b25VcGRhdGU6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuXG5cdFx0dGhpcy5fb25VcGRhdGVDYWxsYmFjayA9IGNhbGxiYWNrO1xuXHRcdHJldHVybiB0aGlzO1xuXG5cdH0sXG5cblx0b25SZXBlYXQ6IGZ1bmN0aW9uIG9uUmVwZWF0KGNhbGxiYWNrKSB7XG5cblx0XHR0aGlzLl9vblJlcGVhdENhbGxiYWNrID0gY2FsbGJhY2s7XG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fSxcblxuXHRvbkNvbXBsZXRlOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcblxuXHRcdHRoaXMuX29uQ29tcGxldGVDYWxsYmFjayA9IGNhbGxiYWNrO1xuXHRcdHJldHVybiB0aGlzO1xuXG5cdH0sXG5cblx0b25TdG9wOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcblxuXHRcdHRoaXMuX29uU3RvcENhbGxiYWNrID0gY2FsbGJhY2s7XG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fSxcblxuXHR1cGRhdGU6IGZ1bmN0aW9uICh0aW1lKSB7XG5cblx0XHR2YXIgcHJvcGVydHk7XG5cdFx0dmFyIGVsYXBzZWQ7XG5cdFx0dmFyIHZhbHVlO1xuXG5cdFx0aWYgKHRpbWUgPCB0aGlzLl9zdGFydFRpbWUpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLl9vblN0YXJ0Q2FsbGJhY2tGaXJlZCA9PT0gZmFsc2UpIHtcblxuXHRcdFx0aWYgKHRoaXMuX29uU3RhcnRDYWxsYmFjayAhPT0gbnVsbCkge1xuXHRcdFx0XHR0aGlzLl9vblN0YXJ0Q2FsbGJhY2sodGhpcy5fb2JqZWN0KTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5fb25TdGFydENhbGxiYWNrRmlyZWQgPSB0cnVlO1xuXHRcdH1cblxuXHRcdGVsYXBzZWQgPSAodGltZSAtIHRoaXMuX3N0YXJ0VGltZSkgLyB0aGlzLl9kdXJhdGlvbjtcblx0XHRlbGFwc2VkID0gKHRoaXMuX2R1cmF0aW9uID09PSAwIHx8IGVsYXBzZWQgPiAxKSA/IDEgOiBlbGFwc2VkO1xuXG5cdFx0dmFsdWUgPSB0aGlzLl9lYXNpbmdGdW5jdGlvbihlbGFwc2VkKTtcblxuXHRcdGZvciAocHJvcGVydHkgaW4gdGhpcy5fdmFsdWVzRW5kKSB7XG5cblx0XHRcdC8vIERvbid0IHVwZGF0ZSBwcm9wZXJ0aWVzIHRoYXQgZG8gbm90IGV4aXN0IGluIHRoZSBzb3VyY2Ugb2JqZWN0XG5cdFx0XHRpZiAodGhpcy5fdmFsdWVzU3RhcnRbcHJvcGVydHldID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdHZhciBzdGFydCA9IHRoaXMuX3ZhbHVlc1N0YXJ0W3Byb3BlcnR5XSB8fCAwO1xuXHRcdFx0dmFyIGVuZCA9IHRoaXMuX3ZhbHVlc0VuZFtwcm9wZXJ0eV07XG5cblx0XHRcdGlmIChlbmQgaW5zdGFuY2VvZiBBcnJheSkge1xuXG5cdFx0XHRcdHRoaXMuX29iamVjdFtwcm9wZXJ0eV0gPSB0aGlzLl9pbnRlcnBvbGF0aW9uRnVuY3Rpb24oZW5kLCB2YWx1ZSk7XG5cblx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0Ly8gUGFyc2VzIHJlbGF0aXZlIGVuZCB2YWx1ZXMgd2l0aCBzdGFydCBhcyBiYXNlIChlLmcuOiArMTAsIC0zKVxuXHRcdFx0XHRpZiAodHlwZW9mIChlbmQpID09PSAnc3RyaW5nJykge1xuXG5cdFx0XHRcdFx0aWYgKGVuZC5jaGFyQXQoMCkgPT09ICcrJyB8fCBlbmQuY2hhckF0KDApID09PSAnLScpIHtcblx0XHRcdFx0XHRcdGVuZCA9IHN0YXJ0ICsgcGFyc2VGbG9hdChlbmQpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRlbmQgPSBwYXJzZUZsb2F0KGVuZCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gUHJvdGVjdCBhZ2FpbnN0IG5vbiBudW1lcmljIHByb3BlcnRpZXMuXG5cdFx0XHRcdGlmICh0eXBlb2YgKGVuZCkgPT09ICdudW1iZXInKSB7XG5cdFx0XHRcdFx0dGhpcy5fb2JqZWN0W3Byb3BlcnR5XSA9IHN0YXJ0ICsgKGVuZCAtIHN0YXJ0KSAqIHZhbHVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdGlmICh0aGlzLl9vblVwZGF0ZUNhbGxiYWNrICE9PSBudWxsKSB7XG5cdFx0XHR0aGlzLl9vblVwZGF0ZUNhbGxiYWNrKHRoaXMuX29iamVjdCwgZWxhcHNlZCk7XG5cdFx0fVxuXG5cdFx0aWYgKGVsYXBzZWQgPT09IDEpIHtcblxuXHRcdFx0aWYgKHRoaXMuX3JlcGVhdCA+IDApIHtcblxuXHRcdFx0XHRpZiAoaXNGaW5pdGUodGhpcy5fcmVwZWF0KSkge1xuXHRcdFx0XHRcdHRoaXMuX3JlcGVhdC0tO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gUmVhc3NpZ24gc3RhcnRpbmcgdmFsdWVzLCByZXN0YXJ0IGJ5IG1ha2luZyBzdGFydFRpbWUgPSBub3dcblx0XHRcdFx0Zm9yIChwcm9wZXJ0eSBpbiB0aGlzLl92YWx1ZXNTdGFydFJlcGVhdCkge1xuXG5cdFx0XHRcdFx0aWYgKHR5cGVvZiAodGhpcy5fdmFsdWVzRW5kW3Byb3BlcnR5XSkgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdFx0XHR0aGlzLl92YWx1ZXNTdGFydFJlcGVhdFtwcm9wZXJ0eV0gPSB0aGlzLl92YWx1ZXNTdGFydFJlcGVhdFtwcm9wZXJ0eV0gKyBwYXJzZUZsb2F0KHRoaXMuX3ZhbHVlc0VuZFtwcm9wZXJ0eV0pO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmICh0aGlzLl95b3lvKSB7XG5cdFx0XHRcdFx0XHR2YXIgdG1wID0gdGhpcy5fdmFsdWVzU3RhcnRSZXBlYXRbcHJvcGVydHldO1xuXG5cdFx0XHRcdFx0XHR0aGlzLl92YWx1ZXNTdGFydFJlcGVhdFtwcm9wZXJ0eV0gPSB0aGlzLl92YWx1ZXNFbmRbcHJvcGVydHldO1xuXHRcdFx0XHRcdFx0dGhpcy5fdmFsdWVzRW5kW3Byb3BlcnR5XSA9IHRtcDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR0aGlzLl92YWx1ZXNTdGFydFtwcm9wZXJ0eV0gPSB0aGlzLl92YWx1ZXNTdGFydFJlcGVhdFtwcm9wZXJ0eV07XG5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmICh0aGlzLl95b3lvKSB7XG5cdFx0XHRcdFx0dGhpcy5fcmV2ZXJzZWQgPSAhdGhpcy5fcmV2ZXJzZWQ7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAodGhpcy5fcmVwZWF0RGVsYXlUaW1lICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHR0aGlzLl9zdGFydFRpbWUgPSB0aW1lICsgdGhpcy5fcmVwZWF0RGVsYXlUaW1lO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMuX3N0YXJ0VGltZSA9IHRpbWUgKyB0aGlzLl9kZWxheVRpbWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAodGhpcy5fb25SZXBlYXRDYWxsYmFjayAhPT0gbnVsbCkge1xuXHRcdFx0XHRcdHRoaXMuX29uUmVwZWF0Q2FsbGJhY2sodGhpcy5fb2JqZWN0KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXG5cdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdGlmICh0aGlzLl9vbkNvbXBsZXRlQ2FsbGJhY2sgIT09IG51bGwpIHtcblxuXHRcdFx0XHRcdHRoaXMuX29uQ29tcGxldGVDYWxsYmFjayh0aGlzLl9vYmplY3QpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Zm9yICh2YXIgaSA9IDAsIG51bUNoYWluZWRUd2VlbnMgPSB0aGlzLl9jaGFpbmVkVHdlZW5zLmxlbmd0aDsgaSA8IG51bUNoYWluZWRUd2VlbnM7IGkrKykge1xuXHRcdFx0XHRcdC8vIE1ha2UgdGhlIGNoYWluZWQgdHdlZW5zIHN0YXJ0IGV4YWN0bHkgYXQgdGhlIHRpbWUgdGhleSBzaG91bGQsXG5cdFx0XHRcdFx0Ly8gZXZlbiBpZiB0aGUgYHVwZGF0ZSgpYCBtZXRob2Qgd2FzIGNhbGxlZCB3YXkgcGFzdCB0aGUgZHVyYXRpb24gb2YgdGhlIHR3ZWVuXG5cdFx0XHRcdFx0dGhpcy5fY2hhaW5lZFR3ZWVuc1tpXS5zdGFydCh0aGlzLl9zdGFydFRpbWUgKyB0aGlzLl9kdXJhdGlvbik7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXG5cdH1cbn07XG5cblxuVFdFRU4uRWFzaW5nID0ge1xuXG5cdExpbmVhcjoge1xuXG5cdFx0Tm9uZTogZnVuY3Rpb24gKGspIHtcblxuXHRcdFx0cmV0dXJuIGs7XG5cblx0XHR9XG5cblx0fSxcblxuXHRRdWFkcmF0aWM6IHtcblxuXHRcdEluOiBmdW5jdGlvbiAoaykge1xuXG5cdFx0XHRyZXR1cm4gayAqIGs7XG5cblx0XHR9LFxuXG5cdFx0T3V0OiBmdW5jdGlvbiAoaykge1xuXG5cdFx0XHRyZXR1cm4gayAqICgyIC0gayk7XG5cblx0XHR9LFxuXG5cdFx0SW5PdXQ6IGZ1bmN0aW9uIChrKSB7XG5cblx0XHRcdGlmICgoayAqPSAyKSA8IDEpIHtcblx0XHRcdFx0cmV0dXJuIDAuNSAqIGsgKiBrO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gLSAwLjUgKiAoLS1rICogKGsgLSAyKSAtIDEpO1xuXG5cdFx0fVxuXG5cdH0sXG5cblx0Q3ViaWM6IHtcblxuXHRcdEluOiBmdW5jdGlvbiAoaykge1xuXG5cdFx0XHRyZXR1cm4gayAqIGsgKiBrO1xuXG5cdFx0fSxcblxuXHRcdE91dDogZnVuY3Rpb24gKGspIHtcblxuXHRcdFx0cmV0dXJuIC0tayAqIGsgKiBrICsgMTtcblxuXHRcdH0sXG5cblx0XHRJbk91dDogZnVuY3Rpb24gKGspIHtcblxuXHRcdFx0aWYgKChrICo9IDIpIDwgMSkge1xuXHRcdFx0XHRyZXR1cm4gMC41ICogayAqIGsgKiBrO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gMC41ICogKChrIC09IDIpICogayAqIGsgKyAyKTtcblxuXHRcdH1cblxuXHR9LFxuXG5cdFF1YXJ0aWM6IHtcblxuXHRcdEluOiBmdW5jdGlvbiAoaykge1xuXG5cdFx0XHRyZXR1cm4gayAqIGsgKiBrICogaztcblxuXHRcdH0sXG5cblx0XHRPdXQ6IGZ1bmN0aW9uIChrKSB7XG5cblx0XHRcdHJldHVybiAxIC0gKC0tayAqIGsgKiBrICogayk7XG5cblx0XHR9LFxuXG5cdFx0SW5PdXQ6IGZ1bmN0aW9uIChrKSB7XG5cblx0XHRcdGlmICgoayAqPSAyKSA8IDEpIHtcblx0XHRcdFx0cmV0dXJuIDAuNSAqIGsgKiBrICogayAqIGs7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiAtIDAuNSAqICgoayAtPSAyKSAqIGsgKiBrICogayAtIDIpO1xuXG5cdFx0fVxuXG5cdH0sXG5cblx0UXVpbnRpYzoge1xuXG5cdFx0SW46IGZ1bmN0aW9uIChrKSB7XG5cblx0XHRcdHJldHVybiBrICogayAqIGsgKiBrICogaztcblxuXHRcdH0sXG5cblx0XHRPdXQ6IGZ1bmN0aW9uIChrKSB7XG5cblx0XHRcdHJldHVybiAtLWsgKiBrICogayAqIGsgKiBrICsgMTtcblxuXHRcdH0sXG5cblx0XHRJbk91dDogZnVuY3Rpb24gKGspIHtcblxuXHRcdFx0aWYgKChrICo9IDIpIDwgMSkge1xuXHRcdFx0XHRyZXR1cm4gMC41ICogayAqIGsgKiBrICogayAqIGs7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiAwLjUgKiAoKGsgLT0gMikgKiBrICogayAqIGsgKiBrICsgMik7XG5cblx0XHR9XG5cblx0fSxcblxuXHRTaW51c29pZGFsOiB7XG5cblx0XHRJbjogZnVuY3Rpb24gKGspIHtcblxuXHRcdFx0cmV0dXJuIDEgLSBNYXRoLmNvcyhrICogTWF0aC5QSSAvIDIpO1xuXG5cdFx0fSxcblxuXHRcdE91dDogZnVuY3Rpb24gKGspIHtcblxuXHRcdFx0cmV0dXJuIE1hdGguc2luKGsgKiBNYXRoLlBJIC8gMik7XG5cblx0XHR9LFxuXG5cdFx0SW5PdXQ6IGZ1bmN0aW9uIChrKSB7XG5cblx0XHRcdHJldHVybiAwLjUgKiAoMSAtIE1hdGguY29zKE1hdGguUEkgKiBrKSk7XG5cblx0XHR9XG5cblx0fSxcblxuXHRFeHBvbmVudGlhbDoge1xuXG5cdFx0SW46IGZ1bmN0aW9uIChrKSB7XG5cblx0XHRcdHJldHVybiBrID09PSAwID8gMCA6IE1hdGgucG93KDEwMjQsIGsgLSAxKTtcblxuXHRcdH0sXG5cblx0XHRPdXQ6IGZ1bmN0aW9uIChrKSB7XG5cblx0XHRcdHJldHVybiBrID09PSAxID8gMSA6IDEgLSBNYXRoLnBvdygyLCAtIDEwICogayk7XG5cblx0XHR9LFxuXG5cdFx0SW5PdXQ6IGZ1bmN0aW9uIChrKSB7XG5cblx0XHRcdGlmIChrID09PSAwKSB7XG5cdFx0XHRcdHJldHVybiAwO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoayA9PT0gMSkge1xuXHRcdFx0XHRyZXR1cm4gMTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKChrICo9IDIpIDwgMSkge1xuXHRcdFx0XHRyZXR1cm4gMC41ICogTWF0aC5wb3coMTAyNCwgayAtIDEpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gMC41ICogKC0gTWF0aC5wb3coMiwgLSAxMCAqIChrIC0gMSkpICsgMik7XG5cblx0XHR9XG5cblx0fSxcblxuXHRDaXJjdWxhcjoge1xuXG5cdFx0SW46IGZ1bmN0aW9uIChrKSB7XG5cblx0XHRcdHJldHVybiAxIC0gTWF0aC5zcXJ0KDEgLSBrICogayk7XG5cblx0XHR9LFxuXG5cdFx0T3V0OiBmdW5jdGlvbiAoaykge1xuXG5cdFx0XHRyZXR1cm4gTWF0aC5zcXJ0KDEgLSAoLS1rICogaykpO1xuXG5cdFx0fSxcblxuXHRcdEluT3V0OiBmdW5jdGlvbiAoaykge1xuXG5cdFx0XHRpZiAoKGsgKj0gMikgPCAxKSB7XG5cdFx0XHRcdHJldHVybiAtIDAuNSAqIChNYXRoLnNxcnQoMSAtIGsgKiBrKSAtIDEpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gMC41ICogKE1hdGguc3FydCgxIC0gKGsgLT0gMikgKiBrKSArIDEpO1xuXG5cdFx0fVxuXG5cdH0sXG5cblx0RWxhc3RpYzoge1xuXG5cdFx0SW46IGZ1bmN0aW9uIChrKSB7XG5cblx0XHRcdGlmIChrID09PSAwKSB7XG5cdFx0XHRcdHJldHVybiAwO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoayA9PT0gMSkge1xuXHRcdFx0XHRyZXR1cm4gMTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIC1NYXRoLnBvdygyLCAxMCAqIChrIC0gMSkpICogTWF0aC5zaW4oKGsgLSAxLjEpICogNSAqIE1hdGguUEkpO1xuXG5cdFx0fSxcblxuXHRcdE91dDogZnVuY3Rpb24gKGspIHtcblxuXHRcdFx0aWYgKGsgPT09IDApIHtcblx0XHRcdFx0cmV0dXJuIDA7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChrID09PSAxKSB7XG5cdFx0XHRcdHJldHVybiAxO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gTWF0aC5wb3coMiwgLTEwICogaykgKiBNYXRoLnNpbigoayAtIDAuMSkgKiA1ICogTWF0aC5QSSkgKyAxO1xuXG5cdFx0fSxcblxuXHRcdEluT3V0OiBmdW5jdGlvbiAoaykge1xuXG5cdFx0XHRpZiAoayA9PT0gMCkge1xuXHRcdFx0XHRyZXR1cm4gMDtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGsgPT09IDEpIHtcblx0XHRcdFx0cmV0dXJuIDE7XG5cdFx0XHR9XG5cblx0XHRcdGsgKj0gMjtcblxuXHRcdFx0aWYgKGsgPCAxKSB7XG5cdFx0XHRcdHJldHVybiAtMC41ICogTWF0aC5wb3coMiwgMTAgKiAoayAtIDEpKSAqIE1hdGguc2luKChrIC0gMS4xKSAqIDUgKiBNYXRoLlBJKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIDAuNSAqIE1hdGgucG93KDIsIC0xMCAqIChrIC0gMSkpICogTWF0aC5zaW4oKGsgLSAxLjEpICogNSAqIE1hdGguUEkpICsgMTtcblxuXHRcdH1cblxuXHR9LFxuXG5cdEJhY2s6IHtcblxuXHRcdEluOiBmdW5jdGlvbiAoaykge1xuXG5cdFx0XHR2YXIgcyA9IDEuNzAxNTg7XG5cblx0XHRcdHJldHVybiBrICogayAqICgocyArIDEpICogayAtIHMpO1xuXG5cdFx0fSxcblxuXHRcdE91dDogZnVuY3Rpb24gKGspIHtcblxuXHRcdFx0dmFyIHMgPSAxLjcwMTU4O1xuXG5cdFx0XHRyZXR1cm4gLS1rICogayAqICgocyArIDEpICogayArIHMpICsgMTtcblxuXHRcdH0sXG5cblx0XHRJbk91dDogZnVuY3Rpb24gKGspIHtcblxuXHRcdFx0dmFyIHMgPSAxLjcwMTU4ICogMS41MjU7XG5cblx0XHRcdGlmICgoayAqPSAyKSA8IDEpIHtcblx0XHRcdFx0cmV0dXJuIDAuNSAqIChrICogayAqICgocyArIDEpICogayAtIHMpKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIDAuNSAqICgoayAtPSAyKSAqIGsgKiAoKHMgKyAxKSAqIGsgKyBzKSArIDIpO1xuXG5cdFx0fVxuXG5cdH0sXG5cblx0Qm91bmNlOiB7XG5cblx0XHRJbjogZnVuY3Rpb24gKGspIHtcblxuXHRcdFx0cmV0dXJuIDEgLSBUV0VFTi5FYXNpbmcuQm91bmNlLk91dCgxIC0gayk7XG5cblx0XHR9LFxuXG5cdFx0T3V0OiBmdW5jdGlvbiAoaykge1xuXG5cdFx0XHRpZiAoayA8ICgxIC8gMi43NSkpIHtcblx0XHRcdFx0cmV0dXJuIDcuNTYyNSAqIGsgKiBrO1xuXHRcdFx0fSBlbHNlIGlmIChrIDwgKDIgLyAyLjc1KSkge1xuXHRcdFx0XHRyZXR1cm4gNy41NjI1ICogKGsgLT0gKDEuNSAvIDIuNzUpKSAqIGsgKyAwLjc1O1xuXHRcdFx0fSBlbHNlIGlmIChrIDwgKDIuNSAvIDIuNzUpKSB7XG5cdFx0XHRcdHJldHVybiA3LjU2MjUgKiAoayAtPSAoMi4yNSAvIDIuNzUpKSAqIGsgKyAwLjkzNzU7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gNy41NjI1ICogKGsgLT0gKDIuNjI1IC8gMi43NSkpICogayArIDAuOTg0Mzc1O1xuXHRcdFx0fVxuXG5cdFx0fSxcblxuXHRcdEluT3V0OiBmdW5jdGlvbiAoaykge1xuXG5cdFx0XHRpZiAoayA8IDAuNSkge1xuXHRcdFx0XHRyZXR1cm4gVFdFRU4uRWFzaW5nLkJvdW5jZS5JbihrICogMikgKiAwLjU7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBUV0VFTi5FYXNpbmcuQm91bmNlLk91dChrICogMiAtIDEpICogMC41ICsgMC41O1xuXG5cdFx0fVxuXG5cdH1cblxufTtcblxuVFdFRU4uSW50ZXJwb2xhdGlvbiA9IHtcblxuXHRMaW5lYXI6IGZ1bmN0aW9uICh2LCBrKSB7XG5cblx0XHR2YXIgbSA9IHYubGVuZ3RoIC0gMTtcblx0XHR2YXIgZiA9IG0gKiBrO1xuXHRcdHZhciBpID0gTWF0aC5mbG9vcihmKTtcblx0XHR2YXIgZm4gPSBUV0VFTi5JbnRlcnBvbGF0aW9uLlV0aWxzLkxpbmVhcjtcblxuXHRcdGlmIChrIDwgMCkge1xuXHRcdFx0cmV0dXJuIGZuKHZbMF0sIHZbMV0sIGYpO1xuXHRcdH1cblxuXHRcdGlmIChrID4gMSkge1xuXHRcdFx0cmV0dXJuIGZuKHZbbV0sIHZbbSAtIDFdLCBtIC0gZik7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZuKHZbaV0sIHZbaSArIDEgPiBtID8gbSA6IGkgKyAxXSwgZiAtIGkpO1xuXG5cdH0sXG5cblx0QmV6aWVyOiBmdW5jdGlvbiAodiwgaykge1xuXG5cdFx0dmFyIGIgPSAwO1xuXHRcdHZhciBuID0gdi5sZW5ndGggLSAxO1xuXHRcdHZhciBwdyA9IE1hdGgucG93O1xuXHRcdHZhciBibiA9IFRXRUVOLkludGVycG9sYXRpb24uVXRpbHMuQmVybnN0ZWluO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPD0gbjsgaSsrKSB7XG5cdFx0XHRiICs9IHB3KDEgLSBrLCBuIC0gaSkgKiBwdyhrLCBpKSAqIHZbaV0gKiBibihuLCBpKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gYjtcblxuXHR9LFxuXG5cdENhdG11bGxSb206IGZ1bmN0aW9uICh2LCBrKSB7XG5cblx0XHR2YXIgbSA9IHYubGVuZ3RoIC0gMTtcblx0XHR2YXIgZiA9IG0gKiBrO1xuXHRcdHZhciBpID0gTWF0aC5mbG9vcihmKTtcblx0XHR2YXIgZm4gPSBUV0VFTi5JbnRlcnBvbGF0aW9uLlV0aWxzLkNhdG11bGxSb207XG5cblx0XHRpZiAodlswXSA9PT0gdlttXSkge1xuXG5cdFx0XHRpZiAoayA8IDApIHtcblx0XHRcdFx0aSA9IE1hdGguZmxvb3IoZiA9IG0gKiAoMSArIGspKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGZuKHZbKGkgLSAxICsgbSkgJSBtXSwgdltpXSwgdlsoaSArIDEpICUgbV0sIHZbKGkgKyAyKSAlIG1dLCBmIC0gaSk7XG5cblx0XHR9IGVsc2Uge1xuXG5cdFx0XHRpZiAoayA8IDApIHtcblx0XHRcdFx0cmV0dXJuIHZbMF0gLSAoZm4odlswXSwgdlswXSwgdlsxXSwgdlsxXSwgLWYpIC0gdlswXSk7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChrID4gMSkge1xuXHRcdFx0XHRyZXR1cm4gdlttXSAtIChmbih2W21dLCB2W21dLCB2W20gLSAxXSwgdlttIC0gMV0sIGYgLSBtKSAtIHZbbV0pO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gZm4odltpID8gaSAtIDEgOiAwXSwgdltpXSwgdlttIDwgaSArIDEgPyBtIDogaSArIDFdLCB2W20gPCBpICsgMiA/IG0gOiBpICsgMl0sIGYgLSBpKTtcblxuXHRcdH1cblxuXHR9LFxuXG5cdFV0aWxzOiB7XG5cblx0XHRMaW5lYXI6IGZ1bmN0aW9uIChwMCwgcDEsIHQpIHtcblxuXHRcdFx0cmV0dXJuIChwMSAtIHAwKSAqIHQgKyBwMDtcblxuXHRcdH0sXG5cblx0XHRCZXJuc3RlaW46IGZ1bmN0aW9uIChuLCBpKSB7XG5cblx0XHRcdHZhciBmYyA9IFRXRUVOLkludGVycG9sYXRpb24uVXRpbHMuRmFjdG9yaWFsO1xuXG5cdFx0XHRyZXR1cm4gZmMobikgLyBmYyhpKSAvIGZjKG4gLSBpKTtcblxuXHRcdH0sXG5cblx0XHRGYWN0b3JpYWw6IChmdW5jdGlvbiAoKSB7XG5cblx0XHRcdHZhciBhID0gWzFdO1xuXG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24gKG4pIHtcblxuXHRcdFx0XHR2YXIgcyA9IDE7XG5cblx0XHRcdFx0aWYgKGFbbl0pIHtcblx0XHRcdFx0XHRyZXR1cm4gYVtuXTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGZvciAodmFyIGkgPSBuOyBpID4gMTsgaS0tKSB7XG5cdFx0XHRcdFx0cyAqPSBpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0YVtuXSA9IHM7XG5cdFx0XHRcdHJldHVybiBzO1xuXG5cdFx0XHR9O1xuXG5cdFx0fSkoKSxcblxuXHRcdENhdG11bGxSb206IGZ1bmN0aW9uIChwMCwgcDEsIHAyLCBwMywgdCkge1xuXG5cdFx0XHR2YXIgdjAgPSAocDIgLSBwMCkgKiAwLjU7XG5cdFx0XHR2YXIgdjEgPSAocDMgLSBwMSkgKiAwLjU7XG5cdFx0XHR2YXIgdDIgPSB0ICogdDtcblx0XHRcdHZhciB0MyA9IHQgKiB0MjtcblxuXHRcdFx0cmV0dXJuICgyICogcDEgLSAyICogcDIgKyB2MCArIHYxKSAqIHQzICsgKC0gMyAqIHAxICsgMyAqIHAyIC0gMiAqIHYwIC0gdjEpICogdDIgKyB2MCAqIHQgKyBwMTtcblxuXHRcdH1cblxuXHR9XG5cbn07XG5cbi8vIFVNRCAoVW5pdmVyc2FsIE1vZHVsZSBEZWZpbml0aW9uKVxuKGZ1bmN0aW9uIChyb290KSB7XG5cblx0aWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuXG5cdFx0Ly8gQU1EXG5cdFx0ZGVmaW5lKFtdLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gVFdFRU47XG5cdFx0fSk7XG5cblx0fSBlbHNlIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpIHtcblxuXHRcdC8vIE5vZGUuanNcblx0XHRtb2R1bGUuZXhwb3J0cyA9IFRXRUVOO1xuXG5cdH0gZWxzZSBpZiAocm9vdCAhPT0gdW5kZWZpbmVkKSB7XG5cblx0XHQvLyBHbG9iYWwgdmFyaWFibGVcblx0XHRyb290LlRXRUVOID0gVFdFRU47XG5cblx0fVxuXG59KSh0aGlzKTtcbiIsImltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcbmltcG9ydCB7IERhdGFJbWFnZSB9IGZyb20gJy4uL0RhdGFJbWFnZSc7XG5pbXBvcnQgeyBNT0RFUyB9IGZyb20gJy4uL0NvbnN0YW50cyc7XG5pbXBvcnQgeyBUZXh0dXJlTG9hZGVyIH0gZnJvbSAnLi4vbG9hZGVycy9UZXh0dXJlTG9hZGVyJztcbmltcG9ydCBUV0VFTiBmcm9tICdAdHdlZW5qcy90d2Vlbi5qcyc7XG5cbi8qKlxuICogQGNsYXNzZGVzYyBJbmZvcm1hdGlvbiBzcG90IGF0dGFjaGVkIHRvIHBhbm9yYW1hXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7bnVtYmVyfSBbc2NhbGU9MzAwXSAtIERlZmF1bHQgc2NhbGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBbaW1hZ2VTcmM9UEFOT0xFTlMuRGF0YUltYWdlLkluZm9dIC0gSW1hZ2Ugb3ZlcmxheSBpbmZvXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFthbmltYXRlZD10cnVlXSAtIEVuYWJsZSBkZWZhdWx0IGhvdmVyIGFuaW1hdGlvblxuICovXG5mdW5jdGlvbiBJbmZvc3BvdCAoIHNjYWxlID0gMzAwLCBpbWFnZVNyYywgYW5pbWF0ZWQgKSB7XG5cdFxuICAgIGNvbnN0IGR1cmF0aW9uID0gNTAwLCBzY2FsZUZhY3RvciA9IDEuMztcblxuICAgIGltYWdlU3JjID0gaW1hZ2VTcmMgfHwgRGF0YUltYWdlLkluZm87XG5cbiAgICBUSFJFRS5TcHJpdGUuY2FsbCggdGhpcyApO1xuXG4gICAgdGhpcy50eXBlID0gJ2luZm9zcG90JztcblxuICAgIHRoaXMuYW5pbWF0ZWQgPSBhbmltYXRlZCAhPT0gdW5kZWZpbmVkID8gYW5pbWF0ZWQgOiB0cnVlO1xuICAgIHRoaXMuaXNIb3ZlcmluZyA9IGZhbHNlO1xuXG4gICAgLypcbiAgICAgKiBUT0RPOiBUaHJlZS5qcyBidWcgaG90Zml4IGZvciBzcHJpdGUgcmF5Y2FzdGluZyByMTA0XG4gICAgICogaHR0cHM6Ly9naXRodWIuY29tL21yZG9vYi90aHJlZS5qcy9pc3N1ZXMvMTQ2MjRcbiAgICAgKi9cbiAgICB0aGlzLmZydXN0dW1DdWxsZWQgPSBmYWxzZTtcblxuICAgIHRoaXMuZWxlbWVudCA9IG51bGw7XG4gICAgdGhpcy50b1Bhbm9yYW1hID0gbnVsbDtcbiAgICB0aGlzLmN1cnNvclN0eWxlID0gbnVsbDtcblxuICAgIHRoaXMubW9kZSA9IE1PREVTLk5PUk1BTDtcblxuICAgIHRoaXMuc2NhbGUuc2V0KCBzY2FsZSwgc2NhbGUsIDEgKTtcbiAgICB0aGlzLnJvdGF0aW9uLnkgPSBNYXRoLlBJO1xuXG4gICAgdGhpcy5jb250YWluZXIgPSBudWxsO1xuXG4gICAgdGhpcy5vcmlnaW5hbFJheWNhc3QgPSB0aGlzLnJheWNhc3Q7XG5cbiAgICAvLyBFdmVudCBIYW5kbGVyXG4gICAgdGhpcy5IQU5ETEVSX0ZPQ1VTID0gbnVsbDtcdFxuXG4gICAgdGhpcy5tYXRlcmlhbC5zaWRlID0gVEhSRUUuRG91YmxlU2lkZTtcbiAgICB0aGlzLm1hdGVyaWFsLmRlcHRoVGVzdCA9IGZhbHNlO1xuICAgIHRoaXMubWF0ZXJpYWwudHJhbnNwYXJlbnQgPSB0cnVlO1xuICAgIHRoaXMubWF0ZXJpYWwub3BhY2l0eSA9IDA7XG5cbiAgICB0aGlzLnNjYWxlVXBBbmltYXRpb24gPSBuZXcgVFdFRU4uVHdlZW4oKTtcbiAgICB0aGlzLnNjYWxlRG93bkFuaW1hdGlvbiA9IG5ldyBUV0VFTi5Ud2VlbigpO1xuXG5cbiAgICBjb25zdCBwb3N0TG9hZCA9IGZ1bmN0aW9uICggdGV4dHVyZSApIHtcblxuICAgICAgICBpZiAoICF0aGlzLm1hdGVyaWFsICkgeyByZXR1cm47IH1cblxuICAgICAgICBjb25zdCByYXRpbyA9IHRleHR1cmUuaW1hZ2Uud2lkdGggLyB0ZXh0dXJlLmltYWdlLmhlaWdodDtcbiAgICAgICAgY29uc3QgdGV4dHVyZVNjYWxlID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcblxuICAgICAgICB0ZXh0dXJlLmltYWdlLndpZHRoID0gdGV4dHVyZS5pbWFnZS5uYXR1cmFsV2lkdGggfHwgNjQ7XG4gICAgICAgIHRleHR1cmUuaW1hZ2UuaGVpZ2h0ID0gdGV4dHVyZS5pbWFnZS5uYXR1cmFsSGVpZ2h0IHx8IDY0O1xuXG4gICAgICAgIHRoaXMuc2NhbGUuc2V0KCByYXRpbyAqIHNjYWxlLCBzY2FsZSwgMSApO1xuXG4gICAgICAgIHRleHR1cmVTY2FsZS5jb3B5KCB0aGlzLnNjYWxlICk7XG5cbiAgICAgICAgdGhpcy5zY2FsZVVwQW5pbWF0aW9uID0gbmV3IFRXRUVOLlR3ZWVuKCB0aGlzLnNjYWxlIClcbiAgICAgICAgICAgIC50byggeyB4OiB0ZXh0dXJlU2NhbGUueCAqIHNjYWxlRmFjdG9yLCB5OiB0ZXh0dXJlU2NhbGUueSAqIHNjYWxlRmFjdG9yIH0sIGR1cmF0aW9uIClcbiAgICAgICAgICAgIC5lYXNpbmcoIFRXRUVOLkVhc2luZy5FbGFzdGljLk91dCApO1xuXG4gICAgICAgIHRoaXMuc2NhbGVEb3duQW5pbWF0aW9uID0gbmV3IFRXRUVOLlR3ZWVuKCB0aGlzLnNjYWxlIClcbiAgICAgICAgICAgIC50byggeyB4OiB0ZXh0dXJlU2NhbGUueCwgeTogdGV4dHVyZVNjYWxlLnkgfSwgZHVyYXRpb24gKVxuICAgICAgICAgICAgLmVhc2luZyggVFdFRU4uRWFzaW5nLkVsYXN0aWMuT3V0ICk7XG5cbiAgICAgICAgdGhpcy5tYXRlcmlhbC5tYXAgPSB0ZXh0dXJlO1xuICAgICAgICB0aGlzLm1hdGVyaWFsLm5lZWRzVXBkYXRlID0gdHJ1ZTtcblxuICAgIH0uYmluZCggdGhpcyApO1xuXG4gICAgLy8gQWRkIHNob3cgYW5kIGhpZGUgYW5pbWF0aW9uc1xuICAgIHRoaXMuc2hvd0FuaW1hdGlvbiA9IG5ldyBUV0VFTi5Ud2VlbiggdGhpcy5tYXRlcmlhbCApXG4gICAgICAgIC50byggeyBvcGFjaXR5OiAxIH0sIGR1cmF0aW9uIClcbiAgICAgICAgLm9uU3RhcnQoIHRoaXMuZW5hYmxlUmF5Y2FzdC5iaW5kKCB0aGlzLCB0cnVlICkgKVxuICAgICAgICAub25TdGFydCggKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KHsgdHlwZTogJ3Nob3ctc3RhcnQnIH0pO1xuICAgICAgICB9IClcbiAgICAgICAgLm9uQ29tcGxldGUoICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCh7IHR5cGU6ICdzaG93LWNvbXBsZXRlJyB9KTtcbiAgICAgICAgfSApXG4gICAgICAgIC5lYXNpbmcoIFRXRUVOLkVhc2luZy5RdWFydGljLk91dCApO1xuXG4gICAgdGhpcy5oaWRlQW5pbWF0aW9uID0gbmV3IFRXRUVOLlR3ZWVuKCB0aGlzLm1hdGVyaWFsIClcbiAgICAgICAgLnRvKCB7IG9wYWNpdHk6IDAgfSwgZHVyYXRpb24gKVxuICAgICAgICAub25TdGFydCggdGhpcy5lbmFibGVSYXljYXN0LmJpbmQoIHRoaXMsIGZhbHNlICkgKVxuICAgICAgICAub25TdGFydCggKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KHsgdHlwZTogJ2hpZGUtc3RhcnQnIH0pO1xuICAgICAgICB9IClcbiAgICAgICAgLm9uQ29tcGxldGUoICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCh7IHR5cGU6ICdoaWRlLWNvbXBsZXRlJyB9KTtcbiAgICAgICAgfSApXG4gICAgICAgIC5lYXNpbmcoIFRXRUVOLkVhc2luZy5RdWFydGljLk91dCApO1xuXG4gICAgLy8gQXR0YWNoIGV2ZW50IGxpc3RlbmVyc1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgdGhpcy5vbkNsaWNrICk7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCAnaG92ZXInLCB0aGlzLm9uSG92ZXIgKTtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoICdob3ZlcmVudGVyJywgdGhpcy5vbkhvdmVyU3RhcnQgKTtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoICdob3ZlcmxlYXZlJywgdGhpcy5vbkhvdmVyRW5kICk7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCAncGFub2xlbnMtZHVhbC1leWUtZWZmZWN0JywgdGhpcy5vbkR1YWxFeWVFZmZlY3QgKTtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoICdwYW5vbGVucy1jb250YWluZXInLCB0aGlzLnNldENvbnRhaW5lci5iaW5kKCB0aGlzICkgKTtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoICdkaXNtaXNzJywgdGhpcy5vbkRpc21pc3MgKTtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoICdwYW5vbGVucy1pbmZvc3BvdC1mb2N1cycsIHRoaXMuc2V0Rm9jdXNNZXRob2QgKTtcblxuICAgIFRleHR1cmVMb2FkZXIubG9hZCggaW1hZ2VTcmMsIHBvc3RMb2FkICk7XHRcblxufTtcblxuSW5mb3Nwb3QucHJvdG90eXBlID0gT2JqZWN0LmFzc2lnbiggT2JqZWN0LmNyZWF0ZSggVEhSRUUuU3ByaXRlLnByb3RvdHlwZSApLCB7XG5cbiAgICBjb25zdHJ1Y3RvcjogSW5mb3Nwb3QsXG5cbiAgICAvKipcbiAgICAgKiBTZXQgaW5mb3Nwb3QgY29udGFpbmVyXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudHxvYmplY3R9IGRhdGEgLSBEYXRhIHdpdGggY29udGFpbmVyIGluZm9ybWF0aW9uXG4gICAgICogQG1lbWJlck9mIEluZm9zcG90XG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgc2V0Q29udGFpbmVyOiBmdW5jdGlvbiAoIGRhdGEgKSB7XG5cbiAgICAgICAgbGV0IGNvbnRhaW5lcjtcblx0XG4gICAgICAgIGlmICggZGF0YSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ICkge1xuXHRcbiAgICAgICAgICAgIGNvbnRhaW5lciA9IGRhdGE7XG5cdFxuICAgICAgICB9IGVsc2UgaWYgKCBkYXRhICYmIGRhdGEuY29udGFpbmVyICkge1xuXHRcbiAgICAgICAgICAgIGNvbnRhaW5lciA9IGRhdGEuY29udGFpbmVyO1xuXHRcbiAgICAgICAgfVxuXHRcbiAgICAgICAgLy8gQXBwZW5kIGVsZW1lbnQgaWYgZXhpc3RzXG4gICAgICAgIGlmICggY29udGFpbmVyICYmIHRoaXMuZWxlbWVudCApIHtcblx0XG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoIHRoaXMuZWxlbWVudCApO1xuXHRcbiAgICAgICAgfVxuXHRcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XG5cdFxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBHZXQgY29udGFpbmVyXG4gICAgICogQG1lbWJlck9mIEluZm9zcG90XG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHJldHVybiB7SFRNTEVsZW1lbnR9IC0gVGhlIGNvbnRhaW5lciBvZiB0aGlzIGluZm9zcG90XG4gICAgICovXG4gICAgZ2V0Q29udGFpbmVyOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGFpbmVyO1xuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFRoaXMgd2lsbCBiZSBjYWxsZWQgYnkgYSBjbGljayBldmVudFxuICAgICAqIFRyYW5zbGF0ZSBhbmQgbG9jayB0aGUgaG92ZXJpbmcgZWxlbWVudCBpZiBhbnlcbiAgICAgKiBAcGFyYW0gIHtvYmplY3R9IGV2ZW50IC0gRXZlbnQgY29udGFpbmluZyBtb3VzZUV2ZW50IHdpdGggY2xpZW50WCBhbmQgY2xpZW50WVxuICAgICAqIEBtZW1iZXJPZiBJbmZvc3BvdFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIG9uQ2xpY2s6IGZ1bmN0aW9uICggZXZlbnQgKSB7XG5cbiAgICAgICAgaWYgKCB0aGlzLmVsZW1lbnQgJiYgdGhpcy5nZXRDb250YWluZXIoKSApIHtcblxuICAgICAgICAgICAgdGhpcy5vbkhvdmVyU3RhcnQoIGV2ZW50ICk7XG5cbiAgICAgICAgICAgIC8vIExvY2sgZWxlbWVudFxuICAgICAgICAgICAgdGhpcy5sb2NrSG92ZXJFbGVtZW50KCk7XG5cbiAgICAgICAgfVxuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIERpc21pc3MgY3VycmVudCBlbGVtZW50IGlmIGFueVxuICAgICAqIEBwYXJhbSAge29iamVjdH0gZXZlbnQgLSBEaXNtaXNzIGV2ZW50XG4gICAgICogQG1lbWJlck9mIEluZm9zcG90XG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgb25EaXNtaXNzOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgaWYgKCB0aGlzLmVsZW1lbnQgKSB7XG5cbiAgICAgICAgICAgIHRoaXMudW5sb2NrSG92ZXJFbGVtZW50KCk7XG4gICAgICAgICAgICB0aGlzLm9uSG92ZXJFbmQoKTtcblxuICAgICAgICB9XG5cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVGhpcyB3aWxsIGJlIGNhbGxlZCBieSBhIG1vdXNlIGhvdmVyIGV2ZW50XG4gICAgICogVHJhbnNsYXRlIHRoZSBob3ZlcmluZyBlbGVtZW50IGlmIGFueVxuICAgICAqIEBwYXJhbSAge29iamVjdH0gZXZlbnQgLSBFdmVudCBjb250YWluaW5nIG1vdXNlRXZlbnQgd2l0aCBjbGllbnRYIGFuZCBjbGllbnRZXG4gICAgICogQG1lbWJlck9mIEluZm9zcG90XG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgb25Ib3ZlcjogZnVuY3Rpb24gKCkge30sXG5cbiAgICAvKipcbiAgICAgKiBUaGlzIHdpbGwgYmUgY2FsbGVkIG9uIGEgbW91c2UgaG92ZXIgc3RhcnRcbiAgICAgKiBTZXRzIGN1cnNvciBzdHlsZSB0byAncG9pbnRlcicsIGRpc3BsYXkgdGhlIGVsZW1lbnQgYW5kIHNjYWxlIHVwIHRoZSBpbmZvc3BvdFxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBldmVudFxuICAgICAqIEBtZW1iZXJPZiBJbmZvc3BvdFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIG9uSG92ZXJTdGFydDogZnVuY3Rpb24gKCBldmVudCApIHtcblxuICAgICAgICBpZiAoICF0aGlzLmdldENvbnRhaW5lcigpICkgeyByZXR1cm47IH1cblxuICAgICAgICBjb25zdCBjdXJzb3JTdHlsZSA9IHRoaXMuY3Vyc29yU3R5bGUgfHwgKCB0aGlzLm1vZGUgPT09IE1PREVTLk5PUk1BTCA/ICdwb2ludGVyJyA6ICdkZWZhdWx0JyApO1xuICAgICAgICBjb25zdCB7IHNjYWxlRG93bkFuaW1hdGlvbiwgc2NhbGVVcEFuaW1hdGlvbiwgZWxlbWVudCB9ID0gdGhpcztcblxuICAgICAgICB0aGlzLmlzSG92ZXJpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS5jdXJzb3IgPSBjdXJzb3JTdHlsZTtcblx0XHRcbiAgICAgICAgaWYgKCB0aGlzLmFuaW1hdGVkICkge1xuXG4gICAgICAgICAgICBzY2FsZURvd25BbmltYXRpb24uc3RvcCgpO1xuICAgICAgICAgICAgc2NhbGVVcEFuaW1hdGlvbi5zdGFydCgpO1xuXG4gICAgICAgIH1cblx0XHRcbiAgICAgICAgaWYgKCBlbGVtZW50ICYmIGV2ZW50Lm1vdXNlRXZlbnQuY2xpZW50WCA+PSAwICYmIGV2ZW50Lm1vdXNlRXZlbnQuY2xpZW50WSA+PSAwICkge1xuXG4gICAgICAgICAgICBjb25zdCB7IGxlZnQsIHJpZ2h0LCBzdHlsZSB9ID0gZWxlbWVudDtcblxuICAgICAgICAgICAgaWYgKCB0aGlzLm1vZGUgPT09IE1PREVTLkNBUkRCT0FSRCB8fCB0aGlzLm1vZGUgPT09IE1PREVTLlNURVJFTyApIHtcblxuICAgICAgICAgICAgICAgIHN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgbGVmdC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgICAgICByaWdodC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblxuICAgICAgICAgICAgICAgIC8vIFN0b3JlIGVsZW1lbnQgd2lkdGggZm9yIHJlZmVyZW5jZVxuICAgICAgICAgICAgICAgIGVsZW1lbnQuX3dpZHRoID0gbGVmdC5jbGllbnRXaWR0aDtcbiAgICAgICAgICAgICAgICBlbGVtZW50Ll9oZWlnaHQgPSBsZWZ0LmNsaWVudEhlaWdodDtcblxuICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgIHN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgICAgIGlmICggbGVmdCApIHsgbGVmdC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOyB9XG4gICAgICAgICAgICAgICAgaWYgKCByaWdodCApIHsgcmlnaHQuc3R5bGUuZGlzcGxheSA9ICdub25lJzsgfVxuXG4gICAgICAgICAgICAgICAgLy8gU3RvcmUgZWxlbWVudCB3aWR0aCBmb3IgcmVmZXJlbmNlXG4gICAgICAgICAgICAgICAgZWxlbWVudC5fd2lkdGggPSBlbGVtZW50LmNsaWVudFdpZHRoO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuX2hlaWdodCA9IGVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuXG4gICAgICAgICAgICB9XG5cdFx0XHRcbiAgICAgICAgfVxuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFRoaXMgd2lsbCBiZSBjYWxsZWQgb24gYSBtb3VzZSBob3ZlciBlbmRcbiAgICAgKiBTZXRzIGN1cnNvciBzdHlsZSB0byAnZGVmYXVsdCcsIGhpZGUgdGhlIGVsZW1lbnQgYW5kIHNjYWxlIGRvd24gdGhlIGluZm9zcG90XG4gICAgICogQG1lbWJlck9mIEluZm9zcG90XG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgb25Ib3ZlckVuZDogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGlmICggIXRoaXMuZ2V0Q29udGFpbmVyKCkgKSB7IHJldHVybjsgfVxuXG4gICAgICAgIGNvbnN0IHsgc2NhbGVEb3duQW5pbWF0aW9uLCBzY2FsZVVwQW5pbWF0aW9uLCBlbGVtZW50IH0gPSB0aGlzO1xuXG4gICAgICAgIHRoaXMuaXNIb3ZlcmluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS5jdXJzb3IgPSAnZGVmYXVsdCc7XG5cbiAgICAgICAgaWYgKCB0aGlzLmFuaW1hdGVkICkge1xuXG4gICAgICAgICAgICBzY2FsZVVwQW5pbWF0aW9uLnN0b3AoKTtcbiAgICAgICAgICAgIHNjYWxlRG93bkFuaW1hdGlvbi5zdGFydCgpO1xuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIGVsZW1lbnQgJiYgIXRoaXMuZWxlbWVudC5sb2NrZWQgKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IHsgbGVmdCwgcmlnaHQsIHN0eWxlIH0gPSBlbGVtZW50O1xuXG4gICAgICAgICAgICBzdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgaWYgKCBsZWZ0ICkgeyBsZWZ0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7IH1cbiAgICAgICAgICAgIGlmICggcmlnaHQgKSB7IHJpZ2h0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7IH1cblxuICAgICAgICAgICAgdGhpcy51bmxvY2tIb3ZlckVsZW1lbnQoKTtcblxuICAgICAgICB9XG5cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogT24gZHVhbCBleWUgZWZmZWN0IGhhbmRsZXJcbiAgICAgKiBDcmVhdGVzIGR1cGxpY2F0ZSBsZWZ0IGFuZCByaWdodCBlbGVtZW50XG4gICAgICogQHBhcmFtICB7b2JqZWN0fSBldmVudCAtIHBhbm9sZW5zLWR1YWwtZXllLWVmZmVjdCBldmVudFxuICAgICAqIEBtZW1iZXJPZiBJbmZvc3BvdFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIG9uRHVhbEV5ZUVmZmVjdDogZnVuY3Rpb24gKCBldmVudCApIHtcblx0XHRcbiAgICAgICAgaWYgKCAhdGhpcy5nZXRDb250YWluZXIoKSApIHsgcmV0dXJuOyB9XG5cbiAgICAgICAgbGV0IGVsZW1lbnQsIGhhbGZXaWR0aCwgaGFsZkhlaWdodDtcblxuICAgICAgICB0aGlzLm1vZGUgPSBldmVudC5tb2RlO1xuXG4gICAgICAgIGVsZW1lbnQgPSB0aGlzLmVsZW1lbnQ7XG5cbiAgICAgICAgaGFsZldpZHRoID0gdGhpcy5jb250YWluZXIuY2xpZW50V2lkdGggLyAyO1xuICAgICAgICBoYWxmSGVpZ2h0ID0gdGhpcy5jb250YWluZXIuY2xpZW50SGVpZ2h0IC8gMjtcblxuICAgICAgICBpZiAoICFlbGVtZW50ICkge1xuXG4gICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggIWVsZW1lbnQubGVmdCAmJiAhZWxlbWVudC5yaWdodCApIHtcblxuICAgICAgICAgICAgZWxlbWVudC5sZWZ0ID0gZWxlbWVudC5jbG9uZU5vZGUoIHRydWUgKTtcbiAgICAgICAgICAgIGVsZW1lbnQucmlnaHQgPSBlbGVtZW50LmNsb25lTm9kZSggdHJ1ZSApO1xuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIHRoaXMubW9kZSA9PT0gTU9ERVMuQ0FSREJPQVJEIHx8IHRoaXMubW9kZSA9PT0gTU9ERVMuU1RFUkVPICkge1xuXG4gICAgICAgICAgICBlbGVtZW50LmxlZnQuc3R5bGUuZGlzcGxheSA9IGVsZW1lbnQuc3R5bGUuZGlzcGxheTtcbiAgICAgICAgICAgIGVsZW1lbnQucmlnaHQuc3R5bGUuZGlzcGxheSA9IGVsZW1lbnQuc3R5bGUuZGlzcGxheTtcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBlbGVtZW50LmxlZnQuc3R5bGUuZGlzcGxheTtcbiAgICAgICAgICAgIGVsZW1lbnQubGVmdC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgZWxlbWVudC5yaWdodC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gICAgICAgIH1cblxuICAgICAgICAvLyBVcGRhdGUgZWxlbWVudHMgdHJhbnNsYXRpb25cbiAgICAgICAgdGhpcy50cmFuc2xhdGVFbGVtZW50KCBoYWxmV2lkdGgsIGhhbGZIZWlnaHQgKTtcblxuICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCggZWxlbWVudC5sZWZ0ICk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKCBlbGVtZW50LnJpZ2h0ICk7XG5cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVHJhbnNsYXRlIHRoZSBob3ZlcmluZyBlbGVtZW50IGJ5IGNzcyB0cmFuc2Zvcm1cbiAgICAgKiBAcGFyYW0gIHtudW1iZXJ9IHggLSBYIHBvc2l0aW9uIG9uIHRoZSB3aW5kb3cgc2NyZWVuXG4gICAgICogQHBhcmFtICB7bnVtYmVyfSB5IC0gWSBwb3NpdGlvbiBvbiB0aGUgd2luZG93IHNjcmVlblxuICAgICAqIEBtZW1iZXJPZiBJbmZvc3BvdFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIHRyYW5zbGF0ZUVsZW1lbnQ6IGZ1bmN0aW9uICggeCwgeSApIHtcblxuICAgICAgICBpZiAoICF0aGlzLmVsZW1lbnQuX3dpZHRoIHx8ICF0aGlzLmVsZW1lbnQuX2hlaWdodCB8fCAhdGhpcy5nZXRDb250YWluZXIoKSApIHtcblxuICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgbGVmdCwgdG9wLCBlbGVtZW50LCB3aWR0aCwgaGVpZ2h0LCBkZWx0YSwgY29udGFpbmVyO1xuXG4gICAgICAgIGNvbnRhaW5lciA9IHRoaXMuY29udGFpbmVyO1xuICAgICAgICBlbGVtZW50ID0gdGhpcy5lbGVtZW50O1xuICAgICAgICB3aWR0aCA9IGVsZW1lbnQuX3dpZHRoIC8gMjtcbiAgICAgICAgaGVpZ2h0ID0gZWxlbWVudC5faGVpZ2h0IC8gMjtcbiAgICAgICAgZGVsdGEgPSBlbGVtZW50LnZlcnRpY2FsRGVsdGEgIT09IHVuZGVmaW5lZCA/IGVsZW1lbnQudmVydGljYWxEZWx0YSA6IDQwO1xuXG4gICAgICAgIGxlZnQgPSB4IC0gd2lkdGg7XG4gICAgICAgIHRvcCA9IHkgLSBoZWlnaHQgLSBkZWx0YTtcblxuICAgICAgICBpZiAoICggdGhpcy5tb2RlID09PSBNT0RFUy5DQVJEQk9BUkQgfHwgdGhpcy5tb2RlID09PSBNT0RFUy5TVEVSRU8gKSBcblx0XHRcdFx0JiYgZWxlbWVudC5sZWZ0ICYmIGVsZW1lbnQucmlnaHRcblx0XHRcdFx0JiYgISggeCA9PT0gY29udGFpbmVyLmNsaWVudFdpZHRoIC8gMiAmJiB5ID09PSBjb250YWluZXIuY2xpZW50SGVpZ2h0IC8gMiApICkge1xuXG4gICAgICAgICAgICBsZWZ0ID0gY29udGFpbmVyLmNsaWVudFdpZHRoIC8gNCAtIHdpZHRoICsgKCB4IC0gY29udGFpbmVyLmNsaWVudFdpZHRoIC8gMiApO1xuICAgICAgICAgICAgdG9wID0gY29udGFpbmVyLmNsaWVudEhlaWdodCAvIDIgLSBoZWlnaHQgLSBkZWx0YSArICggeSAtIGNvbnRhaW5lci5jbGllbnRIZWlnaHQgLyAyICk7XG5cbiAgICAgICAgICAgIHRoaXMuc2V0RWxlbWVudFN0eWxlKCAndHJhbnNmb3JtJywgZWxlbWVudC5sZWZ0LCAndHJhbnNsYXRlKCcgKyBsZWZ0ICsgJ3B4LCAnICsgdG9wICsgJ3B4KScgKTtcblxuICAgICAgICAgICAgbGVmdCArPSBjb250YWluZXIuY2xpZW50V2lkdGggLyAyO1xuXG4gICAgICAgICAgICB0aGlzLnNldEVsZW1lbnRTdHlsZSggJ3RyYW5zZm9ybScsIGVsZW1lbnQucmlnaHQsICd0cmFuc2xhdGUoJyArIGxlZnQgKyAncHgsICcgKyB0b3AgKyAncHgpJyApO1xuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIHRoaXMuc2V0RWxlbWVudFN0eWxlKCAndHJhbnNmb3JtJywgZWxlbWVudCwgJ3RyYW5zbGF0ZSgnICsgbGVmdCArICdweCwgJyArIHRvcCArICdweCknICk7XG5cbiAgICAgICAgfVxuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNldCB2ZW5kb3Igc3BlY2lmaWMgY3NzXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgLSBDU1Mgc3R5bGUgbmFtZVxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgLSBUaGUgZWxlbWVudCB0byBiZSBtb2RpZmllZFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSAtIFN0eWxlIHZhbHVlXG4gICAgICogQG1lbWJlck9mIEluZm9zcG90XG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgc2V0RWxlbWVudFN0eWxlOiBmdW5jdGlvbiAoIHR5cGUsIGVsZW1lbnQsIHZhbHVlICkge1xuXG4gICAgICAgIGNvbnN0IHN0eWxlID0gZWxlbWVudC5zdHlsZTtcblxuICAgICAgICBpZiAoIHR5cGUgPT09ICd0cmFuc2Zvcm0nICkge1xuXG4gICAgICAgICAgICBzdHlsZS53ZWJraXRUcmFuc2Zvcm0gPSBzdHlsZS5tc1RyYW5zZm9ybSA9IHN0eWxlLnRyYW5zZm9ybSA9IHZhbHVlO1xuXG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTZXQgaG92ZXJpbmcgdGV4dCBjb250ZW50XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSBUZXh0IHRvIGJlIGRpc3BsYXllZFxuICAgICAqIEBtZW1iZXJPZiBJbmZvc3BvdFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIHNldFRleHQ6IGZ1bmN0aW9uICggdGV4dCApIHtcblxuICAgICAgICBpZiAoIHRoaXMuZWxlbWVudCApIHtcblxuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnRleHRDb250ZW50ID0gdGV4dDtcblxuICAgICAgICB9XG5cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2V0IGN1cnNvciBjc3Mgc3R5bGUgb24gaG92ZXJcbiAgICAgKiBAbWVtYmVyT2YgSW5mb3Nwb3RcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBzZXRDdXJzb3JIb3ZlclN0eWxlOiBmdW5jdGlvbiAoIHN0eWxlICkge1xuXG4gICAgICAgIHRoaXMuY3Vyc29yU3R5bGUgPSBzdHlsZTtcblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBBZGQgaG92ZXJpbmcgdGV4dCBlbGVtZW50XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSBUZXh0IHRvIGJlIGRpc3BsYXllZFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbZGVsdGE9NDBdIC0gVmVydGljYWwgZGVsdGEgdG8gdGhlIGluZm9zcG90XG4gICAgICogQG1lbWJlck9mIEluZm9zcG90XG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgYWRkSG92ZXJUZXh0OiBmdW5jdGlvbiAoIHRleHQsIGRlbHRhID0gNDAgKSB7XG5cbiAgICAgICAgaWYgKCAhdGhpcy5lbGVtZW50ICkge1xuXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnZGl2JyApO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuY29sb3IgPSAnI2ZmZic7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUudG9wID0gMDtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5tYXhXaWR0aCA9ICc1MCUnO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLm1heEhlaWdodCA9ICc1MCUnO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnRleHRTaGFkb3cgPSAnMCAwIDNweCAjMDAwMDAwJztcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5mb250RmFtaWx5ID0gJ1wiVHJlYnVjaGV0IE1TXCIsIEhlbHZldGljYSwgc2Fucy1zZXJpZic7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoICdwYW5vbGVucy1pbmZvc3BvdCcgKTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC52ZXJ0aWNhbERlbHRhID0gZGVsdGE7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0VGV4dCggdGV4dCApO1xuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEFkZCBob3ZlcmluZyBlbGVtZW50IGJ5IGNsb25pbmcgYW4gZWxlbWVudFxuICAgICAqIEBwYXJhbSB7SFRNTERPTUVsZW1lbnR9IGVsIC0gRWxlbWVudCB0byBiZSBjbG9uZWQgYW5kIGRpc3BsYXllZFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbZGVsdGE9NDBdIC0gVmVydGljYWwgZGVsdGEgdG8gdGhlIGluZm9zcG90XG4gICAgICogQG1lbWJlck9mIEluZm9zcG90XG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgYWRkSG92ZXJFbGVtZW50OiBmdW5jdGlvbiAoIGVsLCBkZWx0YSA9IDQwICkge1xuXG4gICAgICAgIGlmICggIXRoaXMuZWxlbWVudCApIHsgXG5cbiAgICAgICAgICAgIHRoaXMuZWxlbWVudCA9IGVsLmNsb25lTm9kZSggdHJ1ZSApO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUudG9wID0gMDtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCggJ3Bhbm9sZW5zLWluZm9zcG90JyApO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnZlcnRpY2FsRGVsdGEgPSBkZWx0YTtcblxuICAgICAgICB9XG5cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGhvdmVyaW5nIGVsZW1lbnRcbiAgICAgKiBAbWVtYmVyT2YgSW5mb3Nwb3RcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICByZW1vdmVIb3ZlckVsZW1lbnQ6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBpZiAoIHRoaXMuZWxlbWVudCApIHsgXG5cbiAgICAgICAgICAgIGlmICggdGhpcy5lbGVtZW50LmxlZnQgKSB7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVDaGlsZCggdGhpcy5lbGVtZW50LmxlZnQgKTtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQubGVmdCA9IG51bGw7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCB0aGlzLmVsZW1lbnQucmlnaHQgKSB7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVDaGlsZCggdGhpcy5lbGVtZW50LnJpZ2h0ICk7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LnJpZ2h0ID0gbnVsbDtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVDaGlsZCggdGhpcy5lbGVtZW50ICk7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQgPSBudWxsO1xuXG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBMb2NrIGhvdmVyaW5nIGVsZW1lbnRcbiAgICAgKiBAbWVtYmVyT2YgSW5mb3Nwb3RcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBsb2NrSG92ZXJFbGVtZW50OiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgaWYgKCB0aGlzLmVsZW1lbnQgKSB7IFxuXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQubG9ja2VkID0gdHJ1ZTtcblxuICAgICAgICB9XG5cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVW5sb2NrIGhvdmVyaW5nIGVsZW1lbnRcbiAgICAgKiBAbWVtYmVyT2YgSW5mb3Nwb3RcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICB1bmxvY2tIb3ZlckVsZW1lbnQ6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBpZiAoIHRoaXMuZWxlbWVudCApIHsgXG5cbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5sb2NrZWQgPSBmYWxzZTtcblxuICAgICAgICB9XG5cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogRW5hYmxlIHJheWNhc3RpbmdcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtlbmFibGVkPXRydWVdXG4gICAgICogQG1lbWJlck9mIEluZm9zcG90XG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgZW5hYmxlUmF5Y2FzdDogZnVuY3Rpb24gKCBlbmFibGVkID0gdHJ1ZSApIHtcblxuICAgICAgICBpZiAoIGVuYWJsZWQgKSB7XG5cbiAgICAgICAgICAgIHRoaXMucmF5Y2FzdCA9IHRoaXMub3JpZ2luYWxSYXljYXN0O1xuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIHRoaXMucmF5Y2FzdCA9ICgpID0+IHt9O1xuXG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTaG93IGluZm9zcG90XG4gICAgICogQHBhcmFtICB7bnVtYmVyfSBbZGVsYXk9MF0gLSBEZWxheSB0aW1lIHRvIHNob3dcbiAgICAgKiBAbWVtYmVyT2YgSW5mb3Nwb3RcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBzaG93OiBmdW5jdGlvbiAoIGRlbGF5ID0gMCApIHtcblxuICAgICAgICBjb25zdCB7IGFuaW1hdGVkLCBoaWRlQW5pbWF0aW9uLCBzaG93QW5pbWF0aW9uLCBtYXRlcmlhbCB9ID0gdGhpcztcblxuICAgICAgICBpZiAoIGFuaW1hdGVkICkge1xuXG4gICAgICAgICAgICBoaWRlQW5pbWF0aW9uLnN0b3AoKTtcbiAgICAgICAgICAgIHNob3dBbmltYXRpb24uZGVsYXkoIGRlbGF5ICkuc3RhcnQoKTtcblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICB0aGlzLmVuYWJsZVJheWNhc3QoIHRydWUgKTtcbiAgICAgICAgICAgIG1hdGVyaWFsLm9wYWNpdHkgPSAxO1xuXG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBIaWRlIGluZm9zcG90XG4gICAgICogQHBhcmFtICB7bnVtYmVyfSBbZGVsYXk9MF0gLSBEZWxheSB0aW1lIHRvIGhpZGVcbiAgICAgKiBAbWVtYmVyT2YgSW5mb3Nwb3RcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBoaWRlOiBmdW5jdGlvbiAoIGRlbGF5ID0gMCApIHtcblxuICAgICAgICBjb25zdCB7IGFuaW1hdGVkLCBoaWRlQW5pbWF0aW9uLCBzaG93QW5pbWF0aW9uLCBtYXRlcmlhbCB9ID0gdGhpcztcblxuICAgICAgICBpZiAoIGFuaW1hdGVkICkge1xuXG4gICAgICAgICAgICBzaG93QW5pbWF0aW9uLnN0b3AoKTtcbiAgICAgICAgICAgIGhpZGVBbmltYXRpb24uZGVsYXkoIGRlbGF5ICkuc3RhcnQoKTtcblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICB0aGlzLmVuYWJsZVJheWNhc3QoIGZhbHNlICk7XG4gICAgICAgICAgICBtYXRlcmlhbC5vcGFjaXR5ID0gMDtcblxuICAgICAgICB9XG5cdFx0XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNldCBmb2N1cyBldmVudCBoYW5kbGVyXG4gICAgICogQG1lbWJlck9mIEluZm9zcG90XG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgc2V0Rm9jdXNNZXRob2Q6IGZ1bmN0aW9uICggZXZlbnQgKSB7XG5cbiAgICAgICAgaWYgKCBldmVudCApIHtcblxuICAgICAgICAgICAgdGhpcy5IQU5ETEVSX0ZPQ1VTID0gZXZlbnQubWV0aG9kO1xuXG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBGb2N1cyBjYW1lcmEgY2VudGVyIHRvIHRoaXMgaW5mb3Nwb3RcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW2R1cmF0aW9uPTEwMDBdIC0gRHVyYXRpb24gdG8gdHdlZW5cbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBbZWFzaW5nPVRXRUVOLkVhc2luZy5FeHBvbmVudGlhbC5PdXRdIC0gRWFzaW5nIGZ1bmN0aW9uXG4gICAgICogQG1lbWJlck9mIEluZm9zcG90XG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgZm9jdXM6IGZ1bmN0aW9uICggZHVyYXRpb24sIGVhc2luZyApIHtcblxuICAgICAgICBpZiAoIHRoaXMuSEFORExFUl9GT0NVUyApIHtcblxuICAgICAgICAgICAgdGhpcy5IQU5ETEVSX0ZPQ1VTKCB0aGlzLnBvc2l0aW9uLCBkdXJhdGlvbiwgZWFzaW5nICk7XG4gICAgICAgICAgICB0aGlzLm9uRGlzbWlzcygpO1xuXG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBEaXNwb3NlXG4gICAgICogQG1lbWJlck9mIEluZm9zcG90XG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgZGlzcG9zZTogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGNvbnN0IHsgZ2VvbWV0cnksIG1hdGVyaWFsIH0gPSB0aGlzO1xuXG4gICAgICAgIHRoaXMucmVtb3ZlSG92ZXJFbGVtZW50KCk7XG5cbiAgICAgICAgaWYgKCB0aGlzLnBhcmVudCApIHtcblxuICAgICAgICAgICAgdGhpcy5wYXJlbnQucmVtb3ZlKCB0aGlzICk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggbWF0ZXJpYWwgJiYgbWF0ZXJpYWwubWFwICkgeyBtYXRlcmlhbC5tYXAuZGlzcG9zZSgpOyBtYXRlcmlhbC5tYXAgPSBudWxsOyB9XG4gICAgICAgIGlmICggZ2VvbWV0cnkgKSB7IGdlb21ldHJ5LmRpc3Bvc2UoKTsgdGhpcy5nZW9tZXRyeSA9IG51bGw7IH1cbiAgICAgICAgaWYgKCBtYXRlcmlhbCApIHsgbWF0ZXJpYWwuZGlzcG9zZSgpOyB0aGlzLm1hdGVyaWFsID0gbnVsbDsgfVxuXG4gICAgfVxuXG59ICk7XG5cbmV4cG9ydCB7IEluZm9zcG90IH07IiwiaW1wb3J0IHsgQ09OVFJPTFMsIE1PREVTIH0gZnJvbSAnLi4vQ29uc3RhbnRzJztcbmltcG9ydCB7IERhdGFJbWFnZSB9IGZyb20gJy4uL0RhdGFJbWFnZSc7XG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbi8qKlxuICogQGNsYXNzZGVzYyBXaWRnZXQgZm9yIGNvbnRyb2xzXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGNvbnRhaW5lciAtIEEgZG9tRWxlbWVudCB3aGVyZSBkZWZhdWx0IGNvbnRyb2wgd2lkZ2V0IHdpbGwgYmUgYXR0YWNoZWQgdG9cbiAqL1xuZnVuY3Rpb24gV2lkZ2V0ICggY29udGFpbmVyICkge1xuXG4gICAgaWYgKCAhY29udGFpbmVyICkge1xuXG4gICAgICAgIGNvbnNvbGUud2FybiggJ1BBTk9MRU5TLldpZGdldDogTm8gY29udGFpbmVyIHNwZWNpZmllZCcgKTtcblxuICAgIH1cblxuICAgIFRIUkVFLkV2ZW50RGlzcGF0Y2hlci5jYWxsKCB0aGlzICk7XG5cbiAgICB0aGlzLkRFRkFVTFRfVFJBTlNJVElPTiAgPSAnYWxsIDAuMjdzIGVhc2UnO1xuICAgIHRoaXMuVE9VQ0hfRU5BQkxFRCA9ICEhKCggJ29udG91Y2hzdGFydCcgaW4gd2luZG93ICkgfHwgd2luZG93LkRvY3VtZW50VG91Y2ggJiYgZG9jdW1lbnQgaW5zdGFuY2VvZiBEb2N1bWVudFRvdWNoKTtcbiAgICB0aGlzLlBSRVZFTlRfRVZFTlRfSEFORExFUiA9IGZ1bmN0aW9uICggZXZlbnQgKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH07XG5cbiAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcblxuICAgIHRoaXMuYmFyRWxlbWVudCA9IG51bGw7XG4gICAgdGhpcy5mdWxsc2NyZWVuRWxlbWVudCA9IG51bGw7XG4gICAgdGhpcy52aWRlb0VsZW1lbnQgPSBudWxsO1xuICAgIHRoaXMuc2V0dGluZ0VsZW1lbnQgPSBudWxsO1xuXG4gICAgdGhpcy5tYWluTWVudSA9IG51bGw7XG5cbiAgICB0aGlzLmFjdGl2ZU1haW5JdGVtID0gbnVsbDtcbiAgICB0aGlzLmFjdGl2ZVN1Yk1lbnUgPSBudWxsO1xuICAgIHRoaXMubWFzayA9IG51bGw7XG5cbn1cblxuV2lkZ2V0LnByb3RvdHlwZSA9IE9iamVjdC5hc3NpZ24oIE9iamVjdC5jcmVhdGUoIFRIUkVFLkV2ZW50RGlzcGF0Y2hlci5wcm90b3R5cGUgKSwge1xuXG4gICAgY29uc3RydWN0b3I6IFdpZGdldCxcblxuICAgIC8qKlxuICAgICAqIEFkZCBjb250cm9sIGJhclxuICAgICAqIEBtZW1iZXJPZiBXaWRnZXRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBhZGRDb250cm9sQmFyOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgaWYgKCAhdGhpcy5jb250YWluZXIgKSB7XG5cbiAgICAgICAgICAgIGNvbnNvbGUud2FybiggJ1dpZGdldCBjb250YWluZXIgbm90IHNldCcgKTsgXG4gICAgICAgICAgICByZXR1cm47IFxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHNjb3BlID0gdGhpcywgYmFyLCBzdHlsZVRyYW5zbGF0ZSwgc3R5bGVPcGFjaXR5LCBncmFkaWVudFN0eWxlO1xuXG4gICAgICAgIGdyYWRpZW50U3R5bGUgPSAnbGluZWFyLWdyYWRpZW50KGJvdHRvbSwgcmdiYSgwLDAsMCwwLjIpLCByZ2JhKDAsMCwwLDApKSc7XG5cbiAgICAgICAgYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2RpdicgKTtcbiAgICAgICAgYmFyLnN0eWxlLndpZHRoID0gJzEwMCUnO1xuICAgICAgICBiYXIuc3R5bGUuaGVpZ2h0ID0gJzQ0cHgnO1xuICAgICAgICBiYXIuc3R5bGUuZmxvYXQgPSAnbGVmdCc7XG4gICAgICAgIGJhci5zdHlsZS50cmFuc2Zvcm0gPSBiYXIuc3R5bGUud2Via2l0VHJhbnNmb3JtID0gYmFyLnN0eWxlLm1zVHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVkoLTEwMCUpJztcbiAgICAgICAgYmFyLnN0eWxlLmJhY2tncm91bmQgPSAnLXdlYmtpdC0nICsgZ3JhZGllbnRTdHlsZTtcbiAgICAgICAgYmFyLnN0eWxlLmJhY2tncm91bmQgPSAnLW1vei0nICsgZ3JhZGllbnRTdHlsZTtcbiAgICAgICAgYmFyLnN0eWxlLmJhY2tncm91bmQgPSAnLW8tJyArIGdyYWRpZW50U3R5bGU7XG4gICAgICAgIGJhci5zdHlsZS5iYWNrZ3JvdW5kID0gJy1tcy0nICsgZ3JhZGllbnRTdHlsZTtcbiAgICAgICAgYmFyLnN0eWxlLmJhY2tncm91bmQgPSBncmFkaWVudFN0eWxlO1xuICAgICAgICBiYXIuc3R5bGUudHJhbnNpdGlvbiA9IHRoaXMuREVGQVVMVF9UUkFOU0lUSU9OO1xuICAgICAgICBiYXIuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcbiAgICAgICAgYmFyLmlzSGlkZGVuID0gZmFsc2U7XG4gICAgICAgIGJhci50b2dnbGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBiYXIuaXNIaWRkZW4gPSAhYmFyLmlzSGlkZGVuO1xuICAgICAgICAgICAgc3R5bGVUcmFuc2xhdGUgPSBiYXIuaXNIaWRkZW4gPyAndHJhbnNsYXRlWSgwKScgOiAndHJhbnNsYXRlWSgtMTAwJSknO1xuICAgICAgICAgICAgc3R5bGVPcGFjaXR5ID0gYmFyLmlzSGlkZGVuID8gMCA6IDE7XG4gICAgICAgICAgICBiYXIuc3R5bGUudHJhbnNmb3JtID0gYmFyLnN0eWxlLndlYmtpdFRyYW5zZm9ybSA9IGJhci5zdHlsZS5tc1RyYW5zZm9ybSA9IHN0eWxlVHJhbnNsYXRlO1xuICAgICAgICAgICAgYmFyLnN0eWxlLm9wYWNpdHkgPSBzdHlsZU9wYWNpdHk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gTWVudVxuICAgICAgICB2YXIgbWVudSA9IHRoaXMuY3JlYXRlRGVmYXVsdE1lbnUoKTtcbiAgICAgICAgdGhpcy5tYWluTWVudSA9IHRoaXMuY3JlYXRlTWFpbk1lbnUoIG1lbnUgKTtcbiAgICAgICAgYmFyLmFwcGVuZENoaWxkKCB0aGlzLm1haW5NZW51ICk7XG5cbiAgICAgICAgLy8gTWFza1xuICAgICAgICB2YXIgbWFzayA9IHRoaXMuY3JlYXRlTWFzaygpO1xuICAgICAgICB0aGlzLm1hc2sgPSBtYXNrO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCggbWFzayApO1xuXG4gICAgICAgIC8vIERpc3Bvc2VcbiAgICAgICAgYmFyLmRpc3Bvc2UgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgIGlmICggc2NvcGUuZnVsbHNjcmVlbkVsZW1lbnQgKSB7XG5cbiAgICAgICAgICAgICAgICBiYXIucmVtb3ZlQ2hpbGQoIHNjb3BlLmZ1bGxzY3JlZW5FbGVtZW50ICk7XG4gICAgICAgICAgICAgICAgc2NvcGUuZnVsbHNjcmVlbkVsZW1lbnQuZGlzcG9zZSgpO1xuICAgICAgICAgICAgICAgIHNjb3BlLmZ1bGxzY3JlZW5FbGVtZW50ID0gbnVsbDtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIHNjb3BlLnNldHRpbmdFbGVtZW50ICkge1xuXG4gICAgICAgICAgICAgICAgYmFyLnJlbW92ZUNoaWxkKCBzY29wZS5zZXR0aW5nRWxlbWVudCApO1xuICAgICAgICAgICAgICAgIHNjb3BlLnNldHRpbmdFbGVtZW50LmRpc3Bvc2UoKTtcbiAgICAgICAgICAgICAgICBzY29wZS5zZXR0aW5nRWxlbWVudCA9IG51bGw7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCBzY29wZS52aWRlb0VsZW1lbnQgKSB7XG5cbiAgICAgICAgICAgICAgICBiYXIucmVtb3ZlQ2hpbGQoIHNjb3BlLnZpZGVvRWxlbWVudCApO1xuICAgICAgICAgICAgICAgIHNjb3BlLnZpZGVvRWxlbWVudC5kaXNwb3NlKCk7XG4gICAgICAgICAgICAgICAgc2NvcGUudmlkZW9FbGVtZW50ID0gbnVsbDtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQoIGJhciApO1xuXG4gICAgICAgIC8vIE1hc2sgZXZlbnRzXG4gICAgICAgIHRoaXMubWFzay5hZGRFdmVudExpc3RlbmVyKCAnbW91c2Vtb3ZlJywgdGhpcy5QUkVWRU5UX0VWRU5UX0hBTkRMRVIsIHRydWUgKTtcbiAgICAgICAgdGhpcy5tYXNrLmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZXVwJywgdGhpcy5QUkVWRU5UX0VWRU5UX0hBTkRMRVIsIHRydWUgKTtcbiAgICAgICAgdGhpcy5tYXNrLmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZWRvd24nLCB0aGlzLlBSRVZFTlRfRVZFTlRfSEFORExFUiwgdHJ1ZSApO1xuICAgICAgICB0aGlzLm1hc2suYWRkRXZlbnRMaXN0ZW5lciggc2NvcGUuVE9VQ0hfRU5BQkxFRCA/ICd0b3VjaGVuZCcgOiAnY2xpY2snLCBmdW5jdGlvbiAoIGV2ZW50ICkge1xuXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgICAgIHNjb3BlLm1hc2suaGlkZSgpO1xuICAgICAgICAgICAgc2NvcGUuc2V0dGluZ0VsZW1lbnQuZGVhY3RpdmF0ZSgpO1xuXG4gICAgICAgIH0sIGZhbHNlICk7XG5cbiAgICAgICAgLy8gRXZlbnQgbGlzdGVuZXJcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCAnY29udHJvbC1iYXItdG9nZ2xlJywgYmFyLnRvZ2dsZSApO1xuXG4gICAgICAgIHRoaXMuYmFyRWxlbWVudCA9IGJhcjtcblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgZGVmYXVsdCBtZW51XG4gICAgICogQG1lbWJlck9mIFdpZGdldFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIGNyZWF0ZURlZmF1bHRNZW51OiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgdmFyIHNjb3BlID0gdGhpcywgaGFuZGxlcjtcblxuICAgICAgICBoYW5kbGVyID0gZnVuY3Rpb24gKCBtZXRob2QsIGRhdGEgKSB7XG5cbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgICAgICBzY29wZS5kaXNwYXRjaEV2ZW50KCB7IFxuXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdwYW5vbGVucy12aWV3ZXItaGFuZGxlcicsIFxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IG1ldGhvZCwgXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGRhdGEgXG5cbiAgICAgICAgICAgICAgICB9ICk7IFxuXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIFtcblxuICAgICAgICAgICAgeyBcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0NvbnRyb2wnLCBcbiAgICAgICAgICAgICAgICBzdWJNZW51OiBbIFxuICAgICAgICAgICAgICAgICAgICB7IFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHRoaXMuVE9VQ0hfRU5BQkxFRCA/ICdUb3VjaCcgOiAnTW91c2UnLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXI6IGhhbmRsZXIoICdlbmFibGVDb250cm9sJywgQ09OVFJPTFMuT1JCSVQgKVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7IFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdTZW5zb3InLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXI6IGhhbmRsZXIoICdlbmFibGVDb250cm9sJywgQ09OVFJPTFMuREVWSUNFT1JJRU5UQVRJT04gKSBcbiAgICAgICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICB7IFxuICAgICAgICAgICAgICAgIHRpdGxlOiAnTW9kZScsIFxuICAgICAgICAgICAgICAgIHN1Yk1lbnU6IFsgXG4gICAgICAgICAgICAgICAgICAgIHsgXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ05vcm1hbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVyOiBoYW5kbGVyKCAnZGlzYWJsZUVmZmVjdCcgKVxuICAgICAgICAgICAgICAgICAgICB9LCBcbiAgICAgICAgICAgICAgICAgICAgeyBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnQ2FyZGJvYXJkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXI6IGhhbmRsZXIoICdlbmFibGVFZmZlY3QnLCBNT0RFUy5DQVJEQk9BUkQgKVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7IFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdTdGVyZW9zY29waWMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlcjogaGFuZGxlciggJ2VuYWJsZUVmZmVjdCcsIE1PREVTLlNURVJFTyApXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgXTtcblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBBZGQgYnV0dG9ucyBvbiB0b3Agb2YgY29udHJvbCBiYXJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIFRoZSBjb250cm9sIGJ1dHRvbiBuYW1lIHRvIGJlIGNyZWF0ZWRcbiAgICAgKiBAbWVtYmVyT2YgV2lkZ2V0XG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgYWRkQ29udHJvbEJ1dHRvbjogZnVuY3Rpb24gKCBuYW1lICkge1xuXG4gICAgICAgIGxldCBlbGVtZW50O1xuXG4gICAgICAgIHN3aXRjaCggbmFtZSApIHtcblxuICAgICAgICBjYXNlICdmdWxsc2NyZWVuJzpcblxuICAgICAgICAgICAgZWxlbWVudCA9IHRoaXMuY3JlYXRlRnVsbHNjcmVlbkJ1dHRvbigpO1xuICAgICAgICAgICAgdGhpcy5mdWxsc2NyZWVuRWxlbWVudCA9IGVsZW1lbnQ7IFxuXG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdzZXR0aW5nJzpcblxuICAgICAgICAgICAgZWxlbWVudCA9IHRoaXMuY3JlYXRlU2V0dGluZ0J1dHRvbigpO1xuICAgICAgICAgICAgdGhpcy5zZXR0aW5nRWxlbWVudCA9IGVsZW1lbnQ7XG5cbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ3ZpZGVvJzpcblxuICAgICAgICAgICAgZWxlbWVudCA9IHRoaXMuY3JlYXRlVmlkZW9Db250cm9sKCk7XG4gICAgICAgICAgICB0aGlzLnZpZGVvRWxlbWVudCA9IGVsZW1lbnQ7XG5cbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG5cbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCAhZWxlbWVudCApIHtcblxuICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmJhckVsZW1lbnQuYXBwZW5kQ2hpbGQoIGVsZW1lbnQgKTtcblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgbW9kYWwgbWFza1xuICAgICAqIEBtZW1iZXJPZiBXaWRnZXRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBjcmVhdGVNYXNrOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdkaXYnICk7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICBlbGVtZW50LnN0eWxlLnRvcCA9IDA7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUubGVmdCA9IDA7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUud2lkdGggPSAnMTAwJSc7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gJzEwMCUnO1xuICAgICAgICBlbGVtZW50LnN0eWxlLmJhY2tncm91bmQgPSAndHJhbnNwYXJlbnQnO1xuICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgICAgICAgZWxlbWVudC5zaG93ID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICB0aGlzLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXG4gICAgICAgIH07XG5cbiAgICAgICAgZWxlbWVudC5oaWRlID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICB0aGlzLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gZWxlbWVudDtcblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgU2V0dGluZyBidXR0b24gdG8gdG9nZ2xlIG1lbnVcbiAgICAgKiBAbWVtYmVyT2YgV2lkZ2V0XG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgY3JlYXRlU2V0dGluZ0J1dHRvbjogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGxldCBzY29wZSA9IHRoaXMsIGl0ZW07XG5cbiAgICAgICAgZnVuY3Rpb24gb25UYXAgKCBldmVudCApIHtcblxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgICAgICBzY29wZS5tYWluTWVudS50b2dnbGUoKTtcblxuICAgICAgICAgICAgaWYgKCB0aGlzLmFjdGl2YXRlZCApIHtcblx0XG4gICAgICAgICAgICAgICAgdGhpcy5kZWFjdGl2YXRlKCk7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2YXRlKCk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgaXRlbSA9IHRoaXMuY3JlYXRlQ3VzdG9tSXRlbSggeyBcblxuICAgICAgICAgICAgc3R5bGU6IHsgXG5cbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwoXCInICsgRGF0YUltYWdlLlNldHRpbmcgKyAnXCIpJyxcbiAgICAgICAgICAgICAgICB3ZWJraXRUcmFuc2l0aW9uOiB0aGlzLkRFRkFVTFRfVFJBTlNJVElPTixcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB0aGlzLkRFRkFVTFRfVFJBTlNJVElPTlxuXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBvblRhcDogb25UYXBcblxuICAgICAgICB9ICk7XG5cbiAgICAgICAgaXRlbS5hY3RpdmF0ZSA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgdGhpcy5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlM2QoMCwwLDEsOTBkZWcpJztcbiAgICAgICAgICAgIHRoaXMuYWN0aXZhdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHNjb3BlLm1hc2suc2hvdygpO1xuXG4gICAgICAgIH07XG5cbiAgICAgICAgaXRlbS5kZWFjdGl2YXRlID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICB0aGlzLnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUzZCgwLDAsMCwwKSc7XG4gICAgICAgICAgICB0aGlzLmFjdGl2YXRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgc2NvcGUubWFzay5oaWRlKCk7XG5cbiAgICAgICAgICAgIGlmICggc2NvcGUubWFpbk1lbnUgJiYgc2NvcGUubWFpbk1lbnUudmlzaWJsZSApIHtcblxuICAgICAgICAgICAgICAgIHNjb3BlLm1haW5NZW51LmhpZGUoKTtcblx0XHRcdFx0XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICggc2NvcGUuYWN0aXZlU3ViTWVudSAmJiBzY29wZS5hY3RpdmVTdWJNZW51LnZpc2libGUgKSB7XG5cbiAgICAgICAgICAgICAgICBzY29wZS5hY3RpdmVTdWJNZW51LmhpZGUoKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIHNjb3BlLm1haW5NZW51ICYmIHNjb3BlLm1haW5NZW51Ll93aWR0aCApIHtcblxuICAgICAgICAgICAgICAgIHNjb3BlLm1haW5NZW51LmNoYW5nZVNpemUoIHNjb3BlLm1haW5NZW51Ll93aWR0aCApO1xuICAgICAgICAgICAgICAgIHNjb3BlLm1haW5NZW51LnVuc2xpZGVBbGwoKTtcblxuICAgICAgICAgICAgfVxuXHRcdFx0XG4gICAgICAgIH07XG5cbiAgICAgICAgaXRlbS5hY3RpdmF0ZWQgPSBmYWxzZTtcblxuICAgICAgICByZXR1cm4gaXRlbTtcblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgRnVsbHNjcmVlbiBidXR0b25cbiAgICAgKiBAcmV0dXJuIHtIVE1MU3BhbkVsZW1lbnR9IC0gVGhlIGRvbSBlbGVtZW50IGljb24gZm9yIGZ1bGxzY3JlZW5cbiAgICAgKiBAbWVtYmVyT2YgV2lkZ2V0XG4gICAgICogQGluc3RhbmNlXG4gICAgICogQGZpcmVzIFdpZGdldCNwYW5vbGVucy12aWV3ZXItaGFuZGxlclxuICAgICAqL1xuICAgIGNyZWF0ZUZ1bGxzY3JlZW5CdXR0b246IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBsZXQgc2NvcGUgPSB0aGlzLCBpdGVtLCBpc0Z1bGxzY3JlZW4gPSBmYWxzZSwgdGFwU2tpcHBlZCA9IHRydWUsIHN0eWxlc2hlZXRJZDtcblxuICAgICAgICBjb25zdCB7IGNvbnRhaW5lciB9ID0gdGhpcztcblxuICAgICAgICBzdHlsZXNoZWV0SWQgPSAncGFub2xlbnMtc3R5bGUtYWRkb24nO1xuXG4gICAgICAgIC8vIERvbid0IGNyZWF0ZSBidXR0b24gaWYgbm8gc3VwcG9ydFxuICAgICAgICBpZiAoICFkb2N1bWVudC5mdWxsc2NyZWVuRW5hYmxlZCAgICAgICAmJiBcblx0XHRcdCFkb2N1bWVudC53ZWJraXRGdWxsc2NyZWVuRW5hYmxlZCAmJlxuXHRcdFx0IWRvY3VtZW50Lm1vekZ1bGxTY3JlZW5FbmFibGVkICAgICYmXG5cdFx0XHQhZG9jdW1lbnQubXNGdWxsc2NyZWVuRW5hYmxlZCApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIG9uVGFwICggZXZlbnQgKSB7XG5cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICAgICAgdGFwU2tpcHBlZCA9IGZhbHNlO1xuXG4gICAgICAgICAgICBpZiAoICFpc0Z1bGxzY3JlZW4gKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoIGNvbnRhaW5lci5yZXF1ZXN0RnVsbHNjcmVlbiApIHsgY29udGFpbmVyLnJlcXVlc3RGdWxsc2NyZWVuKCk7IH1cbiAgICAgICAgICAgICAgICBpZiAoIGNvbnRhaW5lci5tc1JlcXVlc3RGdWxsc2NyZWVuICkgeyBjb250YWluZXIubXNSZXF1ZXN0RnVsbHNjcmVlbigpOyB9XG4gICAgICAgICAgICAgICAgaWYgKCBjb250YWluZXIubW96UmVxdWVzdEZ1bGxTY3JlZW4gKSB7IGNvbnRhaW5lci5tb3pSZXF1ZXN0RnVsbFNjcmVlbigpOyB9XG4gICAgICAgICAgICAgICAgaWYgKCBjb250YWluZXIud2Via2l0UmVxdWVzdEZ1bGxzY3JlZW4gKSB7IGNvbnRhaW5lci53ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbiggRWxlbWVudC5BTExPV19LRVlCT0FSRF9JTlBVVCApOyB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlzRnVsbHNjcmVlbiA9IHRydWU7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoIGRvY3VtZW50LmV4aXRGdWxsc2NyZWVuICkgeyBkb2N1bWVudC5leGl0RnVsbHNjcmVlbigpOyB9XG4gICAgICAgICAgICAgICAgaWYgKCBkb2N1bWVudC5tc0V4aXRGdWxsc2NyZWVuICkgeyBkb2N1bWVudC5tc0V4aXRGdWxsc2NyZWVuKCk7IH1cbiAgICAgICAgICAgICAgICBpZiAoIGRvY3VtZW50Lm1vekNhbmNlbEZ1bGxTY3JlZW4gKSB7IGRvY3VtZW50Lm1vekNhbmNlbEZ1bGxTY3JlZW4oKTsgfVxuICAgICAgICAgICAgICAgIGlmICggZG9jdW1lbnQud2Via2l0RXhpdEZ1bGxzY3JlZW4gKSB7IGRvY3VtZW50LndlYmtpdEV4aXRGdWxsc2NyZWVuKCApOyB9XG5cbiAgICAgICAgICAgICAgICBpc0Z1bGxzY3JlZW4gPSBmYWxzZTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICggaXNGdWxsc2NyZWVuICkgXG4gICAgICAgICAgICAgICAgPyAndXJsKFwiJyArIERhdGFJbWFnZS5GdWxsc2NyZWVuTGVhdmUgKyAnXCIpJyBcbiAgICAgICAgICAgICAgICA6ICd1cmwoXCInICsgRGF0YUltYWdlLkZ1bGxzY3JlZW5FbnRlciArICdcIiknO1xuXG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBvbkZ1bGxTY3JlZW5DaGFuZ2UgKCkge1xuXG4gICAgICAgICAgICBpZiAoIHRhcFNraXBwZWQgKSB7XG5cbiAgICAgICAgICAgICAgICBpc0Z1bGxzY3JlZW4gPSAhaXNGdWxsc2NyZWVuOyBcblxuICAgICAgICAgICAgICAgIGl0ZW0uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gKCBpc0Z1bGxzY3JlZW4gKSBcbiAgICAgICAgICAgICAgICAgICAgPyAndXJsKFwiJyArIERhdGFJbWFnZS5GdWxsc2NyZWVuTGVhdmUgKyAnXCIpJyBcbiAgICAgICAgICAgICAgICAgICAgOiAndXJsKFwiJyArIERhdGFJbWFnZS5GdWxsc2NyZWVuRW50ZXIgKyAnXCIpJztcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFZpZXdlciBoYW5kbGVyIGV2ZW50XG4gICAgICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAgICAgICAgICogQGV2ZW50IFdpZGdldCNwYW5vbGVucy12aWV3ZXItaGFuZGxlclxuICAgICAgICAgICAgICogQHByb3BlcnR5IHtzdHJpbmd9IG1ldGhvZCAtICdvbldpbmRvd1Jlc2l6ZScgZnVuY3Rpb24gY2FsbCBvbiBWaWV3ZXJcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgc2NvcGUuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAncGFub2xlbnMtdmlld2VyLWhhbmRsZXInLCBtZXRob2Q6ICdvbldpbmRvd1Jlc2l6ZScgfSApO1xuXG4gICAgICAgICAgICB0YXBTa2lwcGVkID0gdHJ1ZTtcblxuICAgICAgICB9XG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ2Z1bGxzY3JlZW5jaGFuZ2UnLCBvbkZ1bGxTY3JlZW5DaGFuZ2UsIGZhbHNlICk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoICd3ZWJraXRmdWxsc2NyZWVuY2hhbmdlJywgb25GdWxsU2NyZWVuQ2hhbmdlLCBmYWxzZSApO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCAnbW96ZnVsbHNjcmVlbmNoYW5nZScsIG9uRnVsbFNjcmVlbkNoYW5nZSwgZmFsc2UgKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ01TRnVsbHNjcmVlbkNoYW5nZScsIG9uRnVsbFNjcmVlbkNoYW5nZSwgZmFsc2UgKTtcblxuICAgICAgICBpdGVtID0gdGhpcy5jcmVhdGVDdXN0b21JdGVtKCB7IFxuXG4gICAgICAgICAgICBzdHlsZTogeyBcblxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogJ3VybChcIicgKyBEYXRhSW1hZ2UuRnVsbHNjcmVlbkVudGVyICsgJ1wiKScgXG5cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIG9uVGFwOiBvblRhcFxuXG4gICAgICAgIH0gKTtcblxuICAgICAgICAvLyBBZGQgZnVsbHNjcmVlbiBzdGx5ZSBpZiBub3QgZXhpc3RzXG4gICAgICAgIGlmICggIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcjJyArIHN0eWxlc2hlZXRJZCApICkge1xuICAgICAgICAgICAgY29uc3Qgc2hlZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnc3R5bGUnICk7XG4gICAgICAgICAgICBzaGVldC5pZCA9IHN0eWxlc2hlZXRJZDtcbiAgICAgICAgICAgIHNoZWV0LmlubmVySFRNTCA9ICc6LXdlYmtpdC1mdWxsLXNjcmVlbiB7IHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7IGhlaWdodDogMTAwJSAhaW1wb3J0YW50IH0nO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCggc2hlZXQgKTtcbiAgICAgICAgfVxuXHRcdFxuICAgICAgICByZXR1cm4gaXRlbTtcblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgdmlkZW8gY29udHJvbCBjb250YWluZXJcbiAgICAgKiBAbWVtYmVyT2YgV2lkZ2V0XG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHJldHVybiB7SFRNTFNwYW5FbGVtZW50fSAtIFRoZSBkb20gZWxlbWVudCBpY29uIGZvciB2aWRlbyBjb250cm9sXG4gICAgICovXG4gICAgY3JlYXRlVmlkZW9Db250cm9sOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdzcGFuJyApO1xuICAgICAgICBpdGVtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIGl0ZW0uc2hvdyA9IGZ1bmN0aW9uICgpIHsgXG5cbiAgICAgICAgICAgIGl0ZW0uc3R5bGUuZGlzcGxheSA9ICcnO1xuXG4gICAgICAgIH07XG5cbiAgICAgICAgaXRlbS5oaWRlID0gZnVuY3Rpb24gKCkgeyBcblxuICAgICAgICAgICAgaXRlbS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgaXRlbS5jb250cm9sQnV0dG9uLnBhdXNlZCA9IHRydWU7XG4gICAgICAgICAgICBpdGVtLmNvbnRyb2xCdXR0b24udXBkYXRlKCk7XG5cbiAgICAgICAgfTtcblxuICAgICAgICBpdGVtLmNvbnRyb2xCdXR0b24gPSB0aGlzLmNyZWF0ZVZpZGVvQ29udHJvbEJ1dHRvbigpO1xuICAgICAgICBpdGVtLnNlZWtCYXIgPSB0aGlzLmNyZWF0ZVZpZGVvQ29udHJvbFNlZWtiYXIoKTtcblx0XHRcbiAgICAgICAgaXRlbS5hcHBlbmRDaGlsZCggaXRlbS5jb250cm9sQnV0dG9uICk7XG4gICAgICAgIGl0ZW0uYXBwZW5kQ2hpbGQoIGl0ZW0uc2Vla0JhciApO1xuXG4gICAgICAgIGl0ZW0uZGlzcG9zZSA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgaXRlbS5yZW1vdmVDaGlsZCggaXRlbS5jb250cm9sQnV0dG9uICk7XG4gICAgICAgICAgICBpdGVtLnJlbW92ZUNoaWxkKCBpdGVtLnNlZWtCYXIgKTtcblxuICAgICAgICAgICAgaXRlbS5jb250cm9sQnV0dG9uLmRpc3Bvc2UoKTtcbiAgICAgICAgICAgIGl0ZW0uY29udHJvbEJ1dHRvbiA9IG51bGw7XG5cbiAgICAgICAgICAgIGl0ZW0uc2Vla0Jhci5kaXNwb3NlKCk7XG4gICAgICAgICAgICBpdGVtLnNlZWtCYXIgPSBudWxsO1xuXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCAndmlkZW8tY29udHJvbC1zaG93JywgaXRlbS5zaG93ICk7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lciggJ3ZpZGVvLWNvbnRyb2wtaGlkZScsIGl0ZW0uaGlkZSApO1xuXG4gICAgICAgIHJldHVybiBpdGVtO1xuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSB2aWRlbyBjb250cm9sIGJ1dHRvblxuICAgICAqIEBtZW1iZXJPZiBXaWRnZXRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcmV0dXJuIHtIVE1MU3BhbkVsZW1lbnR9IC0gVGhlIGRvbSBlbGVtZW50IGljb24gZm9yIHZpZGVvIGNvbnRyb2xcbiAgICAgKiBAZmlyZXMgV2lkZ2V0I3Bhbm9sZW5zLXZpZXdlci1oYW5kbGVyXG4gICAgICovXG4gICAgY3JlYXRlVmlkZW9Db250cm9sQnV0dG9uOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuXG4gICAgICAgIGZ1bmN0aW9uIG9uVGFwICggZXZlbnQgKSB7XG5cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBWaWV3ZXIgaGFuZGxlciBldmVudFxuICAgICAgICAgICAgICogQHR5cGUge29iamVjdH1cbiAgICAgICAgICAgICAqIEBldmVudCBXaWRnZXQjcGFub2xlbnMtdmlld2VyLWhhbmRsZXJcbiAgICAgICAgICAgICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBtZXRob2QgLSAndG9nZ2xlVmlkZW9QbGF5JyBmdW5jdGlvbiBjYWxsIG9uIFZpZXdlclxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBzY29wZS5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdwYW5vbGVucy12aWV3ZXItaGFuZGxlcicsIG1ldGhvZDogJ3RvZ2dsZVZpZGVvUGxheScsIGRhdGE6ICF0aGlzLnBhdXNlZCB9ICk7XG5cbiAgICAgICAgICAgIHRoaXMucGF1c2VkID0gIXRoaXMucGF1c2VkO1xuXG4gICAgICAgICAgICBpdGVtLnVwZGF0ZSgpO1xuXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgaXRlbSA9IHRoaXMuY3JlYXRlQ3VzdG9tSXRlbSggeyBcblxuICAgICAgICAgICAgc3R5bGU6IHsgXG5cbiAgICAgICAgICAgICAgICBmbG9hdDogJ2xlZnQnLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogJ3VybChcIicgKyBEYXRhSW1hZ2UuVmlkZW9QbGF5ICsgJ1wiKSdcblxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgb25UYXA6IG9uVGFwXG5cbiAgICAgICAgfSApO1xuXG4gICAgICAgIGl0ZW0ucGF1c2VkID0gdHJ1ZTtcblxuICAgICAgICBpdGVtLnVwZGF0ZSA9IGZ1bmN0aW9uICggcGF1c2VkICkge1xuXG4gICAgICAgICAgICB0aGlzLnBhdXNlZCA9IHBhdXNlZCAhPT0gdW5kZWZpbmVkID8gcGF1c2VkIDogdGhpcy5wYXVzZWQ7XG5cbiAgICAgICAgICAgIHRoaXMuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybChcIicgKyAoIHRoaXMucGF1c2VkIFxuICAgICAgICAgICAgICAgID8gRGF0YUltYWdlLlZpZGVvUGxheSBcbiAgICAgICAgICAgICAgICA6IERhdGFJbWFnZS5WaWRlb1BhdXNlICkgKyAnXCIpJztcblxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBpdGVtO1xuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSB2aWRlbyBzZWVrYmFyXG4gICAgICogQG1lbWJlck9mIFdpZGdldFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEByZXR1cm4ge0hUTUxTcGFuRWxlbWVudH0gLSBUaGUgZG9tIGVsZW1lbnQgaWNvbiBmb3IgdmlkZW8gc2Vla2JhclxuICAgICAqIEBmaXJlcyBXaWRnZXQjcGFub2xlbnMtdmlld2VyLWhhbmRsZXJcbiAgICAgKi9cbiAgICBjcmVhdGVWaWRlb0NvbnRyb2xTZWVrYmFyOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgbGV0IHNjb3BlID0gdGhpcywgaXRlbSwgcHJvZ3Jlc3NFbGVtZW50LCBwcm9ncmVzc0VsZW1lbnRDb250cm9sLFxuICAgICAgICAgICAgaXNEcmFnZ2luZyA9IGZhbHNlLCBtb3VzZVgsIHBlcmNlbnRhZ2VOb3csIHBlcmNlbnRhZ2VOZXh0O1xuXG4gICAgICAgIHByb2dyZXNzRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdkaXYnICk7XG4gICAgICAgIHByb2dyZXNzRWxlbWVudC5zdHlsZS53aWR0aCA9ICcwJSc7XG4gICAgICAgIHByb2dyZXNzRWxlbWVudC5zdHlsZS5oZWlnaHQgPSAnMTAwJSc7XG4gICAgICAgIHByb2dyZXNzRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2ZmZic7XG5cbiAgICAgICAgcHJvZ3Jlc3NFbGVtZW50Q29udHJvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdkaXYnICk7XG4gICAgICAgIHByb2dyZXNzRWxlbWVudENvbnRyb2wuc3R5bGUuZmxvYXQgPSAncmlnaHQnO1xuICAgICAgICBwcm9ncmVzc0VsZW1lbnRDb250cm9sLnN0eWxlLndpZHRoID0gJzE0cHgnO1xuICAgICAgICBwcm9ncmVzc0VsZW1lbnRDb250cm9sLnN0eWxlLmhlaWdodCA9ICcxNHB4JztcbiAgICAgICAgcHJvZ3Jlc3NFbGVtZW50Q29udHJvbC5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlKDdweCwgLTVweCknO1xuICAgICAgICBwcm9ncmVzc0VsZW1lbnRDb250cm9sLnN0eWxlLmJvcmRlclJhZGl1cyA9ICc1MCUnO1xuICAgICAgICBwcm9ncmVzc0VsZW1lbnRDb250cm9sLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZGRkJztcblxuICAgICAgICBwcm9ncmVzc0VsZW1lbnRDb250cm9sLmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZWRvd24nLCBvbk1vdXNlRG93biwgeyBwYXNzaXZlOiB0cnVlIH0gKTtcbiAgICAgICAgcHJvZ3Jlc3NFbGVtZW50Q29udHJvbC5hZGRFdmVudExpc3RlbmVyKCAndG91Y2hzdGFydCcsIG9uTW91c2VEb3duLCAgeyBwYXNzaXZlOiB0cnVlIH0gKTtcblxuICAgICAgICBmdW5jdGlvbiBvbk1vdXNlRG93biAoIGV2ZW50ICkge1xuXG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdFxuICAgICAgICAgICAgaXNEcmFnZ2luZyA9IHRydWU7XG5cdFx0XHRcbiAgICAgICAgICAgIG1vdXNlWCA9IGV2ZW50LmNsaWVudFggfHwgKCBldmVudC5jaGFuZ2VkVG91Y2hlcyAmJiBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYICk7XG5cbiAgICAgICAgICAgIHBlcmNlbnRhZ2VOb3cgPSBwYXJzZUludCggcHJvZ3Jlc3NFbGVtZW50LnN0eWxlLndpZHRoICkgLyAxMDA7XG5cbiAgICAgICAgICAgIGFkZENvbnRyb2xMaXN0ZW5lcnMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIG9uVmlkZW9Db250cm9sRHJhZyAoIGV2ZW50ICkge1xuXG4gICAgICAgICAgICBpZiggaXNEcmFnZ2luZyApe1xuXG4gICAgICAgICAgICAgICAgY29uc3QgY2xpZW50WCA9IGV2ZW50LmNsaWVudFggfHwgKCBldmVudC5jaGFuZ2VkVG91Y2hlcyAmJiBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYICk7XG5cdFx0XHRcdFxuICAgICAgICAgICAgICAgIHBlcmNlbnRhZ2VOZXh0ID0gKCBjbGllbnRYIC0gbW91c2VYICkgLyBpdGVtLmNsaWVudFdpZHRoO1xuXG4gICAgICAgICAgICAgICAgcGVyY2VudGFnZU5leHQgPSBwZXJjZW50YWdlTm93ICsgcGVyY2VudGFnZU5leHQ7XG5cbiAgICAgICAgICAgICAgICBwZXJjZW50YWdlTmV4dCA9IHBlcmNlbnRhZ2VOZXh0ID4gMSA/IDEgOiAoICggcGVyY2VudGFnZU5leHQgPCAwICkgPyAwIDogcGVyY2VudGFnZU5leHQgKTtcblxuICAgICAgICAgICAgICAgIGl0ZW0uc2V0UHJvZ3Jlc3MgKCBwZXJjZW50YWdlTmV4dCApO1xuXG4gICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICogVmlld2VyIGhhbmRsZXIgZXZlbnRcbiAgICAgICAgICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAgICAgICAgICAgICAqIEBldmVudCBXaWRnZXQjcGFub2xlbnMtdmlld2VyLWhhbmRsZXJcbiAgICAgICAgICAgICAgICAgKiBAcHJvcGVydHkge3N0cmluZ30gbWV0aG9kIC0gJ3NldFZpZGVvQ3VycmVudFRpbWUnIGZ1bmN0aW9uIGNhbGwgb24gVmlld2VyXG4gICAgICAgICAgICAgICAgICogQHByb3BlcnR5IHtudW1iZXJ9IGRhdGEgLSBQZXJjZW50YWdlIG9mIGN1cnJlbnQgdmlkZW8uIFJhbmdlIGZyb20gMC4wIHRvIDEuMFxuICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIHNjb3BlLmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ3Bhbm9sZW5zLXZpZXdlci1oYW5kbGVyJywgbWV0aG9kOiAnc2V0VmlkZW9DdXJyZW50VGltZScsIGRhdGE6IHBlcmNlbnRhZ2VOZXh0IH0gKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBvblZpZGVvQ29udHJvbFN0b3AgKCBldmVudCApIHtcblxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgICAgIGlzRHJhZ2dpbmcgPSBmYWxzZTtcblxuICAgICAgICAgICAgcmVtb3ZlQ29udHJvbExpc3RlbmVycygpO1xuXG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBhZGRDb250cm9sTGlzdGVuZXJzICgpIHtcblxuICAgICAgICAgICAgc2NvcGUuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZW1vdmUnLCBvblZpZGVvQ29udHJvbERyYWcsIHsgcGFzc2l2ZTogdHJ1ZSB9ICk7XG4gICAgICAgICAgICBzY29wZS5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNldXAnLCBvblZpZGVvQ29udHJvbFN0b3AsIHsgcGFzc2l2ZTogdHJ1ZSB9ICk7XG4gICAgICAgICAgICBzY29wZS5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lciggJ3RvdWNobW92ZScsIG9uVmlkZW9Db250cm9sRHJhZywgeyBwYXNzaXZlOiB0cnVlIH0gKTtcbiAgICAgICAgICAgIHNjb3BlLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCAndG91Y2hlbmQnLCBvblZpZGVvQ29udHJvbFN0b3AsIHsgcGFzc2l2ZTogdHJ1ZSB9ICk7XG5cblxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gcmVtb3ZlQ29udHJvbExpc3RlbmVycyAoKSB7XG5cbiAgICAgICAgICAgIHNjb3BlLmNvbnRhaW5lci5yZW1vdmVFdmVudExpc3RlbmVyKCAnbW91c2Vtb3ZlJywgb25WaWRlb0NvbnRyb2xEcmFnLCBmYWxzZSApO1xuICAgICAgICAgICAgc2NvcGUuY29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoICdtb3VzZXVwJywgb25WaWRlb0NvbnRyb2xTdG9wLCBmYWxzZSApO1xuICAgICAgICAgICAgc2NvcGUuY29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoICd0b3VjaG1vdmUnLCBvblZpZGVvQ29udHJvbERyYWcsIGZhbHNlICk7XG4gICAgICAgICAgICBzY29wZS5jb250YWluZXIucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3RvdWNoZW5kJywgb25WaWRlb0NvbnRyb2xTdG9wLCBmYWxzZSApO1xuXG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBvblRhcCAoIGV2ZW50ICkge1xuXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgICAgIGlmICggZXZlbnQudGFyZ2V0ID09PSBwcm9ncmVzc0VsZW1lbnRDb250cm9sICkgeyByZXR1cm47IH1cblxuICAgICAgICAgICAgY29uc3QgcGVyY2VudGFnZSA9ICggZXZlbnQuY2hhbmdlZFRvdWNoZXMgJiYgZXZlbnQuY2hhbmdlZFRvdWNoZXMubGVuZ3RoID4gMCApXG4gICAgICAgICAgICAgICAgPyAoIGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VYIC0gZXZlbnQudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQgKSAvIHRoaXMuY2xpZW50V2lkdGhcbiAgICAgICAgICAgICAgICA6IGV2ZW50Lm9mZnNldFggLyB0aGlzLmNsaWVudFdpZHRoO1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFZpZXdlciBoYW5kbGVyIGV2ZW50XG4gICAgICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAgICAgICAgICogQHByb3BlcnR5IHtzdHJpbmd9IG1ldGhvZCAtICdzZXRWaWRlb0N1cnJlbnRUaW1lJyBmdW5jdGlvbiBjYWxsIG9uIFZpZXdlclxuICAgICAgICAgICAgICogQHByb3BlcnR5IHtudW1iZXJ9IGRhdGEgLSBQZXJjZW50YWdlIG9mIGN1cnJlbnQgdmlkZW8uIFJhbmdlIGZyb20gMC4wIHRvIDEuMFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBzY29wZS5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdwYW5vbGVucy12aWV3ZXItaGFuZGxlcicsIG1ldGhvZDogJ3NldFZpZGVvQ3VycmVudFRpbWUnLCBkYXRhOiBwZXJjZW50YWdlIH0gKTtcblxuICAgICAgICAgICAgaXRlbS5zZXRQcm9ncmVzcyggZXZlbnQub2Zmc2V0WCAvIHRoaXMuY2xpZW50V2lkdGggKTtcblxuICAgICAgICB9O1xuXG4gICAgICAgIGZ1bmN0aW9uIG9uRGlzcG9zZSAoKSB7XG5cbiAgICAgICAgICAgIHJlbW92ZUNvbnRyb2xMaXN0ZW5lcnMoKTtcbiAgICAgICAgICAgIHByb2dyZXNzRWxlbWVudCA9IG51bGw7XG4gICAgICAgICAgICBwcm9ncmVzc0VsZW1lbnRDb250cm9sID0gbnVsbDtcblxuICAgICAgICB9XG5cbiAgICAgICAgcHJvZ3Jlc3NFbGVtZW50LmFwcGVuZENoaWxkKCBwcm9ncmVzc0VsZW1lbnRDb250cm9sICk7XG5cbiAgICAgICAgaXRlbSA9IHRoaXMuY3JlYXRlQ3VzdG9tSXRlbSgge1xuXG4gICAgICAgICAgICBzdHlsZTogeyBcblxuICAgICAgICAgICAgICAgIGZsb2F0OiAnbGVmdCcsXG4gICAgICAgICAgICAgICAgd2lkdGg6ICczMCUnLFxuICAgICAgICAgICAgICAgIGhlaWdodDogJzRweCcsXG4gICAgICAgICAgICAgICAgbWFyZ2luVG9wOiAnMjBweCcsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgxODgsMTg4LDE4OCwwLjgpJ1xuXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBvblRhcDogb25UYXAsXG4gICAgICAgICAgICBvbkRpc3Bvc2U6IG9uRGlzcG9zZVxuXG4gICAgICAgIH0gKTtcblxuICAgICAgICBpdGVtLmFwcGVuZENoaWxkKCBwcm9ncmVzc0VsZW1lbnQgKTtcblxuICAgICAgICBpdGVtLnNldFByb2dyZXNzID0gZnVuY3Rpb24oIHBlcmNlbnRhZ2UgKSB7XG5cbiAgICAgICAgICAgIHByb2dyZXNzRWxlbWVudC5zdHlsZS53aWR0aCA9IHBlcmNlbnRhZ2UgKiAxMDAgKyAnJSc7XG5cbiAgICAgICAgfTtcdFx0XG5cbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCAndmlkZW8tdXBkYXRlJywgZnVuY3Rpb24gKCBldmVudCApIHsgXG5cbiAgICAgICAgICAgIGl0ZW0uc2V0UHJvZ3Jlc3MoIGV2ZW50LnBlcmNlbnRhZ2UgKTsgXG5cbiAgICAgICAgfSApO1xuXG4gICAgICAgIGl0ZW0ucHJvZ3Jlc3NFbGVtZW50ID0gcHJvZ3Jlc3NFbGVtZW50O1xuICAgICAgICBpdGVtLnByb2dyZXNzRWxlbWVudENvbnRyb2wgPSBwcm9ncmVzc0VsZW1lbnRDb250cm9sO1xuXG4gICAgICAgIHJldHVybiBpdGVtO1xuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBtZW51IGl0ZW1cbiAgICAgKiBAcGFyYW0gIHtzdHJpbmd9IHRpdGxlIC0gVGl0bGUgdG8gZGlzcGxheVxuICAgICAqIEBtZW1iZXJPZiBXaWRnZXRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gLSBBbiBhbmNob3IgdGFnIGVsZW1lbnRcbiAgICAgKi9cbiAgICBjcmVhdGVNZW51SXRlbTogZnVuY3Rpb24gKCB0aXRsZSApIHtcblxuICAgICAgICBjb25zdCBzY29wZSA9IHRoaXM7IFxuICAgICAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2EnICk7XG4gICAgICAgIGl0ZW0udGV4dENvbnRlbnQgPSB0aXRsZTtcbiAgICAgICAgaXRlbS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgaXRlbS5zdHlsZS5wYWRkaW5nID0gJzEwcHgnO1xuICAgICAgICBpdGVtLnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ25vbmUnO1xuICAgICAgICBpdGVtLnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJztcbiAgICAgICAgaXRlbS5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ2F1dG8nO1xuICAgICAgICBpdGVtLnN0eWxlLnRyYW5zaXRpb24gPSB0aGlzLkRFRkFVTFRfVFJBTlNJVElPTjtcblxuICAgICAgICBpdGVtLnNsaWRlID0gZnVuY3Rpb24gKCByaWdodCApIHtcblxuICAgICAgICAgICAgdGhpcy5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgnICsgKCByaWdodCA/ICcnIDogJy0nICkgKyAnMTAwJSknO1xuXG4gICAgICAgIH07XG5cbiAgICAgICAgaXRlbS51bnNsaWRlID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICB0aGlzLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKDApJztcblxuICAgICAgICB9O1xuXG4gICAgICAgIGl0ZW0uc2V0SWNvbiA9IGZ1bmN0aW9uICggdXJsICkge1xuXG4gICAgICAgICAgICBpZiAoIHRoaXMuaWNvbiApIHtcblxuICAgICAgICAgICAgICAgIHRoaXMuaWNvbi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAndXJsKCcgKyB1cmwgKyAnKSc7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9O1xuXG4gICAgICAgIGl0ZW0uc2V0U2VsZWN0aW9uVGl0bGUgPSBmdW5jdGlvbiAoIHRpdGxlICkge1xuXG4gICAgICAgICAgICBpZiAoIHRoaXMuc2VsZWN0aW9uICkge1xuXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24udGV4dENvbnRlbnQgPSB0aXRsZTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH07XG5cbiAgICAgICAgaXRlbS5hZGRTZWxlY3Rpb24gPSBmdW5jdGlvbiAoIG5hbWUgKSB7XG5cdFx0XHRcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdzcGFuJyApO1xuICAgICAgICAgICAgc2VsZWN0aW9uLnN0eWxlLmZvbnRTaXplID0gJzEzcHgnO1xuICAgICAgICAgICAgc2VsZWN0aW9uLnN0eWxlLmZvbnRXZWlnaHQgPSAnMzAwJztcbiAgICAgICAgICAgIHNlbGVjdGlvbi5zdHlsZS5mbG9hdCA9ICdyaWdodCc7XG5cbiAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uID0gc2VsZWN0aW9uO1xuICAgICAgICAgICAgdGhpcy5zZXRTZWxlY3Rpb25UaXRsZSggbmFtZSApO1xuICAgICAgICAgICAgdGhpcy5hcHBlbmRDaGlsZCggc2VsZWN0aW9uICk7XG5cdFx0XHRcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICAgIH07XG5cbiAgICAgICAgaXRlbS5hZGRJY29uID0gZnVuY3Rpb24gKCB1cmwgPSBEYXRhSW1hZ2UuQ2hldnJvblJpZ2h0LCBsZWZ0ID0gZmFsc2UsIGZsaXAgPSBmYWxzZSApIHtcblx0XHRcdFxuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdzcGFuJyApO1xuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5mbG9hdCA9IGxlZnQgPyAnbGVmdCcgOiAncmlnaHQnO1xuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS53aWR0aCA9ICcxN3B4JztcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gJzE3cHgnO1xuICAgICAgICAgICAgZWxlbWVudC5zdHlsZVsgJ21hcmdpbicgKyAoIGxlZnQgPyAnUmlnaHQnIDogJ0xlZnQnICkgXSA9ICcxMnB4JztcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZFNpemUgPSAnY292ZXInO1xuXG4gICAgICAgICAgICBpZiAoIGZsaXAgKSB7XG5cbiAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGVaKDE4MGRlZyknO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuaWNvbiA9IGVsZW1lbnQ7XG4gICAgICAgICAgICB0aGlzLnNldEljb24oIHVybCApO1xuICAgICAgICAgICAgdGhpcy5hcHBlbmRDaGlsZCggZWxlbWVudCApO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgICB9O1xuXG4gICAgICAgIGl0ZW0uYWRkU3ViTWVudSA9IGZ1bmN0aW9uICggdGl0bGUsIGl0ZW1zICkge1xuXG4gICAgICAgICAgICB0aGlzLnN1Yk1lbnUgPSBzY29wZS5jcmVhdGVTdWJNZW51KCB0aXRsZSwgaXRlbXMgKTtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICAgICAgfTtcblxuICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZWVudGVyJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0XG4gICAgICAgICAgICB0aGlzLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZTBlMGUwJztcblxuICAgICAgICB9LCBmYWxzZSApO1xuXG4gICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNlbGVhdmUnLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcbiAgICAgICAgICAgIHRoaXMuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNmYWZhZmEnO1xuXG4gICAgICAgIH0sIGZhbHNlICk7XG5cbiAgICAgICAgcmV0dXJuIGl0ZW07XG5cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIG1lbnUgaXRlbSBoZWFkZXJcbiAgICAgKiBAcGFyYW0gIHtzdHJpbmd9IHRpdGxlIC0gVGl0bGUgdG8gZGlzcGxheVxuICAgICAqIEBtZW1iZXJPZiBXaWRnZXRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gLSBBbiBhbmNob3IgdGFnIGVsZW1lbnRcbiAgICAgKi9cbiAgICBjcmVhdGVNZW51SXRlbUhlYWRlcjogZnVuY3Rpb24gKCB0aXRsZSApIHtcblxuICAgICAgICBjb25zdCBoZWFkZXIgPSB0aGlzLmNyZWF0ZU1lbnVJdGVtKCB0aXRsZSApO1xuXG4gICAgICAgIGhlYWRlci5zdHlsZS5ib3JkZXJCb3R0b20gPSAnMXB4IHNvbGlkICMzMzMnO1xuICAgICAgICBoZWFkZXIuc3R5bGUucGFkZGluZ0JvdHRvbSA9ICcxNXB4JztcblxuICAgICAgICByZXR1cm4gaGVhZGVyO1xuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBtYWluIG1lbnVcbiAgICAgKiBAcGFyYW0gIHthcnJheX0gbWVudXMgLSBNZW51IGFycmF5IGxpc3RcbiAgICAgKiBAbWVtYmVyT2YgV2lkZ2V0XG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHJldHVybiB7SFRNTEVsZW1lbnR9IC0gQSBzcGFuIGVsZW1lbnRcbiAgICAgKi9cbiAgICBjcmVhdGVNYWluTWVudTogZnVuY3Rpb24gKCBtZW51cyApIHtcblx0XHRcbiAgICAgICAgbGV0IHNjb3BlID0gdGhpcywgbWVudSA9IHRoaXMuY3JlYXRlTWVudSgpO1xuXG4gICAgICAgIG1lbnUuX3dpZHRoID0gMjAwO1xuICAgICAgICBtZW51LmNoYW5nZVNpemUoIG1lbnUuX3dpZHRoICk7XG5cbiAgICAgICAgZnVuY3Rpb24gb25UYXAgKCBldmVudCApIHtcblxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgICAgICBsZXQgbWFpbk1lbnUgPSBzY29wZS5tYWluTWVudSwgc3ViTWVudSA9IHRoaXMuc3ViTWVudTtcblxuICAgICAgICAgICAgZnVuY3Rpb24gb25OZXh0VGljayAoKSB7XG5cbiAgICAgICAgICAgICAgICBtYWluTWVudS5jaGFuZ2VTaXplKCBzdWJNZW51LmNsaWVudFdpZHRoICk7XG4gICAgICAgICAgICAgICAgc3ViTWVudS5zaG93KCk7XG4gICAgICAgICAgICAgICAgc3ViTWVudS51bnNsaWRlQWxsKCk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbWFpbk1lbnUuaGlkZSgpO1xuICAgICAgICAgICAgbWFpbk1lbnUuc2xpZGVBbGwoKTtcbiAgICAgICAgICAgIG1haW5NZW51LnBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoIHN1Yk1lbnUgKTtcblxuICAgICAgICAgICAgc2NvcGUuYWN0aXZlTWFpbkl0ZW0gPSB0aGlzO1xuICAgICAgICAgICAgc2NvcGUuYWN0aXZlU3ViTWVudSA9IHN1Yk1lbnU7XG5cbiAgICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoIG9uTmV4dFRpY2sgKTtcblxuICAgICAgICB9O1xuXG4gICAgICAgIGZvciAoIHZhciBpID0gMDsgaSA8IG1lbnVzLmxlbmd0aDsgaSsrICkge1xuXG4gICAgICAgICAgICB2YXIgaXRlbSA9IG1lbnUuYWRkSXRlbSggbWVudXNbIGkgXS50aXRsZSApO1xuXG4gICAgICAgICAgICBpdGVtLnN0eWxlLnBhZGRpbmdMZWZ0ID0gJzIwcHgnO1xuXG4gICAgICAgICAgICBpdGVtLmFkZEljb24oKVxuICAgICAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCBzY29wZS5UT1VDSF9FTkFCTEVEID8gJ3RvdWNoZW5kJyA6ICdjbGljaycsIG9uVGFwLCBmYWxzZSApO1xuXG4gICAgICAgICAgICBpZiAoIG1lbnVzWyBpIF0uc3ViTWVudSAmJiBtZW51c1sgaSBdLnN1Yk1lbnUubGVuZ3RoID4gMCApIHtcblxuICAgICAgICAgICAgICAgIHZhciB0aXRsZSA9IG1lbnVzWyBpIF0uc3ViTWVudVsgMCBdLnRpdGxlO1xuXG4gICAgICAgICAgICAgICAgaXRlbS5hZGRTZWxlY3Rpb24oIHRpdGxlIClcbiAgICAgICAgICAgICAgICAgICAgLmFkZFN1Yk1lbnUoIG1lbnVzWyBpIF0udGl0bGUsIG1lbnVzWyBpIF0uc3ViTWVudSApO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBtZW51O1xuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBzdWIgbWVudVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0aXRsZSAtIFN1YiBtZW51IHRpdGxlXG4gICAgICogQHBhcmFtIHthcnJheX0gaXRlbXMgLSBJdGVtIGFycmF5IGxpc3RcbiAgICAgKiBAbWVtYmVyT2YgV2lkZ2V0XG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHJldHVybiB7SFRNTEVsZW1lbnR9IC0gQSBzcGFuIGVsZW1lbnRcbiAgICAgKi9cbiAgICBjcmVhdGVTdWJNZW51OiBmdW5jdGlvbiAoIHRpdGxlLCBpdGVtcyApIHtcblxuICAgICAgICBsZXQgc2NvcGUgPSB0aGlzLCBtZW51LCBzdWJNZW51ID0gdGhpcy5jcmVhdGVNZW51KCk7XG5cbiAgICAgICAgc3ViTWVudS5pdGVtcyA9IGl0ZW1zO1xuICAgICAgICBzdWJNZW51LmFjdGl2ZUl0ZW0gPSBudWxsO1xuXG4gICAgICAgIGZ1bmN0aW9uIG9uVGFwICggZXZlbnQgKSB7XG5cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICAgICAgbWVudSA9IHNjb3BlLm1haW5NZW51O1xuICAgICAgICAgICAgbWVudS5jaGFuZ2VTaXplKCBtZW51Ll93aWR0aCApO1xuICAgICAgICAgICAgbWVudS51bnNsaWRlQWxsKCk7XG4gICAgICAgICAgICBtZW51LnNob3coKTtcbiAgICAgICAgICAgIHN1Yk1lbnUuc2xpZGVBbGwoIHRydWUgKTtcbiAgICAgICAgICAgIHN1Yk1lbnUuaGlkZSgpO1xuXG4gICAgICAgICAgICBpZiAoIHRoaXMudHlwZSAhPT0gJ2hlYWRlcicgKSB7XG5cbiAgICAgICAgICAgICAgICBzdWJNZW51LnNldEFjdGl2ZUl0ZW0oIHRoaXMgKTtcbiAgICAgICAgICAgICAgICBzY29wZS5hY3RpdmVNYWluSXRlbS5zZXRTZWxlY3Rpb25UaXRsZSggdGhpcy50ZXh0Q29udGVudCApO1xuXG4gICAgICAgICAgICAgICAgaWYgKCB0aGlzLmhhbmRsZXIgKSB7IHRoaXMuaGFuZGxlcigpOyB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgc3ViTWVudS5hZGRIZWFkZXIoIHRpdGxlICkuYWRkSWNvbiggdW5kZWZpbmVkLCB0cnVlLCB0cnVlICkuYWRkRXZlbnRMaXN0ZW5lciggc2NvcGUuVE9VQ0hfRU5BQkxFRCA/ICd0b3VjaGVuZCcgOiAnY2xpY2snLCBvblRhcCwgZmFsc2UgKTtcblxuICAgICAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKyApIHtcblxuICAgICAgICAgICAgY29uc3QgaXRlbSA9IHN1Yk1lbnUuYWRkSXRlbSggaXRlbXNbIGkgXS50aXRsZSApO1xuXG4gICAgICAgICAgICBpdGVtLnN0eWxlLmZvbnRXZWlnaHQgPSAzMDA7XG4gICAgICAgICAgICBpdGVtLmhhbmRsZXIgPSBpdGVtc1sgaSBdLmhhbmRsZXI7XG4gICAgICAgICAgICBpdGVtLmFkZEljb24oICcgJywgdHJ1ZSApO1xuICAgICAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCBzY29wZS5UT1VDSF9FTkFCTEVEID8gJ3RvdWNoZW5kJyA6ICdjbGljaycsIG9uVGFwLCBmYWxzZSApO1xuXG4gICAgICAgICAgICBpZiAoICFzdWJNZW51LmFjdGl2ZUl0ZW0gKSB7XG5cbiAgICAgICAgICAgICAgICBzdWJNZW51LnNldEFjdGl2ZUl0ZW0oIGl0ZW0gKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICBzdWJNZW51LnNsaWRlQWxsKCB0cnVlICk7XG5cbiAgICAgICAgcmV0dXJuIHN1Yk1lbnU7XG5cdFx0XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBnZW5lcmFsIG1lbnVcbiAgICAgKiBAbWVtYmVyT2YgV2lkZ2V0XG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHJldHVybiB7SFRNTEVsZW1lbnR9IC0gQSBzcGFuIGVsZW1lbnRcbiAgICAgKi9cbiAgICBjcmVhdGVNZW51OiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgICAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ3NwYW4nICk7XG4gICAgICAgIGNvbnN0IHN0eWxlID0gbWVudS5zdHlsZTtcblxuICAgICAgICBzdHlsZS5wYWRkaW5nID0gJzVweCAwJztcbiAgICAgICAgc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xuICAgICAgICBzdHlsZS5ib3R0b20gPSAnMTAwJSc7XG4gICAgICAgIHN0eWxlLnJpZ2h0ID0gJzE0cHgnO1xuICAgICAgICBzdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2ZhZmFmYSc7XG4gICAgICAgIHN0eWxlLmZvbnRGYW1pbHkgPSAnSGVsdmV0aWNhIE5ldWUnO1xuICAgICAgICBzdHlsZS5mb250U2l6ZSA9ICcxNHB4JztcbiAgICAgICAgc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAgICBzdHlsZS5vcGFjaXR5ID0gMDtcbiAgICAgICAgc3R5bGUuYm94U2hhZG93ID0gJzAgMCAxMnB0IHJnYmEoMCwwLDAsMC4yNSknO1xuICAgICAgICBzdHlsZS5ib3JkZXJSYWRpdXMgPSAnMnB4JztcbiAgICAgICAgc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgICAgICAgc3R5bGUud2lsbENoYW5nZSA9ICd3aWR0aCwgaGVpZ2h0LCBvcGFjaXR5JztcbiAgICAgICAgc3R5bGUucG9pbnRlckV2ZW50cyA9ICdhdXRvJztcbiAgICAgICAgc3R5bGUudHJhbnNpdGlvbiA9IHRoaXMuREVGQVVMVF9UUkFOU0lUSU9OO1xuXG4gICAgICAgIG1lbnUudmlzaWJsZSA9IGZhbHNlO1xuXG4gICAgICAgIG1lbnUuY2hhbmdlU2l6ZSA9IGZ1bmN0aW9uICggd2lkdGgsIGhlaWdodCApIHtcblxuICAgICAgICAgICAgaWYgKCB3aWR0aCApIHtcblxuICAgICAgICAgICAgICAgIHRoaXMuc3R5bGUud2lkdGggPSB3aWR0aCArICdweCc7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCBoZWlnaHQgKSB7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnN0eWxlLmhlaWdodCA9IGhlaWdodCArICdweCc7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9O1xuXG4gICAgICAgIG1lbnUuc2hvdyA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgdGhpcy5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgICAgICAgICAgIHRoaXMuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICAgICAgICAgIHRoaXMudmlzaWJsZSA9IHRydWU7XG5cbiAgICAgICAgfTtcblxuICAgICAgICBtZW51LmhpZGUgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgIHRoaXMuc3R5bGUub3BhY2l0eSA9IDA7XG4gICAgICAgICAgICB0aGlzLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICAgICAgICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xuXG4gICAgICAgIH07XG5cbiAgICAgICAgbWVudS50b2dnbGUgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgIGlmICggdGhpcy52aXNpYmxlICkge1xuXG4gICAgICAgICAgICAgICAgdGhpcy5oaWRlKCk7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnNob3coKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH07XG5cbiAgICAgICAgbWVudS5zbGlkZUFsbCA9IGZ1bmN0aW9uICggcmlnaHQgKSB7XG5cbiAgICAgICAgICAgIGZvciAoIGxldCBpID0gMDsgaSA8IG1lbnUuY2hpbGRyZW4ubGVuZ3RoOyBpKysgKXtcblxuICAgICAgICAgICAgICAgIGlmICggbWVudS5jaGlsZHJlblsgaSBdLnNsaWRlICkge1xuXG4gICAgICAgICAgICAgICAgICAgIG1lbnUuY2hpbGRyZW5bIGkgXS5zbGlkZSggcmlnaHQgKTtcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH07XG5cbiAgICAgICAgbWVudS51bnNsaWRlQWxsID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCBtZW51LmNoaWxkcmVuLmxlbmd0aDsgaSsrICl7XG5cbiAgICAgICAgICAgICAgICBpZiAoIG1lbnUuY2hpbGRyZW5bIGkgXS51bnNsaWRlICkge1xuXG4gICAgICAgICAgICAgICAgICAgIG1lbnUuY2hpbGRyZW5bIGkgXS51bnNsaWRlKCk7XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9O1xuXG4gICAgICAgIG1lbnUuYWRkSGVhZGVyID0gZnVuY3Rpb24gKCB0aXRsZSApIHtcblxuICAgICAgICAgICAgY29uc3QgaGVhZGVyID0gc2NvcGUuY3JlYXRlTWVudUl0ZW1IZWFkZXIoIHRpdGxlICk7XG4gICAgICAgICAgICBoZWFkZXIudHlwZSA9ICdoZWFkZXInO1xuXG4gICAgICAgICAgICB0aGlzLmFwcGVuZENoaWxkKCBoZWFkZXIgKTtcblxuICAgICAgICAgICAgcmV0dXJuIGhlYWRlcjtcblxuICAgICAgICB9O1xuXG4gICAgICAgIG1lbnUuYWRkSXRlbSA9IGZ1bmN0aW9uICggdGl0bGUgKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBzY29wZS5jcmVhdGVNZW51SXRlbSggdGl0bGUgKTtcbiAgICAgICAgICAgIGl0ZW0udHlwZSA9ICdpdGVtJztcblxuICAgICAgICAgICAgdGhpcy5hcHBlbmRDaGlsZCggaXRlbSApO1xuXG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcblxuICAgICAgICB9O1xuXG4gICAgICAgIG1lbnUuc2V0QWN0aXZlSXRlbSA9IGZ1bmN0aW9uICggaXRlbSApIHtcblxuICAgICAgICAgICAgaWYgKCB0aGlzLmFjdGl2ZUl0ZW0gKSB7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZUl0ZW0uc2V0SWNvbiggJyAnICk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaXRlbS5zZXRJY29uKCBEYXRhSW1hZ2UuQ2hlY2sgKTtcblxuICAgICAgICAgICAgdGhpcy5hY3RpdmVJdGVtID0gaXRlbTtcblxuICAgICAgICB9O1xuXG4gICAgICAgIG1lbnUuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNlbW92ZScsIHRoaXMuUFJFVkVOVF9FVkVOVF9IQU5ETEVSLCB0cnVlICk7XG4gICAgICAgIG1lbnUuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNldXAnLCB0aGlzLlBSRVZFTlRfRVZFTlRfSEFORExFUiwgdHJ1ZSApO1xuICAgICAgICBtZW51LmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZWRvd24nLCB0aGlzLlBSRVZFTlRfRVZFTlRfSEFORExFUiwgdHJ1ZSApO1xuXG4gICAgICAgIHJldHVybiBtZW51O1xuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBjdXN0b20gaXRlbSBlbGVtZW50XG4gICAgICogQG1lbWJlck9mIFdpZGdldFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEByZXR1cm4ge0hUTUxTcGFuRWxlbWVudH0gLSBUaGUgZG9tIGVsZW1lbnQgaWNvblxuICAgICAqL1xuICAgIGNyZWF0ZUN1c3RvbUl0ZW06IGZ1bmN0aW9uICggb3B0aW9ucyA9IHt9ICkge1xuXG4gICAgICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICAgICAgY29uc3QgaXRlbSA9IG9wdGlvbnMuZWxlbWVudCB8fCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnc3BhbicgKTtcbiAgICAgICAgY29uc3QgeyBvbkRpc3Bvc2UgfSA9IG9wdGlvbnM7XG5cbiAgICAgICAgaXRlbS5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcic7XG4gICAgICAgIGl0ZW0uc3R5bGUuZmxvYXQgPSAncmlnaHQnO1xuICAgICAgICBpdGVtLnN0eWxlLndpZHRoID0gJzQ0cHgnO1xuICAgICAgICBpdGVtLnN0eWxlLmhlaWdodCA9ICcxMDAlJztcbiAgICAgICAgaXRlbS5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9ICc2MCUnO1xuICAgICAgICBpdGVtLnN0eWxlLmJhY2tncm91bmRSZXBlYXQgPSAnbm8tcmVwZWF0JztcbiAgICAgICAgaXRlbS5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb24gPSAnY2VudGVyJztcbiAgICAgICAgaXRlbS5zdHlsZS53ZWJraXRVc2VyU2VsZWN0ID0gXG5cdFx0aXRlbS5zdHlsZS5Nb3pVc2VyU2VsZWN0ID0gXG5cdFx0aXRlbS5zdHlsZS51c2VyU2VsZWN0ID0gJ25vbmUnO1xuICAgICAgICBpdGVtLnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcbiAgICAgICAgaXRlbS5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ2F1dG8nO1xuXG4gICAgICAgIC8vIFdoaXRlIGdsb3cgb24gaWNvblxuICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoIHNjb3BlLlRPVUNIX0VOQUJMRUQgPyAndG91Y2hzdGFydCcgOiAnbW91c2VlbnRlcicsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaXRlbS5zdHlsZS5maWx0ZXIgPSBcblx0XHRcdGl0ZW0uc3R5bGUud2Via2l0RmlsdGVyID0gJ2Ryb3Atc2hhZG93KDAgMCA1cHggcmdiYSgyNTUsMjU1LDI1NSwxKSknO1xuICAgICAgICB9LCB7IHBhc3NpdmU6IHRydWUgfSk7XG4gICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lciggc2NvcGUuVE9VQ0hfRU5BQkxFRCA/ICd0b3VjaGVuZCcgOiAnbW91c2VsZWF2ZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaXRlbS5zdHlsZS5maWx0ZXIgPSBcblx0XHRcdGl0ZW0uc3R5bGUud2Via2l0RmlsdGVyID0gJyc7XG4gICAgICAgIH0sIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcblxuICAgICAgICB0aGlzLm1lcmdlU3R5bGVPcHRpb25zKCBpdGVtLCBvcHRpb25zLnN0eWxlICk7XG5cbiAgICAgICAgaWYgKCBvcHRpb25zLm9uVGFwICkge1xuXG4gICAgICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoIHNjb3BlLlRPVUNIX0VOQUJMRUQgPyAndG91Y2hlbmQnIDogJ2NsaWNrJywgb3B0aW9ucy5vblRhcCwgZmFsc2UgKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgaXRlbS5kaXNwb3NlID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICBpdGVtLnJlbW92ZUV2ZW50TGlzdGVuZXIoIHNjb3BlLlRPVUNIX0VOQUJMRUQgPyAndG91Y2hlbmQnIDogJ2NsaWNrJywgb3B0aW9ucy5vblRhcCwgZmFsc2UgKTtcblxuICAgICAgICAgICAgaWYgKCBvbkRpc3Bvc2UgKSB7IG9wdGlvbnMub25EaXNwb3NlKCk7IH1cblxuICAgICAgICB9O1xuXHRcdFxuICAgICAgICByZXR1cm4gaXRlbTtcblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBNZXJnZSBpdGVtIGNzcyBzdHlsZVxuICAgICAqIEBwYXJhbSAge0hUTUxFbGVtZW50fSBlbGVtZW50IC0gVGhlIGVsZW1lbnQgdG8gYmUgbWVyZ2VkIHdpdGggc3R5bGVcbiAgICAgKiBAcGFyYW0gIHtvYmplY3R9IG9wdGlvbnMgLSBUaGUgc3R5bGUgb3B0aW9uc1xuICAgICAqIEBtZW1iZXJPZiBXaWRnZXRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gLSBUaGUgc2FtZSBlbGVtZW50IHdpdGggbWVyZ2VkIHN0eWxlc1xuICAgICAqL1xuICAgIG1lcmdlU3R5bGVPcHRpb25zOiBmdW5jdGlvbiAoIGVsZW1lbnQsIG9wdGlvbnMgPSB7fSApIHtcblxuICAgICAgICBmb3IgKCBsZXQgcHJvcGVydHkgaW4gb3B0aW9ucyApe1xuXG4gICAgICAgICAgICBpZiAoIG9wdGlvbnMuaGFzT3duUHJvcGVydHkoIHByb3BlcnR5ICkgKSB7XG5cbiAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlWyBwcm9wZXJ0eSBdID0gb3B0aW9uc1sgcHJvcGVydHkgXTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZWxlbWVudDtcblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBEaXNwb3NlIHdpZGdldHMgYnkgZGV0YWNoaW5nIGRvbSBlbGVtZW50cyBmcm9tIGNvbnRhaW5lclxuICAgICAqIEBtZW1iZXJPZiBXaWRnZXRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBkaXNwb3NlOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgaWYgKCB0aGlzLmJhckVsZW1lbnQgKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVDaGlsZCggdGhpcy5iYXJFbGVtZW50ICk7XG4gICAgICAgICAgICB0aGlzLmJhckVsZW1lbnQuZGlzcG9zZSgpO1xuICAgICAgICAgICAgdGhpcy5iYXJFbGVtZW50ID0gbnVsbDtcblxuICAgICAgICB9XG5cbiAgICB9XG5cdFxufSApO1xuXG5leHBvcnQgeyBXaWRnZXQgfTsiLCJpbXBvcnQgeyBJbmZvc3BvdCB9IGZyb20gJy4uL2luZm9zcG90L0luZm9zcG90JztcbmltcG9ydCB7IERhdGFJbWFnZSB9IGZyb20gJy4uL0RhdGFJbWFnZSc7XG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5pbXBvcnQgVFdFRU4gZnJvbSAnQHR3ZWVuanMvdHdlZW4uanMnO1xuXG5cbi8qKlxuICogQGNsYXNzZGVzYyBCYXNlIFBhbm9yYW1hXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7VEhSRUUuR2VvbWV0cnl9IGdlb21ldHJ5IC0gVGhlIGdlb21ldHJ5IGZvciB0aGlzIHBhbm9yYW1hXG4gKiBAcGFyYW0ge1RIUkVFLk1hdGVyaWFsfSBtYXRlcmlhbCAtIFRoZSBtYXRlcmlhbCBmb3IgdGhpcyBwYW5vcmFtYVxuICovXG5mdW5jdGlvbiBQYW5vcmFtYSAoIGdlb21ldHJ5LCBtYXRlcmlhbCApIHtcblxuICAgIFRIUkVFLk1lc2guY2FsbCggdGhpcywgZ2VvbWV0cnksIG1hdGVyaWFsICk7XG5cbiAgICB0aGlzLnR5cGUgPSAncGFub3JhbWEnO1xuXG4gICAgdGhpcy5JbWFnZVF1YWxpdHlMb3cgPSAxO1xuICAgIHRoaXMuSW1hZ2VRdWFsaXR5RmFpciA9IDI7XG4gICAgdGhpcy5JbWFnZVF1YWxpdHlNZWRpdW0gPSAzO1xuICAgIHRoaXMuSW1hZ2VRdWFsaXR5SGlnaCA9IDQ7XG4gICAgdGhpcy5JbWFnZVF1YWxpdHlTdXBlckhpZ2ggPSA1O1xuXG4gICAgdGhpcy5hbmltYXRpb25EdXJhdGlvbiA9IDEwMDA7XG5cbiAgICB0aGlzLmRlZmF1bHRJbmZvc3BvdFNpemUgPSAzNTA7XG5cbiAgICB0aGlzLmNvbnRhaW5lciA9IHVuZGVmaW5lZDtcblxuICAgIHRoaXMubG9hZGVkID0gZmFsc2U7XG5cbiAgICB0aGlzLmxpbmtlZFNwb3RzID0gW107XG5cbiAgICB0aGlzLmlzSW5mb3Nwb3RWaXNpYmxlID0gZmFsc2U7XG5cdFxuICAgIHRoaXMubGlua2luZ0ltYWdlVVJMID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubGlua2luZ0ltYWdlU2NhbGUgPSB1bmRlZmluZWQ7XG5cbiAgICB0aGlzLm1hdGVyaWFsLnNpZGUgPSBUSFJFRS5CYWNrU2lkZTtcbiAgICB0aGlzLm1hdGVyaWFsLm9wYWNpdHkgPSAwO1xuXG4gICAgdGhpcy5zY2FsZS54ICo9IC0xO1xuICAgIHRoaXMucmVuZGVyT3JkZXIgPSAtMTtcblxuICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG5cbiAgICB0aGlzLmluZm9zcG90QW5pbWF0aW9uID0gbmV3IFRXRUVOLlR3ZWVuKCB0aGlzICkudG8oIHt9LCB0aGlzLmFuaW1hdGlvbkR1cmF0aW9uIC8gMiApO1xuXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCAnbG9hZCcsIHRoaXMuZmFkZUluLmJpbmQoIHRoaXMgKSApO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lciggJ3Bhbm9sZW5zLWNvbnRhaW5lcicsIHRoaXMuc2V0Q29udGFpbmVyLmJpbmQoIHRoaXMgKSApO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgdGhpcy5vbkNsaWNrLmJpbmQoIHRoaXMgKSApO1xuXG4gICAgdGhpcy5zZXR1cFRyYW5zaXRpb25zKCk7XG5cbn1cblxuUGFub3JhbWEucHJvdG90eXBlID0gT2JqZWN0LmFzc2lnbiggT2JqZWN0LmNyZWF0ZSggVEhSRUUuTWVzaC5wcm90b3R5cGUgKSwge1xuXG4gICAgY29uc3RydWN0b3I6IFBhbm9yYW1hLFxuXG4gICAgLyoqXG4gICAgICogQWRkaW5nIGFuIG9iamVjdFxuICAgICAqIFRvIGNvdW50ZXIgdGhlIHNjYWxlLnggPSAtMSwgaXQgd2lsbCBhdXRvbWF0aWNhbGx5IGFkZCBhbiBcbiAgICAgKiBlbXB0eSBvYmplY3Qgd2l0aCBpbnZlcnRlZCBzY2FsZSBvbiB4XG4gICAgICogQG1lbWJlck9mIFBhbm9yYW1hXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtUSFJFRS5PYmplY3QzRH0gb2JqZWN0IC0gVGhlIG9iamVjdCB0byBiZSBhZGRlZFxuICAgICAqL1xuICAgIGFkZDogZnVuY3Rpb24gKCBvYmplY3QgKSB7XG5cbiAgICAgICAgbGV0IGludmVydGVkT2JqZWN0O1xuXG4gICAgICAgIGlmICggYXJndW1lbnRzLmxlbmd0aCA+IDEgKSB7XG5cbiAgICAgICAgICAgIGZvciAoIHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkgKysgKSB7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmFkZCggYXJndW1lbnRzWyBpIF0gKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgICB9XG5cbiAgICAgICAgLy8gSW4gY2FzZSBvZiBpbmZvc3BvdHNcbiAgICAgICAgaWYgKCBvYmplY3QgaW5zdGFuY2VvZiBJbmZvc3BvdCApIHtcblxuICAgICAgICAgICAgaW52ZXJ0ZWRPYmplY3QgPSBvYmplY3Q7XG5cbiAgICAgICAgICAgIGlmICggb2JqZWN0LmRpc3BhdGNoRXZlbnQgKSB7XG5cbiAgICAgICAgICAgICAgICBjb25zdCB7IGNvbnRhaW5lciB9ID0gdGhpcztcblxuICAgICAgICAgICAgICAgIGlmICggY29udGFpbmVyICkgeyBvYmplY3QuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAncGFub2xlbnMtY29udGFpbmVyJywgY29udGFpbmVyIH0gKTsgfVxuXHRcdFx0XHRcbiAgICAgICAgICAgICAgICBvYmplY3QuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAncGFub2xlbnMtaW5mb3Nwb3QtZm9jdXMnLCBtZXRob2Q6IGZ1bmN0aW9uICggdmVjdG9yLCBkdXJhdGlvbiwgZWFzaW5nICkge1xuXG4gICAgICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAgICAgKiBJbmZvc3BvdCBmb2N1cyBoYW5kbGVyIGV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAqIEB0eXBlIHtvYmplY3R9XG4gICAgICAgICAgICAgICAgICAgICAqIEBldmVudCBQYW5vcmFtYSNwYW5vbGVucy12aWV3ZXItaGFuZGxlclxuICAgICAgICAgICAgICAgICAgICAgKiBAcHJvcGVydHkge3N0cmluZ30gbWV0aG9kIC0gVmlld2VyIGZ1bmN0aW9uIG5hbWVcbiAgICAgICAgICAgICAgICAgICAgICogQHByb3BlcnR5IHsqfSBkYXRhIC0gVGhlIGFyZ3VtZW50IHRvIGJlIHBhc3NlZCBpbnRvIHRoZSBtZXRob2RcbiAgICAgICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAncGFub2xlbnMtdmlld2VyLWhhbmRsZXInLCBtZXRob2Q6ICd0d2VlbkNvbnRyb2xDZW50ZXInLCBkYXRhOiBbIHZlY3RvciwgZHVyYXRpb24sIGVhc2luZyBdIH0gKTtcblxuXG4gICAgICAgICAgICAgICAgfS5iaW5kKCB0aGlzICkgfSApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIC8vIENvdW50ZXIgc2NhbGUueCA9IC0xIGVmZmVjdFxuICAgICAgICAgICAgaW52ZXJ0ZWRPYmplY3QgPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcbiAgICAgICAgICAgIGludmVydGVkT2JqZWN0LnNjYWxlLnggPSAtMTtcbiAgICAgICAgICAgIGludmVydGVkT2JqZWN0LnNjYWxlUGxhY2VIb2xkZXIgPSB0cnVlO1xuICAgICAgICAgICAgaW52ZXJ0ZWRPYmplY3QuYWRkKCBvYmplY3QgKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgVEhSRUUuT2JqZWN0M0QucHJvdG90eXBlLmFkZC5jYWxsKCB0aGlzLCBpbnZlcnRlZE9iamVjdCApO1xuXG4gICAgfSxcblxuICAgIGxvYWQ6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICB0aGlzLm9uTG9hZCgpO1xuXHRcdFxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDbGljayBldmVudCBoYW5kbGVyXG4gICAgICogQHBhcmFtICB7b2JqZWN0fSBldmVudCAtIENsaWNrIGV2ZW50XG4gICAgICogQG1lbWJlck9mIFBhbm9yYW1hXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQGZpcmVzIEluZm9zcG90I2Rpc21pc3NcbiAgICAgKi9cbiAgICBvbkNsaWNrOiBmdW5jdGlvbiAoIGV2ZW50ICkge1xuXG4gICAgICAgIGlmICggZXZlbnQuaW50ZXJzZWN0cyAmJiBldmVudC5pbnRlcnNlY3RzLmxlbmd0aCA9PT0gMCApIHtcblxuICAgICAgICAgICAgdGhpcy50cmF2ZXJzZSggZnVuY3Rpb24gKCBvYmplY3QgKSB7XG5cbiAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgKiBEaW1pc3MgZXZlbnRcbiAgICAgICAgICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAgICAgICAgICAgICAqIEBldmVudCBJbmZvc3BvdCNkaXNtaXNzXG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgb2JqZWN0LmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ2Rpc21pc3MnIH0gKTtcblxuICAgICAgICAgICAgfSApO1xuXG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTZXQgY29udGFpbmVyIG9mIHRoaXMgcGFub3JhbWEgXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudHxvYmplY3R9IGRhdGEgLSBEYXRhIHdpdGggY29udGFpbmVyIGluZm9ybWF0aW9uXG4gICAgICogQG1lbWJlck9mIFBhbm9yYW1hXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQGZpcmVzIEluZm9zcG90I3Bhbm9sZW5zLWNvbnRhaW5lclxuICAgICAqL1xuICAgIHNldENvbnRhaW5lcjogZnVuY3Rpb24gKCBkYXRhICkge1xuXG4gICAgICAgIGxldCBjb250YWluZXI7XG5cbiAgICAgICAgaWYgKCBkYXRhIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgKSB7XG5cbiAgICAgICAgICAgIGNvbnRhaW5lciA9IGRhdGE7XG5cbiAgICAgICAgfSBlbHNlIGlmICggZGF0YSAmJiBkYXRhLmNvbnRhaW5lciApIHtcblxuICAgICAgICAgICAgY29udGFpbmVyID0gZGF0YS5jb250YWluZXI7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggY29udGFpbmVyICkge1xuXG4gICAgICAgICAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goIGZ1bmN0aW9uICggY2hpbGQgKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoIGNoaWxkIGluc3RhbmNlb2YgSW5mb3Nwb3QgJiYgY2hpbGQuZGlzcGF0Y2hFdmVudCApIHtcblxuICAgICAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgICAgICogU2V0IGNvbnRhaW5lciBldmVudFxuICAgICAgICAgICAgICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAgICAgICAgICAgICAgICAgKiBAZXZlbnQgSW5mb3Nwb3QjcGFub2xlbnMtY29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgICAqIEBwcm9wZXJ0eSB7SFRNTEVsZW1lbnR9IGNvbnRhaW5lciAtIFRoZSBjb250YWluZXIgb2YgdGhpcyBwYW5vcmFtYVxuICAgICAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICAgICAgY2hpbGQuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAncGFub2xlbnMtY29udGFpbmVyJywgY29udGFpbmVyOiBjb250YWluZXIgfSApO1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9ICk7XG5cbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xuXG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBUaGlzIHdpbGwgYmUgY2FsbGVkIHdoZW4gcGFub3JhbWEgaXMgbG9hZGVkXG4gICAgICogQG1lbWJlck9mIFBhbm9yYW1hXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQGZpcmVzIFBhbm9yYW1hI2xvYWRcbiAgICAgKi9cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICB0aGlzLmxvYWRlZCA9IHRydWU7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIExvYWQgcGFub3JhbWEgZXZlbnRcbiAgICAgICAgICogQHR5cGUge29iamVjdH1cbiAgICAgICAgICogQGV2ZW50IFBhbm9yYW1hI2xvYWRcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAnbG9hZCcgfSApO1xuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFRoaXMgd2lsbCBiZSBjYWxsZWQgd2hlbiBwYW5vcmFtYSBpcyBpbiBwcm9ncmVzc1xuICAgICAqIEBtZW1iZXJPZiBQYW5vcmFtYVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBmaXJlcyBQYW5vcmFtYSNwcm9ncmVzc1xuICAgICAqL1xuICAgIG9uUHJvZ3Jlc3M6IGZ1bmN0aW9uICggcHJvZ3Jlc3MgKSB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIExvYWRpbmcgcGFub3JhbWEgcHJvZ3Jlc3MgZXZlbnRcbiAgICAgICAgICogQHR5cGUge29iamVjdH1cbiAgICAgICAgICogQGV2ZW50IFBhbm9yYW1hI3Byb2dyZXNzXG4gICAgICAgICAqIEBwcm9wZXJ0eSB7b2JqZWN0fSBwcm9ncmVzcyAtIFRoZSBwcm9ncmVzcyBvYmplY3QgY29udGFpbmluZyBsb2FkZWQgYW5kIHRvdGFsIGFtb3VudFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdwcm9ncmVzcycsIHByb2dyZXNzOiBwcm9ncmVzcyB9ICk7XG5cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVGhpcyB3aWxsIGJlIGNhbGxlZCB3aGVuIHBhbm9yYW1hIGxvYWRpbmcgaGFzIGVycm9yXG4gICAgICogQG1lbWJlck9mIFBhbm9yYW1hXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQGZpcmVzIFBhbm9yYW1hI2Vycm9yXG4gICAgICovXG4gICAgb25FcnJvcjogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBMb2FkaW5nIHBhbm9yYW1hIGVycm9yIGV2ZW50XG4gICAgICAgICAqIEB0eXBlIHtvYmplY3R9XG4gICAgICAgICAqIEBldmVudCBQYW5vcmFtYSNlcnJvclxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdlcnJvcicgfSApO1xuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEdldCB6b29tIGxldmVsIGJhc2VkIG9uIHdpbmRvdyB3aWR0aFxuICAgICAqIEBtZW1iZXJPZiBQYW5vcmFtYVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEByZXR1cm4ge251bWJlcn0gem9vbSBsZXZlbCBpbmRpY2F0aW5nIGltYWdlIHF1YWxpdHlcbiAgICAgKi9cbiAgICBnZXRab29tTGV2ZWw6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBsZXQgem9vbUxldmVsO1xuXG4gICAgICAgIGlmICggd2luZG93LmlubmVyV2lkdGggPD0gODAwICkge1xuXG4gICAgICAgICAgICB6b29tTGV2ZWwgPSB0aGlzLkltYWdlUXVhbGl0eUZhaXI7XG5cbiAgICAgICAgfSBlbHNlIGlmICggd2luZG93LmlubmVyV2lkdGggPiA4MDAgJiYgIHdpbmRvdy5pbm5lcldpZHRoIDw9IDEyODAgKSB7XG5cbiAgICAgICAgICAgIHpvb21MZXZlbCA9IHRoaXMuSW1hZ2VRdWFsaXR5TWVkaXVtO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoIHdpbmRvdy5pbm5lcldpZHRoID4gMTI4MCAmJiB3aW5kb3cuaW5uZXJXaWR0aCA8PSAxOTIwICkge1xuXG4gICAgICAgICAgICB6b29tTGV2ZWwgPSB0aGlzLkltYWdlUXVhbGl0eUhpZ2g7XG5cbiAgICAgICAgfSBlbHNlIGlmICggd2luZG93LmlubmVyV2lkdGggPiAxOTIwICkge1xuXG4gICAgICAgICAgICB6b29tTGV2ZWwgPSB0aGlzLkltYWdlUXVhbGl0eVN1cGVySGlnaDtcblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICB6b29tTGV2ZWwgPSB0aGlzLkltYWdlUXVhbGl0eUxvdztcblxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHpvb21MZXZlbDtcblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgdGV4dHVyZSBvZiBhIHBhbm9yYW1hXG4gICAgICogQG1lbWJlck9mIFBhbm9yYW1hXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtUSFJFRS5UZXh0dXJlfSB0ZXh0dXJlIC0gVGV4dHVyZSB0byBiZSB1cGRhdGVkXG4gICAgICovXG4gICAgdXBkYXRlVGV4dHVyZTogZnVuY3Rpb24gKCB0ZXh0dXJlICkge1xuXG4gICAgICAgIHRoaXMubWF0ZXJpYWwubWFwID0gdGV4dHVyZTtcbiAgICAgICAgdGhpcy5tYXRlcmlhbC5uZWVkc1VwZGF0ZSA9IHRydWU7XG5cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVG9nZ2xlIHZpc2liaWxpdHkgb2YgaW5mb3Nwb3RzIGluIHRoaXMgcGFub3JhbWFcbiAgICAgKiBAcGFyYW0gIHtib29sZWFufSBpc1Zpc2libGUgLSBWaXNpYmlsaXR5IG9mIGluZm9zcG90c1xuICAgICAqIEBwYXJhbSAge251bWJlcn0gZGVsYXkgLSBEZWxheSBpbiBtaWxsaXNlY29uZHMgdG8gY2hhbmdlIHZpc2liaWxpdHlcbiAgICAgKiBAbWVtYmVyT2YgUGFub3JhbWFcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAZmlyZXMgUGFub3JhbWEjaW5mb3Nwb3QtYW5pbWF0aW9uLWNvbXBsZXRlXG4gICAgICovXG4gICAgdG9nZ2xlSW5mb3Nwb3RWaXNpYmlsaXR5OiBmdW5jdGlvbiAoIGlzVmlzaWJsZSwgZGVsYXkgKSB7XG5cbiAgICAgICAgZGVsYXkgPSAoIGRlbGF5ICE9PSB1bmRlZmluZWQgKSA/IGRlbGF5IDogMDtcblxuICAgICAgICBjb25zdCB2aXNpYmxlID0gKCBpc1Zpc2libGUgIT09IHVuZGVmaW5lZCApID8gaXNWaXNpYmxlIDogKCB0aGlzLmlzSW5mb3Nwb3RWaXNpYmxlID8gZmFsc2UgOiB0cnVlICk7XG5cbiAgICAgICAgdGhpcy50cmF2ZXJzZSggZnVuY3Rpb24gKCBvYmplY3QgKSB7XG5cbiAgICAgICAgICAgIGlmICggb2JqZWN0IGluc3RhbmNlb2YgSW5mb3Nwb3QgKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoIHZpc2libGUgKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0LnNob3coIGRlbGF5ICk7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdC5oaWRlKCBkZWxheSApO1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSApO1xuXG4gICAgICAgIHRoaXMuaXNJbmZvc3BvdFZpc2libGUgPSB2aXNpYmxlO1xuXG4gICAgICAgIC8vIEFuaW1hdGlvbiBjb21wbGV0ZSBldmVudFxuICAgICAgICB0aGlzLmluZm9zcG90QW5pbWF0aW9uLm9uQ29tcGxldGUoIGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBDb21wbGV0ZSB0b2dnbGluZyBpbmZvc3BvdCB2aXNpYmlsaXR5XG4gICAgICAgICAgICAgKiBAZXZlbnQgUGFub3JhbWEjaW5mb3Nwb3QtYW5pbWF0aW9uLWNvbXBsZXRlXG4gICAgICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fSBcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdpbmZvc3BvdC1hbmltYXRpb24tY29tcGxldGUnLCB2aXNpYmxlOiB2aXNpYmxlIH0gKTtcblxuICAgICAgICB9LmJpbmQoIHRoaXMgKSApLmRlbGF5KCBkZWxheSApLnN0YXJ0KCk7XG5cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2V0IGltYWdlIG9mIHRoaXMgcGFub3JhbWEncyBsaW5raW5nIGluZm9zcG90XG4gICAgICogQG1lbWJlck9mIFBhbm9yYW1hXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVybCAgIC0gVXJsIHRvIHRoZSBpbWFnZSBhc3NldFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzY2FsZSAtIFNjYWxlIGZhY3RvciBvZiB0aGUgaW5mb3Nwb3RcbiAgICAgKi9cbiAgICBzZXRMaW5raW5nSW1hZ2U6IGZ1bmN0aW9uICggdXJsLCBzY2FsZSApIHtcblxuICAgICAgICB0aGlzLmxpbmtpbmdJbWFnZVVSTCA9IHVybDtcbiAgICAgICAgdGhpcy5saW5raW5nSW1hZ2VTY2FsZSA9IHNjYWxlO1xuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIExpbmsgb25lLXdheSBwYW5vcmFtYVxuICAgICAqIEBwYXJhbSAge1Bhbm9yYW1hfSBwYW5vICAtIFRoZSBwYW5vcmFtYSB0byBiZSBsaW5rZWQgdG9cbiAgICAgKiBAcGFyYW0gIHtUSFJFRS5WZWN0b3IzfSBwb3NpdGlvbiAtIFRoZSBwb3NpdGlvbiBvZiBpbmZvc3BvdCB3aGljaCBuYXZpZ2F0ZXMgdG8gdGhlIHBhbm9cbiAgICAgKiBAcGFyYW0gIHtudW1iZXJ9IFtpbWFnZVNjYWxlPTMwMF0gLSBJbWFnZSBzY2FsZSBvZiBsaW5rZWQgaW5mb3Nwb3RcbiAgICAgKiBAcGFyYW0gIHtzdHJpbmd9IFtpbWFnZVNyYz1EYXRhSW1hZ2UuQXJyb3ddIC0gVGhlIGltYWdlIHNvdXJjZSBvZiBsaW5rZWQgaW5mb3Nwb3RcbiAgICAgKiBAbWVtYmVyT2YgUGFub3JhbWFcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBsaW5rOiBmdW5jdGlvbiAoIHBhbm8sIHBvc2l0aW9uLCBpbWFnZVNjYWxlLCBpbWFnZVNyYyApIHtcblxuICAgICAgICBsZXQgc2NhbGUsIGltZztcblxuICAgICAgICB0aGlzLnZpc2libGUgPSB0cnVlO1xuXG4gICAgICAgIGlmICggIXBvc2l0aW9uICkge1xuXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oICdQbGVhc2Ugc3BlY2lmeSBpbmZvc3BvdCBwb3NpdGlvbiBmb3IgbGlua2luZycgKTtcblxuICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIH1cblxuICAgICAgICAvLyBJbmZvc3BvdCBzY2FsZVxuICAgICAgICBpZiAoIGltYWdlU2NhbGUgIT09IHVuZGVmaW5lZCApIHtcblxuICAgICAgICAgICAgc2NhbGUgPSBpbWFnZVNjYWxlO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoIHBhbm8ubGlua2luZ0ltYWdlU2NhbGUgIT09IHVuZGVmaW5lZCApIHtcblxuICAgICAgICAgICAgc2NhbGUgPSBwYW5vLmxpbmtpbmdJbWFnZVNjYWxlO1xuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIHNjYWxlID0gMzAwO1xuXG4gICAgICAgIH1cblxuXG4gICAgICAgIC8vIEluZm9zcG90IGltYWdlXG4gICAgICAgIGlmICggaW1hZ2VTcmMgKSB7XG5cbiAgICAgICAgICAgIGltZyA9IGltYWdlU3JjO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoIHBhbm8ubGlua2luZ0ltYWdlVVJMICkge1xuXG4gICAgICAgICAgICBpbWcgPSBwYW5vLmxpbmtpbmdJbWFnZVVSTDtcblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBpbWcgPSBEYXRhSW1hZ2UuQXJyb3c7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENyZWF0ZXMgYSBuZXcgaW5mb3Nwb3RcbiAgICAgICAgY29uc3Qgc3BvdCA9IG5ldyBJbmZvc3BvdCggc2NhbGUsIGltZyApO1xuICAgICAgICBzcG90LnBvc2l0aW9uLmNvcHkoIHBvc2l0aW9uICk7XG4gICAgICAgIHNwb3QudG9QYW5vcmFtYSA9IHBhbm87XG4gICAgICAgIHNwb3QuYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFZpZXdlciBoYW5kbGVyIGV2ZW50XG4gICAgICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAgICAgICAgICogQGV2ZW50IFBhbm9yYW1hI3Bhbm9sZW5zLXZpZXdlci1oYW5kbGVyXG4gICAgICAgICAgICAgKiBAcHJvcGVydHkge3N0cmluZ30gbWV0aG9kIC0gVmlld2VyIGZ1bmN0aW9uIG5hbWVcbiAgICAgICAgICAgICAqIEBwcm9wZXJ0eSB7Kn0gZGF0YSAtIFRoZSBhcmd1bWVudCB0byBiZSBwYXNzZWQgaW50byB0aGUgbWV0aG9kXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAncGFub2xlbnMtdmlld2VyLWhhbmRsZXInLCBtZXRob2Q6ICdzZXRQYW5vcmFtYScsIGRhdGE6IHBhbm8gfSApO1xuXG4gICAgICAgIH0uYmluZCggdGhpcyApICk7XG5cbiAgICAgICAgdGhpcy5saW5rZWRTcG90cy5wdXNoKCBzcG90ICk7XG5cbiAgICAgICAgdGhpcy5hZGQoIHNwb3QgKTtcblxuICAgICAgICB0aGlzLnZpc2libGUgPSBmYWxzZTtcblxuICAgIH0sXG5cbiAgICByZXNldDogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIHRoaXMuY2hpbGRyZW4ubGVuZ3RoID0gMDtcdFxuXG4gICAgfSxcblxuICAgIHNldHVwVHJhbnNpdGlvbnM6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICB0aGlzLmZhZGVJbkFuaW1hdGlvbiA9IG5ldyBUV0VFTi5Ud2VlbiggdGhpcy5tYXRlcmlhbCApXG4gICAgICAgICAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQgKVxuICAgICAgICAgICAgLm9uU3RhcnQoIGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgICAgIHRoaXMudmlzaWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5tYXRlcmlhbC52aXNpYmxlID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAqIEVudGVyIHBhbm9yYW1hIGZhZGUgaW4gc3RhcnQgZXZlbnRcbiAgICAgICAgICAgICAgICAgKiBAZXZlbnQgUGFub3JhbWEjZW50ZXItZmFkZS1zdGFydFxuICAgICAgICAgICAgICAgICAqIEB0eXBlIHtvYmplY3R9IFxuICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAnZW50ZXItZmFkZS1zdGFydCcgfSApO1xuXG4gICAgICAgICAgICB9LmJpbmQoIHRoaXMgKSApO1xuXG4gICAgICAgIHRoaXMuZmFkZU91dEFuaW1hdGlvbiA9IG5ldyBUV0VFTi5Ud2VlbiggdGhpcy5tYXRlcmlhbCApXG4gICAgICAgICAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQgKVxuICAgICAgICAgICAgLm9uQ29tcGxldGUoIGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIC8vIHRoaXMubWF0ZXJpYWwudmlzaWJsZSA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgKiBMZWF2ZSBwYW5vcmFtYSBjb21wbGV0ZSBldmVudFxuICAgICAgICAgICAgICAgICAqIEBldmVudCBQYW5vcmFtYSNsZWF2ZS1jb21wbGV0ZVxuICAgICAgICAgICAgICAgICAqIEB0eXBlIHtvYmplY3R9IFxuICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAnbGVhdmUtY29tcGxldGUnIH0gKTtcblxuICAgICAgICAgICAgfS5iaW5kKCB0aGlzICkgKTtcblxuICAgICAgICB0aGlzLmVudGVyVHJhbnNpdGlvbiA9IG5ldyBUV0VFTi5Ud2VlbiggdGhpcyApXG4gICAgICAgICAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQgKVxuICAgICAgICAgICAgLm9uQ29tcGxldGUoIGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAqIEVudGVyIHBhbm9yYW1hIGFuZCBhbmltYXRpb24gY29tcGxldGUgZXZlbnRcbiAgICAgICAgICAgICAgICAgKiBAZXZlbnQgUGFub3JhbWEjZW50ZXItY29tcGxldGVcbiAgICAgICAgICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fSBcbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ2VudGVyLWNvbXBsZXRlJyB9ICk7XG5cbiAgICAgICAgICAgIH0uYmluZCAoIHRoaXMgKSApXG4gICAgICAgICAgICAuc3RhcnQoKTtcblxuICAgICAgICB0aGlzLmxlYXZlVHJhbnNpdGlvbiA9IG5ldyBUV0VFTi5Ud2VlbiggdGhpcyApXG4gICAgICAgICAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQgKTtcblxuICAgIH0sXG5cbiAgICBvbkZhZGVBbmltYXRpb25VcGRhdGU6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBpZiAodGhpcy5tYXRlcmlhbCAmJiB0aGlzLm1hdGVyaWFsLnVuaWZvcm1zICYmIHRoaXMubWF0ZXJpYWwudW5pZm9ybXMub3BhY2l0eSApIHtcbiAgICAgICAgICAgIHVuaWZvcm1zLm9wYWNpdHkudmFsdWUgPSB0aGlzLm1hdGVyaWFsLm9wYWNpdHk7XG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTdGFydCBmYWRpbmcgaW4gYW5pbWF0aW9uXG4gICAgICogQG1lbWJlck9mIFBhbm9yYW1hXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQGZpcmVzIFBhbm9yYW1hI2VudGVyLWZhZGUtY29tcGxldGVcbiAgICAgKi9cbiAgICBmYWRlSW46IGZ1bmN0aW9uICggZHVyYXRpb24gKSB7XG5cbiAgICAgICAgZHVyYXRpb24gPSBkdXJhdGlvbiA+PSAwID8gZHVyYXRpb24gOiB0aGlzLmFuaW1hdGlvbkR1cmF0aW9uO1xuXG4gICAgICAgIHRoaXMuZmFkZU91dEFuaW1hdGlvbi5zdG9wKCk7XG4gICAgICAgIHRoaXMuZmFkZUluQW5pbWF0aW9uXG4gICAgICAgICAgICAudG8oIHsgb3BhY2l0eTogMSB9LCBkdXJhdGlvbiApXG4gICAgICAgICAgICAub25VcGRhdGUoIHRoaXMub25GYWRlQW5pbWF0aW9uVXBkYXRlLmJpbmQoIHRoaXMgKSApXG4gICAgICAgICAgICAub25Db21wbGV0ZSggZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICAgICAgdGhpcy50b2dnbGVJbmZvc3BvdFZpc2liaWxpdHkoIHRydWUsIGR1cmF0aW9uIC8gMiApO1xuXG4gICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICogRW50ZXIgcGFub3JhbWEgZmFkZSBjb21wbGV0ZSBldmVudFxuICAgICAgICAgICAgICAgICAqIEBldmVudCBQYW5vcmFtYSNlbnRlci1mYWRlLWNvbXBsZXRlXG4gICAgICAgICAgICAgICAgICogQHR5cGUge29iamVjdH0gXG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdlbnRlci1mYWRlLWNvbXBsZXRlJyB9ICk7XHRcdFx0XG5cbiAgICAgICAgICAgIH0uYmluZCggdGhpcyApIClcbiAgICAgICAgICAgIC5zdGFydCgpO1xuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFN0YXJ0IGZhZGluZyBvdXQgYW5pbWF0aW9uXG4gICAgICogQG1lbWJlck9mIFBhbm9yYW1hXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgZmFkZU91dDogZnVuY3Rpb24gKCBkdXJhdGlvbiApIHtcblxuICAgICAgICBkdXJhdGlvbiA9IGR1cmF0aW9uID49IDAgPyBkdXJhdGlvbiA6IHRoaXMuYW5pbWF0aW9uRHVyYXRpb247XG5cbiAgICAgICAgdGhpcy5mYWRlSW5BbmltYXRpb24uc3RvcCgpO1xuICAgICAgICB0aGlzLmZhZGVPdXRBbmltYXRpb25cbiAgICAgICAgICAgIC50byggeyBvcGFjaXR5OiAwIH0sIGR1cmF0aW9uIClcbiAgICAgICAgICAgIC5vblVwZGF0ZSggdGhpcy5vbkZhZGVBbmltYXRpb25VcGRhdGUuYmluZCggdGhpcyApIClcbiAgICAgICAgICAgIC5zdGFydCgpO1xuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFRoaXMgd2lsbCBiZSBjYWxsZWQgd2hlbiBlbnRlcmluZyBhIHBhbm9yYW1hIFxuICAgICAqIEBtZW1iZXJPZiBQYW5vcmFtYVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBmaXJlcyBQYW5vcmFtYSNlbnRlclxuICAgICAqIEBmaXJlcyBQYW5vcmFtYSNlbnRlci1zdGFydFxuICAgICAqL1xuICAgIG9uRW50ZXI6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBjb25zdCBkdXJhdGlvbiA9IHRoaXMuYW5pbWF0aW9uRHVyYXRpb247XG5cbiAgICAgICAgdGhpcy5sZWF2ZVRyYW5zaXRpb24uc3RvcCgpO1xuICAgICAgICB0aGlzLmVudGVyVHJhbnNpdGlvblxuICAgICAgICAgICAgLnRvKCB7fSwgZHVyYXRpb24gKVxuICAgICAgICAgICAgLm9uU3RhcnQoIGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAqIEVudGVyIHBhbm9yYW1hIGFuZCBhbmltYXRpb24gc3RhcnRpbmcgZXZlbnRcbiAgICAgICAgICAgICAgICAgKiBAZXZlbnQgUGFub3JhbWEjZW50ZXItc3RhcnRcbiAgICAgICAgICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fSBcbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ2VudGVyLXN0YXJ0JyB9ICk7XG5cdFx0XHRcdFxuICAgICAgICAgICAgICAgIGlmICggdGhpcy5sb2FkZWQgKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mYWRlSW4oIGR1cmF0aW9uICk7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZCgpO1xuXG4gICAgICAgICAgICAgICAgfVxuXHRcdFx0XHRcbiAgICAgICAgICAgIH0uYmluZCggdGhpcyApIClcbiAgICAgICAgICAgIC5zdGFydCgpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBFbnRlciBwYW5vcmFtYSBldmVudFxuICAgICAgICAgKiBAZXZlbnQgUGFub3JhbWEjZW50ZXJcbiAgICAgICAgICogQHR5cGUge29iamVjdH0gXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ2VudGVyJyB9ICk7XG5cbiAgICAgICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKCBjaGlsZCA9PiB7XG5cbiAgICAgICAgICAgIGNoaWxkLmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ3Bhbm9yYW1hLWVudGVyJyB9ICk7XG5cbiAgICAgICAgfSApO1xuXG4gICAgICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBUaGlzIHdpbGwgYmUgY2FsbGVkIHdoZW4gbGVhdmluZyBhIHBhbm9yYW1hXG4gICAgICogQG1lbWJlck9mIFBhbm9yYW1hXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQGZpcmVzIFBhbm9yYW1hI2xlYXZlXG4gICAgICovXG4gICAgb25MZWF2ZTogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGNvbnN0IGR1cmF0aW9uID0gdGhpcy5hbmltYXRpb25EdXJhdGlvbjtcblxuICAgICAgICB0aGlzLmVudGVyVHJhbnNpdGlvbi5zdG9wKCk7XG4gICAgICAgIHRoaXMubGVhdmVUcmFuc2l0aW9uXG4gICAgICAgICAgICAudG8oIHt9LCBkdXJhdGlvbiApXG4gICAgICAgICAgICAub25TdGFydCggZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICogTGVhdmUgcGFub3JhbWEgYW5kIGFuaW1hdGlvbiBzdGFydGluZyBldmVudFxuICAgICAgICAgICAgICAgICAqIEBldmVudCBQYW5vcmFtYSNsZWF2ZS1zdGFydFxuICAgICAgICAgICAgICAgICAqIEB0eXBlIHtvYmplY3R9IFxuICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAnbGVhdmUtc3RhcnQnIH0gKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuZmFkZU91dCggZHVyYXRpb24gKTtcbiAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZUluZm9zcG90VmlzaWJpbGl0eSggZmFsc2UgKTtcblxuICAgICAgICAgICAgfS5iaW5kKCB0aGlzICkgKVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIExlYXZlIHBhbm9yYW1hIGV2ZW50XG4gICAgICAgICAqIEBldmVudCBQYW5vcmFtYSNsZWF2ZVxuICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fSBcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAnbGVhdmUnIH0gKTtcblxuICAgICAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goIGNoaWxkID0+IHtcblxuICAgICAgICAgICAgY2hpbGQuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAncGFub3JhbWEtbGVhdmUnIH0gKTtcblxuICAgICAgICB9ICk7XG5cbiAgICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBEaXNwb3NlIHBhbm9yYW1hXG4gICAgICogQG1lbWJlck9mIFBhbm9yYW1hXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgZGlzcG9zZTogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIHRoaXMuaW5mb3Nwb3RBbmltYXRpb24uc3RvcCgpO1xuICAgICAgICB0aGlzLmZhZGVJbkFuaW1hdGlvbi5zdG9wKCk7XG4gICAgICAgIHRoaXMuZmFkZU91dEFuaW1hdGlvbi5zdG9wKCk7XG4gICAgICAgIHRoaXMuZW50ZXJUcmFuc2l0aW9uLnN0b3AoKTtcbiAgICAgICAgdGhpcy5sZWF2ZVRyYW5zaXRpb24uc3RvcCgpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBPbiBwYW5vcmFtYSBkaXNwb3NlIGhhbmRsZXJcbiAgICAgICAgICogQHR5cGUge29iamVjdH1cbiAgICAgICAgICogQGV2ZW50IFBhbm9yYW1hI3Bhbm9sZW5zLXZpZXdlci1oYW5kbGVyXG4gICAgICAgICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBtZXRob2QgLSBWaWV3ZXIgZnVuY3Rpb24gbmFtZVxuICAgICAgICAgKiBAcHJvcGVydHkgeyp9IGRhdGEgLSBUaGUgYXJndW1lbnQgdG8gYmUgcGFzc2VkIGludG8gdGhlIG1ldGhvZFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdwYW5vbGVucy12aWV3ZXItaGFuZGxlcicsIG1ldGhvZDogJ29uUGFub3JhbWFEaXNwb3NlJywgZGF0YTogdGhpcyB9ICk7XG5cbiAgICAgICAgLy8gcmVjdXJzaXZlIGRpc3Bvc2FsIG9uIDNkIG9iamVjdHNcbiAgICAgICAgZnVuY3Rpb24gcmVjdXJzaXZlRGlzcG9zZSAoIG9iamVjdCApIHtcblxuICAgICAgICAgICAgY29uc3QgeyBnZW9tZXRyeSwgbWF0ZXJpYWwgfSA9IG9iamVjdDtcblxuICAgICAgICAgICAgZm9yICggdmFyIGkgPSBvYmplY3QuY2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0gKSB7XG5cbiAgICAgICAgICAgICAgICByZWN1cnNpdmVEaXNwb3NlKCBvYmplY3QuY2hpbGRyZW5baV0gKTtcbiAgICAgICAgICAgICAgICBvYmplY3QucmVtb3ZlKCBvYmplY3QuY2hpbGRyZW5baV0gKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIG9iamVjdCBpbnN0YW5jZW9mIEluZm9zcG90ICkge1xuXG4gICAgICAgICAgICAgICAgb2JqZWN0LmRpc3Bvc2UoKTtcblxuICAgICAgICAgICAgfVxuXHRcdFx0XG4gICAgICAgICAgICBpZiAoIGdlb21ldHJ5ICkgeyBnZW9tZXRyeS5kaXNwb3NlKCk7IG9iamVjdC5nZW9tZXRyeSA9IG51bGw7IH1cbiAgICAgICAgICAgIGlmICggbWF0ZXJpYWwgKSB7IG1hdGVyaWFsLmRpc3Bvc2UoKTsgb2JqZWN0Lm1hdGVyaWFsID0gbnVsbDsgfVxuXG4gICAgICAgIH1cblxuICAgICAgICByZWN1cnNpdmVEaXNwb3NlKCB0aGlzICk7XG5cbiAgICAgICAgaWYgKCB0aGlzLnBhcmVudCApIHtcblxuICAgICAgICAgICAgdGhpcy5wYXJlbnQucmVtb3ZlKCB0aGlzICk7XG5cbiAgICAgICAgfVxuXG4gICAgfVxuXG59ICk7XG5cbmV4cG9ydCB7IFBhbm9yYW1hIH07IiwiaW1wb3J0IHsgUGFub3JhbWEgfSBmcm9tICcuL1Bhbm9yYW1hJztcbmltcG9ydCB7IFRleHR1cmVMb2FkZXIgfSBmcm9tICcuLi9sb2FkZXJzL1RleHR1cmVMb2FkZXInO1xuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xuXG4vKipcbiAqIEBjbGFzc2Rlc2MgRXF1aXJlY3Rhbmd1bGFyIGJhc2VkIGltYWdlIHBhbm9yYW1hXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7c3RyaW5nfSBpbWFnZSAtIEltYWdlIHVybCBvciBIVE1MSW1hZ2VFbGVtZW50XG4gKi9cbmZ1bmN0aW9uIEltYWdlUGFub3JhbWEgKCBpbWFnZSwgX2dlb21ldHJ5LCBfbWF0ZXJpYWwgKSB7XG5cbiAgICBjb25zdCByYWRpdXMgPSA1MDAwO1xuICAgIGNvbnN0IGdlb21ldHJ5ID0gX2dlb21ldHJ5IHx8IG5ldyBUSFJFRS5TcGhlcmVCdWZmZXJHZW9tZXRyeSggcmFkaXVzLCA2MCwgNDAgKTtcbiAgICBjb25zdCBtYXRlcmlhbCA9IF9tYXRlcmlhbCB8fCBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoIHsgb3BhY2l0eTogMCwgdHJhbnNwYXJlbnQ6IHRydWUgfSApO1xuXG4gICAgUGFub3JhbWEuY2FsbCggdGhpcywgZ2VvbWV0cnksIG1hdGVyaWFsICk7XG5cbiAgICB0aGlzLnNyYyA9IGltYWdlO1xuICAgIHRoaXMucmFkaXVzID0gcmFkaXVzO1xuXG59XG5cbkltYWdlUGFub3JhbWEucHJvdG90eXBlID0gT2JqZWN0LmFzc2lnbiggT2JqZWN0LmNyZWF0ZSggUGFub3JhbWEucHJvdG90eXBlICksIHtcblxuICAgIGNvbnN0cnVjdG9yOiBJbWFnZVBhbm9yYW1hLFxuXG4gICAgLyoqXG4gICAgICogTG9hZCBpbWFnZSBhc3NldFxuICAgICAqIEBwYXJhbSAgeyp9IHNyYyAtIFVybCBvciBpbWFnZSBlbGVtZW50XG4gICAgICogQG1lbWJlck9mIEltYWdlUGFub3JhbWFcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBsb2FkOiBmdW5jdGlvbiAoIHNyYyApIHtcblxuICAgICAgICBzcmMgPSBzcmMgfHwgdGhpcy5zcmM7XG5cbiAgICAgICAgaWYgKCAhc3JjICkgeyBcblxuICAgICAgICAgICAgY29uc29sZS53YXJuKCAnSW1hZ2Ugc291cmNlIHVuZGVmaW5lZCcgKTtcblxuICAgICAgICAgICAgcmV0dXJuOyBcblxuICAgICAgICB9IGVsc2UgaWYgKCB0eXBlb2Ygc3JjID09PSAnc3RyaW5nJyApIHtcblxuICAgICAgICAgICAgVGV4dHVyZUxvYWRlci5sb2FkKCBzcmMsIHRoaXMub25Mb2FkLmJpbmQoIHRoaXMgKSwgdGhpcy5vblByb2dyZXNzLmJpbmQoIHRoaXMgKSwgdGhpcy5vbkVycm9yLmJpbmQoIHRoaXMgKSApO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoIHNyYyBpbnN0YW5jZW9mIEhUTUxJbWFnZUVsZW1lbnQgKSB7XG5cbiAgICAgICAgICAgIHRoaXMub25Mb2FkKCBuZXcgVEhSRUUuVGV4dHVyZSggc3JjICkgKTtcblxuICAgICAgICB9XG5cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVGhpcyB3aWxsIGJlIGNhbGxlZCB3aGVuIGltYWdlIGlzIGxvYWRlZFxuICAgICAqIEBwYXJhbSAge1RIUkVFLlRleHR1cmV9IHRleHR1cmUgLSBUZXh0dXJlIHRvIGJlIHVwZGF0ZWRcbiAgICAgKiBAbWVtYmVyT2YgSW1hZ2VQYW5vcmFtYVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIG9uTG9hZDogZnVuY3Rpb24gKCB0ZXh0dXJlICkge1xuXG4gICAgICAgIHRleHR1cmUubWluRmlsdGVyID0gdGV4dHVyZS5tYWdGaWx0ZXIgPSBUSFJFRS5MaW5lYXJGaWx0ZXI7XG4gICAgICAgIHRleHR1cmUubmVlZHNVcGRhdGUgPSB0cnVlO1xuXHRcdFxuICAgICAgICB0aGlzLnVwZGF0ZVRleHR1cmUoIHRleHR1cmUgKTtcblxuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCBQYW5vcmFtYS5wcm90b3R5cGUub25Mb2FkLmJpbmQoIHRoaXMgKSApO1xuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJlc2V0XG4gICAgICogQG1lbWJlck9mIEltYWdlUGFub3JhbWFcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICByZXNldDogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIFBhbm9yYW1hLnByb3RvdHlwZS5yZXNldC5jYWxsKCB0aGlzICk7XG5cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogRGlzcG9zZVxuICAgICAqIEBtZW1iZXJPZiBJbWFnZVBhbm9yYW1hXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgZGlzcG9zZTogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGNvbnN0IHsgbWF0ZXJpYWw6IHsgbWFwIH0gfSA9IHRoaXM7XG5cbiAgICAgICAgLy8gUmVsZWFzZSBjYWNoZWQgaW1hZ2VcbiAgICAgICAgVEhSRUUuQ2FjaGUucmVtb3ZlKCB0aGlzLnNyYyApO1xuXG4gICAgICAgIGlmICggbWFwICkgeyBtYXAuZGlzcG9zZSgpOyB9XG5cbiAgICAgICAgUGFub3JhbWEucHJvdG90eXBlLmRpc3Bvc2UuY2FsbCggdGhpcyApO1xuXG4gICAgfVxuXG59ICk7XG5cbmV4cG9ydCB7IEltYWdlUGFub3JhbWEgfTsiLCJpbXBvcnQgeyBQYW5vcmFtYSB9IGZyb20gJy4vUGFub3JhbWEnO1xuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xuXG4vKipcbiAqIEBjbGFzc2Rlc2MgRW1wdHkgcGFub3JhbWFcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBFbXB0eVBhbm9yYW1hICgpIHtcblxuICAgIGNvbnN0IGdlb21ldHJ5ID0gbmV3IFRIUkVFLkJ1ZmZlckdlb21ldHJ5KCk7XG4gICAgY29uc3QgbWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoIHsgY29sb3I6IDB4MDAwMDAwLCBvcGFjaXR5OiAwLCB0cmFuc3BhcmVudDogdHJ1ZSB9ICk7XG5cbiAgICBnZW9tZXRyeS5hZGRBdHRyaWJ1dGUoICdwb3NpdGlvbicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUoIG5ldyBGbG9hdDMyQXJyYXkoKSwgMSApICk7XG5cbiAgICBQYW5vcmFtYS5jYWxsKCB0aGlzLCBnZW9tZXRyeSwgbWF0ZXJpYWwgKTtcblxufVxuXG5FbXB0eVBhbm9yYW1hLnByb3RvdHlwZSA9IE9iamVjdC5hc3NpZ24oIE9iamVjdC5jcmVhdGUoIFBhbm9yYW1hLnByb3RvdHlwZSApLCB7XG5cbiAgICBjb25zdHJ1Y3RvcjogRW1wdHlQYW5vcmFtYVxuXG59ICk7XG5cbmV4cG9ydCB7IEVtcHR5UGFub3JhbWEgfTsiLCJpbXBvcnQgeyBQYW5vcmFtYSB9IGZyb20gJy4vUGFub3JhbWEnO1xuaW1wb3J0IHsgQ3ViZVRleHR1cmVMb2FkZXIgfSBmcm9tICcuLi9sb2FkZXJzL0N1YmVUZXh0dXJlTG9hZGVyJztcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcblxuLyoqXG4gKiBAY2xhc3NkZXNjIEN1YmVtYXAtYmFzZWQgcGFub3JhbWFcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHthcnJheX0gaW1hZ2VzIC0gQXJyYXkgb2YgNiB1cmxzIHRvIGltYWdlcywgb25lIGZvciBlYWNoIHNpZGUgb2YgdGhlIEN1YmVUZXh0dXJlLiBUaGUgdXJscyBzaG91bGQgYmUgc3BlY2lmaWVkIGluIHRoZSBmb2xsb3dpbmcgb3JkZXI6IHBvcy14LCBuZWcteCwgcG9zLXksIG5lZy15LCBwb3MteiwgbmVnLXpcbiAqL1xuZnVuY3Rpb24gQ3ViZVBhbm9yYW1hICggaW1hZ2VzID0gW10gKXtcblxuICAgIGNvbnN0IGVkZ2VMZW5ndGggPSAxMDAwMDtcbiAgICBjb25zdCBzaGFkZXIgPSBPYmplY3QuYXNzaWduKCB7fSwgVEhSRUUuU2hhZGVyTGliWyAnY3ViZScgXSApO1xuICAgIGNvbnN0IGdlb21ldHJ5ID0gbmV3IFRIUkVFLkJveEJ1ZmZlckdlb21ldHJ5KCBlZGdlTGVuZ3RoLCBlZGdlTGVuZ3RoLCBlZGdlTGVuZ3RoICk7XG4gICAgY29uc3QgbWF0ZXJpYWwgPSBuZXcgVEhSRUUuU2hhZGVyTWF0ZXJpYWwoIHtcblxuICAgICAgICBmcmFnbWVudFNoYWRlcjogc2hhZGVyLmZyYWdtZW50U2hhZGVyLFxuICAgICAgICB2ZXJ0ZXhTaGFkZXI6IHNoYWRlci52ZXJ0ZXhTaGFkZXIsXG4gICAgICAgIHVuaWZvcm1zOiBzaGFkZXIudW5pZm9ybXMsXG4gICAgICAgIHNpZGU6IFRIUkVFLkJhY2tTaWRlLFxuICAgICAgICB0cmFuc3BhcmVudDogdHJ1ZVxuXG4gICAgfSApO1xuXG4gICAgUGFub3JhbWEuY2FsbCggdGhpcywgZ2VvbWV0cnksIG1hdGVyaWFsICk7XG5cbiAgICB0aGlzLmltYWdlcyA9IGltYWdlcztcbiAgICB0aGlzLmVkZ2VMZW5ndGggPSBlZGdlTGVuZ3RoO1xuICAgIHRoaXMubWF0ZXJpYWwudW5pZm9ybXMub3BhY2l0eS52YWx1ZSA9IDA7XG5cbn1cblxuQ3ViZVBhbm9yYW1hLnByb3RvdHlwZSA9IE9iamVjdC5hc3NpZ24oIE9iamVjdC5jcmVhdGUoIFBhbm9yYW1hLnByb3RvdHlwZSApLCB7XG5cbiAgICBjb25zdHJ1Y3RvcjogQ3ViZVBhbm9yYW1hLFxuXG4gICAgLyoqXG4gICAgICogTG9hZCA2IGltYWdlcyBhbmQgYmluZCBsaXN0ZW5lcnNcbiAgICAgKiBAbWVtYmVyT2YgQ3ViZVBhbm9yYW1hXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgbG9hZDogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIEN1YmVUZXh0dXJlTG9hZGVyLmxvYWQoIFx0XG5cbiAgICAgICAgICAgIHRoaXMuaW1hZ2VzLCBcblxuICAgICAgICAgICAgdGhpcy5vbkxvYWQuYmluZCggdGhpcyApLCBcbiAgICAgICAgICAgIHRoaXMub25Qcm9ncmVzcy5iaW5kKCB0aGlzICksIFxuICAgICAgICAgICAgdGhpcy5vbkVycm9yLmJpbmQoIHRoaXMgKSBcblxuICAgICAgICApO1xuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFRoaXMgd2lsbCBiZSBjYWxsZWQgd2hlbiA2IHRleHR1cmVzIGFyZSByZWFkeVxuICAgICAqIEBwYXJhbSAge1RIUkVFLkN1YmVUZXh0dXJlfSB0ZXh0dXJlIC0gQ3ViZSB0ZXh0dXJlXG4gICAgICogQG1lbWJlck9mIEN1YmVQYW5vcmFtYVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIG9uTG9hZDogZnVuY3Rpb24gKCB0ZXh0dXJlICkge1xuXHRcdFxuICAgICAgICB0aGlzLm1hdGVyaWFsLnVuaWZvcm1zWyAndEN1YmUnIF0udmFsdWUgPSB0ZXh0dXJlO1xuXG4gICAgICAgIFBhbm9yYW1hLnByb3RvdHlwZS5vbkxvYWQuY2FsbCggdGhpcyApO1xuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIERpc3Bvc2VcbiAgICAgKiBAbWVtYmVyT2YgQ3ViZVBhbm9yYW1hXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgZGlzcG9zZTogZnVuY3Rpb24gKCkge1x0XG5cbiAgICAgICAgY29uc3QgeyB2YWx1ZSB9ID0gdGhpcy5tYXRlcmlhbC51bmlmb3Jtcy50Q3ViZTtcblxuICAgICAgICB0aGlzLmltYWdlcy5mb3JFYWNoKCAoIGltYWdlICkgPT4geyBUSFJFRS5DYWNoZS5yZW1vdmUoIGltYWdlICk7IH0gKTtcblxuICAgICAgICBpZiAoIHZhbHVlIGluc3RhbmNlb2YgVEhSRUUuQ3ViZVRleHR1cmUgKSB7XG5cbiAgICAgICAgICAgIHZhbHVlLmRpc3Bvc2UoKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgUGFub3JhbWEucHJvdG90eXBlLmRpc3Bvc2UuY2FsbCggdGhpcyApO1xuXG4gICAgfVxuXG59ICk7XG5cbmV4cG9ydCB7IEN1YmVQYW5vcmFtYSB9OyIsImltcG9ydCB7IEN1YmVQYW5vcmFtYSB9IGZyb20gJy4vQ3ViZVBhbm9yYW1hJztcbmltcG9ydCB7IERhdGFJbWFnZSB9IGZyb20gJy4uL0RhdGFJbWFnZSc7XG5cbi8qKlxuICogQGNsYXNzZGVzYyBCYXNpYyBwYW5vcmFtYSB3aXRoIDYgcHJlLWRlZmluZWQgZ3JpZCBpbWFnZXNcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBCYXNpY1Bhbm9yYW1hICgpIHtcblxuICAgIGNvbnN0IGltYWdlcyA9IFtdO1xuXG4gICAgZm9yICggbGV0IGkgPSAwOyBpIDwgNjsgaSsrICkge1xuXG4gICAgICAgIGltYWdlcy5wdXNoKCBEYXRhSW1hZ2UuV2hpdGVUaWxlICk7XG5cbiAgICB9XG5cbiAgICBDdWJlUGFub3JhbWEuY2FsbCggdGhpcywgaW1hZ2VzICk7XG5cbn1cblxuQmFzaWNQYW5vcmFtYS5wcm90b3R5cGUgPSBPYmplY3QuYXNzaWduKCBPYmplY3QuY3JlYXRlKCBDdWJlUGFub3JhbWEucHJvdG90eXBlICksIHtcblxuICAgIGNvbnN0cnVjdG9yOiBCYXNpY1Bhbm9yYW1hXG5cbn0gKTtcblxuZXhwb3J0IHsgQmFzaWNQYW5vcmFtYSB9OyIsImltcG9ydCB7IFBhbm9yYW1hIH0gZnJvbSAnLi9QYW5vcmFtYSc7XG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbi8qKlxuICogQGNsYXNzZGVzYyBWaWRlbyBQYW5vcmFtYVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge3N0cmluZ30gc3JjIC0gRXF1aXJlY3Rhbmd1bGFyIHZpZGVvIHVybFxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXSAtIE9wdGlvbiBmb3IgdmlkZW8gc2V0dGluZ3NcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IFtvcHRpb25zLnZpZGVvRWxlbWVudF0gLSBIVE1MNSB2aWRlbyBlbGVtZW50IGNvbnRhaW5zIHRoZSB2aWRlb1xuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5sb29wPXRydWVdIC0gU3BlY2lmeSBpZiB0aGUgdmlkZW8gc2hvdWxkIGxvb3AgaW4gdGhlIGVuZFxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5tdXRlZD10cnVlXSAtIE11dGUgdGhlIHZpZGVvIG9yIG5vdC4gTmVlZCB0byBiZSB0cnVlIGluIG9yZGVyIHRvIGF1dG9wbGF5IG9uIHNvbWUgYnJvd3NlcnNcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMuYXV0b3BsYXk9ZmFsc2VdIC0gU3BlY2lmeSBpZiB0aGUgdmlkZW8gc2hvdWxkIGF1dG8gcGxheVxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5wbGF5c2lubGluZT10cnVlXSAtIFNwZWNpZnkgaWYgdmlkZW8gc2hvdWxkIHBsYXkgaW5saW5lIGZvciBpT1MuIElmIHlvdSB3YW50IGl0IHRvIGF1dG8gcGxheSBpbmxpbmUsIHNldCBib3RoIGF1dG9wbGF5IGFuZCBtdXRlZCBvcHRpb25zIHRvIHRydWVcbiAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5jcm9zc09yaWdpbj1cImFub255bW91c1wiXSAtIFNldHMgdGhlIGNyb3NzLW9yaWdpbiBhdHRyaWJ1dGUgZm9yIHRoZSB2aWRlbywgd2hpY2ggYWxsb3dzIGZvciBjcm9zcy1vcmlnaW4gdmlkZW9zIGluIHNvbWUgYnJvd3NlcnMgKEZpcmVmb3gsIENocm9tZSkuIFNldCB0byBlaXRoZXIgXCJhbm9ueW1vdXNcIiBvciBcInVzZS1jcmVkZW50aWFsc1wiLlxuICogQHBhcmFtIHtudW1iZXJ9IFtyYWRpdXM9NTAwMF0gLSBUaGUgbWluaW11bSByYWRpdXMgZm9yIHRoaXMgcGFub3JhbVxuICovXG5mdW5jdGlvbiBWaWRlb1Bhbm9yYW1hICggc3JjLCBvcHRpb25zID0ge30gKSB7XG5cbiAgICBjb25zdCByYWRpdXMgPSA1MDAwO1xuICAgIGNvbnN0IGdlb21ldHJ5ID0gbmV3IFRIUkVFLlNwaGVyZUJ1ZmZlckdlb21ldHJ5KCByYWRpdXMsIDYwLCA0MCApO1xuICAgIGNvbnN0IG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKCB7IG9wYWNpdHk6IDAsIHRyYW5zcGFyZW50OiB0cnVlIH0gKTtcblxuICAgIFBhbm9yYW1hLmNhbGwoIHRoaXMsIGdlb21ldHJ5LCBtYXRlcmlhbCApO1xuXG4gICAgdGhpcy5zcmMgPSBzcmM7XG5cbiAgICB0aGlzLm9wdGlvbnMgPSB7XG5cbiAgICAgICAgdmlkZW9FbGVtZW50OiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAndmlkZW8nICksXG4gICAgICAgIGxvb3A6IHRydWUsXG4gICAgICAgIG11dGVkOiB0cnVlLFxuICAgICAgICBhdXRvcGxheTogZmFsc2UsXG4gICAgICAgIHBsYXlzaW5saW5lOiB0cnVlLFxuICAgICAgICBjcm9zc09yaWdpbjogJ2Fub255bW91cydcblxuICAgIH07XG5cbiAgICBPYmplY3QuYXNzaWduKCB0aGlzLm9wdGlvbnMsIG9wdGlvbnMgKTtcblxuICAgIHRoaXMudmlkZW9FbGVtZW50ID0gdGhpcy5vcHRpb25zLnZpZGVvRWxlbWVudDtcbiAgICB0aGlzLnZpZGVvUHJvZ3Jlc3MgPSAwO1xuICAgIHRoaXMucmFkaXVzID0gcmFkaXVzO1xuXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCAnbGVhdmUnLCB0aGlzLnBhdXNlVmlkZW8uYmluZCggdGhpcyApICk7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCAnZW50ZXItZmFkZS1zdGFydCcsIHRoaXMucmVzdW1lVmlkZW9Qcm9ncmVzcy5iaW5kKCB0aGlzICkgKTtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoICd2aWRlby10b2dnbGUnLCB0aGlzLnRvZ2dsZVZpZGVvLmJpbmQoIHRoaXMgKSApO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lciggJ3ZpZGVvLXRpbWUnLCB0aGlzLnNldFZpZGVvQ3VycmVudFRpbWUuYmluZCggdGhpcyApICk7XG5cbn07XG5cblZpZGVvUGFub3JhbWEucHJvdG90eXBlID0gT2JqZWN0LmFzc2lnbiggT2JqZWN0LmNyZWF0ZSggUGFub3JhbWEucHJvdG90eXBlICksIHtcblxuICAgIGNvbnN0cnVjdG9yOiBWaWRlb1Bhbm9yYW1hLFxuXG4gICAgaXNNb2JpbGU6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBsZXQgY2hlY2sgPSBmYWxzZTtcbiAgICAgICAgKGZ1bmN0aW9uKGEpe2lmKC8oYW5kcm9pZHxiYlxcZCt8bWVlZ28pLittb2JpbGV8YXZhbnRnb3xiYWRhXFwvfGJsYWNrYmVycnl8YmxhemVyfGNvbXBhbHxlbGFpbmV8ZmVubmVjfGhpcHRvcHxpZW1vYmlsZXxpcChob25lfG9kKXxpcmlzfGtpbmRsZXxsZ2UgfG1hZW1vfG1pZHB8bW1wfG1vYmlsZS4rZmlyZWZveHxuZXRmcm9udHxvcGVyYSBtKG9ifGluKWl8cGFsbSggb3MpP3xwaG9uZXxwKGl4aXxyZSlcXC98cGx1Y2tlcnxwb2NrZXR8cHNwfHNlcmllcyg0fDYpMHxzeW1iaWFufHRyZW98dXBcXC4oYnJvd3NlcnxsaW5rKXx2b2RhZm9uZXx3YXB8d2luZG93cyBjZXx4ZGF8eGlpbm8vaS50ZXN0KGEpfHwvMTIwN3w2MzEwfDY1OTB8M2dzb3w0dGhwfDUwWzEtNl1pfDc3MHN8ODAyc3xhIHdhfGFiYWN8YWMoZXJ8b298c1xcLSl8YWkoa298cm4pfGFsKGF2fGNhfGNvKXxhbW9pfGFuKGV4fG55fHl3KXxhcHR1fGFyKGNofGdvKXxhcyh0ZXx1cyl8YXR0d3xhdShkaXxcXC1tfHIgfHMgKXxhdmFufGJlKGNrfGxsfG5xKXxiaShsYnxyZCl8YmwoYWN8YXopfGJyKGV8dil3fGJ1bWJ8YndcXC0obnx1KXxjNTVcXC98Y2FwaXxjY3dhfGNkbVxcLXxjZWxsfGNodG18Y2xkY3xjbWRcXC18Y28obXB8bmQpfGNyYXd8ZGEoaXR8bGx8bmcpfGRidGV8ZGNcXC1zfGRldml8ZGljYXxkbW9ifGRvKGN8cClvfGRzKDEyfFxcLWQpfGVsKDQ5fGFpKXxlbShsMnx1bCl8ZXIoaWN8azApfGVzbDh8ZXooWzQtN10wfG9zfHdhfHplKXxmZXRjfGZseShcXC18Xyl8ZzEgdXxnNTYwfGdlbmV8Z2ZcXC01fGdcXC1tb3xnbyhcXC53fG9kKXxncihhZHx1bil8aGFpZXxoY2l0fGhkXFwtKG18cHx0KXxoZWlcXC18aGkocHR8dGEpfGhwKCBpfGlwKXxoc1xcLWN8aHQoYyhcXC18IHxffGF8Z3xwfHN8dCl8dHApfGh1KGF3fHRjKXxpXFwtKDIwfGdvfG1hKXxpMjMwfGlhYyggfFxcLXxcXC8pfGlicm98aWRlYXxpZzAxfGlrb218aW0xa3xpbm5vfGlwYXF8aXJpc3xqYSh0fHYpYXxqYnJvfGplbXV8amlnc3xrZGRpfGtlaml8a2d0KCB8XFwvKXxrbG9ufGtwdCB8a3djXFwtfGt5byhjfGspfGxlKG5vfHhpKXxsZyggZ3xcXC8oa3xsfHUpfDUwfDU0fFxcLVthLXddKXxsaWJ3fGx5bnh8bTFcXC13fG0zZ2F8bTUwXFwvfG1hKHRlfHVpfHhvKXxtYygwMXwyMXxjYSl8bVxcLWNyfG1lKHJjfHJpKXxtaShvOHxvYXx0cyl8bW1lZnxtbygwMXwwMnxiaXxkZXxkb3x0KFxcLXwgfG98dil8enopfG10KDUwfHAxfHYgKXxtd2JwfG15d2F8bjEwWzAtMl18bjIwWzItM118bjMwKDB8Mil8bjUwKDB8Mnw1KXxuNygwKDB8MSl8MTApfG5lKChjfG0pXFwtfG9ufHRmfHdmfHdnfHd0KXxub2soNnxpKXxuenBofG8yaW18b3AodGl8d3YpfG9yYW58b3dnMXxwODAwfHBhbihhfGR8dCl8cGR4Z3xwZygxM3xcXC0oWzEtOF18YykpfHBoaWx8cGlyZXxwbChheXx1Yyl8cG5cXC0yfHBvKGNrfHJ0fHNlKXxwcm94fHBzaW98cHRcXC1nfHFhXFwtYXxxYygwN3wxMnwyMXwzMnw2MHxcXC1bMi03XXxpXFwtKXxxdGVrfHIzODB8cjYwMHxyYWtzfHJpbTl8cm8odmV8em8pfHM1NVxcL3xzYShnZXxtYXxtbXxtc3xueXx2YSl8c2MoMDF8aFxcLXxvb3xwXFwtKXxzZGtcXC98c2UoYyhcXC18MHwxKXw0N3xtY3xuZHxyaSl8c2doXFwtfHNoYXJ8c2llKFxcLXxtKXxza1xcLTB8c2woNDV8aWQpfHNtKGFsfGFyfGIzfGl0fHQ1KXxzbyhmdHxueSl8c3AoMDF8aFxcLXx2XFwtfHYgKXxzeSgwMXxtYil8dDIoMTh8NTApfHQ2KDAwfDEwfDE4KXx0YShndHxsayl8dGNsXFwtfHRkZ1xcLXx0ZWwoaXxtKXx0aW1cXC18dFxcLW1vfHRvKHBsfHNoKXx0cyg3MHxtXFwtfG0zfG01KXx0eFxcLTl8dXAoXFwuYnxnMXxzaSl8dXRzdHx2NDAwfHY3NTB8dmVyaXx2aShyZ3x0ZSl8dmsoNDB8NVswLTNdfFxcLXYpfHZtNDB8dm9kYXx2dWxjfHZ4KDUyfDUzfDYwfDYxfDcwfDgwfDgxfDgzfDg1fDk4KXx3M2MoXFwtfCApfHdlYmN8d2hpdHx3aShnIHxuY3xudyl8d21sYnx3b251fHg3MDB8eWFzXFwtfHlvdXJ8emV0b3x6dGVcXC0vaS50ZXN0KGEuc3Vic3RyKDAsNCkpKSBjaGVjayA9IHRydWU7fSkoIHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50IHx8IHdpbmRvdy5uYXZpZ2F0b3IudmVuZG9yIHx8IHdpbmRvdy5vcGVyYSApO1xuICAgICAgICByZXR1cm4gY2hlY2s7XG5cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogTG9hZCB2aWRlbyBwYW5vcmFtYVxuICAgICAqIEBtZW1iZXJPZiBWaWRlb1Bhbm9yYW1hXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQGZpcmVzICBQYW5vcmFtYSNwYW5vbGVucy12aWV3ZXItaGFuZGxlclxuICAgICAqL1xuICAgIGxvYWQ6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBjb25zdCB7IG11dGVkLCBsb29wLCBhdXRvcGxheSwgcGxheXNpbmxpbmUsIGNyb3NzT3JpZ2luIH0gPSB0aGlzLm9wdGlvbnM7XG4gICAgICAgIGNvbnN0IHZpZGVvID0gdGhpcy52aWRlb0VsZW1lbnQ7XG4gICAgICAgIGNvbnN0IG1hdGVyaWFsID0gdGhpcy5tYXRlcmlhbDtcbiAgICAgICAgY29uc3Qgb25Qcm9ncmVzcyA9IHRoaXMub25Qcm9ncmVzcy5iaW5kKCB0aGlzICk7XG4gICAgICAgIGNvbnN0IG9uTG9hZCA9IHRoaXMub25Mb2FkLmJpbmQoIHRoaXMgKTtcblxuICAgICAgICB2aWRlby5sb29wID0gbG9vcDtcbiAgICAgICAgdmlkZW8uYXV0b3BsYXkgPSBhdXRvcGxheTtcbiAgICAgICAgdmlkZW8ucGxheXNpbmxpbmUgPSBwbGF5c2lubGluZTtcbiAgICAgICAgdmlkZW8uY3Jvc3NPcmlnaW4gPSBjcm9zc09yaWdpbjtcbiAgICAgICAgdmlkZW8ubXV0ZWQgPSBtdXRlZDtcblx0XHRcbiAgICAgICAgaWYgKCBwbGF5c2lubGluZSApIHtcblxuICAgICAgICAgICAgdmlkZW8uc2V0QXR0cmlidXRlKCAncGxheXNpbmxpbmUnLCAnJyApO1xuICAgICAgICAgICAgdmlkZW8uc2V0QXR0cmlidXRlKCAnd2Via2l0LXBsYXlzaW5saW5lJywgJycgKTtcblxuICAgICAgICB9IFxuXG4gICAgICAgIGNvbnN0IG9ubG9hZGVkZGF0YSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICB0aGlzLnNldFZpZGVvVGV4dHVyZSggdmlkZW8gKTtcblxuICAgICAgICAgICAgaWYgKCBhdXRvcGxheSApIHtcblxuICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAqIFZpZXdlciBoYW5kbGVyIGV2ZW50XG4gICAgICAgICAgICAgICAgICogQHR5cGUge29iamVjdH1cbiAgICAgICAgICAgICAgICAgKiBAcHJvcGVydHkge3N0cmluZ30gbWV0aG9kIC0gJ3VwZGF0ZVZpZGVvUGxheUJ1dHRvbidcbiAgICAgICAgICAgICAgICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGRhdGEgLSBQYXVzZSB2aWRlbyBvciBub3RcbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ3Bhbm9sZW5zLXZpZXdlci1oYW5kbGVyJywgbWV0aG9kOiAndXBkYXRlVmlkZW9QbGF5QnV0dG9uJywgZGF0YTogZmFsc2UgfSApO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEZvciBtb2JpbGUgc2lsZW50IGF1dG9wbGF5XG4gICAgICAgICAgICBpZiAoIHRoaXMuaXNNb2JpbGUoKSApIHtcblxuICAgICAgICAgICAgICAgIHZpZGVvLnBhdXNlKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoIGF1dG9wbGF5ICYmIG11dGVkICkge1xuXG4gICAgICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAgICAgKiBWaWV3ZXIgaGFuZGxlciBldmVudFxuICAgICAgICAgICAgICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAgICAgICAgICAgICAgICAgKiBAcHJvcGVydHkge3N0cmluZ30gbWV0aG9kIC0gJ3VwZGF0ZVZpZGVvUGxheUJ1dHRvbidcbiAgICAgICAgICAgICAgICAgICAgICogQHByb3BlcnR5IHtib29sZWFufSBkYXRhIC0gUGF1c2UgdmlkZW8gb3Igbm90XG4gICAgICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ3Bhbm9sZW5zLXZpZXdlci1oYW5kbGVyJywgbWV0aG9kOiAndXBkYXRlVmlkZW9QbGF5QnV0dG9uJywgZGF0YTogZmFsc2UgfSApO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgICAgICogVmlld2VyIGhhbmRsZXIgZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICogQHR5cGUge29iamVjdH1cbiAgICAgICAgICAgICAgICAgICAgICogQHByb3BlcnR5IHtzdHJpbmd9IG1ldGhvZCAtICd1cGRhdGVWaWRlb1BsYXlCdXR0b24nXG4gICAgICAgICAgICAgICAgICAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gZGF0YSAtIFBhdXNlIHZpZGVvIG9yIG5vdFxuICAgICAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdwYW5vbGVucy12aWV3ZXItaGFuZGxlcicsIG1ldGhvZDogJ3VwZGF0ZVZpZGVvUGxheUJ1dHRvbicsIGRhdGE6IHRydWUgfSApO1xuXG4gICAgICAgICAgICAgICAgfVxuXHRcdFx0XHRcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgbG9hZGVkID0gKCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgLy8gRml4IGZvciB0aHJlZWpzIHI4OSBkZWxheWVkIHVwZGF0ZVxuICAgICAgICAgICAgICAgIG1hdGVyaWFsLm1hcC5uZWVkc1VwZGF0ZSA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICBvblByb2dyZXNzKCB7IGxvYWRlZDogMSwgdG90YWw6IDEgfSApO1xuICAgICAgICAgICAgICAgIG9uTG9hZCgpO1xuXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCBsb2FkZWQgKTtcblx0XHRcdFxuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZWFkeSBzdGF0ZSBvZiB0aGUgYXVkaW8vdmlkZW8gZWxlbWVudFxuICAgICAgICAgKiAwID0gSEFWRV9OT1RISU5HIC0gbm8gaW5mb3JtYXRpb24gd2hldGhlciBvciBub3QgdGhlIGF1ZGlvL3ZpZGVvIGlzIHJlYWR5XG4gICAgICAgICAqIDEgPSBIQVZFX01FVEFEQVRBIC0gbWV0YWRhdGEgZm9yIHRoZSBhdWRpby92aWRlbyBpcyByZWFkeVxuICAgICAgICAgKiAyID0gSEFWRV9DVVJSRU5UX0RBVEEgLSBkYXRhIGZvciB0aGUgY3VycmVudCBwbGF5YmFjayBwb3NpdGlvbiBpcyBhdmFpbGFibGUsIGJ1dCBub3QgZW5vdWdoIGRhdGEgdG8gcGxheSBuZXh0IGZyYW1lL21pbGxpc2Vjb25kXG4gICAgICAgICAqIDMgPSBIQVZFX0ZVVFVSRV9EQVRBIC0gZGF0YSBmb3IgdGhlIGN1cnJlbnQgYW5kIGF0IGxlYXN0IHRoZSBuZXh0IGZyYW1lIGlzIGF2YWlsYWJsZVxuICAgICAgICAgKiA0ID0gSEFWRV9FTk9VR0hfREFUQSAtIGVub3VnaCBkYXRhIGF2YWlsYWJsZSB0byBzdGFydCBwbGF5aW5nXG4gICAgICAgICAqL1xuICAgICAgICBpZiAoIHZpZGVvLnJlYWR5U3RhdGUgPiAyICkge1xuXG4gICAgICAgICAgICBvbmxvYWRlZGRhdGEuY2FsbCggdGhpcyApO1xuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIGlmICggdmlkZW8ucXVlcnlTZWxlY3RvckFsbCggJ3NvdXJjZScgKS5sZW5ndGggPT09IDAgKSB7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBzb3VyY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnc291cmNlJyApO1xuICAgICAgICAgICAgICAgIHNvdXJjZS5zcmMgPSB0aGlzLnNyYztcbiAgICAgICAgICAgICAgICB2aWRlby5hcHBlbmRDaGlsZCggc291cmNlICk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmlkZW8ubG9hZCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmlkZW8uYWRkRXZlbnRMaXN0ZW5lciggJ2xvYWRlZGRhdGEnLCBvbmxvYWRlZGRhdGEuYmluZCggdGhpcyApICk7XG5cdFx0XG4gICAgICAgIHZpZGVvLmFkZEV2ZW50TGlzdGVuZXIoICd0aW1ldXBkYXRlJywgZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICB0aGlzLnZpZGVvUHJvZ3Jlc3MgPSB2aWRlby5kdXJhdGlvbiA+PSAwID8gdmlkZW8uY3VycmVudFRpbWUgLyB2aWRlby5kdXJhdGlvbiA6IDA7XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogVmlld2VyIGhhbmRsZXIgZXZlbnRcbiAgICAgICAgICAgICAqIEB0eXBlIHtvYmplY3R9XG4gICAgICAgICAgICAgKiBAcHJvcGVydHkge3N0cmluZ30gbWV0aG9kIC0gJ29uVmlkZW9VcGRhdGUnXG4gICAgICAgICAgICAgKiBAcHJvcGVydHkge251bWJlcn0gZGF0YSAtIFRoZSBwZXJjZW50YWdlIG9mIHZpZGVvIHByb2dyZXNzLiBSYW5nZSBmcm9tIDAuMCB0byAxLjBcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdwYW5vbGVucy12aWV3ZXItaGFuZGxlcicsIG1ldGhvZDogJ29uVmlkZW9VcGRhdGUnLCBkYXRhOiB0aGlzLnZpZGVvUHJvZ3Jlc3MgfSApO1xuXG4gICAgICAgIH0uYmluZCggdGhpcyApICk7XG5cbiAgICAgICAgdmlkZW8uYWRkRXZlbnRMaXN0ZW5lciggJ2VuZGVkJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0XG4gICAgICAgICAgICBpZiAoICFsb29wICkge1xuXG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldFZpZGVvKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdwYW5vbGVucy12aWV3ZXItaGFuZGxlcicsIG1ldGhvZDogJ3VwZGF0ZVZpZGVvUGxheUJ1dHRvbicsIGRhdGE6IHRydWUgfSApO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfS5iaW5kKCB0aGlzICksIGZhbHNlICk7IFxuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNldCB2aWRlbyB0ZXh0dXJlXG4gICAgICogQG1lbWJlck9mIFZpZGVvUGFub3JhbWFcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge0hUTUxWaWRlb0VsZW1lbnR9IHZpZGVvICAtIFRoZSBodG1sNSB2aWRlbyBlbGVtZW50XG4gICAgICogQGZpcmVzIFBhbm9yYW1hI3Bhbm9sZW5zLXZpZXdlci1oYW5kbGVyXG4gICAgICovXG4gICAgc2V0VmlkZW9UZXh0dXJlOiBmdW5jdGlvbiAoIHZpZGVvICkge1xuXG4gICAgICAgIGlmICggIXZpZGVvICkgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IHZpZGVvVGV4dHVyZSA9IG5ldyBUSFJFRS5WaWRlb1RleHR1cmUoIHZpZGVvICk7XG4gICAgICAgIHZpZGVvVGV4dHVyZS5taW5GaWx0ZXIgPSBUSFJFRS5MaW5lYXJGaWx0ZXI7XG4gICAgICAgIHZpZGVvVGV4dHVyZS5tYWdGaWx0ZXIgPSBUSFJFRS5MaW5lYXJGaWx0ZXI7XG4gICAgICAgIHZpZGVvVGV4dHVyZS5mb3JtYXQgPSBUSFJFRS5SR0JGb3JtYXQ7XG5cbiAgICAgICAgdGhpcy51cGRhdGVUZXh0dXJlKCB2aWRlb1RleHR1cmUgKTtcblx0XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJlc2V0XG4gICAgICogQG1lbWJlck9mIFZpZGVvUGFub3JhbWFcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICByZXNldDogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIHRoaXMudmlkZW9FbGVtZW50ID0gdW5kZWZpbmVkO1x0XG5cbiAgICAgICAgUGFub3JhbWEucHJvdG90eXBlLnJlc2V0LmNhbGwoIHRoaXMgKTtcblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiB2aWRlbyBpcyBwYXVzZWRcbiAgICAgKiBAbWVtYmVyT2YgVmlkZW9QYW5vcmFtYVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IC0gaXMgdmlkZW8gcGF1c2VkIG9yIG5vdFxuICAgICAqL1xuICAgIGlzVmlkZW9QYXVzZWQ6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICByZXR1cm4gdGhpcy52aWRlb0VsZW1lbnQucGF1c2VkO1xuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFRvZ2dsZSB2aWRlbyB0byBwbGF5IG9yIHBhdXNlXG4gICAgICogQG1lbWJlck9mIFZpZGVvUGFub3JhbWFcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICB0b2dnbGVWaWRlbzogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGNvbnN0IHZpZGVvID0gdGhpcy52aWRlb0VsZW1lbnQ7XG5cbiAgICAgICAgaWYgKCAhdmlkZW8gKSB7IHJldHVybjsgfVxuXG4gICAgICAgIHZpZGVvWyB2aWRlby5wYXVzZWQgPyAncGxheScgOiAncGF1c2UnIF0oKTtcblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTZXQgdmlkZW8gY3VycmVudFRpbWVcbiAgICAgKiBAbWVtYmVyT2YgVmlkZW9QYW5vcmFtYVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBldmVudCAtIEV2ZW50IGNvbnRhaW5zIHBlcmNlbnRhZ2UuIFJhbmdlIGZyb20gMC4wIHRvIDEuMFxuICAgICAqL1xuICAgIHNldFZpZGVvQ3VycmVudFRpbWU6IGZ1bmN0aW9uICggeyBwZXJjZW50YWdlIH0gKSB7XG5cbiAgICAgICAgY29uc3QgdmlkZW8gPSB0aGlzLnZpZGVvRWxlbWVudDtcblxuICAgICAgICBpZiAoIHZpZGVvICYmICFOdW1iZXIuaXNOYU4oIHBlcmNlbnRhZ2UgKSAmJiBwZXJjZW50YWdlICE9PSAxICkge1xuXG4gICAgICAgICAgICB2aWRlby5jdXJyZW50VGltZSA9IHZpZGVvLmR1cmF0aW9uICogcGVyY2VudGFnZTtcblxuICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdwYW5vbGVucy12aWV3ZXItaGFuZGxlcicsIG1ldGhvZDogJ29uVmlkZW9VcGRhdGUnLCBkYXRhOiBwZXJjZW50YWdlIH0gKTtcblxuICAgICAgICB9XG5cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUGxheSB2aWRlb1xuICAgICAqIEBtZW1iZXJPZiBWaWRlb1Bhbm9yYW1hXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQGZpcmVzIFZpZGVvUGFub3JhbWEjcGxheVxuICAgICAqIEBmaXJlcyBWaWRlb1Bhbm9yYW1hI3BsYXktZXJyb3JcbiAgICAgKi9cbiAgICBwbGF5VmlkZW86IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBjb25zdCB2aWRlbyA9IHRoaXMudmlkZW9FbGVtZW50O1xuICAgICAgICBjb25zdCBwbGF5VmlkZW8gPSB0aGlzLnBsYXlWaWRlby5iaW5kKCB0aGlzICk7XG4gICAgICAgIGNvbnN0IGRpc3BhdGNoRXZlbnQgPSB0aGlzLmRpc3BhdGNoRXZlbnQuYmluZCggdGhpcyApO1xuICAgICAgICBjb25zdCBvblN1Y2Nlc3MgPSAoKSA9PiB7XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogUGxheSBldmVudFxuICAgICAgICAgICAgICogQHR5cGUge29iamVjdH1cbiAgICAgICAgICAgICAqIEBldmVudCBWaWRlb1Bhbm9yYW1hI3BsYXlcbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ3BsYXknIH0gKTtcblxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBvbkVycm9yID0gKCBlcnJvciApID0+IHtcblxuICAgICAgICAgICAgLy8gRXJyb3IgcGxheWluZyB2aWRlby4gUmV0cnkgbmV4dCBmcmFtZS4gUG9zc2libHkgV2FpdGluZyBmb3IgdXNlciBpbnRlcmFjdGlvblxuICAgICAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSggcGxheVZpZGVvICk7XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogUGxheSBldmVudFxuICAgICAgICAgICAgICogQHR5cGUge29iamVjdH1cbiAgICAgICAgICAgICAqIEBldmVudCBWaWRlb1Bhbm9yYW1hI3BsYXktZXJyb3JcbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ3BsYXktZXJyb3InLCBlcnJvciB9ICk7XG5cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoIHZpZGVvICYmIHZpZGVvLnBhdXNlZCApIHtcblxuICAgICAgICAgICAgdmlkZW8ucGxheSgpLnRoZW4oIG9uU3VjY2VzcyApLmNhdGNoKCBvbkVycm9yICk7XG5cbiAgICAgICAgfVxuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFBhdXNlIHZpZGVvXG4gICAgICogQG1lbWJlck9mIFZpZGVvUGFub3JhbWFcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAZmlyZXMgVmlkZW9QYW5vcmFtYSNwYXVzZVxuICAgICAqL1xuICAgIHBhdXNlVmlkZW86IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBjb25zdCB2aWRlbyA9IHRoaXMudmlkZW9FbGVtZW50O1xuXG4gICAgICAgIGlmICggdmlkZW8gJiYgIXZpZGVvLnBhdXNlZCApIHtcblxuICAgICAgICAgICAgdmlkZW8ucGF1c2UoKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFBhdXNlIGV2ZW50XG4gICAgICAgICAqIEB0eXBlIHtvYmplY3R9XG4gICAgICAgICAqIEBldmVudCBWaWRlb1Bhbm9yYW1hI3BhdXNlXG4gICAgICAgICAqXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ3BhdXNlJyB9ICk7XG5cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmVzdW1lIHZpZGVvXG4gICAgICogQG1lbWJlck9mIFZpZGVvUGFub3JhbWFcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICByZXN1bWVWaWRlb1Byb2dyZXNzOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgY29uc3QgdmlkZW8gPSB0aGlzLnZpZGVvRWxlbWVudDtcblxuICAgICAgICBpZiAoIHZpZGVvLnJlYWR5U3RhdGUgPj0gNCAmJiB2aWRlby5hdXRvcGxheSAmJiAhdGhpcy5pc01vYmlsZSgpICkge1xuXG4gICAgICAgICAgICB0aGlzLnBsYXlWaWRlbygpO1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFZpZXdlciBoYW5kbGVyIGV2ZW50XG4gICAgICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAgICAgICAgICogQHByb3BlcnR5IHtzdHJpbmd9IG1ldGhvZCAtICd1cGRhdGVWaWRlb1BsYXlCdXR0b24nXG4gICAgICAgICAgICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGRhdGEgLSBQYXVzZSB2aWRlbyBvciBub3RcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdwYW5vbGVucy12aWV3ZXItaGFuZGxlcicsIG1ldGhvZDogJ3VwZGF0ZVZpZGVvUGxheUJ1dHRvbicsIGRhdGE6IGZhbHNlIH0gKTtcblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICB0aGlzLnBhdXNlVmlkZW8oKTtcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBWaWV3ZXIgaGFuZGxlciBldmVudFxuICAgICAgICAgICAgICogQHR5cGUge29iamVjdH1cbiAgICAgICAgICAgICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBtZXRob2QgLSAndXBkYXRlVmlkZW9QbGF5QnV0dG9uJ1xuICAgICAgICAgICAgICogQHByb3BlcnR5IHtib29sZWFufSBkYXRhIC0gUGF1c2UgdmlkZW8gb3Igbm90XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAncGFub2xlbnMtdmlld2VyLWhhbmRsZXInLCBtZXRob2Q6ICd1cGRhdGVWaWRlb1BsYXlCdXR0b24nLCBkYXRhOiB0cnVlIH0gKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRWaWRlb0N1cnJlbnRUaW1lKCB7IHBlcmNlbnRhZ2U6IHRoaXMudmlkZW9Qcm9ncmVzcyB9ICk7XG5cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmVzZXQgdmlkZW8gYXQgc3RhdGluZyBwb2ludFxuICAgICAqIEBtZW1iZXJPZiBWaWRlb1Bhbm9yYW1hXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgcmVzZXRWaWRlbzogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGNvbnN0IHZpZGVvID0gdGhpcy52aWRlb0VsZW1lbnQ7XG5cbiAgICAgICAgaWYgKCB2aWRlbyApIHtcblxuICAgICAgICAgICAgdGhpcy5zZXRWaWRlb0N1cnJlbnRUaW1lKCB7IHBlcmNlbnRhZ2U6IDAgfSApO1xuXG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiB2aWRlbyBpcyBtdXRlZFxuICAgICAqIEBtZW1iZXJPZiBWaWRlb1Bhbm9yYW1hXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gLSBpcyB2aWRlbyBtdXRlZCBvciBub3RcbiAgICAgKi9cbiAgICBpc1ZpZGVvTXV0ZWQ6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICByZXR1cm4gdGhpcy52aWRlb0VsZW1lbnQubXV0ZWQ7XG5cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogTXV0ZSB2aWRlb1xuICAgICAqIEBtZW1iZXJPZiBWaWRlb1Bhbm9yYW1hXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgbXV0ZVZpZGVvOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgY29uc3QgdmlkZW8gPSB0aGlzLnZpZGVvRWxlbWVudDtcblxuICAgICAgICBpZiAoIHZpZGVvICYmICF2aWRlby5tdXRlZCApIHtcblxuICAgICAgICAgICAgdmlkZW8ubXV0ZWQgPSB0cnVlO1xuXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ3ZvbHVtZWNoYW5nZScgfSApO1xuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFVubXV0ZSB2aWRlb1xuICAgICAqIEBtZW1iZXJPZiBWaWRlb1Bhbm9yYW1hXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgdW5tdXRlVmlkZW86IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBjb25zdCB2aWRlbyA9IHRoaXMudmlkZW9FbGVtZW50O1xuXG4gICAgICAgIGlmICggdmlkZW8gJiYgdGhpcy5pc1ZpZGVvTXV0ZWQoKSApIHtcblxuICAgICAgICAgICAgdmlkZW8ubXV0ZWQgPSBmYWxzZTtcblxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICd2b2x1bWVjaGFuZ2UnIH0gKTtcblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSB2aWRlbyBlbGVtZW50XG4gICAgICogQG1lbWJlck9mIFZpZGVvUGFub3JhbWFcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9XG4gICAgICovXG4gICAgZ2V0VmlkZW9FbGVtZW50OiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMudmlkZW9FbGVtZW50O1xuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIERpc3Bvc2UgdmlkZW8gcGFub3JhbWFcbiAgICAgKiBAbWVtYmVyT2YgVmlkZW9QYW5vcmFtYVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIGRpc3Bvc2U6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBjb25zdCB7IG1hdGVyaWFsOiB7IG1hcCB9IH0gPSB0aGlzO1xuXG4gICAgICAgIHRoaXMucGF1c2VWaWRlbygpO1xuXHRcdFxuICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoICdsZWF2ZScsIHRoaXMucGF1c2VWaWRlby5iaW5kKCB0aGlzICkgKTtcbiAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCAnZW50ZXItZmFkZS1zdGFydCcsIHRoaXMucmVzdW1lVmlkZW9Qcm9ncmVzcy5iaW5kKCB0aGlzICkgKTtcbiAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCAndmlkZW8tdG9nZ2xlJywgdGhpcy50b2dnbGVWaWRlby5iaW5kKCB0aGlzICkgKTtcbiAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCAndmlkZW8tdGltZScsIHRoaXMuc2V0VmlkZW9DdXJyZW50VGltZS5iaW5kKCB0aGlzICkgKTtcblxuICAgICAgICBpZiAoIG1hcCApIHsgbWFwLmRpc3Bvc2UoKTsgfVxuXG4gICAgICAgIFBhbm9yYW1hLnByb3RvdHlwZS5kaXNwb3NlLmNhbGwoIHRoaXMgKTtcblxuICAgIH1cblxufSApO1xuXG5leHBvcnQgeyBWaWRlb1Bhbm9yYW1hIH07IiwiXG5pbXBvcnQgeyBUZXh0dXJlTG9hZGVyIH0gZnJvbSAnLi9UZXh0dXJlTG9hZGVyJztcblxuLyoqXG4gKiBAY2xhc3NkZXNjIEdvb2dsZSBTdHJlZXQgVmlldyBMb2FkZXJcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtvYmplY3R9IHBhcmFtZXRlcnMgXG4gKi9cbmZ1bmN0aW9uIEdvb2dsZVN0cmVldHZpZXdMb2FkZXIgKCBwYXJhbWV0ZXJzID0ge30gKSB7XG5cbiAgICB0aGlzLl9wYXJhbWV0ZXJzID0gcGFyYW1ldGVycztcbiAgICB0aGlzLl96b29tID0gbnVsbDtcbiAgICB0aGlzLl9wYW5vSWQgPSBudWxsO1xuICAgIHRoaXMuX3Bhbm9DbGllbnQgPSBuZXcgZ29vZ2xlLm1hcHMuU3RyZWV0Vmlld1NlcnZpY2UoKTtcbiAgICB0aGlzLl9jb3VudCA9IDA7XG4gICAgdGhpcy5fdG90YWwgPSAwO1xuICAgIHRoaXMuX2NhbnZhcyA9IFtdO1xuICAgIHRoaXMuX2N0eCA9IFtdO1xuICAgIHRoaXMuX3djID0gMDtcbiAgICB0aGlzLl9oYyA9IDA7XG4gICAgdGhpcy5yZXN1bHQgPSBudWxsO1xuICAgIHRoaXMucm90YXRpb24gPSAwO1xuICAgIHRoaXMuY29weXJpZ2h0ID0gJyc7XG4gICAgdGhpcy5vblNpemVDaGFuZ2UgPSBudWxsO1xuICAgIHRoaXMub25QYW5vcmFtYUxvYWQgPSBudWxsO1xuXG4gICAgdGhpcy5sZXZlbHNXID0gWyAxLCAyLCA0LCA3LCAxMywgMjYgXTtcbiAgICB0aGlzLmxldmVsc0ggPSBbIDEsIDEsIDIsIDQsIDcsIDEzIF07XG5cbiAgICB0aGlzLndpZHRocyA9IFsgNDE2LCA4MzIsIDE2NjQsIDMzMjgsIDY2NTYsIDEzMzEyIF07XG4gICAgdGhpcy5oZWlnaHRzID0gWyA0MTYsIDQxNiwgODMyLCAxNjY0LCAzMzI4LCA2NjU2IF07XG5cbiAgICB0aGlzLm1heFcgPSA2NjU2O1xuICAgIHRoaXMubWF4SCA9IDY2NTY7XG5cbiAgICBsZXQgZ2w7XG5cbiAgICB0cnkge1xuXG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdjYW52YXMnICk7XG5cbiAgICAgICAgZ2wgPSBjYW52YXMuZ2V0Q29udGV4dCggJ2V4cGVyaW1lbnRhbC13ZWJnbCcgKTtcblxuICAgICAgICBpZiggIWdsICkge1xuXG4gICAgICAgICAgICBnbCA9IGNhbnZhcy5nZXRDb250ZXh0KCAnd2ViZ2wnICk7XG5cbiAgICAgICAgfVxuXG4gICAgfVxuICAgIGNhdGNoICggZXJyb3IgKSB7XG5cbiAgICB9XG5cbiAgICB0aGlzLm1heFcgPSBNYXRoLm1heCggZ2wuZ2V0UGFyYW1ldGVyKCBnbC5NQVhfVEVYVFVSRV9TSVpFICksIHRoaXMubWF4VyApO1xuICAgIHRoaXMubWF4SCA9IE1hdGgubWF4KCBnbC5nZXRQYXJhbWV0ZXIoIGdsLk1BWF9URVhUVVJFX1NJWkUgKSwgdGhpcy5tYXhIICk7XG5cbn1cblxuT2JqZWN0LmFzc2lnbiggR29vZ2xlU3RyZWV0dmlld0xvYWRlci5wcm90b3R5cGUsIHtcblxuICAgIGNvbnN0cnVjdG9yOiBHb29nbGVTdHJlZXR2aWV3TG9hZGVyLFxuXG4gICAgLyoqXG4gICAgICogU2V0IHByb2dyZXNzXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGxvYWRlZCBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdG90YWwgXG4gICAgICogQG1lbWJlck9mIEdvb2dsZVN0cmVldHZpZXdMb2FkZXJcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBzZXRQcm9ncmVzczogZnVuY3Rpb24gKCBsb2FkZWQsIHRvdGFsICkge1xuXG4gICAgICAgIGlmICggdGhpcy5vblByb2dyZXNzICkge1xuXG4gICAgICAgICAgICB0aGlzLm9uUHJvZ3Jlc3MoIHsgbG9hZGVkOiBsb2FkZWQsIHRvdGFsOiB0b3RhbCB9ICk7XG5cbiAgICAgICAgfVxuXHRcdFxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBBZGFwdCB0ZXh0dXJlIHRvIHpvb21cbiAgICAgKiBAbWVtYmVyT2YgR29vZ2xlU3RyZWV0dmlld0xvYWRlclxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIGFkYXB0VGV4dHVyZVRvWm9vbTogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGNvbnN0IHcgPSB0aGlzLndpZHRocyBbIHRoaXMuX3pvb20gXTtcbiAgICAgICAgY29uc3QgaCA9IHRoaXMuaGVpZ2h0c1sgdGhpcy5fem9vbSBdO1xuXG4gICAgICAgIGNvbnN0IG1heFcgPSB0aGlzLm1heFc7XG4gICAgICAgIGNvbnN0IG1heEggPSB0aGlzLm1heEg7XG5cbiAgICAgICAgdGhpcy5fd2MgPSBNYXRoLmNlaWwoIHcgLyBtYXhXICk7XG4gICAgICAgIHRoaXMuX2hjID0gTWF0aC5jZWlsKCBoIC8gbWF4SCApO1xuXG4gICAgICAgIGZvciggbGV0IHkgPSAwOyB5IDwgdGhpcy5faGM7IHkrKyApIHtcbiAgICAgICAgICAgIGZvciggbGV0IHggPSAwOyB4IDwgdGhpcy5fd2M7IHgrKyApIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2NhbnZhcycgKTtcbiAgICAgICAgICAgICAgICBpZiggeCA8ICggdGhpcy5fd2MgLSAxICkgKSBjLndpZHRoID0gbWF4VzsgZWxzZSBjLndpZHRoID0gdyAtICggbWF4VyAqIHggKTtcbiAgICAgICAgICAgICAgICBpZiggeSA8ICggdGhpcy5faGMgLSAxICkgKSBjLmhlaWdodCA9IG1heEg7IGVsc2UgYy5oZWlnaHQgPSBoIC0gKCBtYXhIICogeSApO1xuICAgICAgICAgICAgICAgIHRoaXMuX2NhbnZhcy5wdXNoKCBjICk7XG4gICAgICAgICAgICAgICAgdGhpcy5fY3R4LnB1c2goIGMuZ2V0Q29udGV4dCggJzJkJyApICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDb21wb3NlIGZyb20gdGlsZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4IFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5IFxuICAgICAqIEBwYXJhbSB7Kn0gdGV4dHVyZSBcbiAgICAgKiBAbWVtYmVyT2YgR29vZ2xlU3RyZWV0dmlld0xvYWRlclxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIGNvbXBvc2VGcm9tVGlsZTogZnVuY3Rpb24gKCB4LCB5LCB0ZXh0dXJlICkge1xuXG4gICAgICAgIGNvbnN0IG1heFcgPSB0aGlzLm1heFc7XG4gICAgICAgIGNvbnN0IG1heEggPSB0aGlzLm1heEg7XG5cbiAgICAgICAgeCAqPSA1MTI7XG4gICAgICAgIHkgKj0gNTEyO1xuXG4gICAgICAgIGNvbnN0IHB4ID0gTWF0aC5mbG9vciggeCAvIG1heFcgKTtcbiAgICAgICAgY29uc3QgcHkgPSBNYXRoLmZsb29yKCB5IC8gbWF4SCApO1xuXG4gICAgICAgIHggLT0gcHggKiBtYXhXO1xuICAgICAgICB5IC09IHB5ICogbWF4SDtcblxuICAgICAgICB0aGlzLl9jdHhbIHB5ICogdGhpcy5fd2MgKyBweCBdLmRyYXdJbWFnZSggdGV4dHVyZSwgMCwgMCwgdGV4dHVyZS53aWR0aCwgdGV4dHVyZS5oZWlnaHQsIHgsIHksIDUxMiwgNTEyICk7XG5cbiAgICAgICAgdGhpcy5wcm9ncmVzcygpO1xuXHRcdFxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBQcm9ncmVzc1xuICAgICAqIEBtZW1iZXJPZiBHb29nbGVTdHJlZXR2aWV3TG9hZGVyXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgcHJvZ3Jlc3M6IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHRoaXMuX2NvdW50Kys7XG5cdFx0XG4gICAgICAgIHRoaXMuc2V0UHJvZ3Jlc3MoIHRoaXMuX2NvdW50LCB0aGlzLl90b3RhbCApO1xuXHRcdFxuICAgICAgICBpZiAoIHRoaXMuX2NvdW50ID09PSB0aGlzLl90b3RhbCkge1xuXG4gICAgICAgICAgICB0aGlzLmNhbnZhcyA9IHRoaXMuX2NhbnZhcztcbiAgICAgICAgICAgIHRoaXMucGFub0lkID0gdGhpcy5fcGFub0lkO1xuICAgICAgICAgICAgdGhpcy56b29tID0gdGhpcy5fem9vbTtcblxuICAgICAgICAgICAgaWYgKCB0aGlzLm9uUGFub3JhbWFMb2FkICkge1xuXG4gICAgICAgICAgICAgICAgdGhpcy5vblBhbm9yYW1hTG9hZCggdGhpcy5fY2FudmFzWyAwIF0gKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ29tcG9zZSBwYW5vcmFtYVxuICAgICAqIEBtZW1iZXJPZiBHb29nbGVTdHJlZXR2aWV3TG9hZGVyXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgY29tcG9zZVBhbm9yYW1hOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgdGhpcy5zZXRQcm9ncmVzcyggMCwgMSApO1xuXHRcdFxuICAgICAgICBjb25zdCB3ID0gdGhpcy5sZXZlbHNXWyB0aGlzLl96b29tIF07XG4gICAgICAgIGNvbnN0IGggPSB0aGlzLmxldmVsc0hbIHRoaXMuX3pvb20gXTtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0XHRcbiAgICAgICAgdGhpcy5fY291bnQgPSAwO1xuICAgICAgICB0aGlzLl90b3RhbCA9IHcgKiBoO1xuXG4gICAgICAgIGNvbnN0IHsgdXNlV2ViR0wgfSA9IHRoaXMuX3BhcmFtZXRlcnM7XG5cbiAgICAgICAgZm9yKCBsZXQgeSA9IDA7IHkgPCBoOyB5KysgKSB7XG4gICAgICAgICAgICBmb3IoIGxldCB4ID0gMDsgeCA8IHc7IHgrKyApIHtcbiAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSAnaHR0cHM6Ly9nZW8wLmdncGh0LmNvbS9jYms/Y2JfY2xpZW50PW1hcHNfc3YudGFjdGlsZSZhdXRodXNlcj0wJmhsPWVuJm91dHB1dD10aWxlJnpvb209JyArIHRoaXMuX3pvb20gKyAnJng9JyArIHggKyAnJnk9JyArIHkgKyAnJnBhbm9pZD0nICsgdGhpcy5fcGFub0lkICsgJyZuYnQmZm92ZXI9Mic7XG4gICAgICAgICAgICAgICAgKCBmdW5jdGlvbiggeCwgeSApIHsgXG4gICAgICAgICAgICAgICAgICAgIGlmKCB1c2VXZWJHTCApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRleHR1cmUgPSBUZXh0dXJlTG9hZGVyLmxvYWQoIHVybCwgbnVsbCwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jb21wb3NlRnJvbVRpbGUoIHgsIHksIHRleHR1cmUgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoICdsb2FkJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jb21wb3NlRnJvbVRpbGUoIHgsIHksIHRoaXMgKTtcdFx0XHRcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZy5jcm9zc09yaWdpbiA9ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1nLnNyYyA9IHVybDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gKSggeCwgeSApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cdFx0XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIExvYWRcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGFub2lkIFxuICAgICAqIEBtZW1iZXJPZiBHb29nbGVTdHJlZXR2aWV3TG9hZGVyXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgbG9hZDogZnVuY3Rpb24gKCBwYW5vaWQgKSB7XG5cbiAgICAgICAgdGhpcy5sb2FkUGFubyggcGFub2lkICk7XG5cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogTG9hZCBwYW5vcmFtYVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZFxuICAgICAqIEBtZW1iZXJPZiBHb29nbGVTdHJlZXR2aWV3TG9hZGVyXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgbG9hZFBhbm86IGZ1bmN0aW9uKCBpZCApIHtcblxuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5fcGFub0NsaWVudC5nZXRQYW5vcmFtYUJ5SWQoIGlkLCBmdW5jdGlvbiAocmVzdWx0LCBzdGF0dXMpIHtcbiAgICAgICAgICAgIGlmIChzdGF0dXMgPT09IGdvb2dsZS5tYXBzLlN0cmVldFZpZXdTdGF0dXMuT0spIHtcbiAgICAgICAgICAgICAgICBzZWxmLnJlc3VsdCA9IHJlc3VsdDtcbiAgICAgICAgICAgICAgICBzZWxmLmNvcHlyaWdodCA9IHJlc3VsdC5jb3B5cmlnaHQ7XG4gICAgICAgICAgICAgICAgc2VsZi5fcGFub0lkID0gcmVzdWx0LmxvY2F0aW9uLnBhbm87XG4gICAgICAgICAgICAgICAgc2VsZi5jb21wb3NlUGFub3JhbWEoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cdFx0XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNldCB6b29tIGxldmVsXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHogXG4gICAgICogQG1lbWJlck9mIEdvb2dsZVN0cmVldHZpZXdMb2FkZXJcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBzZXRab29tOiBmdW5jdGlvbiggeiApIHtcblxuICAgICAgICB0aGlzLl96b29tID0gejtcbiAgICAgICAgdGhpcy5hZGFwdFRleHR1cmVUb1pvb20oKTtcbiAgICB9XG5cdFxufSApO1xuXG5leHBvcnQgeyBHb29nbGVTdHJlZXR2aWV3TG9hZGVyIH07IiwiaW1wb3J0IHsgSW1hZ2VQYW5vcmFtYSB9IGZyb20gJy4vSW1hZ2VQYW5vcmFtYSc7XG5pbXBvcnQgeyBHb29nbGVTdHJlZXR2aWV3TG9hZGVyIH0gZnJvbSAnLi4vbG9hZGVycy9Hb29nbGVTdHJlZXR2aWV3TG9hZGVyJztcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcblxuLyoqXG4gKiBAY2xhc3NkZXNjIEdvb2dsZSBzdHJlZXR2aWV3IHBhbm9yYW1hXG4gKiBAZGVzY3JpcHRpb24gW0hvdyB0byBnZXQgUGFub3JhbWEgSURde0BsaW5rIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjk5MTYxNDkvZ29vZ2xlLW1hcHMtc3RyZWV0dmlldy1ob3ctdG8tZ2V0LXBhbm9yYW1hLWlkfVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge3N0cmluZ30gcGFub0lkIC0gUGFub3JhbWEgaWQgZnJvbSBHb29nbGUgU3RyZWV0dmlldyBcbiAqIEBwYXJhbSB7c3RyaW5nfSBbYXBpS2V5XSAtIEdvb2dsZSBTdHJlZXQgVmlldyBBUEkgS2V5XG4gKi9cbmZ1bmN0aW9uIEdvb2dsZVN0cmVldHZpZXdQYW5vcmFtYSAoIHBhbm9JZCwgYXBpS2V5ICkge1xuXG4gICAgSW1hZ2VQYW5vcmFtYS5jYWxsKCB0aGlzICk7XG5cbiAgICB0aGlzLnBhbm9JZCA9IHBhbm9JZDtcblxuICAgIHRoaXMuZ3N2TG9hZGVyID0gbnVsbDtcblxuICAgIHRoaXMubG9hZFJlcXVlc3RlZCA9IGZhbHNlO1xuXG4gICAgdGhpcy5zZXR1cEdvb2dsZU1hcEFQSSggYXBpS2V5ICk7XG5cbn1cblxuR29vZ2xlU3RyZWV0dmlld1Bhbm9yYW1hLnByb3RvdHlwZSA9IE9iamVjdC5hc3NpZ24oIE9iamVjdC5jcmVhdGUoIEltYWdlUGFub3JhbWEucHJvdG90eXBlICksIHtcblxuICAgIGNvbnN0cnVjdG9yOiBHb29nbGVTdHJlZXR2aWV3UGFub3JhbWEsXG5cbiAgICAvKipcbiAgICAgKiBMb2FkIEdvb2dsZSBTdHJlZXQgVmlldyBieSBwYW5vcmFtYSBpZFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwYW5vSWQgLSBHb2dvZ2xlIFN0cmVldCBWaWV3IHBhbm9yYW1hIGlkXG4gICAgICogQG1lbWJlck9mIEdvb2dsZVN0cmVldHZpZXdQYW5vcmFtYVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIGxvYWQ6IGZ1bmN0aW9uICggcGFub0lkICkge1xuXG4gICAgICAgIHRoaXMubG9hZFJlcXVlc3RlZCA9IHRydWU7XG5cbiAgICAgICAgcGFub0lkID0gKCBwYW5vSWQgfHwgdGhpcy5wYW5vSWQgKSB8fCB7fTtcblxuICAgICAgICBpZiAoIHBhbm9JZCAmJiB0aGlzLmdzdkxvYWRlciApIHtcblxuICAgICAgICAgICAgdGhpcy5sb2FkR1NWTG9hZGVyKCBwYW5vSWQgKTtcblxuICAgICAgICB9XG5cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2V0dXAgR29vZ2xlIE1hcCBBUElcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gIGFwaUtleVxuICAgICAqIEBtZW1iZXJPZiBHb29nbGVTdHJlZXR2aWV3UGFub3JhbWFcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBzZXR1cEdvb2dsZU1hcEFQSTogZnVuY3Rpb24gKCBhcGlLZXkgKSB7XG5cbiAgICAgICAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ3NjcmlwdCcgKTtcbiAgICAgICAgc2NyaXB0LnNyYyA9ICdodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvanM/JztcbiAgICAgICAgc2NyaXB0LnNyYyArPSBhcGlLZXkgPyAna2V5PScgKyBhcGlLZXkgOiAnJztcbiAgICAgICAgc2NyaXB0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IHRoaXMuc2V0R1NWTG9hZGVyLmJpbmQoIHRoaXMgKTtcbiAgICAgICAgc2NyaXB0Lm9ubG9hZCA9IHRoaXMuc2V0R1NWTG9hZGVyLmJpbmQoIHRoaXMgKTtcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnaGVhZCcgKS5hcHBlbmRDaGlsZCggc2NyaXB0ICk7XG5cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2V0IEdTViBMb2FkZXJcbiAgICAgKiBAbWVtYmVyT2YgR29vZ2xlU3RyZWV0dmlld1Bhbm9yYW1hXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgc2V0R1NWTG9hZGVyOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgdGhpcy5nc3ZMb2FkZXIgPSBuZXcgR29vZ2xlU3RyZWV0dmlld0xvYWRlcigpO1xuXG4gICAgICAgIGlmICggdGhpcy5sb2FkUmVxdWVzdGVkICkge1xuXG4gICAgICAgICAgICB0aGlzLmxvYWQoKTtcblxuICAgICAgICB9XG5cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogR2V0IEdTViBMb2FkZXJcbiAgICAgKiBAbWVtYmVyT2YgR29vZ2xlU3RyZWV0dmlld1Bhbm9yYW1hXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHJldHVybiB7R29vZ2xlU3RyZWV0dmlld0xvYWRlcn0gR1NWIExvYWRlciBpbnN0YW5jZVxuICAgICAqL1xuICAgIGdldEdTVkxvYWRlcjogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIHJldHVybiB0aGlzLmdzdkxvYWRlcjtcblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBMb2FkIEdTViBMb2FkZXJcbiAgICAgKiBAcGFyYW0gIHtzdHJpbmd9IHBhbm9JZCAtIEdvZ29nbGUgU3RyZWV0IFZpZXcgcGFub3JhbWEgaWRcbiAgICAgKiBAbWVtYmVyT2YgR29vZ2xlU3RyZWV0dmlld1Bhbm9yYW1hXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgbG9hZEdTVkxvYWRlcjogZnVuY3Rpb24gKCBwYW5vSWQgKSB7XG5cbiAgICAgICAgdGhpcy5sb2FkUmVxdWVzdGVkID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5nc3ZMb2FkZXIub25Qcm9ncmVzcyA9IHRoaXMub25Qcm9ncmVzcy5iaW5kKCB0aGlzICk7XG5cbiAgICAgICAgdGhpcy5nc3ZMb2FkZXIub25QYW5vcmFtYUxvYWQgPSB0aGlzLm9uTG9hZC5iaW5kKCB0aGlzICk7XG5cbiAgICAgICAgdGhpcy5nc3ZMb2FkZXIuc2V0Wm9vbSggdGhpcy5nZXRab29tTGV2ZWwoKSApO1xuXG4gICAgICAgIHRoaXMuZ3N2TG9hZGVyLmxvYWQoIHBhbm9JZCApO1xuXG4gICAgICAgIHRoaXMuZ3N2TG9hZGVyLmxvYWRlZCA9IHRydWU7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFRoaXMgd2lsbCBiZSBjYWxsZWQgd2hlbiBwYW5vcmFtYSBpcyBsb2FkZWRcbiAgICAgKiBAcGFyYW0gIHtIVE1MQ2FudmFzRWxlbWVudH0gY2FudmFzIC0gQ2FudmFzIHdoZXJlIHRoZSB0aWxlcyBoYXZlIGJlZW4gZHJhd25cbiAgICAgKiBAbWVtYmVyT2YgR29vZ2xlU3RyZWV0dmlld1Bhbm9yYW1hXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoIGNhbnZhcyApIHtcblxuICAgICAgICBJbWFnZVBhbm9yYW1hLnByb3RvdHlwZS5vbkxvYWQuY2FsbCggdGhpcywgbmV3IFRIUkVFLlRleHR1cmUoIGNhbnZhcyApICk7XG5cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmVzZXRcbiAgICAgKiBAbWVtYmVyT2YgR29vZ2xlU3RyZWV0dmlld1Bhbm9yYW1hXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgcmVzZXQ6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICB0aGlzLmdzdkxvYWRlciA9IHVuZGVmaW5lZDtcblxuICAgICAgICBJbWFnZVBhbm9yYW1hLnByb3RvdHlwZS5yZXNldC5jYWxsKCB0aGlzICk7XG5cbiAgICB9XG5cbn0gKTtcblxuZXhwb3J0IHsgR29vZ2xlU3RyZWV0dmlld1Bhbm9yYW1hIH07IiwiLyoqXG4gKiBTdGVyZW9ncmFwaGljIHByb2plY3Rpb24gc2hhZGVyXG4gKiBiYXNlZCBvbiBodHRwOi8vbm90bGlvbi5naXRodWIuaW8vc3RyZWV0dmlldy1zdGVyZW9ncmFwaGljXG4gKiBAYXV0aG9yIHBjaGVuNjZcbiAqL1xuXG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIFN0ZXJlb2dyYWhwaWMgU2hhZGVyXG4gKiBAbW9kdWxlIFN0ZXJlb2dyYXBoaWNTaGFkZXJcbiAqIEBwcm9wZXJ0eSB7b2JqZWN0fSB1bmlmb3Jtc1xuICogQHByb3BlcnR5IHtUSFJFRS5UZXh0dXJlfSB1bmlmb3Jtcy50RGlmZnVzZSBkaWZmdXNlIG1hcFxuICogQHByb3BlcnR5IHtudW1iZXJ9IHVuaWZvcm1zLnJlc29sdXRpb24gaW1hZ2UgcmVzb2x1dGlvblxuICogQHByb3BlcnR5IHtUSFJFRS5NYXRyaXg0fSB1bmlmb3Jtcy50cmFuc2Zvcm0gdHJhbnNmb3JtYXRpb24gbWF0cml4XG4gKiBAcHJvcGVydHkge251bWJlcn0gdW5pZm9ybXMuem9vbSBpbWFnZSB6b29tIGZhY3RvclxuICogQHByb3BlcnR5IHtudW1iZXJ9IHVuaWZvcm1zLm9wYWNpdHkgaW1hZ2Ugb3BhY2l0eVxuICogQHByb3BlcnR5IHtzdHJpbmd9IHZlcnRleFNoYWRlciB2ZXJ0ZXggc2hhZGVyXG4gKiBAcHJvcGVydHkge3N0cmluZ30gZnJhZ21lbnRTaGFkZXIgZnJhZ21lbnQgc2hhZGVyXG4gKi9cbmNvbnN0IFN0ZXJlb2dyYXBoaWNTaGFkZXIgPSB7XG5cbiAgICB1bmlmb3Jtczoge1xuXG4gICAgICAgICd0RGlmZnVzZSc6IHsgdmFsdWU6IG5ldyBUSFJFRS5UZXh0dXJlKCkgfSxcbiAgICAgICAgJ3Jlc29sdXRpb24nOiB7IHZhbHVlOiAxLjAgfSxcbiAgICAgICAgJ3RyYW5zZm9ybSc6IHsgdmFsdWU6IG5ldyBUSFJFRS5NYXRyaXg0KCkgfSxcbiAgICAgICAgJ3pvb20nOiB7IHZhbHVlOiAxLjAgfSxcbiAgICAgICAgJ29wYWNpdHknOiB7IHZhbHVlOiAxLjAgfVxuXG4gICAgfSxcblxuICAgIHZlcnRleFNoYWRlcjogW1xuXG4gICAgICAgICd2YXJ5aW5nIHZlYzIgdlV2OycsXG5cbiAgICAgICAgJ3ZvaWQgbWFpbigpIHsnLFxuXG4gICAgICAgICd2VXYgPSB1djsnLFxuICAgICAgICAnZ2xfUG9zaXRpb24gPSB2ZWM0KCBwb3NpdGlvbiwgMS4wICk7JyxcblxuICAgICAgICAnfScgXG5cbiAgICBdLmpvaW4oICdcXG4nICksXG5cbiAgICBmcmFnbWVudFNoYWRlcjogW1xuXG4gICAgICAgICd1bmlmb3JtIHNhbXBsZXIyRCB0RGlmZnVzZTsnLFxuICAgICAgICAndW5pZm9ybSBmbG9hdCByZXNvbHV0aW9uOycsXG4gICAgICAgICd1bmlmb3JtIG1hdDQgdHJhbnNmb3JtOycsXG4gICAgICAgICd1bmlmb3JtIGZsb2F0IHpvb207JyxcbiAgICAgICAgJ3VuaWZvcm0gZmxvYXQgb3BhY2l0eTsnLFxuXG4gICAgICAgICd2YXJ5aW5nIHZlYzIgdlV2OycsXG5cbiAgICAgICAgJ2NvbnN0IGZsb2F0IFBJID0gMy4xNDE1OTI2NTM1ODk3OTM7JyxcblxuICAgICAgICAndm9pZCBtYWluKCl7JyxcblxuICAgICAgICAndmVjMiBwb3NpdGlvbiA9IC0xLjAgKyAgMi4wICogdlV2OycsXG5cbiAgICAgICAgJ3Bvc2l0aW9uICo9IHZlYzIoIHpvb20gKiByZXNvbHV0aW9uLCB6b29tICogMC41ICk7JyxcblxuICAgICAgICAnZmxvYXQgeDJ5MiA9IHBvc2l0aW9uLnggKiBwb3NpdGlvbi54ICsgcG9zaXRpb24ueSAqIHBvc2l0aW9uLnk7JyxcbiAgICAgICAgJ3ZlYzMgc3BoZXJlX3BudCA9IHZlYzMoIDIuICogcG9zaXRpb24sIHgyeTIgLSAxLiApIC8gKCB4MnkyICsgMS4gKTsnLFxuXG4gICAgICAgICdzcGhlcmVfcG50ID0gdmVjMyggdHJhbnNmb3JtICogdmVjNCggc3BoZXJlX3BudCwgMS4wICkgKTsnLFxuXG4gICAgICAgICd2ZWMyIHNhbXBsZVVWID0gdmVjMignLFxuICAgICAgICAnKGF0YW4oc3BoZXJlX3BudC55LCBzcGhlcmVfcG50LngpIC8gUEkgKyAxLjApICogMC41LCcsXG4gICAgICAgICcoYXNpbihzcGhlcmVfcG50LnopIC8gUEkgKyAwLjUpJyxcbiAgICAgICAgJyk7JyxcblxuICAgICAgICAnZ2xfRnJhZ0NvbG9yID0gdGV4dHVyZTJEKCB0RGlmZnVzZSwgc2FtcGxlVVYgKTsnLFxuXG4gICAgICAgICdnbF9GcmFnQ29sb3IuYSAqPSBvcGFjaXR5OycsXG5cbiAgICAgICAgJ30nXG5cbiAgICBdLmpvaW4oICdcXG4nIClcblxufTtcblxuZXhwb3J0IHsgU3RlcmVvZ3JhcGhpY1NoYWRlciB9OyIsImltcG9ydCB7IEltYWdlUGFub3JhbWEgfSBmcm9tICcuL0ltYWdlUGFub3JhbWEnO1xuaW1wb3J0IHsgSW5mb3Nwb3QgfSBmcm9tICcuLi9pbmZvc3BvdC9JbmZvc3BvdCc7XG5pbXBvcnQgeyBDT05UUk9MUyB9IGZyb20gJy4uL0NvbnN0YW50cyc7XG5pbXBvcnQgeyBTdGVyZW9ncmFwaGljU2hhZGVyIH0gZnJvbSAnLi4vc2hhZGVycy9TdGVyZW9ncmFwaGljU2hhZGVyJztcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcblxuLyoqXG4gKiBAY2xhc3NkZXNjIExpdHRsZSBQbGFuZXRcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgXHRcdC0gVHlwZSBvZiBsaXR0bGUgcGxhbmV0IGJhc2ljIGNsYXNzXG4gKiBAcGFyYW0ge3N0cmluZ30gc291cmNlIFx0XHQtIFVSTCBmb3IgdGhlIGltYWdlIHNvdXJjZVxuICogQHBhcmFtIHtudW1iZXJ9IFtzaXplPTEwMDAwXSAtIFNpemUgb2YgcGxhbmUgZ2VvbWV0cnlcbiAqIEBwYXJhbSB7bnVtYmVyfSBbcmF0aW89MC41XSAgLSBSYXRpbyBvZiBwbGFuZSBnZW9tZXRyeSdzIGhlaWdodCBhZ2FpbnN0IHdpZHRoXG4gKi9cbmZ1bmN0aW9uIExpdHRsZVBsYW5ldCAoIHR5cGUgPSAnaW1hZ2UnLCBzb3VyY2UsIHNpemUgPSAxMDAwMCwgcmF0aW8gPSAwLjUgKSB7XG5cbiAgICBpZiAoIHR5cGUgPT09ICdpbWFnZScgKSB7XG5cbiAgICAgICAgSW1hZ2VQYW5vcmFtYS5jYWxsKCB0aGlzLCBzb3VyY2UsIHRoaXMuY3JlYXRlR2VvbWV0cnkoIHNpemUsIHJhdGlvICksIHRoaXMuY3JlYXRlTWF0ZXJpYWwoIHNpemUgKSApO1xuXG4gICAgfVxuXG4gICAgdGhpcy5zaXplID0gc2l6ZTtcbiAgICB0aGlzLnJhdGlvID0gcmF0aW87XG4gICAgdGhpcy5FUFMgPSAwLjAwMDAwMTtcbiAgICB0aGlzLmZyYW1lSWQgPSBudWxsO1xuXG4gICAgdGhpcy5kcmFnZ2luZyA9IGZhbHNlO1xuICAgIHRoaXMudXNlck1vdXNlID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcblxuICAgIHRoaXMucXVhdEEgPSBuZXcgVEhSRUUuUXVhdGVybmlvbigpO1xuICAgIHRoaXMucXVhdEIgPSBuZXcgVEhSRUUuUXVhdGVybmlvbigpO1xuICAgIHRoaXMucXVhdEN1ciA9IG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCk7XG4gICAgdGhpcy5xdWF0U2xlcnAgPSBuZXcgVEhSRUUuUXVhdGVybmlvbigpO1xuXG4gICAgdGhpcy52ZWN0b3JYID0gbmV3IFRIUkVFLlZlY3RvcjMoIDEsIDAsIDAgKTtcbiAgICB0aGlzLnZlY3RvclkgPSBuZXcgVEhSRUUuVmVjdG9yMyggMCwgMSwgMCApO1xuXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCAnd2luZG93LXJlc2l6ZScsIHRoaXMub25XaW5kb3dSZXNpemUgKTtcblxufVxuXG5MaXR0bGVQbGFuZXQucHJvdG90eXBlID0gT2JqZWN0LmFzc2lnbiggT2JqZWN0LmNyZWF0ZSggSW1hZ2VQYW5vcmFtYS5wcm90b3R5cGUgKSwge1xuXG4gICAgY29uc3RydWN0b3I6IExpdHRsZVBsYW5ldCxcblxuICAgIGFkZDogZnVuY3Rpb24gKCBvYmplY3QgKSB7XG5cbiAgICAgICAgaWYgKCBhcmd1bWVudHMubGVuZ3RoID4gMSApIHtcblx0XHRcdFxuICAgICAgICAgICAgZm9yICggbGV0IGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSArKyApIHtcblxuICAgICAgICAgICAgICAgIHRoaXMuYWRkKCBhcmd1bWVudHNbIGkgXSApO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIG9iamVjdCBpbnN0YW5jZW9mIEluZm9zcG90ICkge1xuXG4gICAgICAgICAgICBvYmplY3QubWF0ZXJpYWwuZGVwdGhUZXN0ID0gZmFsc2U7XG5cdFx0XHRcbiAgICAgICAgfVxuXG4gICAgICAgIEltYWdlUGFub3JhbWEucHJvdG90eXBlLmFkZC5jYWxsKCB0aGlzLCBvYmplY3QgKTtcblxuICAgIH0sXG5cbiAgICBjcmVhdGVHZW9tZXRyeTogZnVuY3Rpb24gKCBzaXplLCByYXRpbyApIHtcblxuICAgICAgICByZXR1cm4gbmV3IFRIUkVFLlBsYW5lQnVmZmVyR2VvbWV0cnkoIHNpemUsIHNpemUgKiByYXRpbyApO1xuXG4gICAgfSxcblxuICAgIGNyZWF0ZU1hdGVyaWFsOiBmdW5jdGlvbiAoIHNpemUgKSB7XG5cbiAgICAgICAgY29uc3Qgc2hhZGVyID0gT2JqZWN0LmFzc2lnbigge30sIFN0ZXJlb2dyYXBoaWNTaGFkZXIgKSwgdW5pZm9ybXMgPSBzaGFkZXIudW5pZm9ybXM7XG5cbiAgICAgICAgdW5pZm9ybXMuem9vbS52YWx1ZSA9IHNpemU7XG4gICAgICAgIHVuaWZvcm1zLm9wYWNpdHkudmFsdWUgPSAwLjA7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBUSFJFRS5TaGFkZXJNYXRlcmlhbCgge1xuXG4gICAgICAgICAgICB1bmlmb3JtczogdW5pZm9ybXMsXG4gICAgICAgICAgICB2ZXJ0ZXhTaGFkZXI6IHNoYWRlci52ZXJ0ZXhTaGFkZXIsXG4gICAgICAgICAgICBmcmFnbWVudFNoYWRlcjogc2hhZGVyLmZyYWdtZW50U2hhZGVyLFxuICAgICAgICAgICAgc2lkZTogVEhSRUUuQmFja1NpZGUsXG4gICAgICAgICAgICB0cmFuc3BhcmVudDogdHJ1ZVxuXG4gICAgICAgIH0gKTtcblx0XHRcbiAgICB9LFxuXG4gICAgcmVnaXN0ZXJNb3VzZUV2ZW50czogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZWRvd24nLCB0aGlzLm9uTW91c2VEb3duLmJpbmQoIHRoaXMgKSwgeyBwYXNzaXZlOiB0cnVlIH0gKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNlbW92ZScsIHRoaXMub25Nb3VzZU1vdmUuYmluZCggdGhpcyApLCB7IHBhc3NpdmU6IHRydWUgfSApO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCAnbW91c2V1cCcsIHRoaXMub25Nb3VzZVVwLmJpbmQoIHRoaXMgKSwgeyBwYXNzaXZlOiB0cnVlIH0gKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lciggJ3RvdWNoc3RhcnQnLCB0aGlzLm9uTW91c2VEb3duLmJpbmQoIHRoaXMgKSwgeyBwYXNzaXZlOiB0cnVlIH0gKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lciggJ3RvdWNobW92ZScsIHRoaXMub25Nb3VzZU1vdmUuYmluZCggdGhpcyApLCB7IHBhc3NpdmU6IHRydWUgfSApO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCAndG91Y2hlbmQnLCB0aGlzLm9uTW91c2VVcC5iaW5kKCB0aGlzICksIHsgcGFzc2l2ZTogdHJ1ZSB9ICk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZXdoZWVsJywgdGhpcy5vbk1vdXNlV2hlZWwuYmluZCggdGhpcyApLCB7IHBhc3NpdmU6IGZhbHNlIH0gKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lciggJ0RPTU1vdXNlU2Nyb2xsJywgdGhpcy5vbk1vdXNlV2hlZWwuYmluZCggdGhpcyApLCB7IHBhc3NpdmU6IGZhbHNlIH0gKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lciggJ2NvbnRleHRtZW51JywgdGhpcy5vbkNvbnRleHRNZW51LmJpbmQoIHRoaXMgKSwgeyBwYXNzaXZlOiB0cnVlIH0gKTtcblx0XHRcbiAgICB9LFxuXG4gICAgdW5yZWdpc3Rlck1vdXNlRXZlbnRzOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgdGhpcy5jb250YWluZXIucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ21vdXNlZG93bicsIHRoaXMub25Nb3VzZURvd24uYmluZCggdGhpcyApLCBmYWxzZSApO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVFdmVudExpc3RlbmVyKCAnbW91c2Vtb3ZlJywgdGhpcy5vbk1vdXNlTW92ZS5iaW5kKCB0aGlzICksIGZhbHNlICk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoICdtb3VzZXVwJywgdGhpcy5vbk1vdXNlVXAuYmluZCggdGhpcyApLCBmYWxzZSApO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVFdmVudExpc3RlbmVyKCAndG91Y2hzdGFydCcsIHRoaXMub25Nb3VzZURvd24uYmluZCggdGhpcyApLCBmYWxzZSApO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVFdmVudExpc3RlbmVyKCAndG91Y2htb3ZlJywgdGhpcy5vbk1vdXNlTW92ZS5iaW5kKCB0aGlzICksIGZhbHNlICk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoICd0b3VjaGVuZCcsIHRoaXMub25Nb3VzZVVwLmJpbmQoIHRoaXMgKSwgZmFsc2UgKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ21vdXNld2hlZWwnLCB0aGlzLm9uTW91c2VXaGVlbC5iaW5kKCB0aGlzICksIGZhbHNlICk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoICdET01Nb3VzZVNjcm9sbCcsIHRoaXMub25Nb3VzZVdoZWVsLmJpbmQoIHRoaXMgKSwgZmFsc2UgKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ2NvbnRleHRtZW51JywgdGhpcy5vbkNvbnRleHRNZW51LmJpbmQoIHRoaXMgKSwgZmFsc2UgKTtcblx0XHRcbiAgICB9LFxuXG4gICAgb25Nb3VzZURvd246IGZ1bmN0aW9uICggZXZlbnQgKSB7XG5cbiAgICAgICAgY29uc3QgaW5wdXRDb3VudCA9ICggZXZlbnQudG91Y2hlcyAmJiBldmVudC50b3VjaGVzLmxlbmd0aCApIHx8IDEgO1xuXG4gICAgICAgIHN3aXRjaCAoIGlucHV0Q291bnQgKSB7XG5cbiAgICAgICAgY2FzZSAxOlxuXG4gICAgICAgICAgICBjb25zdCB4ID0gKCBldmVudC5jbGllbnRYID49IDAgKSA/IGV2ZW50LmNsaWVudFggOiBldmVudC50b3VjaGVzWyAwIF0uY2xpZW50WDtcbiAgICAgICAgICAgIGNvbnN0IHkgPSAoIGV2ZW50LmNsaWVudFkgPj0gMCApID8gZXZlbnQuY2xpZW50WSA6IGV2ZW50LnRvdWNoZXNbIDAgXS5jbGllbnRZO1xuXG4gICAgICAgICAgICB0aGlzLmRyYWdnaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMudXNlck1vdXNlLnNldCggeCwgeSApO1xuXG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDI6XG5cbiAgICAgICAgICAgIGNvbnN0IGR4ID0gZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VYIC0gZXZlbnQudG91Y2hlc1sgMSBdLnBhZ2VYO1xuICAgICAgICAgICAgY29uc3QgZHkgPSBldmVudC50b3VjaGVzWyAwIF0ucGFnZVkgLSBldmVudC50b3VjaGVzWyAxIF0ucGFnZVk7XG4gICAgICAgICAgICBjb25zdCBkaXN0YW5jZSA9IE1hdGguc3FydCggZHggKiBkeCArIGR5ICogZHkgKTtcbiAgICAgICAgICAgIHRoaXMudXNlck1vdXNlLnBpbmNoRGlzdGFuY2UgPSBkaXN0YW5jZTtcblxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcblxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMub25VcGRhdGVDYWxsYmFjaygpO1xuXG4gICAgfSxcblxuICAgIG9uTW91c2VNb3ZlOiBmdW5jdGlvbiAoIGV2ZW50ICkge1xuXG4gICAgICAgIGNvbnN0IGlucHV0Q291bnQgPSAoIGV2ZW50LnRvdWNoZXMgJiYgZXZlbnQudG91Y2hlcy5sZW5ndGggKSB8fCAxIDtcblxuICAgICAgICBzd2l0Y2ggKCBpbnB1dENvdW50ICkge1xuXG4gICAgICAgIGNhc2UgMTpcblxuICAgICAgICAgICAgY29uc3QgeCA9ICggZXZlbnQuY2xpZW50WCA+PSAwICkgPyBldmVudC5jbGllbnRYIDogZXZlbnQudG91Y2hlc1sgMCBdLmNsaWVudFg7XG4gICAgICAgICAgICBjb25zdCB5ID0gKCBldmVudC5jbGllbnRZID49IDAgKSA/IGV2ZW50LmNsaWVudFkgOiBldmVudC50b3VjaGVzWyAwIF0uY2xpZW50WTtcblxuICAgICAgICAgICAgY29uc3QgYW5nbGVYID0gVEhSRUUuTWF0aC5kZWdUb1JhZCggeCAtIHRoaXMudXNlck1vdXNlLnggKSAqIDAuNDtcbiAgICAgICAgICAgIGNvbnN0IGFuZ2xlWSA9IFRIUkVFLk1hdGguZGVnVG9SYWQoIHkgLSB0aGlzLnVzZXJNb3VzZS55ICkgKiAwLjQ7XG5cbiAgICAgICAgICAgIGlmICggdGhpcy5kcmFnZ2luZyApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnF1YXRBLnNldEZyb21BeGlzQW5nbGUoIHRoaXMudmVjdG9yWSwgYW5nbGVYICk7XG4gICAgICAgICAgICAgICAgdGhpcy5xdWF0Qi5zZXRGcm9tQXhpc0FuZ2xlKCB0aGlzLnZlY3RvclgsIGFuZ2xlWSApO1xuICAgICAgICAgICAgICAgIHRoaXMucXVhdEN1ci5tdWx0aXBseSggdGhpcy5xdWF0QSApLm11bHRpcGx5KCB0aGlzLnF1YXRCICk7XG4gICAgICAgICAgICAgICAgdGhpcy51c2VyTW91c2Uuc2V0KCB4LCB5ICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgMjpcblxuICAgICAgICAgICAgY29uc3QgZHggPSBldmVudC50b3VjaGVzWyAwIF0ucGFnZVggLSBldmVudC50b3VjaGVzWyAxIF0ucGFnZVg7XG4gICAgICAgICAgICBjb25zdCBkeSA9IGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWSAtIGV2ZW50LnRvdWNoZXNbIDEgXS5wYWdlWTtcbiAgICAgICAgICAgIGNvbnN0IGRpc3RhbmNlID0gTWF0aC5zcXJ0KCBkeCAqIGR4ICsgZHkgKiBkeSApO1xuXG4gICAgICAgICAgICB0aGlzLmFkZFpvb21EZWx0YSggdGhpcy51c2VyTW91c2UucGluY2hEaXN0YW5jZSAtIGRpc3RhbmNlICk7XG5cbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG5cbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICBvbk1vdXNlVXA6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICB0aGlzLmRyYWdnaW5nID0gZmFsc2U7XG5cbiAgICB9LFxuXG4gICAgb25Nb3VzZVdoZWVsOiBmdW5jdGlvbiAoIGV2ZW50ICkge1xuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIGxldCBkZWx0YSA9IDA7XG5cbiAgICAgICAgaWYgKCBldmVudC53aGVlbERlbHRhICE9PSB1bmRlZmluZWQgKSB7IC8vIFdlYktpdCAvIE9wZXJhIC8gRXhwbG9yZXIgOVxuXG4gICAgICAgICAgICBkZWx0YSA9IGV2ZW50LndoZWVsRGVsdGE7XG5cbiAgICAgICAgfSBlbHNlIGlmICggZXZlbnQuZGV0YWlsICE9PSB1bmRlZmluZWQgKSB7IC8vIEZpcmVmb3hcblxuICAgICAgICAgICAgZGVsdGEgPSAtIGV2ZW50LmRldGFpbDtcblxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hZGRab29tRGVsdGEoIGRlbHRhICk7XG4gICAgICAgIHRoaXMub25VcGRhdGVDYWxsYmFjaygpO1xuXG4gICAgfSxcblxuICAgIGFkZFpvb21EZWx0YTogZnVuY3Rpb24gKCBkZWx0YSApIHtcblxuICAgICAgICBjb25zdCB1bmlmb3JtcyA9IHRoaXMubWF0ZXJpYWwudW5pZm9ybXM7XG4gICAgICAgIGNvbnN0IGxvd2VyQm91bmQgPSB0aGlzLnNpemUgKiAwLjE7XG4gICAgICAgIGNvbnN0IHVwcGVyQm91bmQgPSB0aGlzLnNpemUgKiAxMDtcblxuICAgICAgICB1bmlmb3Jtcy56b29tLnZhbHVlICs9IGRlbHRhO1xuXG4gICAgICAgIGlmICggdW5pZm9ybXMuem9vbS52YWx1ZSA8PSBsb3dlckJvdW5kICkge1xuXG4gICAgICAgICAgICB1bmlmb3Jtcy56b29tLnZhbHVlID0gbG93ZXJCb3VuZDtcblxuICAgICAgICB9IGVsc2UgaWYgKCB1bmlmb3Jtcy56b29tLnZhbHVlID49IHVwcGVyQm91bmQgKSB7XG5cbiAgICAgICAgICAgIHVuaWZvcm1zLnpvb20udmFsdWUgPSB1cHBlckJvdW5kO1xuXG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICBvblVwZGF0ZUNhbGxiYWNrOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgdGhpcy5mcmFtZUlkID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSggdGhpcy5vblVwZGF0ZUNhbGxiYWNrLmJpbmQoIHRoaXMgKSApO1xuXG4gICAgICAgIHRoaXMucXVhdFNsZXJwLnNsZXJwKCB0aGlzLnF1YXRDdXIsIDAuMSApO1xuXG4gICAgICAgIGlmICggdGhpcy5tYXRlcmlhbCApIHtcblxuICAgICAgICAgICAgdGhpcy5tYXRlcmlhbC51bmlmb3Jtcy50cmFuc2Zvcm0udmFsdWUubWFrZVJvdGF0aW9uRnJvbVF1YXRlcm5pb24oIHRoaXMucXVhdFNsZXJwICk7XG5cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKCAhdGhpcy5kcmFnZ2luZyAmJiAxLjAgLSB0aGlzLnF1YXRTbGVycC5jbG9uZSgpLmRvdCggdGhpcy5xdWF0Q3VyICkgPCB0aGlzLkVQUyApIHtcblx0XHRcdFxuICAgICAgICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKCB0aGlzLmZyYW1lSWQgKTtcblxuICAgICAgICB9XG5cbiAgICB9LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICB0aGlzLnF1YXRDdXIuc2V0KCAwLCAwLCAwLCAxICk7XG4gICAgICAgIHRoaXMucXVhdFNsZXJwLnNldCggMCwgMCwgMCwgMSApO1xuICAgICAgICB0aGlzLm9uVXBkYXRlQ2FsbGJhY2soKTtcblxuICAgIH0sXG5cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICggdGV4dHVyZSApIHtcblxuICAgICAgICB0aGlzLm1hdGVyaWFsLnVuaWZvcm1zLnJlc29sdXRpb24udmFsdWUgPSB0aGlzLmNvbnRhaW5lci5jbGllbnRXaWR0aCAvIHRoaXMuY29udGFpbmVyLmNsaWVudEhlaWdodDtcblxuICAgICAgICB0aGlzLnJlZ2lzdGVyTW91c2VFdmVudHMoKTtcbiAgICAgICAgdGhpcy5vblVwZGF0ZUNhbGxiYWNrKCk7XG5cdFx0XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAncGFub2xlbnMtdmlld2VyLWhhbmRsZXInLCBtZXRob2Q6ICdkaXNhYmxlQ29udHJvbCcgfSApO1xuXG4gICAgICAgIEltYWdlUGFub3JhbWEucHJvdG90eXBlLm9uTG9hZC5jYWxsKCB0aGlzLCB0ZXh0dXJlICk7XG5cdFx0XG4gICAgfSxcblxuICAgIG9uTGVhdmU6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICB0aGlzLnVucmVnaXN0ZXJNb3VzZUV2ZW50cygpO1xuXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAncGFub2xlbnMtdmlld2VyLWhhbmRsZXInLCBtZXRob2Q6ICdlbmFibGVDb250cm9sJywgZGF0YTogQ09OVFJPTFMuT1JCSVQgfSApO1xuXG4gICAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSggdGhpcy5mcmFtZUlkICk7XG5cbiAgICAgICAgSW1hZ2VQYW5vcmFtYS5wcm90b3R5cGUub25MZWF2ZS5jYWxsKCB0aGlzICk7XG5cdFx0XG4gICAgfSxcblxuICAgIG9uV2luZG93UmVzaXplOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgdGhpcy5tYXRlcmlhbC51bmlmb3Jtcy5yZXNvbHV0aW9uLnZhbHVlID0gdGhpcy5jb250YWluZXIuY2xpZW50V2lkdGggLyB0aGlzLmNvbnRhaW5lci5jbGllbnRIZWlnaHQ7XG5cbiAgICB9LFxuXG4gICAgb25Db250ZXh0TWVudTogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIHRoaXMuZHJhZ2dpbmcgPSBmYWxzZTtcblxuICAgIH0sXG5cbiAgICBkaXNwb3NlOiBmdW5jdGlvbiAoKSB7XHRcblxuICAgICAgICB0aGlzLnVucmVnaXN0ZXJNb3VzZUV2ZW50cygpO1xuXG4gICAgICAgIEltYWdlUGFub3JhbWEucHJvdG90eXBlLmRpc3Bvc2UuY2FsbCggdGhpcyApO1xuXG4gICAgfVxuXG59KTtcblxuZXhwb3J0IHsgTGl0dGxlUGxhbmV0IH07IiwiaW1wb3J0IHsgTGl0dGxlUGxhbmV0IH0gZnJvbSAnLi9MaXR0bGVQbGFuZXQnO1xuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xuXG4vKipcbiAqIEBjbGFzc2Rlc2MgSW1hZ2UgTGl0dGxlIFBsYW5ldFxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge3N0cmluZ30gc291cmNlIFx0XHQtIFVSTCBmb3IgdGhlIGltYWdlIHNvdXJjZVxuICogQHBhcmFtIHtudW1iZXJ9IFtzaXplPTEwMDAwXSAtIFNpemUgb2YgcGxhbmUgZ2VvbWV0cnlcbiAqIEBwYXJhbSB7bnVtYmVyfSBbcmF0aW89MC41XSAgLSBSYXRpbyBvZiBwbGFuZSBnZW9tZXRyeSdzIGhlaWdodCBhZ2FpbnN0IHdpZHRoXG4gKi9cbmZ1bmN0aW9uIEltYWdlTGl0dGxlUGxhbmV0ICggc291cmNlLCBzaXplLCByYXRpbyApIHtcblxuICAgIExpdHRsZVBsYW5ldC5jYWxsKCB0aGlzLCAnaW1hZ2UnLCBzb3VyY2UsIHNpemUsIHJhdGlvICk7XG5cbn1cblxuSW1hZ2VMaXR0bGVQbGFuZXQucHJvdG90eXBlID0gT2JqZWN0LmFzc2lnbiggT2JqZWN0LmNyZWF0ZSggTGl0dGxlUGxhbmV0LnByb3RvdHlwZSApLCB7XG5cbiAgICBjb25zdHJ1Y3RvcjogSW1hZ2VMaXR0bGVQbGFuZXQsXG5cbiAgICAvKipcbiAgICAgKiBPbiBsb2FkZWQgd2l0aCB0ZXh0dXJlXG4gICAgICogQHBhcmFtIHtUSFJFRS5UZXh0dXJlfSB0ZXh0dXJlXG4gICAgICogQG1lbWJlck9mIEltYWdlTGl0dGxlUGxhbmV0XG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoIHRleHR1cmUgKSB7XG5cbiAgICAgICAgdGhpcy51cGRhdGVUZXh0dXJlKCB0ZXh0dXJlICk7XG5cbiAgICAgICAgTGl0dGxlUGxhbmV0LnByb3RvdHlwZS5vbkxvYWQuY2FsbCggdGhpcywgdGV4dHVyZSApO1xuXG4gICAgfSxcbiAgICBcbiAgICAvKipcbiAgICAgKiBVcGRhdGUgdGV4dHVyZVxuICAgICAqIEBwYXJhbSB7VEhSRUUuVGV4dHVyZX0gdGV4dHVyZSBcbiAgICAgKiBAbWVtYmVyT2YgSW1hZ2VMaXR0bGVQbGFuZXRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICB1cGRhdGVUZXh0dXJlOiBmdW5jdGlvbiAoIHRleHR1cmUgKSB7XG5cbiAgICAgICAgdGV4dHVyZS5taW5GaWx0ZXIgPSB0ZXh0dXJlLm1hZ0ZpbHRlciA9IFRIUkVFLkxpbmVhckZpbHRlcjtcblx0XHRcbiAgICAgICAgdGhpcy5tYXRlcmlhbC51bmlmb3Jtc1sgJ3REaWZmdXNlJyBdLnZhbHVlID0gdGV4dHVyZTtcblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBEaXNwb3NlXG4gICAgICogQG1lbWJlck9mIEltYWdlTGl0dGxlUGxhbmV0XG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgZGlzcG9zZTogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGNvbnN0IHREaWZmdXNlID0gdGhpcy5tYXRlcmlhbC51bmlmb3Jtc1sgJ3REaWZmdXNlJyBdO1xuXG4gICAgICAgIGlmICggdERpZmZ1c2UgJiYgdERpZmZ1c2UudmFsdWUgKSB7XG5cbiAgICAgICAgICAgIHREaWZmdXNlLnZhbHVlLmRpc3Bvc2UoKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgTGl0dGxlUGxhbmV0LnByb3RvdHlwZS5kaXNwb3NlLmNhbGwoIHRoaXMgKTtcblxuICAgIH1cblxufSApO1xuXG5leHBvcnQgeyBJbWFnZUxpdHRsZVBsYW5ldCB9OyIsImltcG9ydCB7IFBhbm9yYW1hIH0gZnJvbSAnLi9QYW5vcmFtYSc7XG5pbXBvcnQgeyBNZWRpYSB9IGZyb20gJy4uL21lZGlhL01lZGlhJztcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcblxuLyoqXG4gKiBAY2xhc3NkZXNjIENhbWVyYSBwYW5vcmFtYVxuICogQGRlc2NyaXB0aW9uIFNlZSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL01lZGlhU3RyZWFtQ29uc3RyYWludHN8TWVkaWFTdHJlYW1Db25zdHJhaW50c30gZm9yIGNvbnN0cmFpbnRzXG4gKiBAcGFyYW0ge29iamVjdH0gLSBjYW1lcmEgY29uc3RyYWludHNcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBDYW1lcmFQYW5vcmFtYSAoIGNvbnN0cmFpbnRzICkge1xuXG4gICAgY29uc3QgcmFkaXVzID0gNTAwMDtcbiAgICBjb25zdCBnZW9tZXRyeSA9IG5ldyBUSFJFRS5TcGhlcmVCdWZmZXJHZW9tZXRyeSggcmFkaXVzLCA2MCwgNDAgKTtcbiAgICBjb25zdCBtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCggeyB2aXNpYmxlOiBmYWxzZSB9KTtcblxuICAgIFBhbm9yYW1hLmNhbGwoIHRoaXMsIGdlb21ldHJ5LCBtYXRlcmlhbCApO1xuXG4gICAgdGhpcy5tZWRpYSA9IG5ldyBNZWRpYSggY29uc3RyYWludHMgKTtcbiAgICB0aGlzLnJhZGl1cyA9IHJhZGl1cztcblxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lciggJ2VudGVyJywgdGhpcy5zdGFydC5iaW5kKCB0aGlzICkgKTtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoICdsZWF2ZScsIHRoaXMuc3RvcC5iaW5kKCB0aGlzICkgKTtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoICdwYW5vbGVucy1jb250YWluZXInLCB0aGlzLm9uUGFub2xlbnNDb250YWluZXIuYmluZCggdGhpcyApICk7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCAncGFub2xlbnMtc2NlbmUnLCB0aGlzLm9uUGFub2xlbnNTY2VuZS5iaW5kKCB0aGlzICkgKTtcblxufVxuXG5DYW1lcmFQYW5vcmFtYS5wcm90b3R5cGUgPSBPYmplY3QuYXNzaWduKCBPYmplY3QuY3JlYXRlKCBQYW5vcmFtYS5wcm90b3R5cGUgKSwge1xuXG4gICAgY29uc3RydWN0b3I6IENhbWVyYVBhbm9yYW1hLFxuXG4gICAgLyoqXG4gICAgICogT24gY29udGFpbmVyIGV2ZW50XG4gICAgICogQHBhcmFtIHtvYmplY3R9IGV2ZW50XG4gICAgICogQG1lbWJlck9mIENhbWVyYVBhbm9yYW1hXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgb25QYW5vbGVuc0NvbnRhaW5lcjogZnVuY3Rpb24gKCB7IGNvbnRhaW5lciB9ICkge1xuXG4gICAgICAgIHRoaXMubWVkaWEuc2V0Q29udGFpbmVyKCBjb250YWluZXIgKTtcblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBPbiBzY2VuZSBldmVudFxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBldmVudCBcbiAgICAgKiBAbWVtYmVyT2YgQ2FtZXJhUGFub3JhbWFcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBvblBhbm9sZW5zU2NlbmU6IGZ1bmN0aW9uICggeyBzY2VuZSB9ICkge1xuXG4gICAgICAgIHRoaXMubWVkaWEuc2V0U2NlbmUoIHNjZW5lICk7XG5cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU3RhcnQgY2FtZXJhIHN0cmVhbWluZ1xuICAgICAqIEBtZW1iZXJPZiBDYW1lcmFQYW5vcmFtYVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgICAqL1xuICAgIHN0YXJ0OiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMubWVkaWEuc3RhcnQoKTtcblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTdG9wIGNhbWVyYSBzdHJlYW1pbmdcbiAgICAgKiBAbWVtYmVyT2YgQ2FtZXJhUGFub3JhbWFcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBzdG9wOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgdGhpcy5tZWRpYS5zdG9wKCk7XG5cbiAgICB9LFxuXG59ICk7XG5cbmV4cG9ydCB7IENhbWVyYVBhbm9yYW1hIH07IiwiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xuXG4vKipcbiAqIEBjbGFzc2Rlc2MgT3JiaXQgQ29udHJvbHNcbiAqIEBjb25zdHJ1Y3RvclxuICogQGV4dGVybmFsIE9yYml0Q29udHJvbHNcbiAqIEBwYXJhbSB7VEhSRUUuT2JqZWN0fSBvYmplY3QgXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBkb21FbGVtZW50IFxuICovXG5mdW5jdGlvbiBPcmJpdENvbnRyb2xzICggb2JqZWN0LCBkb21FbGVtZW50ICkge1xuXG4gICAgdGhpcy5vYmplY3QgPSBvYmplY3Q7XG4gICAgdGhpcy5kb21FbGVtZW50ID0gKCBkb21FbGVtZW50ICE9PSB1bmRlZmluZWQgKSA/IGRvbUVsZW1lbnQgOiBkb2N1bWVudDtcbiAgICB0aGlzLmZyYW1lSWQgPSBudWxsO1xuXG4gICAgLy8gQVBJXG5cbiAgICAvLyBTZXQgdG8gZmFsc2UgdG8gZGlzYWJsZSB0aGlzIGNvbnRyb2xcbiAgICB0aGlzLmVuYWJsZWQgPSB0cnVlO1xuXG4gICAgLypcbiAgICAgKiBcInRhcmdldFwiIHNldHMgdGhlIGxvY2F0aW9uIG9mIGZvY3VzLCB3aGVyZSB0aGUgY29udHJvbCBvcmJpdHMgYXJvdW5kXG4gICAgICogYW5kIHdoZXJlIGl0IHBhbnMgd2l0aCByZXNwZWN0IHRvLlxuICAgICAqL1xuICAgIHRoaXMudGFyZ2V0ID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcblxuICAgIC8vIGNlbnRlciBpcyBvbGQsIGRlcHJlY2F0ZWQ7IHVzZSBcInRhcmdldFwiIGluc3RlYWRcbiAgICB0aGlzLmNlbnRlciA9IHRoaXMudGFyZ2V0O1xuXG4gICAgLypcbiAgICAgKiBUaGlzIG9wdGlvbiBhY3R1YWxseSBlbmFibGVzIGRvbGx5aW5nIGluIGFuZCBvdXQ7IGxlZnQgYXMgXCJ6b29tXCIgZm9yXG4gICAgICogYmFja3dhcmRzIGNvbXBhdGliaWxpdHlcbiAgICAgKi9cbiAgICB0aGlzLm5vWm9vbSA9IGZhbHNlO1xuICAgIHRoaXMuem9vbVNwZWVkID0gMS4wO1xuXG4gICAgLy8gTGltaXRzIHRvIGhvdyBmYXIgeW91IGNhbiBkb2xseSBpbiBhbmQgb3V0ICggUGVyc3BlY3RpdmVDYW1lcmEgb25seSApXG4gICAgdGhpcy5taW5EaXN0YW5jZSA9IDA7XG4gICAgdGhpcy5tYXhEaXN0YW5jZSA9IEluZmluaXR5O1xuXG4gICAgLy8gTGltaXRzIHRvIGhvdyBmYXIgeW91IGNhbiB6b29tIGluIGFuZCBvdXQgKCBPcnRob2dyYXBoaWNDYW1lcmEgb25seSApXG4gICAgdGhpcy5taW5ab29tID0gMDtcbiAgICB0aGlzLm1heFpvb20gPSBJbmZpbml0eTtcblxuICAgIC8vIFNldCB0byB0cnVlIHRvIGRpc2FibGUgdGhpcyBjb250cm9sXG4gICAgdGhpcy5ub1JvdGF0ZSA9IGZhbHNlO1xuICAgIHRoaXMucm90YXRlU3BlZWQgPSAtMC4xNTtcblxuICAgIC8vIFNldCB0byB0cnVlIHRvIGRpc2FibGUgdGhpcyBjb250cm9sXG4gICAgdGhpcy5ub1BhbiA9IHRydWU7XG4gICAgdGhpcy5rZXlQYW5TcGVlZCA9IDcuMDtcdC8vIHBpeGVscyBtb3ZlZCBwZXIgYXJyb3cga2V5IHB1c2hcblxuICAgIC8vIFNldCB0byB0cnVlIHRvIGF1dG9tYXRpY2FsbHkgcm90YXRlIGFyb3VuZCB0aGUgdGFyZ2V0XG4gICAgdGhpcy5hdXRvUm90YXRlID0gZmFsc2U7XG4gICAgdGhpcy5hdXRvUm90YXRlU3BlZWQgPSAyLjA7IC8vIDMwIHNlY29uZHMgcGVyIHJvdW5kIHdoZW4gZnBzIGlzIDYwXG5cbiAgICAvKlxuICAgICAqIEhvdyBmYXIgeW91IGNhbiBvcmJpdCB2ZXJ0aWNhbGx5LCB1cHBlciBhbmQgbG93ZXIgbGltaXRzLlxuICAgICAqIFJhbmdlIGlzIDAgdG8gTWF0aC5QSSByYWRpYW5zLlxuICAgICAqL1xuICAgIHRoaXMubWluUG9sYXJBbmdsZSA9IDA7IC8vIHJhZGlhbnNcbiAgICB0aGlzLm1heFBvbGFyQW5nbGUgPSBNYXRoLlBJOyAvLyByYWRpYW5zXG5cbiAgICAvLyBNb21lbnR1bVxuICBcdHRoaXMubW9tZW50dW1EYW1waW5nRmFjdG9yID0gMC45MDtcbiAgXHR0aGlzLm1vbWVudHVtU2NhbGluZ0ZhY3RvciA9IC0wLjAwNTtcbiAgXHR0aGlzLm1vbWVudHVtS2V5ZG93bkZhY3RvciA9IDIwO1xuXG4gIFx0Ly8gRm92XG4gIFx0dGhpcy5taW5Gb3YgPSAzMDtcbiAgXHR0aGlzLm1heEZvdiA9IDEyMDtcblxuICAgIC8qXG4gICAgICogSG93IGZhciB5b3UgY2FuIG9yYml0IGhvcml6b250YWxseSwgdXBwZXIgYW5kIGxvd2VyIGxpbWl0cy5cbiAgICAgKiBJZiBzZXQsIG11c3QgYmUgYSBzdWItaW50ZXJ2YWwgb2YgdGhlIGludGVydmFsIFsgLSBNYXRoLlBJLCBNYXRoLlBJIF0uXG4gICAgICovXG4gICAgdGhpcy5taW5BemltdXRoQW5nbGUgPSAtIEluZmluaXR5OyAvLyByYWRpYW5zXG4gICAgdGhpcy5tYXhBemltdXRoQW5nbGUgPSBJbmZpbml0eTsgLy8gcmFkaWFuc1xuXG4gICAgLy8gU2V0IHRvIHRydWUgdG8gZGlzYWJsZSB1c2Ugb2YgdGhlIGtleXNcbiAgICB0aGlzLm5vS2V5cyA9IGZhbHNlO1xuXG4gICAgLy8gVGhlIGZvdXIgYXJyb3cga2V5c1xuICAgIHRoaXMua2V5cyA9IHsgTEVGVDogMzcsIFVQOiAzOCwgUklHSFQ6IDM5LCBCT1RUT006IDQwIH07XG5cbiAgICAvLyBNb3VzZSBidXR0b25zXG4gICAgdGhpcy5tb3VzZUJ1dHRvbnMgPSB7IE9SQklUOiBUSFJFRS5NT1VTRS5MRUZULCBaT09NOiBUSFJFRS5NT1VTRS5NSURETEUsIFBBTjogVEhSRUUuTU9VU0UuUklHSFQgfTtcblxuICAgIC8qXG4gICAgICogLy8vLy8vLy8vL1xuICAgICAqIGludGVybmFsc1xuICAgICAqL1xuXG4gICAgdmFyIHNjb3BlID0gdGhpcztcblxuICAgIHZhciBFUFMgPSAxMGUtODtcbiAgICB2YXIgTUVQUyA9IDEwZS01O1xuXG4gICAgdmFyIHJvdGF0ZVN0YXJ0ID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcbiAgICB2YXIgcm90YXRlRW5kID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcbiAgICB2YXIgcm90YXRlRGVsdGEgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuXG4gICAgdmFyIHBhblN0YXJ0ID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcbiAgICB2YXIgcGFuRW5kID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcbiAgICB2YXIgcGFuRGVsdGEgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuICAgIHZhciBwYW5PZmZzZXQgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuXG4gICAgdmFyIG9mZnNldCA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5cbiAgICB2YXIgZG9sbHlTdGFydCA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG4gICAgdmFyIGRvbGx5RW5kID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcbiAgICB2YXIgZG9sbHlEZWx0YSA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG5cbiAgICB2YXIgdGhldGEgPSAwO1xuICAgIHZhciBwaGkgPSAwO1xuICAgIHZhciBwaGlEZWx0YSA9IDA7XG4gICAgdmFyIHRoZXRhRGVsdGEgPSAwO1xuICAgIHZhciBzY2FsZSA9IDE7XG4gICAgdmFyIHBhbiA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5cbiAgICB2YXIgbGFzdFBvc2l0aW9uID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcbiAgICB2YXIgbGFzdFF1YXRlcm5pb24gPSBuZXcgVEhSRUUuUXVhdGVybmlvbigpO1xuXG4gICAgdmFyIG1vbWVudHVtTGVmdCA9IDAsIG1vbWVudHVtVXAgPSAwO1xuICAgIHZhciBldmVudFByZXZpb3VzO1xuICAgIHZhciBtb21lbnR1bU9uID0gZmFsc2U7XG5cbiAgICB2YXIga2V5VXAsIGtleUJvdHRvbSwga2V5TGVmdCwga2V5UmlnaHQ7XG5cbiAgICB2YXIgU1RBVEUgPSB7IE5PTkU6IC0xLCBST1RBVEU6IDAsIERPTExZOiAxLCBQQU46IDIsIFRPVUNIX1JPVEFURTogMywgVE9VQ0hfRE9MTFk6IDQsIFRPVUNIX1BBTjogNSB9O1xuXG4gICAgdmFyIHN0YXRlID0gU1RBVEUuTk9ORTtcblxuICAgIC8vIGZvciByZXNldFxuXG4gICAgdGhpcy50YXJnZXQwID0gdGhpcy50YXJnZXQuY2xvbmUoKTtcbiAgICB0aGlzLnBvc2l0aW9uMCA9IHRoaXMub2JqZWN0LnBvc2l0aW9uLmNsb25lKCk7XG4gICAgdGhpcy56b29tMCA9IHRoaXMub2JqZWN0Lnpvb207XG5cbiAgICAvLyBzbyBjYW1lcmEudXAgaXMgdGhlIG9yYml0IGF4aXNcblxuICAgIHZhciBxdWF0ID0gbmV3IFRIUkVFLlF1YXRlcm5pb24oKS5zZXRGcm9tVW5pdFZlY3RvcnMoIG9iamVjdC51cCwgbmV3IFRIUkVFLlZlY3RvcjMoIDAsIDEsIDAgKSApO1xuICAgIHZhciBxdWF0SW52ZXJzZSA9IHF1YXQuY2xvbmUoKS5pbnZlcnNlKCk7XG5cbiAgICAvLyBldmVudHNcblxuICAgIHZhciBjaGFuZ2VFdmVudCA9IHsgdHlwZTogJ2NoYW5nZScgfTtcbiAgICB2YXIgc3RhcnRFdmVudCA9IHsgdHlwZTogJ3N0YXJ0JyB9O1xuICAgIHZhciBlbmRFdmVudCA9IHsgdHlwZTogJ2VuZCcgfTtcblxuICAgIHRoaXMuc2V0TGFzdFF1YXRlcm5pb24gPSBmdW5jdGlvbiAoIHF1YXRlcm5pb24gKSB7XG4gICAgICAgIGxhc3RRdWF0ZXJuaW9uLmNvcHkoIHF1YXRlcm5pb24gKTtcbiAgICAgICAgc2NvcGUub2JqZWN0LnF1YXRlcm5pb24uY29weSggcXVhdGVybmlvbiApO1xuICAgIH07XG5cbiAgICB0aGlzLmdldExhc3RQb3NpdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGxhc3RQb3NpdGlvbjtcbiAgICB9O1xuXG4gICAgdGhpcy5yb3RhdGVMZWZ0ID0gZnVuY3Rpb24gKCBhbmdsZSApIHtcblxuICAgICAgICBpZiAoIGFuZ2xlID09PSB1bmRlZmluZWQgKSB7XG5cbiAgICAgICAgICAgIGFuZ2xlID0gZ2V0QXV0b1JvdGF0aW9uQW5nbGUoKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgdGhldGFEZWx0YSAtPSBhbmdsZTtcblxuXG4gICAgfTtcblxuICAgIHRoaXMucm90YXRlVXAgPSBmdW5jdGlvbiAoIGFuZ2xlICkge1xuXG4gICAgICAgIGlmICggYW5nbGUgPT09IHVuZGVmaW5lZCApIHtcblxuICAgICAgICAgICAgYW5nbGUgPSBnZXRBdXRvUm90YXRpb25BbmdsZSgpO1xuXG4gICAgICAgIH1cblxuICAgICAgICBwaGlEZWx0YSAtPSBhbmdsZTtcblxuICAgIH07XG5cbiAgICAvLyBwYXNzIGluIGRpc3RhbmNlIGluIHdvcmxkIHNwYWNlIHRvIG1vdmUgbGVmdFxuICAgIHRoaXMucGFuTGVmdCA9IGZ1bmN0aW9uICggZGlzdGFuY2UgKSB7XG5cbiAgICAgICAgdmFyIHRlID0gdGhpcy5vYmplY3QubWF0cml4LmVsZW1lbnRzO1xuXG4gICAgICAgIC8vIGdldCBYIGNvbHVtbiBvZiBtYXRyaXhcbiAgICAgICAgcGFuT2Zmc2V0LnNldCggdGVbIDAgXSwgdGVbIDEgXSwgdGVbIDIgXSApO1xuICAgICAgICBwYW5PZmZzZXQubXVsdGlwbHlTY2FsYXIoIC0gZGlzdGFuY2UgKTtcblxuICAgICAgICBwYW4uYWRkKCBwYW5PZmZzZXQgKTtcblxuICAgIH07XG5cbiAgICAvLyBwYXNzIGluIGRpc3RhbmNlIGluIHdvcmxkIHNwYWNlIHRvIG1vdmUgdXBcbiAgICB0aGlzLnBhblVwID0gZnVuY3Rpb24gKCBkaXN0YW5jZSApIHtcblxuICAgICAgICB2YXIgdGUgPSB0aGlzLm9iamVjdC5tYXRyaXguZWxlbWVudHM7XG5cbiAgICAgICAgLy8gZ2V0IFkgY29sdW1uIG9mIG1hdHJpeFxuICAgICAgICBwYW5PZmZzZXQuc2V0KCB0ZVsgNCBdLCB0ZVsgNSBdLCB0ZVsgNiBdICk7XG4gICAgICAgIHBhbk9mZnNldC5tdWx0aXBseVNjYWxhciggZGlzdGFuY2UgKTtcblxuICAgICAgICBwYW4uYWRkKCBwYW5PZmZzZXQgKTtcblxuICAgIH07XG5cbiAgICAvKlxuICAgICAqIHBhc3MgaW4geCx5IG9mIGNoYW5nZSBkZXNpcmVkIGluIHBpeGVsIHNwYWNlLFxuICAgICAqIHJpZ2h0IGFuZCBkb3duIGFyZSBwb3NpdGl2ZVxuICAgICAqL1xuICAgIHRoaXMucGFuID0gZnVuY3Rpb24gKCBkZWx0YVgsIGRlbHRhWSApIHtcblxuICAgICAgICB2YXIgZWxlbWVudCA9IHNjb3BlLmRvbUVsZW1lbnQgPT09IGRvY3VtZW50ID8gc2NvcGUuZG9tRWxlbWVudC5ib2R5IDogc2NvcGUuZG9tRWxlbWVudDtcblxuICAgICAgICBpZiAoIHNjb3BlLm9iamVjdCBpbnN0YW5jZW9mIFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhICkge1xuXG4gICAgICAgICAgICAvLyBwZXJzcGVjdGl2ZVxuICAgICAgICAgICAgdmFyIHBvc2l0aW9uID0gc2NvcGUub2JqZWN0LnBvc2l0aW9uO1xuICAgICAgICAgICAgdmFyIG9mZnNldCA9IHBvc2l0aW9uLmNsb25lKCkuc3ViKCBzY29wZS50YXJnZXQgKTtcbiAgICAgICAgICAgIHZhciB0YXJnZXREaXN0YW5jZSA9IG9mZnNldC5sZW5ndGgoKTtcblxuICAgICAgICAgICAgLy8gaGFsZiBvZiB0aGUgZm92IGlzIGNlbnRlciB0byB0b3Agb2Ygc2NyZWVuXG4gICAgICAgICAgICB0YXJnZXREaXN0YW5jZSAqPSBNYXRoLnRhbiggKCBzY29wZS5vYmplY3QuZm92IC8gMiApICogTWF0aC5QSSAvIDE4MC4wICk7XG5cbiAgICAgICAgICAgIC8vIHdlIGFjdHVhbGx5IGRvbid0IHVzZSBzY3JlZW5XaWR0aCwgc2luY2UgcGVyc3BlY3RpdmUgY2FtZXJhIGlzIGZpeGVkIHRvIHNjcmVlbiBoZWlnaHRcbiAgICAgICAgICAgIHNjb3BlLnBhbkxlZnQoIDIgKiBkZWx0YVggKiB0YXJnZXREaXN0YW5jZSAvIGVsZW1lbnQuY2xpZW50SGVpZ2h0ICk7XG4gICAgICAgICAgICBzY29wZS5wYW5VcCggMiAqIGRlbHRhWSAqIHRhcmdldERpc3RhbmNlIC8gZWxlbWVudC5jbGllbnRIZWlnaHQgKTtcblxuICAgICAgICB9IGVsc2UgaWYgKCBzY29wZS5vYmplY3QgaW5zdGFuY2VvZiBUSFJFRS5PcnRob2dyYXBoaWNDYW1lcmEgKSB7XG5cbiAgICAgICAgICAgIC8vIG9ydGhvZ3JhcGhpY1xuICAgICAgICAgICAgc2NvcGUucGFuTGVmdCggZGVsdGFYICogKHNjb3BlLm9iamVjdC5yaWdodCAtIHNjb3BlLm9iamVjdC5sZWZ0KSAvIGVsZW1lbnQuY2xpZW50V2lkdGggKTtcbiAgICAgICAgICAgIHNjb3BlLnBhblVwKCBkZWx0YVkgKiAoc2NvcGUub2JqZWN0LnRvcCAtIHNjb3BlLm9iamVjdC5ib3R0b20pIC8gZWxlbWVudC5jbGllbnRIZWlnaHQgKTtcblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAvLyBjYW1lcmEgbmVpdGhlciBvcnRob2dyYXBoaWMgb3IgcGVyc3BlY3RpdmVcbiAgICAgICAgICAgIGNvbnNvbGUud2FybiggJ1dBUk5JTkc6IE9yYml0Q29udHJvbHMuanMgZW5jb3VudGVyZWQgYW4gdW5rbm93biBjYW1lcmEgdHlwZSAtIHBhbiBkaXNhYmxlZC4nICk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIHRoaXMubW9tZW50dW0gPSBmdW5jdGlvbigpe1xuXHRcdFxuICAgICAgICBpZiAoICFtb21lbnR1bU9uICkgcmV0dXJuO1xuXG4gICAgICAgIGlmICggTWF0aC5hYnMoIG1vbWVudHVtTGVmdCApIDwgTUVQUyAmJiBNYXRoLmFicyggbW9tZW50dW1VcCApIDwgTUVQUyApIHsgXG5cbiAgICAgICAgICAgIG1vbWVudHVtT24gPSBmYWxzZTsgXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBtb21lbnR1bVVwICAgKj0gdGhpcy5tb21lbnR1bURhbXBpbmdGYWN0b3I7XG4gICAgICAgIG1vbWVudHVtTGVmdCAqPSB0aGlzLm1vbWVudHVtRGFtcGluZ0ZhY3RvcjtcblxuICAgICAgICB0aGV0YURlbHRhIC09IHRoaXMubW9tZW50dW1TY2FsaW5nRmFjdG9yICogbW9tZW50dW1MZWZ0O1xuICAgICAgICBwaGlEZWx0YSAgIC09IHRoaXMubW9tZW50dW1TY2FsaW5nRmFjdG9yICogbW9tZW50dW1VcDtcblxuICAgIH07XG5cbiAgICB0aGlzLmRvbGx5SW4gPSBmdW5jdGlvbiAoIGRvbGx5U2NhbGUgKSB7XG5cbiAgICAgICAgaWYgKCBkb2xseVNjYWxlID09PSB1bmRlZmluZWQgKSB7XG5cbiAgICAgICAgICAgIGRvbGx5U2NhbGUgPSBnZXRab29tU2NhbGUoKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCBzY29wZS5vYmplY3QgaW5zdGFuY2VvZiBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSApIHtcblxuICAgICAgICAgICAgc2NhbGUgLz0gZG9sbHlTY2FsZTtcblxuICAgICAgICB9IGVsc2UgaWYgKCBzY29wZS5vYmplY3QgaW5zdGFuY2VvZiBUSFJFRS5PcnRob2dyYXBoaWNDYW1lcmEgKSB7XG5cbiAgICAgICAgICAgIHNjb3BlLm9iamVjdC56b29tID0gTWF0aC5tYXgoIHRoaXMubWluWm9vbSwgTWF0aC5taW4oIHRoaXMubWF4Wm9vbSwgdGhpcy5vYmplY3Quem9vbSAqIGRvbGx5U2NhbGUgKSApO1xuICAgICAgICAgICAgc2NvcGUub2JqZWN0LnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcbiAgICAgICAgICAgIHNjb3BlLmRpc3BhdGNoRXZlbnQoIGNoYW5nZUV2ZW50ICk7XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgY29uc29sZS53YXJuKCAnV0FSTklORzogT3JiaXRDb250cm9scy5qcyBlbmNvdW50ZXJlZCBhbiB1bmtub3duIGNhbWVyYSB0eXBlIC0gZG9sbHkvem9vbSBkaXNhYmxlZC4nICk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIHRoaXMuZG9sbHlPdXQgPSBmdW5jdGlvbiAoIGRvbGx5U2NhbGUgKSB7XG5cbiAgICAgICAgaWYgKCBkb2xseVNjYWxlID09PSB1bmRlZmluZWQgKSB7XG5cbiAgICAgICAgICAgIGRvbGx5U2NhbGUgPSBnZXRab29tU2NhbGUoKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCBzY29wZS5vYmplY3QgaW5zdGFuY2VvZiBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSApIHtcblxuICAgICAgICAgICAgc2NhbGUgKj0gZG9sbHlTY2FsZTtcblxuICAgICAgICB9IGVsc2UgaWYgKCBzY29wZS5vYmplY3QgaW5zdGFuY2VvZiBUSFJFRS5PcnRob2dyYXBoaWNDYW1lcmEgKSB7XG5cbiAgICAgICAgICAgIHNjb3BlLm9iamVjdC56b29tID0gTWF0aC5tYXgoIHRoaXMubWluWm9vbSwgTWF0aC5taW4oIHRoaXMubWF4Wm9vbSwgdGhpcy5vYmplY3Quem9vbSAvIGRvbGx5U2NhbGUgKSApO1xuICAgICAgICAgICAgc2NvcGUub2JqZWN0LnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcbiAgICAgICAgICAgIHNjb3BlLmRpc3BhdGNoRXZlbnQoIGNoYW5nZUV2ZW50ICk7XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgY29uc29sZS53YXJuKCAnV0FSTklORzogT3JiaXRDb250cm9scy5qcyBlbmNvdW50ZXJlZCBhbiB1bmtub3duIGNhbWVyYSB0eXBlIC0gZG9sbHkvem9vbSBkaXNhYmxlZC4nICk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIHRoaXMudXBkYXRlID0gZnVuY3Rpb24gKCBpZ25vcmVVcGRhdGUgKSB7XG5cbiAgICAgICAgdmFyIHBvc2l0aW9uID0gdGhpcy5vYmplY3QucG9zaXRpb247XG5cbiAgICAgICAgb2Zmc2V0LmNvcHkoIHBvc2l0aW9uICkuc3ViKCB0aGlzLnRhcmdldCApO1xuXG4gICAgICAgIC8vIHJvdGF0ZSBvZmZzZXQgdG8gXCJ5LWF4aXMtaXMtdXBcIiBzcGFjZVxuICAgICAgICBvZmZzZXQuYXBwbHlRdWF0ZXJuaW9uKCBxdWF0ICk7XG5cbiAgICAgICAgLy8gYW5nbGUgZnJvbSB6LWF4aXMgYXJvdW5kIHktYXhpc1xuXG4gICAgICAgIHRoZXRhID0gTWF0aC5hdGFuMiggb2Zmc2V0LngsIG9mZnNldC56ICk7XG5cbiAgICAgICAgLy8gYW5nbGUgZnJvbSB5LWF4aXNcblxuICAgICAgICBwaGkgPSBNYXRoLmF0YW4yKCBNYXRoLnNxcnQoIG9mZnNldC54ICogb2Zmc2V0LnggKyBvZmZzZXQueiAqIG9mZnNldC56ICksIG9mZnNldC55ICk7XG5cbiAgICAgICAgaWYgKCB0aGlzLmF1dG9Sb3RhdGUgJiYgc3RhdGUgPT09IFNUQVRFLk5PTkUgKSB7XG5cbiAgICAgICAgICAgIHRoaXMucm90YXRlTGVmdCggZ2V0QXV0b1JvdGF0aW9uQW5nbGUoKSApO1xuXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm1vbWVudHVtKCk7XG5cbiAgICAgICAgdGhldGEgKz0gdGhldGFEZWx0YTtcbiAgICAgICAgcGhpICs9IHBoaURlbHRhO1xuXG4gICAgICAgIC8vIHJlc3RyaWN0IHRoZXRhIHRvIGJlIGJldHdlZW4gZGVzaXJlZCBsaW1pdHNcbiAgICAgICAgdGhldGEgPSBNYXRoLm1heCggdGhpcy5taW5BemltdXRoQW5nbGUsIE1hdGgubWluKCB0aGlzLm1heEF6aW11dGhBbmdsZSwgdGhldGEgKSApO1xuXG4gICAgICAgIC8vIHJlc3RyaWN0IHBoaSB0byBiZSBiZXR3ZWVuIGRlc2lyZWQgbGltaXRzXG4gICAgICAgIHBoaSA9IE1hdGgubWF4KCB0aGlzLm1pblBvbGFyQW5nbGUsIE1hdGgubWluKCB0aGlzLm1heFBvbGFyQW5nbGUsIHBoaSApICk7XG5cbiAgICAgICAgLy8gcmVzdHJpY3QgcGhpIHRvIGJlIGJldHdlZSBFUFMgYW5kIFBJLUVQU1xuICAgICAgICBwaGkgPSBNYXRoLm1heCggRVBTLCBNYXRoLm1pbiggTWF0aC5QSSAtIEVQUywgcGhpICkgKTtcblxuICAgICAgICB2YXIgcmFkaXVzID0gb2Zmc2V0Lmxlbmd0aCgpICogc2NhbGU7XG5cbiAgICAgICAgLy8gcmVzdHJpY3QgcmFkaXVzIHRvIGJlIGJldHdlZW4gZGVzaXJlZCBsaW1pdHNcbiAgICAgICAgcmFkaXVzID0gTWF0aC5tYXgoIHRoaXMubWluRGlzdGFuY2UsIE1hdGgubWluKCB0aGlzLm1heERpc3RhbmNlLCByYWRpdXMgKSApO1xuXG4gICAgICAgIC8vIG1vdmUgdGFyZ2V0IHRvIHBhbm5lZCBsb2NhdGlvblxuICAgICAgICB0aGlzLnRhcmdldC5hZGQoIHBhbiApO1xuXG4gICAgICAgIG9mZnNldC54ID0gcmFkaXVzICogTWF0aC5zaW4oIHBoaSApICogTWF0aC5zaW4oIHRoZXRhICk7XG4gICAgICAgIG9mZnNldC55ID0gcmFkaXVzICogTWF0aC5jb3MoIHBoaSApO1xuICAgICAgICBvZmZzZXQueiA9IHJhZGl1cyAqIE1hdGguc2luKCBwaGkgKSAqIE1hdGguY29zKCB0aGV0YSApO1xuXG4gICAgICAgIC8vIHJvdGF0ZSBvZmZzZXQgYmFjayB0byBcImNhbWVyYS11cC12ZWN0b3ItaXMtdXBcIiBzcGFjZVxuICAgICAgICBvZmZzZXQuYXBwbHlRdWF0ZXJuaW9uKCBxdWF0SW52ZXJzZSApO1xuXG4gICAgICAgIHBvc2l0aW9uLmNvcHkoIHRoaXMudGFyZ2V0ICkuYWRkKCBvZmZzZXQgKTtcblxuICAgICAgICB0aGlzLm9iamVjdC5sb29rQXQoIHRoaXMudGFyZ2V0ICk7XG5cbiAgICAgICAgdGhldGFEZWx0YSA9IDA7XG4gICAgICAgIHBoaURlbHRhID0gMDtcbiAgICAgICAgc2NhbGUgPSAxO1xuICAgICAgICBwYW4uc2V0KCAwLCAwLCAwICk7XG5cbiAgICAgICAgLypcbiAgICAgICAgICogdXBkYXRlIGNvbmRpdGlvbiBpczpcbiAgICAgICAgICogbWluKGNhbWVyYSBkaXNwbGFjZW1lbnQsIGNhbWVyYSByb3RhdGlvbiBpbiByYWRpYW5zKV4yID4gRVBTXG4gICAgICAgICAqIHVzaW5nIHNtYWxsLWFuZ2xlIGFwcHJveGltYXRpb24gY29zKHgvMikgPSAxIC0geF4yIC8gOFxuICAgICAgICAgKi9cbiAgICAgICAgaWYgKCBsYXN0UG9zaXRpb24uZGlzdGFuY2VUb1NxdWFyZWQoIHRoaXMub2JqZWN0LnBvc2l0aW9uICkgPiBFUFNcblx0XHQgICAgfHwgOCAqICgxIC0gbGFzdFF1YXRlcm5pb24uZG90KHRoaXMub2JqZWN0LnF1YXRlcm5pb24pKSA+IEVQUyApIHtcblxuICAgICAgICAgICAgaWYgKCBpZ25vcmVVcGRhdGUgIT09IHRydWUgKSB7IHRoaXMuZGlzcGF0Y2hFdmVudCggY2hhbmdlRXZlbnQgKTsgfVxuXG4gICAgICAgICAgICBsYXN0UG9zaXRpb24uY29weSggdGhpcy5vYmplY3QucG9zaXRpb24gKTtcbiAgICAgICAgICAgIGxhc3RRdWF0ZXJuaW9uLmNvcHkgKHRoaXMub2JqZWN0LnF1YXRlcm5pb24gKTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG5cbiAgICB0aGlzLnJlc2V0ID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIHN0YXRlID0gU1RBVEUuTk9ORTtcblxuICAgICAgICB0aGlzLnRhcmdldC5jb3B5KCB0aGlzLnRhcmdldDAgKTtcbiAgICAgICAgdGhpcy5vYmplY3QucG9zaXRpb24uY29weSggdGhpcy5wb3NpdGlvbjAgKTtcbiAgICAgICAgdGhpcy5vYmplY3Quem9vbSA9IHRoaXMuem9vbTA7XG5cbiAgICAgICAgdGhpcy5vYmplY3QudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoIGNoYW5nZUV2ZW50ICk7XG5cbiAgICAgICAgdGhpcy51cGRhdGUoKTtcblxuICAgIH07XG5cbiAgICB0aGlzLmdldFBvbGFyQW5nbGUgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgcmV0dXJuIHBoaTtcblxuICAgIH07XG5cbiAgICB0aGlzLmdldEF6aW11dGhhbEFuZ2xlID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIHJldHVybiB0aGV0YTtcblxuICAgIH07XG5cbiAgICBmdW5jdGlvbiBnZXRBdXRvUm90YXRpb25BbmdsZSgpIHtcblxuICAgICAgICByZXR1cm4gMiAqIE1hdGguUEkgLyA2MCAvIDYwICogc2NvcGUuYXV0b1JvdGF0ZVNwZWVkO1xuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0Wm9vbVNjYWxlKCkge1xuXG4gICAgICAgIHJldHVybiBNYXRoLnBvdyggMC45NSwgc2NvcGUuem9vbVNwZWVkICk7XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbk1vdXNlRG93biggZXZlbnQgKSB7XG5cbiAgICAgICAgbW9tZW50dW1PbiA9IGZhbHNlO1xuXG4gICBcdFx0bW9tZW50dW1MZWZ0ID0gbW9tZW50dW1VcCA9IDA7XG5cbiAgICAgICAgaWYgKCBzY29wZS5lbmFibGVkID09PSBmYWxzZSApIHJldHVybjtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBpZiAoIGV2ZW50LmJ1dHRvbiA9PT0gc2NvcGUubW91c2VCdXR0b25zLk9SQklUICkge1xuICAgICAgICAgICAgaWYgKCBzY29wZS5ub1JvdGF0ZSA9PT0gdHJ1ZSApIHJldHVybjtcblxuICAgICAgICAgICAgc3RhdGUgPSBTVEFURS5ST1RBVEU7XG5cbiAgICAgICAgICAgIHJvdGF0ZVN0YXJ0LnNldCggZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSApO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoIGV2ZW50LmJ1dHRvbiA9PT0gc2NvcGUubW91c2VCdXR0b25zLlpPT00gKSB7XG4gICAgICAgICAgICBpZiAoIHNjb3BlLm5vWm9vbSA9PT0gdHJ1ZSApIHJldHVybjtcblxuICAgICAgICAgICAgc3RhdGUgPSBTVEFURS5ET0xMWTtcblxuICAgICAgICAgICAgZG9sbHlTdGFydC5zZXQoIGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkgKTtcblxuICAgICAgICB9IGVsc2UgaWYgKCBldmVudC5idXR0b24gPT09IHNjb3BlLm1vdXNlQnV0dG9ucy5QQU4gKSB7XG4gICAgICAgICAgICBpZiAoIHNjb3BlLm5vUGFuID09PSB0cnVlICkgcmV0dXJuO1xuXG4gICAgICAgICAgICBzdGF0ZSA9IFNUQVRFLlBBTjtcblxuICAgICAgICAgICAgcGFuU3RhcnQuc2V0KCBldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZICk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggc3RhdGUgIT09IFNUQVRFLk5PTkUgKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCAnbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUsIGZhbHNlICk7XG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCAnbW91c2V1cCcsIG9uTW91c2VVcCwgZmFsc2UgKTtcbiAgICAgICAgICAgIHNjb3BlLmRpc3BhdGNoRXZlbnQoIHN0YXJ0RXZlbnQgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNjb3BlLnVwZGF0ZSgpO1xuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25Nb3VzZU1vdmUoIGV2ZW50ICkge1xuXG4gICAgICAgIGlmICggc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UgKSByZXR1cm47XG5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICB2YXIgZWxlbWVudCA9IHNjb3BlLmRvbUVsZW1lbnQgPT09IGRvY3VtZW50ID8gc2NvcGUuZG9tRWxlbWVudC5ib2R5IDogc2NvcGUuZG9tRWxlbWVudDtcblxuICAgICAgICBpZiAoIHN0YXRlID09PSBTVEFURS5ST1RBVEUgKSB7XG5cbiAgICAgICAgICAgIGlmICggc2NvcGUubm9Sb3RhdGUgPT09IHRydWUgKSByZXR1cm47XG5cbiAgICAgICAgICAgIHJvdGF0ZUVuZC5zZXQoIGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkgKTtcbiAgICAgICAgICAgIHJvdGF0ZURlbHRhLnN1YlZlY3RvcnMoIHJvdGF0ZUVuZCwgcm90YXRlU3RhcnQgKTtcblxuICAgICAgICAgICAgLy8gcm90YXRpbmcgYWNyb3NzIHdob2xlIHNjcmVlbiBnb2VzIDM2MCBkZWdyZWVzIGFyb3VuZFxuICAgICAgICAgICAgc2NvcGUucm90YXRlTGVmdCggMiAqIE1hdGguUEkgKiByb3RhdGVEZWx0YS54IC8gZWxlbWVudC5jbGllbnRXaWR0aCAqIHNjb3BlLnJvdGF0ZVNwZWVkICk7XG5cbiAgICAgICAgICAgIC8vIHJvdGF0aW5nIHVwIGFuZCBkb3duIGFsb25nIHdob2xlIHNjcmVlbiBhdHRlbXB0cyB0byBnbyAzNjAsIGJ1dCBsaW1pdGVkIHRvIDE4MFxuICAgICAgICAgICAgc2NvcGUucm90YXRlVXAoIDIgKiBNYXRoLlBJICogcm90YXRlRGVsdGEueSAvIGVsZW1lbnQuY2xpZW50SGVpZ2h0ICogc2NvcGUucm90YXRlU3BlZWQgKTtcblxuICAgICAgICAgICAgcm90YXRlU3RhcnQuY29weSggcm90YXRlRW5kICk7XG5cbiAgICAgICAgICAgIGlmKCBldmVudFByZXZpb3VzICl7XG4gICAgICAgICAgICAgICAgbW9tZW50dW1MZWZ0ID0gZXZlbnQuY2xpZW50WCAtIGV2ZW50UHJldmlvdXMuY2xpZW50WDtcbiAgICAgICAgICAgICAgICBtb21lbnR1bVVwID0gZXZlbnQuY2xpZW50WSAtIGV2ZW50UHJldmlvdXMuY2xpZW50WTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZXZlbnRQcmV2aW91cyA9IGV2ZW50O1xuXG4gICAgICAgIH0gZWxzZSBpZiAoIHN0YXRlID09PSBTVEFURS5ET0xMWSApIHtcblxuICAgICAgICAgICAgaWYgKCBzY29wZS5ub1pvb20gPT09IHRydWUgKSByZXR1cm47XG5cbiAgICAgICAgICAgIGRvbGx5RW5kLnNldCggZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSApO1xuICAgICAgICAgICAgZG9sbHlEZWx0YS5zdWJWZWN0b3JzKCBkb2xseUVuZCwgZG9sbHlTdGFydCApO1xuXG4gICAgICAgICAgICBpZiAoIGRvbGx5RGVsdGEueSA+IDAgKSB7XG5cbiAgICAgICAgICAgICAgICBzY29wZS5kb2xseUluKCk7XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIGRvbGx5RGVsdGEueSA8IDAgKSB7XG5cbiAgICAgICAgICAgICAgICBzY29wZS5kb2xseU91dCgpO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRvbGx5U3RhcnQuY29weSggZG9sbHlFbmQgKTtcblxuICAgICAgICB9IGVsc2UgaWYgKCBzdGF0ZSA9PT0gU1RBVEUuUEFOICkge1xuXG4gICAgICAgICAgICBpZiAoIHNjb3BlLm5vUGFuID09PSB0cnVlICkgcmV0dXJuO1xuXG4gICAgICAgICAgICBwYW5FbmQuc2V0KCBldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZICk7XG4gICAgICAgICAgICBwYW5EZWx0YS5zdWJWZWN0b3JzKCBwYW5FbmQsIHBhblN0YXJ0ICk7XG5cbiAgICAgICAgICAgIHNjb3BlLnBhbiggcGFuRGVsdGEueCwgcGFuRGVsdGEueSApO1xuXG4gICAgICAgICAgICBwYW5TdGFydC5jb3B5KCBwYW5FbmQgKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCBzdGF0ZSAhPT0gU1RBVEUuTk9ORSApIHNjb3BlLnVwZGF0ZSgpO1xuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25Nb3VzZVVwKCAvKiBldmVudCAqLyApIHtcblxuICAgICAgICBtb21lbnR1bU9uID0gdHJ1ZTtcblxuICAgICAgICBldmVudFByZXZpb3VzID0gdW5kZWZpbmVkO1xuXG4gICAgICAgIGlmICggc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UgKSByZXR1cm47XG5cbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlLCBmYWxzZSApO1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAnbW91c2V1cCcsIG9uTW91c2VVcCwgZmFsc2UgKTtcbiAgICAgICAgc2NvcGUuZGlzcGF0Y2hFdmVudCggZW5kRXZlbnQgKTtcbiAgICAgICAgc3RhdGUgPSBTVEFURS5OT05FO1xuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25Nb3VzZVdoZWVsKCBldmVudCApIHtcblxuICAgICAgICBpZiAoIHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlIHx8IHNjb3BlLm5vWm9vbSA9PT0gdHJ1ZSB8fCBzdGF0ZSAhPT0gU1RBVEUuTk9ORSApIHJldHVybjtcblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICB2YXIgZGVsdGEgPSAwO1xuXG4gICAgICAgIGlmICggZXZlbnQud2hlZWxEZWx0YSAhPT0gdW5kZWZpbmVkICkgeyAvLyBXZWJLaXQgLyBPcGVyYSAvIEV4cGxvcmVyIDlcblxuICAgICAgICAgICAgZGVsdGEgPSBldmVudC53aGVlbERlbHRhO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoIGV2ZW50LmRldGFpbCAhPT0gdW5kZWZpbmVkICkgeyAvLyBGaXJlZm94XG5cbiAgICAgICAgICAgIGRlbHRhID0gLSBldmVudC5kZXRhaWw7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggZGVsdGEgPiAwICkge1xuXG4gICAgICAgICAgICAvLyBzY29wZS5kb2xseU91dCgpO1xuICAgICAgICAgICAgc2NvcGUub2JqZWN0LmZvdiA9ICggc2NvcGUub2JqZWN0LmZvdiA8IHNjb3BlLm1heEZvdiApIFxuICAgICAgICAgICAgICAgID8gc2NvcGUub2JqZWN0LmZvdiArIDFcbiAgICAgICAgICAgICAgICA6IHNjb3BlLm1heEZvdjtcbiAgICAgICAgICAgIHNjb3BlLm9iamVjdC51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XG5cbiAgICAgICAgfSBlbHNlIGlmICggZGVsdGEgPCAwICkge1xuXG4gICAgICAgICAgICAvLyBzY29wZS5kb2xseUluKCk7XG4gICAgICAgICAgICBzY29wZS5vYmplY3QuZm92ID0gKCBzY29wZS5vYmplY3QuZm92ID4gc2NvcGUubWluRm92ICkgXG4gICAgICAgICAgICAgICAgPyBzY29wZS5vYmplY3QuZm92IC0gMVxuICAgICAgICAgICAgICAgIDogc2NvcGUubWluRm92O1xuICAgICAgICAgICAgc2NvcGUub2JqZWN0LnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgc2NvcGUudXBkYXRlKCk7XG4gICAgICAgIHNjb3BlLmRpc3BhdGNoRXZlbnQoIGNoYW5nZUV2ZW50ICk7XG4gICAgICAgIHNjb3BlLmRpc3BhdGNoRXZlbnQoIHN0YXJ0RXZlbnQgKTtcbiAgICAgICAgc2NvcGUuZGlzcGF0Y2hFdmVudCggZW5kRXZlbnQgKTtcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uS2V5VXAgKCBldmVudCApIHtcblxuICAgICAgICBzd2l0Y2ggKCBldmVudC5rZXlDb2RlICkge1xuXG4gICAgICAgIGNhc2Ugc2NvcGUua2V5cy5VUDpcbiAgICAgICAgICAgIGtleVVwID0gZmFsc2U7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIHNjb3BlLmtleXMuQk9UVE9NOlxuICAgICAgICAgICAga2V5Qm90dG9tID0gZmFsc2U7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIHNjb3BlLmtleXMuTEVGVDpcbiAgICAgICAgICAgIGtleUxlZnQgPSBmYWxzZTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2Ugc2NvcGUua2V5cy5SSUdIVDpcbiAgICAgICAgICAgIGtleVJpZ2h0ID0gZmFsc2U7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbktleURvd24oIGV2ZW50ICkge1xuXG4gICAgICAgIGlmICggc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UgfHwgc2NvcGUubm9LZXlzID09PSB0cnVlIHx8IHNjb3BlLm5vUm90YXRlID09PSB0cnVlICkgcmV0dXJuO1xuXG4gICAgICAgIHN3aXRjaCAoIGV2ZW50LmtleUNvZGUgKSB7XG5cbiAgICAgICAgY2FzZSBzY29wZS5rZXlzLlVQOlxuICAgICAgICAgICAga2V5VXAgPSB0cnVlO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBzY29wZS5rZXlzLkJPVFRPTTpcbiAgICAgICAgICAgIGtleUJvdHRvbSA9IHRydWU7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIHNjb3BlLmtleXMuTEVGVDpcbiAgICAgICAgICAgIGtleUxlZnQgPSB0cnVlO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBzY29wZS5rZXlzLlJJR0hUOlxuICAgICAgICAgICAga2V5UmlnaHQgPSB0cnVlO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChrZXlVcCB8fCBrZXlCb3R0b20gfHwga2V5TGVmdCB8fCBrZXlSaWdodCkge1xuXG4gICAgICAgICAgICBtb21lbnR1bU9uID0gdHJ1ZTtcblxuICAgICAgICAgICAgaWYgKGtleVVwKSBtb21lbnR1bVVwID0gLSBzY29wZS5yb3RhdGVTcGVlZCAqIHNjb3BlLm1vbWVudHVtS2V5ZG93bkZhY3RvcjtcbiAgICAgICAgICAgIGlmIChrZXlCb3R0b20pIG1vbWVudHVtVXAgPSBzY29wZS5yb3RhdGVTcGVlZCAqIHNjb3BlLm1vbWVudHVtS2V5ZG93bkZhY3RvcjtcbiAgICAgICAgICAgIGlmIChrZXlMZWZ0KSBtb21lbnR1bUxlZnQgPSAtIHNjb3BlLnJvdGF0ZVNwZWVkICogc2NvcGUubW9tZW50dW1LZXlkb3duRmFjdG9yO1xuICAgICAgICAgICAgaWYgKGtleVJpZ2h0KSBtb21lbnR1bUxlZnQgPSBzY29wZS5yb3RhdGVTcGVlZCAqIHNjb3BlLm1vbWVudHVtS2V5ZG93bkZhY3RvcjtcblxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0b3VjaHN0YXJ0KCBldmVudCApIHtcblxuICAgICAgICBtb21lbnR1bU9uID0gZmFsc2U7XG5cbiAgICAgICAgbW9tZW50dW1MZWZ0ID0gbW9tZW50dW1VcCA9IDA7XG5cbiAgICAgICAgaWYgKCBzY29wZS5lbmFibGVkID09PSBmYWxzZSApIHJldHVybjtcblxuICAgICAgICBzd2l0Y2ggKCBldmVudC50b3VjaGVzLmxlbmd0aCApIHtcblxuICAgICAgICBjYXNlIDE6XHQvLyBvbmUtZmluZ2VyZWQgdG91Y2g6IHJvdGF0ZVxuXG4gICAgICAgICAgICBpZiAoIHNjb3BlLm5vUm90YXRlID09PSB0cnVlICkgcmV0dXJuO1xuXG4gICAgICAgICAgICBzdGF0ZSA9IFNUQVRFLlRPVUNIX1JPVEFURTtcblxuICAgICAgICAgICAgcm90YXRlU3RhcnQuc2V0KCBldmVudC50b3VjaGVzWyAwIF0ucGFnZVgsIGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWSApO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAyOlx0Ly8gdHdvLWZpbmdlcmVkIHRvdWNoOiBkb2xseVxuXG4gICAgICAgICAgICBpZiAoIHNjb3BlLm5vWm9vbSA9PT0gdHJ1ZSApIHJldHVybjtcblxuICAgICAgICAgICAgc3RhdGUgPSBTVEFURS5UT1VDSF9ET0xMWTtcblxuICAgICAgICAgICAgdmFyIGR4ID0gZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VYIC0gZXZlbnQudG91Y2hlc1sgMSBdLnBhZ2VYO1xuICAgICAgICAgICAgdmFyIGR5ID0gZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VZIC0gZXZlbnQudG91Y2hlc1sgMSBdLnBhZ2VZO1xuICAgICAgICAgICAgdmFyIGRpc3RhbmNlID0gTWF0aC5zcXJ0KCBkeCAqIGR4ICsgZHkgKiBkeSApO1xuXG4gICAgICAgICAgICBkb2xseVN0YXJ0LnNldCggMCwgZGlzdGFuY2UgKTtcblxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAzOiAvLyB0aHJlZS1maW5nZXJlZCB0b3VjaDogcGFuXG5cbiAgICAgICAgICAgIGlmICggc2NvcGUubm9QYW4gPT09IHRydWUgKSByZXR1cm47XG5cbiAgICAgICAgICAgIHN0YXRlID0gU1RBVEUuVE9VQ0hfUEFOO1xuXG4gICAgICAgICAgICBwYW5TdGFydC5zZXQoIGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWCwgZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VZICk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuXG4gICAgICAgICAgICBzdGF0ZSA9IFNUQVRFLk5PTkU7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggc3RhdGUgIT09IFNUQVRFLk5PTkUgKSBzY29wZS5kaXNwYXRjaEV2ZW50KCBzdGFydEV2ZW50ICk7XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0b3VjaG1vdmUoIGV2ZW50ICkge1xuXG4gICAgICAgIGlmICggc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UgKSByZXR1cm47XG5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgdmFyIGVsZW1lbnQgPSBzY29wZS5kb21FbGVtZW50ID09PSBkb2N1bWVudCA/IHNjb3BlLmRvbUVsZW1lbnQuYm9keSA6IHNjb3BlLmRvbUVsZW1lbnQ7XG5cbiAgICAgICAgc3dpdGNoICggZXZlbnQudG91Y2hlcy5sZW5ndGggKSB7XG5cbiAgICAgICAgY2FzZSAxOiAvLyBvbmUtZmluZ2VyZWQgdG91Y2g6IHJvdGF0ZVxuXG4gICAgICAgICAgICBpZiAoIHNjb3BlLm5vUm90YXRlID09PSB0cnVlICkgcmV0dXJuO1xuICAgICAgICAgICAgaWYgKCBzdGF0ZSAhPT0gU1RBVEUuVE9VQ0hfUk9UQVRFICkgcmV0dXJuO1xuXG4gICAgICAgICAgICByb3RhdGVFbmQuc2V0KCBldmVudC50b3VjaGVzWyAwIF0ucGFnZVgsIGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWSApO1xuICAgICAgICAgICAgcm90YXRlRGVsdGEuc3ViVmVjdG9ycyggcm90YXRlRW5kLCByb3RhdGVTdGFydCApO1xuXG4gICAgICAgICAgICAvLyByb3RhdGluZyBhY3Jvc3Mgd2hvbGUgc2NyZWVuIGdvZXMgMzYwIGRlZ3JlZXMgYXJvdW5kXG4gICAgICAgICAgICBzY29wZS5yb3RhdGVMZWZ0KCAyICogTWF0aC5QSSAqIHJvdGF0ZURlbHRhLnggLyBlbGVtZW50LmNsaWVudFdpZHRoICogc2NvcGUucm90YXRlU3BlZWQgKTtcbiAgICAgICAgICAgIC8vIHJvdGF0aW5nIHVwIGFuZCBkb3duIGFsb25nIHdob2xlIHNjcmVlbiBhdHRlbXB0cyB0byBnbyAzNjAsIGJ1dCBsaW1pdGVkIHRvIDE4MFxuICAgICAgICAgICAgc2NvcGUucm90YXRlVXAoIDIgKiBNYXRoLlBJICogcm90YXRlRGVsdGEueSAvIGVsZW1lbnQuY2xpZW50SGVpZ2h0ICogc2NvcGUucm90YXRlU3BlZWQgKTtcblxuICAgICAgICAgICAgcm90YXRlU3RhcnQuY29weSggcm90YXRlRW5kICk7XG5cbiAgICAgICAgICAgIGlmKCBldmVudFByZXZpb3VzICl7XG4gICAgICAgICAgICAgICAgbW9tZW50dW1MZWZ0ID0gZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VYIC0gZXZlbnRQcmV2aW91cy5wYWdlWDtcbiAgICAgICAgICAgICAgICBtb21lbnR1bVVwID0gZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VZIC0gZXZlbnRQcmV2aW91cy5wYWdlWTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZXZlbnRQcmV2aW91cyA9IHtcbiAgICAgICAgICAgICAgICBwYWdlWDogZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VYLFxuICAgICAgICAgICAgICAgIHBhZ2VZOiBldmVudC50b3VjaGVzWyAwIF0ucGFnZVksXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBzY29wZS51cGRhdGUoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgMjogLy8gdHdvLWZpbmdlcmVkIHRvdWNoOiBkb2xseVxuXG4gICAgICAgICAgICBpZiAoIHNjb3BlLm5vWm9vbSA9PT0gdHJ1ZSApIHJldHVybjtcbiAgICAgICAgICAgIGlmICggc3RhdGUgIT09IFNUQVRFLlRPVUNIX0RPTExZICkgcmV0dXJuO1xuXG4gICAgICAgICAgICB2YXIgZHggPSBldmVudC50b3VjaGVzWyAwIF0ucGFnZVggLSBldmVudC50b3VjaGVzWyAxIF0ucGFnZVg7XG4gICAgICAgICAgICB2YXIgZHkgPSBldmVudC50b3VjaGVzWyAwIF0ucGFnZVkgLSBldmVudC50b3VjaGVzWyAxIF0ucGFnZVk7XG4gICAgICAgICAgICB2YXIgZGlzdGFuY2UgPSBNYXRoLnNxcnQoIGR4ICogZHggKyBkeSAqIGR5ICk7XG5cbiAgICAgICAgICAgIGRvbGx5RW5kLnNldCggMCwgZGlzdGFuY2UgKTtcbiAgICAgICAgICAgIGRvbGx5RGVsdGEuc3ViVmVjdG9ycyggZG9sbHlFbmQsIGRvbGx5U3RhcnQgKTtcblxuICAgICAgICAgICAgaWYgKCBkb2xseURlbHRhLnkgPCAwICkge1xuXG4gICAgICAgICAgICAgICAgc2NvcGUub2JqZWN0LmZvdiA9ICggc2NvcGUub2JqZWN0LmZvdiA8IHNjb3BlLm1heEZvdiApIFxuICAgICAgICAgICAgICAgICAgICA/IHNjb3BlLm9iamVjdC5mb3YgKyAxXG4gICAgICAgICAgICAgICAgICAgIDogc2NvcGUubWF4Rm92O1xuICAgICAgICAgICAgICAgIHNjb3BlLm9iamVjdC51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIGRvbGx5RGVsdGEueSA+IDAgKSB7XG5cbiAgICAgICAgICAgICAgICBzY29wZS5vYmplY3QuZm92ID0gKCBzY29wZS5vYmplY3QuZm92ID4gc2NvcGUubWluRm92ICkgXG4gICAgICAgICAgICAgICAgICAgID8gc2NvcGUub2JqZWN0LmZvdiAtIDFcbiAgICAgICAgICAgICAgICAgICAgOiBzY29wZS5taW5Gb3Y7XG4gICAgICAgICAgICAgICAgc2NvcGUub2JqZWN0LnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkb2xseVN0YXJ0LmNvcHkoIGRvbGx5RW5kICk7XG5cbiAgICAgICAgICAgIHNjb3BlLnVwZGF0ZSgpO1xuICAgICAgICAgICAgc2NvcGUuZGlzcGF0Y2hFdmVudCggY2hhbmdlRXZlbnQgKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgMzogLy8gdGhyZWUtZmluZ2VyZWQgdG91Y2g6IHBhblxuXG4gICAgICAgICAgICBpZiAoIHNjb3BlLm5vUGFuID09PSB0cnVlICkgcmV0dXJuO1xuICAgICAgICAgICAgaWYgKCBzdGF0ZSAhPT0gU1RBVEUuVE9VQ0hfUEFOICkgcmV0dXJuO1xuXG4gICAgICAgICAgICBwYW5FbmQuc2V0KCBldmVudC50b3VjaGVzWyAwIF0ucGFnZVgsIGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWSApO1xuICAgICAgICAgICAgcGFuRGVsdGEuc3ViVmVjdG9ycyggcGFuRW5kLCBwYW5TdGFydCApO1xuXG4gICAgICAgICAgICBzY29wZS5wYW4oIHBhbkRlbHRhLngsIHBhbkRlbHRhLnkgKTtcblxuICAgICAgICAgICAgcGFuU3RhcnQuY29weSggcGFuRW5kICk7XG5cbiAgICAgICAgICAgIHNjb3BlLnVwZGF0ZSgpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcblxuICAgICAgICAgICAgc3RhdGUgPSBTVEFURS5OT05FO1xuXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRvdWNoZW5kKCAvKiBldmVudCAqLyApIHtcblxuICAgICAgICBtb21lbnR1bU9uID0gdHJ1ZTtcblxuICAgICAgICBldmVudFByZXZpb3VzID0gdW5kZWZpbmVkO1xuXG4gICAgICAgIGlmICggc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UgKSByZXR1cm47XG5cbiAgICAgICAgc2NvcGUuZGlzcGF0Y2hFdmVudCggZW5kRXZlbnQgKTtcbiAgICAgICAgc3RhdGUgPSBTVEFURS5OT05FO1xuXG4gICAgfVxuXG4gICAgdGhpcy5kaXNwb3NlID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdGhpcy5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdtb3VzZWRvd24nLCBvbk1vdXNlRG93biApO1xuICAgICAgICB0aGlzLmRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ21vdXNld2hlZWwnLCBvbk1vdXNlV2hlZWwgKTtcbiAgICAgICAgdGhpcy5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdET01Nb3VzZVNjcm9sbCcsIG9uTW91c2VXaGVlbCApO1xuXG4gICAgICAgIHRoaXMuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAndG91Y2hzdGFydCcsIHRvdWNoc3RhcnQgKTtcbiAgICAgICAgdGhpcy5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICd0b3VjaGVuZCcsIHRvdWNoZW5kICk7XG4gICAgICAgIHRoaXMuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAndG91Y2htb3ZlJywgdG91Y2htb3ZlICk7XG5cbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdrZXl1cCcsIG9uS2V5VXAgKTtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdrZXlkb3duJywgb25LZXlEb3duICk7XG5cbiAgICB9O1xuXG4gICAgLy8gdGhpcy5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdjb250ZXh0bWVudScsIGZ1bmN0aW9uICggZXZlbnQgKSB7IGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IH0sIGZhbHNlICk7XG4gICAgdGhpcy5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZWRvd24nLCBvbk1vdXNlRG93biwgeyBwYXNzaXZlOiBmYWxzZSB9ICk7XG4gICAgdGhpcy5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZXdoZWVsJywgb25Nb3VzZVdoZWVsLCB7IHBhc3NpdmU6IGZhbHNlIH0gKTtcbiAgICB0aGlzLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ0RPTU1vdXNlU2Nyb2xsJywgb25Nb3VzZVdoZWVsLCB7IHBhc3NpdmU6IGZhbHNlIH0gKTsgLy8gZmlyZWZveFxuXG4gICAgdGhpcy5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICd0b3VjaHN0YXJ0JywgdG91Y2hzdGFydCwgeyBwYXNzaXZlOiBmYWxzZSB9ICk7XG4gICAgdGhpcy5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICd0b3VjaGVuZCcsIHRvdWNoZW5kLCB7IHBhc3NpdmU6IGZhbHNlIH0gKTtcbiAgICB0aGlzLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ3RvdWNobW92ZScsIHRvdWNobW92ZSwgeyBwYXNzaXZlOiBmYWxzZSB9ICk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggJ2tleXVwJywgb25LZXlVcCwgeyBwYXNzaXZlOiBmYWxzZSB9ICk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoICdrZXlkb3duJywgb25LZXlEb3duLCB7IHBhc3NpdmU6IGZhbHNlIH0gKTtcblxuICAgIC8vIGZvcmNlIGFuIHVwZGF0ZSBhdCBzdGFydFxuICAgIHRoaXMudXBkYXRlKCk7XG5cbn07XG5cbk9yYml0Q29udHJvbHMucHJvdG90eXBlID0gT2JqZWN0LmFzc2lnbiggT2JqZWN0LmNyZWF0ZSggVEhSRUUuRXZlbnREaXNwYXRjaGVyLnByb3RvdHlwZSApLCB7XG5cbiAgICBjb25zdHJ1Y3RvcjogT3JiaXRDb250cm9sc1xuXG59ICk7XG5cbmV4cG9ydCB7IE9yYml0Q29udHJvbHMgfTsiLCJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbi8qKlxuICogQGNsYXNzZGVzYyBEZXZpY2UgT3JpZW50YXRpb24gQ29udHJvbFxuICogQGNvbnN0cnVjdG9yXG4gKiBAZXh0ZXJuYWwgRGV2aWNlT3JpZW50YXRpb25Db250cm9sc1xuICogQHBhcmFtIHtUSFJFRS5DYW1lcmF9IGNhbWVyYSBcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGRvbUVsZW1lbnQgXG4gKi9cbmZ1bmN0aW9uIERldmljZU9yaWVudGF0aW9uQ29udHJvbHMgKCBjYW1lcmEsIGRvbUVsZW1lbnQgKSB7XG5cbiAgICB2YXIgc2NvcGUgPSB0aGlzO1xuICAgIHZhciBjaGFuZ2VFdmVudCA9IHsgdHlwZTogJ2NoYW5nZScgfTtcblxuICAgIHZhciByb3RZID0gMDtcbiAgICB2YXIgcm90WCA9IDA7XG4gICAgdmFyIHRlbXBYID0gMDtcbiAgICB2YXIgdGVtcFkgPSAwO1xuXG4gICAgdGhpcy5jYW1lcmEgPSBjYW1lcmE7XG4gICAgdGhpcy5jYW1lcmEucm90YXRpb24ucmVvcmRlciggJ1lYWicgKTtcbiAgICB0aGlzLmRvbUVsZW1lbnQgPSAoIGRvbUVsZW1lbnQgIT09IHVuZGVmaW5lZCApID8gZG9tRWxlbWVudCA6IGRvY3VtZW50O1xuXG4gICAgdGhpcy5lbmFibGVkID0gdHJ1ZTtcblxuICAgIHRoaXMuZGV2aWNlT3JpZW50YXRpb24gPSB7fTtcbiAgICB0aGlzLnNjcmVlbk9yaWVudGF0aW9uID0gMDtcblxuICAgIHRoaXMuYWxwaGEgPSAwO1xuICAgIHRoaXMuYWxwaGFPZmZzZXRBbmdsZSA9IDA7XG5cblxuICAgIHZhciBvbkRldmljZU9yaWVudGF0aW9uQ2hhbmdlRXZlbnQgPSBmdW5jdGlvbiggZXZlbnQgKSB7XG5cbiAgICAgICAgc2NvcGUuZGV2aWNlT3JpZW50YXRpb24gPSBldmVudDtcblxuICAgIH07XG5cbiAgICB2YXIgb25TY3JlZW5PcmllbnRhdGlvbkNoYW5nZUV2ZW50ID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgc2NvcGUuc2NyZWVuT3JpZW50YXRpb24gPSB3aW5kb3cub3JpZW50YXRpb24gfHwgMDtcblxuICAgIH07XG5cbiAgICB2YXIgb25Ub3VjaFN0YXJ0RXZlbnQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICB0ZW1wWCA9IGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWDtcbiAgICAgICAgdGVtcFkgPSBldmVudC50b3VjaGVzWyAwIF0ucGFnZVk7XG5cbiAgICB9O1xuXG4gICAgdmFyIG9uVG91Y2hNb3ZlRXZlbnQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICByb3RZICs9IFRIUkVFLk1hdGguZGVnVG9SYWQoICggZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VYIC0gdGVtcFggKSAvIDQgKTtcbiAgICAgICAgcm90WCArPSBUSFJFRS5NYXRoLmRlZ1RvUmFkKCAoIHRlbXBZIC0gZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VZICkgLyA0ICk7XG5cbiAgICAgICAgc2NvcGUudXBkYXRlQWxwaGFPZmZzZXRBbmdsZSggcm90WSApO1xuXG4gICAgICAgIHRlbXBYID0gZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VYO1xuICAgICAgICB0ZW1wWSA9IGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWTtcblxuICAgIH07XG5cbiAgICAvLyBUaGUgYW5nbGVzIGFscGhhLCBiZXRhIGFuZCBnYW1tYSBmb3JtIGEgc2V0IG9mIGludHJpbnNpYyBUYWl0LUJyeWFuIGFuZ2xlcyBvZiB0eXBlIFotWCctWScnXG5cbiAgICB2YXIgc2V0Q2FtZXJhUXVhdGVybmlvbiA9IGZ1bmN0aW9uKCBxdWF0ZXJuaW9uLCBhbHBoYSwgYmV0YSwgZ2FtbWEsIG9yaWVudCApIHtcblxuICAgICAgICB2YXIgemVlID0gbmV3IFRIUkVFLlZlY3RvcjMoIDAsIDAsIDEgKTtcblxuICAgICAgICB2YXIgZXVsZXIgPSBuZXcgVEhSRUUuRXVsZXIoKTtcblxuICAgICAgICB2YXIgcTAgPSBuZXcgVEhSRUUuUXVhdGVybmlvbigpO1xuXG4gICAgICAgIHZhciBxMSA9IG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCAtIE1hdGguc3FydCggMC41ICksIDAsIDAsIE1hdGguc3FydCggMC41ICkgKTsgLy8gLSBQSS8yIGFyb3VuZCB0aGUgeC1heGlzXG5cbiAgICAgICAgdmFyIHZlY3RvckZpbmdlclk7XG4gICAgICAgIHZhciBmaW5nZXJRWSA9IG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCk7XG4gICAgICAgIHZhciBmaW5nZXJRWCA9IG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCk7XG5cbiAgICAgICAgaWYgKCBzY29wZS5zY3JlZW5PcmllbnRhdGlvbiA9PSAwICkge1xuXG4gICAgICAgICAgICB2ZWN0b3JGaW5nZXJZID0gbmV3IFRIUkVFLlZlY3RvcjMoIDEsIDAsIDAgKTtcbiAgICAgICAgICAgIGZpbmdlclFZLnNldEZyb21BeGlzQW5nbGUoIHZlY3RvckZpbmdlclksIC1yb3RYICk7XG5cbiAgICAgICAgfSBlbHNlIGlmICggc2NvcGUuc2NyZWVuT3JpZW50YXRpb24gPT0gMTgwICkge1xuXG4gICAgICAgICAgICB2ZWN0b3JGaW5nZXJZID0gbmV3IFRIUkVFLlZlY3RvcjMoIDEsIDAsIDAgKTtcbiAgICAgICAgICAgIGZpbmdlclFZLnNldEZyb21BeGlzQW5nbGUoIHZlY3RvckZpbmdlclksIHJvdFggKTtcblxuICAgICAgICB9IGVsc2UgaWYgKCBzY29wZS5zY3JlZW5PcmllbnRhdGlvbiA9PSA5MCApIHtcblxuICAgICAgICAgICAgdmVjdG9yRmluZ2VyWSA9IG5ldyBUSFJFRS5WZWN0b3IzKCAwLCAxLCAwICk7XG4gICAgICAgICAgICBmaW5nZXJRWS5zZXRGcm9tQXhpc0FuZ2xlKCB2ZWN0b3JGaW5nZXJZLCByb3RYICk7XG5cbiAgICAgICAgfSBlbHNlIGlmICggc2NvcGUuc2NyZWVuT3JpZW50YXRpb24gPT0gLSA5MCkge1xuXG4gICAgICAgICAgICB2ZWN0b3JGaW5nZXJZID0gbmV3IFRIUkVFLlZlY3RvcjMoIDAsIDEsIDAgKTtcbiAgICAgICAgICAgIGZpbmdlclFZLnNldEZyb21BeGlzQW5nbGUoIHZlY3RvckZpbmdlclksIC1yb3RYICk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHExLm11bHRpcGx5KCBmaW5nZXJRWSApO1xuICAgICAgICBxMS5tdWx0aXBseSggZmluZ2VyUVggKTtcblxuICAgICAgICBldWxlci5zZXQoIGJldGEsIGFscGhhLCAtIGdhbW1hLCAnWVhaJyApOyAvLyAnWlhZJyBmb3IgdGhlIGRldmljZSwgYnV0ICdZWFonIGZvciB1c1xuXG4gICAgICAgIHF1YXRlcm5pb24uc2V0RnJvbUV1bGVyKCBldWxlciApOyAvLyBvcmllbnQgdGhlIGRldmljZVxuXG4gICAgICAgIHF1YXRlcm5pb24ubXVsdGlwbHkoIHExICk7IC8vIGNhbWVyYSBsb29rcyBvdXQgdGhlIGJhY2sgb2YgdGhlIGRldmljZSwgbm90IHRoZSB0b3BcblxuICAgICAgICBxdWF0ZXJuaW9uLm11bHRpcGx5KCBxMC5zZXRGcm9tQXhpc0FuZ2xlKCB6ZWUsIC0gb3JpZW50ICkgKTsgLy8gYWRqdXN0IGZvciBzY3JlZW4gb3JpZW50YXRpb25cblxuICAgIH07XG5cbiAgICB0aGlzLmNvbm5lY3QgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICBvblNjcmVlbk9yaWVudGF0aW9uQ2hhbmdlRXZlbnQoKTsgLy8gcnVuIG9uY2Ugb24gbG9hZFxuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCAnb3JpZW50YXRpb25jaGFuZ2UnLCBvblNjcmVlbk9yaWVudGF0aW9uQ2hhbmdlRXZlbnQsIHsgcGFzc2l2ZTogdHJ1ZSB9ICk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCAnZGV2aWNlb3JpZW50YXRpb24nLCBvbkRldmljZU9yaWVudGF0aW9uQ2hhbmdlRXZlbnQsIHsgcGFzc2l2ZTogdHJ1ZSB9ICk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCAnZGV2aWNlb3JpZW50YXRpb24nLCB0aGlzLnVwZGF0ZS5iaW5kKCB0aGlzICksIHsgcGFzc2l2ZTogdHJ1ZSB9ICk7XG5cbiAgICAgICAgc2NvcGUuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAndG91Y2hzdGFydCcsIG9uVG91Y2hTdGFydEV2ZW50LCB7IHBhc3NpdmU6IGZhbHNlIH0gKTtcbiAgICAgICAgc2NvcGUuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAndG91Y2htb3ZlJywgb25Ub3VjaE1vdmVFdmVudCwgeyBwYXNzaXZlOiBmYWxzZSB9ICk7XG5cbiAgICAgICAgc2NvcGUuZW5hYmxlZCA9IHRydWU7XG5cbiAgICB9O1xuXG4gICAgdGhpcy5kaXNjb25uZWN0ID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdvcmllbnRhdGlvbmNoYW5nZScsIG9uU2NyZWVuT3JpZW50YXRpb25DaGFuZ2VFdmVudCwgZmFsc2UgKTtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdkZXZpY2VvcmllbnRhdGlvbicsIG9uRGV2aWNlT3JpZW50YXRpb25DaGFuZ2VFdmVudCwgZmFsc2UgKTtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdkZXZpY2VvcmllbnRhdGlvbicsIHRoaXMudXBkYXRlLmJpbmQoIHRoaXMgKSwgZmFsc2UgKTtcblxuICAgICAgICBzY29wZS5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICd0b3VjaHN0YXJ0Jywgb25Ub3VjaFN0YXJ0RXZlbnQsIGZhbHNlICk7XG4gICAgICAgIHNjb3BlLmRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3RvdWNobW92ZScsIG9uVG91Y2hNb3ZlRXZlbnQsIGZhbHNlICk7XG5cbiAgICAgICAgc2NvcGUuZW5hYmxlZCA9IGZhbHNlO1xuXG4gICAgfTtcblxuICAgIHRoaXMudXBkYXRlID0gZnVuY3Rpb24oIGlnbm9yZVVwZGF0ZSApIHtcblxuICAgICAgICBpZiAoIHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlICkgcmV0dXJuO1xuXG4gICAgICAgIHZhciBhbHBoYSA9IHNjb3BlLmRldmljZU9yaWVudGF0aW9uLmFscGhhID8gVEhSRUUuTWF0aC5kZWdUb1JhZCggc2NvcGUuZGV2aWNlT3JpZW50YXRpb24uYWxwaGEgKSArIHNjb3BlLmFscGhhT2Zmc2V0QW5nbGUgOiAwOyAvLyBaXG4gICAgICAgIHZhciBiZXRhID0gc2NvcGUuZGV2aWNlT3JpZW50YXRpb24uYmV0YSA/IFRIUkVFLk1hdGguZGVnVG9SYWQoIHNjb3BlLmRldmljZU9yaWVudGF0aW9uLmJldGEgKSA6IDA7IC8vIFgnXG4gICAgICAgIHZhciBnYW1tYSA9IHNjb3BlLmRldmljZU9yaWVudGF0aW9uLmdhbW1hID8gVEhSRUUuTWF0aC5kZWdUb1JhZCggc2NvcGUuZGV2aWNlT3JpZW50YXRpb24uZ2FtbWEgKSA6IDA7IC8vIFknJ1xuICAgICAgICB2YXIgb3JpZW50ID0gc2NvcGUuc2NyZWVuT3JpZW50YXRpb24gPyBUSFJFRS5NYXRoLmRlZ1RvUmFkKCBzY29wZS5zY3JlZW5PcmllbnRhdGlvbiApIDogMDsgLy8gT1xuXG4gICAgICAgIHNldENhbWVyYVF1YXRlcm5pb24oIHNjb3BlLmNhbWVyYS5xdWF0ZXJuaW9uLCBhbHBoYSwgYmV0YSwgZ2FtbWEsIG9yaWVudCApO1xuICAgICAgICBzY29wZS5hbHBoYSA9IGFscGhhO1xuXG4gICAgICAgIGlmICggaWdub3JlVXBkYXRlICE9PSB0cnVlICkgeyBzY29wZS5kaXNwYXRjaEV2ZW50KCBjaGFuZ2VFdmVudCApOyB9XG5cbiAgICB9O1xuXG4gICAgdGhpcy51cGRhdGVBbHBoYU9mZnNldEFuZ2xlID0gZnVuY3Rpb24oIGFuZ2xlICkge1xuXG4gICAgICAgIHRoaXMuYWxwaGFPZmZzZXRBbmdsZSA9IGFuZ2xlO1xuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuXG4gICAgfTtcblxuICAgIHRoaXMuZGlzcG9zZSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHRoaXMuZGlzY29ubmVjdCgpO1xuXG4gICAgfTtcblxuICAgIHRoaXMuY29ubmVjdCgpO1xuXG59O1xuXG5EZXZpY2VPcmllbnRhdGlvbkNvbnRyb2xzLnByb3RvdHlwZSA9IE9iamVjdC5hc3NpZ24oIE9iamVjdC5jcmVhdGUoIFRIUkVFLkV2ZW50RGlzcGF0Y2hlci5wcm90b3R5cGUpLCB7XG5cbiAgICBjb25zdHJ1Y3RvcjogRGV2aWNlT3JpZW50YXRpb25Db250cm9sc1xuXG59ICk7XG5cbmV4cG9ydCB7IERldmljZU9yaWVudGF0aW9uQ29udHJvbHMgfTsiLCJcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcblxuLyoqXG4gKiBAY2xhc3NkZXNjIEdvb2dsZSBDYXJkYm9hcmQgRWZmZWN0IENvbXBvc2VyXG4gKiBAY29uc3RydWN0b3JcbiAqIEBleHRlcm5hbCBDYXJkYm9hcmRFZmZlY3RcbiAqIEBwYXJhbSB7VEhSRUUuV2ViR0xSZW5kZXJlcn0gcmVuZGVyZXIgXG4gKi9cbmZ1bmN0aW9uIENhcmRib2FyZEVmZmVjdCAoIHJlbmRlcmVyICkge1xuXG4gICAgdmFyIF9jYW1lcmEgPSBuZXcgVEhSRUUuT3J0aG9ncmFwaGljQ2FtZXJhKCAtIDEsIDEsIDEsIC0gMSwgMCwgMSApO1xuXG4gICAgdmFyIF9zY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xuXG4gICAgdmFyIF9zdGVyZW8gPSBuZXcgVEhSRUUuU3RlcmVvQ2FtZXJhKCk7XG4gICAgX3N0ZXJlby5hc3BlY3QgPSAwLjU7XG5cbiAgICB2YXIgX3BhcmFtcyA9IHsgbWluRmlsdGVyOiBUSFJFRS5MaW5lYXJGaWx0ZXIsIG1hZ0ZpbHRlcjogVEhSRUUuTmVhcmVzdEZpbHRlciwgZm9ybWF0OiBUSFJFRS5SR0JBRm9ybWF0IH07XG5cbiAgICB2YXIgX3JlbmRlclRhcmdldCA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlclRhcmdldCggNTEyLCA1MTIsIF9wYXJhbXMgKTtcbiAgICBfcmVuZGVyVGFyZ2V0LnNjaXNzb3JUZXN0ID0gdHJ1ZTtcbiAgICBfcmVuZGVyVGFyZ2V0LnRleHR1cmUuZ2VuZXJhdGVNaXBtYXBzID0gZmFsc2U7XG5cbiAgICAvKlxuICAgICAqIERpc3RvcnRpb24gTWVzaCBwb3J0ZWQgZnJvbTpcbiAgICAgKiBodHRwczovL2dpdGh1Yi5jb20vYm9yaXNtdXMvd2VidnItYm9pbGVycGxhdGUvYmxvYi9tYXN0ZXIvc3JjL2Rpc3RvcnRpb24vYmFycmVsLWRpc3RvcnRpb24tZnJhZ21lbnQuanNcbiAgICAgKi9cblxuICAgIHZhciBkaXN0b3J0aW9uID0gbmV3IFRIUkVFLlZlY3RvcjIoIDAuNDQxLCAwLjE1NiApO1xuXG4gICAgdmFyIGdlb21ldHJ5ID0gbmV3IFRIUkVFLlBsYW5lQnVmZmVyR2VvbWV0cnkoIDEsIDEsIDEwLCAyMCApLnJlbW92ZUF0dHJpYnV0ZSggJ25vcm1hbCcgKS50b05vbkluZGV4ZWQoKTtcblxuICAgIHZhciBwb3NpdGlvbnMgPSBnZW9tZXRyeS5hdHRyaWJ1dGVzLnBvc2l0aW9uLmFycmF5O1xuICAgIHZhciB1dnMgPSBnZW9tZXRyeS5hdHRyaWJ1dGVzLnV2LmFycmF5O1xuXG4gICAgLy8gZHVwbGljYXRlXG4gICAgZ2VvbWV0cnkuYXR0cmlidXRlcy5wb3NpdGlvbi5jb3VudCAqPSAyO1xuICAgIGdlb21ldHJ5LmF0dHJpYnV0ZXMudXYuY291bnQgKj0gMjtcblxuICAgIHZhciBwb3NpdGlvbnMyID0gbmV3IEZsb2F0MzJBcnJheSggcG9zaXRpb25zLmxlbmd0aCAqIDIgKTtcbiAgICBwb3NpdGlvbnMyLnNldCggcG9zaXRpb25zICk7XG4gICAgcG9zaXRpb25zMi5zZXQoIHBvc2l0aW9ucywgcG9zaXRpb25zLmxlbmd0aCApO1xuXG4gICAgdmFyIHV2czIgPSBuZXcgRmxvYXQzMkFycmF5KCB1dnMubGVuZ3RoICogMiApO1xuICAgIHV2czIuc2V0KCB1dnMgKTtcbiAgICB1dnMyLnNldCggdXZzLCB1dnMubGVuZ3RoICk7XG5cbiAgICB2YXIgdmVjdG9yID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcbiAgICB2YXIgbGVuZ3RoID0gcG9zaXRpb25zLmxlbmd0aCAvIDM7XG5cbiAgICBmb3IgKCB2YXIgaSA9IDAsIGwgPSBwb3NpdGlvbnMyLmxlbmd0aCAvIDM7IGkgPCBsOyBpICsrICkge1xuXG4gICAgICAgIHZlY3Rvci54ID0gcG9zaXRpb25zMlsgaSAqIDMgKyAwIF07XG4gICAgICAgIHZlY3Rvci55ID0gcG9zaXRpb25zMlsgaSAqIDMgKyAxIF07XG5cbiAgICAgICAgdmFyIGRvdCA9IHZlY3Rvci5kb3QoIHZlY3RvciApO1xuICAgICAgICB2YXIgc2NhbGFyID0gMS41ICsgKCBkaXN0b3J0aW9uLnggKyBkaXN0b3J0aW9uLnkgKiBkb3QgKSAqIGRvdDtcblxuICAgICAgICB2YXIgb2Zmc2V0ID0gaSA8IGxlbmd0aCA/IDAgOiAxO1xuXG4gICAgICAgIHBvc2l0aW9uczJbIGkgKiAzICsgMCBdID0gKCB2ZWN0b3IueCAvIHNjYWxhciApICogMS41IC0gMC41ICsgb2Zmc2V0O1xuICAgICAgICBwb3NpdGlvbnMyWyBpICogMyArIDEgXSA9ICggdmVjdG9yLnkgLyBzY2FsYXIgKSAqIDMuMDtcblxuICAgICAgICB1dnMyWyBpICogMiBdID0gKCB1dnMyWyBpICogMiBdICsgb2Zmc2V0ICkgKiAwLjU7XG5cbiAgICB9XG5cbiAgICBnZW9tZXRyeS5hdHRyaWJ1dGVzLnBvc2l0aW9uLmFycmF5ID0gcG9zaXRpb25zMjtcbiAgICBnZW9tZXRyeS5hdHRyaWJ1dGVzLnV2LmFycmF5ID0gdXZzMjtcblxuICAgIC8vXG5cbiAgICB2YXIgbWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoIHsgbWFwOiBfcmVuZGVyVGFyZ2V0LnRleHR1cmUgfSApO1xuICAgIHZhciBtZXNoID0gbmV3IFRIUkVFLk1lc2goIGdlb21ldHJ5LCBtYXRlcmlhbCApO1xuICAgIF9zY2VuZS5hZGQoIG1lc2ggKTtcblxuICAgIC8vXG5cbiAgICB0aGlzLnNldFNpemUgPSBmdW5jdGlvbiAoIHdpZHRoLCBoZWlnaHQgKSB7XG5cbiAgICAgICAgcmVuZGVyZXIuc2V0U2l6ZSggd2lkdGgsIGhlaWdodCApO1xuXG4gICAgICAgIHZhciBwaXhlbFJhdGlvID0gcmVuZGVyZXIuZ2V0UGl4ZWxSYXRpbygpO1xuXG4gICAgICAgIF9yZW5kZXJUYXJnZXQuc2V0U2l6ZSggd2lkdGggKiBwaXhlbFJhdGlvLCBoZWlnaHQgKiBwaXhlbFJhdGlvICk7XG5cbiAgICB9O1xuXG4gICAgdGhpcy5yZW5kZXIgPSBmdW5jdGlvbiAoIHNjZW5lLCBjYW1lcmEgKSB7XG5cbiAgICAgICAgc2NlbmUudXBkYXRlTWF0cml4V29ybGQoKTtcblxuICAgICAgICBpZiAoIGNhbWVyYS5wYXJlbnQgPT09IG51bGwgKSBjYW1lcmEudXBkYXRlTWF0cml4V29ybGQoKTtcblxuICAgICAgICBfc3RlcmVvLnVwZGF0ZSggY2FtZXJhICk7XG5cbiAgICAgICAgdmFyIHdpZHRoID0gX3JlbmRlclRhcmdldC53aWR0aCAvIDI7XG4gICAgICAgIHZhciBoZWlnaHQgPSBfcmVuZGVyVGFyZ2V0LmhlaWdodDtcblxuICAgICAgICBpZiAoIHJlbmRlcmVyLmF1dG9DbGVhciApIHJlbmRlcmVyLmNsZWFyKCk7XG5cbiAgICAgICAgX3JlbmRlclRhcmdldC5zY2lzc29yLnNldCggMCwgMCwgd2lkdGgsIGhlaWdodCApO1xuICAgICAgICBfcmVuZGVyVGFyZ2V0LnZpZXdwb3J0LnNldCggMCwgMCwgd2lkdGgsIGhlaWdodCApO1xuICAgICAgICByZW5kZXJlci5zZXRSZW5kZXJUYXJnZXQoIF9yZW5kZXJUYXJnZXQgKTtcbiAgICAgICAgcmVuZGVyZXIucmVuZGVyKCBzY2VuZSwgX3N0ZXJlby5jYW1lcmFMICk7XG5cbiAgICAgICAgcmVuZGVyZXIuY2xlYXJEZXB0aCgpO1xuXG4gICAgICAgIF9yZW5kZXJUYXJnZXQuc2Npc3Nvci5zZXQoIHdpZHRoLCAwLCB3aWR0aCwgaGVpZ2h0ICk7XG4gICAgICAgIF9yZW5kZXJUYXJnZXQudmlld3BvcnQuc2V0KCB3aWR0aCwgMCwgd2lkdGgsIGhlaWdodCApO1xuICAgICAgICByZW5kZXJlci5zZXRSZW5kZXJUYXJnZXQoIF9yZW5kZXJUYXJnZXQgKTtcbiAgICAgICAgcmVuZGVyZXIucmVuZGVyKCBzY2VuZSwgX3N0ZXJlby5jYW1lcmFSICk7XG5cbiAgICAgICAgcmVuZGVyZXIuY2xlYXJEZXB0aCgpO1xuXG4gICAgICAgIHJlbmRlcmVyLnNldFJlbmRlclRhcmdldCggbnVsbCApO1xuICAgICAgICByZW5kZXJlci5yZW5kZXIoIF9zY2VuZSwgX2NhbWVyYSApO1xuICAgIH07XG5cbn07XG5cbmV4cG9ydCB7IENhcmRib2FyZEVmZmVjdCB9OyIsImltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcblxuLyoqXG4gKiBAY2xhc3NkZXNjIFN0ZXJlbyBFZmZlY3QgQ29tcG9zZXJcbiAqIEBjb25zdHJ1Y3RvclxuICogQGV4dGVybmFsIFN0ZXJlb0VmZmVjdFxuICogQHBhcmFtIHtUSFJFRS5XZWJHTFJlbmRlcmVyfSByZW5kZXJlciBcbiAqL1xuY29uc3QgU3RlcmVvRWZmZWN0ID0gZnVuY3Rpb24gKCByZW5kZXJlciApIHtcblxuICAgIHZhciBfc3RlcmVvID0gbmV3IFRIUkVFLlN0ZXJlb0NhbWVyYSgpO1xuICAgIF9zdGVyZW8uYXNwZWN0ID0gMC41O1xuICAgIHZhciBzaXplID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcblxuICAgIHRoaXMuc2V0RXllU2VwYXJhdGlvbiA9IGZ1bmN0aW9uICggZXllU2VwICkge1xuXG4gICAgICAgIF9zdGVyZW8uZXllU2VwID0gZXllU2VwO1xuXG4gICAgfTtcblxuICAgIHRoaXMuc2V0U2l6ZSA9IGZ1bmN0aW9uICggd2lkdGgsIGhlaWdodCApIHtcblxuICAgICAgICByZW5kZXJlci5zZXRTaXplKCB3aWR0aCwgaGVpZ2h0ICk7XG5cbiAgICB9O1xuXG4gICAgdGhpcy5yZW5kZXIgPSBmdW5jdGlvbiAoIHNjZW5lLCBjYW1lcmEgKSB7XG5cbiAgICAgICAgc2NlbmUudXBkYXRlTWF0cml4V29ybGQoKTtcblxuICAgICAgICBpZiAoIGNhbWVyYS5wYXJlbnQgPT09IG51bGwgKSBjYW1lcmEudXBkYXRlTWF0cml4V29ybGQoKTtcblxuICAgICAgICBfc3RlcmVvLnVwZGF0ZSggY2FtZXJhICk7XG5cbiAgICAgICAgcmVuZGVyZXIuZ2V0U2l6ZSggc2l6ZSApO1xuXG4gICAgICAgIGlmICggcmVuZGVyZXIuYXV0b0NsZWFyICkgcmVuZGVyZXIuY2xlYXIoKTtcbiAgICAgICAgcmVuZGVyZXIuc2V0U2Npc3NvclRlc3QoIHRydWUgKTtcblxuICAgICAgICByZW5kZXJlci5zZXRTY2lzc29yKCAwLCAwLCBzaXplLndpZHRoIC8gMiwgc2l6ZS5oZWlnaHQgKTtcbiAgICAgICAgcmVuZGVyZXIuc2V0Vmlld3BvcnQoIDAsIDAsIHNpemUud2lkdGggLyAyLCBzaXplLmhlaWdodCApO1xuICAgICAgICByZW5kZXJlci5yZW5kZXIoIHNjZW5lLCBfc3RlcmVvLmNhbWVyYUwgKTtcblxuICAgICAgICByZW5kZXJlci5zZXRTY2lzc29yKCBzaXplLndpZHRoIC8gMiwgMCwgc2l6ZS53aWR0aCAvIDIsIHNpemUuaGVpZ2h0ICk7XG4gICAgICAgIHJlbmRlcmVyLnNldFZpZXdwb3J0KCBzaXplLndpZHRoIC8gMiwgMCwgc2l6ZS53aWR0aCAvIDIsIHNpemUuaGVpZ2h0ICk7XG4gICAgICAgIHJlbmRlcmVyLnJlbmRlciggc2NlbmUsIF9zdGVyZW8uY2FtZXJhUiApO1xuXG4gICAgICAgIHJlbmRlcmVyLnNldFNjaXNzb3JUZXN0KCBmYWxzZSApO1xuXG4gICAgfTtcblxufTtcblxuZXhwb3J0IHsgU3RlcmVvRWZmZWN0IH07IiwiaW1wb3J0IHsgTU9ERVMsIENPTlRST0xTIH0gZnJvbSAnLi4vQ29uc3RhbnRzJztcbmltcG9ydCB7IE9yYml0Q29udHJvbHMgfSBmcm9tICcuLi9saWIvY29udHJvbHMvT3JiaXRDb250cm9scyc7XG5pbXBvcnQgeyBEZXZpY2VPcmllbnRhdGlvbkNvbnRyb2xzIH0gZnJvbSAnLi4vbGliL2NvbnRyb2xzL0RldmljZU9yaWVudGF0aW9uQ29udHJvbHMnO1xuaW1wb3J0IHsgQ2FyZGJvYXJkRWZmZWN0IH0gZnJvbSAnLi4vbGliL2VmZmVjdHMvQ2FyZGJvYXJkRWZmZWN0JztcbmltcG9ydCB7IFN0ZXJlb0VmZmVjdCB9IGZyb20gJy4uL2xpYi9lZmZlY3RzL1N0ZXJlb0VmZmVjdCc7XG5pbXBvcnQgeyBXaWRnZXQgfSBmcm9tICcuLi93aWRnZXQvV2lkZ2V0JztcbmltcG9ydCB7IFJldGljbGUgfSBmcm9tICcuLi9pbnRlcmZhY2UvUmV0aWNsZSc7XG5pbXBvcnQgeyBJbmZvc3BvdCB9IGZyb20gJy4uL2luZm9zcG90L0luZm9zcG90JztcbmltcG9ydCB7IERhdGFJbWFnZSB9IGZyb20gJy4uL0RhdGFJbWFnZSc7XG5pbXBvcnQgeyBQYW5vcmFtYSB9IGZyb20gJy4uL3Bhbm9yYW1hL1Bhbm9yYW1hJztcbmltcG9ydCB7IFZpZGVvUGFub3JhbWEgfSBmcm9tICcuLi9wYW5vcmFtYS9WaWRlb1Bhbm9yYW1hJztcbmltcG9ydCB7IENhbWVyYVBhbm9yYW1hIH0gZnJvbSAnLi4vcGFub3JhbWEvQ2FtZXJhUGFub3JhbWEnO1xuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xuaW1wb3J0IFRXRUVOIGZyb20gJ0B0d2VlbmpzL3R3ZWVuLmpzJztcblxuLyoqXG4gKiBAY2xhc3NkZXNjIFZpZXdlciBjb250YWlucyBwcmUtZGVmaW5lZCBzY2VuZSwgY2FtZXJhIGFuZCByZW5kZXJlclxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdIC0gVXNlIGN1c3RvbSBvciBkZWZhdWx0IGNvbmZpZyBvcHRpb25zXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBbb3B0aW9ucy5jb250YWluZXJdIC0gQSBIVE1MRWxlbWVudCB0byBob3N0IHRoZSBjYW52YXNcbiAqIEBwYXJhbSB7VEhSRUUuU2NlbmV9IFtvcHRpb25zLnNjZW5lPVRIUkVFLlNjZW5lXSAtIEEgVEhSRUUuU2NlbmUgd2hpY2ggY29udGFpbnMgcGFub3JhbWEgYW5kIDNEIG9iamVjdHNcbiAqIEBwYXJhbSB7VEhSRUUuQ2FtZXJhfSBbb3B0aW9ucy5jYW1lcmE9VEhSRUUuUGVyc3BlY3RpdmVDYW1lcmFdIC0gQSBUSFJFRS5DYW1lcmEgdG8gdmlldyB0aGUgc2NlbmVcbiAqIEBwYXJhbSB7VEhSRUUuV2ViR0xSZW5kZXJlcn0gW29wdGlvbnMucmVuZGVyZXI9VEhSRUUuV2ViR0xSZW5kZXJlcl0gLSBBIFRIUkVFLldlYkdMUmVuZGVyZXIgdG8gcmVuZGVyIGNhbnZhc1xuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5jb250cm9sQmFyPXRydWVdIC0gU2hvdy9oaWRlIGNvbnRyb2wgYmFyIG9uIHRoZSBib3R0b20gb2YgdGhlIGNvbnRhaW5lclxuICogQHBhcmFtIHthcnJheX0gICBbb3B0aW9ucy5jb250cm9sQnV0dG9ucz1bXV0gLSBCdXR0b24gbmFtZXMgdG8gbW91bnQgb24gY29udHJvbEJhciBpZiBjb250cm9sQmFyIGV4aXN0cywgRGVmYXVsdHMgdG8gWydmdWxsc2NyZWVuJywgJ3NldHRpbmcnLCAndmlkZW8nXVxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5hdXRvSGlkZUNvbnRyb2xCYXI9ZmFsc2VdIC0gQXV0byBoaWRlIGNvbnRyb2wgYmFyIHdoZW4gY2xpY2sgb24gbm9uLWFjdGl2ZSBhcmVhXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmF1dG9IaWRlSW5mb3Nwb3Q9dHJ1ZV0gLSBBdXRvIGhpZGUgaW5mb3Nwb3RzIHdoZW4gY2xpY2sgb24gbm9uLWFjdGl2ZSBhcmVhXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmhvcml6b250YWxWaWV3PWZhbHNlXSAtIEFsbG93IG9ubHkgaG9yaXpvbnRhbCBjYW1lcmEgY29udHJvbFxuICogQHBhcmFtIHtudW1iZXJ9ICBbb3B0aW9ucy5jbGlja1RvbGVyYW5jZT0xMF0gLSBEaXN0YW5jZSB0b2xlcmFuY2UgdG8gdGlnZ2VyIGNsaWNrIC8gdGFwIGV2ZW50XG4gKiBAcGFyYW0ge251bWJlcn0gIFtvcHRpb25zLmNhbWVyYUZvdj02MF0gLSBDYW1lcmEgZmllbGQgb2YgdmlldyB2YWx1ZVxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5yZXZlcnNlRHJhZ2dpbmc9ZmFsc2VdIC0gUmV2ZXJzZSBkcmFnZ2luZyBkaXJlY3Rpb25cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMuZW5hYmxlUmV0aWNsZT1mYWxzZV0gLSBFbmFibGUgcmV0aWNsZSBmb3IgbW91c2VsZXNzIGludGVyYWN0aW9uIG90aGVyIHRoYW4gVlIgbW9kZVxuICogQHBhcmFtIHtudW1iZXJ9ICBbb3B0aW9ucy5kd2VsbFRpbWU9MTUwMF0gLSBEd2VsbCB0aW1lIGZvciByZXRpY2xlIHNlbGVjdGlvbiBpbiBtc1xuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5hdXRvUmV0aWNsZVNlbGVjdD10cnVlXSAtIEF1dG8gc2VsZWN0IGEgY2xpY2thYmxlIHRhcmdldCBhZnRlciBkd2VsbFRpbWVcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMudmlld0luZGljYXRvcj1mYWxzZV0gLSBBZGRzIGFuIGFuZ2xlIHZpZXcgaW5kaWNhdG9yIGluIHVwcGVyIGxlZnQgY29ybmVyXG4gKiBAcGFyYW0ge251bWJlcn0gIFtvcHRpb25zLmluZGljYXRvclNpemU9MzBdIC0gU2l6ZSBvZiBWaWV3IEluZGljYXRvclxuICogQHBhcmFtIHtzdHJpbmd9ICBbb3B0aW9ucy5vdXRwdXQ9J25vbmUnXSAtIFdoZXRoZXIgYW5kIHdoZXJlIHRvIG91dHB1dCByYXljYXN0IHBvc2l0aW9uLiBDb3VsZCBiZSAnY29uc29sZScgb3IgJ292ZXJsYXknXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmF1dG9Sb3RhdGU9ZmFsc2VdIC0gQXV0byByb3RhdGVcbiAqIEBwYXJhbSB7bnVtYmVyfSAgW29wdGlvbnMuYXV0b1JvdGF0ZVNwZWVkPTIuMF0gLSBBdXRvIHJvdGF0ZSBzcGVlZCBhcyBpbiBkZWdyZWUgcGVyIHNlY29uZC4gUG9zaXRpdmUgaXMgY291bnRlci1jbG9ja3dpc2UgYW5kIG5lZ2F0aXZlIGlzIGNsb2Nrd2lzZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSAgW29wdGlvbnMuYXV0b1JvdGF0ZUFjdGl2YXRpb25EdXJhdGlvbj01MDAwXSAtIER1cmF0aW9uIGJlZm9yZSBhdXRvIHJvdGF0YXRpb24gd2hlbiBubyB1c2VyIGludGVyYWN0aXZpdHkgaW4gbXNcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMuYXV0b0NlbnRyZT1mYWxzZV0gLSBBdXRvbWF0aWNhbGx5IGFsaWduIG5ldyBzY2VuZXMgdG8gdGhlIGN1cnJlbnQgZGlyZWN0aW9uIG9mIHRoZSB2aWV3ZXJcbiAqL1xuZnVuY3Rpb24gVmlld2VyICggb3B0aW9ucyApIHtcblxuICAgIGxldCBjb250YWluZXI7XG5cbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICBvcHRpb25zLmNvbnRyb2xCYXIgPSBvcHRpb25zLmNvbnRyb2xCYXIgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMuY29udHJvbEJhciA6IHRydWU7XG4gICAgb3B0aW9ucy5jb250cm9sQnV0dG9ucyA9IG9wdGlvbnMuY29udHJvbEJ1dHRvbnMgfHwgWyAnZnVsbHNjcmVlbicsICdzZXR0aW5nJywgJ3ZpZGVvJyBdO1xuICAgIG9wdGlvbnMuYXV0b0hpZGVDb250cm9sQmFyID0gb3B0aW9ucy5hdXRvSGlkZUNvbnRyb2xCYXIgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMuYXV0b0hpZGVDb250cm9sQmFyIDogZmFsc2U7XG4gICAgb3B0aW9ucy5hdXRvSGlkZUluZm9zcG90ID0gb3B0aW9ucy5hdXRvSGlkZUluZm9zcG90ICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLmF1dG9IaWRlSW5mb3Nwb3QgOiB0cnVlO1xuICAgIG9wdGlvbnMuaG9yaXpvbnRhbFZpZXcgPSBvcHRpb25zLmhvcml6b250YWxWaWV3ICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLmhvcml6b250YWxWaWV3IDogZmFsc2U7XG4gICAgb3B0aW9ucy5jbGlja1RvbGVyYW5jZSA9IG9wdGlvbnMuY2xpY2tUb2xlcmFuY2UgfHwgMTA7XG4gICAgb3B0aW9ucy5jYW1lcmFGb3YgPSBvcHRpb25zLmNhbWVyYUZvdiB8fCA2MDtcbiAgICBvcHRpb25zLnJldmVyc2VEcmFnZ2luZyA9IG9wdGlvbnMucmV2ZXJzZURyYWdnaW5nIHx8IGZhbHNlO1xuICAgIG9wdGlvbnMuZW5hYmxlUmV0aWNsZSA9IG9wdGlvbnMuZW5hYmxlUmV0aWNsZSB8fCBmYWxzZTtcbiAgICBvcHRpb25zLmR3ZWxsVGltZSA9IG9wdGlvbnMuZHdlbGxUaW1lIHx8IDE1MDA7XG4gICAgb3B0aW9ucy5hdXRvUmV0aWNsZVNlbGVjdCA9IG9wdGlvbnMuYXV0b1JldGljbGVTZWxlY3QgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMuYXV0b1JldGljbGVTZWxlY3QgOiB0cnVlO1xuICAgIG9wdGlvbnMudmlld0luZGljYXRvciA9IG9wdGlvbnMudmlld0luZGljYXRvciAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy52aWV3SW5kaWNhdG9yIDogZmFsc2U7XG4gICAgb3B0aW9ucy5pbmRpY2F0b3JTaXplID0gb3B0aW9ucy5pbmRpY2F0b3JTaXplIHx8IDMwO1xuICAgIG9wdGlvbnMub3V0cHV0ID0gb3B0aW9ucy5vdXRwdXQgPyBvcHRpb25zLm91dHB1dCA6ICdub25lJztcbiAgICBvcHRpb25zLmF1dG9Sb3RhdGUgPSBvcHRpb25zLmF1dG9Sb3RhdGUgfHwgZmFsc2U7XG4gICAgb3B0aW9ucy5hdXRvUm90YXRlU3BlZWQgPSBvcHRpb25zLmF1dG9Sb3RhdGVTcGVlZCB8fCAyLjA7XG4gICAgb3B0aW9ucy5hdXRvUm90YXRlQWN0aXZhdGlvbkR1cmF0aW9uID0gb3B0aW9ucy5hdXRvUm90YXRlQWN0aXZhdGlvbkR1cmF0aW9uIHx8IDUwMDA7XG4gICAgb3B0aW9ucy5hdXRvQ2VudHJlID0gb3B0aW9ucy5hdXRvQ2VudHJlIHx8IGZhbHNlO1xuXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcblxuICAgIC8qXG4gICAgICogQ1NTIEljb25cbiAgICAgKiBjb25zdCBzdHlsZUxvYWRlciA9IG5ldyBTdHlsZUxvYWRlcigpO1xuICAgICAqIHN0eWxlTG9hZGVyLmluamVjdCggJ2ljb25vJyApO1xuICAgICAqL1xuXG4gICAgLy8gQ29udGFpbmVyXG4gICAgaWYgKCBvcHRpb25zLmNvbnRhaW5lciApIHtcblxuICAgICAgICBjb250YWluZXIgPSBvcHRpb25zLmNvbnRhaW5lcjtcbiAgICAgICAgY29udGFpbmVyLl93aWR0aCA9IGNvbnRhaW5lci5jbGllbnRXaWR0aDtcbiAgICAgICAgY29udGFpbmVyLl9oZWlnaHQgPSBjb250YWluZXIuY2xpZW50SGVpZ2h0O1xuXG4gICAgfSBlbHNlIHtcblxuICAgICAgICBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnZGl2JyApO1xuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCggJ3Bhbm9sZW5zLWNvbnRhaW5lcicgKTtcbiAgICAgICAgY29udGFpbmVyLnN0eWxlLndpZHRoID0gJzEwMCUnO1xuICAgICAgICBjb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gJzEwMCUnO1xuICAgICAgICBjb250YWluZXIuX3dpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgIGNvbnRhaW5lci5faGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKCBjb250YWluZXIgKTtcblxuICAgIH1cblxuICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xuXG4gICAgdGhpcy5jYW1lcmEgPSBvcHRpb25zLmNhbWVyYSB8fCBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoIHRoaXMub3B0aW9ucy5jYW1lcmFGb3YsIHRoaXMuY29udGFpbmVyLmNsaWVudFdpZHRoIC8gdGhpcy5jb250YWluZXIuY2xpZW50SGVpZ2h0LCAxLCAxMDAwMCApO1xuICAgIHRoaXMuc2NlbmUgPSBvcHRpb25zLnNjZW5lIHx8IG5ldyBUSFJFRS5TY2VuZSgpO1xuICAgIHRoaXMucmVuZGVyZXIgPSBvcHRpb25zLnJlbmRlcmVyIHx8IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKCB7IGFscGhhOiB0cnVlLCBhbnRpYWxpYXM6IGZhbHNlIH0gKTtcbiAgICB0aGlzLnNjZW5lUmV0aWNsZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xuXG4gICAgdGhpcy52aWV3SW5kaWNhdG9yU2l6ZSA9IHRoaXMub3B0aW9ucy5pbmRpY2F0b3JTaXplO1xuXG4gICAgdGhpcy5yZXRpY2xlID0ge307XG4gICAgdGhpcy50ZW1wRW5hYmxlUmV0aWNsZSA9IHRoaXMub3B0aW9ucy5lbmFibGVSZXRpY2xlO1xuXG4gICAgdGhpcy5tb2RlID0gTU9ERVMuTk9STUFMO1xuXG4gICAgdGhpcy5wYW5vcmFtYSA9IG51bGw7XG4gICAgdGhpcy53aWRnZXQgPSBudWxsO1xuXG4gICAgdGhpcy5ob3Zlck9iamVjdCA9IG51bGw7XG4gICAgdGhpcy5pbmZvc3BvdCA9IG51bGw7XG4gICAgdGhpcy5wcmVzc0VudGl0eU9iamVjdCA9IG51bGw7XG4gICAgdGhpcy5wcmVzc09iamVjdCA9IG51bGw7XG5cbiAgICB0aGlzLnJheWNhc3RlciA9IG5ldyBUSFJFRS5SYXljYXN0ZXIoKTtcbiAgICB0aGlzLnJheWNhc3RlclBvaW50ID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcbiAgICB0aGlzLnVzZXJNb3VzZSA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG4gICAgdGhpcy51cGRhdGVDYWxsYmFja3MgPSBbXTtcbiAgICB0aGlzLnJlcXVlc3RBbmltYXRpb25JZCA9IG51bGw7XG5cbiAgICB0aGlzLmNhbWVyYUZydXN0dW0gPSBuZXcgVEhSRUUuRnJ1c3R1bSgpO1xuICAgIHRoaXMuY2FtZXJhVmlld1Byb2plY3Rpb25NYXRyaXggPSBuZXcgVEhSRUUuTWF0cml4NCgpO1xuXG4gICAgdGhpcy5hdXRvUm90YXRlUmVxdWVzdElkID0gbnVsbDtcblxuICAgIHRoaXMub3V0cHV0RGl2RWxlbWVudCA9IG51bGw7XG5cbiAgICB0aGlzLnRvdWNoU3VwcG9ydGVkID0gJ29udG91Y2hzdGFydCcgaW4gd2luZG93IHx8IHdpbmRvdy5Eb2N1bWVudFRvdWNoICYmIGRvY3VtZW50IGluc3RhbmNlb2YgRG9jdW1lbnRUb3VjaDtcblxuICAgIC8vIEhhbmRsZXIgcmVmZXJlbmNlc1xuICAgIHRoaXMuSEFORExFUl9NT1VTRV9ET1dOID0gdGhpcy5vbk1vdXNlRG93bi5iaW5kKCB0aGlzICk7XG4gICAgdGhpcy5IQU5ETEVSX01PVVNFX1VQID0gdGhpcy5vbk1vdXNlVXAuYmluZCggdGhpcyApO1xuICAgIHRoaXMuSEFORExFUl9NT1VTRV9NT1ZFID0gdGhpcy5vbk1vdXNlTW92ZS5iaW5kKCB0aGlzICk7XG4gICAgdGhpcy5IQU5ETEVSX1dJTkRPV19SRVNJWkUgPSB0aGlzLm9uV2luZG93UmVzaXplLmJpbmQoIHRoaXMgKTtcbiAgICB0aGlzLkhBTkRMRVJfS0VZX0RPV04gPSB0aGlzLm9uS2V5RG93bi5iaW5kKCB0aGlzICk7XG4gICAgdGhpcy5IQU5ETEVSX0tFWV9VUCA9IHRoaXMub25LZXlVcC5iaW5kKCB0aGlzICk7XG4gICAgdGhpcy5IQU5ETEVSX1RBUCA9IHRoaXMub25UYXAuYmluZCggdGhpcywge1xuICAgICAgICBjbGllbnRYOiB0aGlzLmNvbnRhaW5lci5jbGllbnRXaWR0aCAvIDIsXG4gICAgICAgIGNsaWVudFk6IHRoaXMuY29udGFpbmVyLmNsaWVudEhlaWdodCAvIDJcbiAgICB9ICk7XG5cbiAgICAvLyBGbGFnIGZvciBpbmZvc3BvdCBvdXRwdXRcbiAgICB0aGlzLk9VVFBVVF9JTkZPU1BPVCA9IGZhbHNlO1xuXG4gICAgLy8gQW5pbWF0aW9uc1xuICAgIHRoaXMudHdlZW5MZWZ0QW5pbWF0aW9uID0gbmV3IFRXRUVOLlR3ZWVuKCk7XG4gICAgdGhpcy50d2VlblVwQW5pbWF0aW9uID0gbmV3IFRXRUVOLlR3ZWVuKCk7XG5cbiAgICAvLyBSZW5kZXJlclxuICAgIHRoaXMucmVuZGVyZXIuc2V0UGl4ZWxSYXRpbyggd2luZG93LmRldmljZVBpeGVsUmF0aW8gKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFNpemUoIHRoaXMuY29udGFpbmVyLmNsaWVudFdpZHRoLCB0aGlzLmNvbnRhaW5lci5jbGllbnRIZWlnaHQgKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldENsZWFyQ29sb3IoIDB4MDAwMDAwLCAwICk7XG4gICAgdGhpcy5yZW5kZXJlci5hdXRvQ2xlYXIgPSBmYWxzZTtcblxuICAgIC8vIEFwcGVuZCBSZW5kZXJlciBFbGVtZW50IHRvIGNvbnRhaW5lclxuICAgIHRoaXMucmVuZGVyZXIuZG9tRWxlbWVudC5jbGFzc0xpc3QuYWRkKCAncGFub2xlbnMtY2FudmFzJyApO1xuICAgIHRoaXMucmVuZGVyZXIuZG9tRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzAwMCc7XG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQoIHRoaXMucmVuZGVyZXIuZG9tRWxlbWVudCApO1xuXG4gICAgLy8gQ2FtZXJhIENvbnRyb2xzXG4gICAgdGhpcy5PcmJpdENvbnRyb2xzID0gbmV3IE9yYml0Q29udHJvbHMoIHRoaXMuY2FtZXJhLCB0aGlzLmNvbnRhaW5lciApO1xuICAgIHRoaXMuT3JiaXRDb250cm9scy5pZCA9ICdvcmJpdCc7XG4gICAgdGhpcy5PcmJpdENvbnRyb2xzLm1pbkRpc3RhbmNlID0gMTtcbiAgICB0aGlzLk9yYml0Q29udHJvbHMubm9QYW4gPSB0cnVlO1xuICAgIHRoaXMuT3JiaXRDb250cm9scy5hdXRvUm90YXRlID0gdGhpcy5vcHRpb25zLmF1dG9Sb3RhdGU7XG4gICAgdGhpcy5PcmJpdENvbnRyb2xzLmF1dG9Sb3RhdGVTcGVlZCA9IHRoaXMub3B0aW9ucy5hdXRvUm90YXRlU3BlZWQ7XG5cbiAgICB0aGlzLkRldmljZU9yaWVudGF0aW9uQ29udHJvbHMgPSBuZXcgRGV2aWNlT3JpZW50YXRpb25Db250cm9scyggdGhpcy5jYW1lcmEsIHRoaXMuY29udGFpbmVyICk7XG4gICAgdGhpcy5EZXZpY2VPcmllbnRhdGlvbkNvbnRyb2xzLmlkID0gJ2RldmljZS1vcmllbnRhdGlvbic7XG4gICAgdGhpcy5EZXZpY2VPcmllbnRhdGlvbkNvbnRyb2xzLmVuYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi56ID0gMTtcblxuICAgIC8vIFJlZ2lzdGVyIGNoYW5nZSBldmVudCBpZiBwYXNzaXZlUmVuZXJpbmdcbiAgICBpZiAoIHRoaXMub3B0aW9ucy5wYXNzaXZlUmVuZGVyaW5nICkge1xuXG4gICAgICAgIGNvbnNvbGUud2FybiggJ3Bhc3NpdmVSZW5kZXJpbmcgaXMgbm93IGRlcHJlY2F0ZWQnICk7XG5cbiAgICB9XG5cbiAgICAvLyBDb250cm9sc1xuICAgIHRoaXMuY29udHJvbHMgPSBbIHRoaXMuT3JiaXRDb250cm9scywgdGhpcy5EZXZpY2VPcmllbnRhdGlvbkNvbnRyb2xzIF07XG4gICAgdGhpcy5jb250cm9sID0gdGhpcy5PcmJpdENvbnRyb2xzO1xuXG4gICAgLy8gQ2FyZGJvYXJkIGVmZmVjdFxuICAgIHRoaXMuQ2FyZGJvYXJkRWZmZWN0ID0gbmV3IENhcmRib2FyZEVmZmVjdCggdGhpcy5yZW5kZXJlciApO1xuICAgIHRoaXMuQ2FyZGJvYXJkRWZmZWN0LnNldFNpemUoIHRoaXMuY29udGFpbmVyLmNsaWVudFdpZHRoLCB0aGlzLmNvbnRhaW5lci5jbGllbnRIZWlnaHQgKTtcblxuICAgIC8vIFN0ZXJlbyBlZmZlY3RcbiAgICB0aGlzLlN0ZXJlb0VmZmVjdCA9IG5ldyBTdGVyZW9FZmZlY3QoIHRoaXMucmVuZGVyZXIgKTtcbiAgICB0aGlzLlN0ZXJlb0VmZmVjdC5zZXRTaXplKCB0aGlzLmNvbnRhaW5lci5jbGllbnRXaWR0aCwgdGhpcy5jb250YWluZXIuY2xpZW50SGVpZ2h0ICk7XG5cbiAgICB0aGlzLmVmZmVjdCA9IHRoaXMuQ2FyZGJvYXJkRWZmZWN0O1xuXG4gICAgLy8gQWRkIGRlZmF1bHQgaGlkZGVuIHJldGljbGVcbiAgICB0aGlzLmFkZFJldGljbGUoKTtcblxuICAgIC8vIExvY2sgaG9yaXpvbnRhbCB2aWV3XG4gICAgaWYgKCB0aGlzLm9wdGlvbnMuaG9yaXpvbnRhbFZpZXcgKSB7XG4gICAgICAgIHRoaXMuT3JiaXRDb250cm9scy5taW5Qb2xhckFuZ2xlID0gTWF0aC5QSSAvIDI7XG4gICAgICAgIHRoaXMuT3JiaXRDb250cm9scy5tYXhQb2xhckFuZ2xlID0gTWF0aC5QSSAvIDI7XG4gICAgfVxuXG4gICAgLy8gQWRkIENvbnRyb2wgVUlcbiAgICBpZiAoIHRoaXMub3B0aW9ucy5jb250cm9sQmFyICE9PSBmYWxzZSApIHtcbiAgICAgICAgdGhpcy5hZGREZWZhdWx0Q29udHJvbEJhciggdGhpcy5vcHRpb25zLmNvbnRyb2xCdXR0b25zICk7XG4gICAgfVxuXG4gICAgLy8gQWRkIFZpZXcgSW5kaWNhdG9yXG4gICAgaWYgKCB0aGlzLm9wdGlvbnMudmlld0luZGljYXRvciApIHtcbiAgICAgICAgdGhpcy5hZGRWaWV3SW5kaWNhdG9yKCk7XG4gICAgfVxuXG4gICAgLy8gUmV2ZXJzZSBkcmFnZ2luZyBkaXJlY3Rpb25cbiAgICBpZiAoIHRoaXMub3B0aW9ucy5yZXZlcnNlRHJhZ2dpbmcgKSB7XG4gICAgICAgIHRoaXMucmV2ZXJzZURyYWdnaW5nRGlyZWN0aW9uKCk7XG4gICAgfVxuXG4gICAgLy8gUmVnaXN0ZXIgZXZlbnQgaWYgcmV0aWNsZSBpcyBlbmFibGVkLCBvdGhlcndpc2UgZGVmYXVsdHMgdG8gbW91c2VcbiAgICBpZiAoIHRoaXMub3B0aW9ucy5lbmFibGVSZXRpY2xlICkge1xuICAgICAgICB0aGlzLmVuYWJsZVJldGljbGVDb250cm9sKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5yZWdpc3Rlck1vdXNlQW5kVG91Y2hFdmVudHMoKTtcbiAgICB9XG5cbiAgICAvLyBPdXRwdXQgaW5mb3Nwb3QgcG9zaXRpb24gdG8gYW4gb3ZlcmxheSBjb250YWluZXIgaWYgc3BlY2lmaWVkXG4gICAgaWYgKCB0aGlzLm9wdGlvbnMub3V0cHV0ID09PSAnb3ZlcmxheScgKSB7XG4gICAgICAgIHRoaXMuYWRkT3V0cHV0RWxlbWVudCgpO1xuICAgIH1cblxuICAgIC8vIFJlZ2lzdGVyIGRvbSBldmVudCBsaXN0ZW5lcnNcbiAgICB0aGlzLnJlZ2lzdGVyRXZlbnRMaXN0ZW5lcnMoKTtcblxuICAgIC8vIEFuaW1hdGVcbiAgICB0aGlzLmFuaW1hdGUuY2FsbCggdGhpcyApO1xuXG59O1xuXG5WaWV3ZXIucHJvdG90eXBlID0gT2JqZWN0LmFzc2lnbiggT2JqZWN0LmNyZWF0ZSggVEhSRUUuRXZlbnREaXNwYXRjaGVyLnByb3RvdHlwZSApLCB7XG5cbiAgICBjb25zdHJ1Y3RvcjogVmlld2VyLFxuXG4gICAgLyoqXG4gICAgICogQWRkIGFuIG9iamVjdCB0byB0aGUgc2NlbmVcbiAgICAgKiBBdXRvbWF0aWNhbGx5IGhvb2t1cCB3aXRoIHBhbm9sZW5zLXZpZXdlci1oYW5kbGVyIGxpc3RlbmVyXG4gICAgICogdG8gY29tbXVuaWNhdGUgd2l0aCB2aWV3ZXIgbWV0aG9kXG4gICAgICogQHBhcmFtIHtUSFJFRS5PYmplY3QzRH0gb2JqZWN0IC0gVGhlIG9iamVjdCB0byBiZSBhZGRlZFxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBhZGQ6IGZ1bmN0aW9uICggb2JqZWN0ICkge1xuXG4gICAgICAgIGlmICggYXJndW1lbnRzLmxlbmd0aCA+IDEgKSB7XG5cbiAgICAgICAgICAgIGZvciAoIGxldCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkgKysgKSB7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmFkZCggYXJndW1lbnRzWyBpIF0gKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zY2VuZS5hZGQoIG9iamVjdCApO1xuXG4gICAgICAgIC8vIEFsbCBvYmplY3QgYWRkZWQgdG8gc2NlbmUgaGFzICdwYW5vbGVucy12aWV3ZXItaGFuZGxlcicgZXZlbnQgdG8gaGFuZGxlIHZpZXdlciBjb21tdW5pY2F0aW9uXG4gICAgICAgIGlmICggb2JqZWN0LmFkZEV2ZW50TGlzdGVuZXIgKSB7XG5cbiAgICAgICAgICAgIG9iamVjdC5hZGRFdmVudExpc3RlbmVyKCAncGFub2xlbnMtdmlld2VyLWhhbmRsZXInLCB0aGlzLmV2ZW50SGFuZGxlci5iaW5kKCB0aGlzICkgKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgLy8gQWxsIG9iamVjdCBhZGRlZCB0byBzY2VuZSBiZWluZyBwYXNzZWQgd2l0aCBjb250YWluZXJcbiAgICAgICAgaWYgKCBvYmplY3QgaW5zdGFuY2VvZiBQYW5vcmFtYSAmJiBvYmplY3QuZGlzcGF0Y2hFdmVudCApIHtcblxuICAgICAgICAgICAgb2JqZWN0LmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ3Bhbm9sZW5zLWNvbnRhaW5lcicsIGNvbnRhaW5lcjogdGhpcy5jb250YWluZXIgfSApO1xuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIG9iamVjdCBpbnN0YW5jZW9mIENhbWVyYVBhbm9yYW1hICkge1xuXG4gICAgICAgICAgICBvYmplY3QuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAncGFub2xlbnMtc2NlbmUnLCBzY2VuZTogdGhpcy5zY2VuZSB9ICk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEhvb2t1cCBkZWZhdWx0IHBhbm9yYW1hIGV2ZW50IGxpc3RlbmVyc1xuICAgICAgICBpZiAoIG9iamVjdC50eXBlID09PSAncGFub3JhbWEnICkge1xuXG4gICAgICAgICAgICB0aGlzLmFkZFBhbm9yYW1hRXZlbnRMaXN0ZW5lciggb2JqZWN0ICk7XG5cbiAgICAgICAgICAgIGlmICggIXRoaXMucGFub3JhbWEgKSB7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnNldFBhbm9yYW1hKCBvYmplY3QgKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgYW4gb2JqZWN0IGZyb20gdGhlIHNjZW5lXG4gICAgICogQHBhcmFtICB7VEhSRUUuT2JqZWN0M0R9IG9iamVjdCAtIE9iamVjdCB0byBiZSByZW1vdmVkXG4gICAgICogQG1lbWJlck9mIFZpZXdlclxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIHJlbW92ZTogZnVuY3Rpb24gKCBvYmplY3QgKSB7XG5cbiAgICAgICAgaWYgKCBvYmplY3QucmVtb3ZlRXZlbnRMaXN0ZW5lciApIHtcblxuICAgICAgICAgICAgb2JqZWN0LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdwYW5vbGVucy12aWV3ZXItaGFuZGxlcicsIHRoaXMuZXZlbnRIYW5kbGVyLmJpbmQoIHRoaXMgKSApO1xuXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNjZW5lLnJlbW92ZSggb2JqZWN0ICk7XG5cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQWRkIGRlZmF1bHQgY29udHJvbCBiYXJcbiAgICAgKiBAcGFyYW0ge2FycmF5fSBhcnJheSAtIFRoZSBjb250cm9sIGJ1dHRvbnMgYXJyYXlcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgYWRkRGVmYXVsdENvbnRyb2xCYXI6IGZ1bmN0aW9uICggYXJyYXkgKSB7XG5cbiAgICAgICAgaWYgKCB0aGlzLndpZGdldCApIHtcblxuICAgICAgICAgICAgY29uc29sZS53YXJuKCAnRGVmYXVsdCBjb250cm9sIGJhciBleGlzdHMnICk7XG4gICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHdpZGdldCA9IG5ldyBXaWRnZXQoIHRoaXMuY29udGFpbmVyICk7XG4gICAgICAgIHdpZGdldC5hZGRFdmVudExpc3RlbmVyKCAncGFub2xlbnMtdmlld2VyLWhhbmRsZXInLCB0aGlzLmV2ZW50SGFuZGxlci5iaW5kKCB0aGlzICkgKTtcbiAgICAgICAgd2lkZ2V0LmFkZENvbnRyb2xCYXIoKTtcbiAgICAgICAgYXJyYXkuZm9yRWFjaCggYnV0dG9uTmFtZSA9PiB7XG5cbiAgICAgICAgICAgIHdpZGdldC5hZGRDb250cm9sQnV0dG9uKCBidXR0b25OYW1lICk7XG5cbiAgICAgICAgfSApO1xuXG4gICAgICAgIHRoaXMud2lkZ2V0ID0gd2lkZ2V0O1xuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNldCBhIHBhbm9yYW1hIHRvIGJlIHRoZSBjdXJyZW50IG9uZVxuICAgICAqIEBwYXJhbSB7UGFub3JhbWF9IHBhbm8gLSBQYW5vcmFtYSB0byBiZSBzZXRcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgc2V0UGFub3JhbWE6IGZ1bmN0aW9uICggcGFubyApIHtcblxuICAgICAgICBjb25zdCBsZWF2aW5nUGFub3JhbWEgPSB0aGlzLnBhbm9yYW1hO1xuXG4gICAgICAgIGlmICggcGFuby50eXBlID09PSAncGFub3JhbWEnICYmIGxlYXZpbmdQYW5vcmFtYSAhPT0gcGFubyApIHtcblxuICAgICAgICAgICAgLy8gQ2xlYXIgZXhpc2l0aW5nIGluZm9zcG90XG4gICAgICAgICAgICB0aGlzLmhpZGVJbmZvc3BvdCgpO1xuXG4gICAgICAgICAgICBjb25zdCBhZnRlckVudGVyQ29tcGxldGUgPSAoKSA9PiB7XG5cbiAgICAgICAgICAgICAgICBpZiAoIGxlYXZpbmdQYW5vcmFtYSApIHsgbGVhdmluZ1Bhbm9yYW1hLm9uTGVhdmUoKTsgfVxuICAgICAgICAgICAgICAgIHBhbm8ucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ2VudGVyLWZhZGUtc3RhcnQnLCBhZnRlckVudGVyQ29tcGxldGUgKTtcblxuICAgICAgICAgICAgICAgIGlmICggdGhpcy5vcHRpb25zLmF1dG9DZW50cmUgKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jZW50cmVBY3RpdmVQYW5vcmFtYSgpO1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBwYW5vLmFkZEV2ZW50TGlzdGVuZXIoICdlbnRlci1mYWRlLXN0YXJ0JywgYWZ0ZXJFbnRlckNvbXBsZXRlICk7XG5cbiAgICAgICAgICAgIC8vIEFzc2lnbiBhbmQgZW50ZXIgcGFub3JhbWFcbiAgICAgICAgICAgICh0aGlzLnBhbm9yYW1hID0gcGFubykub25FbnRlcigpO1xuXHRcdFx0XG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBFdmVudCBoYW5kbGVyIHRvIGV4ZWN1dGUgY29tbWFuZHMgZnJvbSBjaGlsZCBvYmplY3RzXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGV2ZW50IC0gVGhlIGRpc3BhdGNoZWQgZXZlbnQgd2l0aCBtZXRob2QgYXMgZnVuY3Rpb24gbmFtZSBhbmQgZGF0YSBhcyBhbiBhcmd1bWVudFxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBldmVudEhhbmRsZXI6IGZ1bmN0aW9uICggZXZlbnQgKSB7XG5cbiAgICAgICAgaWYgKCBldmVudC5tZXRob2QgJiYgdGhpc1sgZXZlbnQubWV0aG9kIF0gKSB7XG5cbiAgICAgICAgICAgIHRoaXNbIGV2ZW50Lm1ldGhvZCBdKCBldmVudC5kYXRhICk7XG5cbiAgICAgICAgfVxuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIERpc3BhdGNoIGV2ZW50IHRvIGFsbCBkZXNjZW5kYW50c1xuICAgICAqIEBwYXJhbSAge29iamVjdH0gZXZlbnQgLSBFdmVudCB0byBiZSBwYXNzZWQgYWxvbmdcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgZGlzcGF0Y2hFdmVudFRvQ2hpbGRyZW46IGZ1bmN0aW9uICggZXZlbnQgKSB7XG5cbiAgICAgICAgdGhpcy5zY2VuZS50cmF2ZXJzZSggZnVuY3Rpb24gKCBvYmplY3QgKSB7XG5cbiAgICAgICAgICAgIGlmICggb2JqZWN0LmRpc3BhdGNoRXZlbnQgKSB7XG5cbiAgICAgICAgICAgICAgICBvYmplY3QuZGlzcGF0Y2hFdmVudCggZXZlbnQgKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNldCB3aWRnZXQgY29udGVudFxuICAgICAqIEBtZXRob2QgYWN0aXZhdGVXaWRnZXRJdGVtXG4gICAgICogQHBhcmFtICB7aW50ZWdlcn0gY29udHJvbEluZGV4IC0gQ29udHJvbCBpbmRleFxuICAgICAqIEBwYXJhbSAge2ludGVnZXJ9IG1vZGUgLSBNb2RlcyBmb3IgZWZmZWN0c1xuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBhY3RpdmF0ZVdpZGdldEl0ZW06IGZ1bmN0aW9uICggY29udHJvbEluZGV4LCBtb2RlICkge1xuXG4gICAgICAgIGNvbnN0IG1haW5NZW51ID0gdGhpcy53aWRnZXQubWFpbk1lbnU7XG4gICAgICAgIGNvbnN0IENvbnRyb2xNZW51SXRlbSA9IG1haW5NZW51LmNoaWxkcmVuWyAwIF07XG4gICAgICAgIGNvbnN0IE1vZGVNZW51SXRlbSA9IG1haW5NZW51LmNoaWxkcmVuWyAxIF07XG5cbiAgICAgICAgbGV0IGl0ZW07XG5cbiAgICAgICAgaWYgKCBjb250cm9sSW5kZXggIT09IHVuZGVmaW5lZCApIHtcblxuICAgICAgICAgICAgc3dpdGNoICggY29udHJvbEluZGV4ICkge1xuXG4gICAgICAgICAgICBjYXNlIDA6XG5cbiAgICAgICAgICAgICAgICBpdGVtID0gQ29udHJvbE1lbnVJdGVtLnN1Yk1lbnUuY2hpbGRyZW5bIDEgXTtcblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDE6XG5cbiAgICAgICAgICAgICAgICBpdGVtID0gQ29udHJvbE1lbnVJdGVtLnN1Yk1lbnUuY2hpbGRyZW5bIDIgXTtcblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXHRcdFx0XHRcdFxuICAgICAgICAgICAgZGVmYXVsdDpcblxuICAgICAgICAgICAgICAgIGl0ZW0gPSBDb250cm9sTWVudUl0ZW0uc3ViTWVudS5jaGlsZHJlblsgMSBdO1xuXG4gICAgICAgICAgICAgICAgYnJlYWs7XHRcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBDb250cm9sTWVudUl0ZW0uc3ViTWVudS5zZXRBY3RpdmVJdGVtKCBpdGVtICk7XG4gICAgICAgICAgICBDb250cm9sTWVudUl0ZW0uc2V0U2VsZWN0aW9uVGl0bGUoIGl0ZW0udGV4dENvbnRlbnQgKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCBtb2RlICE9PSB1bmRlZmluZWQgKSB7XG5cbiAgICAgICAgICAgIHN3aXRjaCggbW9kZSApIHtcblxuICAgICAgICAgICAgY2FzZSBNT0RFUy5DQVJEQk9BUkQ6XG5cbiAgICAgICAgICAgICAgICBpdGVtID0gTW9kZU1lbnVJdGVtLnN1Yk1lbnUuY2hpbGRyZW5bIDIgXTtcblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIE1PREVTLlNURVJFTzpcblxuICAgICAgICAgICAgICAgIGl0ZW0gPSBNb2RlTWVudUl0ZW0uc3ViTWVudS5jaGlsZHJlblsgMyBdO1xuXHRcdFx0XHRcdFxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBkZWZhdWx0OlxuXG4gICAgICAgICAgICAgICAgaXRlbSA9IE1vZGVNZW51SXRlbS5zdWJNZW51LmNoaWxkcmVuWyAxIF07XG5cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgTW9kZU1lbnVJdGVtLnN1Yk1lbnUuc2V0QWN0aXZlSXRlbSggaXRlbSApO1xuICAgICAgICAgICAgTW9kZU1lbnVJdGVtLnNldFNlbGVjdGlvblRpdGxlKCBpdGVtLnRleHRDb250ZW50ICk7XG5cbiAgICAgICAgfVxuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEVuYWJsZSByZW5kZXJpbmcgZWZmZWN0XG4gICAgICogQHBhcmFtICB7TU9ERVN9IG1vZGUgLSBNb2RlcyBmb3IgZWZmZWN0c1xuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBlbmFibGVFZmZlY3Q6IGZ1bmN0aW9uICggbW9kZSApIHtcblxuICAgICAgICBpZiAoIHRoaXMubW9kZSA9PT0gbW9kZSApIHsgcmV0dXJuOyB9XG4gICAgICAgIGlmICggbW9kZSA9PT0gTU9ERVMuTk9STUFMICkgeyB0aGlzLmRpc2FibGVFZmZlY3QoKTsgcmV0dXJuOyB9XG4gICAgICAgIGVsc2UgeyB0aGlzLm1vZGUgPSBtb2RlOyB9XG5cbiAgICAgICAgY29uc3QgZm92ID0gdGhpcy5jYW1lcmEuZm92O1xuXG4gICAgICAgIHN3aXRjaCggbW9kZSApIHtcblxuICAgICAgICBjYXNlIE1PREVTLkNBUkRCT0FSRDpcblxuICAgICAgICAgICAgdGhpcy5lZmZlY3QgPSB0aGlzLkNhcmRib2FyZEVmZmVjdDtcbiAgICAgICAgICAgIHRoaXMuZW5hYmxlUmV0aWNsZUNvbnRyb2woKTtcblxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBNT0RFUy5TVEVSRU86XG5cbiAgICAgICAgICAgIHRoaXMuZWZmZWN0ID0gdGhpcy5TdGVyZW9FZmZlY3Q7XG4gICAgICAgICAgICB0aGlzLmVuYWJsZVJldGljbGVDb250cm9sKCk7XG5cdFx0XHRcdFxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcblxuICAgICAgICAgICAgdGhpcy5lZmZlY3QgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5kaXNhYmxlUmV0aWNsZUNvbnRyb2woKTtcblxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYWN0aXZhdGVXaWRnZXRJdGVtKCB1bmRlZmluZWQsIHRoaXMubW9kZSApO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEdWFsIGV5ZSBlZmZlY3QgZXZlbnRcbiAgICAgICAgICogQHR5cGUge29iamVjdH1cbiAgICAgICAgICogQGV2ZW50IEluZm9zcG90I3Bhbm9sZW5zLWR1YWwtZXllLWVmZmVjdFxuICAgICAgICAgKiBAcHJvcGVydHkge01PREVTfSBtb2RlIC0gQ3VycmVudCBkaXNwbGF5IG1vZGVcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudFRvQ2hpbGRyZW4oIHsgdHlwZTogJ3Bhbm9sZW5zLWR1YWwtZXllLWVmZmVjdCcsIG1vZGU6IHRoaXMubW9kZSB9ICk7XG5cbiAgICAgICAgLy8gRm9yY2UgZWZmZWN0IHN0ZXJlbyBjYW1lcmEgdG8gdXBkYXRlIGJ5IHJlZnJlc2hpbmcgZm92XG4gICAgICAgIHRoaXMuY2FtZXJhLmZvdiA9IGZvdiArIDEwZS0zO1xuICAgICAgICB0aGlzLmVmZmVjdC5zZXRTaXplKCB0aGlzLmNvbnRhaW5lci5jbGllbnRXaWR0aCwgdGhpcy5jb250YWluZXIuY2xpZW50SGVpZ2h0ICk7XG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIHRoaXMuY2FtZXJhLmZvdiA9IGZvdjtcblxuICAgICAgICAvKipcbiAgICAgICAgICogRGlzcGF0Y2ggbW9kZSBjaGFuZ2UgZXZlbnRcbiAgICAgICAgICogQHR5cGUge29iamVjdH1cbiAgICAgICAgICogQGV2ZW50IFZpZXdlciNtb2RlLWNoYW5nZVxuICAgICAgICAgKiBAcHJvcGVydHkge01PREVTfSBtb2RlIC0gQ3VycmVudCBkaXNwbGF5IG1vZGVcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAnbW9kZS1jaGFuZ2UnLCBtb2RlOiB0aGlzLm1vZGUgfSApO1xuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIERpc2FibGUgYWRkaXRpb25hbCByZW5kZXJpbmcgZWZmZWN0XG4gICAgICogQG1lbWJlck9mIFZpZXdlclxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIGRpc2FibGVFZmZlY3Q6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBpZiAoIHRoaXMubW9kZSA9PT0gTU9ERVMuTk9STUFMICkgeyByZXR1cm47IH1cblxuICAgICAgICB0aGlzLm1vZGUgPSBNT0RFUy5OT1JNQUw7XG4gICAgICAgIHRoaXMuZGlzYWJsZVJldGljbGVDb250cm9sKCk7XG5cbiAgICAgICAgdGhpcy5hY3RpdmF0ZVdpZGdldEl0ZW0oIHVuZGVmaW5lZCwgdGhpcy5tb2RlICk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIER1YWwgZXllIGVmZmVjdCBldmVudFxuICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAgICAgKiBAZXZlbnQgSW5mb3Nwb3QjcGFub2xlbnMtZHVhbC1leWUtZWZmZWN0XG4gICAgICAgICAqIEBwcm9wZXJ0eSB7TU9ERVN9IG1vZGUgLSBDdXJyZW50IGRpc3BsYXkgbW9kZVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50VG9DaGlsZHJlbiggeyB0eXBlOiAncGFub2xlbnMtZHVhbC1leWUtZWZmZWN0JywgbW9kZTogdGhpcy5tb2RlIH0gKTtcblxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFNpemUoIHRoaXMuY29udGFpbmVyLmNsaWVudFdpZHRoLCB0aGlzLmNvbnRhaW5lci5jbGllbnRIZWlnaHQgKTtcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogRGlzcGF0Y2ggbW9kZSBjaGFuZ2UgZXZlbnRcbiAgICAgICAgICogQHR5cGUge29iamVjdH1cbiAgICAgICAgICogQGV2ZW50IFZpZXdlciNtb2RlLWNoYW5nZVxuICAgICAgICAgKiBAcHJvcGVydHkge01PREVTfSBtb2RlIC0gQ3VycmVudCBkaXNwbGF5IG1vZGVcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAnbW9kZS1jaGFuZ2UnLCBtb2RlOiB0aGlzLm1vZGUgfSApO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBFbmFibGUgcmV0aWNsZSBjb250cm9sXG4gICAgICogQG1lbWJlck9mIFZpZXdlclxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIGVuYWJsZVJldGljbGVDb250cm9sOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgaWYgKCB0aGlzLnJldGljbGUudmlzaWJsZSApIHsgcmV0dXJuOyB9XG5cbiAgICAgICAgdGhpcy50ZW1wRW5hYmxlUmV0aWNsZSA9IHRydWU7XG5cbiAgICAgICAgLy8gUmVnaXN0ZXIgcmV0aWNsZSBldmVudCBhbmQgdW5yZWdpc3RlciBtb3VzZSBldmVudFxuICAgICAgICB0aGlzLnVucmVnaXN0ZXJNb3VzZUFuZFRvdWNoRXZlbnRzKCk7XG4gICAgICAgIHRoaXMucmV0aWNsZS5zaG93KCk7XG4gICAgICAgIHRoaXMucmVnaXN0ZXJSZXRpY2xlRXZlbnQoKTtcbiAgICAgICAgdGhpcy51cGRhdGVSZXRpY2xlRXZlbnQoKTtcblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBEaXNhYmxlIHJldGljbGUgY29udHJvbFxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBkaXNhYmxlUmV0aWNsZUNvbnRyb2w6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICB0aGlzLnRlbXBFbmFibGVSZXRpY2xlID0gZmFsc2U7XG5cbiAgICAgICAgLy8gUmVnaXN0ZXIgbW91c2UgZXZlbnQgYW5kIHVucmVnaXN0ZXIgcmV0aWNsZSBldmVudFxuICAgICAgICBpZiAoICF0aGlzLm9wdGlvbnMuZW5hYmxlUmV0aWNsZSApIHtcblxuICAgICAgICAgICAgdGhpcy5yZXRpY2xlLmhpZGUoKTtcbiAgICAgICAgICAgIHRoaXMudW5yZWdpc3RlclJldGljbGVFdmVudCgpO1xuICAgICAgICAgICAgdGhpcy5yZWdpc3Rlck1vdXNlQW5kVG91Y2hFdmVudHMoKTtcblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVJldGljbGVFdmVudCgpO1xuXG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBFbmFibGUgYXV0byByb3RhdGlvblxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBlbmFibGVBdXRvUmF0ZTogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIHRoaXMub3B0aW9ucy5hdXRvUm90YXRlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5PcmJpdENvbnRyb2xzLmF1dG9Sb3RhdGUgPSB0cnVlO1xuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIERpc2FibGUgYXV0byByb3RhdGlvblxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBkaXNhYmxlQXV0b1JhdGU6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBjbGVhclRpbWVvdXQoIHRoaXMuYXV0b1JvdGF0ZVJlcXVlc3RJZCApO1xuICAgICAgICB0aGlzLm9wdGlvbnMuYXV0b1JvdGF0ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLk9yYml0Q29udHJvbHMuYXV0b1JvdGF0ZSA9IGZhbHNlO1xuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFRvZ2dsZSB2aWRlbyBwbGF5IG9yIHN0b3BcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHBhdXNlXG4gICAgICogQG1lbWJlck9mIFZpZXdlclxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBmaXJlcyBWaWV3ZXIjdmlkZW8tdG9nZ2xlXG4gICAgICovXG4gICAgdG9nZ2xlVmlkZW9QbGF5OiBmdW5jdGlvbiAoIHBhdXNlICkge1xuXG4gICAgICAgIGlmICggdGhpcy5wYW5vcmFtYSBpbnN0YW5jZW9mIFZpZGVvUGFub3JhbWEgKSB7XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogVG9nZ2xlIHZpZGVvIGV2ZW50XG4gICAgICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAgICAgICAgICogQGV2ZW50IFZpZXdlciN2aWRlby10b2dnbGVcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdGhpcy5wYW5vcmFtYS5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICd2aWRlby10b2dnbGUnLCBwYXVzZTogcGF1c2UgfSApO1xuXG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTZXQgY3VycmVudFRpbWUgaW4gYSB2aWRlb1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBwZXJjZW50YWdlIC0gUGVyY2VudGFnZSBvZiBhIHZpZGVvLiBSYW5nZSBmcm9tIDAuMCB0byAxLjBcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQGZpcmVzIFZpZXdlciN2aWRlby10aW1lXG4gICAgICovXG4gICAgc2V0VmlkZW9DdXJyZW50VGltZTogZnVuY3Rpb24gKCBwZXJjZW50YWdlICkge1xuXG4gICAgICAgIGlmICggdGhpcy5wYW5vcmFtYSBpbnN0YW5jZW9mIFZpZGVvUGFub3JhbWEgKSB7XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogU2V0dGluZyB2aWRlbyB0aW1lIGV2ZW50XG4gICAgICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAgICAgICAgICogQGV2ZW50IFZpZXdlciN2aWRlby10aW1lXG4gICAgICAgICAgICAgKiBAcHJvcGVydHkge251bWJlcn0gcGVyY2VudGFnZSAtIFBlcmNlbnRhZ2Ugb2YgYSB2aWRlby4gUmFuZ2UgZnJvbSAwLjAgdG8gMS4wXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHRoaXMucGFub3JhbWEuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAndmlkZW8tdGltZScsIHBlcmNlbnRhZ2U6IHBlcmNlbnRhZ2UgfSApO1xuXG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBUaGlzIHdpbGwgYmUgY2FsbGVkIHdoZW4gdmlkZW8gdXBkYXRlcyBpZiBhbiB3aWRnZXQgaXMgcHJlc2VudFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBwZXJjZW50YWdlIC0gUGVyY2VudGFnZSBvZiBhIHZpZGVvLiBSYW5nZSBmcm9tIDAuMCB0byAxLjBcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQGZpcmVzIFZpZXdlciN2aWRlby11cGRhdGVcbiAgICAgKi9cbiAgICBvblZpZGVvVXBkYXRlOiBmdW5jdGlvbiAoIHBlcmNlbnRhZ2UgKSB7XG5cbiAgICAgICAgY29uc3QgeyB3aWRnZXQgfSA9IHRoaXM7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFZpZGVvIHVwZGF0ZSBldmVudFxuICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAgICAgKiBAZXZlbnQgVmlld2VyI3ZpZGVvLXVwZGF0ZVxuICAgICAgICAgKiBAcHJvcGVydHkge251bWJlcn0gcGVyY2VudGFnZSAtIFBlcmNlbnRhZ2Ugb2YgYSB2aWRlby4gUmFuZ2UgZnJvbSAwLjAgdG8gMS4wXG4gICAgICAgICAqL1xuICAgICAgICBpZiggd2lkZ2V0ICkgeyB3aWRnZXQuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAndmlkZW8tdXBkYXRlJywgcGVyY2VudGFnZTogcGVyY2VudGFnZSB9ICk7IH1cblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBBZGQgdXBkYXRlIGNhbGxiYWNrIHRvIGJlIGNhbGxlZCBldmVyeSBhbmltYXRpb24gZnJhbWVcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja1xuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBhZGRVcGRhdGVDYWxsYmFjazogZnVuY3Rpb24gKCBmbiApIHtcblxuICAgICAgICBpZiAoIGZuICkge1xuXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUNhbGxiYWNrcy5wdXNoKCBmbiApO1xuXG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgdXBkYXRlIGNhbGxiYWNrXG4gICAgICogQHBhcmFtICB7ZnVuY3Rpb259IGZuIC0gVGhlIGZ1bmN0aW9uIHRvIGJlIHJlbW92ZWRcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgcmVtb3ZlVXBkYXRlQ2FsbGJhY2s6IGZ1bmN0aW9uICggZm4gKSB7XG5cbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLnVwZGF0ZUNhbGxiYWNrcy5pbmRleE9mKCBmbiApO1xuXG4gICAgICAgIGlmICggZm4gJiYgaW5kZXggPj0gMCApIHtcblxuICAgICAgICAgICAgdGhpcy51cGRhdGVDYWxsYmFja3Muc3BsaWNlKCBpbmRleCwgMSApO1xuXG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTaG93IHZpZGVvIHdpZGdldFxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBzaG93VmlkZW9XaWRnZXQ6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBjb25zdCB7IHdpZGdldCB9ID0gdGhpcztcblxuICAgICAgICAvKipcbiAgICAgICAgICogU2hvdyB2aWRlbyB3aWRnZXQgZXZlbnRcbiAgICAgICAgICogQHR5cGUge29iamVjdH1cbiAgICAgICAgICogQGV2ZW50IFZpZXdlciN2aWRlby1jb250cm9sLXNob3dcbiAgICAgICAgICovXG4gICAgICAgIGlmKCB3aWRnZXQgKSB7IHdpZGdldC5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICd2aWRlby1jb250cm9sLXNob3cnIH0gKTsgfVxuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEhpZGUgdmlkZW8gd2lkZ2V0XG4gICAgICogQG1lbWJlck9mIFZpZXdlclxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIGhpZGVWaWRlb1dpZGdldDogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGNvbnN0IHsgd2lkZ2V0IH0gPSB0aGlzO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBIaWRlIHZpZGVvIHdpZGdldFxuICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAgICAgKiBAZXZlbnQgVmlld2VyI3ZpZGVvLWNvbnRyb2wtaGlkZVxuICAgICAgICAgKi9cbiAgICAgICAgaWYoIHdpZGdldCApIHsgd2lkZ2V0LmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ3ZpZGVvLWNvbnRyb2wtaGlkZScgfSApOyB9XG5cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIHZpZGVvIHBsYXkgYnV0dG9uXG4gICAgICogQHBhcmFtIHtib29sZWFufSBwYXVzZWQgXG4gICAgICogQG1lbWJlck9mIFZpZXdlclxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIHVwZGF0ZVZpZGVvUGxheUJ1dHRvbjogZnVuY3Rpb24gKCBwYXVzZWQgKSB7XG5cbiAgICAgICAgY29uc3QgeyB3aWRnZXQgfSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKCB3aWRnZXQgJiYgd2lkZ2V0LnZpZGVvRWxlbWVudCAmJiB3aWRnZXQudmlkZW9FbGVtZW50LmNvbnRyb2xCdXR0b24gKSB7XG5cbiAgICAgICAgICAgIHdpZGdldC52aWRlb0VsZW1lbnQuY29udHJvbEJ1dHRvbi51cGRhdGUoIHBhdXNlZCApO1xuXG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBBZGQgZGVmYXVsdCBwYW5vcmFtYSBldmVudCBsaXN0ZW5lcnNcbiAgICAgKiBAcGFyYW0ge1Bhbm9yYW1hfSBwYW5vIC0gVGhlIHBhbm9yYW1hIHRvIGJlIGFkZGVkIHdpdGggZXZlbnQgbGlzdGVuZXJcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgYWRkUGFub3JhbWFFdmVudExpc3RlbmVyOiBmdW5jdGlvbiAoIHBhbm8gKSB7XG5cbiAgICAgICAgLy8gU2V0IGNhbWVyYSBjb250cm9sIG9uIGV2ZXJ5IHBhbm9yYW1hXG4gICAgICAgIHBhbm8uYWRkRXZlbnRMaXN0ZW5lciggJ2VudGVyLWZhZGUtc3RhcnQnLCB0aGlzLnNldENhbWVyYUNvbnRyb2wuYmluZCggdGhpcyApICk7XG5cbiAgICAgICAgLy8gU2hvdyBhbmQgaGlkZSB3aWRnZXQgZXZlbnQgb25seSB3aGVuIGl0J3MgVmlkZW9QYW5vcmFtYVxuICAgICAgICBpZiAoIHBhbm8gaW5zdGFuY2VvZiBWaWRlb1Bhbm9yYW1hICkge1xuXG4gICAgICAgICAgICBwYW5vLmFkZEV2ZW50TGlzdGVuZXIoICdlbnRlci1mYWRlLXN0YXJ0JywgdGhpcy5zaG93VmlkZW9XaWRnZXQuYmluZCggdGhpcyApICk7XG4gICAgICAgICAgICBwYW5vLmFkZEV2ZW50TGlzdGVuZXIoICdsZWF2ZScsIGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgICAgIGlmICggISh0aGlzLnBhbm9yYW1hIGluc3RhbmNlb2YgVmlkZW9QYW5vcmFtYSkgKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oaWRlVmlkZW9XaWRnZXQuY2FsbCggdGhpcyApO1xuXG4gICAgICAgICAgICAgICAgfVxuXHRcdFx0XHRcbiAgICAgICAgICAgIH0uYmluZCggdGhpcyApICk7XG5cbiAgICAgICAgfVxuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNldCBjYW1lcmEgY29udHJvbFxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBzZXRDYW1lcmFDb250cm9sOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgdGhpcy5PcmJpdENvbnRyb2xzLnRhcmdldC5jb3B5KCB0aGlzLnBhbm9yYW1hLnBvc2l0aW9uICk7XG5cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogR2V0IGN1cnJlbnQgY2FtZXJhIGNvbnRyb2xcbiAgICAgKiBAcmV0dXJuIHtvYmplY3R9IC0gQ3VycmVudCBuYXZpZ2F0aW9uIGNvbnRyb2xcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHJldHVybnMge1RIUkVFLk9yYml0Q29udHJvbHN8VEhSRUUuRGV2aWNlT3JpZW50YXRpb25Db250cm9sc31cbiAgICAgKi9cbiAgICBnZXRDb250cm9sOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuY29udHJvbDtcblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBHZXQgc2NlbmVcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHJldHVybiB7VEhSRUUuU2NlbmV9IC0gQ3VycmVudCBzY2VuZSB3aGljaCB0aGUgdmlld2VyIGlzIGJ1aWx0IG9uXG4gICAgICovXG4gICAgZ2V0U2NlbmU6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICByZXR1cm4gdGhpcy5zY2VuZTtcblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBHZXQgY2FtZXJhXG4gICAgICogQG1lbWJlck9mIFZpZXdlclxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEByZXR1cm4ge1RIUkVFLkNhbWVyYX0gLSBUaGUgc2NlbmUgY2FtZXJhXG4gICAgICovXG4gICAgZ2V0Q2FtZXJhOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuY2FtZXJhO1xuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEdldCByZW5kZXJlclxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcmV0dXJuIHtUSFJFRS5XZWJHTFJlbmRlcmVyfSAtIFRoZSByZW5kZXJlciB1c2luZyB3ZWJnbFxuICAgICAqL1xuICAgIGdldFJlbmRlcmVyOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyZXI7XG5cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogR2V0IGNvbnRhaW5lclxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gLSBUaGUgY29udGFpbmVyIGhvbGRzIHJlbmRlcmVyZCBjYW52YXNcbiAgICAgKi9cbiAgICBnZXRDb250YWluZXI6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICByZXR1cm4gdGhpcy5jb250YWluZXI7XG5cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogR2V0IGNvbnRyb2wgaWRcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHJldHVybiB7c3RyaW5nfSAtIENvbnRyb2wgaWQuICdvcmJpdCcgb3IgJ2RldmljZS1vcmllbnRhdGlvbidcbiAgICAgKi9cbiAgICBnZXRDb250cm9sSWQ6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICByZXR1cm4gdGhpcy5jb250cm9sLmlkO1xuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEdldCBuZXh0IG5hdmlnYXRpb24gY29udHJvbCBpZFxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IC0gTmV4dCBjb250cm9sIGlkXG4gICAgICovXG4gICAgZ2V0TmV4dENvbnRyb2xJZDogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRyb2xzWyB0aGlzLmdldE5leHRDb250cm9sSW5kZXgoKSBdLmlkO1xuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEdldCBuZXh0IG5hdmlnYXRpb24gY29udHJvbCBpbmRleFxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IC0gTmV4dCBjb250cm9sIGluZGV4XG4gICAgICovXG4gICAgZ2V0TmV4dENvbnRyb2xJbmRleDogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGNvbnN0IGNvbnRyb2xzID0gdGhpcy5jb250cm9scztcbiAgICAgICAgY29uc3QgY29udHJvbCA9IHRoaXMuY29udHJvbDtcbiAgICAgICAgY29uc3QgbmV4dEluZGV4ID0gY29udHJvbHMuaW5kZXhPZiggY29udHJvbCApICsgMTtcblxuICAgICAgICByZXR1cm4gKCBuZXh0SW5kZXggPj0gY29udHJvbHMubGVuZ3RoICkgPyAwIDogbmV4dEluZGV4O1xuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNldCBmaWVsZCBvZiB2aWV3IG9mIGNhbWVyYVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBmb3ZcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgc2V0Q2FtZXJhRm92OiBmdW5jdGlvbiAoIGZvdiApIHtcblxuICAgICAgICB0aGlzLmNhbWVyYS5mb3YgPSBmb3Y7XG4gICAgICAgIHRoaXMuY2FtZXJhLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBFbmFibGUgY29udHJvbCBieSBpbmRleFxuICAgICAqIEBwYXJhbSAge0NPTlRST0xTfSBpbmRleCAtIEluZGV4IG9mIGNhbWVyYSBjb250cm9sXG4gICAgICogQG1lbWJlck9mIFZpZXdlclxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIGVuYWJsZUNvbnRyb2w6IGZ1bmN0aW9uICggaW5kZXggKSB7XG5cbiAgICAgICAgaW5kZXggPSAoIGluZGV4ID49IDAgJiYgaW5kZXggPCB0aGlzLmNvbnRyb2xzLmxlbmd0aCApID8gaW5kZXggOiAwO1xuXG4gICAgICAgIHRoaXMuY29udHJvbC5lbmFibGVkID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5jb250cm9sID0gdGhpcy5jb250cm9sc1sgaW5kZXggXTtcblxuICAgICAgICB0aGlzLmNvbnRyb2wuZW5hYmxlZCA9IHRydWU7XG5cbiAgICAgICAgc3dpdGNoICggaW5kZXggKSB7XG5cbiAgICAgICAgY2FzZSBDT05UUk9MUy5PUkJJVDpcblxuICAgICAgICAgICAgdGhpcy5jYW1lcmEucG9zaXRpb24uY29weSggdGhpcy5wYW5vcmFtYS5wb3NpdGlvbiApO1xuICAgICAgICAgICAgdGhpcy5jYW1lcmEucG9zaXRpb24ueiArPSAxO1xuXG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIENPTlRST0xTLkRFVklDRU9SSUVOVEFUSU9OOlxuXG4gICAgICAgICAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi5jb3B5KCB0aGlzLnBhbm9yYW1hLnBvc2l0aW9uICk7XG5cbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG5cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jb250cm9sLnVwZGF0ZSgpO1xuXG4gICAgICAgIHRoaXMuYWN0aXZhdGVXaWRnZXRJdGVtKCBpbmRleCwgdW5kZWZpbmVkICk7XG5cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogRGlzYWJsZSBjdXJyZW50IGNvbnRyb2xcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgZGlzYWJsZUNvbnRyb2w6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICB0aGlzLmNvbnRyb2wuZW5hYmxlZCA9IGZhbHNlO1xuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFRvZ2dsZSBuZXh0IGNvbnRyb2xcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgdG9nZ2xlTmV4dENvbnRyb2w6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICB0aGlzLmVuYWJsZUNvbnRyb2woIHRoaXMuZ2V0TmV4dENvbnRyb2xJbmRleCgpICk7XG5cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2NyZWVuIFNwYWNlIFByb2plY3Rpb25cbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgZ2V0U2NyZWVuVmVjdG9yOiBmdW5jdGlvbiAoIHdvcmxkVmVjdG9yICkge1xuXG4gICAgICAgIGNvbnN0IHZlY3RvciA9IHdvcmxkVmVjdG9yLmNsb25lKCk7XG4gICAgICAgIGNvbnN0IHdpZHRoSGFsZiA9ICggdGhpcy5jb250YWluZXIuY2xpZW50V2lkdGggKSAvIDI7XG4gICAgICAgIGNvbnN0IGhlaWdodEhhbGYgPSB0aGlzLmNvbnRhaW5lci5jbGllbnRIZWlnaHQgLyAyO1xuXG4gICAgICAgIHZlY3Rvci5wcm9qZWN0KCB0aGlzLmNhbWVyYSApO1xuXG4gICAgICAgIHZlY3Rvci54ID0gKCB2ZWN0b3IueCAqIHdpZHRoSGFsZiApICsgd2lkdGhIYWxmO1xuICAgICAgICB2ZWN0b3IueSA9IC0gKCB2ZWN0b3IueSAqIGhlaWdodEhhbGYgKSArIGhlaWdodEhhbGY7XG4gICAgICAgIHZlY3Rvci56ID0gMDtcblxuICAgICAgICByZXR1cm4gdmVjdG9yO1xuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENhbGN1bGF0ZSB0aGUgY2FtZXJhIHJvdGF0aW9uIGFyb3VuZCB0aGUgeSBheGlzLCByZWxhdGl2ZSB0byB0byBmYWNpbmcgZGlyZWN0bHkgZG93biAreiBheGlzIChpbiByYWRpYW5zKVxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfSBDdXJyZW50IGFuZ2xlIG9mIHJvdGF0aW9uIG9mIHRoZSBjYW1lcmEgKHJhZGlhbnMpXG4gICAgICovXG4gICAgZ2V0Q2FtZXJhSGVhZGluZzogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGNvbnN0IGNhbWVyYUZvcndhcmQgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuICAgICAgICB0aGlzLmNhbWVyYS5nZXRXb3JsZERpcmVjdGlvbihjYW1lcmFGb3J3YXJkKTtcbiAgICAgICAgdmFyIHJvdGF0aW9uID0gTWF0aC5hdGFuMihjYW1lcmFGb3J3YXJkLnosIGNhbWVyYUZvcndhcmQueCk7XG4gICAgICAgIHJldHVybiByb3RhdGlvbiArIFRIUkVFLk1hdGguZGVnVG9SYWQoMTgwKTtcblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBTcHJpdGUgaW4gVmlld3BvcnRcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgY2hlY2tTcHJpdGVJblZpZXdwb3J0OiBmdW5jdGlvbiAoIHNwcml0ZSApIHtcblxuICAgICAgICB0aGlzLmNhbWVyYS5tYXRyaXhXb3JsZEludmVyc2UuZ2V0SW52ZXJzZSggdGhpcy5jYW1lcmEubWF0cml4V29ybGQgKTtcbiAgICAgICAgdGhpcy5jYW1lcmFWaWV3UHJvamVjdGlvbk1hdHJpeC5tdWx0aXBseU1hdHJpY2VzKCB0aGlzLmNhbWVyYS5wcm9qZWN0aW9uTWF0cml4LCB0aGlzLmNhbWVyYS5tYXRyaXhXb3JsZEludmVyc2UgKTtcbiAgICAgICAgdGhpcy5jYW1lcmFGcnVzdHVtLnNldEZyb21NYXRyaXgoIHRoaXMuY2FtZXJhVmlld1Byb2plY3Rpb25NYXRyaXggKTtcblxuICAgICAgICByZXR1cm4gc3ByaXRlLnZpc2libGUgJiYgdGhpcy5jYW1lcmFGcnVzdHVtLmludGVyc2VjdHNTcHJpdGUoIHNwcml0ZSApO1xuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJldmVyc2UgZHJhZ2dpbmcgZGlyZWN0aW9uXG4gICAgICogQG1lbWJlck9mIFZpZXdlclxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIHJldmVyc2VEcmFnZ2luZ0RpcmVjdGlvbjogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIHRoaXMuT3JiaXRDb250cm9scy5yb3RhdGVTcGVlZCAqPSAtMTtcbiAgICAgICAgdGhpcy5PcmJpdENvbnRyb2xzLm1vbWVudHVtU2NhbGluZ0ZhY3RvciAqPSAtMTtcblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBBZGQgcmV0aWNsZSBcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgYWRkUmV0aWNsZTogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIHRoaXMucmV0aWNsZSA9IG5ldyBSZXRpY2xlKCAweGZmZmZmZiwgdHJ1ZSwgdGhpcy5vcHRpb25zLmR3ZWxsVGltZSApO1xuICAgICAgICB0aGlzLnJldGljbGUuaGlkZSgpO1xuICAgICAgICB0aGlzLmNhbWVyYS5hZGQoIHRoaXMucmV0aWNsZSApO1xuICAgICAgICB0aGlzLnNjZW5lUmV0aWNsZS5hZGQoIHRoaXMuY2FtZXJhICk7XG5cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUm90YXRlIHRoZSBhY3RpdmUgcGFub3JhbWEgdG8gYWxpZ24gdG8gdGhlIGN1cnJlbnQgZm9yd2FyZCBoZWFkaW5nIG9mIHRoZSBjYW1lcmEgXG4gICAgICogQG1lbWJlck9mIFZpZXdlclxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIGNlbnRyZUFjdGl2ZVBhbm9yYW1hKCkge1xuXG4gICAgICAgIHZhciBjdXJyZW50SGVhZGluZyA9IHRoaXMuZ2V0Q2FtZXJhSGVhZGluZygpO1xuICAgICAgICAvLyBSb3RhdGUgYWdhaW5zdCB0aGUgY3VycmVudCBoZWFkaW5nXG4gICAgICAgIHRoaXMucGFub3JhbWEucm90YXRpb24ueSA9IGN1cnJlbnRIZWFkaW5nICogLTE7XG5cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVHdlZW4gY29udHJvbCBsb29raW5nIGNlbnRlclxuICAgICAqIEBwYXJhbSB7VEhSRUUuVmVjdG9yM30gdmVjdG9yIC0gVmVjdG9yIHRvIGJlIGxvb2tlZCBhdCB0aGUgY2VudGVyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFtkdXJhdGlvbj0xMDAwXSAtIER1cmF0aW9uIHRvIHR3ZWVuXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gW2Vhc2luZz1UV0VFTi5FYXNpbmcuRXhwb25lbnRpYWwuT3V0XSAtIEVhc2luZyBmdW5jdGlvblxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICB0d2VlbkNvbnRyb2xDZW50ZXI6IGZ1bmN0aW9uICggdmVjdG9yLCBkdXJhdGlvbiwgZWFzaW5nICkge1xuXG4gICAgICAgIGlmICggdGhpcy5jb250cm9sICE9PSB0aGlzLk9yYml0Q29udHJvbHMgKSB7XG5cbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICB9XG5cbiAgICAgICAgLy8gUGFzcyBpbiBhcmd1bWVudHMgYXMgYXJyYXlcbiAgICAgICAgaWYgKCB2ZWN0b3IgaW5zdGFuY2VvZiBBcnJheSApIHtcblxuICAgICAgICAgICAgZHVyYXRpb24gPSB2ZWN0b3JbIDEgXTtcbiAgICAgICAgICAgIGVhc2luZyA9IHZlY3RvclsgMiBdO1xuICAgICAgICAgICAgdmVjdG9yID0gdmVjdG9yWyAwIF07XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGR1cmF0aW9uID0gZHVyYXRpb24gIT09IHVuZGVmaW5lZCA/IGR1cmF0aW9uIDogMTAwMDtcbiAgICAgICAgZWFzaW5nID0gZWFzaW5nIHx8IFRXRUVOLkVhc2luZy5FeHBvbmVudGlhbC5PdXQ7XG5cbiAgICAgICAgbGV0IHNjb3BlLCBoYSwgdmEsIGNodiwgY3Z2LCBodiwgdnYsIHZwdGMsIG92LCBudjtcblxuICAgICAgICBzY29wZSA9IHRoaXM7XG5cbiAgICAgICAgY2h2ID0gdGhpcy5jYW1lcmEuZ2V0V29ybGREaXJlY3Rpb24oIG5ldyBUSFJFRS5WZWN0b3IzKCkgKTtcbiAgICAgICAgY3Z2ID0gY2h2LmNsb25lKCk7XG5cbiAgICAgICAgdnB0YyA9IHRoaXMucGFub3JhbWEuZ2V0V29ybGRQb3NpdGlvbiggbmV3IFRIUkVFLlZlY3RvcjMoKSApLnN1YiggdGhpcy5jYW1lcmEuZ2V0V29ybGRQb3NpdGlvbiggbmV3IFRIUkVFLlZlY3RvcjMoKSApICk7XG5cbiAgICAgICAgaHYgPSB2ZWN0b3IuY2xvbmUoKTtcbiAgICAgICAgLy8gU2NhbGUgZWZmZWN0XG4gICAgICAgIGh2LnggKj0gLTE7XG4gICAgICAgIGh2LmFkZCggdnB0YyApLm5vcm1hbGl6ZSgpO1xuICAgICAgICB2diA9IGh2LmNsb25lKCk7XG5cbiAgICAgICAgY2h2LnkgPSAwO1xuICAgICAgICBodi55ID0gMDtcblxuICAgICAgICBoYSA9IE1hdGguYXRhbjIoIGh2LnosIGh2LnggKSAtIE1hdGguYXRhbjIoIGNodi56LCBjaHYueCApO1xuICAgICAgICBoYSA9IGhhID4gTWF0aC5QSSA/IGhhIC0gMiAqIE1hdGguUEkgOiBoYTtcbiAgICAgICAgaGEgPSBoYSA8IC1NYXRoLlBJID8gaGEgKyAyICogTWF0aC5QSSA6IGhhO1xuICAgICAgICB2YSA9IE1hdGguYWJzKCBjdnYuYW5nbGVUbyggY2h2ICkgKyAoIGN2di55ICogdnYueSA8PSAwID8gdnYuYW5nbGVUbyggaHYgKSA6IC12di5hbmdsZVRvKCBodiApICkgKTtcbiAgICAgICAgdmEgKj0gdnYueSA8IGN2di55ID8gMSA6IC0xO1xuXG4gICAgICAgIG92ID0geyBsZWZ0OiAwLCB1cDogMCB9O1xuICAgICAgICBudiA9IHsgbGVmdDogMCwgdXA6IDAgfTtcblxuICAgICAgICB0aGlzLnR3ZWVuTGVmdEFuaW1hdGlvbi5zdG9wKCk7XG4gICAgICAgIHRoaXMudHdlZW5VcEFuaW1hdGlvbi5zdG9wKCk7XG5cbiAgICAgICAgdGhpcy50d2VlbkxlZnRBbmltYXRpb24gPSBuZXcgVFdFRU4uVHdlZW4oIG92IClcbiAgICAgICAgICAgIC50byggeyBsZWZ0OiBoYSB9LCBkdXJhdGlvbiApXG4gICAgICAgICAgICAuZWFzaW5nKCBlYXNpbmcgKVxuICAgICAgICAgICAgLm9uVXBkYXRlKGZ1bmN0aW9uKG92KXtcbiAgICAgICAgICAgICAgICBzY29wZS5jb250cm9sLnJvdGF0ZUxlZnQoIG92LmxlZnQgLSBudi5sZWZ0ICk7XG4gICAgICAgICAgICAgICAgbnYubGVmdCA9IG92LmxlZnQ7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG5cbiAgICAgICAgdGhpcy50d2VlblVwQW5pbWF0aW9uID0gbmV3IFRXRUVOLlR3ZWVuKCBvdiApXG4gICAgICAgICAgICAudG8oIHsgdXA6IHZhIH0sIGR1cmF0aW9uIClcbiAgICAgICAgICAgIC5lYXNpbmcoIGVhc2luZyApXG4gICAgICAgICAgICAub25VcGRhdGUoZnVuY3Rpb24ob3Ype1xuICAgICAgICAgICAgICAgIHNjb3BlLmNvbnRyb2wucm90YXRlVXAoIG92LnVwIC0gbnYudXAgKTtcbiAgICAgICAgICAgICAgICBudi51cCA9IG92LnVwO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGFydCgpO1xuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFR3ZWVuIGNvbnRyb2wgbG9va2luZyBjZW50ZXIgYnkgb2JqZWN0XG4gICAgICogQHBhcmFtIHtUSFJFRS5PYmplY3QzRH0gb2JqZWN0IC0gT2JqZWN0IHRvIGJlIGxvb2tlZCBhdCB0aGUgY2VudGVyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFtkdXJhdGlvbj0xMDAwXSAtIER1cmF0aW9uIHRvIHR3ZWVuXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gW2Vhc2luZz1UV0VFTi5FYXNpbmcuRXhwb25lbnRpYWwuT3V0XSAtIEVhc2luZyBmdW5jdGlvblxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICB0d2VlbkNvbnRyb2xDZW50ZXJCeU9iamVjdDogZnVuY3Rpb24gKCBvYmplY3QsIGR1cmF0aW9uLCBlYXNpbmcgKSB7XG5cbiAgICAgICAgbGV0IGlzVW5kZXJTY2FsZVBsYWNlSG9sZGVyID0gZmFsc2U7XG5cbiAgICAgICAgb2JqZWN0LnRyYXZlcnNlQW5jZXN0b3JzKCBmdW5jdGlvbiAoIGFuY2VzdG9yICkge1xuXG4gICAgICAgICAgICBpZiAoIGFuY2VzdG9yLnNjYWxlUGxhY2VIb2xkZXIgKSB7XG5cbiAgICAgICAgICAgICAgICBpc1VuZGVyU2NhbGVQbGFjZUhvbGRlciA9IHRydWU7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSApO1xuXG4gICAgICAgIGlmICggaXNVbmRlclNjYWxlUGxhY2VIb2xkZXIgKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IGludmVydFhWZWN0b3IgPSBuZXcgVEhSRUUuVmVjdG9yMyggLTEsIDEsIDEgKTtcblxuICAgICAgICAgICAgdGhpcy50d2VlbkNvbnRyb2xDZW50ZXIoIG9iamVjdC5nZXRXb3JsZFBvc2l0aW9uKCBuZXcgVEhSRUUuVmVjdG9yMygpICkubXVsdGlwbHkoIGludmVydFhWZWN0b3IgKSwgZHVyYXRpb24sIGVhc2luZyApO1xuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIHRoaXMudHdlZW5Db250cm9sQ2VudGVyKCBvYmplY3QuZ2V0V29ybGRQb3NpdGlvbiggbmV3IFRIUkVFLlZlY3RvcjMoKSApLCBkdXJhdGlvbiwgZWFzaW5nICk7XG5cbiAgICAgICAgfVxuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFRoaXMgaXMgY2FsbGVkIHdoZW4gd2luZG93IHNpemUgaXMgY2hhbmdlZFxuICAgICAqIEBmaXJlcyBWaWV3ZXIjd2luZG93LXJlc2l6ZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbd2luZG93V2lkdGhdIC0gU3BlY2lmeSBpZiBjdXN0b20gZWxlbWVudCBoYXMgY2hhbmdlZCB3aWR0aFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbd2luZG93SGVpZ2h0XSAtIFNwZWNpZnkgaWYgY3VzdG9tIGVsZW1lbnQgaGFzIGNoYW5nZWQgaGVpZ2h0XG4gICAgICogQG1lbWJlck9mIFZpZXdlclxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIG9uV2luZG93UmVzaXplOiBmdW5jdGlvbiAoIHdpbmRvd1dpZHRoLCB3aW5kb3dIZWlnaHQgKSB7XG5cbiAgICAgICAgbGV0IHdpZHRoLCBoZWlnaHQ7XG5cbiAgICAgICAgY29uc3QgZXhwYW5kID0gdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCAncGFub2xlbnMtY29udGFpbmVyJyApIHx8IHRoaXMuY29udGFpbmVyLmlzRnVsbHNjcmVlbjtcblxuICAgICAgICBpZiAoIHdpbmRvd1dpZHRoICE9PSB1bmRlZmluZWQgJiYgd2luZG93SGVpZ2h0ICE9PSB1bmRlZmluZWQgKSB7XG5cbiAgICAgICAgICAgIHdpZHRoID0gd2luZG93V2lkdGg7XG4gICAgICAgICAgICBoZWlnaHQgPSB3aW5kb3dIZWlnaHQ7XG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5fd2lkdGggPSB3aW5kb3dXaWR0aDtcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLl9oZWlnaHQgPSB3aW5kb3dIZWlnaHQ7XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgY29uc3QgaXNBbmRyb2lkID0gLyhhbmRyb2lkKS9pLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpO1xuXG4gICAgICAgICAgICBjb25zdCBhZGp1c3RXaWR0aCA9IGlzQW5kcm9pZCBcbiAgICAgICAgICAgICAgICA/IE1hdGgubWluKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCwgd2luZG93LmlubmVyV2lkdGggfHwgMCkgXG4gICAgICAgICAgICAgICAgOiBNYXRoLm1heChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgsIHdpbmRvdy5pbm5lcldpZHRoIHx8IDApO1xuXG4gICAgICAgICAgICBjb25zdCBhZGp1c3RIZWlnaHQgPSBpc0FuZHJvaWQgXG4gICAgICAgICAgICAgICAgPyBNYXRoLm1pbihkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0LCB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgMCkgXG4gICAgICAgICAgICAgICAgOiBNYXRoLm1heChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0LCB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgMCk7XG5cbiAgICAgICAgICAgIHdpZHRoID0gZXhwYW5kID8gYWRqdXN0V2lkdGggOiB0aGlzLmNvbnRhaW5lci5jbGllbnRXaWR0aDtcbiAgICAgICAgICAgIGhlaWdodCA9IGV4cGFuZCA/IGFkanVzdEhlaWdodCA6IHRoaXMuY29udGFpbmVyLmNsaWVudEhlaWdodDtcblxuICAgICAgICAgICAgdGhpcy5jb250YWluZXIuX3dpZHRoID0gd2lkdGg7XG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5faGVpZ2h0ID0gaGVpZ2h0O1xuXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNhbWVyYS5hc3BlY3QgPSB3aWR0aCAvIGhlaWdodDtcbiAgICAgICAgdGhpcy5jYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xuXG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U2l6ZSggd2lkdGgsIGhlaWdodCApO1xuXG4gICAgICAgIC8vIFVwZGF0ZSByZXRpY2xlXG4gICAgICAgIGlmICggdGhpcy5vcHRpb25zLmVuYWJsZVJldGljbGUgfHwgdGhpcy50ZW1wRW5hYmxlUmV0aWNsZSApIHtcblxuICAgICAgICAgICAgdGhpcy51cGRhdGVSZXRpY2xlRXZlbnQoKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFdpbmRvdyByZXNpemluZyBldmVudFxuICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAgICAgKiBAZXZlbnQgVmlld2VyI3dpbmRvdy1yZXNpemVcbiAgICAgICAgICogQHByb3BlcnR5IHtudW1iZXJ9IHdpZHRoICAtIFdpZHRoIG9mIHRoZSB3aW5kb3dcbiAgICAgICAgICogQHByb3BlcnR5IHtudW1iZXJ9IGhlaWdodCAtIEhlaWdodCBvZiB0aGUgd2luZG93XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ3dpbmRvdy1yZXNpemUnLCB3aWR0aDogd2lkdGgsIGhlaWdodDogaGVpZ2h0IH0pO1xuICAgICAgICB0aGlzLnNjZW5lLnRyYXZlcnNlKCBmdW5jdGlvbiAoIG9iamVjdCApIHtcblxuICAgICAgICAgICAgaWYgKCBvYmplY3QuZGlzcGF0Y2hFdmVudCApIHtcblxuICAgICAgICAgICAgICAgIG9iamVjdC5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICd3aW5kb3ctcmVzaXplJywgd2lkdGg6IHdpZHRoLCBoZWlnaHQ6IGhlaWdodCB9KTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gKTtcblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBBZGQgb3V0cHV0IGVsZW1lbnRcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgYWRkT3V0cHV0RWxlbWVudDogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnZGl2JyApO1xuICAgICAgICBlbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgZWxlbWVudC5zdHlsZS5yaWdodCA9ICcxMHB4JztcbiAgICAgICAgZWxlbWVudC5zdHlsZS50b3AgPSAnMTBweCc7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUuY29sb3IgPSAnI2ZmZic7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKCBlbGVtZW50ICk7XG4gICAgICAgIHRoaXMub3V0cHV0RGl2RWxlbWVudCA9IGVsZW1lbnQ7XG5cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogT3V0cHV0IHBvc2l0aW9uIGluIGRldmVsb3BlciBjb25zb2xlIGJ5IGhvbGRpbmcgZG93biBDdHJsIGJ1dHRvblxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBvdXRwdXRQb3NpdGlvbjogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGNvbnN0IGludGVyc2VjdHMgPSB0aGlzLnJheWNhc3Rlci5pbnRlcnNlY3RPYmplY3QoIHRoaXMucGFub3JhbWEsIHRydWUgKTtcblxuICAgICAgICBpZiAoIGludGVyc2VjdHMubGVuZ3RoID4gMCApIHtcblxuICAgICAgICAgICAgY29uc3QgcG9pbnQgPSBpbnRlcnNlY3RzWyAwIF0ucG9pbnQuY2xvbmUoKTtcbiAgICAgICAgICAgIGNvbnN0IGNvbnZlcnRlciA9IG5ldyBUSFJFRS5WZWN0b3IzKCAtMSwgMSwgMSApO1xuICAgICAgICAgICAgY29uc3Qgd29ybGQgPSB0aGlzLnBhbm9yYW1hLmdldFdvcmxkUG9zaXRpb24oIG5ldyBUSFJFRS5WZWN0b3IzKCkgKTtcbiAgICAgICAgICAgIHBvaW50LnN1Yiggd29ybGQgKS5tdWx0aXBseSggY29udmVydGVyICk7XG5cbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgJHtwb2ludC54LnRvRml4ZWQoMil9LCAke3BvaW50LnkudG9GaXhlZCgyKX0sICR7cG9pbnQuei50b0ZpeGVkKDIpfWA7XG5cbiAgICAgICAgICAgIGlmICggcG9pbnQubGVuZ3RoKCkgPT09IDAgKSB7IHJldHVybjsgfVxuXG4gICAgICAgICAgICBzd2l0Y2ggKCB0aGlzLm9wdGlvbnMub3V0cHV0ICkge1xuXG4gICAgICAgICAgICBjYXNlICdjb25zb2xlJzpcbiAgICAgICAgICAgICAgICBjb25zb2xlLmluZm8oIG1lc3NhZ2UgKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnb3ZlcmxheSc6XG4gICAgICAgICAgICAgICAgdGhpcy5vdXRwdXREaXZFbGVtZW50LnRleHRDb250ZW50ID0gbWVzc2FnZTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBPbiBtb3VzZSBkb3duXG4gICAgICogQHBhcmFtIHtNb3VzZUV2ZW50fSBldmVudCBcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgb25Nb3VzZURvd246IGZ1bmN0aW9uICggZXZlbnQgKSB7XG5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICB0aGlzLnVzZXJNb3VzZS54ID0gKCBldmVudC5jbGllbnRYID49IDAgKSA/IGV2ZW50LmNsaWVudFggOiBldmVudC50b3VjaGVzWzBdLmNsaWVudFg7XG4gICAgICAgIHRoaXMudXNlck1vdXNlLnkgPSAoIGV2ZW50LmNsaWVudFkgPj0gMCApID8gZXZlbnQuY2xpZW50WSA6IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WTtcbiAgICAgICAgdGhpcy51c2VyTW91c2UudHlwZSA9ICdtb3VzZWRvd24nO1xuICAgICAgICB0aGlzLm9uVGFwKCBldmVudCApO1xuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIE9uIG1vdXNlIG1vdmVcbiAgICAgKiBAcGFyYW0ge01vdXNlRXZlbnR9IGV2ZW50IFxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBvbk1vdXNlTW92ZTogZnVuY3Rpb24gKCBldmVudCApIHtcblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLnVzZXJNb3VzZS50eXBlID0gJ21vdXNlbW92ZSc7XG4gICAgICAgIHRoaXMub25UYXAoIGV2ZW50ICk7XG5cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogT24gbW91c2UgdXBcbiAgICAgKiBAcGFyYW0ge01vdXNlRXZlbnR9IGV2ZW50IFxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBvbk1vdXNlVXA6IGZ1bmN0aW9uICggZXZlbnQgKSB7XG5cbiAgICAgICAgbGV0IG9uVGFyZ2V0ID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy51c2VyTW91c2UudHlwZSA9ICdtb3VzZXVwJztcblxuICAgICAgICBjb25zdCB0eXBlID0gKCB0aGlzLnVzZXJNb3VzZS54ID49IGV2ZW50LmNsaWVudFggLSB0aGlzLm9wdGlvbnMuY2xpY2tUb2xlcmFuY2UgXG5cdFx0XHRcdCYmIHRoaXMudXNlck1vdXNlLnggPD0gZXZlbnQuY2xpZW50WCArIHRoaXMub3B0aW9ucy5jbGlja1RvbGVyYW5jZVxuXHRcdFx0XHQmJiB0aGlzLnVzZXJNb3VzZS55ID49IGV2ZW50LmNsaWVudFkgLSB0aGlzLm9wdGlvbnMuY2xpY2tUb2xlcmFuY2Vcblx0XHRcdFx0JiYgdGhpcy51c2VyTW91c2UueSA8PSBldmVudC5jbGllbnRZICsgdGhpcy5vcHRpb25zLmNsaWNrVG9sZXJhbmNlICkgXG5cdFx0XHRcdHx8ICAoIGV2ZW50LmNoYW5nZWRUb3VjaGVzIFxuXHRcdFx0XHQmJiB0aGlzLnVzZXJNb3VzZS54ID49IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFggLSB0aGlzLm9wdGlvbnMuY2xpY2tUb2xlcmFuY2Vcblx0XHRcdFx0JiYgdGhpcy51c2VyTW91c2UueCA8PSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYICsgdGhpcy5vcHRpb25zLmNsaWNrVG9sZXJhbmNlIFxuXHRcdFx0XHQmJiB0aGlzLnVzZXJNb3VzZS55ID49IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFkgLSB0aGlzLm9wdGlvbnMuY2xpY2tUb2xlcmFuY2Vcblx0XHRcdFx0JiYgdGhpcy51c2VyTW91c2UueSA8PSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRZICsgdGhpcy5vcHRpb25zLmNsaWNrVG9sZXJhbmNlICkgXG4gICAgICAgICAgICA/ICdjbGljaycgOiB1bmRlZmluZWQ7XG5cbiAgICAgICAgLy8gRXZlbnQgc2hvdWxkIGhhcHBlbiBvbiBjYW52YXNcbiAgICAgICAgaWYgKCBldmVudCAmJiBldmVudC50YXJnZXQgJiYgIWV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoICdwYW5vbGVucy1jYW52YXMnICkgKSB7IHJldHVybjsgfVxuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgaWYgKCBldmVudC5jaGFuZ2VkVG91Y2hlcyAmJiBldmVudC5jaGFuZ2VkVG91Y2hlcy5sZW5ndGggPT09IDEgKSB7XG5cbiAgICAgICAgICAgIG9uVGFyZ2V0ID0gdGhpcy5vblRhcCggeyBjbGllbnRYOiBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYLCBjbGllbnRZOiBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRZIH0sIHR5cGUgKTtcblx0XHRcbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgb25UYXJnZXQgPSB0aGlzLm9uVGFwKCBldmVudCwgdHlwZSApO1xuXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnVzZXJNb3VzZS50eXBlID0gJ25vbmUnO1xuXG4gICAgICAgIGlmICggb25UYXJnZXQgKSB7IFxuXG4gICAgICAgICAgICByZXR1cm47IFxuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIHR5cGUgPT09ICdjbGljaycgKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IHsgb3B0aW9uczogeyBhdXRvSGlkZUluZm9zcG90LCBhdXRvSGlkZUNvbnRyb2xCYXIgfSwgcGFub3JhbWEsIHRvZ2dsZUNvbnRyb2xCYXIgfSA9IHRoaXM7XG5cbiAgICAgICAgICAgIGlmICggYXV0b0hpZGVJbmZvc3BvdCAmJiBwYW5vcmFtYSApIHtcblxuICAgICAgICAgICAgICAgIHBhbm9yYW1hLnRvZ2dsZUluZm9zcG90VmlzaWJpbGl0eSgpO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICggYXV0b0hpZGVDb250cm9sQmFyICkge1xuXG4gICAgICAgICAgICAgICAgdG9nZ2xlQ29udHJvbEJhcigpO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIE9uIHRhcCBldmVueSBmcmFtZVxuICAgICAqIEBwYXJhbSB7TW91c2VFdmVudH0gZXZlbnQgXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgXG4gICAgICogQG1lbWJlck9mIFZpZXdlclxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIG9uVGFwOiBmdW5jdGlvbiAoIGV2ZW50LCB0eXBlICkge1xuXG4gICAgICAgIGNvbnN0IHsgbGVmdCwgdG9wIH0gPSB0aGlzLmNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgY29uc3QgeyBjbGllbnRXaWR0aCwgY2xpZW50SGVpZ2h0IH0gPSB0aGlzLmNvbnRhaW5lcjtcblxuICAgICAgICB0aGlzLnJheWNhc3RlclBvaW50LnggPSAoICggZXZlbnQuY2xpZW50WCAtIGxlZnQgKSAvIGNsaWVudFdpZHRoICkgKiAyIC0gMTtcbiAgICAgICAgdGhpcy5yYXljYXN0ZXJQb2ludC55ID0gLSAoICggZXZlbnQuY2xpZW50WSAtIHRvcCApIC8gY2xpZW50SGVpZ2h0ICkgKiAyICsgMTtcblxuICAgICAgICB0aGlzLnJheWNhc3Rlci5zZXRGcm9tQ2FtZXJhKCB0aGlzLnJheWNhc3RlclBvaW50LCB0aGlzLmNhbWVyYSApO1xuXG4gICAgICAgIC8vIFJldHVybiBpZiBubyBwYW5vcmFtYSBcbiAgICAgICAgaWYgKCAhdGhpcy5wYW5vcmFtYSApIHsgXG5cbiAgICAgICAgICAgIHJldHVybjsgXG5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIG91dHB1dCBpbmZvc3BvdCBpbmZvcm1hdGlvblxuICAgICAgICBpZiAoIGV2ZW50LnR5cGUgIT09ICdtb3VzZWRvd24nICYmIHRoaXMudG91Y2hTdXBwb3J0ZWQgfHwgdGhpcy5PVVRQVVRfSU5GT1NQT1QgKSB7IFxuXG4gICAgICAgICAgICB0aGlzLm91dHB1dFBvc2l0aW9uKCk7IFxuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpbnRlcnNlY3RzID0gdGhpcy5yYXljYXN0ZXIuaW50ZXJzZWN0T2JqZWN0cyggdGhpcy5wYW5vcmFtYS5jaGlsZHJlbiwgdHJ1ZSApO1xuICAgICAgICBjb25zdCBpbnRlcnNlY3RfZW50aXR5ID0gdGhpcy5nZXRDb252ZXJ0ZWRJbnRlcnNlY3QoIGludGVyc2VjdHMgKTtcbiAgICAgICAgY29uc3QgaW50ZXJzZWN0ID0gKCBpbnRlcnNlY3RzLmxlbmd0aCA+IDAgKSA/IGludGVyc2VjdHNbMF0ub2JqZWN0IDogdW5kZWZpbmVkO1xuXG4gICAgICAgIGlmICggdGhpcy51c2VyTW91c2UudHlwZSA9PT0gJ21vdXNldXAnICApIHtcblxuICAgICAgICAgICAgaWYgKCBpbnRlcnNlY3RfZW50aXR5ICYmIHRoaXMucHJlc3NFbnRpdHlPYmplY3QgPT09IGludGVyc2VjdF9lbnRpdHkgJiYgdGhpcy5wcmVzc0VudGl0eU9iamVjdC5kaXNwYXRjaEV2ZW50ICkge1xuXG4gICAgICAgICAgICAgICAgdGhpcy5wcmVzc0VudGl0eU9iamVjdC5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdwcmVzc3N0b3AtZW50aXR5JywgbW91c2VFdmVudDogZXZlbnQgfSApO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMucHJlc3NFbnRpdHlPYmplY3QgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggdGhpcy51c2VyTW91c2UudHlwZSA9PT0gJ21vdXNldXAnICApIHtcblxuICAgICAgICAgICAgaWYgKCBpbnRlcnNlY3QgJiYgdGhpcy5wcmVzc09iamVjdCA9PT0gaW50ZXJzZWN0ICYmIHRoaXMucHJlc3NPYmplY3QuZGlzcGF0Y2hFdmVudCApIHtcblxuICAgICAgICAgICAgICAgIHRoaXMucHJlc3NPYmplY3QuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAncHJlc3NzdG9wJywgbW91c2VFdmVudDogZXZlbnQgfSApO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMucHJlc3NPYmplY3QgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggdHlwZSA9PT0gJ2NsaWNrJyApIHtcblxuICAgICAgICAgICAgdGhpcy5wYW5vcmFtYS5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdjbGljaycsIGludGVyc2VjdHM6IGludGVyc2VjdHMsIG1vdXNlRXZlbnQ6IGV2ZW50IH0gKTtcblxuICAgICAgICAgICAgaWYgKCBpbnRlcnNlY3RfZW50aXR5ICYmIGludGVyc2VjdF9lbnRpdHkuZGlzcGF0Y2hFdmVudCApIHtcblxuICAgICAgICAgICAgICAgIGludGVyc2VjdF9lbnRpdHkuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAnY2xpY2stZW50aXR5JywgbW91c2VFdmVudDogZXZlbnQgfSApO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICggaW50ZXJzZWN0ICYmIGludGVyc2VjdC5kaXNwYXRjaEV2ZW50ICkge1xuXG4gICAgICAgICAgICAgICAgaW50ZXJzZWN0LmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ2NsaWNrJywgbW91c2VFdmVudDogZXZlbnQgfSApO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgdGhpcy5wYW5vcmFtYS5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdob3ZlcicsIGludGVyc2VjdHM6IGludGVyc2VjdHMsIG1vdXNlRXZlbnQ6IGV2ZW50IH0gKTtcblxuICAgICAgICAgICAgaWYgKCAoIHRoaXMuaG92ZXJPYmplY3QgJiYgaW50ZXJzZWN0cy5sZW5ndGggPiAwICYmIHRoaXMuaG92ZXJPYmplY3QgIT09IGludGVyc2VjdF9lbnRpdHkgKVxuXHRcdFx0XHR8fCAoIHRoaXMuaG92ZXJPYmplY3QgJiYgaW50ZXJzZWN0cy5sZW5ndGggPT09IDAgKSApe1xuXG4gICAgICAgICAgICAgICAgaWYgKCB0aGlzLmhvdmVyT2JqZWN0LmRpc3BhdGNoRXZlbnQgKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ob3Zlck9iamVjdC5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdob3ZlcmxlYXZlJywgbW91c2VFdmVudDogZXZlbnQgfSApO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmV0aWNsZS5lbmQoKTtcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuaG92ZXJPYmplY3QgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCBpbnRlcnNlY3RfZW50aXR5ICYmIGludGVyc2VjdHMubGVuZ3RoID4gMCApIHtcblxuICAgICAgICAgICAgICAgIGlmICggdGhpcy5ob3Zlck9iamVjdCAhPT0gaW50ZXJzZWN0X2VudGl0eSApIHtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhvdmVyT2JqZWN0ID0gaW50ZXJzZWN0X2VudGl0eTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoIHRoaXMuaG92ZXJPYmplY3QuZGlzcGF0Y2hFdmVudCApIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ob3Zlck9iamVjdC5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdob3ZlcmVudGVyJywgbW91c2VFdmVudDogZXZlbnQgfSApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTdGFydCByZXRpY2xlIHRpbWVyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIHRoaXMub3B0aW9ucy5hdXRvUmV0aWNsZVNlbGVjdCAmJiB0aGlzLm9wdGlvbnMuZW5hYmxlUmV0aWNsZSB8fCB0aGlzLnRlbXBFbmFibGVSZXRpY2xlICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmV0aWNsZS5zdGFydCggdGhpcy5vblRhcC5iaW5kKCB0aGlzLCBldmVudCwgJ2NsaWNrJyApICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCB0aGlzLnVzZXJNb3VzZS50eXBlID09PSAnbW91c2Vkb3duJyAmJiB0aGlzLnByZXNzRW50aXR5T2JqZWN0ICE9IGludGVyc2VjdF9lbnRpdHkgKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmVzc0VudGl0eU9iamVjdCA9IGludGVyc2VjdF9lbnRpdHk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCB0aGlzLnByZXNzRW50aXR5T2JqZWN0LmRpc3BhdGNoRXZlbnQgKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJlc3NFbnRpdHlPYmplY3QuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAncHJlc3NzdGFydC1lbnRpdHknLCBtb3VzZUV2ZW50OiBldmVudCB9ICk7XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCB0aGlzLnVzZXJNb3VzZS50eXBlID09PSAnbW91c2Vkb3duJyAmJiB0aGlzLnByZXNzT2JqZWN0ICE9IGludGVyc2VjdCApIHtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByZXNzT2JqZWN0ID0gaW50ZXJzZWN0O1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICggdGhpcy5wcmVzc09iamVjdC5kaXNwYXRjaEV2ZW50ICkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByZXNzT2JqZWN0LmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ3ByZXNzc3RhcnQnLCBtb3VzZUV2ZW50OiBldmVudCB9ICk7XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCB0aGlzLnVzZXJNb3VzZS50eXBlID09PSAnbW91c2Vtb3ZlJyB8fCB0aGlzLm9wdGlvbnMuZW5hYmxlUmV0aWNsZSApIHtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoIGludGVyc2VjdCAmJiBpbnRlcnNlY3QuZGlzcGF0Y2hFdmVudCApIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJzZWN0LmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ2hvdmVyJywgbW91c2VFdmVudDogZXZlbnQgfSApO1xuXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoIHRoaXMucHJlc3NFbnRpdHlPYmplY3QgJiYgdGhpcy5wcmVzc0VudGl0eU9iamVjdC5kaXNwYXRjaEV2ZW50ICkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByZXNzRW50aXR5T2JqZWN0LmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ3ByZXNzbW92ZS1lbnRpdHknLCBtb3VzZUV2ZW50OiBldmVudCB9ICk7XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmICggdGhpcy5wcmVzc09iamVjdCAmJiB0aGlzLnByZXNzT2JqZWN0LmRpc3BhdGNoRXZlbnQgKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJlc3NPYmplY3QuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAncHJlc3Ntb3ZlJywgbW91c2VFdmVudDogZXZlbnQgfSApO1xuXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoICFpbnRlcnNlY3RfZW50aXR5ICYmIHRoaXMucHJlc3NFbnRpdHlPYmplY3QgJiYgdGhpcy5wcmVzc0VudGl0eU9iamVjdC5kaXNwYXRjaEV2ZW50ICkge1xuXG4gICAgICAgICAgICAgICAgdGhpcy5wcmVzc0VudGl0eU9iamVjdC5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdwcmVzc3N0b3AtZW50aXR5JywgbW91c2VFdmVudDogZXZlbnQgfSApO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5wcmVzc0VudGl0eU9iamVjdCA9IHVuZGVmaW5lZDtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoICFpbnRlcnNlY3QgJiYgdGhpcy5wcmVzc09iamVjdCAmJiB0aGlzLnByZXNzT2JqZWN0LmRpc3BhdGNoRXZlbnQgKSB7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnByZXNzT2JqZWN0LmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ3ByZXNzc3RvcCcsIG1vdXNlRXZlbnQ6IGV2ZW50IH0gKTtcblxuICAgICAgICAgICAgICAgIHRoaXMucHJlc3NPYmplY3QgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgLy8gSW5mb3Nwb3QgaGFuZGxlclxuICAgICAgICBpZiAoIGludGVyc2VjdCAmJiBpbnRlcnNlY3QgaW5zdGFuY2VvZiBJbmZvc3BvdCApIHtcblxuICAgICAgICAgICAgdGhpcy5pbmZvc3BvdCA9IGludGVyc2VjdDtcblx0XHRcdFxuICAgICAgICAgICAgaWYgKCB0eXBlID09PSAnY2xpY2snICkge1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG5cbiAgICAgICAgICAgIH1cblx0XHRcdFxuXG4gICAgICAgIH0gZWxzZSBpZiAoIHRoaXMuaW5mb3Nwb3QgKSB7XG5cbiAgICAgICAgICAgIHRoaXMuaGlkZUluZm9zcG90KCk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEF1dG8gcm90YXRlXG4gICAgICAgIGlmICggdGhpcy5vcHRpb25zLmF1dG9Sb3RhdGUgJiYgdGhpcy51c2VyTW91c2UudHlwZSAhPT0gJ21vdXNlbW92ZScgKSB7XG5cbiAgICAgICAgICAgIC8vIEF1dG8tcm90YXRlIGlkbGUgdGltZXJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCggdGhpcy5hdXRvUm90YXRlUmVxdWVzdElkICk7XG5cbiAgICAgICAgICAgIGlmICggdGhpcy5jb250cm9sID09PSB0aGlzLk9yYml0Q29udHJvbHMgKSB7XG5cbiAgICAgICAgICAgICAgICB0aGlzLk9yYml0Q29udHJvbHMuYXV0b1JvdGF0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuYXV0b1JvdGF0ZVJlcXVlc3RJZCA9IHdpbmRvdy5zZXRUaW1lb3V0KCB0aGlzLmVuYWJsZUF1dG9SYXRlLmJpbmQoIHRoaXMgKSwgdGhpcy5vcHRpb25zLmF1dG9Sb3RhdGVBY3RpdmF0aW9uRHVyYXRpb24gKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cdFx0XG5cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogR2V0IGNvbnZlcnRlZCBpbnRlcnNlY3RcbiAgICAgKiBAcGFyYW0ge2FycmF5fSBpbnRlcnNlY3RzIFxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBnZXRDb252ZXJ0ZWRJbnRlcnNlY3Q6IGZ1bmN0aW9uICggaW50ZXJzZWN0cyApIHtcblxuICAgICAgICBsZXQgaW50ZXJzZWN0O1xuXG4gICAgICAgIGZvciAoIGxldCBpID0gMDsgaSA8IGludGVyc2VjdHMubGVuZ3RoOyBpKysgKSB7XG5cbiAgICAgICAgICAgIGlmICggaW50ZXJzZWN0c1tpXS5kaXN0YW5jZSA+PSAwICYmIGludGVyc2VjdHNbaV0ub2JqZWN0ICYmICFpbnRlcnNlY3RzW2ldLm9iamVjdC5wYXNzVGhyb3VnaCApIHtcblxuICAgICAgICAgICAgICAgIGlmICggaW50ZXJzZWN0c1tpXS5vYmplY3QuZW50aXR5ICYmIGludGVyc2VjdHNbaV0ub2JqZWN0LmVudGl0eS5wYXNzVGhyb3VnaCApIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICggaW50ZXJzZWN0c1tpXS5vYmplY3QuZW50aXR5ICYmICFpbnRlcnNlY3RzW2ldLm9iamVjdC5lbnRpdHkucGFzc1Rocm91Z2ggKSB7XG4gICAgICAgICAgICAgICAgICAgIGludGVyc2VjdCA9IGludGVyc2VjdHNbaV0ub2JqZWN0LmVudGl0eTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaW50ZXJzZWN0ID0gaW50ZXJzZWN0c1tpXS5vYmplY3Q7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaW50ZXJzZWN0O1xuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEhpZGUgaW5mb3Nwb3RcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgaGlkZUluZm9zcG90OiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgaWYgKCB0aGlzLmluZm9zcG90ICkge1xuXG4gICAgICAgICAgICB0aGlzLmluZm9zcG90Lm9uSG92ZXJFbmQoKTtcblxuICAgICAgICAgICAgdGhpcy5pbmZvc3BvdCA9IHVuZGVmaW5lZDtcblxuICAgICAgICB9XG5cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVG9nZ2xlIGNvbnRyb2wgYmFyXG4gICAgICogQG1lbWJlck9mIFZpZXdlclxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBmaXJlcyBWaWV3ZXIjY29udHJvbC1iYXItdG9nZ2xlXG4gICAgICovXG4gICAgdG9nZ2xlQ29udHJvbEJhcjogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGNvbnN0IHsgd2lkZ2V0IH0gPSB0aGlzO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUb2dnbGUgY29udHJvbCBiYXIgZXZlbnRcbiAgICAgICAgICogQHR5cGUge29iamVjdH1cbiAgICAgICAgICogQGV2ZW50IFZpZXdlciNjb250cm9sLWJhci10b2dnbGVcbiAgICAgICAgICovXG4gICAgICAgIGlmICggd2lkZ2V0ICkge1xuXG4gICAgICAgICAgICB3aWRnZXQuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAnY29udHJvbC1iYXItdG9nZ2xlJyB9ICk7XG5cbiAgICAgICAgfVxuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIE9uIGtleSBkb3duXG4gICAgICogQHBhcmFtIHtLZXlib2FyZEV2ZW50fSBldmVudCBcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgb25LZXlEb3duOiBmdW5jdGlvbiAoIGV2ZW50ICkge1xuXG4gICAgICAgIGlmICggdGhpcy5vcHRpb25zLm91dHB1dCAmJiB0aGlzLm9wdGlvbnMub3V0cHV0ICE9PSAnbm9uZScgJiYgZXZlbnQua2V5ID09PSAnQ29udHJvbCcgKSB7XG5cbiAgICAgICAgICAgIHRoaXMuT1VUUFVUX0lORk9TUE9UID0gdHJ1ZTtcblxuICAgICAgICB9XG5cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogT24ga2V5IHVwXG4gICAgICogQHBhcmFtIHtLZXlib2FyZEV2ZW50fSBldmVudCBcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgb25LZXlVcDogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIHRoaXMuT1VUUFVUX0lORk9TUE9UID0gZmFsc2U7XG5cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIGNvbnRyb2wgYW5kIGNhbGxiYWNrc1xuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICB1cGRhdGU6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBUV0VFTi51cGRhdGUoKTtcblxuICAgICAgICB0aGlzLnVwZGF0ZUNhbGxiYWNrcy5mb3JFYWNoKCBmdW5jdGlvbiggY2FsbGJhY2sgKXsgY2FsbGJhY2soKTsgfSApO1xuXG4gICAgICAgIHRoaXMuY29udHJvbC51cGRhdGUoKTtcblxuICAgICAgICB0aGlzLnNjZW5lLnRyYXZlcnNlKCBmdW5jdGlvbiggY2hpbGQgKXtcbiAgICAgICAgICAgIGlmICggY2hpbGQgaW5zdGFuY2VvZiBJbmZvc3BvdCBcblx0XHRcdFx0JiYgY2hpbGQuZWxlbWVudCBcblx0XHRcdFx0JiYgKCB0aGlzLmhvdmVyT2JqZWN0ID09PSBjaGlsZCBcblx0XHRcdFx0XHR8fCBjaGlsZC5lbGVtZW50LnN0eWxlLmRpc3BsYXkgIT09ICdub25lJyBcblx0XHRcdFx0XHR8fCAoY2hpbGQuZWxlbWVudC5sZWZ0ICYmIGNoaWxkLmVsZW1lbnQubGVmdC5zdHlsZS5kaXNwbGF5ICE9PSAnbm9uZScpXG5cdFx0XHRcdFx0fHwgKGNoaWxkLmVsZW1lbnQucmlnaHQgJiYgY2hpbGQuZWxlbWVudC5yaWdodC5zdHlsZS5kaXNwbGF5ICE9PSAnbm9uZScpICkgKSB7XG4gICAgICAgICAgICAgICAgaWYgKCB0aGlzLmNoZWNrU3ByaXRlSW5WaWV3cG9ydCggY2hpbGQgKSApIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyB4LCB5IH0gPSB0aGlzLmdldFNjcmVlblZlY3RvciggY2hpbGQuZ2V0V29ybGRQb3NpdGlvbiggbmV3IFRIUkVFLlZlY3RvcjMoKSApICk7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLnRyYW5zbGF0ZUVsZW1lbnQoIHgsIHkgKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZC5vbkRpc21pc3MoKTtcbiAgICAgICAgICAgICAgICB9XG5cdFx0XHRcdFxuICAgICAgICAgICAgfVxuICAgICAgICB9LmJpbmQoIHRoaXMgKSApO1xuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJlbmRlcmluZyBmdW5jdGlvbiB0byBiZSBjYWxsZWQgb24gZXZlcnkgYW5pbWF0aW9uIGZyYW1lXG4gICAgICogUmVuZGVyIHJldGljbGUgbGFzdFxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBpZiAoIHRoaXMubW9kZSA9PT0gTU9ERVMuQ0FSREJPQVJEIHx8IHRoaXMubW9kZSA9PT0gTU9ERVMuU1RFUkVPICkge1xuXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLmNsZWFyKCk7XG4gICAgICAgICAgICB0aGlzLmVmZmVjdC5yZW5kZXIoIHRoaXMuc2NlbmUsIHRoaXMuY2FtZXJhICk7XG4gICAgICAgICAgICB0aGlzLmVmZmVjdC5yZW5kZXIoIHRoaXMuc2NlbmVSZXRpY2xlLCB0aGlzLmNhbWVyYSApO1xuXHRcdFx0XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5jbGVhcigpO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5yZW5kZXIoIHRoaXMuc2NlbmUsIHRoaXMuY2FtZXJhICk7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLmNsZWFyRGVwdGgoKTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIucmVuZGVyKCB0aGlzLnNjZW5lUmV0aWNsZSwgdGhpcy5jYW1lcmEgKTtcblxuICAgICAgICB9XG5cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQW5pbWF0ZVxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBhbmltYXRlOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgdGhpcy5yZXF1ZXN0QW5pbWF0aW9uSWQgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCB0aGlzLmFuaW1hdGUuYmluZCggdGhpcyApICk7XG5cbiAgICAgICAgdGhpcy5vbkNoYW5nZSgpO1xuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIE9uIGNoYW5nZVxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBvbkNoYW5nZTogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG5cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmVnaXN0ZXIgbW91c2UgYW5kIHRvdWNoIGV2ZW50IG9uIGNvbnRhaW5lclxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICByZWdpc3Rlck1vdXNlQW5kVG91Y2hFdmVudHM6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBjb25zdCBvcHRpb25zID0geyBwYXNzaXZlOiBmYWxzZSB9O1xuXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZWRvd24nICwgXHR0aGlzLkhBTkRMRVJfTU9VU0VfRE9XTiwgb3B0aW9ucyApO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCAnbW91c2Vtb3ZlJyAsIFx0dGhpcy5IQU5ETEVSX01PVVNFX01PVkUsIG9wdGlvbnMgKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNldXAnXHQgLCBcdHRoaXMuSEFORExFUl9NT1VTRV9VUCAgLCBvcHRpb25zICk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoICd0b3VjaHN0YXJ0JywgXHR0aGlzLkhBTkRMRVJfTU9VU0VfRE9XTiwgb3B0aW9ucyApO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCAndG91Y2hlbmQnICAsIFx0dGhpcy5IQU5ETEVSX01PVVNFX1VQICAsIG9wdGlvbnMgKTtcblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBVbnJlZ2lzdGVyIG1vdXNlIGFuZCB0b3VjaCBldmVudCBvbiBjb250YWluZXJcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgdW5yZWdpc3Rlck1vdXNlQW5kVG91Y2hFdmVudHM6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVFdmVudExpc3RlbmVyKCAnbW91c2Vkb3duJyAsICB0aGlzLkhBTkRMRVJfTU9VU0VfRE9XTiwgZmFsc2UgKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ21vdXNlbW92ZScgLCAgdGhpcy5IQU5ETEVSX01PVVNFX01PVkUsIGZhbHNlICk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoICdtb3VzZXVwJ1x0LCAgdGhpcy5IQU5ETEVSX01PVVNFX1VQICAsIGZhbHNlICk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoICd0b3VjaHN0YXJ0JywgIHRoaXMuSEFORExFUl9NT1VTRV9ET1dOLCBmYWxzZSApO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVFdmVudExpc3RlbmVyKCAndG91Y2hlbmQnICAsICB0aGlzLkhBTkRMRVJfTU9VU0VfVVAgICwgZmFsc2UgKTtcblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZWdpc3RlciByZXRpY2xlIGV2ZW50XG4gICAgICogQG1lbWJlck9mIFZpZXdlclxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIHJlZ2lzdGVyUmV0aWNsZUV2ZW50OiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgdGhpcy5hZGRVcGRhdGVDYWxsYmFjayggdGhpcy5IQU5ETEVSX1RBUCApO1xuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFVucmVnaXN0ZXIgcmV0aWNsZSBldmVudFxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICB1bnJlZ2lzdGVyUmV0aWNsZUV2ZW50OiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgdGhpcy5yZW1vdmVVcGRhdGVDYWxsYmFjayggdGhpcy5IQU5ETEVSX1RBUCApO1xuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSByZXRpY2xlIGV2ZW50XG4gICAgICogQG1lbWJlck9mIFZpZXdlclxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIHVwZGF0ZVJldGljbGVFdmVudDogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGNvbnN0IGNsaWVudFggPSB0aGlzLmNvbnRhaW5lci5jbGllbnRXaWR0aCAvIDIgKyB0aGlzLmNvbnRhaW5lci5vZmZzZXRMZWZ0O1xuICAgICAgICBjb25zdCBjbGllbnRZID0gdGhpcy5jb250YWluZXIuY2xpZW50SGVpZ2h0IC8gMjtcblxuICAgICAgICB0aGlzLnJlbW92ZVVwZGF0ZUNhbGxiYWNrKCB0aGlzLkhBTkRMRVJfVEFQICk7XG4gICAgICAgIHRoaXMuSEFORExFUl9UQVAgPSB0aGlzLm9uVGFwLmJpbmQoIHRoaXMsIHsgY2xpZW50WCwgY2xpZW50WSB9ICk7XG4gICAgICAgIHRoaXMuYWRkVXBkYXRlQ2FsbGJhY2soIHRoaXMuSEFORExFUl9UQVAgKTtcblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZWdpc3RlciBjb250YWluZXIgYW5kIHdpbmRvdyBsaXN0ZW5lcnNcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgcmVnaXN0ZXJFdmVudExpc3RlbmVyczogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIC8vIFJlc2l6ZSBFdmVudFxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggJ3Jlc2l6ZScgLCB0aGlzLkhBTkRMRVJfV0lORE9XX1JFU0laRSwgdHJ1ZSApO1xuXG4gICAgICAgIC8vIEtleWJvYXJkIEV2ZW50XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCAna2V5ZG93bicsIHRoaXMuSEFORExFUl9LRVlfRE9XTiwgdHJ1ZSApO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggJ2tleXVwJyAgLCB0aGlzLkhBTkRMRVJfS0VZX1VQXHQgLCB0cnVlICk7XG5cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVW5yZWdpc3RlciBjb250YWluZXIgYW5kIHdpbmRvdyBsaXN0ZW5lcnNcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgdW5yZWdpc3RlckV2ZW50TGlzdGVuZXJzOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgLy8gUmVzaXplIEV2ZW50XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCAncmVzaXplJyAsIHRoaXMuSEFORExFUl9XSU5ET1dfUkVTSVpFLCB0cnVlICk7XG5cbiAgICAgICAgLy8gS2V5Ym9hcmQgRXZlbnRcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdrZXlkb3duJywgdGhpcy5IQU5ETEVSX0tFWV9ET1dOLCB0cnVlICk7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCAna2V5dXAnICAsIHRoaXMuSEFORExFUl9LRVlfVVAgICwgdHJ1ZSApO1xuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIERpc3Bvc2UgYWxsIHNjZW5lIG9iamVjdHMgYW5kIGNsZWFyIGNhY2hlXG4gICAgICogQG1lbWJlck9mIFZpZXdlclxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIGRpc3Bvc2U6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICB0aGlzLnR3ZWVuTGVmdEFuaW1hdGlvbi5zdG9wKCk7XG4gICAgICAgIHRoaXMudHdlZW5VcEFuaW1hdGlvbi5zdG9wKCk7XG5cbiAgICAgICAgLy8gVW5yZWdpc3RlciBkb20gZXZlbnQgbGlzdGVuZXJzXG4gICAgICAgIHRoaXMudW5yZWdpc3RlckV2ZW50TGlzdGVuZXJzKCk7XG5cbiAgICAgICAgLy8gcmVjdXJzaXZlIGRpc3Bvc2FsIG9uIDNkIG9iamVjdHNcbiAgICAgICAgZnVuY3Rpb24gcmVjdXJzaXZlRGlzcG9zZSAoIG9iamVjdCApIHtcblxuICAgICAgICAgICAgZm9yICggbGV0IGkgPSBvYmplY3QuY2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0gKSB7XG5cbiAgICAgICAgICAgICAgICByZWN1cnNpdmVEaXNwb3NlKCBvYmplY3QuY2hpbGRyZW5baV0gKTtcbiAgICAgICAgICAgICAgICBvYmplY3QucmVtb3ZlKCBvYmplY3QuY2hpbGRyZW5baV0gKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIG9iamVjdCBpbnN0YW5jZW9mIFBhbm9yYW1hIHx8IG9iamVjdCBpbnN0YW5jZW9mIEluZm9zcG90ICkge1xuXG4gICAgICAgICAgICAgICAgb2JqZWN0LmRpc3Bvc2UoKTtcbiAgICAgICAgICAgICAgICBvYmplY3QgPSBudWxsO1xuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCBvYmplY3QuZGlzcGF0Y2hFdmVudCApe1xuXG4gICAgICAgICAgICAgICAgb2JqZWN0LmRpc3BhdGNoRXZlbnQoICdkaXNwb3NlJyApO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHJlY3Vyc2l2ZURpc3Bvc2UoIHRoaXMuc2NlbmUgKTtcblxuICAgICAgICAvLyBkaXNwb3NlIHdpZGdldFxuICAgICAgICBpZiAoIHRoaXMud2lkZ2V0ICkge1xuXG4gICAgICAgICAgICB0aGlzLndpZGdldC5kaXNwb3NlKCk7XG4gICAgICAgICAgICB0aGlzLndpZGdldCA9IG51bGw7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNsZWFyIGNhY2hlXG4gICAgICAgIGlmICggVEhSRUUuQ2FjaGUgJiYgVEhSRUUuQ2FjaGUuZW5hYmxlZCApIHtcblxuICAgICAgICAgICAgVEhSRUUuQ2FjaGUuY2xlYXIoKTtcblxuICAgICAgICB9XG5cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogRGVzdHJveSB2aWV3ZXIgYnkgZGlzcG9zaW5nIGFuZCBzdG9wcGluZyByZXF1ZXN0QW5pbWF0aW9uRnJhbWVcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgZGVzdHJveTogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIHRoaXMuZGlzcG9zZSgpO1xuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUoIHRoaXMucmVxdWVzdEFuaW1hdGlvbklkICk7XHRcdFxuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIE9uIHBhbm9yYW1hIGRpc3Bvc2VcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgb25QYW5vcmFtYURpc3Bvc2U6IGZ1bmN0aW9uICggcGFub3JhbWEgKSB7XG5cbiAgICAgICAgaWYgKCBwYW5vcmFtYSBpbnN0YW5jZW9mIFZpZGVvUGFub3JhbWEgKSB7XG5cbiAgICAgICAgICAgIHRoaXMuaGlkZVZpZGVvV2lkZ2V0KCk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggcGFub3JhbWEgPT09IHRoaXMucGFub3JhbWEgKSB7XG5cbiAgICAgICAgICAgIHRoaXMucGFub3JhbWEgPSBudWxsO1xuXG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBMb2FkIGFqYXggY2FsbFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgLSBVUkwgdG8gYmUgcmVxdWVzdGVkXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gW2NhbGxiYWNrXSAtIENhbGxiYWNrIGFmdGVyIHJlcXVlc3QgY29tcGxldGVzXG4gICAgICogQG1lbWJlck9mIFZpZXdlclxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIGxvYWRBc3luY1JlcXVlc3Q6IGZ1bmN0aW9uICggdXJsLCBjYWxsYmFjayA9ICgpID0+IHt9ICkge1xuXG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSBuZXcgd2luZG93LlhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgIHJlcXVlc3Qub25sb2FkZW5kID0gZnVuY3Rpb24gKCBldmVudCApIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKCBldmVudCApO1xuICAgICAgICB9O1xuICAgICAgICByZXF1ZXN0Lm9wZW4oICdHRVQnLCB1cmwsIHRydWUgKTtcbiAgICAgICAgcmVxdWVzdC5zZW5kKCBudWxsICk7XG5cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVmlldyBpbmRpY2F0b3IgaW4gdXBwZXIgbGVmdFxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBhZGRWaWV3SW5kaWNhdG9yOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuXG4gICAgICAgIGZ1bmN0aW9uIGxvYWRWaWV3SW5kaWNhdG9yICggYXN5bmNFdmVudCApIHtcblxuICAgICAgICAgICAgaWYgKCBhc3luY0V2ZW50LmxvYWRlZCA9PT0gMCApIHJldHVybjtcblxuICAgICAgICAgICAgY29uc3Qgdmlld0luZGljYXRvckRpdiA9IGFzeW5jRXZlbnQudGFyZ2V0LnJlc3BvbnNlWE1MLmRvY3VtZW50RWxlbWVudDtcbiAgICAgICAgICAgIHZpZXdJbmRpY2F0b3JEaXYuc3R5bGUud2lkdGggPSBzY29wZS52aWV3SW5kaWNhdG9yU2l6ZSArICdweCc7XG4gICAgICAgICAgICB2aWV3SW5kaWNhdG9yRGl2LnN0eWxlLmhlaWdodCA9IHNjb3BlLnZpZXdJbmRpY2F0b3JTaXplICsgJ3B4JztcbiAgICAgICAgICAgIHZpZXdJbmRpY2F0b3JEaXYuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICAgICAgdmlld0luZGljYXRvckRpdi5zdHlsZS50b3AgPSAnMTBweCc7XG4gICAgICAgICAgICB2aWV3SW5kaWNhdG9yRGl2LnN0eWxlLmxlZnQgPSAnMTBweCc7XG4gICAgICAgICAgICB2aWV3SW5kaWNhdG9yRGl2LnN0eWxlLm9wYWNpdHkgPSAnMC41JztcbiAgICAgICAgICAgIHZpZXdJbmRpY2F0b3JEaXYuc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xuICAgICAgICAgICAgdmlld0luZGljYXRvckRpdi5pZCA9ICdwYW5vbGVucy12aWV3LWluZGljYXRvci1jb250YWluZXInO1xuXG4gICAgICAgICAgICBzY29wZS5jb250YWluZXIuYXBwZW5kQ2hpbGQoIHZpZXdJbmRpY2F0b3JEaXYgKTtcblxuICAgICAgICAgICAgY29uc3QgaW5kaWNhdG9yID0gdmlld0luZGljYXRvckRpdi5xdWVyeVNlbGVjdG9yKCAnI2luZGljYXRvcicgKTtcbiAgICAgICAgICAgIGNvbnN0IHNldEluZGljYXRvckQgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgICAgICBzY29wZS5yYWRpdXMgPSBzY29wZS52aWV3SW5kaWNhdG9yU2l6ZSAqIDAuMjI1O1xuICAgICAgICAgICAgICAgIHNjb3BlLmN1cnJlbnRQYW5vQW5nbGUgPSBzY29wZS5jYW1lcmEucm90YXRpb24ueSAtIFRIUkVFLk1hdGguZGVnVG9SYWQoIDkwICk7XG4gICAgICAgICAgICAgICAgc2NvcGUuZm92QW5nbGUgPSBUSFJFRS5NYXRoLmRlZ1RvUmFkKCBzY29wZS5jYW1lcmEuZm92ICkgO1xuICAgICAgICAgICAgICAgIHNjb3BlLmxlZnRBbmdsZSA9IC1zY29wZS5jdXJyZW50UGFub0FuZ2xlIC0gc2NvcGUuZm92QW5nbGUgLyAyO1xuICAgICAgICAgICAgICAgIHNjb3BlLnJpZ2h0QW5nbGUgPSAtc2NvcGUuY3VycmVudFBhbm9BbmdsZSArIHNjb3BlLmZvdkFuZ2xlIC8gMjtcbiAgICAgICAgICAgICAgICBzY29wZS5sZWZ0WCA9IHNjb3BlLnJhZGl1cyAqIE1hdGguY29zKCBzY29wZS5sZWZ0QW5nbGUgKTtcbiAgICAgICAgICAgICAgICBzY29wZS5sZWZ0WSA9IHNjb3BlLnJhZGl1cyAqIE1hdGguc2luKCBzY29wZS5sZWZ0QW5nbGUgKTtcbiAgICAgICAgICAgICAgICBzY29wZS5yaWdodFggPSBzY29wZS5yYWRpdXMgKiBNYXRoLmNvcyggc2NvcGUucmlnaHRBbmdsZSApO1xuICAgICAgICAgICAgICAgIHNjb3BlLnJpZ2h0WSA9IHNjb3BlLnJhZGl1cyAqIE1hdGguc2luKCBzY29wZS5yaWdodEFuZ2xlICk7XG4gICAgICAgICAgICAgICAgc2NvcGUuaW5kaWNhdG9yRCA9ICdNICcgKyBzY29wZS5sZWZ0WCArICcgJyArIHNjb3BlLmxlZnRZICsgJyBBICcgKyBzY29wZS5yYWRpdXMgKyAnICcgKyBzY29wZS5yYWRpdXMgKyAnIDAgMCAxICcgKyBzY29wZS5yaWdodFggKyAnICcgKyBzY29wZS5yaWdodFk7XG5cbiAgICAgICAgICAgICAgICBpZiAoIHNjb3BlLmxlZnRYICYmIHNjb3BlLmxlZnRZICYmIHNjb3BlLnJpZ2h0WCAmJiBzY29wZS5yaWdodFkgJiYgc2NvcGUucmFkaXVzICkge1xuXG4gICAgICAgICAgICAgICAgICAgIGluZGljYXRvci5zZXRBdHRyaWJ1dGUoICdkJywgc2NvcGUuaW5kaWNhdG9yRCApO1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBzY29wZS5hZGRVcGRhdGVDYWxsYmFjayggc2V0SW5kaWNhdG9yRCApO1xuXG4gICAgICAgICAgICBjb25zdCBpbmRpY2F0b3JPbk1vdXNlRW50ZXIgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG5cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGNvbnN0IGluZGljYXRvck9uTW91c2VMZWF2ZSA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgICAgIHRoaXMuc3R5bGUub3BhY2l0eSA9ICcwLjUnO1xuXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB2aWV3SW5kaWNhdG9yRGl2LmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZWVudGVyJywgaW5kaWNhdG9yT25Nb3VzZUVudGVyICk7XG4gICAgICAgICAgICB2aWV3SW5kaWNhdG9yRGl2LmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZWxlYXZlJywgaW5kaWNhdG9yT25Nb3VzZUxlYXZlICk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmxvYWRBc3luY1JlcXVlc3QoIERhdGFJbWFnZS5WaWV3SW5kaWNhdG9yLCBsb2FkVmlld0luZGljYXRvciApO1xuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEFwcGVuZCBjdXN0b20gY29udHJvbCBpdGVtIHRvIGV4aXN0aW5nIGNvbnRyb2wgYmFyXG4gICAgICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb249e31dIC0gU3R5bGUgb2JqZWN0IHRvIG92ZXJ3aXJ0ZSBkZWZhdWx0IGVsZW1lbnQgc3R5bGUuIEl0IHRha2VzICdzdHlsZScsICdvblRhcCcgYW5kICdncm91cCcgcHJvcGVydGllcy5cbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgYXBwZW5kQ29udHJvbEl0ZW06IGZ1bmN0aW9uICggb3B0aW9uICkge1xuXG4gICAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLndpZGdldC5jcmVhdGVDdXN0b21JdGVtKCBvcHRpb24gKTtcdFx0XG5cbiAgICAgICAgaWYgKCBvcHRpb24uZ3JvdXAgPT09ICd2aWRlbycgKSB7XG5cbiAgICAgICAgICAgIHRoaXMud2lkZ2V0LnZpZGVvRWxlbWVudC5hcHBlbmRDaGlsZCggaXRlbSApO1xuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIHRoaXMud2lkZ2V0LmJhckVsZW1lbnQuYXBwZW5kQ2hpbGQoIGl0ZW0gKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGl0ZW07XG5cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ2xlYXIgYWxsIGNhY2hlZCBmaWxlc1xuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBjbGVhckFsbENhY2hlOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgVEhSRUUuQ2FjaGUuY2xlYXIoKTtcblxuICAgIH1cblxufSApO1xuXG5leHBvcnQgeyBWaWV3ZXIgfTsiLCJpbXBvcnQgeyBUSFJFRV9SRVZJU0lPTiB9IGZyb20gJy4vQ29uc3RhbnRzJztcblxuaWYgKCBUSFJFRS5SRVZJU0lPTiAhPSBUSFJFRV9SRVZJU0lPTiApIHtcblxuICAgIGNvbnNvbGUud2FybiggYHRocmVlLmpzIHZlcnNpb24gaXMgbm90IG1hdGNoZWQuIFBsZWFzZSBjb25zaWRlciB1c2UgdGhlIHRhcmdldCByZXZpc2lvbiAke1RIUkVFX1JFVklTSU9OfWAgKTtcblxufSIsIi8qKlxuICogUGFub2xlbnMuanNcbiAqIEBhdXRob3IgcGNoZW42NlxuICogQG5hbWVzcGFjZSBQQU5PTEVOU1xuICovXG5leHBvcnQgKiBmcm9tICcuL0NvbnN0YW50cyc7XG5leHBvcnQgeyBEYXRhSW1hZ2UgfSBmcm9tICcuL0RhdGFJbWFnZSc7XG5leHBvcnQgeyBJbWFnZUxvYWRlciB9IGZyb20gJy4vbG9hZGVycy9JbWFnZUxvYWRlcic7XG5leHBvcnQgeyBUZXh0dXJlTG9hZGVyIH0gZnJvbSAnLi9sb2FkZXJzL1RleHR1cmVMb2FkZXInO1xuZXhwb3J0IHsgQ3ViZVRleHR1cmVMb2FkZXIgfSBmcm9tICcuL2xvYWRlcnMvQ3ViZVRleHR1cmVMb2FkZXInO1xuZXhwb3J0IHsgTWVkaWEgfSBmcm9tICcuL21lZGlhL01lZGlhJztcbmV4cG9ydCB7IFJldGljbGUgfSBmcm9tICcuL2ludGVyZmFjZS9SZXRpY2xlJztcbmV4cG9ydCB7IEluZm9zcG90IH0gZnJvbSAnLi9pbmZvc3BvdC9JbmZvc3BvdCc7XG5leHBvcnQgeyBXaWRnZXQgfSBmcm9tICcuL3dpZGdldC9XaWRnZXQnO1xuZXhwb3J0IHsgUGFub3JhbWEgfSBmcm9tICcuL3Bhbm9yYW1hL1Bhbm9yYW1hJztcbmV4cG9ydCB7IEltYWdlUGFub3JhbWEgfSBmcm9tICcuL3Bhbm9yYW1hL0ltYWdlUGFub3JhbWEnO1xuZXhwb3J0IHsgRW1wdHlQYW5vcmFtYSB9IGZyb20gJy4vcGFub3JhbWEvRW1wdHlQYW5vcmFtYSc7XG5leHBvcnQgeyBDdWJlUGFub3JhbWEgfSBmcm9tICcuL3Bhbm9yYW1hL0N1YmVQYW5vcmFtYSc7XG5leHBvcnQgeyBCYXNpY1Bhbm9yYW1hIH0gZnJvbSAnLi9wYW5vcmFtYS9CYXNpY1Bhbm9yYW1hJztcbmV4cG9ydCB7IFZpZGVvUGFub3JhbWEgfSBmcm9tICcuL3Bhbm9yYW1hL1ZpZGVvUGFub3JhbWEnO1xuZXhwb3J0IHsgR29vZ2xlU3RyZWV0dmlld1Bhbm9yYW1hIH0gZnJvbSAnLi9wYW5vcmFtYS9Hb29nbGVTdHJlZXR2aWV3UGFub3JhbWEnO1xuZXhwb3J0IHsgTGl0dGxlUGxhbmV0IH0gZnJvbSAnLi9wYW5vcmFtYS9MaXR0bGVQbGFuZXQnO1xuZXhwb3J0IHsgSW1hZ2VMaXR0bGVQbGFuZXQgfSBmcm9tICcuL3Bhbm9yYW1hL0ltYWdlTGl0dGxlUGxhbmV0JztcbmV4cG9ydCB7IENhbWVyYVBhbm9yYW1hIH0gZnJvbSAnLi9wYW5vcmFtYS9DYW1lcmFQYW5vcmFtYSc7XG5leHBvcnQgeyBWaWV3ZXIgfSBmcm9tICcuL3ZpZXdlci9WaWV3ZXInO1xuaW1wb3J0ICcuL0NoZWNrJztcblxuLy8gZXhwb3NlIFRXRUVOXG5pbXBvcnQgVFdFRU4gZnJvbSAnQHR3ZWVuanMvdHdlZW4uanMnO1xud2luZG93LlRXRUVOID0gVFdFRU47Il0sIm5hbWVzIjpbIlRIUkVFLkNhY2hlIiwiVEhSRUUuVGV4dHVyZSIsIlRIUkVFLlJHQkZvcm1hdCIsIlRIUkVFLlJHQkFGb3JtYXQiLCJUSFJFRS5DdWJlVGV4dHVyZSIsIlRIUkVFLkV2ZW50RGlzcGF0Y2hlciIsIlRIUkVFLlZpZGVvVGV4dHVyZSIsIlRIUkVFLkxpbmVhckZpbHRlciIsIlRIUkVFLlNwcml0ZU1hdGVyaWFsIiwiVEhSRUUuU3ByaXRlIiwiVEhSRUUuQ29sb3IiLCJUSFJFRS5DYW52YXNUZXh0dXJlIiwidGhpcyIsIlRIUkVFLkRvdWJsZVNpZGUiLCJUV0VFTiIsIlRIUkVFLlZlY3RvcjMiLCJUSFJFRS5NZXNoIiwiVEhSRUUuQmFja1NpZGUiLCJUSFJFRS5PYmplY3QzRCIsIlRIUkVFLlNwaGVyZUJ1ZmZlckdlb21ldHJ5IiwiVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwiLCJUSFJFRS5CdWZmZXJHZW9tZXRyeSIsIlRIUkVFLkJ1ZmZlckF0dHJpYnV0ZSIsIlRIUkVFLlNoYWRlckxpYiIsIlRIUkVFLkJveEJ1ZmZlckdlb21ldHJ5IiwiVEhSRUUuU2hhZGVyTWF0ZXJpYWwiLCJUSFJFRS5NYXRyaXg0IiwiVEhSRUUuVmVjdG9yMiIsIlRIUkVFLlF1YXRlcm5pb24iLCJUSFJFRS5QbGFuZUJ1ZmZlckdlb21ldHJ5IiwiVEhSRUUuTWF0aCIsIlRIUkVFLk1PVVNFIiwiVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEiLCJUSFJFRS5PcnRob2dyYXBoaWNDYW1lcmEiLCJUSFJFRS5FdWxlciIsIlRIUkVFLlNjZW5lIiwiVEhSRUUuU3RlcmVvQ2FtZXJhIiwiVEhSRUUuTmVhcmVzdEZpbHRlciIsIlRIUkVFLldlYkdMUmVuZGVyVGFyZ2V0IiwiVEhSRUUuV2ViR0xSZW5kZXJlciIsIlRIUkVFLlJheWNhc3RlciIsIlRIUkVFLkZydXN0dW0iLCJUSFJFRS5SRVZJU0lPTiJdLCJtYXBwaW5ncyI6Ijs7OztBQUVBOzs7Ozs7QUFNQSxBQUFZLE1BQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUM7Ozs7Ozs7O0FBUWxELEFBQVksTUFBQyxPQUFPLEdBQUcsT0FBTyxDQUFDOzs7Ozs7OztBQVEvQixBQUFZLE1BQUMsY0FBYyxHQUFHLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUM7Ozs7Ozs7O0FBUXZFLEFBQVksTUFBQyxhQUFhLEdBQUcsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLENBQUM7Ozs7Ozs7OztBQVM5RSxBQUFZLE1BQUMsUUFBUSxHQUFHLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxpQkFBaUIsRUFBRSxDQUFDLEVBQUUsQ0FBQzs7Ozs7Ozs7Ozs7QUFXM0QsQUFBWSxNQUFDLEtBQUssR0FBRyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUU7O0FDcER2RTs7Ozs7Ozs7Ozs7Ozs7OztBQWdCQSxBQUFLLE1BQUMsU0FBUyxHQUFHO0lBQ2QsSUFBSSxFQUFFLDRyQ0FBNHJDO0lBQ2xzQyxLQUFLLEVBQUUsd3dDQUF3d0M7SUFDL3dDLGVBQWUsRUFBRSxnV0FBZ1c7SUFDalgsZUFB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RTs7RUFFM0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7RUFDckIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztFQUNkLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDdEIsSUFBSSxFQUFFLEdBQUcsS0FBSyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDOztFQUU5QyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7O0dBRWxCLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtJQUNWLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEM7O0dBRUQsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7O0dBRTNFLE1BQU07O0dBRU4sSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO0lBQ1YsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3REOztHQUVELElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtJQUNWLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakU7O0dBRUQsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7O0dBRTdGOztFQUVEOztDQUVELEtBQUssRUFBRTs7RUFFTixNQUFNLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRTs7R0FFNUIsT0FBTyxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQzs7R0FFMUI7O0VBRUQsU0FBUyxFQUFFLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRTs7R0FFMUIsSUFBSSxFQUFFLEdBQUcsS0FBSyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDOztHQUU3QyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzs7R0FFakM7O0VBRUQsU0FBUyxFQUFFLENBQUMsWUFBWTs7R0FFdkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7R0FFWixPQUFPLFVBQVUsQ0FBQyxFQUFFOztJQUVuQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7O0lBRVYsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7S0FDVCxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUNaOztJQUVELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7S0FDM0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNQOztJQUVELENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDVCxPQUFPLENBQUMsQ0FBQzs7SUFFVCxDQUFDOztHQUVGLEdBQUc7O0VBRUosVUFBVSxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRTs7R0FFeEMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLEdBQUcsQ0FBQztHQUN6QixJQUFJLEVBQUUsR0FBRyxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksR0FBRyxDQUFDO0dBQ3pCLElBQUksRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7R0FDZixJQUFJLEVBQUUsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDOztHQUVoQixPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDOztHQUUvRjs7RUFFRDs7Q0FFRCxDQUFDOzs7QUFHRixDQUFDLFVBQVUsSUFBSSxFQUFFOztDQUVoQixBQU95RTs7O0VBR3hFLGNBQWMsR0FBRyxLQUFLLENBQUM7O0VBRXZCLEFBS0E7O0NBRUQsRUFBRUssQUFBSSxDQUFDLENBQUM7OztBQy81QlQ7Ozs7Ozs7QUFPQSxTQUFTLFFBQVEsR0FBRyxLQUFLLEdBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRSxRQUFRLEdBQUc7O0lBRWxELE1BQU0sUUFBUSxHQUFHLEdBQUcsRUFBRSxXQUFXLEdBQUcsR0FBRyxDQUFDOztJQUV4QyxRQUFRLEdBQUcsUUFBUSxJQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUM7O0lBRXRDSCxNQUFZLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDOztJQUUxQixJQUFJLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQzs7SUFFdkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLEtBQUssU0FBUyxHQUFHLFFBQVEsR0FBRyxJQUFJLENBQUM7SUFDekQsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7Ozs7OztJQU14QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQzs7SUFFM0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFDcEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7SUFDdkIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7O0lBRXhCLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQzs7SUFFekIsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUNsQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDOztJQUUxQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQzs7SUFFdEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDOzs7SUFHcEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7O0lBRTFCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHSSxVQUFnQixDQUFDO0lBQ3RDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztJQUNoQyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7SUFDakMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDOztJQUUxQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzFDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJQSxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7OztJQUc1QyxNQUFNLFFBQVEsR0FBRyxXQUFXLE9BQU8sR0FBRzs7UUFFbEMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxPQUFPLEVBQUU7O1FBRWpDLE1BQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO1FBQ3pELE1BQU0sWUFBWSxHQUFHLElBQUlDLE9BQWEsRUFBRSxDQUFDOztRQUV6QyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLFlBQVksSUFBSSxFQUFFLENBQUM7UUFDdkQsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxhQUFhLElBQUksRUFBRSxDQUFDOztRQUV6RCxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxLQUFLLEdBQUcsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQzs7UUFFMUMsWUFBWSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7O1FBRWhDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJRCxLQUFLLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUU7YUFDaEQsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLFlBQVksQ0FBQyxDQUFDLEdBQUcsV0FBVyxFQUFFLENBQUMsRUFBRSxZQUFZLENBQUMsQ0FBQyxHQUFHLFdBQVcsRUFBRSxFQUFFLFFBQVEsRUFBRTthQUNwRixNQUFNLEVBQUVBLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDOztRQUV4QyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSUEsS0FBSyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFO2FBQ2xELEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxZQUFZLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxZQUFZLENBQUMsQ0FBQyxFQUFFLEVBQUUsUUFBUSxFQUFFO2FBQ3hELE1BQU0sRUFBRUEsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUM7O1FBRXhDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxHQUFHLE9BQU8sQ0FBQztRQUM1QixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7O0tBRXBDLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDOzs7SUFHZixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUlBLEtBQUssQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRTtTQUNoRCxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQUUsUUFBUSxFQUFFO1NBQzlCLE9BQU8sRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUU7U0FDaEQsT0FBTyxFQUFFLE1BQU07WUFDWixJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxDQUFDLENBQUM7U0FDOUMsRUFBRTtTQUNGLFVBQVUsRUFBRSxNQUFNO1lBQ2YsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsQ0FBQyxDQUFDO1NBQ2pELEVBQUU7U0FDRixNQUFNLEVBQUVBLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDOztJQUV4QyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUlBLEtBQUssQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRTtTQUNoRCxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQUUsUUFBUSxFQUFFO1NBQzlCLE9BQU8sRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUU7U0FDakQsT0FBTyxFQUFFLE1BQU07WUFDWixJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxDQUFDLENBQUM7U0FDOUMsRUFBRTtTQUNGLFVBQVUsRUFBRSxNQUFNO1lBQ2YsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsQ0FBQyxDQUFDO1NBQ2pELEVBQUU7U0FDRixNQUFNLEVBQUVBLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDOzs7SUFHeEMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDL0MsSUFBSSxDQUFDLGdCQUFnQixFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDL0MsSUFBSSxDQUFDLGdCQUFnQixFQUFFLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDekQsSUFBSSxDQUFDLGdCQUFnQixFQUFFLFlBQVksRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdkQsSUFBSSxDQUFDLGdCQUFnQixFQUFFLDBCQUEwQixFQUFFLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUMxRSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQztJQUM5RSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuRCxJQUFJLENBQUMsZ0JBQWdCLEVBQUUseUJBQXlCLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDOztJQUV4RSxhQUFhLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsQ0FBQzs7Q0FFNUMsQUFDRDtBQUNBLFFBQVEsQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsTUFBTSxFQUFFTCxNQUFZLENBQUMsU0FBUyxFQUFFLEVBQUU7O0lBRXpFLFdBQVcsRUFBRSxRQUFROzs7Ozs7OztJQVFyQixZQUFZLEVBQUUsV0FBVyxJQUFJLEdBQUc7O1FBRTVCLElBQUksU0FBUyxDQUFDOztRQUVkLEtBQUssSUFBSSxZQUFZLFdBQVcsR0FBRzs7WUFFL0IsU0FBUyxHQUFHLElBQUksQ0FBQzs7U0FFcEIsTUFBTSxLQUFLLElBQUksSUFBSSxJQUFJLENBQUMsU0FBUyxHQUFHOztZQUVqQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQzs7U0FFOUI7OztRQUdELEtBQUssU0FBUyxJQUFJLElBQUksQ0FBQyxPQUFPLEdBQUc7O1lBRTdCLFNBQVMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDOztTQUV6Qzs7UUFFRCxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQzs7S0FFOUI7Ozs7Ozs7O0lBUUQsWUFBWSxFQUFFLFlBQVk7O1FBRXRCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQzs7S0FFekI7Ozs7Ozs7OztJQVNELE9BQU8sRUFBRSxXQUFXLEtBQUssR0FBRzs7UUFFeEIsS0FBSyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUUsR0FBRzs7WUFFdkMsSUFBSSxDQUFDLFlBQVksRUFBRSxLQUFLLEVBQUUsQ0FBQzs7O1lBRzNCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDOztTQUUzQjs7S0FFSjs7Ozs7Ozs7SUFRRCxTQUFTLEVBQUUsWUFBWTs7UUFFbkIsS0FBSyxJQUFJLENBQUMsT0FBTyxHQUFHOztZQUVoQixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztZQUMxQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7O1NBRXJCOztLQUVKOzs7Ozs7Ozs7SUFTRCxPQUFPLEVBQUUsWUFBWSxFQUFFOzs7Ozs7Ozs7SUFTdkIsWUFBWSxFQUFFLFdBQVcsS0FBSyxHQUFHOztRQUU3QixLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFOztRQUV2QyxNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxNQUFNLElBQUksQ0FBQyxJQUFJLEtBQUssS0FBSyxDQUFDLE1BQU0sR0FBRyxTQUFTLEdBQUcsU0FBUyxFQUFFLENBQUM7UUFDL0YsTUFBTSxFQUFFLGtCQUFrQixFQUFFLGdCQUFnQixFQUFFLE9BQU8sRUFBRSxHQUFHLElBQUksQ0FBQzs7UUFFL0QsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDdkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLFdBQVcsQ0FBQzs7UUFFMUMsS0FBSyxJQUFJLENBQUMsUUFBUSxHQUFHOztZQUVqQixrQkFBa0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUMxQixnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQzs7U0FFNUI7O1FBRUQsS0FBSyxPQUFPLElBQUksS0FBSyxDQUFDLFVBQVUsQ0FBQyxPQUFPLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxVQUFVLENBQUMsT0FBTyxJQUFJLENBQUMsR0FBRzs7WUFFN0UsTUFBTSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsT0FBTyxDQUFDOztZQUV2QyxLQUFLLElBQUksQ0FBQyxJQUFJLEtBQUssS0FBSyxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLEtBQUssQ0FBQyxNQUFNLEdBQUc7O2dCQUUvRCxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztnQkFDdkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO2dCQUM3QixLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7OztnQkFHOUIsT0FBTyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO2dCQUNsQyxPQUFPLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7O2FBRXZDLE1BQU07O2dCQUVILEtBQUssQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO2dCQUN4QixLQUFLLElBQUksR0FBRyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxFQUFFO2dCQUM1QyxLQUFLLEtBQUssR0FBRyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxFQUFFOzs7Z0JBRzlDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQztnQkFDckMsT0FBTyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDOzthQUUxQzs7U0FFSjs7S0FFSjs7Ozs7Ozs7SUFRRCxVQUFVLEVBQUUsWUFBWTs7UUFFcEIsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRTs7UUFFdkMsTUFBTSxFQUFFLGtCQUFrQixFQUFFLGdCQUFnQixFQUFFLE9BQU8sRUFBRSxHQUFHLElBQUksQ0FBQzs7UUFFL0QsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQzs7UUFFeEMsS0FBSyxJQUFJLENBQUMsUUFBUSxHQUFHOztZQUVqQixnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUN4QixrQkFBa0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQzs7U0FFOUI7O1FBRUQsS0FBSyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRzs7WUFFbkMsTUFBTSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsT0FBTyxDQUFDOztZQUV2QyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztZQUN2QixLQUFLLElBQUksR0FBRyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxFQUFFO1lBQzVDLEtBQUssS0FBSyxHQUFHLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLEVBQUU7O1lBRTlDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDOztTQUU3Qjs7S0FFSjs7Ozs7Ozs7O0lBU0QsZUFBZSxFQUFFLFdBQVcsS0FBSyxHQUFHOztRQUVoQyxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFOztRQUV2QyxJQUFJLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxDQUFDOztRQUVuQyxJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7O1FBRXZCLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDOztRQUV2QixTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQzNDLFVBQVUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7O1FBRTdDLEtBQUssQ0FBQyxPQUFPLEdBQUc7O1lBRVosT0FBTzs7U0FFVjs7UUFFRCxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUc7O1lBRW5DLE9BQU8sQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsQ0FBQztZQUN6QyxPQUFPLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLENBQUM7O1NBRTdDOztRQUVELEtBQUssSUFBSSxDQUFDLElBQUksS0FBSyxLQUFLLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssS0FBSyxDQUFDLE1BQU0sR0FBRzs7WUFFL0QsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO1lBQ25ELE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztZQUNwRCxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7O1NBRWxDLE1BQU07O1lBRUgsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO1lBQ25ELE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7WUFDcEMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQzs7U0FFeEM7OztRQUdELElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLENBQUM7O1FBRS9DLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUMzQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7O0tBRS9DOzs7Ozs7Ozs7SUFTRCxnQkFBZ0IsRUFBRSxXQUFXLENBQUMsRUFBRSxDQUFDLEdBQUc7O1FBRWhDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxHQUFHOztZQUV6RSxPQUFPOztTQUVWOztRQUVELElBQUksSUFBSSxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsU0FBUyxDQUFDOztRQUV4RCxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMzQixPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN2QixLQUFLLEdBQUcsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDM0IsTUFBTSxHQUFHLE9BQU8sQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQzdCLEtBQUssR0FBRyxPQUFPLENBQUMsYUFBYSxLQUFLLFNBQVMsR0FBRyxPQUFPLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQzs7UUFFekUsSUFBSSxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUM7UUFDakIsR0FBRyxHQUFHLENBQUMsR0FBRyxNQUFNLEdBQUcsS0FBSyxDQUFDOztRQUV6QixLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksS0FBSyxLQUFLLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssS0FBSyxDQUFDLE1BQU07T0FDbkUsT0FBTyxDQUFDLElBQUksSUFBSSxPQUFPLENBQUMsS0FBSztPQUM3QixHQUFHLENBQUMsS0FBSyxTQUFTLENBQUMsV0FBVyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssU0FBUyxDQUFDLFlBQVksR0FBRyxDQUFDLEVBQUUsR0FBRzs7WUFFdEUsSUFBSSxHQUFHLFNBQVMsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxHQUFHLEtBQUssS0FBSyxDQUFDLEdBQUcsU0FBUyxDQUFDLFdBQVcsR0FBRyxDQUFDLEVBQUUsQ0FBQztZQUM3RSxHQUFHLEdBQUcsU0FBUyxDQUFDLFlBQVksR0FBRyxDQUFDLEdBQUcsTUFBTSxHQUFHLEtBQUssS0FBSyxDQUFDLEdBQUcsU0FBUyxDQUFDLFlBQVksR0FBRyxDQUFDLEVBQUUsQ0FBQzs7WUFFdkYsSUFBSSxDQUFDLGVBQWUsRUFBRSxXQUFXLEVBQUUsT0FBTyxDQUFDLElBQUksRUFBRSxZQUFZLEdBQUcsSUFBSSxHQUFHLE1BQU0sR0FBRyxHQUFHLEdBQUcsS0FBSyxFQUFFLENBQUM7O1lBRTlGLElBQUksSUFBSSxTQUFTLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQzs7WUFFbEMsSUFBSSxDQUFDLGVBQWUsRUFBRSxXQUFXLEVBQUUsT0FBTyxDQUFDLEtBQUssRUFBRSxZQUFZLEdBQUcsSUFBSSxHQUFHLE1BQU0sR0FBRyxHQUFHLEdBQUcsS0FBSyxFQUFFLENBQUM7O1NBRWxHLE1BQU07O1lBRUgsSUFBSSxDQUFDLGVBQWUsRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLFlBQVksR0FBRyxJQUFJLEdBQUcsTUFBTSxHQUFHLEdBQUcsR0FBRyxLQUFLLEVBQUUsQ0FBQzs7U0FFNUY7O0tBRUo7Ozs7Ozs7Ozs7SUFVRCxlQUFlLEVBQUUsV0FBVyxJQUFJLEVBQUUsT0FBTyxFQUFFLEtBQUssR0FBRzs7UUFFL0MsTUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQzs7UUFFNUIsS0FBSyxJQUFJLEtBQUssV0FBVyxHQUFHOztZQUV4QixLQUFLLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7O1NBRXZFOztLQUVKOzs7Ozs7OztJQVFELE9BQU8sRUFBRSxXQUFXLElBQUksR0FBRzs7UUFFdkIsS0FBSyxJQUFJLENBQUMsT0FBTyxHQUFHOztZQUVoQixJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7O1NBRW5DOztLQUVKOzs7Ozs7O0lBT0QsbUJBQW1CLEVBQUUsV0FBVyxLQUFLLEdBQUc7O1FBRXBDLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDOztLQUU1Qjs7Ozs7Ozs7O0lBU0QsWUFBWSxFQUFFLFdBQVcsSUFBSSxFQUFFLEtBQUssR0FBRyxFQUFFLEdBQUc7O1FBRXhDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHOztZQUVqQixJQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLEVBQUUsS0FBSyxFQUFFLENBQUM7WUFDL0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztZQUNwQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO1lBQ2xDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7WUFDM0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztZQUNwQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQ3JDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxpQkFBaUIsQ0FBQztZQUNsRCxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsdUNBQXVDLENBQUM7WUFDeEUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQztZQUN6QyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsbUJBQW1CLEVBQUUsQ0FBQztZQUNsRCxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7O1NBRXRDOztRQUVELElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUM7O0tBRXhCOzs7Ozs7Ozs7SUFTRCxlQUFlLEVBQUUsV0FBVyxFQUFFLEVBQUUsS0FBSyxHQUFHLEVBQUUsR0FBRzs7UUFFekMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUc7O1lBRWpCLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsQ0FBQztZQUNwQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1lBQ3BDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7WUFDM0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQztZQUN6QyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsbUJBQW1CLEVBQUUsQ0FBQztZQUNsRCxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7O1NBRXRDOztLQUVKOzs7Ozs7O0lBT0Qsa0JBQWtCLEVBQUUsWUFBWTs7UUFFNUIsS0FBSyxJQUFJLENBQUMsT0FBTyxHQUFHOztZQUVoQixLQUFLLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHOztnQkFFckIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDaEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDOzthQUU1Qjs7WUFFRCxLQUFLLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHOztnQkFFdEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDakQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDOzthQUU3Qjs7WUFFRCxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDM0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7O1NBRXZCOztLQUVKOzs7Ozs7O0lBT0QsZ0JBQWdCLEVBQUUsWUFBWTs7UUFFMUIsS0FBSyxJQUFJLENBQUMsT0FBTyxHQUFHOztZQUVoQixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7O1NBRTlCOztLQUVKOzs7Ozs7O0lBT0Qsa0JBQWtCLEVBQUUsWUFBWTs7UUFFNUIsS0FBSyxJQUFJLENBQUMsT0FBTyxHQUFHOztZQUVoQixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7O1NBRS9COztLQUVKOzs7Ozs7OztJQVFELGFBQWEsRUFBRSxXQUFXLE9BQU8sR0FBRyxJQUFJLEdBQUc7O1FBRXZDLEtBQUssT0FBTyxHQUFHOztZQUVYLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQzs7U0FFdkMsTUFBTTs7WUFFSCxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sRUFBRSxDQUFDOztTQUUzQjs7S0FFSjs7Ozs7Ozs7SUFRRCxJQUFJLEVBQUUsV0FBVyxLQUFLLEdBQUcsQ0FBQyxHQUFHOztRQUV6QixNQUFNLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLEdBQUcsSUFBSSxDQUFDOztRQUVsRSxLQUFLLFFBQVEsR0FBRzs7WUFFWixhQUFhLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDckIsYUFBYSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQzs7U0FFeEMsTUFBTTs7WUFFSCxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksRUFBRSxDQUFDO1lBQzNCLFFBQVEsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDOztTQUV4Qjs7S0FFSjs7Ozs7Ozs7SUFRRCxJQUFJLEVBQUUsV0FBVyxLQUFLLEdBQUcsQ0FBQyxHQUFHOztRQUV6QixNQUFNLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLEdBQUcsSUFBSSxDQUFDOztRQUVsRSxLQUFLLFFBQVEsR0FBRzs7WUFFWixhQUFhLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDckIsYUFBYSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQzs7U0FFeEMsTUFBTTs7WUFFSCxJQUFJLENBQUMsYUFBYSxFQUFFLEtBQUssRUFBRSxDQUFDO1lBQzVCLFFBQVEsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDOztTQUV4Qjs7S0FFSjs7Ozs7OztJQU9ELGNBQWMsRUFBRSxXQUFXLEtBQUssR0FBRzs7UUFFL0IsS0FBSyxLQUFLLEdBQUc7O1lBRVQsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDOztTQUVyQzs7S0FFSjs7Ozs7Ozs7O0lBU0QsS0FBSyxFQUFFLFdBQVcsUUFBUSxFQUFFLE1BQU0sR0FBRzs7UUFFakMsS0FBSyxJQUFJLENBQUMsYUFBYSxHQUFHOztZQUV0QixJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxDQUFDO1lBQ3RELElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQzs7U0FFcEI7O0tBRUo7Ozs7Ozs7SUFPRCxPQUFPLEVBQUUsWUFBWTs7UUFFakIsTUFBTSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsR0FBRyxJQUFJLENBQUM7O1FBRXBDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDOztRQUUxQixLQUFLLElBQUksQ0FBQyxNQUFNLEdBQUc7O1lBRWYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUM7O1NBRTlCOztRQUVELEtBQUssUUFBUSxJQUFJLFFBQVEsQ0FBQyxHQUFHLEdBQUcsRUFBRSxRQUFRLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsRUFBRTtRQUNoRixLQUFLLFFBQVEsR0FBRyxFQUFFLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEVBQUU7UUFDN0QsS0FBSyxRQUFRLEdBQUcsRUFBRSxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxFQUFFOztLQUVoRTs7Q0FFSixFQUFFLENBQUM7O0FDNXFCSjs7Ozs7QUFLQSxTQUFTLE1BQU0sR0FBRyxTQUFTLEdBQUc7O0lBRTFCLEtBQUssQ0FBQyxTQUFTLEdBQUc7O1FBRWQsT0FBTyxDQUFDLElBQUksRUFBRSx5Q0FBeUMsRUFBRSxDQUFDOztLQUU3RDs7SUFFREosZUFBcUIsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUM7O0lBRW5DLElBQUksQ0FBQyxrQkFBa0IsSUFBSSxnQkFBZ0IsQ0FBQztJQUM1QyxJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsRUFBRSxFQUFFLGNBQWMsSUFBSSxNQUFNLE1BQU0sTUFBTSxDQUFDLGFBQWEsSUFBSSxRQUFRLFlBQVksYUFBYSxDQUFDLENBQUM7SUFDbkgsSUFBSSxDQUFDLHFCQUFxQixHQUFHLFdBQVcsS0FBSyxHQUFHO1FBQzVDLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7S0FDM0IsQ0FBQzs7SUFFRixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQzs7SUFFM0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7SUFDdkIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQztJQUM5QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztJQUN6QixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQzs7SUFFM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7O0lBRXJCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO0lBQzNCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO0lBQzFCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDOztDQUVwQjs7QUFFRCxNQUFNLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLE1BQU0sRUFBRUEsZUFBcUIsQ0FBQyxTQUFTLEVBQUUsRUFBRTs7SUFFaEYsV0FBVyxFQUFFLE1BQU07Ozs7Ozs7SUFPbkIsYUFBYSxFQUFFLFlBQVk7O1FBRXZCLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHOztZQUVuQixPQUFPLENBQUMsSUFBSSxFQUFFLDBCQUEwQixFQUFFLENBQUM7WUFDM0MsT0FBTztTQUNWOztRQUVELElBQUksS0FBSyxHQUFHLElBQUksRUFBRSxHQUFHLEVBQUUsY0FBYyxFQUFFLFlBQVksRUFBRSxhQUFhLENBQUM7O1FBRW5FLGFBQWEsR0FBRyx5REFBeUQsQ0FBQzs7UUFFMUUsR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFhLEVBQUUsS0FBSyxFQUFFLENBQUM7UUFDdEMsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO1FBQ3pCLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUMxQixHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUM7UUFDekIsR0FBRyxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUcsbUJBQW1CLENBQUM7UUFDOUYsR0FBRyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsVUFBVSxHQUFHLGFBQWEsQ0FBQztRQUNsRCxHQUFHLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxPQUFPLEdBQUcsYUFBYSxDQUFDO1FBQy9DLEdBQUcsQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLEtBQUssR0FBRyxhQUFhLENBQUM7UUFDN0MsR0FBRyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsTUFBTSxHQUFHLGFBQWEsQ0FBQztRQUM5QyxHQUFHLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxhQUFhLENBQUM7UUFDckMsR0FBRyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDO1FBQy9DLEdBQUcsQ0FBQyxLQUFLLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQztRQUNqQyxHQUFHLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUNyQixHQUFHLENBQUMsTUFBTSxHQUFHLFlBQVk7WUFDckIsR0FBRyxDQUFDLFFBQVEsR0FBRyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUM7WUFDN0IsY0FBYyxHQUFHLEdBQUcsQ0FBQyxRQUFRLEdBQUcsZUFBZSxHQUFHLG1CQUFtQixDQUFDO1lBQ3RFLFlBQVksR0FBRyxHQUFHLENBQUMsUUFBUSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDcEMsR0FBRyxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUcsY0FBYyxDQUFDO1lBQ3pGLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLFlBQVksQ0FBQztTQUNwQyxDQUFDOzs7UUFHRixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUNwQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsSUFBSSxFQUFFLENBQUM7UUFDNUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7OztRQUdqQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxFQUFFLENBQUM7OztRQUduQyxHQUFHLENBQUMsT0FBTyxHQUFHLFlBQVk7O1lBRXRCLEtBQUssS0FBSyxDQUFDLGlCQUFpQixHQUFHOztnQkFFM0IsR0FBRyxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztnQkFDM0MsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUNsQyxLQUFLLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDOzthQUVsQzs7WUFFRCxLQUFLLEtBQUssQ0FBQyxjQUFjLEdBQUc7O2dCQUV4QixHQUFHLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDeEMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDL0IsS0FBSyxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7O2FBRS9COztZQUVELEtBQUssS0FBSyxDQUFDLFlBQVksR0FBRzs7Z0JBRXRCLEdBQUcsQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO2dCQUN0QyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUM3QixLQUFLLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQzs7YUFFN0I7O1NBRUosQ0FBQzs7UUFFRixJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxHQUFHLEVBQUUsQ0FBQzs7O1FBR2xDLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxJQUFJLEVBQUUsQ0FBQztRQUM1RSxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMscUJBQXFCLEVBQUUsSUFBSSxFQUFFLENBQUM7UUFDMUUsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLHFCQUFxQixFQUFFLElBQUksRUFBRSxDQUFDO1FBQzVFLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLGFBQWEsR0FBRyxVQUFVLEdBQUcsT0FBTyxFQUFFLFdBQVcsS0FBSyxHQUFHOztZQUV2RixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDdkIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDOztZQUV4QixLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ2xCLEtBQUssQ0FBQyxjQUFjLENBQUMsVUFBVSxFQUFFLENBQUM7O1NBRXJDLEVBQUUsS0FBSyxFQUFFLENBQUM7OztRQUdYLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxvQkFBb0IsRUFBRSxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUM7O1FBRTFELElBQUksQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDOztLQUV6Qjs7Ozs7OztJQU9ELGlCQUFpQixFQUFFLFlBQVk7O1FBRTNCLElBQUksS0FBSyxHQUFHLElBQUksRUFBRSxPQUFPLENBQUM7O1FBRTFCLE9BQU8sR0FBRyxXQUFXLE1BQU0sRUFBRSxJQUFJLEdBQUc7O1lBRWhDLE9BQU8sWUFBWTs7Z0JBRWYsS0FBSyxDQUFDLGFBQWEsRUFBRTs7b0JBRWpCLElBQUksRUFBRSx5QkFBeUI7b0JBQy9CLE1BQU0sRUFBRSxNQUFNO29CQUNkLElBQUksRUFBRSxJQUFJOztpQkFFYixFQUFFLENBQUM7O2FBRVAsQ0FBQzs7U0FFTCxDQUFDOztRQUVGLE9BQU87O1lBRUg7Z0JBQ0ksS0FBSyxFQUFFLFNBQVM7Z0JBQ2hCLE9BQU8sRUFBRTtvQkFDTDt3QkFDSSxLQUFLLEVBQUUsSUFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLEdBQUcsT0FBTzt3QkFDN0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsUUFBUSxDQUFDLEtBQUssRUFBRTtxQkFDdEQ7b0JBQ0Q7d0JBQ0ksS0FBSyxFQUFFLFFBQVE7d0JBQ2YsT0FBTyxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsUUFBUSxDQUFDLGlCQUFpQixFQUFFO3FCQUNsRTtpQkFDSjthQUNKOztZQUVEO2dCQUNJLEtBQUssRUFBRSxNQUFNO2dCQUNiLE9BQU8sRUFBRTtvQkFDTDt3QkFDSSxLQUFLLEVBQUUsUUFBUTt3QkFDZixPQUFPLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRTtxQkFDdEM7b0JBQ0Q7d0JBQ0ksS0FBSyxFQUFFLFdBQVc7d0JBQ2xCLE9BQU8sRUFBRSxPQUFPLEVBQUUsY0FBYyxFQUFFLEtBQUssQ0FBQyxTQUFTLEVBQUU7cUJBQ3REO29CQUNEO3dCQUNJLEtBQUssRUFBRSxjQUFjO3dCQUNyQixPQUFPLEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxLQUFLLENBQUMsTUFBTSxFQUFFO3FCQUNuRDtpQkFDSjthQUNKOztTQUVKLENBQUM7O0tBRUw7Ozs7Ozs7O0lBUUQsZ0JBQWdCLEVBQUUsV0FBVyxJQUFJLEdBQUc7O1FBRWhDLElBQUksT0FBTyxDQUFDOztRQUVaLFFBQVEsSUFBSTs7UUFFWixLQUFLLFlBQVk7O1lBRWIsT0FBTyxHQUFHLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1lBQ3hDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxPQUFPLENBQUM7O1lBRWpDLE1BQU07O1FBRVYsS0FBSyxTQUFTOztZQUVWLE9BQU8sR0FBRyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztZQUNyQyxJQUFJLENBQUMsY0FBYyxHQUFHLE9BQU8sQ0FBQzs7WUFFOUIsTUFBTTs7UUFFVixLQUFLLE9BQU87O1lBRVIsT0FBTyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1lBQ3BDLElBQUksQ0FBQyxZQUFZLEdBQUcsT0FBTyxDQUFDOztZQUU1QixNQUFNOztRQUVWOztZQUVJLE9BQU87O1NBRVY7O1FBRUQsS0FBSyxDQUFDLE9BQU8sR0FBRzs7WUFFWixPQUFPOztTQUVWOztRQUVELElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLE9BQU8sRUFBRSxDQUFDOztLQUUxQzs7Ozs7OztJQU9ELFVBQVUsRUFBRSxZQUFZOztRQUVwQixNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxFQUFFLEtBQUssRUFBRSxDQUFDO1FBQ2hELE9BQU8sQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQztRQUNwQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDdEIsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZCLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQztRQUM3QixPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDOUIsT0FBTyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsYUFBYSxDQUFDO1FBQ3pDLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQzs7UUFFL0IsT0FBTyxDQUFDLElBQUksR0FBRyxZQUFZOztZQUV2QixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7O1NBRWhDLENBQUM7O1FBRUYsT0FBTyxDQUFDLElBQUksR0FBRyxZQUFZOztZQUV2QixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7O1NBRS9CLENBQUM7O1FBRUYsT0FBTyxPQUFPLENBQUM7O0tBRWxCOzs7Ozs7O0lBT0QsbUJBQW1CLEVBQUUsWUFBWTs7UUFFN0IsSUFBSSxLQUFLLEdBQUcsSUFBSSxFQUFFLElBQUksQ0FBQzs7UUFFdkIsU0FBUyxLQUFLLEdBQUcsS0FBSyxHQUFHOztZQUVyQixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDdkIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDOztZQUV4QixLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDOztZQUV4QixLQUFLLElBQUksQ0FBQyxTQUFTLEdBQUc7O2dCQUVsQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7O2FBRXJCLE1BQU07O2dCQUVILElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQzs7YUFFbkI7O1NBRUo7O1FBRUQsSUFBSSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTs7WUFFMUIsS0FBSyxFQUFFOztnQkFFSCxlQUFlLEVBQUUsT0FBTyxHQUFHLFNBQVMsQ0FBQyxPQUFPLEdBQUcsSUFBSTtnQkFDbkQsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLGtCQUFrQjtnQkFDekMsVUFBVSxFQUFFLElBQUksQ0FBQyxrQkFBa0I7O2FBRXRDOztZQUVELEtBQUssRUFBRSxLQUFLOztTQUVmLEVBQUUsQ0FBQzs7UUFFSixJQUFJLENBQUMsUUFBUSxHQUFHLFlBQVk7O1lBRXhCLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLHVCQUF1QixDQUFDO1lBQy9DLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1lBQ3RCLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7O1NBRXJCLENBQUM7O1FBRUYsSUFBSSxDQUFDLFVBQVUsR0FBRyxZQUFZOztZQUUxQixJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxtQkFBbUIsQ0FBQztZQUMzQyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUN2QixLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDOztZQUVsQixLQUFLLEtBQUssQ0FBQyxRQUFRLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLEdBQUc7O2dCQUU1QyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDOzthQUV6Qjs7WUFFRCxLQUFLLEtBQUssQ0FBQyxhQUFhLElBQUksS0FBSyxDQUFDLGFBQWEsQ0FBQyxPQUFPLEdBQUc7O2dCQUV0RCxLQUFLLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDOzthQUU5Qjs7WUFFRCxLQUFLLEtBQUssQ0FBQyxRQUFRLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUc7O2dCQUUzQyxLQUFLLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUNuRCxLQUFLLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxDQUFDOzthQUUvQjs7U0FFSixDQUFDOztRQUVGLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDOztRQUV2QixPQUFPLElBQUksQ0FBQzs7S0FFZjs7Ozs7Ozs7O0lBU0Qsc0JBQXNCLEVBQUUsWUFBWTs7UUFFaEMsSUFBSSxLQUFLLEdBQUcsSUFBSSxFQUFFLElBQUksRUFBRSxZQUFZLEdBQUcsS0FBSyxFQUFFLFVBQVUsR0FBRyxJQUFJLEVBQUUsWUFBWSxDQUFDOztRQUU5RSxNQUFNLEVBQUUsU0FBUyxFQUFFLEdBQUcsSUFBSSxDQUFDOztRQUUzQixZQUFZLEdBQUcsc0JBQXNCLENBQUM7OztRQUd0QyxLQUFLLENBQUMsUUFBUSxDQUFDLGlCQUFpQjtHQUNyQyxDQUFDLFFBQVEsQ0FBQyx1QkFBdUI7R0FDakMsQ0FBQyxRQUFRLENBQUMsb0JBQW9CO0dBQzlCLENBQUMsUUFBUSxDQUFDLG1CQUFtQixHQUFHO1lBQ3ZCLE9BQU87U0FDVjs7UUFFRCxTQUFTLEtBQUssR0FBRyxLQUFLLEdBQUc7O1lBRXJCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUN2QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7O1lBRXhCLFVBQVUsR0FBRyxLQUFLLENBQUM7O1lBRW5CLEtBQUssQ0FBQyxZQUFZLEdBQUc7O2dCQUVqQixLQUFLLFNBQVMsQ0FBQyxpQkFBaUIsR0FBRyxFQUFFLFNBQVMsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLEVBQUU7Z0JBQ3JFLEtBQUssU0FBUyxDQUFDLG1CQUFtQixHQUFHLEVBQUUsU0FBUyxDQUFDLG1CQUFtQixFQUFFLENBQUMsRUFBRTtnQkFDekUsS0FBSyxTQUFTLENBQUMsb0JBQW9CLEdBQUcsRUFBRSxTQUFTLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxFQUFFO2dCQUMzRSxLQUFLLFNBQVMsQ0FBQyx1QkFBdUIsR0FBRyxFQUFFLFNBQVMsQ0FBQyx1QkFBdUIsRUFBRSxPQUFPLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxFQUFFOztnQkFFL0csWUFBWSxHQUFHLElBQUksQ0FBQzs7YUFFdkIsTUFBTTs7Z0JBRUgsS0FBSyxRQUFRLENBQUMsY0FBYyxHQUFHLEVBQUUsUUFBUSxDQUFDLGNBQWMsRUFBRSxDQUFDLEVBQUU7Z0JBQzdELEtBQUssUUFBUSxDQUFDLGdCQUFnQixHQUFHLEVBQUUsUUFBUSxDQUFDLGdCQUFnQixFQUFFLENBQUMsRUFBRTtnQkFDakUsS0FBSyxRQUFRLENBQUMsbUJBQW1CLEdBQUcsRUFBRSxRQUFRLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxFQUFFO2dCQUN2RSxLQUFLLFFBQVEsQ0FBQyxvQkFBb0IsR0FBRyxFQUFFLFFBQVEsQ0FBQyxvQkFBb0IsR0FBRyxDQUFDLEVBQUU7O2dCQUUxRSxZQUFZLEdBQUcsS0FBSyxDQUFDOzthQUV4Qjs7WUFFRCxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxFQUFFLFlBQVk7a0JBQ3JDLE9BQU8sR0FBRyxTQUFTLENBQUMsZUFBZSxHQUFHLElBQUk7a0JBQzFDLE9BQU8sR0FBRyxTQUFTLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQzs7U0FFcEQ7O1FBRUQsU0FBUyxrQkFBa0IsSUFBSTs7WUFFM0IsS0FBSyxVQUFVLEdBQUc7O2dCQUVkLFlBQVksR0FBRyxDQUFDLFlBQVksQ0FBQzs7Z0JBRTdCLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLEVBQUUsWUFBWTtzQkFDckMsT0FBTyxHQUFHLFNBQVMsQ0FBQyxlQUFlLEdBQUcsSUFBSTtzQkFDMUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDOzthQUVwRDs7Ozs7Ozs7WUFRRCxLQUFLLENBQUMsYUFBYSxFQUFFLEVBQUUsSUFBSSxFQUFFLHlCQUF5QixFQUFFLE1BQU0sRUFBRSxnQkFBZ0IsRUFBRSxFQUFFLENBQUM7O1lBRXJGLFVBQVUsR0FBRyxJQUFJLENBQUM7O1NBRXJCOztRQUVELFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxrQkFBa0IsRUFBRSxrQkFBa0IsRUFBRSxLQUFLLEVBQUUsQ0FBQztRQUMzRSxRQUFRLENBQUMsZ0JBQWdCLEVBQUUsd0JBQXdCLEVBQUUsa0JBQWtCLEVBQUUsS0FBSyxFQUFFLENBQUM7UUFDakYsUUFBUSxDQUFDLGdCQUFnQixFQUFFLHFCQUFxQixFQUFFLGtCQUFrQixFQUFFLEtBQUssRUFBRSxDQUFDO1FBQzlFLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxvQkFBb0IsRUFBRSxrQkFBa0IsRUFBRSxLQUFLLEVBQUUsQ0FBQzs7UUFFN0UsSUFBSSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTs7WUFFMUIsS0FBSyxFQUFFOztnQkFFSCxlQUFlLEVBQUUsT0FBTyxHQUFHLFNBQVMsQ0FBQyxlQUFlLEdBQUcsSUFBSTs7YUFFOUQ7O1lBRUQsS0FBSyxFQUFFLEtBQUs7O1NBRWYsRUFBRSxDQUFDOzs7UUFHSixLQUFLLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxHQUFHLEdBQUcsWUFBWSxFQUFFLEdBQUc7WUFDakQsTUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsRUFBRSxPQUFPLEVBQUUsQ0FBQztZQUNoRCxLQUFLLENBQUMsRUFBRSxHQUFHLFlBQVksQ0FBQztZQUN4QixLQUFLLENBQUMsU0FBUyxHQUFHLDBFQUEwRSxDQUFDO1lBQzdGLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDO1NBQ3RDOztRQUVELE9BQU8sSUFBSSxDQUFDOztLQUVmOzs7Ozs7OztJQVFELGtCQUFrQixFQUFFLFlBQVk7O1FBRTVCLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLEVBQUUsTUFBTSxFQUFFLENBQUM7UUFDOUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1FBQzVCLElBQUksQ0FBQyxJQUFJLEdBQUcsWUFBWTs7WUFFcEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDOztTQUUzQixDQUFDOztRQUVGLElBQUksQ0FBQyxJQUFJLEdBQUcsWUFBWTs7WUFFcEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1lBQzVCLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNqQyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxDQUFDOztTQUUvQixDQUFDOztRQUVGLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixFQUFFLENBQUM7UUFDckQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMseUJBQXlCLEVBQUUsQ0FBQzs7UUFFaEQsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDdkMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7O1FBRWpDLElBQUksQ0FBQyxPQUFPLEdBQUcsWUFBWTs7WUFFdkIsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDdkMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7O1lBRWpDLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDN0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7O1lBRTFCLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7O1NBRXZCLENBQUM7O1FBRUYsSUFBSSxDQUFDLGdCQUFnQixFQUFFLG9CQUFvQixFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN6RCxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDOztRQUV6RCxPQUFPLElBQUksQ0FBQzs7S0FFZjs7Ozs7Ozs7O0lBU0Qsd0JBQXdCLEVBQUUsWUFBWTs7UUFFbEMsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDOztRQUVuQixTQUFTLEtBQUssR0FBRyxLQUFLLEdBQUc7O1lBRXJCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUN2QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7Ozs7Ozs7O1lBUXhCLEtBQUssQ0FBQyxhQUFhLEVBQUUsRUFBRSxJQUFJLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixFQUFFLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDOztZQUUxRyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQzs7WUFFM0IsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDOztTQUVqQixBQUNUO1FBQ1EsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixFQUFFOztZQUVoQyxLQUFLLEVBQUU7O2dCQUVILEtBQUssRUFBRSxNQUFNO2dCQUNiLGVBQWUsRUFBRSxPQUFPLEdBQUcsU0FBUyxDQUFDLFNBQVMsR0FBRyxJQUFJOzthQUV4RDs7WUFFRCxLQUFLLEVBQUUsS0FBSzs7U0FFZixFQUFFLENBQUM7O1FBRUosSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7O1FBRW5CLElBQUksQ0FBQyxNQUFNLEdBQUcsV0FBVyxNQUFNLEdBQUc7O1lBRTlCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxLQUFLLFNBQVMsR0FBRyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQzs7WUFFMUQsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsT0FBTyxLQUFLLElBQUksQ0FBQyxNQUFNO2tCQUM5QyxTQUFTLENBQUMsU0FBUztrQkFDbkIsU0FBUyxDQUFDLFVBQVUsRUFBRSxHQUFHLElBQUksQ0FBQzs7U0FFdkMsQ0FBQzs7UUFFRixPQUFPLElBQUksQ0FBQzs7S0FFZjs7Ozs7Ozs7O0lBU0QseUJBQXlCLEVBQUUsWUFBWTs7UUFFbkMsSUFBSSxLQUFLLEdBQUcsSUFBSSxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsc0JBQXNCO1lBQzNELFVBQVUsR0FBRyxLQUFLLEVBQUUsTUFBTSxFQUFFLGFBQWEsRUFBRSxjQUFjLENBQUM7O1FBRTlELGVBQWUsR0FBRyxRQUFRLENBQUMsYUFBYSxFQUFFLEtBQUssRUFBRSxDQUFDO1FBQ2xELGVBQWUsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNuQyxlQUFlLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDdEMsZUFBZSxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsTUFBTSxDQUFDOztRQUUvQyxzQkFBc0IsR0FBRyxRQUFRLENBQUMsYUFBYSxFQUFFLEtBQUssRUFBRSxDQUFDO1FBQ3pELHNCQUFzQixDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDO1FBQzdDLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO1FBQzVDLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQzdDLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsc0JBQXNCLENBQUM7UUFDaEUsc0JBQXNCLENBQUMsS0FBSyxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDbEQsc0JBQXNCLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxNQUFNLENBQUM7O1FBRXRELHNCQUFzQixDQUFDLGdCQUFnQixFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQztRQUN2RixzQkFBc0IsQ0FBQyxnQkFBZ0IsRUFBRSxZQUFZLEVBQUUsV0FBVyxHQUFHLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUM7O1FBRXpGLFNBQVMsV0FBVyxHQUFHLEtBQUssR0FBRzs7WUFFM0IsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDOztZQUV4QixVQUFVLEdBQUcsSUFBSSxDQUFDOztZQUVsQixNQUFNLEdBQUcsS0FBSyxDQUFDLE9BQU8sTUFBTSxLQUFLLENBQUMsY0FBYyxJQUFJLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7O1lBRXRGLGFBQWEsR0FBRyxRQUFRLEVBQUUsZUFBZSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsR0FBRyxHQUFHLENBQUM7O1lBRTlELG1CQUFtQixFQUFFLENBQUM7U0FDekI7O1FBRUQsU0FBUyxrQkFBa0IsR0FBRyxLQUFLLEdBQUc7O1lBRWxDLElBQUksVUFBVSxFQUFFOztnQkFFWixNQUFNLE9BQU8sR0FBRyxLQUFLLENBQUMsT0FBTyxNQUFNLEtBQUssQ0FBQyxjQUFjLElBQUksS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQzs7Z0JBRTdGLGNBQWMsR0FBRyxFQUFFLE9BQU8sR0FBRyxNQUFNLEtBQUssSUFBSSxDQUFDLFdBQVcsQ0FBQzs7Z0JBRXpELGNBQWMsR0FBRyxhQUFhLEdBQUcsY0FBYyxDQUFDOztnQkFFaEQsY0FBYyxHQUFHLGNBQWMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsY0FBYyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsY0FBYyxFQUFFLENBQUM7O2dCQUUxRixJQUFJLENBQUMsV0FBVyxHQUFHLGNBQWMsRUFBRSxDQUFDOzs7Ozs7Ozs7Z0JBU3BDLEtBQUssQ0FBQyxhQUFhLEVBQUUsRUFBRSxJQUFJLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxFQUFFLHFCQUFxQixFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsRUFBRSxDQUFDOzthQUVuSDs7U0FFSjs7UUFFRCxTQUFTLGtCQUFrQixHQUFHLEtBQUssR0FBRzs7WUFFbEMsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDOztZQUV4QixVQUFVLEdBQUcsS0FBSyxDQUFDOztZQUVuQixzQkFBc0IsRUFBRSxDQUFDOztTQUU1Qjs7UUFFRCxTQUFTLG1CQUFtQixJQUFJOztZQUU1QixLQUFLLENBQUMsU0FBUyxDQUFDLGdCQUFnQixFQUFFLFdBQVcsRUFBRSxrQkFBa0IsRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDO1lBQ3ZGLEtBQUssQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLEVBQUUsU0FBUyxFQUFFLGtCQUFrQixFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUM7WUFDckYsS0FBSyxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsRUFBRSxXQUFXLEVBQUUsa0JBQWtCLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQztZQUN2RixLQUFLLENBQUMsU0FBUyxDQUFDLGdCQUFnQixFQUFFLFVBQVUsRUFBRSxrQkFBa0IsRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDOzs7U0FHekY7O1FBRUQsU0FBUyxzQkFBc0IsSUFBSTs7WUFFL0IsS0FBSyxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsRUFBRSxXQUFXLEVBQUUsa0JBQWtCLEVBQUUsS0FBSyxFQUFFLENBQUM7WUFDOUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsRUFBRSxTQUFTLEVBQUUsa0JBQWtCLEVBQUUsS0FBSyxFQUFFLENBQUM7WUFDNUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsRUFBRSxXQUFXLEVBQUUsa0JBQWtCLEVBQUUsS0FBSyxFQUFFLENBQUM7WUFDOUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsRUFBRSxVQUFVLEVBQUUsa0JBQWtCLEVBQUUsS0FBSyxFQUFFLENBQUM7O1NBRWhGOztRQUVELFNBQVMsS0FBSyxHQUFHLEtBQUssR0FBRzs7WUFFckIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3ZCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQzs7WUFFeEIsS0FBSyxLQUFLLENBQUMsTUFBTSxLQUFLLHNCQUFzQixHQUFHLEVBQUUsT0FBTyxFQUFFOztZQUUxRCxNQUFNLFVBQVUsR0FBRyxFQUFFLEtBQUssQ0FBQyxjQUFjLElBQUksS0FBSyxDQUFDLGNBQWMsQ0FBQyxNQUFNLEdBQUcsQ0FBQztrQkFDdEUsRUFBRSxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLHFCQUFxQixFQUFFLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxXQUFXO2tCQUNoRyxLQUFLLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7Ozs7Ozs7O1lBUXZDLEtBQUssQ0FBQyxhQUFhLEVBQUUsRUFBRSxJQUFJLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxFQUFFLHFCQUFxQixFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsRUFBRSxDQUFDOztZQUU1RyxJQUFJLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDOztTQUV4RCxBQUNUO1FBQ1EsU0FBUyxTQUFTLElBQUk7O1lBRWxCLHNCQUFzQixFQUFFLENBQUM7WUFDekIsZUFBZSxHQUFHLElBQUksQ0FBQztZQUN2QixzQkFBc0IsR0FBRyxJQUFJLENBQUM7O1NBRWpDOztRQUVELGVBQWUsQ0FBQyxXQUFXLEVBQUUsc0JBQXNCLEVBQUUsQ0FBQzs7UUFFdEQsSUFBSSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTs7WUFFMUIsS0FBSyxFQUFFOztnQkFFSCxLQUFLLEVBQUUsTUFBTTtnQkFDYixLQUFLLEVBQUUsS0FBSztnQkFDWixNQUFNLEVBQUUsS0FBSztnQkFDYixTQUFTLEVBQUUsTUFBTTtnQkFDakIsZUFBZSxFQUFFLHVCQUF1Qjs7YUFFM0M7O1lBRUQsS0FBSyxFQUFFLEtBQUs7WUFDWixTQUFTLEVBQUUsU0FBUzs7U0FFdkIsRUFBRSxDQUFDOztRQUVKLElBQUksQ0FBQyxXQUFXLEVBQUUsZUFBZSxFQUFFLENBQUM7O1FBRXBDLElBQUksQ0FBQyxXQUFXLEdBQUcsVUFBVSxVQUFVLEdBQUc7O1lBRXRDLGVBQWUsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLFVBQVUsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDOztTQUV4RCxDQUFDOztRQUVGLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxjQUFjLEVBQUUsV0FBVyxLQUFLLEdBQUc7O1lBRXRELElBQUksQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDOztTQUV4QyxFQUFFLENBQUM7O1FBRUosSUFBSSxDQUFDLGVBQWUsR0FBRyxlQUFlLENBQUM7UUFDdkMsSUFBSSxDQUFDLHNCQUFzQixHQUFHLHNCQUFzQixDQUFDOztRQUVyRCxPQUFPLElBQUksQ0FBQzs7S0FFZjs7Ozs7Ozs7O0lBU0QsY0FBYyxFQUFFLFdBQVcsS0FBSyxHQUFHOztRQUUvQixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDbkIsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUMzQyxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUN6QixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDN0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1FBQzVCLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQztRQUNuQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUM7UUFDOUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQzs7UUFFaEQsSUFBSSxDQUFDLEtBQUssR0FBRyxXQUFXLEtBQUssR0FBRzs7WUFFNUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsYUFBYSxLQUFLLEtBQUssR0FBRyxFQUFFLEdBQUcsR0FBRyxFQUFFLEdBQUcsT0FBTyxDQUFDOztTQUV6RSxDQUFDOztRQUVGLElBQUksQ0FBQyxPQUFPLEdBQUcsWUFBWTs7WUFFdkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsZUFBZSxDQUFDOztTQUUxQyxDQUFDOztRQUVGLElBQUksQ0FBQyxPQUFPLEdBQUcsV0FBVyxHQUFHLEdBQUc7O1lBRTVCLEtBQUssSUFBSSxDQUFDLElBQUksR0FBRzs7Z0JBRWIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLE1BQU0sR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDOzthQUV4RDs7U0FFSixDQUFDOztRQUVGLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxXQUFXLEtBQUssR0FBRzs7WUFFeEMsS0FBSyxJQUFJLENBQUMsU0FBUyxHQUFHOztnQkFFbEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDOzthQUV0Qzs7U0FFSixDQUFDOztRQUVGLElBQUksQ0FBQyxZQUFZLEdBQUcsV0FBVyxJQUFJLEdBQUc7O1lBRWxDLE1BQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLEVBQUUsTUFBTSxFQUFFLENBQUM7WUFDbkQsU0FBUyxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDO1lBQ2xDLFNBQVMsQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztZQUNuQyxTQUFTLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUM7O1lBRWhDLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1lBQzNCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLEVBQUUsQ0FBQztZQUMvQixJQUFJLENBQUMsV0FBVyxFQUFFLFNBQVMsRUFBRSxDQUFDOztZQUU5QixPQUFPLElBQUksQ0FBQzs7U0FFZixDQUFDOztRQUVGLElBQUksQ0FBQyxPQUFPLEdBQUcsV0FBVyxHQUFHLEdBQUcsU0FBUyxDQUFDLFlBQVksRUFBRSxJQUFJLEdBQUcsS0FBSyxFQUFFLElBQUksR0FBRyxLQUFLLEdBQUc7O1lBRWpGLE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLEVBQUUsTUFBTSxFQUFFLENBQUM7WUFDakQsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxHQUFHLE1BQU0sR0FBRyxPQUFPLENBQUM7WUFDOUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO1lBQzdCLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztZQUM5QixPQUFPLENBQUMsS0FBSyxFQUFFLFFBQVEsS0FBSyxJQUFJLEdBQUcsT0FBTyxHQUFHLE1BQU0sRUFBRSxFQUFFLEdBQUcsTUFBTSxDQUFDO1lBQ2pFLE9BQU8sQ0FBQyxLQUFLLENBQUMsY0FBYyxHQUFHLE9BQU8sQ0FBQzs7WUFFdkMsS0FBSyxJQUFJLEdBQUc7O2dCQUVSLE9BQU8sQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLGlCQUFpQixDQUFDOzthQUUvQzs7WUFFRCxJQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQztZQUNwQixJQUFJLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxXQUFXLEVBQUUsT0FBTyxFQUFFLENBQUM7O1lBRTVCLE9BQU8sSUFBSSxDQUFDOztTQUVmLENBQUM7O1FBRUYsSUFBSSxDQUFDLFVBQVUsR0FBRyxXQUFXLEtBQUssRUFBRSxLQUFLLEdBQUc7O1lBRXhDLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLGFBQWEsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUM7O1lBRW5ELE9BQU8sSUFBSSxDQUFDOztTQUVmLENBQUM7O1FBRUYsSUFBSSxDQUFDLGdCQUFnQixFQUFFLFlBQVksRUFBRSxZQUFZOztZQUU3QyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxTQUFTLENBQUM7O1NBRTFDLEVBQUUsS0FBSyxFQUFFLENBQUM7O1FBRVgsSUFBSSxDQUFDLGdCQUFnQixFQUFFLFlBQVksRUFBRSxZQUFZOztZQUU3QyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxTQUFTLENBQUM7O1NBRTFDLEVBQUUsS0FBSyxFQUFFLENBQUM7O1FBRVgsT0FBTyxJQUFJLENBQUM7O0tBRWY7Ozs7Ozs7OztJQVNELG9CQUFvQixFQUFFLFdBQVcsS0FBSyxHQUFHOztRQUVyQyxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLEtBQUssRUFBRSxDQUFDOztRQUU1QyxNQUFNLENBQUMsS0FBSyxDQUFDLFlBQVksR0FBRyxnQkFBZ0IsQ0FBQztRQUM3QyxNQUFNLENBQUMsS0FBSyxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUM7O1FBRXBDLE9BQU8sTUFBTSxDQUFDOztLQUVqQjs7Ozs7Ozs7O0lBU0QsY0FBYyxFQUFFLFdBQVcsS0FBSyxHQUFHOztRQUUvQixJQUFJLEtBQUssR0FBRyxJQUFJLEVBQUUsSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQzs7UUFFM0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7UUFDbEIsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7O1FBRS9CLFNBQVMsS0FBSyxHQUFHLEtBQUssR0FBRzs7WUFFckIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3ZCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQzs7WUFFeEIsSUFBSSxRQUFRLEdBQUcsS0FBSyxDQUFDLFFBQVEsRUFBRSxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQzs7WUFFdEQsU0FBUyxVQUFVLElBQUk7O2dCQUVuQixRQUFRLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDM0MsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUNmLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQzs7YUFFeEI7O1lBRUQsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ2hCLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNwQixRQUFRLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxPQUFPLEVBQUUsQ0FBQzs7WUFFOUMsS0FBSyxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7WUFDNUIsS0FBSyxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUM7O1lBRTlCLE1BQU0sQ0FBQyxxQkFBcUIsRUFBRSxVQUFVLEVBQUUsQ0FBQzs7U0FFOUMsQUFDVDtRQUNRLE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxHQUFHOztZQUVyQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQzs7WUFFNUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDOztZQUVoQyxJQUFJLENBQUMsT0FBTyxFQUFFO2lCQUNULGdCQUFnQixFQUFFLEtBQUssQ0FBQyxhQUFhLEdBQUcsVUFBVSxHQUFHLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUM7O1lBRWxGLEtBQUssS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLE9BQU8sSUFBSSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUc7O2dCQUV2RCxJQUFJLEtBQUssR0FBRyxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs7Z0JBRTFDLElBQUksQ0FBQyxZQUFZLEVBQUUsS0FBSyxFQUFFO3FCQUNyQixVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7O2FBRTNEOztTQUVKOztRQUVELE9BQU8sSUFBSSxDQUFDOztLQUVmOzs7Ozs7Ozs7O0lBVUQsYUFBYSxFQUFFLFdBQVcsS0FBSyxFQUFFLEtBQUssR0FBRzs7UUFFckMsSUFBSSxLQUFLLEdBQUcsSUFBSSxFQUFFLElBQUksRUFBRSxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDOztRQUVwRCxPQUFPLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUN0QixPQUFPLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQzs7UUFFMUIsU0FBUyxLQUFLLEdBQUcsS0FBSyxHQUFHOztZQUVyQixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDdkIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDOztZQUV4QixJQUFJLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQztZQUN0QixJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUMvQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDbEIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ1osT0FBTyxDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQztZQUN6QixPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7O1lBRWYsS0FBSyxJQUFJLENBQUMsSUFBSSxLQUFLLFFBQVEsR0FBRzs7Z0JBRTFCLE9BQU8sQ0FBQyxhQUFhLEVBQUUsSUFBSSxFQUFFLENBQUM7Z0JBQzlCLEtBQUssQ0FBQyxjQUFjLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDOztnQkFFM0QsS0FBSyxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUU7O2FBRTFDOztTQUVKOztRQUVELE9BQU8sQ0FBQyxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLGFBQWEsR0FBRyxVQUFVLEdBQUcsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQzs7UUFFekksTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEdBQUc7O1lBRXJDLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDOztZQUVqRCxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUM7WUFDNUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDO1lBQ2xDLElBQUksQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxDQUFDO1lBQzFCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsYUFBYSxHQUFHLFVBQVUsR0FBRyxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDOztZQUVsRixLQUFLLENBQUMsT0FBTyxDQUFDLFVBQVUsR0FBRzs7Z0JBRXZCLE9BQU8sQ0FBQyxhQUFhLEVBQUUsSUFBSSxFQUFFLENBQUM7O2FBRWpDOztTQUVKOztRQUVELE9BQU8sQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7O1FBRXpCLE9BQU8sT0FBTyxDQUFDOztLQUVsQjs7Ozs7Ozs7SUFRRCxVQUFVLEVBQUUsWUFBWTs7UUFFcEIsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ25CLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLEVBQUUsTUFBTSxFQUFFLENBQUM7UUFDOUMsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQzs7UUFFekIsS0FBSyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDeEIsS0FBSyxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7UUFDekIsS0FBSyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDdEIsS0FBSyxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUM7UUFDckIsS0FBSyxDQUFDLGVBQWUsR0FBRyxTQUFTLENBQUM7UUFDbEMsS0FBSyxDQUFDLFVBQVUsR0FBRyxnQkFBZ0IsQ0FBQztRQUNwQyxLQUFLLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQztRQUN4QixLQUFLLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQztRQUM1QixLQUFLLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztRQUNsQixLQUFLLENBQUMsU0FBUyxHQUFHLDJCQUEyQixDQUFDO1FBQzlDLEtBQUssQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQzNCLEtBQUssQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQzFCLEtBQUssQ0FBQyxVQUFVLEdBQUcsd0JBQXdCLENBQUM7UUFDNUMsS0FBSyxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUM7UUFDN0IsS0FBSyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUM7O1FBRTNDLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDOztRQUVyQixJQUFJLENBQUMsVUFBVSxHQUFHLFdBQVcsS0FBSyxFQUFFLE1BQU0sR0FBRzs7WUFFekMsS0FBSyxLQUFLLEdBQUc7O2dCQUVULElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUM7O2FBRW5DOztZQUVELEtBQUssTUFBTSxHQUFHOztnQkFFVixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxNQUFNLEdBQUcsSUFBSSxDQUFDOzthQUVyQzs7U0FFSixDQUFDOztRQUVGLElBQUksQ0FBQyxJQUFJLEdBQUcsWUFBWTs7WUFFcEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztZQUNsQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQzs7U0FFdkIsQ0FBQzs7UUFFRixJQUFJLENBQUMsSUFBSSxHQUFHLFlBQVk7O1lBRXBCLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztZQUN2QixJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUM7WUFDakMsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7O1NBRXhCLENBQUM7O1FBRUYsSUFBSSxDQUFDLE1BQU0sR0FBRyxZQUFZOztZQUV0QixLQUFLLElBQUksQ0FBQyxPQUFPLEdBQUc7O2dCQUVoQixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7O2FBRWYsTUFBTTs7Z0JBRUgsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDOzthQUVmOztTQUVKLENBQUM7O1FBRUYsSUFBSSxDQUFDLFFBQVEsR0FBRyxXQUFXLEtBQUssR0FBRzs7WUFFL0IsTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFOztnQkFFNUMsS0FBSyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxDQUFDLEtBQUssR0FBRzs7b0JBRTVCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDOztpQkFFckM7O2FBRUo7O1NBRUosQ0FBQzs7UUFFRixJQUFJLENBQUMsVUFBVSxHQUFHLFlBQVk7O1lBRTFCLE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTs7Z0JBRTVDLEtBQUssSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEdBQUc7O29CQUU5QixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDOztpQkFFaEM7O2FBRUo7O1NBRUosQ0FBQzs7UUFFRixJQUFJLENBQUMsU0FBUyxHQUFHLFdBQVcsS0FBSyxHQUFHOztZQUVoQyxNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsb0JBQW9CLEVBQUUsS0FBSyxFQUFFLENBQUM7WUFDbkQsTUFBTSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUM7O1lBRXZCLElBQUksQ0FBQyxXQUFXLEVBQUUsTUFBTSxFQUFFLENBQUM7O1lBRTNCLE9BQU8sTUFBTSxDQUFDOztTQUVqQixDQUFDOztRQUVGLElBQUksQ0FBQyxPQUFPLEdBQUcsV0FBVyxLQUFLLEdBQUc7O1lBRTlCLE1BQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxjQUFjLEVBQUUsS0FBSyxFQUFFLENBQUM7WUFDM0MsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUM7O1lBRW5CLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxFQUFFLENBQUM7O1lBRXpCLE9BQU8sSUFBSSxDQUFDOztTQUVmLENBQUM7O1FBRUYsSUFBSSxDQUFDLGFBQWEsR0FBRyxXQUFXLElBQUksR0FBRzs7WUFFbkMsS0FBSyxJQUFJLENBQUMsVUFBVSxHQUFHOztnQkFFbkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUM7O2FBRWxDOztZQUVELElBQUksQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDOztZQUVoQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQzs7U0FFMUIsQ0FBQzs7UUFFRixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxJQUFJLEVBQUUsQ0FBQztRQUN2RSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxJQUFJLEVBQUUsQ0FBQztRQUNyRSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxJQUFJLEVBQUUsQ0FBQzs7UUFFdkUsT0FBTyxJQUFJLENBQUM7O0tBRWY7Ozs7Ozs7O0lBUUQsZ0JBQWdCLEVBQUUsV0FBVyxPQUFPLEdBQUcsRUFBRSxHQUFHOztRQUV4QyxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDbkIsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLE9BQU8sSUFBSSxRQUFRLENBQUMsYUFBYSxFQUFFLE1BQU0sRUFBRSxDQUFDO1FBQ2pFLE1BQU0sRUFBRSxTQUFTLEVBQUUsR0FBRyxPQUFPLENBQUM7O1FBRTlCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQztRQUM5QixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUM7UUFDM0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO1FBQzFCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUMzQixJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7UUFDbEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsR0FBRyxXQUFXLENBQUM7UUFDMUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsR0FBRyxRQUFRLENBQUM7UUFDekMsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0I7RUFDakMsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhO0VBQ3hCLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQztRQUN6QixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7UUFDakMsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDOzs7UUFHbEMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLEtBQUssQ0FBQyxhQUFhLEdBQUcsWUFBWSxHQUFHLFlBQVksRUFBRSxXQUFXO1lBQ2pGLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTTtHQUMxQixJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksR0FBRywwQ0FBMEMsQ0FBQztTQUMvRCxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLGdCQUFnQixFQUFFLEtBQUssQ0FBQyxhQUFhLEdBQUcsVUFBVSxHQUFHLFlBQVksRUFBRSxXQUFXO1lBQy9FLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTTtHQUMxQixJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7U0FDdkIsRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDOztRQUV0QixJQUFJLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQzs7UUFFOUMsS0FBSyxPQUFPLENBQUMsS0FBSyxHQUFHOztZQUVqQixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLGFBQWEsR0FBRyxVQUFVLEdBQUcsT0FBTyxFQUFFLE9BQU8sQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUM7O1NBRTdGOztRQUVELElBQUksQ0FBQyxPQUFPLEdBQUcsWUFBWTs7WUFFdkIsSUFBSSxDQUFDLG1CQUFtQixFQUFFLEtBQUssQ0FBQyxhQUFhLEdBQUcsVUFBVSxHQUFHLE9BQU8sRUFBRSxPQUFPLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDOztZQUU3RixLQUFLLFNBQVMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxFQUFFOztTQUU1QyxDQUFDOztRQUVGLE9BQU8sSUFBSSxDQUFDOztLQUVmOzs7Ozs7Ozs7O0lBVUQsaUJBQWlCLEVBQUUsV0FBVyxPQUFPLEVBQUUsT0FBTyxHQUFHLEVBQUUsR0FBRzs7UUFFbEQsTUFBTSxJQUFJLFFBQVEsSUFBSSxPQUFPLEVBQUU7O1lBRTNCLEtBQUssT0FBTyxDQUFDLGNBQWMsRUFBRSxRQUFRLEVBQUUsR0FBRzs7Z0JBRXRDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLEdBQUcsT0FBTyxFQUFFLFFBQVEsRUFBRSxDQUFDOzthQUVuRDs7U0FFSjs7UUFFRCxPQUFPLE9BQU8sQ0FBQzs7S0FFbEI7Ozs7Ozs7SUFPRCxPQUFPLEVBQUUsWUFBWTs7UUFFakIsS0FBSyxJQUFJLENBQUMsVUFBVSxHQUFHO1lBQ25CLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUM5QyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQzFCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDOztTQUUxQjs7S0FFSjs7Q0FFSixFQUFFLENBQUM7O0FDcnVDSjs7Ozs7O0FBTUEsU0FBUyxRQUFRLEdBQUcsUUFBUSxFQUFFLFFBQVEsR0FBRzs7SUFFckNXLElBQVUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsQ0FBQzs7SUFFNUMsSUFBSSxDQUFDLElBQUksR0FBRyxVQUFVLENBQUM7O0lBRXZCLElBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDO0lBQ3pCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7SUFDMUIsSUFBSSxDQUFDLGtCQUFrQixHQUFHLENBQUMsQ0FBQztJQUM1QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDO0lBQzFCLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxDQUFDLENBQUM7O0lBRS9CLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUM7O0lBRTlCLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxHQUFHLENBQUM7O0lBRS9CLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDOztJQUUzQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQzs7SUFFcEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7O0lBRXRCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7O0lBRS9CLElBQUksQ0FBQyxlQUFlLEdBQUcsU0FBUyxDQUFDO0lBQ2pDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxTQUFTLENBQUM7O0lBRW5DLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHQyxRQUFjLENBQUM7SUFDcEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDOztJQUUxQixJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNuQixJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxDQUFDOztJQUV0QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQzs7SUFFcEIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUlILEtBQUssQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxFQUFFLENBQUM7O0lBRXRGLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQztJQUMxRCxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQztJQUM5RSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxFQUFFLENBQUM7O0lBRTVELElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDOztDQUUzQjs7QUFFRCxRQUFRLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLE1BQU0sRUFBRUUsSUFBVSxDQUFDLFNBQVMsRUFBRSxFQUFFOztJQUV2RSxXQUFXLEVBQUUsUUFBUTs7Ozs7Ozs7OztJQVVyQixHQUFHLEVBQUUsV0FBVyxNQUFNLEdBQUc7O1FBRXJCLElBQUksY0FBYyxDQUFDOztRQUVuQixLQUFLLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHOztZQUV4QixNQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsR0FBRzs7Z0JBRTFDLElBQUksQ0FBQyxHQUFHLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7O2FBRTlCOztZQUVELE9BQU8sSUFBSSxDQUFDOztTQUVmOzs7UUFHRCxLQUFLLE1BQU0sWUFBWSxRQUFRLEdBQUc7O1lBRTlCLGNBQWMsR0FBRyxNQUFNLENBQUM7O1lBRXhCLEtBQUssTUFBTSxDQUFDLGFBQWEsR0FBRzs7Z0JBRXhCLE1BQU0sRUFBRSxTQUFTLEVBQUUsR0FBRyxJQUFJLENBQUM7O2dCQUUzQixLQUFLLFNBQVMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxhQUFhLEVBQUUsRUFBRSxJQUFJLEVBQUUsb0JBQW9CLEVBQUUsU0FBUyxFQUFFLEVBQUUsQ0FBQyxFQUFFOztnQkFFdkYsTUFBTSxDQUFDLGFBQWEsRUFBRSxFQUFFLElBQUksRUFBRSx5QkFBeUIsRUFBRSxNQUFNLEVBQUUsV0FBVyxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sR0FBRzs7Ozs7Ozs7O29CQVNuRyxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUUsSUFBSSxFQUFFLHlCQUF5QixFQUFFLE1BQU0sRUFBRSxvQkFBb0IsRUFBRSxJQUFJLEVBQUUsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsQ0FBQzs7O2lCQUcvSCxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLENBQUM7YUFDdEI7O1NBRUosTUFBTTs7O1lBR0gsY0FBYyxHQUFHLElBQUlFLFFBQWMsRUFBRSxDQUFDO1lBQ3RDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQzVCLGNBQWMsQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7WUFDdkMsY0FBYyxDQUFDLEdBQUcsRUFBRSxNQUFNLEVBQUUsQ0FBQzs7U0FFaEM7O1FBRURBLFFBQWMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLENBQUM7O0tBRTdEOztJQUVELElBQUksRUFBRSxZQUFZOztRQUVkLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQzs7S0FFakI7Ozs7Ozs7OztJQVNELE9BQU8sRUFBRSxXQUFXLEtBQUssR0FBRzs7UUFFeEIsS0FBSyxLQUFLLENBQUMsVUFBVSxJQUFJLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxLQUFLLENBQUMsR0FBRzs7WUFFckQsSUFBSSxDQUFDLFFBQVEsRUFBRSxXQUFXLE1BQU0sR0FBRzs7Ozs7OztnQkFPL0IsTUFBTSxDQUFDLGFBQWEsRUFBRSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsRUFBRSxDQUFDOzthQUUvQyxFQUFFLENBQUM7O1NBRVA7O0tBRUo7Ozs7Ozs7OztJQVNELFlBQVksRUFBRSxXQUFXLElBQUksR0FBRzs7UUFFNUIsSUFBSSxTQUFTLENBQUM7O1FBRWQsS0FBSyxJQUFJLFlBQVksV0FBVyxHQUFHOztZQUUvQixTQUFTLEdBQUcsSUFBSSxDQUFDOztTQUVwQixNQUFNLEtBQUssSUFBSSxJQUFJLElBQUksQ0FBQyxTQUFTLEdBQUc7O1lBRWpDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDOztTQUU5Qjs7UUFFRCxLQUFLLFNBQVMsR0FBRzs7WUFFYixJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxXQUFXLEtBQUssR0FBRzs7Z0JBRXRDLEtBQUssS0FBSyxZQUFZLFFBQVEsSUFBSSxLQUFLLENBQUMsYUFBYSxHQUFHOzs7Ozs7OztvQkFRcEQsS0FBSyxDQUFDLGFBQWEsRUFBRSxFQUFFLElBQUksRUFBRSxvQkFBb0IsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLEVBQUUsQ0FBQzs7aUJBRS9FOzthQUVKLEVBQUUsQ0FBQzs7WUFFSixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQzs7U0FFOUI7O0tBRUo7Ozs7Ozs7O0lBUUQsTUFBTSxFQUFFLFlBQVk7O1FBRWhCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDOzs7Ozs7O1FBT25CLElBQUksQ0FBQyxhQUFhLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEVBQUUsQ0FBQzs7S0FFMUM7Ozs7Ozs7O0lBUUQsVUFBVSxFQUFFLFdBQVcsUUFBUSxHQUFHOzs7Ozs7OztRQVE5QixJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLEVBQUUsQ0FBQzs7S0FFbEU7Ozs7Ozs7O0lBUUQsT0FBTyxFQUFFLFlBQVk7Ozs7Ozs7UUFPakIsSUFBSSxDQUFDLGFBQWEsRUFBRSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsRUFBRSxDQUFDOztLQUUzQzs7Ozs7Ozs7SUFRRCxZQUFZLEVBQUUsWUFBWTs7UUFFdEIsSUFBSSxTQUFTLENBQUM7O1FBRWQsS0FBSyxNQUFNLENBQUMsVUFBVSxJQUFJLEdBQUcsR0FBRzs7WUFFNUIsU0FBUyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQzs7U0FFckMsTUFBTSxLQUFLLE1BQU0sQ0FBQyxVQUFVLEdBQUcsR0FBRyxLQUFLLE1BQU0sQ0FBQyxVQUFVLElBQUksSUFBSSxHQUFHOztZQUVoRSxTQUFTLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDOztTQUV2QyxNQUFNLEtBQUssTUFBTSxDQUFDLFVBQVUsR0FBRyxJQUFJLElBQUksTUFBTSxDQUFDLFVBQVUsSUFBSSxJQUFJLEdBQUc7O1lBRWhFLFNBQVMsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7O1NBRXJDLE1BQU0sS0FBSyxNQUFNLENBQUMsVUFBVSxHQUFHLElBQUksR0FBRzs7WUFFbkMsU0FBUyxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQzs7U0FFMUMsTUFBTTs7WUFFSCxTQUFTLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQzs7U0FFcEM7O1FBRUQsT0FBTyxTQUFTLENBQUM7O0tBRXBCOzs7Ozs7OztJQVFELGFBQWEsRUFBRSxXQUFXLE9BQU8sR0FBRzs7UUFFaEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUcsT0FBTyxDQUFDO1FBQzVCLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQzs7S0FFcEM7Ozs7Ozs7Ozs7SUFVRCx3QkFBd0IsRUFBRSxXQUFXLFNBQVMsRUFBRSxLQUFLLEdBQUc7O1FBRXBELEtBQUssR0FBRyxFQUFFLEtBQUssS0FBSyxTQUFTLEtBQUssS0FBSyxHQUFHLENBQUMsQ0FBQzs7UUFFNUMsTUFBTSxPQUFPLEdBQUcsRUFBRSxTQUFTLEtBQUssU0FBUyxLQUFLLFNBQVMsS0FBSyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxHQUFHLElBQUksRUFBRSxDQUFDOztRQUVwRyxJQUFJLENBQUMsUUFBUSxFQUFFLFdBQVcsTUFBTSxHQUFHOztZQUUvQixLQUFLLE1BQU0sWUFBWSxRQUFRLEdBQUc7O2dCQUU5QixLQUFLLE9BQU8sR0FBRzs7b0JBRVgsTUFBTSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQzs7aUJBRXhCLE1BQU07O29CQUVILE1BQU0sQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUM7O2lCQUV4Qjs7YUFFSjs7U0FFSixFQUFFLENBQUM7O1FBRUosSUFBSSxDQUFDLGlCQUFpQixHQUFHLE9BQU8sQ0FBQzs7O1FBR2pDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLEVBQUUsWUFBWTs7Ozs7OztZQU8zQyxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUUsSUFBSSxFQUFFLDZCQUE2QixFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsRUFBRSxDQUFDOztTQUVuRixDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQzs7S0FFM0M7Ozs7Ozs7OztJQVNELGVBQWUsRUFBRSxXQUFXLEdBQUcsRUFBRSxLQUFLLEdBQUc7O1FBRXJDLElBQUksQ0FBQyxlQUFlLEdBQUcsR0FBRyxDQUFDO1FBQzNCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7O0tBRWxDOzs7Ozs7Ozs7OztJQVdELElBQUksRUFBRSxXQUFXLElBQUksRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLFFBQVEsR0FBRzs7UUFFcEQsSUFBSSxLQUFLLEVBQUUsR0FBRyxDQUFDOztRQUVmLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDOztRQUVwQixLQUFLLENBQUMsUUFBUSxHQUFHOztZQUViLE9BQU8sQ0FBQyxJQUFJLEVBQUUsOENBQThDLEVBQUUsQ0FBQzs7WUFFL0QsT0FBTzs7U0FFVjs7O1FBR0QsS0FBSyxVQUFVLEtBQUssU0FBUyxHQUFHOztZQUU1QixLQUFLLEdBQUcsVUFBVSxDQUFDOztTQUV0QixNQUFNLEtBQUssSUFBSSxDQUFDLGlCQUFpQixLQUFLLFNBQVMsR0FBRzs7WUFFL0MsS0FBSyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQzs7U0FFbEMsTUFBTTs7WUFFSCxLQUFLLEdBQUcsR0FBRyxDQUFDOztTQUVmOzs7O1FBSUQsS0FBSyxRQUFRLEdBQUc7O1lBRVosR0FBRyxHQUFHLFFBQVEsQ0FBQzs7U0FFbEIsTUFBTSxLQUFLLElBQUksQ0FBQyxlQUFlLEdBQUc7O1lBRS9CLEdBQUcsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDOztTQUU5QixNQUFNOztZQUVILEdBQUcsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDOztTQUV6Qjs7O1FBR0QsTUFBTSxJQUFJLEdBQUcsSUFBSSxRQUFRLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxDQUFDO1FBQy9CLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxPQUFPLEVBQUUsWUFBWTs7Ozs7Ozs7O1lBU3hDLElBQUksQ0FBQyxhQUFhLEVBQUUsRUFBRSxJQUFJLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQzs7U0FFaEcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQzs7UUFFakIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUM7O1FBRTlCLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUM7O1FBRWpCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDOztLQUV4Qjs7SUFFRCxLQUFLLEVBQUUsWUFBWTs7UUFFZixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7O0tBRTVCOztJQUVELGdCQUFnQixFQUFFLFlBQVk7O1FBRTFCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSUosS0FBSyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFO2FBQ2xELE1BQU0sRUFBRUEsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFO2FBQ2xDLE9BQU8sRUFBRSxZQUFZOztnQkFFbEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7Ozs7Ozs7O2dCQVFwQixJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUUsSUFBSSxFQUFFLGtCQUFrQixFQUFFLEVBQUUsQ0FBQzs7YUFFdEQsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQzs7UUFFckIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUlBLEtBQUssQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRTthQUNuRCxNQUFNLEVBQUVBLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRTthQUNsQyxVQUFVLEVBQUUsWUFBWTs7Z0JBRXJCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDOzs7Ozs7OztnQkFRckIsSUFBSSxDQUFDLGFBQWEsRUFBRSxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxFQUFFLENBQUM7O2FBRXBELENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxFQUFFLENBQUM7O1FBRXJCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSUEsS0FBSyxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUU7YUFDekMsTUFBTSxFQUFFQSxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUU7YUFDbEMsVUFBVSxFQUFFLFlBQVk7Ozs7Ozs7Z0JBT3JCLElBQUksQ0FBQyxhQUFhLEVBQUUsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsRUFBRSxDQUFDOzthQUVwRCxDQUFDLElBQUksR0FBRyxJQUFJLEVBQUUsRUFBRTthQUNoQixLQUFLLEVBQUUsQ0FBQzs7UUFFYixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUlBLEtBQUssQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFO2FBQ3pDLE1BQU0sRUFBRUEsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUM7O0tBRTNDOztJQUVELHFCQUFxQixFQUFFLFlBQVk7O1FBRS9CLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEdBQUc7WUFDNUUsUUFBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7U0FDbEQ7O0tBRUo7Ozs7Ozs7O0lBUUQsTUFBTSxFQUFFLFdBQVcsUUFBUSxHQUFHOztRQUUxQixRQUFRLEdBQUcsUUFBUSxJQUFJLENBQUMsR0FBRyxRQUFRLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDOztRQUU3RCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLGVBQWU7YUFDZixFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQUUsUUFBUSxFQUFFO2FBQzlCLFFBQVEsRUFBRSxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxFQUFFO2FBQ25ELFVBQVUsRUFBRSxZQUFZOztnQkFFckIsSUFBSSxDQUFDLHdCQUF3QixFQUFFLElBQUksRUFBRSxRQUFRLEdBQUcsQ0FBQyxFQUFFLENBQUM7Ozs7Ozs7Z0JBT3BELElBQUksQ0FBQyxhQUFhLEVBQUUsRUFBRSxJQUFJLEVBQUUscUJBQXFCLEVBQUUsRUFBRSxDQUFDOzthQUV6RCxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRTthQUNmLEtBQUssRUFBRSxDQUFDOztLQUVoQjs7Ozs7OztJQU9ELE9BQU8sRUFBRSxXQUFXLFFBQVEsR0FBRzs7UUFFM0IsUUFBUSxHQUFHLFFBQVEsSUFBSSxDQUFDLEdBQUcsUUFBUSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQzs7UUFFN0QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsZ0JBQWdCO2FBQ2hCLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsRUFBRSxRQUFRLEVBQUU7YUFDOUIsUUFBUSxFQUFFLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUU7YUFDbkQsS0FBSyxFQUFFLENBQUM7O0tBRWhCOzs7Ozs7Ozs7SUFTRCxPQUFPLEVBQUUsWUFBWTs7UUFFakIsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDOztRQUV4QyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxlQUFlO2FBQ2YsRUFBRSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUU7YUFDbEIsT0FBTyxFQUFFLFlBQVk7Ozs7Ozs7Z0JBT2xCLElBQUksQ0FBQyxhQUFhLEVBQUUsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLEVBQUUsQ0FBQzs7Z0JBRTlDLEtBQUssSUFBSSxDQUFDLE1BQU0sR0FBRzs7b0JBRWYsSUFBSSxDQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsQ0FBQzs7aUJBRTNCLE1BQU07O29CQUVILElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQzs7aUJBRWY7O2FBRUosQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUU7YUFDZixLQUFLLEVBQUUsQ0FBQzs7Ozs7OztRQU9iLElBQUksQ0FBQyxhQUFhLEVBQUUsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEVBQUUsQ0FBQzs7UUFFeEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsS0FBSyxJQUFJOztZQUU1QixLQUFLLENBQUMsYUFBYSxFQUFFLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFLEVBQUUsQ0FBQzs7U0FFckQsRUFBRSxDQUFDOztRQUVKLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDOztLQUV0Qjs7Ozs7Ozs7SUFRRCxPQUFPLEVBQUUsWUFBWTs7UUFFakIsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDOztRQUV4QyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxlQUFlO2FBQ2YsRUFBRSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUU7YUFDbEIsT0FBTyxFQUFFLFlBQVk7Ozs7Ozs7Z0JBT2xCLElBQUksQ0FBQyxhQUFhLEVBQUUsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLEVBQUUsQ0FBQzs7Z0JBRTlDLElBQUksQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLENBQUM7Z0JBQ3pCLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxLQUFLLEVBQUUsQ0FBQzs7YUFFMUMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUU7YUFDZixLQUFLLEVBQUUsQ0FBQzs7Ozs7OztRQU9iLElBQUksQ0FBQyxhQUFhLEVBQUUsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEVBQUUsQ0FBQzs7UUFFeEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsS0FBSyxJQUFJOztZQUU1QixLQUFLLENBQUMsYUFBYSxFQUFFLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFLEVBQUUsQ0FBQzs7U0FFckQsRUFBRSxDQUFDOztRQUVKLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDOztLQUV2Qjs7Ozs7OztJQU9ELE9BQU8sRUFBRSxZQUFZOztRQUVqQixJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxDQUFDOzs7Ozs7Ozs7UUFTNUIsSUFBSSxDQUFDLGFBQWEsRUFBRSxFQUFFLElBQUksRUFBRSx5QkFBeUIsRUFBRSxNQUFNLEVBQUUsbUJBQW1CLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxFQUFFLENBQUM7OztRQUduRyxTQUFTLGdCQUFnQixHQUFHLE1BQU0sR0FBRzs7WUFFakMsTUFBTSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsR0FBRyxNQUFNLENBQUM7O1lBRXRDLE1BQU0sSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUc7O2dCQUVwRCxnQkFBZ0IsRUFBRSxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7Z0JBQ3ZDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDOzthQUV2Qzs7WUFFRCxLQUFLLE1BQU0sWUFBWSxRQUFRLEdBQUc7O2dCQUU5QixNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7O2FBRXBCOztZQUVELEtBQUssUUFBUSxHQUFHLEVBQUUsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsRUFBRTtZQUMvRCxLQUFLLFFBQVEsR0FBRyxFQUFFLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEVBQUU7O1NBRWxFOztRQUVELGdCQUFnQixFQUFFLElBQUksRUFBRSxDQUFDOztRQUV6QixLQUFLLElBQUksQ0FBQyxNQUFNLEdBQUc7O1lBRWYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUM7O1NBRTlCOztLQUVKOztDQUVKLEVBQUUsQ0FBQzs7QUNyc0JKOzs7OztBQUtBLFNBQVMsYUFBYSxHQUFHLEtBQUssRUFBRSxTQUFTLEVBQUUsU0FBUyxHQUFHOztJQUVuRCxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUM7SUFDcEIsTUFBTSxRQUFRLEdBQUcsU0FBUyxJQUFJLElBQUlLLG9CQUEwQixFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7SUFDL0UsTUFBTSxRQUFRLEdBQUcsU0FBUyxJQUFJLElBQUlDLGlCQUF1QixFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQzs7SUFFL0YsUUFBUSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxDQUFDOztJQUUxQyxJQUFJLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQztJQUNqQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQzs7Q0FFeEI7O0FBRUQsYUFBYSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLFNBQVMsRUFBRSxFQUFFOztJQUUxRSxXQUFXLEVBQUUsYUFBYTs7Ozs7Ozs7SUFRMUIsSUFBSSxFQUFFLFdBQVcsR0FBRyxHQUFHOztRQUVuQixHQUFHLEdBQUcsR0FBRyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUM7O1FBRXRCLEtBQUssQ0FBQyxHQUFHLEdBQUc7O1lBRVIsT0FBTyxDQUFDLElBQUksRUFBRSx3QkFBd0IsRUFBRSxDQUFDOztZQUV6QyxPQUFPOztTQUVWLE1BQU0sS0FBSyxPQUFPLEdBQUcsS0FBSyxRQUFRLEdBQUc7O1lBRWxDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxFQUFFLENBQUM7O1NBRWhILE1BQU0sS0FBSyxHQUFHLFlBQVksZ0JBQWdCLEdBQUc7O1lBRTFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSW5CLE9BQWEsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDOztTQUUzQzs7S0FFSjs7Ozs7Ozs7SUFRRCxNQUFNLEVBQUUsV0FBVyxPQUFPLEdBQUc7O1FBRXpCLE9BQU8sQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLFNBQVMsR0FBR00sWUFBa0IsQ0FBQztRQUMzRCxPQUFPLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQzs7UUFFM0IsSUFBSSxDQUFDLGFBQWEsRUFBRSxPQUFPLEVBQUUsQ0FBQzs7UUFFOUIsTUFBTSxDQUFDLHFCQUFxQixFQUFFLFFBQVEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDOztLQUUxRTs7Ozs7OztJQU9ELEtBQUssRUFBRSxZQUFZOztRQUVmLFFBQVEsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQzs7S0FFekM7Ozs7Ozs7SUFPRCxPQUFPLEVBQUUsWUFBWTs7UUFFakIsTUFBTSxFQUFFLFFBQVEsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDOzs7UUFHbkNQLEtBQVcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDOztRQUUvQixLQUFLLEdBQUcsR0FBRyxFQUFFLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFOztRQUU3QixRQUFRLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUM7O0tBRTNDOztDQUVKLEVBQUUsQ0FBQzs7QUNqR0o7Ozs7QUFJQSxTQUFTLGFBQWEsSUFBSTs7SUFFdEIsTUFBTSxRQUFRLEdBQUcsSUFBSXFCLGNBQW9CLEVBQUUsQ0FBQztJQUM1QyxNQUFNLFFBQVEsR0FBRyxJQUFJRCxpQkFBdUIsRUFBRSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQzs7SUFFbkcsUUFBUSxDQUFDLFlBQVksRUFBRSxVQUFVLEVBQUUsSUFBSUUsZUFBcUIsRUFBRSxJQUFJLFlBQVksRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7O0lBRXhGLFFBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsQ0FBQzs7Q0FFN0M7O0FBRUQsYUFBYSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLFNBQVMsRUFBRSxFQUFFOztJQUUxRSxXQUFXLEVBQUUsYUFBYTs7Q0FFN0IsRUFBRSxDQUFDOztBQ2xCSjs7Ozs7QUFLQSxTQUFTLFlBQVksR0FBRyxNQUFNLEdBQUcsRUFBRSxFQUFFOztJQUVqQyxNQUFNLFVBQVUsR0FBRyxLQUFLLENBQUM7SUFDekIsTUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxFQUFFLEVBQUVDLFNBQWUsRUFBRSxNQUFNLEVBQUUsRUFBRSxDQUFDO0lBQzlELE1BQU0sUUFBUSxHQUFHLElBQUlDLGlCQUF1QixFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLENBQUM7SUFDbkYsTUFBTSxRQUFRLEdBQUcsSUFBSUMsY0FBb0IsRUFBRTs7UUFFdkMsY0FBYyxFQUFFLE1BQU0sQ0FBQyxjQUFjO1FBQ3JDLFlBQVksRUFBRSxNQUFNLENBQUMsWUFBWTtRQUNqQyxRQUFRLEVBQUUsTUFBTSxDQUFDLFFBQVE7UUFDekIsSUFBSSxFQUFFUixRQUFjO1FBQ3BCLFdBQVcsRUFBRSxJQUFJOztLQUVwQixFQUFFLENBQUM7O0lBRUosUUFBUSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxDQUFDOztJQUUxQyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUNyQixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztJQUM3QixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQzs7Q0FFNUM7O0FBRUQsWUFBWSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLFNBQVMsRUFBRSxFQUFFOztJQUV6RSxXQUFXLEVBQUUsWUFBWTs7Ozs7OztJQU96QixJQUFJLEVBQUUsWUFBWTs7UUFFZCxpQkFBaUIsQ0FBQyxJQUFJOztZQUVsQixJQUFJLENBQUMsTUFBTTs7WUFFWCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUU7WUFDeEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFO1lBQzVCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRTs7U0FFNUIsQ0FBQzs7S0FFTDs7Ozs7Ozs7SUFRRCxNQUFNLEVBQUUsV0FBVyxPQUFPLEdBQUc7O1FBRXpCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLE9BQU8sRUFBRSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUM7O1FBRWxELFFBQVEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQzs7S0FFMUM7Ozs7Ozs7SUFPRCxPQUFPLEVBQUUsWUFBWTs7UUFFakIsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQzs7UUFFL0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsRUFBRSxLQUFLLE1BQU0sRUFBRWpCLEtBQVcsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7O1FBRXJFLEtBQUssS0FBSyxZQUFZSSxXQUFpQixHQUFHOztZQUV0QyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7O1NBRW5COztRQUVELFFBQVEsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQzs7S0FFM0M7O0NBRUosRUFBRSxDQUFDOztBQ3ZGSjs7OztBQUlBLFNBQVMsYUFBYSxJQUFJOztJQUV0QixNQUFNLE1BQU0sR0FBRyxFQUFFLENBQUM7O0lBRWxCLE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUc7O1FBRTFCLE1BQU0sQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLFNBQVMsRUFBRSxDQUFDOztLQUV0Qzs7SUFFRCxZQUFZLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQzs7Q0FFckM7O0FBRUQsYUFBYSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxNQUFNLEVBQUUsWUFBWSxDQUFDLFNBQVMsRUFBRSxFQUFFOztJQUU5RSxXQUFXLEVBQUUsYUFBYTs7Q0FFN0IsRUFBRSxDQUFDOztBQ3RCSjs7Ozs7Ozs7Ozs7OztBQWFBLFNBQVMsYUFBYSxHQUFHLEdBQUcsRUFBRSxPQUFPLEdBQUcsRUFBRSxHQUFHOztJQUV6QyxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUM7SUFDcEIsTUFBTSxRQUFRLEdBQUcsSUFBSWUsb0JBQTBCLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztJQUNsRSxNQUFNLFFBQVEsR0FBRyxJQUFJQyxpQkFBdUIsRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUM7O0lBRWxGLFFBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsQ0FBQzs7SUFFMUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7O0lBRWYsSUFBSSxDQUFDLE9BQU8sR0FBRzs7UUFFWCxZQUFZLEVBQUUsUUFBUSxDQUFDLGFBQWEsRUFBRSxPQUFPLEVBQUU7UUFDL0MsSUFBSSxFQUFFLElBQUk7UUFDVixLQUFLLEVBQUUsSUFBSTtRQUNYLFFBQVEsRUFBRSxLQUFLO1FBQ2YsV0FBVyxFQUFFLElBQUk7UUFDakIsV0FBVyxFQUFFLFdBQVc7O0tBRTNCLENBQUM7O0lBRUYsTUFBTSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDOztJQUV2QyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDO0lBQzlDLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDOztJQUVyQixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxFQUFFLENBQUM7SUFDL0QsSUFBSSxDQUFDLGdCQUFnQixFQUFFLGtCQUFrQixFQUFFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQztJQUNuRixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsY0FBYyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxFQUFFLENBQUM7SUFDdkUsSUFBSSxDQUFDLGdCQUFnQixFQUFFLFlBQVksRUFBRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxFQUFFLENBQUM7O0NBRWhGLEFBQ0Q7QUFDQSxhQUFhLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsU0FBUyxFQUFFLEVBQUU7O0lBRTFFLFdBQVcsRUFBRSxhQUFhOztJQUUxQixRQUFRLEVBQUUsWUFBWTs7UUFFbEIsSUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLDBUQUEwVCxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSx5a0RBQXlrRCxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsU0FBUyxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxJQUFJLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM1Z0UsT0FBTyxLQUFLLENBQUM7O0tBRWhCOzs7Ozs7OztJQVFELElBQUksRUFBRSxZQUFZOztRQUVkLE1BQU0sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN6RSxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQ2hDLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDL0IsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUM7UUFDaEQsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUM7O1FBRXhDLEtBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLEtBQUssQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQzFCLEtBQUssQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQ2hDLEtBQUssQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQ2hDLEtBQUssQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDOztRQUVwQixLQUFLLFdBQVcsR0FBRzs7WUFFZixLQUFLLENBQUMsWUFBWSxFQUFFLGFBQWEsRUFBRSxFQUFFLEVBQUUsQ0FBQztZQUN4QyxLQUFLLENBQUMsWUFBWSxFQUFFLG9CQUFvQixFQUFFLEVBQUUsRUFBRSxDQUFDOztTQUVsRDs7UUFFRCxNQUFNLFlBQVksR0FBRyxXQUFXOztZQUU1QixJQUFJLENBQUMsZUFBZSxFQUFFLEtBQUssRUFBRSxDQUFDOztZQUU5QixLQUFLLFFBQVEsR0FBRzs7Ozs7Ozs7Z0JBUVosSUFBSSxDQUFDLGFBQWEsRUFBRSxFQUFFLElBQUksRUFBRSx5QkFBeUIsRUFBRSxNQUFNLEVBQUUsdUJBQXVCLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUM7O2FBRTNHOzs7WUFHRCxLQUFLLElBQUksQ0FBQyxRQUFRLEVBQUUsR0FBRzs7Z0JBRW5CLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQzs7Z0JBRWQsS0FBSyxRQUFRLElBQUksS0FBSyxHQUFHOzs7Ozs7OztvQkFRckIsSUFBSSxDQUFDLGFBQWEsRUFBRSxFQUFFLElBQUksRUFBRSx5QkFBeUIsRUFBRSxNQUFNLEVBQUUsdUJBQXVCLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUM7O2lCQUUzRyxNQUFNOzs7Ozs7OztvQkFRSCxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUUsSUFBSSxFQUFFLHlCQUF5QixFQUFFLE1BQU0sRUFBRSx1QkFBdUIsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQzs7aUJBRTFHOzthQUVKOztZQUVELE1BQU0sTUFBTSxHQUFHLE1BQU07OztnQkFHakIsUUFBUSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDOztnQkFFaEMsVUFBVSxFQUFFLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFDdEMsTUFBTSxFQUFFLENBQUM7O2FBRVosQ0FBQzs7WUFFRixNQUFNLENBQUMscUJBQXFCLEVBQUUsTUFBTSxFQUFFLENBQUM7O1NBRTFDLENBQUM7Ozs7Ozs7Ozs7UUFVRixLQUFLLEtBQUssQ0FBQyxVQUFVLEdBQUcsQ0FBQyxHQUFHOztZQUV4QixZQUFZLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDOztTQUU3QixNQUFNOztZQUVILEtBQUssS0FBSyxDQUFDLGdCQUFnQixFQUFFLFFBQVEsRUFBRSxDQUFDLE1BQU0sS0FBSyxDQUFDLEdBQUc7O2dCQUVuRCxNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxFQUFFLFFBQVEsRUFBRSxDQUFDO2dCQUNsRCxNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7Z0JBQ3RCLEtBQUssQ0FBQyxXQUFXLEVBQUUsTUFBTSxFQUFFLENBQUM7O2FBRS9COztZQUVELEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNoQjs7UUFFRCxLQUFLLENBQUMsZ0JBQWdCLEVBQUUsWUFBWSxFQUFFLFlBQVksQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQzs7UUFFbEUsS0FBSyxDQUFDLGdCQUFnQixFQUFFLFlBQVksRUFBRSxZQUFZOztZQUU5QyxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyxRQUFRLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7Ozs7Ozs7O1lBUWxGLElBQUksQ0FBQyxhQUFhLEVBQUUsRUFBRSxJQUFJLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxFQUFFLGVBQWUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxFQUFFLENBQUM7O1NBRWhILENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxFQUFFLENBQUM7O1FBRWpCLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRSxPQUFPLEVBQUUsWUFBWTs7WUFFekMsS0FBSyxDQUFDLElBQUksR0FBRzs7Z0JBRVQsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUNsQixJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUUsSUFBSSxFQUFFLHlCQUF5QixFQUFFLE1BQU0sRUFBRSx1QkFBdUIsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQzs7YUFFMUc7O1NBRUosQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUM7O0tBRTNCOzs7Ozs7Ozs7SUFTRCxlQUFlLEVBQUUsV0FBVyxLQUFLLEdBQUc7O1FBRWhDLEtBQUssQ0FBQyxLQUFLLEdBQUcsT0FBTzs7UUFFckIsTUFBTSxZQUFZLEdBQUcsSUFBSWQsWUFBa0IsRUFBRSxLQUFLLEVBQUUsQ0FBQztRQUNyRCxZQUFZLENBQUMsU0FBUyxHQUFHQyxZQUFrQixDQUFDO1FBQzVDLFlBQVksQ0FBQyxTQUFTLEdBQUdBLFlBQWtCLENBQUM7UUFDNUMsWUFBWSxDQUFDLE1BQU0sR0FBR0wsU0FBZSxDQUFDOztRQUV0QyxJQUFJLENBQUMsYUFBYSxFQUFFLFlBQVksRUFBRSxDQUFDOztLQUV0Qzs7Ozs7OztJQU9ELEtBQUssRUFBRSxZQUFZOztRQUVmLElBQUksQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFDOztRQUU5QixRQUFRLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUM7O0tBRXpDOzs7Ozs7OztJQVFELGFBQWEsRUFBRSxZQUFZOztRQUV2QixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDOztLQUVuQzs7Ozs7OztJQU9ELFdBQVcsRUFBRSxZQUFZOztRQUVyQixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDOztRQUVoQyxLQUFLLENBQUMsS0FBSyxHQUFHLEVBQUUsT0FBTyxFQUFFOztRQUV6QixLQUFLLEVBQUUsS0FBSyxDQUFDLE1BQU0sR0FBRyxNQUFNLEdBQUcsT0FBTyxFQUFFLEVBQUUsQ0FBQzs7S0FFOUM7Ozs7Ozs7O0lBUUQsbUJBQW1CLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxHQUFHOztRQUU3QyxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDOztRQUVoQyxLQUFLLEtBQUssSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsVUFBVSxFQUFFLElBQUksVUFBVSxLQUFLLENBQUMsR0FBRzs7WUFFNUQsS0FBSyxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQzs7WUFFaEQsSUFBSSxDQUFDLGFBQWEsRUFBRSxFQUFFLElBQUksRUFBRSx5QkFBeUIsRUFBRSxNQUFNLEVBQUUsZUFBZSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsRUFBRSxDQUFDOztTQUV4Rzs7S0FFSjs7Ozs7Ozs7O0lBU0QsU0FBUyxFQUFFLFlBQVk7O1FBRW5CLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDaEMsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUM7UUFDOUMsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUM7UUFDdEQsTUFBTSxTQUFTLEdBQUcsTUFBTTs7Ozs7Ozs7WUFRcEIsYUFBYSxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxFQUFFLENBQUM7O1NBRXJDLENBQUM7UUFDRixNQUFNLE9BQU8sR0FBRyxFQUFFLEtBQUssTUFBTTs7O1lBR3pCLE1BQU0sQ0FBQyxxQkFBcUIsRUFBRSxTQUFTLEVBQUUsQ0FBQzs7Ozs7Ozs7WUFRMUMsYUFBYSxFQUFFLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDOztTQUVsRCxDQUFDOztRQUVGLEtBQUssS0FBSyxJQUFJLEtBQUssQ0FBQyxNQUFNLEdBQUc7O1lBRXpCLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxDQUFDOztTQUVuRDs7S0FFSjs7Ozs7Ozs7SUFRRCxVQUFVLEVBQUUsWUFBWTs7UUFFcEIsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQzs7UUFFaEMsS0FBSyxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHOztZQUUxQixLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7O1NBRWpCOzs7Ozs7OztRQVFELElBQUksQ0FBQyxhQUFhLEVBQUUsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEVBQUUsQ0FBQzs7S0FFM0M7Ozs7Ozs7SUFPRCxtQkFBbUIsRUFBRSxZQUFZOztRQUU3QixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDOztRQUVoQyxLQUFLLEtBQUssQ0FBQyxVQUFVLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUc7O1lBRS9ELElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQzs7Ozs7Ozs7WUFRakIsSUFBSSxDQUFDLGFBQWEsRUFBRSxFQUFFLElBQUksRUFBRSx5QkFBeUIsRUFBRSxNQUFNLEVBQUUsdUJBQXVCLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUM7O1NBRTNHLE1BQU07O1lBRUgsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDOzs7Ozs7OztZQVFsQixJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUUsSUFBSSxFQUFFLHlCQUF5QixFQUFFLE1BQU0sRUFBRSx1QkFBdUIsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQzs7U0FFMUc7O1FBRUQsSUFBSSxDQUFDLG1CQUFtQixFQUFFLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsRUFBRSxDQUFDOztLQUVsRTs7Ozs7OztJQU9ELFVBQVUsRUFBRSxZQUFZOztRQUVwQixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDOztRQUVoQyxLQUFLLEtBQUssR0FBRzs7WUFFVCxJQUFJLENBQUMsbUJBQW1CLEVBQUUsRUFBRSxVQUFVLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQzs7U0FFakQ7O0tBRUo7Ozs7Ozs7O0lBUUQsWUFBWSxFQUFFLFlBQVk7O1FBRXRCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUM7O0tBRWxDOzs7Ozs7O0lBT0QsU0FBUyxFQUFFLFlBQVk7O1FBRW5CLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7O1FBRWhDLEtBQUssS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRzs7WUFFekIsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7O1NBRXRCOztRQUVELElBQUksQ0FBQyxhQUFhLEVBQUUsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLEVBQUUsQ0FBQzs7S0FFbEQ7Ozs7Ozs7SUFPRCxXQUFXLEVBQUUsWUFBWTs7UUFFckIsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQzs7UUFFaEMsS0FBSyxLQUFLLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRSxHQUFHOztZQUVoQyxLQUFLLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQzs7U0FFdkI7O1FBRUQsSUFBSSxDQUFDLGFBQWEsRUFBRSxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsRUFBRSxDQUFDOztLQUVsRDs7Ozs7Ozs7SUFRRCxlQUFlLEVBQUUsWUFBWTs7UUFFekIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDOztLQUU1Qjs7Ozs7OztJQU9ELE9BQU8sRUFBRSxZQUFZOztRQUVqQixNQUFNLEVBQUUsUUFBUSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsR0FBRyxJQUFJLENBQUM7O1FBRW5DLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQzs7UUFFbEIsSUFBSSxDQUFDLG1CQUFtQixFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDO1FBQ2xFLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxrQkFBa0IsRUFBRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxFQUFFLENBQUM7UUFDdEYsSUFBSSxDQUFDLG1CQUFtQixFQUFFLGNBQWMsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDO1FBQzFFLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxZQUFZLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDOztRQUVoRixLQUFLLEdBQUcsR0FBRyxFQUFFLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFOztRQUU3QixRQUFRLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUM7O0tBRTNDOztDQUVKLEVBQUUsQ0FBQzs7QUMzZUo7Ozs7O0FBS0EsU0FBUyxzQkFBc0IsR0FBRyxVQUFVLEdBQUcsRUFBRSxHQUFHOztJQUVoRCxJQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQztJQUM5QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztJQUNsQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztJQUNwQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQ3ZELElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ2hCLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ2hCLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO0lBQ2xCLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO0lBQ2YsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFDYixJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztJQUNiLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0lBQ25CLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO0lBQ2xCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ3BCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO0lBQ3pCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDOztJQUUzQixJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztJQUN0QyxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQzs7SUFFckMsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUM7SUFDcEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUM7O0lBRW5ELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDOztJQUVqQixJQUFJLEVBQUUsQ0FBQzs7SUFFUCxJQUFJOztRQUVBLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLEVBQUUsUUFBUSxFQUFFLENBQUM7O1FBRWxELEVBQUUsR0FBRyxNQUFNLENBQUMsVUFBVSxFQUFFLG9CQUFvQixFQUFFLENBQUM7O1FBRS9DLElBQUksQ0FBQyxFQUFFLEdBQUc7O1lBRU4sRUFBRSxHQUFHLE1BQU0sQ0FBQyxVQUFVLEVBQUUsT0FBTyxFQUFFLENBQUM7O1NBRXJDOztLQUVKO0lBQ0QsUUFBUSxLQUFLLEdBQUc7O0tBRWY7O0lBRUQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxZQUFZLEVBQUUsRUFBRSxDQUFDLGdCQUFnQixFQUFFLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzFFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsWUFBWSxFQUFFLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQzs7Q0FFN0U7O0FBRUQsTUFBTSxDQUFDLE1BQU0sRUFBRSxzQkFBc0IsQ0FBQyxTQUFTLEVBQUU7O0lBRTdDLFdBQVcsRUFBRSxzQkFBc0I7Ozs7Ozs7OztJQVNuQyxXQUFXLEVBQUUsV0FBVyxNQUFNLEVBQUUsS0FBSyxHQUFHOztRQUVwQyxLQUFLLElBQUksQ0FBQyxVQUFVLEdBQUc7O1lBRW5CLElBQUksQ0FBQyxVQUFVLEVBQUUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDOztTQUV2RDs7S0FFSjs7Ozs7OztJQU9ELGtCQUFrQixFQUFFLFlBQVk7O1FBRTVCLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3JDLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDOztRQUVyQyxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3ZCLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7O1FBRXZCLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUM7UUFDakMsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQzs7UUFFakMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUc7WUFDaEMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUc7Z0JBQ2hDLE1BQU0sQ0FBQyxHQUFHLFFBQVEsQ0FBQyxhQUFhLEVBQUUsUUFBUSxFQUFFLENBQUM7Z0JBQzdDLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsS0FBSyxJQUFJLEdBQUcsQ0FBQyxFQUFFLENBQUM7Z0JBQzNFLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsS0FBSyxJQUFJLEdBQUcsQ0FBQyxFQUFFLENBQUM7Z0JBQzdFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDO2dCQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsVUFBVSxFQUFFLElBQUksRUFBRSxFQUFFLENBQUM7YUFDMUM7U0FDSjs7S0FFSjs7Ozs7Ozs7OztJQVVELGVBQWUsRUFBRSxXQUFXLENBQUMsRUFBRSxDQUFDLEVBQUUsT0FBTyxHQUFHOztRQUV4QyxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3ZCLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7O1FBRXZCLENBQUMsSUFBSSxHQUFHLENBQUM7UUFDVCxDQUFDLElBQUksR0FBRyxDQUFDOztRQUVULE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDO1FBQ2xDLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDOztRQUVsQyxDQUFDLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQztRQUNmLENBQUMsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDOztRQUVmLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLEdBQUcsRUFBRSxFQUFFLENBQUMsU0FBUyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQzs7UUFFMUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDOztLQUVuQjs7Ozs7OztJQU9ELFFBQVEsRUFBRSxXQUFXOztRQUVqQixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7O1FBRWQsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQzs7UUFFN0MsS0FBSyxJQUFJLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxNQUFNLEVBQUU7O1lBRTlCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUMzQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDM0IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDOztZQUV2QixLQUFLLElBQUksQ0FBQyxjQUFjLEdBQUc7O2dCQUV2QixJQUFJLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQzs7YUFFNUM7O1NBRUo7S0FDSjs7Ozs7OztJQU9ELGVBQWUsRUFBRSxZQUFZOztRQUV6QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQzs7UUFFekIsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDckMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDckMsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDOztRQUVsQixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNoQixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7O1FBRXBCLE1BQU0sRUFBRSxRQUFRLEVBQUUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDOztRQUV0QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHO1lBQ3pCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUc7Z0JBQ3pCLE1BQU0sR0FBRyxHQUFHLHlGQUF5RixHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUcsQ0FBQyxHQUFHLFVBQVUsR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLGNBQWMsQ0FBQztnQkFDeEwsRUFBRSxVQUFVLENBQUMsRUFBRSxDQUFDLEdBQUc7b0JBQ2YsSUFBSSxRQUFRLEdBQUc7d0JBQ1gsTUFBTSxPQUFPLEdBQUcsYUFBYSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLFdBQVc7NEJBQ3RELElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQzt5QkFDekMsRUFBRSxDQUFDO3FCQUNQLE1BQU07d0JBQ0gsTUFBTSxHQUFHLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQzt3QkFDeEIsR0FBRyxDQUFDLGdCQUFnQixFQUFFLE1BQU0sRUFBRSxXQUFXOzRCQUNyQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUM7eUJBQ3RDLEVBQUUsQ0FBQzt3QkFDSixHQUFHLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQzt3QkFDckIsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7cUJBQ2pCO2lCQUNKLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO2FBQ2Y7U0FDSjs7S0FFSjs7Ozs7Ozs7SUFRRCxJQUFJLEVBQUUsV0FBVyxNQUFNLEdBQUc7O1FBRXRCLElBQUksQ0FBQyxRQUFRLEVBQUUsTUFBTSxFQUFFLENBQUM7O0tBRTNCOzs7Ozs7OztJQVFELFFBQVEsRUFBRSxVQUFVLEVBQUUsR0FBRzs7UUFFckIsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxFQUFFLEVBQUUsRUFBRSxVQUFVLE1BQU0sRUFBRSxNQUFNLEVBQUU7WUFDNUQsSUFBSSxNQUFNLEtBQUssTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLEVBQUU7Z0JBQzVDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO2dCQUNyQixJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUM7Z0JBQ2xDLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7Z0JBQ3BDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQzthQUMxQjtTQUNKLENBQUMsQ0FBQzs7S0FFTjs7Ozs7Ozs7SUFRRCxPQUFPLEVBQUUsVUFBVSxDQUFDLEdBQUc7O1FBRW5CLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7S0FDN0I7O0NBRUosRUFBRSxDQUFDOztBQ2xQSjs7Ozs7OztBQU9BLFNBQVMsd0JBQXdCLEdBQUcsTUFBTSxFQUFFLE1BQU0sR0FBRzs7SUFFakQsYUFBYSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQzs7SUFFM0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7O0lBRXJCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDOztJQUV0QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQzs7SUFFM0IsSUFBSSxDQUFDLGlCQUFpQixFQUFFLE1BQU0sRUFBRSxDQUFDOztDQUVwQzs7QUFFRCx3QkFBd0IsQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsTUFBTSxFQUFFLGFBQWEsQ0FBQyxTQUFTLEVBQUUsRUFBRTs7SUFFMUYsV0FBVyxFQUFFLHdCQUF3Qjs7Ozs7Ozs7SUFRckMsSUFBSSxFQUFFLFdBQVcsTUFBTSxHQUFHOztRQUV0QixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQzs7UUFFMUIsTUFBTSxHQUFHLEVBQUUsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLE1BQU0sRUFBRSxDQUFDOztRQUV6QyxLQUFLLE1BQU0sSUFBSSxJQUFJLENBQUMsU0FBUyxHQUFHOztZQUU1QixJQUFJLENBQUMsYUFBYSxFQUFFLE1BQU0sRUFBRSxDQUFDOztTQUVoQzs7S0FFSjs7Ozs7Ozs7SUFRRCxpQkFBaUIsRUFBRSxXQUFXLE1BQU0sR0FBRzs7UUFFbkMsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsRUFBRSxRQUFRLEVBQUUsQ0FBQztRQUNsRCxNQUFNLENBQUMsR0FBRyxHQUFHLDBDQUEwQyxDQUFDO1FBQ3hELE1BQU0sQ0FBQyxHQUFHLElBQUksTUFBTSxHQUFHLE1BQU0sR0FBRyxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQzVDLE1BQU0sQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQztRQUMzRCxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDOztRQUUvQyxRQUFRLENBQUMsYUFBYSxFQUFFLE1BQU0sRUFBRSxDQUFDLFdBQVcsRUFBRSxNQUFNLEVBQUUsQ0FBQzs7S0FFMUQ7Ozs7Ozs7SUFPRCxZQUFZLEVBQUUsWUFBWTs7UUFFdEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLHNCQUFzQixFQUFFLENBQUM7O1FBRTlDLEtBQUssSUFBSSxDQUFDLGFBQWEsR0FBRzs7WUFFdEIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDOztTQUVmOztLQUVKOzs7Ozs7OztJQVFELFlBQVksRUFBRSxZQUFZOztRQUV0QixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7O0tBRXpCOzs7Ozs7OztJQVFELGFBQWEsRUFBRSxXQUFXLE1BQU0sR0FBRzs7UUFFL0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7O1FBRTNCLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDOztRQUV6RCxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQzs7UUFFekQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxFQUFFLENBQUM7O1FBRTlDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDOztRQUU5QixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7S0FDaEM7Ozs7Ozs7O0lBUUQsTUFBTSxFQUFFLFdBQVcsTUFBTSxHQUFHOztRQUV4QixhQUFhLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUlELE9BQWEsRUFBRSxNQUFNLEVBQUUsRUFBRSxDQUFDOztLQUU1RTs7Ozs7OztJQU9ELEtBQUssRUFBRSxZQUFZOztRQUVmLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDOztRQUUzQixhQUFhLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUM7O0tBRTlDOztDQUVKLEVBQUUsQ0FBQzs7QUM5SUo7Ozs7O0FBS0EsQUFFQTs7Ozs7Ozs7Ozs7OztBQWFBLE1BQU0sbUJBQW1CLEdBQUc7O0lBRXhCLFFBQVEsRUFBRTs7UUFFTixVQUFVLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSUEsT0FBYSxFQUFFLEVBQUU7UUFDMUMsWUFBWSxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtRQUM1QixXQUFXLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSXlCLE9BQWEsRUFBRSxFQUFFO1FBQzNDLE1BQU0sRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7UUFDdEIsU0FBUyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTs7S0FFNUI7O0lBRUQsWUFBWSxFQUFFOztRQUVWLG1CQUFtQjs7UUFFbkIsZUFBZTs7UUFFZixXQUFXO1FBQ1gsc0NBQXNDOztRQUV0QyxHQUFHOztLQUVOLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRTs7SUFFZCxjQUFjLEVBQUU7O1FBRVosNkJBQTZCO1FBQzdCLDJCQUEyQjtRQUMzQix5QkFBeUI7UUFDekIscUJBQXFCO1FBQ3JCLHdCQUF3Qjs7UUFFeEIsbUJBQW1COztRQUVuQixxQ0FBcUM7O1FBRXJDLGNBQWM7O1FBRWQsb0NBQW9DOztRQUVwQyxvREFBb0Q7O1FBRXBELGlFQUFpRTtRQUNqRSxxRUFBcUU7O1FBRXJFLDJEQUEyRDs7UUFFM0QsdUJBQXVCO1FBQ3ZCLHNEQUFzRDtRQUN0RCxpQ0FBaUM7UUFDakMsSUFBSTs7UUFFSixpREFBaUQ7O1FBRWpELDRCQUE0Qjs7UUFFNUIsR0FBRzs7S0FFTixDQUFDLElBQUksRUFBRSxJQUFJLEVBQUU7O0NBRWpCLENBQUM7O0FDM0VGOzs7Ozs7OztBQVFBLFNBQVMsWUFBWSxHQUFHLElBQUksR0FBRyxPQUFPLEVBQUUsTUFBTSxFQUFFLElBQUksR0FBRyxLQUFLLEVBQUUsS0FBSyxHQUFHLEdBQUcsR0FBRzs7SUFFeEUsS0FBSyxJQUFJLEtBQUssT0FBTyxHQUFHOztRQUVwQixhQUFhLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDOztLQUV2Rzs7SUFFRCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNuQixJQUFJLENBQUMsR0FBRyxHQUFHLFFBQVEsQ0FBQztJQUNwQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQzs7SUFFcEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDdEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJQyxPQUFhLEVBQUUsQ0FBQzs7SUFFckMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJQyxVQUFnQixFQUFFLENBQUM7SUFDcEMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJQSxVQUFnQixFQUFFLENBQUM7SUFDcEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJQSxVQUFnQixFQUFFLENBQUM7SUFDdEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJQSxVQUFnQixFQUFFLENBQUM7O0lBRXhDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSWIsT0FBYSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFDNUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJQSxPQUFhLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQzs7SUFFNUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLGVBQWUsRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7O0NBRWpFOztBQUVELFlBQVksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsTUFBTSxFQUFFLGFBQWEsQ0FBQyxTQUFTLEVBQUUsRUFBRTs7SUFFOUUsV0FBVyxFQUFFLFlBQVk7O0lBRXpCLEdBQUcsRUFBRSxXQUFXLE1BQU0sR0FBRzs7UUFFckIsS0FBSyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRzs7WUFFeEIsTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLEdBQUc7O2dCQUUxQyxJQUFJLENBQUMsR0FBRyxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDOzthQUU5Qjs7WUFFRCxPQUFPLElBQUksQ0FBQzs7U0FFZjs7UUFFRCxLQUFLLE1BQU0sWUFBWSxRQUFRLEdBQUc7O1lBRTlCLE1BQU0sQ0FBQyxRQUFRLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQzs7U0FFckM7O1FBRUQsYUFBYSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQzs7S0FFcEQ7O0lBRUQsY0FBYyxFQUFFLFdBQVcsSUFBSSxFQUFFLEtBQUssR0FBRzs7UUFFckMsT0FBTyxJQUFJYyxtQkFBeUIsRUFBRSxJQUFJLEVBQUUsSUFBSSxHQUFHLEtBQUssRUFBRSxDQUFDOztLQUU5RDs7SUFFRCxjQUFjLEVBQUUsV0FBVyxJQUFJLEdBQUc7O1FBRTlCLE1BQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsRUFBRSxFQUFFLG1CQUFtQixFQUFFLEVBQUUsUUFBUSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUM7O1FBRXBGLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUMzQixRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7O1FBRTdCLE9BQU8sSUFBSUosY0FBb0IsRUFBRTs7WUFFN0IsUUFBUSxFQUFFLFFBQVE7WUFDbEIsWUFBWSxFQUFFLE1BQU0sQ0FBQyxZQUFZO1lBQ2pDLGNBQWMsRUFBRSxNQUFNLENBQUMsY0FBYztZQUNyQyxJQUFJLEVBQUVSLFFBQWM7WUFDcEIsV0FBVyxFQUFFLElBQUk7O1NBRXBCLEVBQUUsQ0FBQzs7S0FFUDs7SUFFRCxtQkFBbUIsRUFBRSxZQUFZOztRQUU3QixJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDO1FBQ2pHLElBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUM7UUFDakcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQztRQUM3RixJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixFQUFFLFlBQVksRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDO1FBQ2xHLElBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUM7UUFDakcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQztRQUM5RixJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixFQUFFLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDO1FBQ3BHLElBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLEVBQUUsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQztRQUN4RyxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixFQUFFLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDOztLQUV4Rzs7SUFFRCxxQkFBcUIsRUFBRSxZQUFZOztRQUUvQixJQUFJLENBQUMsU0FBUyxDQUFDLG1CQUFtQixFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQztRQUN4RixJQUFJLENBQUMsU0FBUyxDQUFDLG1CQUFtQixFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQztRQUN4RixJQUFJLENBQUMsU0FBUyxDQUFDLG1CQUFtQixFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQztRQUNwRixJQUFJLENBQUMsU0FBUyxDQUFDLG1CQUFtQixFQUFFLFlBQVksRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQztRQUN6RixJQUFJLENBQUMsU0FBUyxDQUFDLG1CQUFtQixFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQztRQUN4RixJQUFJLENBQUMsU0FBUyxDQUFDLG1CQUFtQixFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQztRQUNyRixJQUFJLENBQUMsU0FBUyxDQUFDLG1CQUFtQixFQUFFLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQztRQUMxRixJQUFJLENBQUMsU0FBUyxDQUFDLG1CQUFtQixFQUFFLGdCQUFnQixFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDO1FBQzlGLElBQUksQ0FBQyxTQUFTLENBQUMsbUJBQW1CLEVBQUUsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDOztLQUUvRjs7SUFFRCxXQUFXLEVBQUUsV0FBVyxLQUFLLEdBQUc7O1FBRTVCLE1BQU0sVUFBVSxHQUFHLEVBQUUsS0FBSyxDQUFDLE9BQU8sSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sTUFBTSxDQUFDLEVBQUU7O1FBRW5FLFNBQVMsVUFBVTs7UUFFbkIsS0FBSyxDQUFDOztZQUVGLE1BQU0sQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLE9BQU8sSUFBSSxDQUFDLEtBQUssS0FBSyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQztZQUM5RSxNQUFNLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxPQUFPLElBQUksQ0FBQyxLQUFLLEtBQUssQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7O1lBRTlFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQzs7WUFFM0IsTUFBTTs7UUFFVixLQUFLLENBQUM7O1lBRUYsTUFBTSxFQUFFLEdBQUcsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDL0QsTUFBTSxFQUFFLEdBQUcsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDL0QsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQztZQUNoRCxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsR0FBRyxRQUFRLENBQUM7O1lBRXhDLE1BQU07O1FBRVY7O1lBRUksTUFBTTs7U0FFVDs7UUFFRCxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQzs7S0FFM0I7O0lBRUQsV0FBVyxFQUFFLFdBQVcsS0FBSyxHQUFHOztRQUU1QixNQUFNLFVBQVUsR0FBRyxFQUFFLEtBQUssQ0FBQyxPQUFPLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLE1BQU0sQ0FBQyxFQUFFOztRQUVuRSxTQUFTLFVBQVU7O1FBRW5CLEtBQUssQ0FBQzs7WUFFRixNQUFNLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxPQUFPLElBQUksQ0FBQyxLQUFLLEtBQUssQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7WUFDOUUsTUFBTSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsT0FBTyxJQUFJLENBQUMsS0FBSyxLQUFLLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDOztZQUU5RSxNQUFNLE1BQU0sR0FBR2EsTUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUM7WUFDakUsTUFBTSxNQUFNLEdBQUdBLE1BQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDOztZQUVqRSxLQUFLLElBQUksQ0FBQyxRQUFRLEdBQUc7Z0JBQ2pCLElBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsQ0FBQztnQkFDcEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxDQUFDO2dCQUNwRCxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDM0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO2FBQzlCOztZQUVELE1BQU07O1FBRVYsS0FBSyxDQUFDOztZQUVGLE1BQU0sRUFBRSxHQUFHLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO1lBQy9ELE1BQU0sRUFBRSxHQUFHLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO1lBQy9ELE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUM7O1lBRWhELElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEdBQUcsUUFBUSxFQUFFLENBQUM7O1lBRTdELE1BQU07O1FBRVY7O1lBRUksTUFBTTs7U0FFVDs7S0FFSjs7SUFFRCxTQUFTLEVBQUUsWUFBWTs7UUFFbkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7O0tBRXpCOztJQUVELFlBQVksRUFBRSxXQUFXLEtBQUssR0FBRzs7UUFFN0IsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQzs7UUFFeEIsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDOztRQUVkLEtBQUssS0FBSyxDQUFDLFVBQVUsS0FBSyxTQUFTLEdBQUc7O1lBRWxDLEtBQUssR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDOztTQUU1QixNQUFNLEtBQUssS0FBSyxDQUFDLE1BQU0sS0FBSyxTQUFTLEdBQUc7O1lBRXJDLEtBQUssR0FBRyxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUM7O1NBRTFCOztRQUVELElBQUksQ0FBQyxZQUFZLEVBQUUsS0FBSyxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7O0tBRTNCOztJQUVELFlBQVksRUFBRSxXQUFXLEtBQUssR0FBRzs7UUFFN0IsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUM7UUFDeEMsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7UUFDbkMsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7O1FBRWxDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQzs7UUFFN0IsS0FBSyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxVQUFVLEdBQUc7O1lBRXJDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQzs7U0FFcEMsTUFBTSxLQUFLLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLFVBQVUsR0FBRzs7WUFFNUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDOztTQUVwQzs7S0FFSjs7SUFFRCxnQkFBZ0IsRUFBRSxZQUFZOztRQUUxQixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxxQkFBcUIsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxFQUFFLENBQUM7O1FBRWxGLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUM7O1FBRTFDLEtBQUssSUFBSSxDQUFDLFFBQVEsR0FBRzs7WUFFakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQywwQkFBMEIsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7O1NBRXZGOztRQUVELEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRzs7WUFFakYsTUFBTSxDQUFDLG9CQUFvQixFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQzs7U0FFL0M7O0tBRUo7O0lBRUQsS0FBSyxFQUFFLFlBQVk7O1FBRWYsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7UUFDL0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7UUFDakMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7O0tBRTNCOztJQUVELE1BQU0sRUFBRSxXQUFXLE9BQU8sR0FBRzs7UUFFekIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQzs7UUFFbkcsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7O1FBRXhCLElBQUksQ0FBQyxhQUFhLEVBQUUsRUFBRSxJQUFJLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxFQUFFLGdCQUFnQixFQUFFLEVBQUUsQ0FBQzs7UUFFcEYsYUFBYSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsQ0FBQzs7S0FFeEQ7O0lBRUQsT0FBTyxFQUFFLFlBQVk7O1FBRWpCLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDOztRQUU3QixJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUUsSUFBSSxFQUFFLHlCQUF5QixFQUFFLE1BQU0sRUFBRSxlQUFlLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDOztRQUV6RyxNQUFNLENBQUMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDOztRQUU1QyxhQUFhLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUM7O0tBRWhEOztJQUVELGNBQWMsRUFBRSxZQUFZOztRQUV4QixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDOztLQUV0Rzs7SUFFRCxhQUFhLEVBQUUsWUFBWTs7UUFFdkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7O0tBRXpCOztJQUVELE9BQU8sRUFBRSxZQUFZOztRQUVqQixJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQzs7UUFFN0IsYUFBYSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDOztLQUVoRDs7Q0FFSixDQUFDLENBQUM7O0FDN1RIOzs7Ozs7O0FBT0EsU0FBUyxpQkFBaUIsR0FBRyxNQUFNLEVBQUUsSUFBSSxFQUFFLEtBQUssR0FBRzs7SUFFL0MsWUFBWSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUM7O0NBRTNEOztBQUVELGlCQUFpQixDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxNQUFNLEVBQUUsWUFBWSxDQUFDLFNBQVMsRUFBRSxFQUFFOztJQUVsRixXQUFXLEVBQUUsaUJBQWlCOzs7Ozs7OztJQVE5QixNQUFNLEVBQUUsV0FBVyxPQUFPLEdBQUc7O1FBRXpCLElBQUksQ0FBQyxhQUFhLEVBQUUsT0FBTyxFQUFFLENBQUM7O1FBRTlCLFlBQVksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLENBQUM7O0tBRXZEOzs7Ozs7OztJQVFELGFBQWEsRUFBRSxXQUFXLE9BQU8sR0FBRzs7UUFFaEMsT0FBTyxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsU0FBUyxHQUFHdkIsWUFBa0IsQ0FBQzs7UUFFM0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsVUFBVSxFQUFFLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQzs7S0FFeEQ7Ozs7Ozs7SUFPRCxPQUFPLEVBQUUsWUFBWTs7UUFFakIsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsVUFBVSxFQUFFLENBQUM7O1FBRXRELEtBQUssUUFBUSxJQUFJLFFBQVEsQ0FBQyxLQUFLLEdBQUc7O1lBRTlCLFFBQVEsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7O1NBRTVCOztRQUVELFlBQVksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQzs7S0FFL0M7O0NBRUosRUFBRSxDQUFDOztBQy9ESjs7Ozs7O0FBTUEsU0FBUyxjQUFjLEdBQUcsV0FBVyxHQUFHOztJQUVwQyxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUM7SUFDcEIsTUFBTSxRQUFRLEdBQUcsSUFBSVksb0JBQTBCLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztJQUNsRSxNQUFNLFFBQVEsR0FBRyxJQUFJQyxpQkFBdUIsRUFBRSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDOztJQUVsRSxRQUFRLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLENBQUM7O0lBRTFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxLQUFLLEVBQUUsV0FBVyxFQUFFLENBQUM7SUFDdEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7O0lBRXJCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQztJQUMxRCxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxFQUFFLENBQUM7SUFDekQsSUFBSSxDQUFDLGdCQUFnQixFQUFFLG9CQUFvQixFQUFFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQztJQUNyRixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQzs7Q0FFaEY7O0FBRUQsY0FBYyxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLFNBQVMsRUFBRSxFQUFFOztJQUUzRSxXQUFXLEVBQUUsY0FBYzs7Ozs7Ozs7SUFRM0IsbUJBQW1CLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxHQUFHOztRQUU1QyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxTQUFTLEVBQUUsQ0FBQzs7S0FFeEM7Ozs7Ozs7O0lBUUQsZUFBZSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsR0FBRzs7UUFFcEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUM7O0tBRWhDOzs7Ozs7OztJQVFELEtBQUssRUFBRSxZQUFZOztRQUVmLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQzs7S0FFN0I7Ozs7Ozs7SUFPRCxJQUFJLEVBQUUsWUFBWTs7UUFFZCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDOztLQUVyQjs7Q0FFSixFQUFFLENBQUM7O0FDN0VKOzs7Ozs7O0FBT0EsU0FBUyxhQUFhLEdBQUcsTUFBTSxFQUFFLFVBQVUsR0FBRzs7SUFFMUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDckIsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLFVBQVUsS0FBSyxTQUFTLEtBQUssVUFBVSxHQUFHLFFBQVEsQ0FBQztJQUN2RSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQzs7Ozs7SUFLcEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7Ozs7OztJQU1wQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUlMLE9BQWEsRUFBRSxDQUFDOzs7SUFHbEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDOzs7Ozs7SUFNMUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDcEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7OztJQUdyQixJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztJQUNyQixJQUFJLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBQzs7O0lBRzVCLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO0lBQ2pCLElBQUksQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDOzs7SUFHeEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDdEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLElBQUksQ0FBQzs7O0lBR3pCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO0lBQ2xCLElBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDOzs7SUFHdkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7SUFDeEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxHQUFHLENBQUM7Ozs7OztJQU0zQixJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQztJQUN2QixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7OztHQUc5QixJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDO0dBQ2xDLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxDQUFDLEtBQUssQ0FBQztHQUNwQyxJQUFJLENBQUMscUJBQXFCLEdBQUcsRUFBRSxDQUFDOzs7R0FHaEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7R0FDakIsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7Ozs7OztJQU1qQixJQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsUUFBUSxDQUFDO0lBQ2xDLElBQUksQ0FBQyxlQUFlLEdBQUcsUUFBUSxDQUFDOzs7SUFHaEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7OztJQUdwQixJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxDQUFDOzs7SUFHeEQsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLEtBQUssRUFBRWdCLEtBQVcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFQSxLQUFXLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRUEsS0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDOzs7Ozs7O0lBT2xHLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQzs7SUFFakIsSUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDO0lBQ2hCLElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQzs7SUFFakIsSUFBSSxXQUFXLEdBQUcsSUFBSUosT0FBYSxFQUFFLENBQUM7SUFDdEMsSUFBSSxTQUFTLEdBQUcsSUFBSUEsT0FBYSxFQUFFLENBQUM7SUFDcEMsSUFBSSxXQUFXLEdBQUcsSUFBSUEsT0FBYSxFQUFFLENBQUM7O0lBRXRDLElBQUksUUFBUSxHQUFHLElBQUlBLE9BQWEsRUFBRSxDQUFDO0lBQ25DLElBQUksTUFBTSxHQUFHLElBQUlBLE9BQWEsRUFBRSxDQUFDO0lBQ2pDLElBQUksUUFBUSxHQUFHLElBQUlBLE9BQWEsRUFBRSxDQUFDO0lBQ25DLElBQUksU0FBUyxHQUFHLElBQUlaLE9BQWEsRUFBRSxDQUFDOztJQUVwQyxJQUFJLE1BQU0sR0FBRyxJQUFJQSxPQUFhLEVBQUUsQ0FBQzs7SUFFakMsSUFBSSxVQUFVLEdBQUcsSUFBSVksT0FBYSxFQUFFLENBQUM7SUFDckMsSUFBSSxRQUFRLEdBQUcsSUFBSUEsT0FBYSxFQUFFLENBQUM7SUFDbkMsSUFBSSxVQUFVLEdBQUcsSUFBSUEsT0FBYSxFQUFFLENBQUM7O0lBRXJDLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztJQUNkLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQztJQUNaLElBQUksUUFBUSxHQUFHLENBQUMsQ0FBQztJQUNqQixJQUFJLFVBQVUsR0FBRyxDQUFDLENBQUM7SUFDbkIsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQ2QsSUFBSSxHQUFHLEdBQUcsSUFBSVosT0FBYSxFQUFFLENBQUM7O0lBRTlCLElBQUksWUFBWSxHQUFHLElBQUlBLE9BQWEsRUFBRSxDQUFDO0lBQ3ZDLElBQUksY0FBYyxHQUFHLElBQUlhLFVBQWdCLEVBQUUsQ0FBQzs7SUFFNUMsSUFBSSxZQUFZLEdBQUcsQ0FBQyxFQUFFLFVBQVUsR0FBRyxDQUFDLENBQUM7SUFDckMsSUFBSSxhQUFhLENBQUM7SUFDbEIsSUFBSSxVQUFVLEdBQUcsS0FBSyxDQUFDOztJQUV2QixJQUFJLEtBQUssRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLFFBQVEsQ0FBQzs7SUFFeEMsSUFBSSxLQUFLLEdBQUcsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsWUFBWSxFQUFFLENBQUMsRUFBRSxXQUFXLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsQ0FBQzs7SUFFckcsSUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQzs7OztJQUl2QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDbkMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUM5QyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDOzs7O0lBSTlCLElBQUksSUFBSSxHQUFHLElBQUlBLFVBQWdCLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxNQUFNLENBQUMsRUFBRSxFQUFFLElBQUliLE9BQWEsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7SUFDaEcsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDOzs7O0lBSXpDLElBQUksV0FBVyxHQUFHLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxDQUFDO0lBQ3JDLElBQUksVUFBVSxHQUFHLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxDQUFDO0lBQ25DLElBQUksUUFBUSxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDOztJQUUvQixJQUFJLENBQUMsaUJBQWlCLEdBQUcsV0FBVyxVQUFVLEdBQUc7UUFDN0MsY0FBYyxDQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsQ0FBQztRQUNsQyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLENBQUM7S0FDOUMsQ0FBQzs7SUFFRixJQUFJLENBQUMsZUFBZSxHQUFHLFlBQVk7UUFDL0IsT0FBTyxZQUFZLENBQUM7S0FDdkIsQ0FBQzs7SUFFRixJQUFJLENBQUMsVUFBVSxHQUFHLFdBQVcsS0FBSyxHQUFHOztRQUVqQyxLQUFLLEtBQUssS0FBSyxTQUFTLEdBQUc7O1lBRXZCLEtBQUssR0FBRyxvQkFBb0IsRUFBRSxDQUFDOztTQUVsQzs7UUFFRCxVQUFVLElBQUksS0FBSyxDQUFDOzs7S0FHdkIsQ0FBQzs7SUFFRixJQUFJLENBQUMsUUFBUSxHQUFHLFdBQVcsS0FBSyxHQUFHOztRQUUvQixLQUFLLEtBQUssS0FBSyxTQUFTLEdBQUc7O1lBRXZCLEtBQUssR0FBRyxvQkFBb0IsRUFBRSxDQUFDOztTQUVsQzs7UUFFRCxRQUFRLElBQUksS0FBSyxDQUFDOztLQUVyQixDQUFDOzs7SUFHRixJQUFJLENBQUMsT0FBTyxHQUFHLFdBQVcsUUFBUSxHQUFHOztRQUVqQyxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7OztRQUdyQyxTQUFTLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7UUFDM0MsU0FBUyxDQUFDLGNBQWMsRUFBRSxFQUFFLFFBQVEsRUFBRSxDQUFDOztRQUV2QyxHQUFHLENBQUMsR0FBRyxFQUFFLFNBQVMsRUFBRSxDQUFDOztLQUV4QixDQUFDOzs7SUFHRixJQUFJLENBQUMsS0FBSyxHQUFHLFdBQVcsUUFBUSxHQUFHOztRQUUvQixJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7OztRQUdyQyxTQUFTLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7UUFDM0MsU0FBUyxDQUFDLGNBQWMsRUFBRSxRQUFRLEVBQUUsQ0FBQzs7UUFFckMsR0FBRyxDQUFDLEdBQUcsRUFBRSxTQUFTLEVBQUUsQ0FBQzs7S0FFeEIsQ0FBQzs7Ozs7O0lBTUYsSUFBSSxDQUFDLEdBQUcsR0FBRyxXQUFXLE1BQU0sRUFBRSxNQUFNLEdBQUc7O1FBRW5DLElBQUksT0FBTyxHQUFHLEtBQUssQ0FBQyxVQUFVLEtBQUssUUFBUSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUM7O1FBRXZGLEtBQUssS0FBSyxDQUFDLE1BQU0sWUFBWWlCLGlCQUF1QixHQUFHOzs7WUFHbkQsSUFBSSxRQUFRLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7WUFDckMsSUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDbEQsSUFBSSxjQUFjLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDOzs7WUFHckMsY0FBYyxJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDLEtBQUssSUFBSSxDQUFDLEVBQUUsR0FBRyxLQUFLLEVBQUUsQ0FBQzs7O1lBR3pFLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxHQUFHLE1BQU0sR0FBRyxjQUFjLEdBQUcsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ3BFLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLE1BQU0sR0FBRyxjQUFjLEdBQUcsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDOztTQUVyRSxNQUFNLEtBQUssS0FBSyxDQUFDLE1BQU0sWUFBWUMsa0JBQXdCLEdBQUc7OztZQUczRCxLQUFLLENBQUMsT0FBTyxFQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUN6RixLQUFLLENBQUMsS0FBSyxFQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQzs7U0FFM0YsTUFBTTs7O1lBR0gsT0FBTyxDQUFDLElBQUksRUFBRSw4RUFBOEUsRUFBRSxDQUFDOztTQUVsRzs7S0FFSixDQUFDOztJQUVGLElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBVTs7UUFFdEIsS0FBSyxDQUFDLFVBQVUsR0FBRyxPQUFPOztRQUUxQixLQUFLLElBQUksQ0FBQyxHQUFHLEVBQUUsWUFBWSxFQUFFLEdBQUcsSUFBSSxJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUUsVUFBVSxFQUFFLEdBQUcsSUFBSSxHQUFHOztZQUVwRSxVQUFVLEdBQUcsS0FBSyxDQUFDO1lBQ25CLE9BQU87U0FDVjs7UUFFRCxVQUFVLE1BQU0sSUFBSSxDQUFDLHFCQUFxQixDQUFDO1FBQzNDLFlBQVksSUFBSSxJQUFJLENBQUMscUJBQXFCLENBQUM7O1FBRTNDLFVBQVUsSUFBSSxJQUFJLENBQUMscUJBQXFCLEdBQUcsWUFBWSxDQUFDO1FBQ3hELFFBQVEsTUFBTSxJQUFJLENBQUMscUJBQXFCLEdBQUcsVUFBVSxDQUFDOztLQUV6RCxDQUFDOztJQUVGLElBQUksQ0FBQyxPQUFPLEdBQUcsV0FBVyxVQUFVLEdBQUc7O1FBRW5DLEtBQUssVUFBVSxLQUFLLFNBQVMsR0FBRzs7WUFFNUIsVUFBVSxHQUFHLFlBQVksRUFBRSxDQUFDOztTQUUvQjs7UUFFRCxLQUFLLEtBQUssQ0FBQyxNQUFNLFlBQVlELGlCQUF1QixHQUFHOztZQUVuRCxLQUFLLElBQUksVUFBVSxDQUFDOztTQUV2QixNQUFNLEtBQUssS0FBSyxDQUFDLE1BQU0sWUFBWUMsa0JBQXdCLEdBQUc7O1lBRTNELEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsVUFBVSxFQUFFLEVBQUUsQ0FBQztZQUN0RyxLQUFLLENBQUMsTUFBTSxDQUFDLHNCQUFzQixFQUFFLENBQUM7WUFDdEMsS0FBSyxDQUFDLGFBQWEsRUFBRSxXQUFXLEVBQUUsQ0FBQzs7U0FFdEMsTUFBTTs7WUFFSCxPQUFPLENBQUMsSUFBSSxFQUFFLHFGQUFxRixFQUFFLENBQUM7O1NBRXpHOztLQUVKLENBQUM7O0lBRUYsSUFBSSxDQUFDLFFBQVEsR0FBRyxXQUFXLFVBQVUsR0FBRzs7UUFFcEMsS0FBSyxVQUFVLEtBQUssU0FBUyxHQUFHOztZQUU1QixVQUFVLEdBQUcsWUFBWSxFQUFFLENBQUM7O1NBRS9COztRQUVELEtBQUssS0FBSyxDQUFDLE1BQU0sWUFBWUQsaUJBQXVCLEdBQUc7O1lBRW5ELEtBQUssSUFBSSxVQUFVLENBQUM7O1NBRXZCLE1BQU0sS0FBSyxLQUFLLENBQUMsTUFBTSxZQUFZQyxrQkFBd0IsR0FBRzs7WUFFM0QsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxVQUFVLEVBQUUsRUFBRSxDQUFDO1lBQ3RHLEtBQUssQ0FBQyxNQUFNLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztZQUN0QyxLQUFLLENBQUMsYUFBYSxFQUFFLFdBQVcsRUFBRSxDQUFDOztTQUV0QyxNQUFNOztZQUVILE9BQU8sQ0FBQyxJQUFJLEVBQUUscUZBQXFGLEVBQUUsQ0FBQzs7U0FFekc7O0tBRUosQ0FBQzs7SUFFRixJQUFJLENBQUMsTUFBTSxHQUFHLFdBQVcsWUFBWSxHQUFHOztRQUVwQyxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQzs7UUFFcEMsTUFBTSxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDOzs7UUFHM0MsTUFBTSxDQUFDLGVBQWUsRUFBRSxJQUFJLEVBQUUsQ0FBQzs7OztRQUkvQixLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQzs7OztRQUl6QyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUM7O1FBRXJGLEtBQUssSUFBSSxDQUFDLFVBQVUsSUFBSSxLQUFLLEtBQUssS0FBSyxDQUFDLElBQUksR0FBRzs7WUFFM0MsSUFBSSxDQUFDLFVBQVUsRUFBRSxvQkFBb0IsRUFBRSxFQUFFLENBQUM7O1NBRTdDOztRQUVELElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQzs7UUFFaEIsS0FBSyxJQUFJLFVBQVUsQ0FBQztRQUNwQixHQUFHLElBQUksUUFBUSxDQUFDOzs7UUFHaEIsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxlQUFlLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQzs7O1FBR2xGLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUM7OztRQUcxRSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsRUFBRSxHQUFHLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDOztRQUV0RCxJQUFJLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLEdBQUcsS0FBSyxDQUFDOzs7UUFHckMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsTUFBTSxFQUFFLEVBQUUsQ0FBQzs7O1FBRzVFLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDOztRQUV2QixNQUFNLENBQUMsQ0FBQyxHQUFHLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLENBQUM7UUFDeEQsTUFBTSxDQUFDLENBQUMsR0FBRyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsQ0FBQyxHQUFHLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLENBQUM7OztRQUd4RCxNQUFNLENBQUMsZUFBZSxFQUFFLFdBQVcsRUFBRSxDQUFDOztRQUV0QyxRQUFRLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLEVBQUUsTUFBTSxFQUFFLENBQUM7O1FBRTNDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQzs7UUFFbEMsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUNmLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFDYixLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ1YsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDOzs7Ozs7O1FBT25CLEtBQUssWUFBWSxDQUFDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLEdBQUcsR0FBRztTQUNoRSxDQUFDLElBQUksQ0FBQyxHQUFHLGNBQWMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRzs7WUFFMUQsS0FBSyxZQUFZLEtBQUssSUFBSSxHQUFHLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxXQUFXLEVBQUUsQ0FBQyxFQUFFOztZQUVuRSxZQUFZLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDMUMsY0FBYyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDOztTQUVqRDs7S0FFSixDQUFDOzs7SUFHRixJQUFJLENBQUMsS0FBSyxHQUFHLFlBQVk7O1FBRXJCLEtBQUssR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDOztRQUVuQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDakMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUM1QyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDOztRQUU5QixJQUFJLENBQUMsTUFBTSxDQUFDLHNCQUFzQixFQUFFLENBQUM7UUFDckMsSUFBSSxDQUFDLGFBQWEsRUFBRSxXQUFXLEVBQUUsQ0FBQzs7UUFFbEMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDOztLQUVqQixDQUFDOztJQUVGLElBQUksQ0FBQyxhQUFhLEdBQUcsWUFBWTs7UUFFN0IsT0FBTyxHQUFHLENBQUM7O0tBRWQsQ0FBQzs7SUFFRixJQUFJLENBQUMsaUJBQWlCLEdBQUcsWUFBWTs7UUFFakMsT0FBTyxLQUFLLENBQUM7O0tBRWhCLENBQUM7O0lBRUYsU0FBUyxvQkFBb0IsR0FBRzs7UUFFNUIsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEtBQUssQ0FBQyxlQUFlLENBQUM7O0tBRXhEOztJQUVELFNBQVMsWUFBWSxHQUFHOztRQUVwQixPQUFPLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQzs7S0FFNUM7O0lBRUQsU0FBUyxXQUFXLEVBQUUsS0FBSyxHQUFHOztRQUUxQixVQUFVLEdBQUcsS0FBSyxDQUFDOztLQUV0QixZQUFZLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQzs7UUFFM0IsS0FBSyxLQUFLLENBQUMsT0FBTyxLQUFLLEtBQUssR0FBRyxPQUFPO1FBQ3RDLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQzs7UUFFdkIsS0FBSyxLQUFLLENBQUMsTUFBTSxLQUFLLEtBQUssQ0FBQyxZQUFZLENBQUMsS0FBSyxHQUFHO1lBQzdDLEtBQUssS0FBSyxDQUFDLFFBQVEsS0FBSyxJQUFJLEdBQUcsT0FBTzs7WUFFdEMsS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7O1lBRXJCLFdBQVcsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7O1NBRW5ELE1BQU0sS0FBSyxLQUFLLENBQUMsTUFBTSxLQUFLLEtBQUssQ0FBQyxZQUFZLENBQUMsSUFBSSxHQUFHO1lBQ25ELEtBQUssS0FBSyxDQUFDLE1BQU0sS0FBSyxJQUFJLEdBQUcsT0FBTzs7WUFFcEMsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7O1lBRXBCLFVBQVUsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7O1NBRWxELE1BQU0sS0FBSyxLQUFLLENBQUMsTUFBTSxLQUFLLEtBQUssQ0FBQyxZQUFZLENBQUMsR0FBRyxHQUFHO1lBQ2xELEtBQUssS0FBSyxDQUFDLEtBQUssS0FBSyxJQUFJLEdBQUcsT0FBTzs7WUFFbkMsS0FBSyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUM7O1lBRWxCLFFBQVEsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7O1NBRWhEOztRQUVELEtBQUssS0FBSyxLQUFLLEtBQUssQ0FBQyxJQUFJLEdBQUc7WUFDeEIsUUFBUSxDQUFDLGdCQUFnQixFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLENBQUM7WUFDN0QsUUFBUSxDQUFDLGdCQUFnQixFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUM7WUFDekQsS0FBSyxDQUFDLGFBQWEsRUFBRSxVQUFVLEVBQUUsQ0FBQztTQUNyQzs7UUFFRCxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUM7O0tBRWxCOztJQUVELFNBQVMsV0FBVyxFQUFFLEtBQUssR0FBRzs7UUFFMUIsS0FBSyxLQUFLLENBQUMsT0FBTyxLQUFLLEtBQUssR0FBRyxPQUFPOztRQUV0QyxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7O1FBRXZCLElBQUksT0FBTyxHQUFHLEtBQUssQ0FBQyxVQUFVLEtBQUssUUFBUSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUM7O1FBRXZGLEtBQUssS0FBSyxLQUFLLEtBQUssQ0FBQyxNQUFNLEdBQUc7O1lBRTFCLEtBQUssS0FBSyxDQUFDLFFBQVEsS0FBSyxJQUFJLEdBQUcsT0FBTzs7WUFFdEMsU0FBUyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUM5QyxXQUFXLENBQUMsVUFBVSxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsQ0FBQzs7O1lBR2pELEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsV0FBVyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQzs7O1lBRzFGLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsV0FBVyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQzs7WUFFekYsV0FBVyxDQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsQ0FBQzs7WUFFOUIsSUFBSSxhQUFhLEVBQUU7Z0JBQ2YsWUFBWSxHQUFHLEtBQUssQ0FBQyxPQUFPLEdBQUcsYUFBYSxDQUFDLE9BQU8sQ0FBQztnQkFDckQsVUFBVSxHQUFHLEtBQUssQ0FBQyxPQUFPLEdBQUcsYUFBYSxDQUFDLE9BQU8sQ0FBQzthQUN0RDs7WUFFRCxhQUFhLEdBQUcsS0FBSyxDQUFDOztTQUV6QixNQUFNLEtBQUssS0FBSyxLQUFLLEtBQUssQ0FBQyxLQUFLLEdBQUc7O1lBRWhDLEtBQUssS0FBSyxDQUFDLE1BQU0sS0FBSyxJQUFJLEdBQUcsT0FBTzs7WUFFcEMsUUFBUSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUM3QyxVQUFVLENBQUMsVUFBVSxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsQ0FBQzs7WUFFOUMsS0FBSyxVQUFVLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRzs7Z0JBRXBCLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQzs7YUFFbkIsTUFBTSxLQUFLLFVBQVUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHOztnQkFFM0IsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDOzthQUVwQjs7WUFFRCxVQUFVLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxDQUFDOztTQUUvQixNQUFNLEtBQUssS0FBSyxLQUFLLEtBQUssQ0FBQyxHQUFHLEdBQUc7O1lBRTlCLEtBQUssS0FBSyxDQUFDLEtBQUssS0FBSyxJQUFJLEdBQUcsT0FBTzs7WUFFbkMsTUFBTSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUMzQyxRQUFRLENBQUMsVUFBVSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsQ0FBQzs7WUFFeEMsS0FBSyxDQUFDLEdBQUcsRUFBRSxRQUFRLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQzs7WUFFcEMsUUFBUSxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQzs7U0FFM0I7O1FBRUQsS0FBSyxLQUFLLEtBQUssS0FBSyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUM7O0tBRTlDOztJQUVELFNBQVMsU0FBUyxnQkFBZ0I7O1FBRTlCLFVBQVUsR0FBRyxJQUFJLENBQUM7O1FBRWxCLGFBQWEsR0FBRyxTQUFTLENBQUM7O1FBRTFCLEtBQUssS0FBSyxDQUFDLE9BQU8sS0FBSyxLQUFLLEdBQUcsT0FBTzs7UUFFdEMsUUFBUSxDQUFDLG1CQUFtQixFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLENBQUM7UUFDaEUsUUFBUSxDQUFDLG1CQUFtQixFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUM7UUFDNUQsS0FBSyxDQUFDLGFBQWEsRUFBRSxRQUFRLEVBQUUsQ0FBQztRQUNoQyxLQUFLLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQzs7S0FFdEI7O0lBRUQsU0FBUyxZQUFZLEVBQUUsS0FBSyxHQUFHOztRQUUzQixLQUFLLEtBQUssQ0FBQyxPQUFPLEtBQUssS0FBSyxJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssSUFBSSxJQUFJLEtBQUssS0FBSyxLQUFLLENBQUMsSUFBSSxHQUFHLE9BQU87O1FBRXZGLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7O1FBRXhCLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQzs7UUFFZCxLQUFLLEtBQUssQ0FBQyxVQUFVLEtBQUssU0FBUyxHQUFHOztZQUVsQyxLQUFLLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQzs7U0FFNUIsTUFBTSxLQUFLLEtBQUssQ0FBQyxNQUFNLEtBQUssU0FBUyxHQUFHOztZQUVyQyxLQUFLLEdBQUcsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDOztTQUUxQjs7UUFFRCxLQUFLLEtBQUssR0FBRyxDQUFDLEdBQUc7OztZQUdiLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLE1BQU07a0JBQzlDLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLENBQUM7a0JBQ3BCLEtBQUssQ0FBQyxNQUFNLENBQUM7WUFDbkIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxzQkFBc0IsRUFBRSxDQUFDOztTQUV6QyxNQUFNLEtBQUssS0FBSyxHQUFHLENBQUMsR0FBRzs7O1lBR3BCLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLE1BQU07a0JBQzlDLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLENBQUM7a0JBQ3BCLEtBQUssQ0FBQyxNQUFNLENBQUM7WUFDbkIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxzQkFBc0IsRUFBRSxDQUFDOztTQUV6Qzs7UUFFRCxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDZixLQUFLLENBQUMsYUFBYSxFQUFFLFdBQVcsRUFBRSxDQUFDO1FBQ25DLEtBQUssQ0FBQyxhQUFhLEVBQUUsVUFBVSxFQUFFLENBQUM7UUFDbEMsS0FBSyxDQUFDLGFBQWEsRUFBRSxRQUFRLEVBQUUsQ0FBQzs7S0FFbkM7O0lBRUQsU0FBUyxPQUFPLEdBQUcsS0FBSyxHQUFHOztRQUV2QixTQUFTLEtBQUssQ0FBQyxPQUFPOztRQUV0QixLQUFLLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNkLEtBQUssR0FBRyxLQUFLLENBQUM7WUFDZCxNQUFNOztRQUVWLEtBQUssS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNO1lBQ2xCLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDbEIsTUFBTTs7UUFFVixLQUFLLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUNoQixPQUFPLEdBQUcsS0FBSyxDQUFDO1lBQ2hCLE1BQU07O1FBRVYsS0FBSyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUs7WUFDakIsUUFBUSxHQUFHLEtBQUssQ0FBQztZQUNqQixNQUFNOztTQUVUOztLQUVKOztJQUVELFNBQVMsU0FBUyxFQUFFLEtBQUssR0FBRzs7UUFFeEIsS0FBSyxLQUFLLENBQUMsT0FBTyxLQUFLLEtBQUssSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLElBQUksSUFBSSxLQUFLLENBQUMsUUFBUSxLQUFLLElBQUksR0FBRyxPQUFPOztRQUUxRixTQUFTLEtBQUssQ0FBQyxPQUFPOztRQUV0QixLQUFLLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNkLEtBQUssR0FBRyxJQUFJLENBQUM7WUFDYixNQUFNOztRQUVWLEtBQUssS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNO1lBQ2xCLFNBQVMsR0FBRyxJQUFJLENBQUM7WUFDakIsTUFBTTs7UUFFVixLQUFLLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUNoQixPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQ2YsTUFBTTs7UUFFVixLQUFLLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSztZQUNqQixRQUFRLEdBQUcsSUFBSSxDQUFDO1lBQ2hCLE1BQU07O1NBRVQ7O1FBRUQsSUFBSSxLQUFLLElBQUksU0FBUyxJQUFJLE9BQU8sSUFBSSxRQUFRLEVBQUU7O1lBRTNDLFVBQVUsR0FBRyxJQUFJLENBQUM7O1lBRWxCLElBQUksS0FBSyxFQUFFLFVBQVUsR0FBRyxFQUFFLEtBQUssQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLHFCQUFxQixDQUFDO1lBQzFFLElBQUksU0FBUyxFQUFFLFVBQVUsR0FBRyxLQUFLLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQztZQUM1RSxJQUFJLE9BQU8sRUFBRSxZQUFZLEdBQUcsRUFBRSxLQUFLLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQztZQUM5RSxJQUFJLFFBQVEsRUFBRSxZQUFZLEdBQUcsS0FBSyxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMscUJBQXFCLENBQUM7O1NBRWhGOztLQUVKOztJQUVELFNBQVMsVUFBVSxFQUFFLEtBQUssR0FBRzs7UUFFekIsVUFBVSxHQUFHLEtBQUssQ0FBQzs7UUFFbkIsWUFBWSxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUM7O1FBRTlCLEtBQUssS0FBSyxDQUFDLE9BQU8sS0FBSyxLQUFLLEdBQUcsT0FBTzs7UUFFdEMsU0FBUyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU07O1FBRTdCLEtBQUssQ0FBQzs7WUFFRixLQUFLLEtBQUssQ0FBQyxRQUFRLEtBQUssSUFBSSxHQUFHLE9BQU87O1lBRXRDLEtBQUssR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDOztZQUUzQixXQUFXLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDdEUsTUFBTTs7UUFFVixLQUFLLENBQUM7O1lBRUYsS0FBSyxLQUFLLENBQUMsTUFBTSxLQUFLLElBQUksR0FBRyxPQUFPOztZQUVwQyxLQUFLLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQzs7WUFFMUIsSUFBSSxFQUFFLEdBQUcsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDN0QsSUFBSSxFQUFFLEdBQUcsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDN0QsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQzs7WUFFOUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLENBQUM7O1lBRTlCLE1BQU07O1FBRVYsS0FBSyxDQUFDOztZQUVGLEtBQUssS0FBSyxDQUFDLEtBQUssS0FBSyxJQUFJLEdBQUcsT0FBTzs7WUFFbkMsS0FBSyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUM7O1lBRXhCLFFBQVEsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNuRSxNQUFNOztRQUVWOztZQUVJLEtBQUssR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDOztTQUV0Qjs7UUFFRCxLQUFLLEtBQUssS0FBSyxLQUFLLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxhQUFhLEVBQUUsVUFBVSxFQUFFLENBQUM7O0tBRWpFOztJQUVELFNBQVMsU0FBUyxFQUFFLEtBQUssR0FBRzs7UUFFeEIsS0FBSyxLQUFLLENBQUMsT0FBTyxLQUFLLEtBQUssR0FBRyxPQUFPOztRQUV0QyxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDOztRQUV4QixJQUFJLE9BQU8sR0FBRyxLQUFLLENBQUMsVUFBVSxLQUFLLFFBQVEsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDOztRQUV2RixTQUFTLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTTs7UUFFN0IsS0FBSyxDQUFDOztZQUVGLEtBQUssS0FBSyxDQUFDLFFBQVEsS0FBSyxJQUFJLEdBQUcsT0FBTztZQUN0QyxLQUFLLEtBQUssS0FBSyxLQUFLLENBQUMsWUFBWSxHQUFHLE9BQU87O1lBRTNDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNwRSxXQUFXLENBQUMsVUFBVSxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsQ0FBQzs7O1lBR2pELEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsV0FBVyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQzs7WUFFMUYsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxXQUFXLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDOztZQUV6RixXQUFXLENBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxDQUFDOztZQUU5QixJQUFJLGFBQWEsRUFBRTtnQkFDZixZQUFZLEdBQUcsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEdBQUcsYUFBYSxDQUFDLEtBQUssQ0FBQztnQkFDOUQsVUFBVSxHQUFHLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxHQUFHLGFBQWEsQ0FBQyxLQUFLLENBQUM7YUFDL0Q7O1lBRUQsYUFBYSxHQUFHO2dCQUNaLEtBQUssRUFBRSxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLEtBQUs7Z0JBQy9CLEtBQUssRUFBRSxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLEtBQUs7YUFDbEMsQ0FBQzs7WUFFRixLQUFLLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDZixNQUFNOztRQUVWLEtBQUssQ0FBQzs7WUFFRixLQUFLLEtBQUssQ0FBQyxNQUFNLEtBQUssSUFBSSxHQUFHLE9BQU87WUFDcEMsS0FBSyxLQUFLLEtBQUssS0FBSyxDQUFDLFdBQVcsR0FBRyxPQUFPOztZQUUxQyxJQUFJLEVBQUUsR0FBRyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztZQUM3RCxJQUFJLEVBQUUsR0FBRyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztZQUM3RCxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDOztZQUU5QyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxRQUFRLEVBQUUsQ0FBQztZQUM1QixVQUFVLENBQUMsVUFBVSxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsQ0FBQzs7WUFFOUMsS0FBSyxVQUFVLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRzs7Z0JBRXBCLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLE1BQU07c0JBQzlDLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLENBQUM7c0JBQ3BCLEtBQUssQ0FBQyxNQUFNLENBQUM7Z0JBQ25CLEtBQUssQ0FBQyxNQUFNLENBQUMsc0JBQXNCLEVBQUUsQ0FBQzs7YUFFekMsTUFBTSxLQUFLLFVBQVUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHOztnQkFFM0IsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsTUFBTTtzQkFDOUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsQ0FBQztzQkFDcEIsS0FBSyxDQUFDLE1BQU0sQ0FBQztnQkFDbkIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxzQkFBc0IsRUFBRSxDQUFDOzthQUV6Qzs7WUFFRCxVQUFVLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxDQUFDOztZQUU1QixLQUFLLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDZixLQUFLLENBQUMsYUFBYSxFQUFFLFdBQVcsRUFBRSxDQUFDO1lBQ25DLE1BQU07O1FBRVYsS0FBSyxDQUFDOztZQUVGLEtBQUssS0FBSyxDQUFDLEtBQUssS0FBSyxJQUFJLEdBQUcsT0FBTztZQUNuQyxLQUFLLEtBQUssS0FBSyxLQUFLLENBQUMsU0FBUyxHQUFHLE9BQU87O1lBRXhDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNqRSxRQUFRLENBQUMsVUFBVSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsQ0FBQzs7WUFFeEMsS0FBSyxDQUFDLEdBQUcsRUFBRSxRQUFRLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQzs7WUFFcEMsUUFBUSxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQzs7WUFFeEIsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ2YsTUFBTTs7UUFFVjs7WUFFSSxLQUFLLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQzs7U0FFdEI7O0tBRUo7O0lBRUQsU0FBUyxRQUFRLGdCQUFnQjs7UUFFN0IsVUFBVSxHQUFHLElBQUksQ0FBQzs7UUFFbEIsYUFBYSxHQUFHLFNBQVMsQ0FBQzs7UUFFMUIsS0FBSyxLQUFLLENBQUMsT0FBTyxLQUFLLEtBQUssR0FBRyxPQUFPOztRQUV0QyxLQUFLLENBQUMsYUFBYSxFQUFFLFFBQVEsRUFBRSxDQUFDO1FBQ2hDLEtBQUssR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDOztLQUV0Qjs7SUFFRCxJQUFJLENBQUMsT0FBTyxHQUFHLFdBQVc7O1FBRXRCLElBQUksQ0FBQyxVQUFVLENBQUMsbUJBQW1CLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxDQUFDO1FBQ2hFLElBQUksQ0FBQyxVQUFVLENBQUMsbUJBQW1CLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxDQUFDO1FBQ2xFLElBQUksQ0FBQyxVQUFVLENBQUMsbUJBQW1CLEVBQUUsZ0JBQWdCLEVBQUUsWUFBWSxFQUFFLENBQUM7O1FBRXRFLElBQUksQ0FBQyxVQUFVLENBQUMsbUJBQW1CLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxDQUFDO1FBQ2hFLElBQUksQ0FBQyxVQUFVLENBQUMsbUJBQW1CLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxDQUFDO1FBQzVELElBQUksQ0FBQyxVQUFVLENBQUMsbUJBQW1CLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxDQUFDOztRQUU5RCxNQUFNLENBQUMsbUJBQW1CLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDO1FBQy9DLE1BQU0sQ0FBQyxtQkFBbUIsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLENBQUM7O0tBRXRELENBQUM7OztJQUdGLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDO0lBQ2pGLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDO0lBQ25GLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLEVBQUUsZ0JBQWdCLEVBQUUsWUFBWSxFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUM7O0lBRXZGLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDO0lBQ2pGLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDO0lBQzdFLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDOztJQUUvRSxNQUFNLENBQUMsZ0JBQWdCLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDO0lBQ2hFLE1BQU0sQ0FBQyxnQkFBZ0IsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUM7OztJQUdwRSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7O0NBRWpCLEFBQ0Q7QUFDQSxhQUFhLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLE1BQU0sRUFBRTVCLGVBQXFCLENBQUMsU0FBUyxFQUFFLEVBQUU7O0lBRXZGLFdBQVcsRUFBRSxhQUFhOztDQUU3QixFQUFFLENBQUM7O0FDMTFCSjs7Ozs7OztBQU9BLFNBQVMseUJBQXlCLEdBQUcsTUFBTSxFQUFFLFVBQVUsR0FBRzs7SUFFdEQsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDO0lBQ2pCLElBQUksV0FBVyxHQUFHLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxDQUFDOztJQUVyQyxJQUFJLElBQUksR0FBRyxDQUFDLENBQUM7SUFDYixJQUFJLElBQUksR0FBRyxDQUFDLENBQUM7SUFDYixJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7SUFDZCxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7O0lBRWQsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDckIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDO0lBQ3RDLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxVQUFVLEtBQUssU0FBUyxLQUFLLFVBQVUsR0FBRyxRQUFRLENBQUM7O0lBRXZFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDOztJQUVwQixJQUFJLENBQUMsaUJBQWlCLEdBQUcsRUFBRSxDQUFDO0lBQzVCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxDQUFDLENBQUM7O0lBRTNCLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQ2YsSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQzs7O0lBRzFCLElBQUksOEJBQThCLEdBQUcsVUFBVSxLQUFLLEdBQUc7O1FBRW5ELEtBQUssQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7O0tBRW5DLENBQUM7O0lBRUYsSUFBSSw4QkFBOEIsR0FBRyxXQUFXOztRQUU1QyxLQUFLLENBQUMsaUJBQWlCLEdBQUcsTUFBTSxDQUFDLFdBQVcsSUFBSSxDQUFDLENBQUM7O0tBRXJELENBQUM7O0lBRUYsSUFBSSxpQkFBaUIsR0FBRyxVQUFVLEtBQUssRUFBRTs7UUFFckMsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQzs7UUFFeEIsS0FBSyxHQUFHLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO1FBQ2pDLEtBQUssR0FBRyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs7S0FFcEMsQ0FBQzs7SUFFRixJQUFJLGdCQUFnQixHQUFHLFVBQVUsS0FBSyxFQUFFOztRQUVwQyxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDOztRQUV4QixJQUFJLElBQUl5QixNQUFVLENBQUMsUUFBUSxFQUFFLEVBQUUsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEdBQUcsS0FBSyxLQUFLLENBQUMsRUFBRSxDQUFDO1FBQ3hFLElBQUksSUFBSUEsTUFBVSxDQUFDLFFBQVEsRUFBRSxFQUFFLEtBQUssR0FBRyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLEtBQUssS0FBSyxDQUFDLEVBQUUsQ0FBQzs7UUFFeEUsS0FBSyxDQUFDLHNCQUFzQixFQUFFLElBQUksRUFBRSxDQUFDOztRQUVyQyxLQUFLLEdBQUcsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7UUFDakMsS0FBSyxHQUFHLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOztLQUVwQyxDQUFDOzs7O0lBSUYsSUFBSSxtQkFBbUIsR0FBRyxVQUFVLFVBQVUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxNQUFNLEdBQUc7O1FBRXpFLElBQUksR0FBRyxHQUFHLElBQUlmLE9BQWEsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDOztRQUV2QyxJQUFJLEtBQUssR0FBRyxJQUFJbUIsS0FBVyxFQUFFLENBQUM7O1FBRTlCLElBQUksRUFBRSxHQUFHLElBQUlOLFVBQWdCLEVBQUUsQ0FBQzs7UUFFaEMsSUFBSSxFQUFFLEdBQUcsSUFBSUEsVUFBZ0IsRUFBRSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUM7O1FBRTVFLElBQUksYUFBYSxDQUFDO1FBQ2xCLElBQUksUUFBUSxHQUFHLElBQUlBLFVBQWdCLEVBQUUsQ0FBQztRQUN0QyxJQUFJLFFBQVEsR0FBRyxJQUFJQSxVQUFnQixFQUFFLENBQUM7O1FBRXRDLEtBQUssS0FBSyxDQUFDLGlCQUFpQixJQUFJLENBQUMsR0FBRzs7WUFFaEMsYUFBYSxHQUFHLElBQUliLE9BQWEsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1lBQzdDLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxhQUFhLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQzs7U0FFckQsTUFBTSxLQUFLLEtBQUssQ0FBQyxpQkFBaUIsSUFBSSxHQUFHLEdBQUc7O1lBRXpDLGFBQWEsR0FBRyxJQUFJQSxPQUFhLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUM3QyxRQUFRLENBQUMsZ0JBQWdCLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxDQUFDOztTQUVwRCxNQUFNLEtBQUssS0FBSyxDQUFDLGlCQUFpQixJQUFJLEVBQUUsR0FBRzs7WUFFeEMsYUFBYSxHQUFHLElBQUlBLE9BQWEsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1lBQzdDLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFLENBQUM7O1NBRXBELE1BQU0sS0FBSyxLQUFLLENBQUMsaUJBQWlCLElBQUksRUFBRSxFQUFFLEVBQUU7O1lBRXpDLGFBQWEsR0FBRyxJQUFJQSxPQUFhLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUM3QyxRQUFRLENBQUMsZ0JBQWdCLEVBQUUsYUFBYSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7O1NBRXJEOztRQUVELEVBQUUsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLENBQUM7UUFDeEIsRUFBRSxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsQ0FBQzs7UUFFeEIsS0FBSyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDOztRQUV6QyxVQUFVLENBQUMsWUFBWSxFQUFFLEtBQUssRUFBRSxDQUFDOztRQUVqQyxVQUFVLENBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxDQUFDOztRQUUxQixVQUFVLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxHQUFHLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxDQUFDOztLQUUvRCxDQUFDOztJQUVGLElBQUksQ0FBQyxPQUFPLEdBQUcsV0FBVzs7UUFFdEIsOEJBQThCLEVBQUUsQ0FBQzs7UUFFakMsTUFBTSxDQUFDLGdCQUFnQixFQUFFLG1CQUFtQixFQUFFLDhCQUE4QixFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUM7UUFDbEcsTUFBTSxDQUFDLGdCQUFnQixFQUFFLG1CQUFtQixFQUFFLDhCQUE4QixFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUM7UUFDbEcsTUFBTSxDQUFDLGdCQUFnQixFQUFFLG1CQUFtQixFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUM7O1FBRTVGLEtBQUssQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLEVBQUUsWUFBWSxFQUFFLGlCQUFpQixFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUM7UUFDekYsS0FBSyxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsRUFBRSxXQUFXLEVBQUUsZ0JBQWdCLEVBQUUsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQzs7UUFFdkYsS0FBSyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7O0tBRXhCLENBQUM7O0lBRUYsSUFBSSxDQUFDLFVBQVUsR0FBRyxXQUFXOztRQUV6QixNQUFNLENBQUMsbUJBQW1CLEVBQUUsbUJBQW1CLEVBQUUsOEJBQThCLEVBQUUsS0FBSyxFQUFFLENBQUM7UUFDekYsTUFBTSxDQUFDLG1CQUFtQixFQUFFLG1CQUFtQixFQUFFLDhCQUE4QixFQUFFLEtBQUssRUFBRSxDQUFDO1FBQ3pGLE1BQU0sQ0FBQyxtQkFBbUIsRUFBRSxtQkFBbUIsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQzs7UUFFbkYsS0FBSyxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsRUFBRSxZQUFZLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxFQUFFLENBQUM7UUFDL0UsS0FBSyxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsRUFBRSxXQUFXLEVBQUUsZ0JBQWdCLEVBQUUsS0FBSyxFQUFFLENBQUM7O1FBRTdFLEtBQUssQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDOztLQUV6QixDQUFDOztJQUVGLElBQUksQ0FBQyxNQUFNLEdBQUcsVUFBVSxZQUFZLEdBQUc7O1FBRW5DLEtBQUssS0FBSyxDQUFDLE9BQU8sS0FBSyxLQUFLLEdBQUcsT0FBTzs7UUFFdEMsSUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDLGlCQUFpQixDQUFDLEtBQUssR0FBR2UsTUFBVSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsS0FBSyxFQUFFLEdBQUcsS0FBSyxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQztRQUM5SCxJQUFJLElBQUksR0FBRyxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxHQUFHQSxNQUFVLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDbEcsSUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDLGlCQUFpQixDQUFDLEtBQUssR0FBR0EsTUFBVSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3JHLElBQUksTUFBTSxHQUFHLEtBQUssQ0FBQyxpQkFBaUIsR0FBR0EsTUFBVSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxDQUFDLENBQUM7O1FBRTFGLG1CQUFtQixFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxDQUFDO1FBQzNFLEtBQUssQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDOztRQUVwQixLQUFLLFlBQVksS0FBSyxJQUFJLEdBQUcsRUFBRSxLQUFLLENBQUMsYUFBYSxFQUFFLFdBQVcsRUFBRSxDQUFDLEVBQUU7O0tBRXZFLENBQUM7O0lBRUYsSUFBSSxDQUFDLHNCQUFzQixHQUFHLFVBQVUsS0FBSyxHQUFHOztRQUU1QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO1FBQzlCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQzs7S0FFakIsQ0FBQzs7SUFFRixJQUFJLENBQUMsT0FBTyxHQUFHLFdBQVc7O1FBRXRCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQzs7S0FFckIsQ0FBQzs7SUFFRixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7O0NBRWxCLEFBQ0Q7QUFDQSx5QkFBeUIsQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsTUFBTSxFQUFFekIsZUFBcUIsQ0FBQyxTQUFTLENBQUMsRUFBRTs7SUFFbEcsV0FBVyxFQUFFLHlCQUF5Qjs7Q0FFekMsRUFBRSxDQUFDOztBQ3RMSjs7Ozs7O0FBTUEsU0FBUyxlQUFlLEdBQUcsUUFBUSxHQUFHOztJQUVsQyxJQUFJLE9BQU8sR0FBRyxJQUFJNEIsa0JBQXdCLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7O0lBRW5FLElBQUksTUFBTSxHQUFHLElBQUlFLEtBQVcsRUFBRSxDQUFDOztJQUUvQixJQUFJLE9BQU8sR0FBRyxJQUFJQyxZQUFrQixFQUFFLENBQUM7SUFDdkMsT0FBTyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7O0lBRXJCLElBQUksT0FBTyxHQUFHLEVBQUUsU0FBUyxFQUFFN0IsWUFBa0IsRUFBRSxTQUFTLEVBQUU4QixhQUFtQixFQUFFLE1BQU0sRUFBRWxDLFVBQWdCLEVBQUUsQ0FBQzs7SUFFMUcsSUFBSSxhQUFhLEdBQUcsSUFBSW1DLGlCQUF1QixFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLENBQUM7SUFDckUsYUFBYSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7SUFDakMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDOzs7Ozs7O0lBTzlDLElBQUksVUFBVSxHQUFHLElBQUlYLE9BQWEsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUM7O0lBRW5ELElBQUksUUFBUSxHQUFHLElBQUlFLG1CQUF5QixFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLGVBQWUsRUFBRSxRQUFRLEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQzs7SUFFeEcsSUFBSSxTQUFTLEdBQUcsUUFBUSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO0lBQ25ELElBQUksR0FBRyxHQUFHLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs7O0lBR3ZDLFFBQVEsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUM7SUFDeEMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQzs7SUFFbEMsSUFBSSxVQUFVLEdBQUcsSUFBSSxZQUFZLEVBQUUsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQztJQUMxRCxVQUFVLENBQUMsR0FBRyxFQUFFLFNBQVMsRUFBRSxDQUFDO0lBQzVCLFVBQVUsQ0FBQyxHQUFHLEVBQUUsU0FBUyxFQUFFLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQzs7SUFFOUMsSUFBSSxJQUFJLEdBQUcsSUFBSSxZQUFZLEVBQUUsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQztJQUM5QyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDO0lBQ2hCLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQzs7SUFFNUIsSUFBSSxNQUFNLEdBQUcsSUFBSUYsT0FBYSxFQUFFLENBQUM7SUFDakMsSUFBSSxNQUFNLEdBQUcsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7O0lBRWxDLE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHOztRQUV0RCxNQUFNLENBQUMsQ0FBQyxHQUFHLFVBQVUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO1FBQ25DLE1BQU0sQ0FBQyxDQUFDLEdBQUcsVUFBVSxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7O1FBRW5DLElBQUksR0FBRyxHQUFHLE1BQU0sQ0FBQyxHQUFHLEVBQUUsTUFBTSxFQUFFLENBQUM7UUFDL0IsSUFBSSxNQUFNLEdBQUcsR0FBRyxHQUFHLEVBQUUsVUFBVSxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxHQUFHLEdBQUcsS0FBSyxHQUFHLENBQUM7O1FBRS9ELElBQUksTUFBTSxHQUFHLENBQUMsR0FBRyxNQUFNLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQzs7UUFFaEMsVUFBVSxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxN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
