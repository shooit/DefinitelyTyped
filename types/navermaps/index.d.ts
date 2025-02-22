// Type definitions for non-npm package Naver Maps JavaScript API 3.0
// Project: https://navermaps.github.io/maps.js.ncp/
// Definitions by: Ckboyjiy <https://github.com/ckboyjiy>
//                 DongKyuuuu <https://github.com/DongKyuuuu>
//                 Minchul Joh <https://github.com/fclemonschool>
//                 Suhwan Cha <https://github.com/suhwancha>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
declare namespace naver.maps {
    /**
     * Types
     */
    type PointArrayLiteral = [number, number];
    type PointLiteral = PointArrayLiteral | PointObjectLiteral;
    type SizeArrayLiteral = [number, number];
    type SizeLiteral = SizeArrayLiteral | SizeObjectLiteral;
    type LatLngLiteral = PointLiteral | LatLngObjectLiteral;
    type PointBoundsArrayLiteral = [number, number, number, number];
    type PointBoundsLiteral = PointBoundsArrayLiteral | PointBoundsObjectLiteral;
    type LatLngBoundsLiteral = PointBoundsLiteral | LatLngBoundsObjectLiteral;
    type BoundsLiteral = PointBoundsLiteral | LatLngBoundsLiteral;
    type CoordLiteral = PointLiteral | LatLngLiteral;
    type Coord = Point | LatLng;
    type Bounds = PointBounds | LatLngBounds;
    type DOMEvent = Event;
    type StylingFunction = (feature: Feature) => StyleOptions;
    type ArrayOfCoords = Point[] | LatLng[];
    type ArrayOfBounds = PointBounds[] | LatLngBounds[];
    type ArrayOfBoundsLiteral = PointBoundsLiteral[] | LatLngBoundsLiteral[];
    type forEachOverlayCallback = (overlay: Marker | Polyline | Polygon, index: number) => void;
    type GeoJSON = any;
    type GPX = any;
    type KML = any;
    type KVOArrayOfCoords = any;
    type ArrayOfCoordsLiteral = PointLiteral[] | LatLngLiteral[];
    type strokeStyleType =
        | 'solid'
        | 'shortdash'
        | 'shortdot'
        | 'shortdashdot'
        | 'shortdashdotdot'
        | 'dot'
        | 'dash'
        | 'longdash'
        | 'dashdot'
        | 'longdashdot'
        | 'longdashdotdot';
    type strokeLineCapType = 'butt' | 'round' | 'square';
    type strokeLineJoinType = 'miter' | 'round' | 'bevel';

