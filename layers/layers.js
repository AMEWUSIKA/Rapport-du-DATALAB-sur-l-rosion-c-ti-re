ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32631").setExtent([302949.470821, 654385.399512, 354145.815872, 688967.671245]);
var wms_layers = [];

var format_Superficie_accumulekm_0 = new ol.format.GeoJSON();
var features_Superficie_accumulekm_0 = format_Superficie_accumulekm_0.readFeatures(json_Superficie_accumulekm_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_Superficie_accumulekm_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Superficie_accumulekm_0.addFeatures(features_Superficie_accumulekm_0);
var lyr_Superficie_accumulekm_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Superficie_accumulekm_0, 
                style: style_Superficie_accumulekm_0,
                popuplayertitle: 'Superficie_accumulée(km²)',
                interactive: true,
                title: '<img src="styles/legend/Superficie_accumulekm_0.png" /> Superficie_accumulée(km²)'
            });
var format_Superficie_rodekm_1 = new ol.format.GeoJSON();
var features_Superficie_rodekm_1 = format_Superficie_rodekm_1.readFeatures(json_Superficie_rodekm_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_Superficie_rodekm_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Superficie_rodekm_1.addFeatures(features_Superficie_rodekm_1);
var lyr_Superficie_rodekm_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Superficie_rodekm_1, 
                style: style_Superficie_rodekm_1,
                popuplayertitle: 'Superficie_érodée(km²)',
                interactive: true,
                title: '<img src="styles/legend/Superficie_rodekm_1.png" /> Superficie_érodée(km²)'
            });

        var lyr_OSMStandard_2 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Cantons_Littoral_3 = new ol.format.GeoJSON();
var features_Cantons_Littoral_3 = format_Cantons_Littoral_3.readFeatures(json_Cantons_Littoral_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_Cantons_Littoral_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cantons_Littoral_3.addFeatures(features_Cantons_Littoral_3);
var lyr_Cantons_Littoral_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cantons_Littoral_3, 
                style: style_Cantons_Littoral_3,
                popuplayertitle: 'Cantons_Littoral',
                interactive: true,
                title: '<img src="styles/legend/Cantons_Littoral_3.png" /> Cantons_Littoral'
            });
var format_TOGO_4 = new ol.format.GeoJSON();
var features_TOGO_4 = format_TOGO_4.readFeatures(json_TOGO_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_TOGO_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TOGO_4.addFeatures(features_TOGO_4);
var lyr_TOGO_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TOGO_4, 
                style: style_TOGO_4,
                popuplayertitle: 'TOGO',
                interactive: true,
                title: '<img src="styles/legend/TOGO_4.png" /> TOGO'
            });
var format_protection_5 = new ol.format.GeoJSON();
var features_protection_5 = format_protection_5.readFeatures(json_protection_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_protection_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_protection_5.addFeatures(features_protection_5);
var lyr_protection_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_protection_5, 
                style: style_protection_5,
                popuplayertitle: 'protection',
                interactive: true,
                title: '<img src="styles/legend/protection_5.png" /> protection'
            });
var format_Epis_6 = new ol.format.GeoJSON();
var features_Epis_6 = format_Epis_6.readFeatures(json_Epis_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_Epis_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Epis_6.addFeatures(features_Epis_6);
var lyr_Epis_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Epis_6, 
                style: style_Epis_6,
                popuplayertitle: 'Epis',
                interactive: true,
                title: '<img src="styles/legend/Epis_6.png" /> Epis'
            });
var format_HOT_SPOT_7 = new ol.format.GeoJSON();
var features_HOT_SPOT_7 = format_HOT_SPOT_7.readFeatures(json_HOT_SPOT_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_HOT_SPOT_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HOT_SPOT_7.addFeatures(features_HOT_SPOT_7);
var lyr_HOT_SPOT_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HOT_SPOT_7, 
                style: style_HOT_SPOT_7,
                popuplayertitle: 'HOT_SPOT',
                interactive: true,
    title: 'HOT_SPOT<br />\
    <img src="styles/legend/HOT_SPOT_7_0.png" /> faible<br />\
    <img src="styles/legend/HOT_SPOT_7_1.png" /> moyen<br />\
    <img src="styles/legend/HOT_SPOT_7_2.png" /> intense<br />' });
var format_Taux_LRRman_8 = new ol.format.GeoJSON();
var features_Taux_LRRman_8 = format_Taux_LRRman_8.readFeatures(json_Taux_LRRman_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_Taux_LRRman_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Taux_LRRman_8.addFeatures(features_Taux_LRRman_8);
var lyr_Taux_LRRman_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Taux_LRRman_8, 
                style: style_Taux_LRRman_8,
                popuplayertitle: 'Taux_LRR(m/an)',
                interactive: true,
    title: 'Taux_LRR(m/an)<br />\
    <img src="styles/legend/Taux_LRRman_8_0.png" /> <-0,25(érosion)<br />\
    <img src="styles/legend/Taux_LRRman_8_1.png" /> -0.25 - 0.25(stable)<br />\
    <img src="styles/legend/Taux_LRRman_8_2.png" /> >0,25(accretion)<br />' });
var format_protection_9 = new ol.format.GeoJSON();
var features_protection_9 = format_protection_9.readFeatures(json_protection_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_protection_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_protection_9.addFeatures(features_protection_9);
var lyr_protection_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_protection_9, 
                style: style_protection_9,
                popuplayertitle: 'protection',
                interactive: true,
                title: '<img src="styles/legend/protection_9.png" /> protection'
            });
var format_Epis_10 = new ol.format.GeoJSON();
var features_Epis_10 = format_Epis_10.readFeatures(json_Epis_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_Epis_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Epis_10.addFeatures(features_Epis_10);
var lyr_Epis_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Epis_10, 
                style: style_Epis_10,
                popuplayertitle: 'Epis',
                interactive: true,
                title: '<img src="styles/legend/Epis_10.png" /> Epis'
            });
var format_HOT_SPOT_11 = new ol.format.GeoJSON();
var features_HOT_SPOT_11 = format_HOT_SPOT_11.readFeatures(json_HOT_SPOT_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_HOT_SPOT_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HOT_SPOT_11.addFeatures(features_HOT_SPOT_11);
var lyr_HOT_SPOT_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HOT_SPOT_11, 
                style: style_HOT_SPOT_11,
                popuplayertitle: 'HOT_SPOT',
                interactive: true,
    title: 'HOT_SPOT<br />\
    <img src="styles/legend/HOT_SPOT_11_0.png" /> moyen<br />' });
