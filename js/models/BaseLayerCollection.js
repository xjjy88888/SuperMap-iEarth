define(['backbone','./BaseLayerModel'],function(Backbone,BaseLayerModel){
    var BaseLayerCollection = Backbone.Collection.extend({
        model : BaseLayerModel,
        initialize : function(){
        },
        fetch : function(){
            var models = [
				new BaseLayerModel({
				    url : 'images/baseImage.png',
				    name : 'Image',
				    thumbnail : 'images/Image.png',
				    title : 'Image',
				    type : 'IMAGE',
				    serviceType : Resource.imgServiceType
				}),
                new BaseLayerModel({
                    url : '//dev.virtualearth.net',
                    name : 'BingMap',
                    thumbnail : 'images/Bing.png',
                    title : 'BingMap',
                    type : 'BINGMAP',
                    serviceType : Resource.bingServiceType
                }),
                new BaseLayerModel({
                    url : 'https://[subdomain].tianditu.com/img_w/wmts',
                    name : Resource.tianditu,
                    thumbnail : 'images/tianditu.png',
                    title : Resource.tianditu,
                    type : 'TIANDITU',
                    serviceType : Resource.tdtServiceType
                }),
                new BaseLayerModel({
                    url : 'https://a.tile.openstreetmap.org/',
                    name : 'Open Street Map',
                    thumbnail : 'images/OSM.png',
                    title : 'Open Street Map',
                    type : 'OSM',
                    serviceType : Resource.osmServiceType
                }),
                new BaseLayerModel({
                    url : 'https://www.supermapol.com/iserver/services/map_China/rest/maps/China_Dark',
                    name : 'Open Street Map',
                    thumbnail : 'images/SuperMapDark.jpg',
                    title : 'SuperMap China_Dark Map',
                    type : 'SUPERMAPDARK'
                }),
                new BaseLayerModel({
                    url : 'https://www.supermapol.com/iserver/services/map_China/rest/maps/China_Light',
                    name : 'Open Street Map',
                    thumbnail : 'images/grad.jpg',
                    title : 'Grid Image Map',
                    type : 'GRIDIMAGERY'
                }),
                new BaseLayerModel({
                    url : 'https://www.supermapol.com/iserver/services/map_China/rest/maps/China_Light',
                    name : 'Open Street Map',
                    thumbnail : 'images/SuperMapLight.jpg',
                    title : 'SuperMap China_Light Map',
                    type : 'SUPERMAPLIGHT'
                })
            ];
            this.reset(models);
        }
    });
    return BaseLayerCollection;
});