    /**
     * Interfaces
     */
    interface MapEventListener {
        eventName: string;
        listener: (event: any) => any;
        listenerId: string;
        target: any;
    }
    interface PointObjectLiteral {
        x: number;
        y: number;
    }
    interface SizeObjectLiteral {
        width: number;
        height: number;
    }
    interface LatLngObjectLiteral {
        lat: number;
        lng: number;
    }
    interface PointBoundsObjectLiteral {
        minX: number;
        minY: number;
        maxX: number;
        maxY: number;
    }
    interface LatLngBoundsObjectLiteral {
        north: number;
        east: number;
        south: number;
        west: number;
    }
    interface MapSystemProjection extends KVO {
        factor(zoom: number): number;
        fromCoordToOffset(coord: Coord): Point;
        fromCoordToPoint(coord: Coord): Point;
        fromOffsetToCoord(offset: Point): Coord;
        fromOffsetToPoint(offset: Point): Point;
        fromPointToCoord(point: Point): Coord;
        fromPointToOffset(point: Point): Point;
        getDestinationCoord(fromCoord: Coord, angle: number, meter: number): Coord;
        getDistance(coord1: Coord, coord2: Coord): number;
        getProjectionName(): number;
        scaleDown(operand: number | Point | Size, zoom: number): number | Point | Size;
        scaleUp(operand: number | Point | Size, zoom: number): number | Point | Size;
    }
    interface MapOptions {
        background?: string | undefined;
        baseTileOpacity?: number | undefined;
        bounds?: any;
        center?: any;
        disableDoubleClickZoom?: boolean | undefined;
        disableDoubleTapZoom?: boolean | undefined;
        disableKineticPan?: boolean | undefined;
        disableTwoFingerTapZoom?: boolean | undefined;
        draggable?: boolean | undefined;
        keyboardShortcuts?: boolean | undefined;
        logoControl?: boolean | undefined;
        logoControlOptions?: any;
        mapDataControl?: boolean | undefined;
        mapDataControlOptions?: any;
        mapTypeControl?: boolean | undefined;
        mapTypeControlOptions?: any;
        mapTypeId?: string | undefined;
        mapTypes?: any;
        maxBounds?: any;
        maxZoom?: number | undefined;
        minZoom?: number | undefined;
        padding?: any;
        pinchZoom?: boolean | undefined;
        resizeOrigin?: any;
        scaleControl?: boolean | undefined;
        scaleControlOptions?: any;
        scrollWheel?: boolean | undefined;
        size?: any;
        overlayZoomEffect?: null | string | undefined;
        tileSpare?: number | undefined;
        tileTransition?: boolean | undefined;
        useStyleMap?: boolean | undefined;
        zoom?: number | undefined;
        zoomControl?: boolean | undefined;
        zoomControlOptions?: any;
        zoomOrigin?: any;
    }
    interface MarkerOptions {
        animation?: any;
        map?: Map | undefined;
        position?: any;
        icon?: any;
        shape?: any;
        title?: string | undefined;
        cursor?: string | undefined;
        clickable?: boolean | undefined;
        draggable?: boolean | undefined;
        visible?: boolean | undefined;
        zIndex?: number | undefined;
    }
    interface MapPanes {
        overlayLayer: HTMLElement;
        overlayImage: HTMLElement;
        floatPane: HTMLElement;
    }
    interface InfoWindowOptions {
        position?: Coord | CoordLiteral | undefined;
        content: string | HTMLElement;
        zIndex?: number | undefined;
        maxWidth?: number | undefined;
        pixelOffset?: Point | PointLiteral | undefined;
        backgroundColor?: string | undefined;
        borderColor?: string | undefined;
        borderWidth?: number | undefined;
        disableAutoPan?: boolean | undefined;
        disableAnchor?: boolean | undefined;
        anchorSkew?: boolean | undefined;
        anchorSize?: Size | SizeLiteral | undefined;
        anchorColor?: string | undefined;
    }
    interface ImageTileOptions {
        urls: string[];
        imgonload?: (() => any) | undefined;
        imgonerror?: (() => any) | undefined;
        opacity?: number | undefined;
        transition?: boolean | undefined;
        offset?: Point | undefined;
        zIndex?: number | undefined;
        size?: Size | undefined;
        pane?: HTMLElement | undefined;
    }
    interface ImageMapTypeOptions {
        name: string;
        maxZoom: number;
        minZoom: number;
        projection: Projection;
        tileSize?: Size | SizeLiteral | undefined;
        repeatX?: boolean | undefined;
        vendor?: string | undefined;
        provider?: MapDataProvider[] | undefined;
        uid?: string | undefined;
        darktheme?: boolean | undefined;
        getTileUrl?: (() => any) | undefined;
        tileSet?: string | string[] | undefined;
    }
    interface GroundOverlayOptions {
        clickable?: boolean | undefined;
        map?: Map | null | undefined;
        opacity?: number | undefined;
    }
    interface EllipseOptions {
        map?: Map | undefined;
        bounds: Bounds | BoundsLiteral;
        strokeWeight?: number | undefined;
        strokeOpacity?: number | undefined;
        strokeColor?: string | undefined;
        strokeStyle?: strokeStyleType | undefined;
        strokeLineCap?: strokeLineCapType | undefined;
        strokeLineJoin?: strokeLineJoinType | undefined;
        fillColor?: string | undefined;
        fillOpacity?: number | undefined;
        clickable?: boolean | undefined;
        visible?: boolean | undefined;
        zIndex?: number | undefined;
    }
    interface FeatureEvent {
        feature: Feature;
    }
    interface PointerEvent {
        coord: Coord;
        point: Point;
        offset: Point;
        pointerEvent: DOMEvent;
        feature: Feature;
    }
    interface PropertyEvent {
        feature: Feature;
        name: string;
        oldValue: any;
        newValue: any;
    }
    interface StyleOptions {
        strokeColor?: string | undefined;
        strokeOpacity?: number | undefined;
        strokeWeight?: number | undefined;
        fillColor?: string | undefined;
        fillOpacity?: number | undefined;
        clickable?: boolean | undefined;
        icon?: string | ImageIcon | SymbolIcon | HtmlIcon | undefined;
        shape?: MarkerShape | undefined;
        title?: string | undefined;
        visible?: boolean | undefined;
        zIndex?: number | undefined;
    }
    interface ControlOptions {
        position: Position;
    }
    interface CircleOptions {
        map?: Map | undefined;
        center: Coord | CoordLiteral;
        radius?: number | undefined;
        strokeWeight?: number | undefined;
        strokeOpacity?: number | undefined;
        strokeColor?: string | undefined;
        strokeStyle?: strokeStyleType | undefined;
        strokeLineCap?: strokeLineCapType | undefined;
        strokeLineJoin?: strokeLineJoinType | undefined;
        fillColor?: string | undefined;
        fillOpacity?: number | undefined;
        clickable?: boolean | undefined;
        visible?: boolean | undefined;
        zIndex?: number | undefined;
    }
    interface TileOptions {
        opacity?: number | undefined;
        transition?: boolean | undefined;
        offset?: Point | undefined;
        zIndex?: number | undefined;
        size?: Size | undefined;
        pane?: HTMLElement | undefined;
    }
    interface TileIndex {
        xIndex: number;
        yIndex: number;
    }
    interface CanvasTileOptions {
        imageData?: ImageData | undefined;
        opacity?: number | undefined;
        transition?: boolean | undefined;
        offset?: Point | undefined;
        zIndex?: number | undefined;
        size?: Size | undefined;
        pane?: HTMLElement | undefined;
    }
    interface CanvasMapTypeOptions {
        name: string;
        maxZoom: number;
        minZoom: number;
        projection: Projection;
        tileSize?: Size | SizeLiteral | undefined;
        repeatX?: boolean | undefined;
        vendor?: string | undefined;
        provider?: MapDataProvider[] | undefined;
        uid?: string | undefined;
        darktheme?: boolean | undefined;
        getTileData?: (() => any) | undefined;
    }
    interface MapDataProvider {
        title: string;
        link?: string | undefined;
        bounds?: Bounds | BoundsLiteral | ArrayOfBounds | ArrayOfBoundsLiteral | undefined;
    }
    interface MapType {
        maxZoom: number;
        minZoom: number;
        name: string;
        projection: Projection;
        tileSize: Size;
        getTile(x: number, y: number, z: number): HTMLElement | Tile;
    }
    interface Projection {
        fromCoordToPoint(coord: Coord): Point;
        fromPointToCoord(point: Point): Coord;
    }
    interface CadastralLayerOptions {
        overlayMap: boolean | undefined;
        zIndex: number | undefined;
    }
    interface AroundControlOptions {
        position: Position;
    }
    interface NaverImageMapTypeOptions {
        maxZoom?: number | undefined;
        minZoom?: number | undefined;
        projection?: Projection | undefined;
        tileSize?: Size | undefined;
        hd?: string | undefined;
    }
    interface LogoControlOptions {
        position: Position;
    }
    interface MapDataControlOptions {
        position: Position;
    }
    interface MapTypeControlOptions {
        mapTypeIds: MapTypeId[] | null;
        position: Position;
        style: MapTypeControlStyle;
    }
    interface ScaleControlOptions {
        position: Position;
    }
    interface ZoomControlOptions {
        position: Position;
        style: ZoomControlStyle;
        legendDisabled: boolean;
    }
    interface LayerOptions {
        hd: boolean;
        overlayMap: boolean | undefined;
        zIndex: number | undefined;
    }
    interface CadastralLayerOptions {
        overlayMap: boolean | undefined;
        zIndex: number | undefined;
    }
    interface StreetLayerOptions {
        overlayMap: boolean | undefined;
        zIndex: number | undefined;
    }
    interface TrafficLayerOptions {
        interval: number;
        overlayMap: boolean | undefined;
        zIndex: number | undefined;
    }
    interface HtmlIcon {
        content: string | HTMLElement;
        size?: Size | SizeLiteral | undefined;
        anchor?: Point | PointLiteral | Position | undefined;
    }
    interface ImageIcon {
        url: string;
        size?: Size | SizeLiteral | undefined;
        scaledSize?: Size | SizeLiteral | undefined;
        origin?: Point | PointLiteral | undefined;
        anchor?: Point | PointLiteral | Position | undefined;
    }
    interface MarkerShape {
        coords: any[];
        type: string;
    }
    interface SymbolIcon {
        path: SymbolPath | Point[] | PointLiteral[];
        style?: SymbolStyle | undefined;
        radius?: number | undefined;
        fillColor?: string | undefined;
        fillOpacity?: number | undefined;
        strokeColor?: string | undefined;
        strokeWeight?: number | undefined;
        strokeOpacity?: number | undefined;
        anchor?: Point | PointLiteral | Position | undefined;
    }
    interface PolygonOptions {
        map?: Map | undefined;
        paths: ArrayOfCoords[] | KVOArrayOfCoords[] | ArrayOfCoordsLiteral[];
        strokeWeight?: number | undefined;
        strokeOpacity?: number | undefined;
        strokeColor?: string | undefined;
        strokeStyle?: strokeStyleType | undefined;
        strokeLineCap?: strokeLineCapType | undefined;
        strokeLineJoin?: strokeLineJoinType | undefined;
        fillColor?: string | undefined;
        fillOpacity?: number | undefined;
        clickable?: boolean | undefined;
        visible?: boolean | undefined;
        zIndex?: number | undefined;
    }
    interface PolylineOptions {
        map?: Map | undefined;
        path: ArrayOfCoords | KVOArrayOfCoords | ArrayOfCoordsLiteral;
        strokeWeight?: number | undefined;
        strokeOpacity?: number | undefined;
        strokeColor?: string | undefined;
        strokeStyle?: strokeStyleType | undefined;
        strokeLineCap?: strokeLineCapType | undefined;
        strokeLineJoin?: strokeLineJoinType | undefined;
        clickable?: boolean | undefined;
        visible?: boolean | undefined;
        zIndex?: number | undefined;
        startIcon?: PointingIcon | undefined;
        startIconSize?: number | undefined;
        endIcon?: PointingIcon | undefined;
        endIconSize?: number | undefined;
    }
    interface RectangleOptions {
        map?: Map | undefined;
        bounds: Bounds | BoundsLiteral;
        strokeWeight?: number | undefined;
        strokeOpacity?: number | undefined;
        strokeColor?: string | undefined;
        strokeStyle?: strokeStyleType | undefined;
        strokeLineCap?: strokeLineCapType | undefined;
        strokeLineJoin?: strokeLineJoinType | undefined;
        fillColor?: string | undefined;
        fillOpacity?: number | undefined;
        clickable?: boolean | undefined;
        visible?: boolean | undefined;
        zIndex?: number | undefined;
    }
    interface PanoramaOptions {
        size?: Size | SizeLiteral;
        panoId?: string;
        position?: LatLng | LatLngLiteral;
        pov?: PanoramaPov;
        visible?: boolean;
        minScale?: number;
        maxScale?: number;
        minZoom?: number;
        maxZoom?: number;
        flightSpot?: boolean;
        logoControl?: boolean;
        logoControlOptions?: LogoControlOptions;
        zoomControl?: boolean;
        zoomControlOptions?: ZoomControlOptions;
        aroundControl?: boolean;
        aroundControlOptions?: AroundControlOptions;
    }
    interface PanoramaPov {
        pan: number;
        tilt: number;
        fov: number;
    }
    interface PanoramaLocation {
        panoId: string;
        title: string;
        address: string;
        coord: LatLng;
        photodate: string;
    }
    interface DOMEventListener {
        eventName: string;
        listener: () => any;
        target: HTMLElement;
    }
    interface Margin {
        top?: number | undefined;
        right?: number | undefined;
        bottom?: number | undefined;
        left?: number | undefined;
    }