var format_Taux_EPRman_12 = new ol.format.GeoJSON();
var features_Taux_EPRman_12 = format_Taux_EPRman_12.readFeatures(json_Taux_EPRman_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_Taux_EPRman_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Taux_EPRman_12.addFeatures(features_Taux_EPRman_12);
var lyr_Taux_EPRman_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Taux_EPRman_12, 
                style: style_Taux_EPRman_12,
                popuplayertitle: 'Taux_EPR(m/an)',
                interactive: true,
    title: 'Taux_EPR(m/an)<br />\
    <img src="styles/legend/Taux_EPRman_12_0.png" /> <-0.25(érosion)<br />\
    <img src="styles/legend/Taux_EPRman_12_1.png" /> -0.25 - 0.25(stable)<br />\
    <img src="styles/legend/Taux_EPRman_12_2.png" /> >0.25(accretion)<br />' });
var format_protection_13 = new ol.format.GeoJSON();
var features_protection_13 = format_protection_13.readFeatures(json_protection_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_protection_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_protection_13.addFeatures(features_protection_13);
var lyr_protection_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_protection_13, 
                style: style_protection_13,
                popuplayertitle: 'protection',
                interactive: true,
                title: '<img src="styles/legend/protection_13.png" /> protection'
            });
var format_Epis_14 = new ol.format.GeoJSON();
var features_Epis_14 = format_Epis_14.readFeatures(json_Epis_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_Epis_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Epis_14.addFeatures(features_Epis_14);
var lyr_Epis_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Epis_14, 
                style: style_Epis_14,
                popuplayertitle: 'Epis',
                interactive: true,
                title: '<img src="styles/legend/Epis_14.png" /> Epis'
            });
var format_protection_15 = new ol.format.GeoJSON();
var features_protection_15 = format_protection_15.readFeatures(json_protection_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_protection_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_protection_15.addFeatures(features_protection_15);
var lyr_protection_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_protection_15, 
                style: style_protection_15,
                popuplayertitle: 'protection',
                interactive: true,
                title: '<img src="styles/legend/protection_15.png" /> protection'
            });
var format_Epis_16 = new ol.format.GeoJSON();
var features_Epis_16 = format_Epis_16.readFeatures(json_Epis_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_Epis_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Epis_16.addFeatures(features_Epis_16);
var lyr_Epis_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Epis_16, 
                style: style_Epis_16,
                popuplayertitle: 'Epis',
                interactive: true,
                title: '<img src="styles/legend/Epis_16.png" /> Epis'
            });
var format_Taux_EPRman_17 = new ol.format.GeoJSON();
var features_Taux_EPRman_17 = format_Taux_EPRman_17.readFeatures(json_Taux_EPRman_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_Taux_EPRman_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Taux_EPRman_17.addFeatures(features_Taux_EPRman_17);
var lyr_Taux_EPRman_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Taux_EPRman_17, 
                style: style_Taux_EPRman_17,
                popuplayertitle: 'Taux_EPR(m/an)',
                interactive: true,
    title: 'Taux_EPR(m/an)<br />\
    <img src="styles/legend/Taux_EPRman_17_0.png" /> 0.0 - 0.0<br />\
    <img src="styles/legend/Taux_EPRman_17_1.png" /> 0.0 - 0.0<br />\
    <img src="styles/legend/Taux_EPRman_17_2.png" /> 0.0 - 0.0<br />' });
var format_protection_18 = new ol.format.GeoJSON();
var features_protection_18 = format_protection_18.readFeatures(json_protection_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_protection_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_protection_18.addFeatures(features_protection_18);
var lyr_protection_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_protection_18, 
                style: style_protection_18,
                popuplayertitle: 'protection',
                interactive: true,
                title: '<img src="styles/legend/protection_18.png" /> protection'
            });
var format_Epis_19 = new ol.format.GeoJSON();
var features_Epis_19 = format_Epis_19.readFeatures(json_Epis_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_Epis_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Epis_19.addFeatures(features_Epis_19);
var lyr_Epis_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Epis_19, 
                style: style_Epis_19,
                popuplayertitle: 'Epis',
                interactive: true,
                title: '<img src="styles/legend/Epis_19.png" /> Epis'
            });
var format_Taux_EPRman_20 = new ol.format.GeoJSON();
var features_Taux_EPRman_20 = format_Taux_EPRman_20.readFeatures(json_Taux_EPRman_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_Taux_EPRman_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Taux_EPRman_20.addFeatures(features_Taux_EPRman_20);
var lyr_Taux_EPRman_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Taux_EPRman_20, 
                style: style_Taux_EPRman_20,
                popuplayertitle: 'Taux_EPR(m/an)',
                interactive: true,
    title: 'Taux_EPR(m/an)<br />\
    <img src="styles/legend/Taux_EPRman_20_0.png" /> <-0.25(érosion)<br />\
    <img src="styles/legend/Taux_EPRman_20_1.png" /> -0.25 - 0.25(stable)<br />\
    <img src="styles/legend/Taux_EPRman_20_2.png" /> >0.25(accretion)<br />' });
var format_protection_21 = new ol.format.GeoJSON();
var features_protection_21 = format_protection_21.readFeatures(json_protection_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_protection_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_protection_21.addFeatures(features_protection_21);
var lyr_protection_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_protection_21, 
                style: style_protection_21,
                popuplayertitle: 'protection',
                interactive: true,
                title: '<img src="styles/legend/protection_21.png" /> protection'
            });
var format_Epis_22 = new ol.format.GeoJSON();
var features_Epis_22 = format_Epis_22.readFeatures(json_Epis_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_Epis_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Epis_22.addFeatures(features_Epis_22);
var lyr_Epis_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Epis_22, 
                style: style_Epis_22,
                popuplayertitle: 'Epis',
                interactive: true,
                title: '<img src="styles/legend/Epis_22.png" /> Epis'
            });
var format_HOT_SPOT_23 = new ol.format.GeoJSON();
var features_HOT_SPOT_23 = format_HOT_SPOT_23.readFeatures(json_HOT_SPOT_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_HOT_SPOT_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HOT_SPOT_23.addFeatures(features_HOT_SPOT_23);
var lyr_HOT_SPOT_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HOT_SPOT_23, 
                style: style_HOT_SPOT_23,
                popuplayertitle: 'HOT_SPOT',
                interactive: true,
    title: 'HOT_SPOT<br />\
    <img src="styles/legend/HOT_SPOT_23_0.png" /> faible<br />\
    <img src="styles/legend/HOT_SPOT_23_1.png" /> moyen<br />' });
var format_TauxEPR_24 = new ol.format.GeoJSON();
var features_TauxEPR_24 = format_TauxEPR_24.readFeatures(json_TauxEPR_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_TauxEPR_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TauxEPR_24.addFeatures(features_TauxEPR_24);
var lyr_TauxEPR_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TauxEPR_24, 
                style: style_TauxEPR_24,
                popuplayertitle: 'Taux(EPR)',
                interactive: true,
    title: 'Taux(EPR)<br />\
    <img src="styles/legend/TauxEPR_24_0.png" /> <-0.25(érosion)<br />\
    <img src="styles/legend/TauxEPR_24_1.png" /> -0.25 - 0.25(stable)<br />\
    <img src="styles/legend/TauxEPR_24_2.png" /> >0.25(accretion)<br />' });