    interface TransitionOptions {
        duration?: number | undefined;
        easing?: string | undefined;
    }

    /**
     * Enums
     */
    enum MapTypeControlStyle {
        BUTTON,
        DROPDOWN,
    }
    enum ZoomControlStyle {
        LARGE,
        SMALL,
    }

    /**
     * Members
     */
    enum Animation {
        BOUNCE = 1,
        DROP,
    }
    let jsContentLoaded: boolean;
    type MapTypeId = string;
    namespace MapTypeId {
        // TODO. 확실하지 않음
        let NORMAL: string;
        let TERRAIN: string;
        let SATELLITE: string;
        let HYBRID: string;
    }
    function onJSContentLoaded(...args: any[]): any;
    enum PointingIcon {
        OPEN_ARROW = 1,
        BLOCK_ARROW,
        CIRCLE,
        DIAMOND,
    }
    enum Position {
        CENTER = 0,
        TOP_LEFT,
        TOP_CENTER,
        TOP_RIGHT,
        LEFT_CENTER,
        LEFT_TOP,
        LEFT_BOTTOM,
        RIGHT_TOP,
        RIGHT_CENTER,
        RIGHT_BOTTOM,
        BOTTOM_LEFT,
        BOTTOM_CENTER,
        BOTTOM_RIGHT,
    }
    enum SymbolPath {
        BACKWARD_CLOSED_ARROW = 1,
        BACKWARD_OPEN_ARROW,
        CIRCLE,
        FORWARD_CLOSED_ARROW,
        FORWARD_OPEN_ARROW,
    }
    type SymbolStyle = string;
    namespace SymbolStyle {
        let CIRCLE: string;
        let PATH: string;
        let CLOSED_PATH: string;
    }

    /**
     * Classes
     */
    // KVO
    class KVO {
        constructor();
        addListener(eventName: any, listener: () => any): MapEventListener;
        addListenerOnce(eventName: any, listener: () => any): MapEventListener;
        bindTo(key: string, target: KVO, targetKey?: string): void;
        clearListeners(eventName: string): void;
        get(key: string): any;
        hasListener(eventName: string): boolean;
        removeListener(listeners: MapEventListener | MapEventListener[]): void;
        set(key: string, value: any, silently?: boolean): void;
        setValues(properties: any): void;
        trigger(eventName: string, eventObject?: any): void;
        unbind(key: string): void;
        unbindAll(): void;
    }
    class KVOArray extends KVO {
        constructor(array: any[]);
        clear(): void;
        forEach(callback: (element: any, index: number) => void): void;
        getArray(): any[];
        getAt(index: number): any;
        getIndexOfElement(element: any): number;
        getLength(): number;
        insertAt(index: number, element: any): void;
        pop(): any;
        push(element: any): number;
        removeAt(index: number): any;
        removeElement(element: any): void;
        setAt(index: number, element: any): void;
        splice(startIndex: number, deleteCount: number, element?: any): any[];
    }
    // Base
    class Point {
        x: number;
        y: number;
        constructor(x: number, y: number);
        add(point: Coord | PointLiteral): Point;
        add(x: number, y: number): Point;
        ceil(): Point;
        clone(): Point;
        div(point: Coord | PointLiteral): void;
        div(x: number, y: number): Point;
        equals(point: Point): boolean;
        floor(): Point;
        mul(point: Coord | PointLiteral): Point;
        mul(x: number, y: number): Point;
        round(): Point;
        sub(point: Coord | PointLiteral): Point;
        sub(x: number, y: number): Point;
        toString(): string;
    }
    class Size {
        width: number;
        height: number;
        constructor(width: number, height: number);
        add(size: Size | SizeLiteral): Size;
        add(width: number, height: number): Size;
        ceil(): Size;
        clone(): Size;
        div(width: number, height: number): Size;
        div(size: Size | SizeLiteral): Size;
        equals(size: Size | SizeLiteral): boolean;
        floor(): Size;
        mul(size: Size | SizeLiteral): Size;
        mul(width: number, height: number): Size;
        round(): Size;
        sub(size: Size | SizeLiteral): Size;
        sub(width: number, height: number): Size;
        toString(): string;
    }
    class PointBounds {
        constructor(minPoint: Point, maxPoint: Point);
        static bounds(point: Coord | PointLiteral, pointN: Coord | PointLiteral): PointBounds;
        clone(): PointBounds;
        equals(bounds: Bounds | PointBoundsLiteral): boolean;
        extend(point: Coord | PointLiteral): PointBounds;
        getCenter(): Point;
        getMax(): Point;
        getMin(): Point;
        hasBounds(bounds: Bounds | PointBoundsLiteral): boolean;
        hasPoint(point: Coord | PointLiteral): boolean;
        intersects(bounds: Bounds | PointBoundsLiteral): boolean;
        maxX(): number;
        maxY(): number;
        minX(): number;
        minY(): number;
        toString(): string;
        union(bounds: Bounds | PointBoundsLiteral): PointBounds;
    }
    class LatLng extends Point {
        constructor(lat: number, lng: number);
        clone(): LatLng;
        destinationPoint(angle: number, meter: number): LatLng;
        equals(point: Coord | LatLngLiteral): boolean;
        lat(): number;
        lng(): number;
        toPoint(): Point;
        toString(): string;
    }
    class LatLngBounds extends PointBounds {
        constructor(sw: LatLng, ne: LatLng);
        static bounds(latlng: Coord | LatLngLiteral, latlngN: Coord | LatLngLiteral): LatLngBounds;
        clone(): LatLngBounds;
        east(): number;
        equals(bounds: Bounds | LatLngBoundsLiteral): boolean;
        extend(latlng: Coord | LatLngLiteral): LatLngBounds;
        getCenter(): LatLng;
        getNE(): LatLng;
        getSW(): LatLng;
        hasLatLng(latlng: Coord | LatLngLiteral): boolean;
        intersects(bounds: Bounds | LatLngBoundsLiteral): boolean;
        north(): number;
        south(): number;
        toPointBounds(): PointBounds;
        union(bounds: Bounds | LatLngBoundsLiteral): LatLngBounds;
        west(): number;
    }
    // Map
    class Map extends KVO {
        controls: any;
        data: any;
        layers: any;
        mapTypes: any;
        mapSystemProjection: any;
        constructor(mapDiv: string | HTMLElement, mapOptions?: MapOptions);
        addPane(name: string, elementOrIndex: HTMLElement | number): void;
        destroy(): void;
        fitBounds(bounds: any, margin?: any): void;
        getBounds(): Bounds;
        getCenter(): Coord;
        getCenterPoint(): Coord;
        getElement(): HTMLElement;
        getMapTypeId(): string;
        getOptions(key?: string): any;
        getPanes(): MapPanes;
        getPrimitiveProjection(): Projection;
        getProjection(): MapSystemProjection;
        getSize(): Size;
        getZoom(): number;
        morph(coord: Coord | CoordLiteral, zoom?: number, transitionOptions?: TransitionOptions): void;
        panBy(offset: Point | PointLiteral): void;
        panTo(coord: Coord | CoordLiteral, transitionOptions: TransitionOptions): void;
        panToBounds(bounds: Bounds | BoundsLiteral, transitionOptions: TransitionOptions, margin?: Margin): void;
        refresh(noEffect?: boolean): void;
        removePane(name: string): void;
        setCenter(center: Coord | CoordLiteral): void;
        setCenterPoint(point: Point | PointLiteral): void;
        setMapTypeId(mapTypeId: string): void;
        setOptions(newOptionsOrKey: any, value?: any): void;
        setSize(size: Size | SizeLiteral): void;
        setZoom(zoom: number, effect?: boolean): void;
        updateBy(coord: Coord | CoordLiteral, zoom: number): void;
        zoomBy(deltaZoom: number, zoomOrigin?: Coord | CoordLiteral, effect?: boolean): void;
    }
    // Map.Tile
    class Tile extends KVO {
        constructor(element: HTMLElement, tileOptions?: TileOptions);
        appendTo(parentNode: HTMLElement): void;
        cancelFadeIn(): void;
        destroy(): void;
        fadeIn(callback: () => any, startOpacity?: number): void;
        getElement(): HTMLElement;
        getOffset(): Point;
        getOpacity(): number;
        getSize(): Size;
        getTileIndex(): TileIndex;
        getZIndex(): number;
        hide(): void;
        load(tileOptions?: TileOptions): void;
        remove(): void;
        reset(mapType: MapType, zoom: number, tileOptions?: TileOptions): void;
        setBlank(): void;
        setOffset(offset: Point): void;
        setOffset(x: number, y: number): void;
        setOpacity(opacity: number): void;
        setSize(size: Size): void;
        setTileIndex(tileIndex: TileIndex): void;
        setZIndex(zIndex: number): void;
        show(): void;
    }
    class CanvasTile extends Tile {
        constructor(canvasTileOptions: CanvasTileOptions);
    }
    class ImageTile extends Tile {
        constructor(imageTileOptions: ImageTileOptions);
        getImageElements(): HTMLElement[];
        getUrls(): string[];
        setUrls(urls: string[]): void;
    }
    // Map.MapType
    class CanvasMapType implements MapType {
        maxZoom: number;
        minZoom: number;
        name: string;
        projection: Projection;
        tileSize: Size;
        constructor(canvasMapTypeOptions: CanvasMapTypeOptions);
        getMapTypeOptions(): CanvasMapTypeOptions;
        getMaxZoom(): number;
        getMinZoom(): number;
        getName(): string;
        getTile(x: number, y: number, z: number): CanvasTile;
        getTileData(x: number, y: number, z: number): ImageData;
        setMapTypeOptions(canvasMapTypeOptions: CanvasMapTypeOptions): void;
    }
    class ImageMapType implements MapType {
        maxZoom: number;
        minZoom: number;
        name: string;
        projection: Projection;
        tileSize: Size;
        constructor(imageMapTypeOptions: ImageMapTypeOptions);
        getMapTypeOptions(): ImageMapTypeOptions;
        getMaxZoom(): number;
        getMinZoom(): number;
        getName(): string;
        getTile(x: number, y: number, z: number): ImageTile;
        getTileUrls(x: number, y: number, z: number): string[];
        setMapTypeOptions(imageMapTypeOptions: ImageMapTypeOptions): void;
    }
    class MapTypeRegistry extends KVO {
        constructor(mapTypeInfo?: any, defaultMapTypeId?: string);
        getPreviousTypeId(): string;
        getSelectedType(): MapType;
        getSelectedTypeId(): string;
        getTypeIds(): string[];
        set(mapTypeId: string, mapType: MapType): void;
        setSelectedTypeId(mapTypeId: string): void;
    }
    // update NaverMapTypeOption -> NaverStyleMapTypeOptions
    namespace NaverStyleMapTypeOptions {
        function getBicycleLayer(opts?: any): ImageMapType;
        function getBlankMap(opts?: any): ImageMapType;
        function getCadastralLayer(opts?: any): ImageMapType;
        function getHybridMap(opts?: any): ImageMapType;
        function getMapTypes(opts?: any): MapTypeRegistry;
        function getNormalLabelLayer(opts?: any): ImageMapType;
        function getNormalMap(opts?: any): ImageMapType;
        function getSatelliteLabelLayer(opts?: any): ImageMapType;
        function getSatelliteMap(opts?: any): ImageMapType;
        function getStreetLayer(opts?: any): ImageMapType;
        function getTerrainMap(opts?: any): ImageMapType;
        function getTrafficLayer(opts?: any): ImageMapType;
        function getVectorMap(opts?: any): ImageMapType;
        function getWorldMap(opts?: any): ImageMapType;
    }