var format_Taux_EPRman_25 = new ol.format.GeoJSON();
var features_Taux_EPRman_25 = format_Taux_EPRman_25.readFeatures(json_Taux_EPRman_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_Taux_EPRman_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Taux_EPRman_25.addFeatures(features_Taux_EPRman_25);
var lyr_Taux_EPRman_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Taux_EPRman_25, 
                style: style_Taux_EPRman_25,
                popuplayertitle: 'Taux_EPR(m/an)',
                interactive: true,
    title: 'Taux_EPR(m/an)<br />\
    <img src="styles/legend/Taux_EPRman_25_0.png" /> <-0.25(érosion)<br />\
    <img src="styles/legend/Taux_EPRman_25_1.png" /> -0.25 - 0.25(stable)<br />\
    <img src="styles/legend/Taux_EPRman_25_2.png" /> >0.25(accretion)<br />' });
var format_Epis_26 = new ol.format.GeoJSON();
var features_Epis_26 = format_Epis_26.readFeatures(json_Epis_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_Epis_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Epis_26.addFeatures(features_Epis_26);
var lyr_Epis_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Epis_26, 
                style: style_Epis_26,
                popuplayertitle: 'Epis',
                interactive: true,
                title: '<img src="styles/legend/Epis_26.png" /> Epis'
            });
var format_protection_27 = new ol.format.GeoJSON();
var features_protection_27 = format_protection_27.readFeatures(json_protection_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_protection_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_protection_27.addFeatures(features_protection_27);
var lyr_protection_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_protection_27, 
                style: style_protection_27,
                popuplayertitle: 'protection',
                interactive: true,
                title: '<img src="styles/legend/protection_27.png" /> protection'
            });
var format_HOT_SPOT_28 = new ol.format.GeoJSON();
var features_HOT_SPOT_28 = format_HOT_SPOT_28.readFeatures(json_HOT_SPOT_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_HOT_SPOT_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HOT_SPOT_28.addFeatures(features_HOT_SPOT_28);
var lyr_HOT_SPOT_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HOT_SPOT_28, 
                style: style_HOT_SPOT_28,
                popuplayertitle: 'HOT_SPOT',
                interactive: true,
    title: 'HOT_SPOT<br />\
    <img src="styles/legend/HOT_SPOT_28_0.png" /> moyen<br />\
    <img src="styles/legend/HOT_SPOT_28_1.png" /> intense<br />' });
var format_Taux_EPRman_29 = new ol.format.GeoJSON();
var features_Taux_EPRman_29 = format_Taux_EPRman_29.readFeatures(json_Taux_EPRman_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_Taux_EPRman_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Taux_EPRman_29.addFeatures(features_Taux_EPRman_29);
var lyr_Taux_EPRman_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Taux_EPRman_29, 
                style: style_Taux_EPRman_29,
                popuplayertitle: 'Taux_EPR(m/an)',
                interactive: true,
    title: 'Taux_EPR(m/an)<br />\
    <img src="styles/legend/Taux_EPRman_29_0.png" /> <-0,25(érosion)<br />\
    <img src="styles/legend/Taux_EPRman_29_1.png" /> -0.25 - 0.25(stable)<br />\
    <img src="styles/legend/Taux_EPRman_29_2.png" /> >0,25(accretion)<br />' });
var format_2025_30 = new ol.format.GeoJSON();
var features_2025_30 = format_2025_30.readFeatures(json_2025_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_2025_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2025_30.addFeatures(features_2025_30);
var lyr_2025_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2025_30, 
                style: style_2025_30,
                popuplayertitle: '2025',
                interactive: true,
                title: '<img src="styles/legend/2025_30.png" /> 2025'
            });
var format_2020_31 = new ol.format.GeoJSON();
var features_2020_31 = format_2020_31.readFeatures(json_2020_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_2020_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2020_31.addFeatures(features_2020_31);
var lyr_2020_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2020_31, 
                style: style_2020_31,
                popuplayertitle: '2020',
                interactive: true,
                title: '<img src="styles/legend/2020_31.png" /> 2020'
            });
var format_2015_32 = new ol.format.GeoJSON();
var features_2015_32 = format_2015_32.readFeatures(json_2015_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_2015_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2015_32.addFeatures(features_2015_32);
var lyr_2015_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2015_32, 
                style: style_2015_32,
                popuplayertitle: '2015',
                interactive: true,
                title: '<img src="styles/legend/2015_32.png" /> 2015'
            });
var format_2010_33 = new ol.format.GeoJSON();
var features_2010_33 = format_2010_33.readFeatures(json_2010_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_2010_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2010_33.addFeatures(features_2010_33);
var lyr_2010_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2010_33, 
                style: style_2010_33,
                popuplayertitle: '2010',
                interactive: true,
                title: '<img src="styles/legend/2010_33.png" /> 2010'
            });
var format_2005_34 = new ol.format.GeoJSON();
var features_2005_34 = format_2005_34.readFeatures(json_2005_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_2005_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2005_34.addFeatures(features_2005_34);
var lyr_2005_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2005_34, 
                style: style_2005_34,
                popuplayertitle: '2005',
                interactive: true,
                title: '<img src="styles/legend/2005_34.png" /> 2005'
            });
var format_2000_35 = new ol.format.GeoJSON();
var features_2000_35 = format_2000_35.readFeatures(json_2000_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_2000_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2000_35.addFeatures(features_2000_35);
var lyr_2000_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2000_35, 
                style: style_2000_35,
                popuplayertitle: '2000',
                interactive: true,
                title: '<img src="styles/legend/2000_35.png" /> 2000'
            });
var format_1990_36 = new ol.format.GeoJSON();
var features_1990_36 = format_1990_36.readFeatures(json_1990_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_1990_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1990_36.addFeatures(features_1990_36);
var lyr_1990_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1990_36, 
                style: style_1990_36,
                popuplayertitle: '1990',
                interactive: true,
                title: '<img src="styles/legend/1990_36.png" /> 1990'
            });
var format_1984_37 = new ol.format.GeoJSON();
var features_1984_37 = format_1984_37.readFeatures(json_1984_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_1984_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1984_37.addFeatures(features_1984_37);
var lyr_1984_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1984_37, 
                style: style_1984_37,
                popuplayertitle: '1984',
                interactive: true,
                title: '<img src="styles/legend/1984_37.png" /> 1984'
            });
var group_Traitsdecte = new ol.layer.Group({
                                layers: [lyr_2025_30,lyr_2020_31,lyr_2015_32,lyr_2010_33,lyr_2005_34,lyr_2000_35,lyr_1990_36,lyr_1984_37,],
                                fold: 'close',
                                title: 'Traits de côte'});
var group_1984_1990 = new ol.layer.Group({
                                layers: [lyr_Epis_26,lyr_protection_27,lyr_HOT_SPOT_28,lyr_Taux_EPRman_29,],
                                fold: 'open',
                                title: '1984_1990'});
var group_1990_2000 = new ol.layer.Group({
                                layers: [lyr_Taux_EPRman_25,],
                                fold: 'close',
                                title: '1990_2000'});
var group_2000_2005 = new ol.layer.Group({
                                layers: [lyr_protection_21,lyr_Epis_22,lyr_HOT_SPOT_23,lyr_TauxEPR_24,],
                                fold: 'open',
                                title: '2000_2005'});
var group_2005_2010 = new ol.layer.Group({
                                layers: [lyr_protection_18,lyr_Epis_19,lyr_Taux_EPRman_20,],
                                fold: 'close',
                                title: '2005_2010'});
var group_2010_2015 = new ol.layer.Group({
                                layers: [lyr_protection_15,lyr_Epis_16,lyr_Taux_EPRman_17,],
                                fold: 'open',
                                title: '2010_2015'});
var group_2015_2020 = new ol.layer.Group({
                                layers: [lyr_protection_13,lyr_Epis_14,],
                                fold: 'open',
                                title: '2015_2020'});
var group_2020_2025 = new ol.layer.Group({
                                layers: [lyr_protection_9,lyr_Epis_10,lyr_HOT_SPOT_11,lyr_Taux_EPRman_12,],
                                fold: 'open',
                                title: '2020_2025'});
var group_1984_2025 = new ol.layer.Group({
                                layers: [lyr_protection_5,lyr_Epis_6,lyr_HOT_SPOT_7,lyr_Taux_LRRman_8,],
                                fold: 'open',
                                title: '1984_2025'});
var group_Rfrences = new ol.layer.Group({
                                layers: [lyr_OSMStandard_2,lyr_Cantons_Littoral_3,lyr_TOGO_4,],
                                fold: 'open',
                                title: 'Références'});
var group_Superficieperdue_19842025 = new ol.layer.Group({
                                layers: [lyr_Superficie_accumulekm_0,lyr_Superficie_rodekm_1,],
                                fold: 'open',
                                title: 'Superficie perdue_1984-2025'});