    // Map.MapType.Preset
    function NaverMapTypeOption(options: NaverImageMapTypeOptions): void;
    namespace NaverMapTypeOption {
        function getBicycleLayer(opts: NaverImageMapTypeOptions): ImageMapType;
        function getBlankMap(opts: NaverImageMapTypeOptions): ImageMapType;
        function getCadastralLayer(opts?: NaverImageMapTypeOptions): ImageMapType;
        function getHybridMap(opts?: NaverImageMapTypeOptions): ImageMapType;
        function getMapTypes(opts?: NaverImageMapTypeOptions): MapTypeRegistry;
        function getNormalLabelLayer(opts?: NaverImageMapTypeOptions): ImageMapType;
        function getNormalMap(opts?: NaverImageMapTypeOptions): ImageMapType;
        function getSatelliteLabelLayer(opts?: NaverImageMapTypeOptions): ImageMapType;
        function getSatelliteMap(opts?: NaverImageMapTypeOptions): ImageMapType;
        function getStreetLayer(opts?: NaverImageMapTypeOptions): ImageMapType;
        function getTerrainMap(opts?: NaverImageMapTypeOptions): ImageMapType;
        function getTrafficLayer(opts?: NaverImageMapTypeOptions): ImageMapType;
        function getVectorMap(opts?: NaverImageMapTypeOptions): ImageMapType;
        function getWorldMap(opts?: NaverImageMapTypeOptions): ImageMapType;
    }

    // Control
    class CustomControl extends KVO {
        constructor(html: string, ControlOptions: ControlOptions);
        getElement(): HTMLElement;
        getMap(): Map | null;
        getOptions(key?: string): any;
        html(html?: string): string | undefined;
        setMap(map?: Map | null): void;
        setOptions(newOptions: ControlOptions): void;
        setPosition(position: Position): void;
    }
    // Naver Controls
    class LogoControl extends CustomControl {
        constructor(LogoControlOptions: LogoControlOptions);
    }
    class MapDataControl extends CustomControl {
        constructor(MapDataControlOptions: MapDataControlOptions);
    }
    class MapTypeControl extends CustomControl {
        constructor(MapTypeControlOptions: MapTypeControlOptions);
    }
    class ScaleControl extends CustomControl {
        constructor(ScaleControlOptions: ScaleControlOptions);
    }
    class ZoomControl extends CustomControl {
        constructor(ZoomControlOptions: ZoomControlOptions);
    }
    // Layer
    class Layer extends KVO {
        constructor(name: string, MapTypeRegistry: MapTypeRegistry, options: LayerOptions);
        getLayerType(): MapType;
        getLayerTypeId(): string;
        getMap(): Map | null;
        getOpacity(): number;
        getPaneElement(): HTMLElement;
        refresh(noEffect?: boolean): void;
        setLayerTypeId(typeId: string): void;
        setMap(map: Map | null): void;
        setOpacity(opacity: number): void;
    }
    // Naver Layers
    class LabelLayer extends Layer {
        constructor(name: string, registry: ImageMapType, option: any);
    }
    class CadastralLayer extends LabelLayer {
        name: string;
        constructor(option?: CadastralLayerOptions);
    }
    class StreetLayer extends LabelLayer {
        name: string;
        constructor(option?: StreetLayerOptions);
    }
    class TrafficLayer extends LabelLayer {
        name: string;
        constructor(option?: TrafficLayerOptions);
        endAutoRefresh(): void;
        startAutoRefresh(): void;
    }
    // Data Layer
    class Data extends KVO {
        constructor();
        addFeature(feature: Feature, autoStyle: boolean): void;
        addGeoJson(geojson: GeoJSON, autoStyle: boolean): void;
        addGpx(xmlDoc: GPX, autoStyle: boolean): void;
        addKml(xmlDoc: KML, autoStyle: boolean): void;
        forEach(callback: (feature: Feature, index: number) => void): void;
        getAllFeature(): Feature[];
        getFeatureById(id: string | number): Feature;
        getMap(): Map | null;
        getStyle(): StyleOptions | StylingFunction;
        overrideStyle(feature: Feature, style: StyleOptions): void;
        removeFeature(feature: Feature): void;
        removeGeoJson(geojson: GeoJSON): void;
        revertStyle(feature: Feature): void;
        setMap(map: Map | null): void;
        setStyle(style: StyleOptions | StylingFunction): void;
        toGeoJson(): GeoJSON;
    }
    class Feature extends KVO {
        constructor(rawFeature: any);
        forEachOverlay(callback: forEachOverlayCallback): void;
        getBounds(): Bounds;
        getGeometries(): Geometry[];
        getId(): string;
        getOverlays(): Marker[] | Polyline[] | Polygon[];
        getProperty(name: string): any;
        getRaw(): GeoJSON;
        setProperty(name: string, value: any): void;
        setStyle(styleOptions: StyleOptions): void; // Data.StyleOptions
    }
    class Geometry extends KVO {
        constructor(rawGeometry: any);
        getCoords(): ArrayOfCoords;
        getType(): string;
    }
    // Overlay
    class OverlayView extends KVO {
        draw(): void;
        getContainerTopLeft(): Point;
        getMap(): Map | null;
        getPanes(): MapPanes;
        getProjection(): MapSystemProjection;
        onAdd(): any;
        onRemove(): any;
        setMap(map: Map | null): void;
    }
    // Naver Overlays
    class Circle extends OverlayView {
        constructor(options?: CircleOptions);
        getAreaSize(): number;
        getBounds(): Bounds;
        getCenter(): Coord;
        getClickable(): boolean;
        getDrawingRect(): Bounds;
        getOptions(key?: string): CircleOptions;
        getRadius(): number;
        getStyles(key: string): CircleOptions;
        getVisible(): boolean;
        getZIndex(): number;
        setCenter(center: Coord | CoordLiteral): void;
        setClickable(clickable: boolean): void;
        setOptions(key: string, value: any): void;
        setOptions(options: CircleOptions): void;
        setRadius(radius: number): void;
        setStyles(key: string, value: string): void;
        setStyles(options: CircleOptions): void;
        setVisible(visible: boolean): void;
        setZIndex(zIndex: number): void;
    }
    class Ellipse extends OverlayView {
        constructor(options?: EllipseOptions);
        getAreaSize(): number;
        getBounds(): Bounds;
        getClickable(): boolean;
        getDrawingRect(): Bounds;
        getOptions(key?: string): EllipseOptions;
        getStyles(key?: string): EllipseOptions;
        getVisible(): boolean;
        getZIndex(): number;
        setBounds(bounds: Bounds | BoundsLiteral): void;
        setOptions(options: EllipseOptions): void;
        setOptions(key: string, value: any): void;
        setStyles(options: EllipseOptions): void;
        setStyles(key: string, value: any): void;
        setVisible(visible: boolean): void;
        setZIndex(zIndex: number): void;
    }
    class GroundOverlay extends OverlayView {
        constructor(url: string, bounds: Bounds | BoundsLiteral, options?: GroundOverlayOptions);
        getBounds(): Bounds;
        getOpacity(): number;
        getUrl(): string;
        setOpacity(opacity: number): void;
    }
    class InfoWindow extends OverlayView {
        constructor(options: InfoWindowOptions);
        close(): void;
        getContent(): HTMLElement;
        getOptions(key?: string): InfoWindowOptions;
        getPosition(): Coord;
        getZIndex(): number;
        open(map: Map, anchor: Coord | CoordLiteral | Marker): void;
        setContent(content: string | HTMLElement): void;
        setOptions(options: InfoWindowOptions): void;
        setPosition(position: Coord | CoordLiteral): void;
        setZIndex(zIndex: number): void;
    }
    class Marker extends OverlayView {
        constructor(options: MarkerOptions);
        draw(): void;
        getAnimation(): Animation;
        getClickable(): boolean;
        getCursor(): string;
        getDraggable(): boolean;
        getDrawingRect(): Bounds;
        getIcon(): ImageIcon | SymbolIcon | HtmlIcon;
        getOptions(key?: string): MarkerOptions;
        getPosition(): Coord;
        getShape(): MarkerShape;
        getTitle(): string;
        getVisible(): boolean;
        getZIndex(): number;
        onAdd(): void;
        onRemove(): void;
        setAnimation(animation: Animation): void;
        setClickable(clickable: boolean): void;
        setCursor(cursor: string): void;
        setDraggable(draggable: boolean): void;
        setIcon(icon: string | ImageIcon | SymbolIcon | HtmlIcon): void;
        setOptions(options: MarkerOptions): void;
        setPosition(position: Coord | CoordLiteral): void;
        setShape(shape: MarkerShape): void;
        setTitle(title: string): void;
        setVisible(visible: boolean): void;
        setZIndex(zIndex: number): void;
    }
    class Polygon extends OverlayView {
        constructor(options?: PolygonOptions);
        getAreaSize(): number;
        getBounds(): Bounds;
        getClickable(): boolean;
        getDrawingRect(): Bounds;
        getOptions(key?: string): PolygonOptions;
        getPath(): ArrayOfCoords | KVOArrayOfCoords;
        getPaths(): ArrayOfCoords[] | KVOArrayOfCoords[];
        getStyles(key?: string): PolygonOptions;
        getVisible(): boolean;
        getZIndex(): number;
        setClickable(clickable: boolean): void;
        setOptions(key: string, value: any): void;
        setOptions(options: PolygonOptions): void;
        setPath(path: ArrayOfCoords | KVOArrayOfCoords | ArrayOfCoordsLiteral): void;
        setPaths(paths: ArrayOfCoords[] | ArrayOfCoordsLiteral): void; // TODO. KVOArray.<KVOArrayOfCoords>
        setStyles(key: string, value: any): void;
        setStyles(options: PolygonOptions): void;
        setVisible(visible: boolean): void;
        setZIndex(zIndex: number): void;
    }
    class Polyline extends OverlayView {
        constructor(options?: PolylineOptions);
        getBounds(): Bounds;
        getClickable(): boolean;
        getDistance(): number;
        getDrawingRect(): Bounds;
        getOptions(key?: string): PolylineOptions;
        getPath(): ArrayOfCoords | KVOArrayOfCoords;
        getStyles(key?: string): PolylineOptions;
        getVisible(): boolean;
        getZIndex(): number;
        setClickable(clickable: boolean): void;
        setOptions(key: string, value: any): void;
        setOptions(options: PolylineOptions): void;
        setPath(path: ArrayOfCoords | KVOArrayOfCoords | ArrayOfCoordsLiteral): void;
        setStyles(key: string, value: any): void;
        setStyles(options: PolylineOptions): void;
        setVisible(visible: boolean): void;
        setZIndex(zIndex: number): void;
    }
    class Rectangle extends OverlayView {
        constructor(options?: RectangleOptions);
        getAreaSize(): number;
        getBounds(): Bounds;
        getClickable(): boolean;
        getDrawingRect(): Bounds;
        getOptions(key?: string): RectangleOptions;
        getStyles(key?: string): RectangleOptions;
        getVisible(): boolean;
        getZIndex(): number;
        setBounds(bounds: Bounds | BoundsLiteral): void;
        setClickable(clickable: boolean): void;
        setOptions(options: RectangleOptions): void;
        setOptions(key: string, value: any): void;
        setStyles(key: string, value: any): void;
        setStyles(options: RectangleOptions): void;
        setVisible(visible: boolean): void;
        setZIndex(zIndex: number): void;
    }