lyr_Superficie_accumulekm_0.setVisible(true);lyr_Superficie_rodekm_1.setVisible(true);lyr_OSMStandard_2.setVisible(true);lyr_Cantons_Littoral_3.setVisible(false);lyr_TOGO_4.setVisible(false);lyr_protection_5.setVisible(true);lyr_Epis_6.setVisible(true);lyr_HOT_SPOT_7.setVisible(true);lyr_Taux_LRRman_8.setVisible(true);lyr_protection_9.setVisible(true);lyr_Epis_10.setVisible(true);lyr_HOT_SPOT_11.setVisible(true);lyr_Taux_EPRman_12.setVisible(true);lyr_protection_13.setVisible(true);lyr_Epis_14.setVisible(true);lyr_protection_15.setVisible(true);lyr_Epis_16.setVisible(true);lyr_Taux_EPRman_17.setVisible(true);lyr_protection_18.setVisible(true);lyr_Epis_19.setVisible(true);lyr_Taux_EPRman_20.setVisible(true);lyr_protection_21.setVisible(true);lyr_Epis_22.setVisible(true);lyr_HOT_SPOT_23.setVisible(true);lyr_TauxEPR_24.setVisible(true);lyr_Taux_EPRman_25.setVisible(true);lyr_Epis_26.setVisible(true);lyr_protection_27.setVisible(true);lyr_HOT_SPOT_28.setVisible(true);lyr_Taux_EPRman_29.setVisible(true);lyr_2025_30.setVisible(true);lyr_2020_31.setVisible(true);lyr_2015_32.setVisible(true);lyr_2010_33.setVisible(true);lyr_2005_34.setVisible(true);lyr_2000_35.setVisible(true);lyr_1990_36.setVisible(true);lyr_1984_37.setVisible(true);
var layersList = [group_Superficieperdue_19842025,group_Rfrences,group_1984_2025,group_2020_2025,group_2015_2020,group_2010_2015,group_2005_2010,group_2000_2005,group_1990_2000,group_1984_1990,group_Traitsdecte];
lyr_Superficie_accumulekm_0.set('fieldAliases', {'FID_SUPERF': 'FID_SUPERF', 'Id': 'Id', 'AREA': 'AREA', 'FID_SUPE_1': 'FID_SUPE_1', 'Id_1': 'Id_1', 'area_1': 'area_1', 'AREA_12': 'AREA_12', 'TYPE': 'TYPE', 'SUP___': 'SUP___', 'Etat': 'Etat', });
lyr_Superficie_rodekm_1.set('fieldAliases', {'FID_SUPERF': 'FID_SUPERF', 'Id': 'Id', 'AREA': 'AREA', 'FID_SUPE_1': 'FID_SUPE_1', 'Id_1': 'Id_1', 'area_1': 'area_1', 'AREA_12': 'AREA_12', 'TYPE': 'TYPE', 'SUP___': 'SUP___', 'Etat': 'Etat', });
lyr_Cantons_Littoral_3.set('fieldAliases', {'FID_ZE': 'FID_ZE', 'FID_Zone_d': 'FID_Zone_d', 'fid_': 'fid_', 'region_id': 'region_id', 'region_nom': 'region_nom', 'prefecture': 'prefecture', 'prefectu_1': 'prefectu_1', 'commune_id': 'commune_id', 'commune_no': 'commune_no', 'canton_id': 'canton_id', 'canton_nom': 'canton_nom', 'canton_n_1': 'canton_n_1', 'grand_lome': 'grand_lome', 'Duplicata': 'Duplicata', 'FID_zone_e': 'FID_zone_e', 'Id': 'Id', 'FID_Zone_1': 'FID_Zone_1', 'fid1': 'fid1', 'region_i_1': 'region_i_1', 'region_n_1': 'region_n_1', 'prefectu_2': 'prefectu_2', 'prefectu_3': 'prefectu_3', 'commune__1': 'commune__1', 'commune__2': 'commune__2', 'canton_i_1': 'canton_i_1', 'canton_n_2': 'canton_n_2', 'canton_n_3': 'canton_n_3', 'grand_lo_1': 'grand_lo_1', 'Duplicat_1': 'Duplicat_1', });
lyr_TOGO_4.set('fieldAliases', {'FID_TOGO_D': 'FID_TOGO_D', 'Id': 'Id', 'AREA': 'AREA', 'AREA_1': 'AREA_1', 'FID_2025': 'FID_2025', 'Id_1': 'Id_1', 'TYPE': 'TYPE', });
lyr_protection_5.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Epis_6.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_HOT_SPOT_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SOURCE_ID': 'SOURCE_ID', 'posi': 'posi', 'Shape_Leng': 'Shape_Leng', 'GiZScore': 'GiZScore', 'GiPValue': 'GiPValue', 'NNeighbors': 'NNeighbors', 'Gi_Bin': 'Gi_Bin', 'hot spot': 'hot spot', });
lyr_Taux_LRRman_8.set('fieldAliases', {'ObjectID': 'ObjectID', 'BaselineID': 'BaselineID', 'TransOrder': 'TransOrder', 'TransEdit': 'TransEdit', 'TransectId': 'TransectId', 'ShrCount': 'ShrCount', 'LRR': 'LRR', 'LR2': 'LR2', 'LCI': 'LCI', 'LSE': 'LSE', 'EPR': 'EPR', 'EPRunc': 'EPRunc', 'NSM': 'NSM', 'SCE': 'SCE', 'WLR': 'WLR', 'WR2': 'WR2', 'WCI': 'WCI', 'WSE': 'WSE', 'TCD': 'TCD', });
lyr_protection_9.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Epis_10.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_HOT_SPOT_11.set('fieldAliases', {'SOURCE_ID': 'SOURCE_ID', 'EPR': 'EPR', 'GiZScore': 'GiZScore', 'GiPValue': 'GiPValue', 'NNeighbors': 'NNeighbors', 'Gi_Bin': 'Gi_Bin', 'hot spot': 'hot spot', });
lyr_Taux_EPRman_12.set('fieldAliases', {'ObjectID': 'ObjectID', 'BaselineID': 'BaselineID', 'TransOrder': 'TransOrder', 'TransEdit': 'TransEdit', 'TransectId': 'TransectId', 'ShrCount': 'ShrCount', 'LRR': 'LRR', 'LR2': 'LR2', 'LSE': 'LSE', 'LCI': 'LCI', 'EPR': 'EPR', 'EPRunc': 'EPRunc', 'NSM': 'NSM', 'SCE': 'SCE', 'WLR': 'WLR', 'WR2': 'WR2', 'WCI': 'WCI', 'WSE': 'WSE', 'TCD': 'TCD', });
lyr_protection_13.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Epis_14.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_protection_15.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Epis_16.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Taux_EPRman_17.set('fieldAliases', {'ObjectID': 'ObjectID', 'BaselineID': 'BaselineID', 'TransOrder': 'TransOrder', 'TransEdit': 'TransEdit', 'TransectId': 'TransectId', 'ShrCount': 'ShrCount', 'LRR': 'LRR', 'LR2': 'LR2', 'LSE': 'LSE', 'LCI': 'LCI', 'EPR': 'EPR', 'EPRunc': 'EPRunc', 'NSM': 'NSM', 'SCE': 'SCE', 'WLR': 'WLR', 'WR2': 'WR2', 'WCI': 'WCI', 'WSE': 'WSE', 'TCD': 'TCD', });
lyr_protection_18.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Epis_19.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Taux_EPRman_20.set('fieldAliases', {'ObjectID': 'ObjectID', 'BaselineID': 'BaselineID', 'TransOrder': 'TransOrder', 'TransEdit': 'TransEdit', 'TransectId': 'TransectId', 'ShrCount': 'ShrCount', 'LRR': 'LRR', 'LR2': 'LR2', 'LSE': 'LSE', 'LCI': 'LCI', 'EPR': 'EPR', 'EPRunc': 'EPRunc', 'NSM': 'NSM', 'SCE': 'SCE', 'WLR': 'WLR', 'WR2': 'WR2', 'WCI': 'WCI', 'WSE': 'WSE', 'TCD': 'TCD', });
lyr_protection_21.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Epis_22.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_HOT_SPOT_23.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SOURCE_ID': 'SOURCE_ID', 'EPR': 'EPR', 'Shape_Leng': 'Shape_Leng', 'GiZScore': 'GiZScore', 'GiPValue': 'GiPValue', 'NNeighbors': 'NNeighbors', 'Gi_Bin': 'Gi_Bin', 'hot spot': 'hot spot', });
lyr_TauxEPR_24.set('fieldAliases', {'ObjectID': 'ObjectID', 'BaselineID': 'BaselineID', 'TransOrder': 'TransOrder', 'TransEdit': 'TransEdit', 'TransectId': 'TransectId', 'ShrCount': 'ShrCount', 'LRR': 'LRR', 'LR2': 'LR2', 'LSE': 'LSE', 'LCI': 'LCI', 'EPR': 'EPR', 'EPRunc': 'EPRunc', 'NSM': 'NSM', 'SCE': 'SCE', 'WLR': 'WLR', 'WR2': 'WR2', 'WCI': 'WCI', 'WSE': 'WSE', 'TCD': 'TCD', });
lyr_Taux_EPRman_25.set('fieldAliases', {'ObjectID': 'ObjectID', 'BaselineID': 'BaselineID', 'TransOrder': 'TransOrder', 'TransEdit': 'TransEdit', 'TransectId': 'TransectId', 'ShrCount': 'ShrCount', 'LRR': 'LRR', 'LR2': 'LR2', 'LSE': 'LSE', 'LCI': 'LCI', 'EPR': 'EPR', 'EPRunc': 'EPRunc', 'NSM': 'NSM', 'SCE': 'SCE', 'WLR': 'WLR', 'WR2': 'WR2', 'WCI': 'WCI', 'WSE': 'WSE', 'TCD': 'TCD', });
lyr_Epis_26.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_protection_27.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_HOT_SPOT_28.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SOURCE_ID': 'SOURCE_ID', 'eprr_posi': 'eprr_posi', 'Shape_Leng': 'Shape_Leng', 'GiZScore': 'GiZScore', 'GiPValue': 'GiPValue', 'NNeighbors': 'NNeighbors', 'Gi_Bin': 'Gi_Bin', 'hot spot': 'hot spot', });
lyr_Taux_EPRman_29.set('fieldAliases', {'ObjectID': 'ObjectID', 'BaselineID': 'BaselineID', 'TransOrder': 'TransOrder', 'TransEdit': 'TransEdit', 'TransectId': 'TransectId', 'ShrCount': 'ShrCount', 'LRR': 'LRR', 'LR2': 'LR2', 'LSE': 'LSE', 'LCI': 'LCI', 'EPR': 'EPR', 'EPRunc': 'EPRunc', 'NSM': 'NSM', 'SCE': 'SCE', 'WLR': 'WLR', 'WR2': 'WR2', 'WCI': 'WCI', 'WSE': 'WSE', 'TCD': 'TCD', });
lyr_2025_30.set('fieldAliases', {'Id': 'Id', 'Date_': 'Date_', 'uncy': 'uncy', 'Year_': 'Year_', });
lyr_2020_31.set('fieldAliases', {'Id': 'Id', 'Date_': 'Date_', 'uncy': 'uncy', 'Year_': 'Year_', });
lyr_2015_32.set('fieldAliases', {'Id': 'Id', 'Date_': 'Date_', 'uncy': 'uncy', 'Year_': 'Year_', });
lyr_2010_33.set('fieldAliases', {'Id': 'Id', 'Date_': 'Date_', 'uncy': 'uncy', 'Year_': 'Year_', });
lyr_2005_34.set('fieldAliases', {'Id': 'Id', 'Date_': 'Date_', 'uncy': 'uncy', 'Year_': 'Year_', });
lyr_2000_35.set('fieldAliases', {'Id': 'Id', 'Date_': 'Date_', 'uncy': 'uncy', 'Year_': 'Year_', });
lyr_1990_36.set('fieldAliases', {'Id': 'Id', 'Date_': 'Date_', 'uncy': 'uncy', 'Year_': 'Year_', });
lyr_1984_37.set('fieldAliases', {'Id': 'Id', 'Date': 'Date', 'Uncy': 'Uncy', 'year': 'year', });
lyr_Superficie_accumulekm_0.set('fieldImages', {'FID_SUPERF': 'TextEdit', 'Id': 'Range', 'AREA': 'TextEdit', 'FID_SUPE_1': 'TextEdit', 'Id_1': 'Range', 'area_1': 'TextEdit', 'AREA_12': 'TextEdit', 'TYPE': 'TextEdit', 'SUP___': 'TextEdit', 'Etat': 'TextEdit', });
lyr_Superficie_rodekm_1.set('fieldImages', {'FID_SUPERF': 'TextEdit', 'Id': 'Range', 'AREA': 'TextEdit', 'FID_SUPE_1': 'TextEdit', 'Id_1': 'Range', 'area_1': 'TextEdit', 'AREA_12': 'TextEdit', 'TYPE': 'TextEdit', 'SUP___': 'TextEdit', 'Etat': 'TextEdit', });
lyr_Cantons_Littoral_3.set('fieldImages', {'FID_ZE': 'TextEdit', 'FID_Zone_d': 'TextEdit', 'fid_': 'TextEdit', 'region_id': 'TextEdit', 'region_nom': 'TextEdit', 'prefecture': 'TextEdit', 'prefectu_1': 'TextEdit', 'commune_id': 'TextEdit', 'commune_no': 'TextEdit', 'canton_id': 'TextEdit', 'canton_nom': 'TextEdit', 'canton_n_1': 'TextEdit', 'grand_lome': 'TextEdit', 'Duplicata': 'TextEdit', 'FID_zone_e': 'TextEdit', 'Id': 'Range', 'FID_Zone_1': 'TextEdit', 'fid1': 'TextEdit', 'region_i_1': 'TextEdit', 'region_n_1': 'TextEdit', 'prefectu_2': 'TextEdit', 'prefectu_3': 'TextEdit', 'commune__1': 'TextEdit', 'commune__2': 'TextEdit', 'canton_i_1': 'TextEdit', 'canton_n_2': 'TextEdit', 'canton_n_3': 'TextEdit', 'grand_lo_1': 'TextEdit', 'Duplicat_1': 'TextEdit', });
lyr_TOGO_4.set('fieldImages', {'FID_TOGO_D': 'TextEdit', 'Id': 'Range', 'AREA': 'TextEdit', 'AREA_1': 'TextEdit', 'FID_2025': 'TextEdit', 'Id_1': 'Range', 'TYPE': 'TextEdit', });
lyr_protection_5.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_Epis_6.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_HOT_SPOT_7.set('fieldImages', {'OBJECTID': 'TextEdit', 'SOURCE_ID': 'TextEdit', 'posi': 'TextEdit', 'Shape_Leng': 'TextEdit', 'GiZScore': 'TextEdit', 'GiPValue': 'TextEdit', 'NNeighbors': 'TextEdit', 'Gi_Bin': 'TextEdit', 'hot spot': 'TextEdit', });
lyr_Taux_LRRman_8.set('fieldImages', {'ObjectID': 'TextEdit', 'BaselineID': 'TextEdit', 'TransOrder': 'TextEdit', 'TransEdit': 'TextEdit', 'TransectId': 'TextEdit', 'ShrCount': 'TextEdit', 'LRR': 'TextEdit', 'LR2': 'TextEdit', 'LCI': 'TextEdit', 'LSE': 'TextEdit', 'EPR': 'TextEdit', 'EPRunc': 'TextEdit', 'NSM': 'TextEdit', 'SCE': 'TextEdit', 'WLR': 'TextEdit', 'WR2': 'TextEdit', 'WCI': 'TextEdit', 'WSE': 'TextEdit', 'TCD': 'TextEdit', });
lyr_protection_9.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_Epis_10.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_HOT_SPOT_11.set('fieldImages', {'SOURCE_ID': 'TextEdit', 'EPR': 'TextEdit', 'GiZScore': 'TextEdit', 'GiPValue': 'TextEdit', 'NNeighbors': 'TextEdit', 'Gi_Bin': 'TextEdit', 'hot spot': 'TextEdit', });
lyr_Taux_EPRman_12.set('fieldImages', {'ObjectID': 'TextEdit', 'BaselineID': 'TextEdit', 'TransOrder': 'TextEdit', 'TransEdit': 'TextEdit', 'TransectId': 'TextEdit', 'ShrCount': 'TextEdit', 'LRR': 'TextEdit', 'LR2': 'TextEdit', 'LSE': 'TextEdit', 'LCI': 'TextEdit', 'EPR': 'TextEdit', 'EPRunc': 'TextEdit', 'NSM': 'TextEdit', 'SCE': 'TextEdit', 'WLR': 'TextEdit', 'WR2': 'TextEdit', 'WCI': 'TextEdit', 'WSE': 'TextEdit', 'TCD': 'TextEdit', });
lyr_protection_13.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_Epis_14.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_protection_15.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_Epis_16.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_Taux_EPRman_17.set('fieldImages', {'ObjectID': 'TextEdit', 'BaselineID': 'TextEdit', 'TransOrder': 'TextEdit', 'TransEdit': 'TextEdit', 'TransectId': 'TextEdit', 'ShrCount': 'TextEdit', 'LRR': 'TextEdit', 'LR2': 'TextEdit', 'LSE': 'TextEdit', 'LCI': 'TextEdit', 'EPR': 'TextEdit', 'EPRunc': 'TextEdit', 'NSM': 'TextEdit', 'SCE': 'TextEdit', 'WLR': 'TextEdit', 'WR2': 'TextEdit', 'WCI': 'TextEdit', 'WSE': 'TextEdit', 'TCD': 'TextEdit', });
lyr_protection_18.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_Epis_19.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_Taux_EPRman_20.set('fieldImages', {'ObjectID': 'TextEdit', 'BaselineID': 'TextEdit', 'TransOrder': 'TextEdit', 'TransEdit': 'TextEdit', 'TransectId': 'TextEdit', 'ShrCount': 'TextEdit', 'LRR': 'TextEdit', 'LR2': 'TextEdit', 'LSE': 'TextEdit', 'LCI': 'TextEdit', 'EPR': 'TextEdit', 'EPRunc': 'TextEdit', 'NSM': 'TextEdit', 'SCE': 'TextEdit', 'WLR': 'TextEdit', 'WR2': 'TextEdit', 'WCI': 'TextEdit', 'WSE': 'TextEdit', 'TCD': 'TextEdit', });
lyr_protection_21.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_Epis_22.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_HOT_SPOT_23.set('fieldImages', {'OBJECTID': 'TextEdit', 'SOURCE_ID': 'TextEdit', 'EPR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'GiZScore': 'TextEdit', 'GiPValue': 'TextEdit', 'NNeighbors': 'TextEdit', 'Gi_Bin': 'TextEdit', 'hot spot': 'TextEdit', });
lyr_TauxEPR_24.set('fieldImages', {'ObjectID': 'TextEdit', 'BaselineID': 'TextEdit', 'TransOrder': 'TextEdit', 'TransEdit': 'TextEdit', 'TransectId': 'TextEdit', 'ShrCount': 'TextEdit', 'LRR': 'TextEdit', 'LR2': 'TextEdit', 'LSE': 'TextEdit', 'LCI': 'TextEdit', 'EPR': 'TextEdit', 'EPRunc': 'TextEdit', 'NSM': 'TextEdit', 'SCE': 'TextEdit', 'WLR': 'TextEdit', 'WR2': 'TextEdit', 'WCI': 'TextEdit', 'WSE': 'TextEdit', 'TCD': 'TextEdit', });
lyr_Taux_EPRman_25.set('fieldImages', {'ObjectID': 'TextEdit', 'BaselineID': 'TextEdit', 'TransOrder': 'TextEdit', 'TransEdit': 'TextEdit', 'TransectId': 'TextEdit', 'ShrCount': 'TextEdit', 'LRR': 'TextEdit', 'LR2': 'TextEdit', 'LSE': 'TextEdit', 'LCI': 'TextEdit', 'EPR': 'TextEdit', 'EPRunc': 'TextEdit', 'NSM': 'TextEdit', 'SCE': 'TextEdit', 'WLR': 'TextEdit', 'WR2': 'TextEdit', 'WCI': 'TextEdit', 'WSE': 'TextEdit', 'TCD': 'TextEdit', });
lyr_Epis_26.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_protection_27.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_HOT_SPOT_28.set('fieldImages', {'OBJECTID': 'TextEdit', 'SOURCE_ID': 'TextEdit', 'eprr_posi': 'TextEdit', 'Shape_Leng': 'TextEdit', 'GiZScore': 'TextEdit', 'GiPValue': 'TextEdit', 'NNeighbors': 'TextEdit', 'Gi_Bin': 'TextEdit', 'hot spot': 'TextEdit', });
lyr_Taux_EPRman_29.set('fieldImages', {'ObjectID': 'TextEdit', 'BaselineID': 'TextEdit', 'TransOrder': 'TextEdit', 'TransEdit': 'TextEdit', 'TransectId': 'TextEdit', 'ShrCount': 'TextEdit', 'LRR': 'TextEdit', 'LR2': 'TextEdit', 'LSE': 'TextEdit', 'LCI': 'TextEdit', 'EPR': 'TextEdit', 'EPRunc': 'TextEdit', 'NSM': 'TextEdit', 'SCE': 'TextEdit', 'WLR': 'TextEdit', 'WR2': 'TextEdit', 'WCI': 'TextEdit', 'WSE': 'TextEdit', 'TCD': 'TextEdit', });
lyr_2025_30.set('fieldImages', {'Id': '', 'Date_': '', 'uncy': '', 'Year_': '', });
lyr_2020_31.set('fieldImages', {'Id': '', 'Date_': '', 'uncy': '', 'Year_': '', });
lyr_2015_32.set('fieldImages', {'Id': 'Range', 'Date_': 'DateTime', 'uncy': 'TextEdit', 'Year_': 'TextEdit', });
lyr_2010_33.set('fieldImages', {'Id': 'Range', 'Date_': 'DateTime', 'uncy': 'TextEdit', 'Year_': 'TextEdit', });
lyr_2005_34.set('fieldImages', {'Id': '', 'Date_': '', 'uncy': '', 'Year_': '', });
lyr_2000_35.set('fieldImages', {'Id': '', 'Date_': '', 'uncy': '', 'Year_': '', });
lyr_1990_36.set('fieldImages', {'Id': '', 'Date_': '', 'uncy': '', 'Year_': '', });
lyr_1984_37.set('fieldImages', {'Id': 'Range', 'Date': 'TextEdit', 'Uncy': 'TextEdit', 'year': 'TextEdit', });
lyr_Superficie_accumulekm_0.set('fieldLabels', {'FID_SUPERF': 'no label', 'Id': 'no label', 'AREA': 'no label', 'FID_SUPE_1': 'no label', 'Id_1': 'no label', 'area_1': 'no label', 'AREA_12': 'no label', 'TYPE': 'no label', 'SUP___': 'inline label - always visible', 'Etat': 'inline label - always visible', });
lyr_Superficie_rodekm_1.set('fieldLabels', {'FID_SUPERF': 'no label', 'Id': 'no label', 'AREA': 'no label', 'FID_SUPE_1': 'no label', 'Id_1': 'no label', 'area_1': 'no label', 'AREA_12': 'no label', 'TYPE': 'no label', 'SUP___': 'inline label - always visible', 'Etat': 'inline label - always visible', });
lyr_Cantons_Littoral_3.set('fieldLabels', {'FID_ZE': 'no label', 'FID_Zone_d': 'no label', 'fid_': 'no label', 'region_id': 'no label', 'region_nom': 'no label', 'prefecture': 'no label', 'prefectu_1': 'no label', 'commune_id': 'no label', 'commune_no': 'no label', 'canton_id': 'no label', 'canton_nom': 'inline label - always visible', 'canton_n_1': 'no label', 'grand_lome': 'no label', 'Duplicata': 'no label', 'FID_zone_e': 'no label', 'Id': 'no label', 'FID_Zone_1': 'no label', 'fid1': 'no label', 'region_i_1': 'no label', 'region_n_1': 'no label', 'prefectu_2': 'no label', 'prefectu_3': 'no label', 'commune__1': 'no label', 'commune__2': 'no label', 'canton_i_1': 'no label', 'canton_n_2': 'no label', 'canton_n_3': 'no label', 'grand_lo_1': 'no label', 'Duplicat_1': 'no label', });
lyr_TOGO_4.set('fieldLabels', {'FID_TOGO_D': 'no label', 'Id': 'no label', 'AREA': 'no label', 'AREA_1': 'no label', 'FID_2025': 'no label', 'Id_1': 'no label', 'TYPE': 'no label', });
lyr_protection_5.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Epis_6.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_HOT_SPOT_7.set('fieldLabels', {'OBJECTID': 'no label', 'SOURCE_ID': 'no label', 'posi': 'no label', 'Shape_Leng': 'no label', 'GiZScore': 'no label', 'GiPValue': 'no label', 'NNeighbors': 'no label', 'Gi_Bin': 'no label', 'hot spot': 'inline label - always visible', });
lyr_Taux_LRRman_8.set('fieldLabels', {'ObjectID': 'no label', 'BaselineID': 'no label', 'TransOrder': 'no label', 'TransEdit': 'no label', 'TransectId': 'no label', 'ShrCount': 'no label', 'LRR': 'inline label - always visible', 'LR2': 'no label', 'LCI': 'no label', 'LSE': 'no label', 'EPR': 'no label', 'EPRunc': 'no label', 'NSM': 'inline label - always visible', 'SCE': 'no label', 'WLR': 'no label', 'WR2': 'no label', 'WCI': 'no label', 'WSE': 'no label', 'TCD': 'no label', });
lyr_protection_9.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Epis_10.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_HOT_SPOT_11.set('fieldLabels', {'SOURCE_ID': 'no label', 'EPR': 'inline label - always visible', 'GiZScore': 'no label', 'GiPValue': 'no label', 'NNeighbors': 'no label', 'Gi_Bin': 'no label', 'hot spot': 'inline label - always visible', });
lyr_Taux_EPRman_12.set('fieldLabels', {'ObjectID': 'no label', 'BaselineID': 'no label', 'TransOrder': 'no label', 'TransEdit': 'no label', 'TransectId': 'no label', 'ShrCount': 'no label', 'LRR': 'no label', 'LR2': 'no label', 'LSE': 'no label', 'LCI': 'no label', 'EPR': 'inline label - always visible', 'EPRunc': 'no label', 'NSM': 'inline label - always visible', 'SCE': 'no label', 'WLR': 'no label', 'WR2': 'no label', 'WCI': 'no label', 'WSE': 'no label', 'TCD': 'no label', });
lyr_protection_13.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Epis_14.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_protection_15.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Epis_16.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Taux_EPRman_17.set('fieldLabels', {'ObjectID': 'no label', 'BaselineID': 'no label', 'TransOrder': 'no label', 'TransEdit': 'no label', 'TransectId': 'no label', 'ShrCount': 'no label', 'LRR': 'no label', 'LR2': 'no label', 'LSE': 'no label', 'LCI': 'no label', 'EPR': 'inline label - always visible', 'EPRunc': 'no label', 'NSM': 'inline label - always visible', 'SCE': 'no label', 'WLR': 'no label', 'WR2': 'no label', 'WCI': 'no label', 'WSE': 'no label', 'TCD': 'no label', });
lyr_protection_18.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Epis_19.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Taux_EPRman_20.set('fieldLabels', {'ObjectID': 'no label', 'BaselineID': 'no label', 'TransOrder': 'no label', 'TransEdit': 'no label', 'TransectId': 'no label', 'ShrCount': 'no label', 'LRR': 'no label', 'LR2': 'no label', 'LSE': 'no label', 'LCI': 'no label', 'EPR': 'inline label - always visible', 'EPRunc': 'no label', 'NSM': 'inline label - always visible', 'SCE': 'no label', 'WLR': 'no label', 'WR2': 'no label', 'WCI': 'no label', 'WSE': 'no label', 'TCD': 'no label', });
lyr_protection_21.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Epis_22.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_HOT_SPOT_23.set('fieldLabels', {'OBJECTID': 'no label', 'SOURCE_ID': 'no label', 'EPR': 'inline label - always visible', 'Shape_Leng': 'no label', 'GiZScore': 'no label', 'GiPValue': 'no label', 'NNeighbors': 'no label', 'Gi_Bin': 'no label', 'hot spot': 'inline label - always visible', });
lyr_TauxEPR_24.set('fieldLabels', {'ObjectID': 'no label', 'BaselineID': 'no label', 'TransOrder': 'no label', 'TransEdit': 'no label', 'TransectId': 'no label', 'ShrCount': 'no label', 'LRR': 'no label', 'LR2': 'no label', 'LSE': 'no label', 'LCI': 'no label', 'EPR': 'inline label - always visible', 'EPRunc': 'no label', 'NSM': 'inline label - always visible', 'SCE': 'no label', 'WLR': 'no label', 'WR2': 'no label', 'WCI': 'no label', 'WSE': 'no label', 'TCD': 'no label', });
lyr_Taux_EPRman_25.set('fieldLabels', {'ObjectID': 'no label', 'BaselineID': 'no label', 'TransOrder': 'no label', 'TransEdit': 'no label', 'TransectId': 'no label', 'ShrCount': 'no label', 'LRR': 'no label', 'LR2': 'no label', 'LSE': 'no label', 'LCI': 'no label', 'EPR': 'inline label - always visible', 'EPRunc': 'no label', 'NSM': 'inline label - always visible', 'SCE': 'no label', 'WLR': 'no label', 'WR2': 'no label', 'WCI': 'no label', 'WSE': 'no label', 'TCD': 'no label', });
lyr_Epis_26.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_protection_27.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_HOT_SPOT_28.set('fieldLabels', {'OBJECTID': 'no label', 'SOURCE_ID': 'no label', 'eprr_posi': 'no label', 'Shape_Leng': 'no label', 'GiZScore': 'no label', 'GiPValue': 'no label', 'NNeighbors': 'no label', 'Gi_Bin': 'no label', 'hot spot': 'no label', });
lyr_Taux_EPRman_29.set('fieldLabels', {'ObjectID': 'no label', 'BaselineID': 'no label', 'TransOrder': 'no label', 'TransEdit': 'no label', 'TransectId': 'no label', 'ShrCount': 'no label', 'LRR': 'no label', 'LR2': 'no label', 'LSE': 'no label', 'LCI': 'no label', 'EPR': 'inline label - always visible', 'EPRunc': 'no label', 'NSM': 'inline label - always visible', 'SCE': 'no label', 'WLR': 'no label', 'WR2': 'no label', 'WCI': 'no label', 'WSE': 'no label', 'TCD': 'no label', });
lyr_2025_30.set('fieldLabels', {'Id': 'no label', 'Date_': 'no label', 'uncy': 'no label', 'Year_': 'inline label - always visible', });
lyr_2020_31.set('fieldLabels', {'Id': 'no label', 'Date_': 'no label', 'uncy': 'no label', 'Year_': 'inline label - always visible', });
lyr_2015_32.set('fieldLabels', {'Id': 'no label', 'Date_': 'no label', 'uncy': 'no label', 'Year_': 'inline label - always visible', });
lyr_2010_33.set('fieldLabels', {'Id': 'no label', 'Date_': 'no label', 'uncy': 'no label', 'Year_': 'inline label - always visible', });
lyr_2005_34.set('fieldLabels', {'Id': 'no label', 'Date_': 'no label', 'uncy': 'no label', 'Year_': 'inline label - always visible', });
lyr_2000_35.set('fieldLabels', {'Id': 'no label', 'Date_': 'no label', 'uncy': 'no label', 'Year_': 'inline label - always visible', });
lyr_1990_36.set('fieldLabels', {'Id': 'no label', 'Date_': 'no label', 'uncy': 'no label', 'Year_': 'inline label - always visible', });
lyr_1984_37.set('fieldLabels', {'Id': 'no label', 'Date': 'no label', 'Uncy': 'no label', 'year': 'inline label - always visible', });
lyr_1984_37.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});