    // Sub module: panorama
    class PanoramaProjection extends KVO {
        fromCoordToPov(coord: LatLng): PanoramaPov;
    }
    class Panorama extends KVO {
        constructor(panoramaDiv: string | HTMLElement, panoramaOptions: PanoramaOptions);
        getLocation(): PanoramaLocation;
        getMaxScale(): number;
        getMaxZoom(): number;
        getMinScale(): number;
        getMinZoom(): number;
        getPanoId(): string;
        getPosition(): LatLng;
        getPov(): PanoramaPov;
        getProjection(): PanoramaProjection;
        getScale(): number;
        getSize(): Size;
        getVisible(): boolean;
        getZoom(): number;
        setOptions(key: string, value: any): void;
        setOptions(newOptions: PanoramaOptions): void;
        setPanoId(panoId: string): void;
        setPanoIdWithPov(panoId: string, pov: PanoramaPov): void;
        setPosition(position: LatLng | LatLngLiteral): void;
        setPov(pov: PanoramaPov): void;
        setScale(scale: number): void;
        setSize(size: Size | SizeLiteral): void;
        setVisible(visible: boolean): void;
        setZoom(zoom: number): void;
        zoomIn(): void;
        zoomOut(): void;
    }
    class FlightSpot extends KVO {
        constructor();
        getMap(): Map | null;
        setMap(map: Map | null): void;
    }
    class AroundControl extends CustomControl {
        constructor(aroundControlOptions: AroundControlOptions);
    }

    // Sub module: drawing
    function drawing(): void;
    namespace drawing {
        interface DrawingOptions {
            map?: Map | undefined;
            drawingControl?: DrawingMode[] | undefined;
            drawingControlOptions?: drawingControlOptions | undefined;
            drawingMode?: DrawingMode | undefined;
            controlPointOptions?: controlPointOptions | undefined;
            rectangleOptions?: RectangleOptions | undefined;
            ellipseOptions?: EllipseOptions | undefined;
            polylineOptions?: PolylineOptions | undefined;
            arrowlineOptions?: PolylineOptions | undefined;
            polygonOptions?: PolygonOptions | undefined;
            markerOptions?: MarkerOptions | undefined;
        }
        type drawingControlOptions = DrawingControlOptions;
        interface DrawingControlOptions {
            position?: Position | undefined;
            style?: DrawingStyle | undefined;
        }
        type controlPointOptions = ControlPointOptions;
        interface ControlPointOptions {
            anchorPointOptions: CircleOptions;
            midPointOptions: CircleOptions;
        }
        interface DrawingOverlay {
            id: string;
            name: string;
            setEditable: (editable: boolean, controlPointOptions?: controlPointOptions) => void;
        }
        enum DrawingStyle {
            HORIZONTAL = 0,
            VERTICAL,
            HORIZONTAL_2,
            VERTICAL_2,
        }
        enum DrawingMode {
            HAND = 0,
            RECTANGLE,
            ELLIPSE,
            POLYLINE,
            ARROWLINE,
            POLYGON,
            MARKER,
        }
        enum DrawingEvent {
            ADD,
            REMOVE,
            SELECT,
            Added,
            Removed,
            Selected,
        }
        class DrawingManager extends KVO {
            constructor(options?: DrawingOptions);
            addDrawing(overlay: DrawingOverlay, drawingMode: DrawingMode, id?: string): void;
            addListener(eventName: DrawingEvent, listener: (overlay: DrawingOverlay) => void): MapEventListener;
            destroy(): void;
            getDrawing(id: string): DrawingOverlay;
            getDrawings(): any;
            getMap(): Map | null;
            setMap(map: Map | null): void;
            toGeoJson(): any;
        }
    }

    // Sub module: visualization
    function visualization(): void;
    namespace visualization {
        interface DotMapOptions {
            map: Map;
            data: LatLng[] | PointArrayLiteral[] | WeightedLocation[];
            opacity?: number | undefined;
            radius?: number | undefined;
            strokeWeight?: number | undefined;
            strokeColor?: string | undefined;
            strokeLineCap?: strokeLineCapType | undefined;
            strokeLineJoin?: strokeLineJoinType | undefined;
            fillColor?: string | undefined;
        }
        interface HeatMapOptions {
            map: Map;
            data: LatLng[] | PointArrayLiteral[] | WeightedLocation[];
            opacity?: number | undefined;
            radius?: number | undefined;
            colorMap?: SpectrumStyle | undefined;
        }
        enum SpectrumStyle {
            JET,
            HSV,
            HOT,
            COOL,
            GREYS,
            YIGnBu,
            YIOrRd,
            RdBu,
            RAINBOW,
            PORTLAND,
            OXYGEN,
        }
        class DotMap extends KVO {
            constructor(dotMapOptions?: DotMapOptions);
            addDrawing(overlay: drawing.DrawingOverlay, drawingMode: drawing.DrawingMode, id?: string): void;
            addListener(
                eventName: drawing.DrawingEvent,
                listener: (overlay: drawing.DrawingOverlay) => void,
            ): MapEventListener;
            destroy(): void;
            getDrawing(id: string): drawing.DrawingOverlay;
            getDrawings(): any;
            getMap(): Map | null;
            setMap(map: Map | null): void;
            toGeoJson(): any;
        }
        class HeatMap {
            constructor(heatMapOptions?: HeatMapOptions);
            getColorMap(): SpectrumStyle;
            getData(): LatLng[] | PointArrayLiteral[];
            getMap(): Map | null;
            getOptions(key?: string): HeatMapOptions;
            redraw(): void;
            setColorMap(colormap: SpectrumStyle, inReverse: boolean): void;
            setData(data: LatLng[] | PointArrayLiteral[]): void;
            setMap(map: Map | null): void;
            setOptions(key: string, value: any): void;
            setOptions(options: HeatMapOptions): void;
        }
        class WeightedLocation {
            constructor(lat: number, lng: number, weight?: number);
            clone(): WeightedLocation;
            getLocation(): LatLng;
            getWeight(): number;
            lat(): number;
            lng(): number;
            toString(): string;
        }
    }

    // Sub module: geocoder
    function Service(): void;
    namespace Service {
        interface ServiceOptions {
            sourcecrs?: CoordinatesType;
            targetcrs?: CoordinatesType;
            orders?: OrderType | string;
        }
        interface GeocodeServiceOptions extends ServiceOptions {
            query: string;
            coordinate?: string;
            filter?: string;
            page?: number;
            count?: number;
        }
        interface ReverseServiceOptions extends ServiceOptions {
            coords: string | Coord | CoordLiteral;
        }
        interface AddressItem {
            address: string;
            addrdetail: {
                country: string;
                sido: string;
                sigugun: string;
                dongmyun: string;
                rest: string;
            };
            point: {
                x: string;
                y: string;
            };
        }
        interface AddressItemV2 {
            roadAddress: string;
            jibunAddress: string;
            englishAddress: string;
            addressElements: Array<{
                code: string;
                longName: string;
                shortName: string;
                types:
                | 'SIDO'
                | 'SIGUGUN'
                | 'RI'
                | 'ROAD_NAME'
                | 'BUILDING_NUMBER'
                | 'BUILDING_NAME'
                | 'LAND_NUMBER'
                | 'POSTAL_CODE';
            }>;
            x: string;
            y: string;
            distance: string;
        }
        interface Meta {
            totalCount: number;
            page: number;
            count: number;
        }
        interface GeocodeResponse {
            result: {
                userquery: any;
                total: number;
                items: AddressItem[];
            };
            v2: {
                status: GeocodeStatus;
                meta: Meta;
                addresses: AddressItemV2[];
                errorMessage: string;
            };
        }
        interface ReverseGeocodeStatus {
            code: ReverseGeocodeStatusCode;
            name: ReverseGeocodeStatusName;
            message: string;
        }
        interface ReverseGeocodeAddress {
            roadAddress: string;
            jibunAddress: string;
        }
        interface Coords {
            center: {
                crs: string;
                x: string;
                y: string;
            };
        }
        interface Land {
            type: string;
            name: string;
            number1: string;
            number2: string;
            coords: Coords;
        }
        interface Area {
            name: string;
            coords: Coords;
        }
        interface Addition {
            type: string;
            value: string;
        }
        interface Region {
            area0: Area;
            area1: Area;
            area2: Area;
            area3: Area;
            area4: Area;
            land: Land;
            addition0: Addition;
            addition1: Addition;
            addition2: Addition;
            addition3: Addition;
            addition4: Addition;
        }
        interface ResultItem {
            name: string;
            code: {
                id: string;
                type: 'L' | 'A' | 'S' | string;
                mappingId: string;
            };
            region: Region;
        }
        interface ReverseGeocodeResponse {
            result: {
                userquery: string;
                total: number;
                items: AddressItem[];
            };
            v2: {
                status: ReverseGeocodeStatus;
                results: ResultItem[];
                address: ReverseGeocodeAddress;
            };
        }
        enum CoordinatesType {
            LATLNG,
            UTMK,
            TM128,
            EPSG3857,
        }
        enum OrderType {
            LEGAL_CODE,
            ADDR,
            ROAD_ADDR,
            ADM_CODE,
        }
        enum ReverseGeocodeStatusName {
            OK,
            NO_RESULTS,
            INVALID_REQUEST,
            UNKNOWN_ERROR_IO_ERROR,
        }
        enum ReverseGeocodeStatusCode {
            CODE_0,
            CODE_3,
            CODE_100,
            CODE_900,
        }
        enum GeocodeStatus {
            OK,
            INVALID_REQUEST,
            SYSTEM_ERROR,
        }
        enum Status {
            OK,
            ERROR,
        }

        function fromAddrToCoord(): void;
        function fromCoordToAddr(): void;
        function geocode(
            options: GeocodeServiceOptions,
            callback?: (status: Status, response: GeocodeResponse) => void,
        ): void;
        function reverseGeocode(
            options: ReverseServiceOptions,
            callback?: (status: Status, response: ReverseGeocodeResponse) => void,
        ): void;
    }

    function TransCoord(): void;
    namespace TransCoord {
        function fromEPSG3857ToLatLng(coord: Point): LatLng;
        function fromEPSG3857ToNaver(coord: Point): Point;
        function fromEPSG3857ToTM128(coord: Point): Point;
        function fromEPSG3857ToUTMK(coord: Point): Point;
        function fromLatLngToEPSG3857(latlng: Coord): Point;
        function fromLatLngToNaver(latlng: Coord): Point;
        function fromLatLngToTM128(latlng: Coord): Point;
        function fromLatLngToUTMK(latlng: Coord): Point;
        function fromNaverToEPSG3857(n: Point): Point;
        function fromNaverToLatLng(n: Point): LatLng;
        function fromNaverToTM128(n: Point): Point;
        function fromNaverToUTMK(n: Point): Point;
        function fromTM128ToEPSG3857(tm128: Point): Point;
        function fromTM128ToLatLng(tm128: Point): LatLng;
        function fromTM128ToNaver(tm128: Point): Point;
        function fromTM128ToUTMK(tm128: Point): Point;
        function fromUTMKToEPSG3857(utmk: Point): Point;
        function fromUTMKToLatLng(utmk: Point): LatLng;
        function fromUTMKToNaver(utmk: Point): Point;
        function fromUTMKToTM128(utmk: Point): Point;
    }

    function Event(): void;
    namespace Event {
        function addDOMListener(element: HTMLElement, eventName: string, listener: (event: any) => any): void;
        function addListener(target: any, eventName: string, listener: (event: any) => any): MapEventListener;
        function clearInstanceListeners(target: any): void;
        function clearListeners(target: any, fromEventName: string): void;
        function forward(source: any, fromEventName: string, target: any, toEventName: string): MapEventListener;
        function hasListener(target: any, eventName: string): boolean;
        function once(target: any, eventName: string, listener: (event: any) => any): MapEventListener;
        function removeDOMListener(element: HTMLElement, eventName: string, listener: (event: any) => any): void;
        function removeDOMListener(listeners: DOMEventListener | DOMEventListener[]): void;
        function removeListener(listeners: MapEventListener | MapEventListener[]): void;
        function resumeDispatch(target: any, eventName: string): void;
        function stopDispatch(target: any, eventName: string): void;
        function trigger(target: any, eventName: string, eventObject?: any): void;
    }

    // Projection
    function EPSG3857(): void;
    namespace EPSG3857 {
        // implements Projection
        function fromCoordToPoint(coord: Coord): Point;
        function fromLatLngToPoint(latlng: LatLng): Point;
        function fromPointToCoord(point: Point): LatLng;
        function fromPointToLatLng(point: Point): LatLng;
        function getDestinationCoord(fromLatLng: LatLng, angle: number, meter: number): LatLng;
        function getDistance(latlng1: LatLng, latlng2: LatLng): number;
    }

    function UTMK(): void;
    namespace UTMK {
        let name: string;
        let pointPerMeter: number;
        function fromCoordToPoint(latlng: LatLng): Point;
        function fromCoordToUTMK(latlng: LatLng): Point;
        function fromLatLngToPoint(latlng: LatLng): Point;
        function fromLatLngToUTMK(latlng: LatLng): Point;
        function fromPointToCoord(point: Point): LatLng;
        function fromPointToLatLng(point: Point): LatLng;
        function fromPointToUTMK(point: Point): Point;
        function fromUTMKToCoord(utmk: Point): LatLng;
        function fromUTMKToLatLng(utmk: Point): LatLng;
        function fromUTMKToPoint(utmk: Point): Point;
        function getDestinationCoord(fromLatLng: LatLng, angle: number, meter: number): LatLng;
        function getDistance(latlng1: LatLng, latlng2: LatLng): number;
    }

    function UTMK_NAVER(): void;
    namespace UTMK_NAVER {
        // extends UTMK
        let name: string;
        let pointPerMeter: number;
        function fromCoordToNaver(latlng: LatLng): Point;
        function fromLatLngToNaver(latlng: LatLng): Point;
        function fromNaverToCoord(naverPoint: Point): LatLng;
        function fromNaverToLatLng(naverPoint: Point): LatLng;
        function fromNaverToPoint(naverPoint: Point): Point;
        function fromNaverToUTMK(naverPoint: Point): Point;
        function fromPointToNaver(point: Point): Point;
        function fromUTMKToNaver(utmk: Point): Point;
    }

    function EPSG3857Coord(): void;
    namespace EPSG3857Coord {
        function fromCoordToLatLng(coord: Point): LatLng;
        function fromCoordToPoint(coord: Point): Point;
        function fromEPSG3857ToLatLng(coord: Point): LatLng;
        function fromEPSG3857ToPoint(coord: Point): Point;
        function fromLatLngToCoord(coord: Coord): Point;
        function fromLatLngToEPSG3857(coord: Coord): Point;
        function fromPointToCoord(point: Point): Point;
        function fromPointToEPSG3857(point: Point): Point;
    }

    function TM128(): void;
    namespace TM128 {
        // extends TM128Coord
        function fromCoordToPoint(latlng: Coord): Point;
        function fromPointToCoord(point: Point): LatLng;
    }

    function TM128Coord(): void;
    namespace TM128Coord {
        // extends UTMK
        function fromCoordToLatLng(tm128: Point): LatLng;
        function fromCoordToPoint(tm128: Point): Point;
        function fromLatLngToCoord(latlng: Coord): Point;
        function fromLatLngToTM128(latlng: Coord): Point;
        function fromPointToCoord(point: Point): Point;
        function fromPointToTM128(point: Point): Point;
        function fromTM128ToLatLng(tm128: Point): LatLng;
        function fromTM128ToPoint(tm128: Point): Point;
        function fromTM128ToUTMK(tm128: Point): Point;
        function fromUTMKToTM128(utmk: Point): Point;
    }

    function UTMK_NAVERCoord(): void;
    namespace UTMK_NAVERCoord {
        // extends UTMK_NAVER
        function fromCoordToLatLng(n: Point): LatLng;
        function fromCoordToPoint(n: Point): Point;
        function fromLatLngToCoord(latlng: Coord): Point;
        function fromPointToCoord(point: Point): Point;
    }

    function UTMKCoord(): void;
    namespace UTMKCoord {
        // extends UTMK
        function fromCoordToLatLng(utmk: Point): LatLng;
        function fromCoordToPoint(utmk: Point): Point;
        function fromLatLngToCoord(latlng: Coord): Point;
        function fromPointToCoord(point: Point): Point;
    }
}
