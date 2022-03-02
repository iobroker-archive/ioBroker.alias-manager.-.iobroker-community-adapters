//Alias-Manager - Copyright (c) by Sebatian Bormann
//Please visit https://github.com/sbormann/ioBroker.adapter-manager for licence-agreement and further information

//Settings
var defaultDatapointRoles = {
	string: [
		"state",
		"adapter.messagebox",
		"adapter.wakeup",
		"date",
		"date.end",
		"date.start",
		"html",
		"info.address",
		"info.display",
		"info.ip",
		"info.mac",
		"info.name",
		"info.port",
		"info.standby",
		"info.status",
		"json",
		"text",
		"text.url",
		"text.phone",
		"url",
		"url.audio",
		"url.blank",
		"url.cam",
		"url.icon",
		"url.same",
		
		"[media]",
		"media.add",
		"media.album",
		"media.artist",
		"media.bitrate",
		"media.broadcastDate",
		"media.clear",
		"media.content",
		"media.cover",
		"media.cover.big",
		"media.cover.small",
		"media.date",
		"media.duration.text",
		"media.elapsed.text",
		"media.episode",
		"media.grenre",
		"media.input",
		"media.playid",
		"media.playlist",
		"media.season",
		"media.title",
		"media.title.next",
		"media.track",
		"media.tts",
		"media.url",
		"media.url.announcement",
		"media.browser",
		
		"[weather]",
		"location",
		"weather.chart.url",
		"weather.chart.url.forecast",
		"weather.direction.wind",
		"weather.direction.wind.forecast.0",
		"weather.html",
		"weather.icon",
		"weather.icon.forecast.1",
		"weather.icon.name",
		"weather.icon.wind",
		"weather.json",
		"weather.state",
		"weather.state.forecast.0",
		"weather.state.forecast.1",
		"weather.tile",
		"weather.tile.forecast.0",
		"weather.tile.short",
		"weather.type"
		],
	number: [
		"state",
		"date",
		
		"[level - to set a number value]",
		"level",
		"level.blind",
		"level.co2",
		"level.color.blue",
		"level.color.green",
		"level.color.hue",
		"level.color.luminance",
		"level.color.red",
		"level.color.rgb",
		"level.color.saturation",
		"level.color.temperature",
		"level.color.white",
		"level.curtain",
		"level.dimmer",
		"level.temperature",
		"level.tilt",
		"level.timer",
		"level.timer.sleep",
		"level.valve",
		"level.volume",
		"level.volume.group",
		
		"[value - readonly]",
		"value",
		"value.battery",
		"value.blind",
		"value.brightness",
		"value.current",
		"value.curtain",
		"value.default",
		"value.direction",
		"value.distance",
		"value.distance.visibility",
		"value.gps",
		"value.gps.elevation",
		"value.gps.latitude",
		"value.gps.longitude",
		"value.humidity",
		"value.interval",
		"value.lock",
		"value.max",
		"value.min",
		"value.power.consumption",
		"value.pressure",
		"value.severity",
		"value.speed",
		"value.sun.azimuth",
		"value.sun.elevation",
		"value.temperature",
		"value.tilt",
		"value.time",
		"value.valve",
		"value.voltage",
		"value.waring",
		"value.window",

		"[media]",
		"level.bass",
		"level.trebble",
		"media.duration",
		"media.elapsed",
		"media.input",
		"media.jump",
		"media.mode.shuffle",
		"media.playid",
		"media.seek",
		"media.state",

		"[weather]",
		"date.forecast.1",
		"date.sunrise",
		"date.sunset",
		"dayofweek",
		"value.clouds",
		"value.direction.max.wind",
		"value.direction.min.wind",
		"value.direction.wind",
		"value.direction.wind.forecast.0",
		"value.direction.wind.forecast.1",
		"value.humidity",
		"value.humidity.max",
		"value.humidity.min",
		"value.precipitation",
		"value.precipitation.day.forecast.0",
		"value.precipitation.forecast.0",
		"value.precipitation.forecast.1",
		"value.precipitation.hour",
		"value.precipitation.night.forecast.0",
		"value.precipitation.today",
		"value.pressure",
		"value.pressure.forecast.0",
		"value.pressure.forecast.1",
		"value.radiation",
		"value.rain",
		"value.rain.hour",
		"value.rain.today",
		"value.snow",
		"value.snow.hour",
		"value.snow.today",
		"value.snowline",
		"value.speed.max.wind",
		"value.speed.min.wind",
		"value.speed.wind",
		"value.speed.wind.forecast.0",
		"value.speed.wind.forecast.1",
		"value.temperature",
		"value.temperature.dewpoint",
		"value.temperature.feelslike",
		"value.temperature.max",
		"value.temperature.max.forecast.0",
		"value.temperature.max.forecast.1",
		"value.temperature.min",
		"value.temperature.min.forecast.0",
		"value.temperature.min.forecast.1",
		"value.temperature.windchill",
		"value.uv"
	],
	boolean: [
		"state",

		"[button]",
		"button", 
		"button.long", 
		"button.mode", 
		"button.mode.auto", 
		"button.mode.manual", 
		"button.mode.silent", 
		"button.open.door", 
		"button.open.window", 
		"button.start", 
		"button.stop", 
		
		"[indicator - belongs to a main datapoint]", 
		"indicator", 
		"indicator.alarm", 
		"indicator.alarm.fire", 
		"indicator.alarm.flood", 
		"indicator.alarm.secure", 
		"indicator.connected", 
		"indicator.error", 
		"indicator.lowbat", 
		"indicator.maintenance", 
		"indicator.maintenance.alarm", 
		"indicator.maintenance.lowbat", 
		"indicator.maintenance.unreach", 
		"indicator.reachable", 
		"indicator.working", 
		
		"[sensor - is a main datapoint]",
		"sensor.alarm",
		"sensor.alarm.fire",
		"sensor.alarm.flood",
		"sensor.alarm.power",
		"sensor.alarm.secure",
		"sensor.door",
		"sensor.light",
		"sensor.lock",
		"sensor.motion",
		"sensor.noise",
		"sensor.rain",
		"sensor.window",

		"[switch]",
		"switch", 
		"switch.boost", 
		"switch.comfort", 
		"switch.enable", 
		"switch.light", 
		"switch.lock", 
		"switch.lock.door", 
		"switch.lock.window", 
		"switch.mode", 
		"switch.mode.auto", 
		"switch.mode.color", 
		"switch.mode.manual", 
		"switch.mode.moonlight", 
		"switch.mode.silent", 
		"switch.power", 

		"[media]",
		"button.fastforward",
		"button.fastreverse",
		"button.forward",
		"button.next",
		"button.pause",
		"button.play",
		"button.prev",
		"button.reverse",
		"button.stop",
		"button.volume.down",
		"button.volume.up",
		"media.mode.repeat",
		"media.mute",
		"media.mute.group",
		"switch.pause",
		"switch.power.zone"
	],
	array: [
		"list"
	]
}
var defaultMainRoles = [
	"unknown",
		"airCondition",
	"blind",
	"button",
		"buttonSensor",
	"camera",
	"ct",
	"dimmer",
	"door",
	"fireAlarm",
	"floodAlarm",
	"gate",
	"hue",
	"humidity",
	"image",
	"info",
	"instance",
	"light",
	"location",
	"lock",
	"media",
	"motion",
	"rgb",
	"rgbSingle",
	"slider",
	"socket",
	"temperature",
	"thermostat",
	"url",
		"vacuumCleaner",
	"valve",
	"volume",
	"volumeGroup",
	"warning",
	"weatherCurrent",
	"weatherForecast",
	"window",
	"windowTilt"
]

//Declarations
const udef = 'undefined';
var iobrokerObjects = {};
var iobrokerObjectsReady = false;
var iobrokerObjectsReadyFunctions = [];
var modalZIndexCount = 2000;
var isReact = false;

//++++++++++ GLOBAL FUNCTIONS ++++++++++
function initDialog(id, callback) {
	var $dialog = $('#' + id);
	if (!$dialog.data('inited')) {
		$dialog.data('inited', true);
		$dialog.modal({
			dismissible: false
		});
		$dialog.find('.btn-set').on('click', function () {
			var $dialog = $('#' + $(this).data('dialogid'));
			var callback = $dialog.data('callback');
			if (typeof callback === 'function') callback();
			$dialog.data('callback', null);
		});
	}
	$dialog.find('.btn-set').data('dialogid', id);
	$dialog.data('callback', callback);
}

var selectId;
var selectIdImgPath = '../../lib/css/fancytree/';
function initSelectId(callback) {
	setTimeout(function(){ $('#dialogSelectId').css('z-index', modalZIndexCount++); }, 100);
	if (selectId) {
		return callback(selectId);
	}
	var options = {
		noMultiselect: true,
		imgPath:       selectIdImgPath,
		filter:        {type: 'state'},
		name:          'scenes-select-state',
		texts: {
			select:          _('Select'),
			cancel:          _('Cancel'),
			all:             _('All'),
			id:              _('ID'),
			name:            _('Name'),
			role:            _('Role'),
			room:            _('Room'),
			value:           _('Value'),
			selectid:        _('Select ID'),
			from:            _('From'),
			lc:              _('Last changed'),
			ts:              _('Time stamp'),
			wait:            _('Processing...'),
			ack:             _('Acknowledged'),
			selectAll:       _('Select all'),
			unselectAll:     _('Deselect all'),
			invertSelection: _('Invert selection')
		},
		columns: ['image', 'name', 'role', 'room']
	};
	var toDo = function(){
		options.objects = iobrokerObjects;
		selectId = $('#dialogSelectId').selectId('init', options);
		callback(selectId);
	}
	if (iobrokerObjectsReady) {
		toDo();
	} else {
		iobrokerObjectsReadyFunctions.push(toDo); 
	}
}

function tryParseJSON(jsonString){ //Returns parsed object or false, if jsonString is not valid
    try {
        var o = JSON.parse(jsonString);
        // Handle non-exception-throwing cases:
        // Neither JSON.parse(false) or JSON.parse(1234) throw errors, hence the type-checking,
        // but... JSON.parse(null) returns null, and typeof null === "object",
        // so we must check for that, too. Thankfully, null is falsey, so this suffices:
        if (o && typeof o === "object") {
            return o;
        }
    }
    catch (e) { }
    return false;
};

function removeDuplicates(array) { //Removes duplicates from an array
    var seen = [];
    return array.filter(function(item) {
		if(seen.indexOf(JSON.stringify(item)) > -1){
			return false;
		} else {
			seen.push(JSON.stringify(item));
			return true;
		}
    });
}

function addCustomCSS(customCSS, customID){
	customID = customID || "default";
	$('head').append('<style class="customCSS_' + customID + '">' + customCSS + '</style>');
}

function removeCustomCSS(customID){
	customID = customID || "default";
	$('.customCSS_' + customID).remove();
}

function multiReplace(string, replacementObj){ //Replaces multiple replacements in string. replacementObj = [{searchValue: "", newValue: ""}, ...]
	replacementObj.forEach(function(replacement){
		var regex = new RegExp(replacement.searchValue, "g");
		string = string.replace(regex, replacement.newValue);
	});
	return string;
}

//Combobox
var $enhanceTextInputToComboboxActualTarget;
function enhanceTextInputToCombobox(targetInput, options, iconsFromOption, onSelect){
	//targetInput - string - selector for text-input-field to enhance
	//options - string - "value1/caption1/icon1;value2/caption2/icon2;[optgroup-caption];value3/caption3/icon3;..."
	//iconsFromOption - boolean - if true, the values will be used to generate links to icons (\ will be replaced by / an link will be preceded), if no icon is given in options
	//onSelect - function - function that will be called with the argument (value), if a value is selected
	$(targetInput).one('blur', function(){
		var that = this;
		setTimeout(function(){var _that = that; _that.scrollLeft = 100000;}, 10);
	});
	$(targetInput).trigger('blur');
	var lastTargetInput;
	$(targetInput).each(function(){
		if(!$(this).parent('div').hasClass('combobox')){
			$(this).add('label').wrap("<div class='combobox'></div>");
			$(this).after("<a class='comboboxDropdownTrigger waves-effect waves-teal btn-small btn-flat' data-target='dropdown_" + encodeURIComponent(targetInput) + "' href='#' onclick='console.log(\"Combobox dropdown clicked\"); $enhanceTextInputToComboboxActualTarget = $(this).prevAll(\"input\"); enhanceTextInputToComboboxScrollDropdownTo($(this).data(\"target\"), $(this).prevAll(\"input\").val());'><i class='material-icons comboboxDropdownTriggerArrow' style='font-size: 25px;'>arrow_drop_down</i></a>");
		}
		$(this).data('combobox-onselect', onSelect);			
		lastTargetInput = this; 
	});
	options = options || $(lastTargetInput).data('options') || "";
	options = options.split(";");
	$("ul[id='dropdown_" + encodeURIComponent(targetInput) + "']").remove(); //If there was an old dropdownlist remove it
	var comboboxContent = "<ul id='dropdown_" + encodeURIComponent(targetInput) + "' class='dropdown-content'>";
	options.forEach(function(option){
		if (option.substring(0,1) == "[" && option.substr(-1) == "]"){ //Optgroup
			var caption = _(option.substring(1, option.length - 1));
			comboboxContent += "	<li class='divider' style='padding: 14px 4px 30px 4px; color:grey;' tabindex='-1'>";
			comboboxContent += "		" + caption + "&nbsp;";
			comboboxContent += "	</li>";				
		} else { //Normal option
			var optionParts = option.split("/");
			var value = encodeURIComponent(optionParts[0]);
			var caption = "";
			if (optionParts.length > 1){
				caption = optionParts[1];				
			} else {
				caption = optionParts[0];
			}
			var icon = "";
			if (optionParts.length > 2){
				icon = optionParts[2];
			} else if (iconsFromOption){
				icon = option.split("/")[0].replace(/\\/g, "/").substring(1) || "";
				if (icon != "") icon = link + icon;
			}
			comboboxContent += "	<li data-value='" + value + "'>";
			comboboxContent += "		<a href='#!'>";
			if (icon != ""){
				comboboxContent += "		<img src='" + icon + "' style='display: block; margin-bottom: 5px; min-width: 40px; max-width: 40px; max-height: 40px; width: auto; height: auto;'>";
			}
			comboboxContent += "			" + caption + "&nbsp;";
			comboboxContent += "		</a>";
			comboboxContent += "	</li>";				
		}
	});
	comboboxContent += "</ul>";
	$(lastTargetInput).after(comboboxContent);
	$('.comboboxDropdownTrigger').dropdown({alignment: 'right', constrainWidth: false, onItemClick: function(event){
		enhanceTextInputToComboboxEntryToInput($(event).data('value'));
	}});
}
function enhanceTextInputToComboboxScrollDropdownTo(dropdownlist, value){
	var $dropdownlist = $("ul[id='" + dropdownlist + "']");
	setTimeout(function(){
		var _$dropdownlist = $dropdownlist;
		_$dropdownlist.scrollTop(0);
	}, 15);
	setTimeout(function(){
		var _dropdownlist = dropdownlist;
		var _$dropdownlist = $dropdownlist;
		$("ul[id='" + _dropdownlist + "'] li").each(function(){
			$(this).removeClass('grey lighten-3');
			if ($(this).data('value') == encodeURIComponent((value || "").replace(/\//g, "\\"))){
				$(this).addClass('grey lighten-3');
				_$dropdownlist.scrollTop(_$dropdownlist.scrollTop() + $(this).position().top); 
			}
		});
	}, 300);
}
function enhanceTextInputToComboboxEntryToInput(value){
	var onSelect = $enhanceTextInputToComboboxActualTarget.data('combobox-onselect');
	if(decodeURIComponent(value).substring(0, 10) == "[VARIABLE]"){
		var variable = "";
		if(decodeURIComponent(decodeURIComponent(value)).indexOf("{}") > -1) {
			variable = prompt(_("Please enter datapoint id") + ":");
			if (variable == "") variable = null;
		}
		if(variable !== null){
			value = decodeURIComponent(decodeURIComponent(value).replace("[VARIABLE]", "")).replace("{}", "{" + variable + "}");
			$enhanceTextInputToComboboxActualTarget.val(value).trigger('change').trigger('blur');
			if(onSelect) onSelect(value);
		}
	} else {
		value = decodeURIComponent(value).replace(/\\/g, "/");
		$enhanceTextInputToComboboxActualTarget.val(value).trigger('change').trigger('blur');
		if(onSelect) onSelect(value);
	}
}

//Objects
function getCommonName(object){
	var name = false;
	if(object && typeof object.common != udef && typeof object.common.name != udef){
		if(typeof object.common.name == "object" && typeof object.common.name[systemLang] != udef){
			name = object.common.name[systemLang];
		} else if(typeof object.common.name == "object" && typeof object.common.name["en"] != udef){
			name = object.common.name["en"];
		} else if (typeof object.common.name == "string") {
			name = object.common.name;
		}
	}
	return name;
}

//Aliases
var aliases = {};
function loadAliases(callback){
	console.log("Loading aliases...");
	getAliases('', function(error, result){
		if(!error && result){
			aliases = result;
			console.log("Aliases ready.");
		} else {
			if(error) console.log("Error getting aliases: " + error); else console.log("There are no Aliases");
			$('#aliasesSelectedAliasProgress').hide();
		}
		if(callback) callback();
	});	
}
function getAliases(aliasName, callback) {
	aliasName = aliasName ? aliasName + '.' : '';
	var result = {};
    socket.emit('getObjectView', 'system', 'device', {startkey: 'alias' + aliasName, endkey: 'alias' + aliasName + '.\u9999'}, function (err, res) {
        if (!err && res) {
            for (var i = 0; i < res.rows.length; i++) {
                if (res.rows[i].id !== 'alias.' + aliasName) {
                    result[res.rows[i].id] = res.rows[i].value;
                }
            }
			socket.emit('getObjectView', 'system', 'channel', {startkey: 'alias' + aliasName, endkey: 'alias' + aliasName + '.\u9999'}, function (err, res) {
				if (!err && res) {
					for (var i = 0; i < res.rows.length; i++) {
						if (res.rows[i].id !== 'alias.' + aliasName) {
							result[res.rows[i].id] = res.rows[i].value;
						}
					}
					socket.emit('getObjectView', 'system', 'state', {startkey: 'alias' + aliasName, endkey: 'alias' + aliasName + '.\u9999'}, function (err, res) {
						if (!err && res) {
							for (var i = 0; i < res.rows.length; i++) {
								if (res.rows[i].id !== 'alias.' + aliasName) {
									result[res.rows[i].id] = res.rows[i].value;
								}
							}
							//Augment with missing main-datapoints
							for(key in result){ 
								if(key.split('.').length > 3 && typeof result[key.substr(0, key.lastIndexOf('.'))] == udef){
									result[key.substr(0, key.lastIndexOf('.'))] = {
										type: "channel",
										common: {
											name: "",
											role: ""
										},
										_id: key
									};
								}
							}
							callback && callback(null, result);
						} else {
							callback && callback(err, {});
						}
					});
				} else {
					callback && callback(err, {});
				}
			});
        } else {
            callback && callback(err, {});
        }
    });
}
function getAliasName(alias){
	var name = alias;
	if(aliases[alias] && typeof aliases[alias].common != udef && typeof aliases[alias].common.name != udef){
		if(typeof aliases[alias].common.name == "object" && typeof aliases[alias].common.name[systemLang] != udef){
			name = aliases[alias].common.name[systemLang];
		} else if(typeof aliases[alias].common.name == "object" && typeof aliases[alias].common.name["en"] != udef){
			name = aliases[alias].common.name["en"];
		} else if (typeof aliases[alias].common.name == "string") {
			name = aliases[alias].common.name;
		}
	}
	return name;
}
function getAliasesMain(){
	var aliasesMain = [];
	Object.keys(aliases).forEach(function(alias){
		aliasesMain.push(alias);
		var parentAlias = alias.substring(0, alias.lastIndexOf('.'));
		if(parentAlias != "Alias" && parseInt(parentAlias.substr(6)).toString() != parentAlias.substr(6)) aliasesMain.push(parentAlias);
	});
	aliasesMain = removeDuplicates(aliasesMain);
	aliasesMain = aliasesMain.filter(function(element){ //Filter for main Aliases (that are elements, that have sub-aliases OR that are direct childs of alias.0. [which means, lastIndexOf(".") == 7])
		if(element.lastIndexOf(".") == 7 || aliasesMain.filter(function(_element){ return (_element.indexOf(element + ".") == 0); }).length > 0) return true; else return false;
	});
	aliasesMain.sort();
	return aliasesMain;
}	

//History-Instances
var historyInstances = [];
function getHistoryInstances(callback){
	(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
		var _callback = callback;
		var _toDo = function(){
			historyInstances = [];
			for(id in iobrokerObjects){ 
				if(id.indexOf('system.adapter.') == 0 && !isNaN(id.substr(id.lastIndexOf('.') + 1)) && iobrokerObjects[id] && iobrokerObjects[id].common && iobrokerObjects[id].common.type === 'storage'){
					historyInstances.push(id.substring('system.adapter.'.length));
				}
			}
			_callback && _callback(historyInstances);		
		}
		if(iobrokerObjectsReady) {
			_toDo();
		} else {
			iobrokerObjectsReadyFunctions.push(_toDo);
		}
	})(); //<--End Closure
}

//Enumerations
var enumerations = {};
function getEnumerations(callback) {
	(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
		var _callback = callback;
		var _toDo = function(){
			enumerations = {};
			for(id in iobrokerObjects){
				if(id.indexOf("enum") == 0) {
					enumerations[id] = iobrokerObjects[id];
				}
			}
			_callback && _callback(enumerations);		
		}
		if(iobrokerObjectsReady) {
			_toDo();
		} else {
			iobrokerObjectsReadyFunctions.push(_toDo);
		}
	})(); //<--End Closure
}
function getEnumerationName(enumeration){
	var name = _(enumeration);
	if(enumerations[enumeration] && typeof enumerations[enumeration].common != udef && typeof enumerations[enumeration].common.name != udef){
		if(typeof enumerations[enumeration].common.name == "object" && typeof enumerations[enumeration].common.name[systemLang] != udef){
			name = enumerations[enumeration].common.name[systemLang];
		} else if(typeof enumerations[enumeration].common.name == "object" && typeof enumerations[enumeration].common.name["en"] != udef){
			name = _(enumerations[enumeration].common.name["en"]);
		} else if (typeof enumerations[enumeration].common.name == "string") {
			name = _(enumerations[enumeration].common.name);
		}
	}
	return name;
}
function getEnumerationsMain(){
	var enumerationsMain = [];
	if(enumerations){
		enumerationsMain = Object.keys(enumerations);
		enumerationsMain = enumerationsMain.filter(function(element){ //Filter for main Enumerations (that are elements, that have sub-enumerations)
			if(enumerationsMain.filter(function(_element){ return (_element.indexOf(element + ".") == 0); }).length > 0) return true; else return false;
		});
		$('#dialogViewsAutocreateEnumerationMain').empty().append("<option disabled selected value>" + _("Select Enumeration") + "</option>");
		enumerationsMain.forEach(function(enumeration, index){
			var name = getEnumerationName(enumeration);
			$('#dialogViewsAutocreateEnumerationMain').append("<option value='" + enumeration + "'>" + name + "</option>");
		});
		$('#dialogViewsAutocreateEnumerationMain').select();
		$('#viewsAutocreateButton').removeClass('disabled');
		$('#viewsAutocreateButtonProgress').hide();
		console.log("Enumerations ready.");
	} else {
		if(error) console.log("Error getting enumerations: " + error); else console.log("There are no Enumerations");
		$('#viewsAutocreateButtonProgress').hide();
	}
	return enumerationsMain;
}

//Helpers
function getDatapointConfiguration(id){
	if (id && iobrokerObjects[id]) {	
		var r = {};
		r.id = id.substr(id.lastIndexOf('.') + 1) || "SET";
		r.name = iobrokerObjects[id].common && iobrokerObjects[id].common.name || id;
		if(typeof r.name == "object") r.name = r.name[systemLang] || r.name["de"] || r.name["en"] || Object.keys(r.name)[0] || "";
		r.role = iobrokerObjects[id].common && iobrokerObjects[id].common.role || "value";
		r.type = iobrokerObjects[id].common && iobrokerObjects[id].common.type || "string";
		r.unit = iobrokerObjects[id].common && iobrokerObjects[id].common.unit || "";
		r.min = (iobrokerObjects[id].common && typeof iobrokerObjects[id].common.min != udef ? iobrokerObjects[id].common.min : "");
		r.max = (iobrokerObjects[id].common && typeof iobrokerObjects[id].common.max != udef ? iobrokerObjects[id].common.max : "");
		r.read = (iobrokerObjects[id].common && typeof iobrokerObjects[id].common.read != udef ? iobrokerObjects[id].common.read : true);
		r.write = (iobrokerObjects[id].common && typeof iobrokerObjects[id].common.write != udef ? iobrokerObjects[id].common.write : true);
		r.aliasId = id;
		r.aliasRead = "";
		r.aliasWrite = "";
		r.states = (iobrokerObjects[id].common && typeof iobrokerObjects[id].common.states != udef ? iobrokerObjects[id].common.states : null);
		r.custom = (iobrokerObjects[id].common && typeof iobrokerObjects[id].common.custom != udef ? iobrokerObjects[id].common.custom : null);
		return r;
	} else {
		return false;
	}	
}
function getNewId(aliasPath, id, askForId, excludeList){
	id = id || "SET";
	excludeList = excludeList || [];
	if(aliases[aliasPath + "." + id] || excludeList.indexOf(id) > -1){
		var count = 2;
		while(aliases[aliasPath + "." + id + "_" + count] || excludeList.indexOf(id + "_" + count) > -1){ count++; }
		id = id + "_" + count;
	}
	if(askForId){
		id = prompt(_("Please enter ID of datapoint"), id || "SET");
		if(!id) return false;
		while(aliases[aliasPath + "." + id] || excludeList[id]){
			alert("Error: This datapoint exists.");
			id = prompt(_("Please enter ID of datapoint"), id || "SET");
			if(!id) return false;
		}
	}
	return id;
}


/************** LOAD ********************************************************
*** This will be called by the admin adapter when the settings page loads ***
****************************************************************************/
function load(settings, onChange) {
	//Loading begins
	var loading = true;

	//Hide Settings
	console.log("Loading Alias-Manager Settings");
	$('.hideOnLoad').hide();
	$('.showOnLoad').show();

	//If react, make some css adjustments
	isReact = (window.parent.adapterName === 'admin');
	if(isReact){
		var customCSS = "";
		customCSS += ".table-values tr:nth-child(2n) { background-color: rgba(0,0,0,0.04) !important; }";
		customCSS += ".table-values.highlight > tbody > tr:hover { background-color: rgba(0,0,0,0.08) !important; }";
		customCSS += ".table-values.highlight > tbody > tr:nth-child(2n):hover { background-color: rgba(0,0,0,0.08) !important; }";
		customCSS += ".table-values th { background-color: rgba(0,0,0,0.1) !important; color: #1d1d1d !important; }";

		customCSS += ".title { background-color: #164477; }";

		customCSS += ".m .tabs .tab a { color: rgba(0, 0, 0, 0.5); }";
		customCSS += ".m .tabs .tab a:hover { color: rgba(0, 0, 0, 0.86); }";
		customCSS += ".m .tabs .tab a.active { color: #164477; }";
		customCSS += ".m .tabs .active { border-bottom: 2px solid #164477; }";

		customCSS += ".m nav { background-color: #3399cc; }";

		customCSS += ".m .btn { background-color: #e0e0e0; color: #000000; }";
		customCSS += ".m .btn:hover { background-color: #d5d5d5; }";
		customCSS += ".m .btn.disabled { background-color: rgba(0, 0, 0, 0.12) !important; color: rgba(0, 0, 0, 0.26) !important; }";
		customCSS += ".m .btn.red  { background-color: rgba(244,67,54,0.4) !important; }";
		customCSS += ".m .btn.red:hover { background-color: rgba(244,67,54,1) !important; color: #ffffff !important; }";
		customCSS += ".m .btn.red:hover i { color: #ffffff; transition: color 0.3s; }";

		customCSS += ".m .btn-floating { background-color: transparent; box-shadow: none; color: #000000; }";
		customCSS += ".m .btn-floating:hover { background-color: rgba(0,0,0,0.08); }";
		customCSS += ".m .btn-floating.selectClear { background-color: #ffffff; }";
		customCSS += ".m .btn-floating.selectClear:hover { background-color: #ebebeb; }";
		customCSS += ".m .btn-floating i { color: #000000; transition: color 0.3s; }";
		customCSS += ".m .btn-floating.red  { background-color: transparent !important; }";
		customCSS += ".m .btn-floating.red:hover { background-color: red !important; }";
		customCSS += ".m .btn-floating.red:hover i { color: #ffffff; }";
								
		customCSS += ".dialog-select-object-ids .material .main-toolbar-table .panel-button { background-color: transparent; }";
		customCSS += ".dialog-select-object-ids .material .main-toolbar-table .panel-button:hover { background-color: rgba(0,0,0,0.08); }";
		customCSS += ".dialog-select-object-ids .material .main-toolbar-table .panel-button i { color: #757575; }";
		customCSS += ".dialog-select-object-ids .objects-list-table { background-color: #ffffff; }";
		customCSS += ".dialog-select-object-ids .objects-list-table thead { display: none; }";
		customCSS += ".dialog-select-object-ids table.objects-list-table tr { border: none !important; }";
		customCSS += ".dialog-select-object-ids table.objects-list-table tr:hover { background-color: #3399cc; outline: none; color: #ffffff; }";
		customCSS += ".dialog-select-object-ids table.objects-list-table tr:hover .fancytree-title { color: #ffffff; }";
		customCSS += ".dialog-select-object-ids table.objects-list-table tr.fancytree-active { background-color: #236b8e !important; outline: none !important; color: #ffffff !important; }";
		customCSS += ".dialog-select-object-ids table.objects-list-table tr.fancytree-active .fancytree-title { color: #ffffff; }";
		customCSS += ".dialog-select-object-ids table.objects-list-table td { border: none !important; }";

		customCSS += ".m .dropdown-content li>span { color: rgba(0, 0, 0, 0.86); }";
		customCSS += ".m .dropdown-content li>a { color: rgba(0, 0, 0, 0.86); }";
		customCSS += ".m [type=checkbox].filled-in:checked+span:not(.lever):after { border: #164477; background-color: #164477; }";
		customCSS += ".m [type=radio].with-gap:checked+span:after, .m [type=radio]:checked+span:after { background-color: #164477; }";
		customCSS += ".m [type=radio].with-gap:checked+span:after, .m [type=radio].with-gap:checked+span:before, .m [type=radio]:checked+span:after { border: 2px solid #164477; }";
		
		customCSS += ".m.react-dark .btn, .m.react-dark .btn-small, .m.react-dark button.btn i, .m.react-dark button.btn-small i { background-color: #272727; }";
		customCSS += ".m.react-dark .dialog-select-container .main-header-table, .m.react-dark .dialog-select-container .main-header-table tr, .m.react-dark .dialog-select-container .objects-list-table { background: #272727!important; }";
		customCSS += ".m.react-dark .dropdown-content li.grey.lighten-3, .m.react-dark .dropdown-content li.selected, .m.react-dark .dropdown-content li:hover { background-color: #4c4c4c !important; }";
		customCSS += ".m.react-dark .dropdown-content li.divider { background-color: #626262; }";

		addCustomCSS(customCSS, "reactCSS");

		$('.table-button-add').addClass('grey lighten-2');

		var selectIdImgPath = './fancytree/react/';
		$('#fancytreeCSSLink').attr('href', './fancytree/react/ui.fancytree.min.css');

		if ($('.m.adapter-container').hasClass('react-dark')) $('.m.material-dialogs').addClass('react-dark');
	}

	//Create a helper for sortable tables with preserved width of cells
	var fixHelper = function(e, ui){
		ui.children().each(function(){
			$(this).width($(this).width()).css({"background-color":"rgba(180,180,180,0.75)", "box-shadow":"-5px 5px 5px 0px rgba(180,180,180,0.75)"});
		});
		return ui;
	};

	//Select elements with id=key and class=value and insert value
	if (!settings) return;
	$('.value').each(function () {
		var $key = $(this);
		var id = $key.attr('id');
		if ($key.attr('type') === 'checkbox') {
			if(typeof settings[id] != udef) $key.prop('checked', settings[id]);
			//do not call onChange direct, because onChange could expect some arguments
			$key.on('change', () => onChange());
		} else {
			if(typeof settings[id] != udef) $key.val(settings[id]);
			//do not call onChange direct, because onChange could expect some arguments
			$key.on('change', () => onChange()).on('keyup', () => onChange());
		}
	});

	//Signal to admin, that no changes yet
	onChange(false);	

	//Init ChannelDetector
	var channelDetector = new ChannelDetector();

	//Load Aliases
	loadAliases(function(){
		//Add Aliases to tabMain
		loadTabMain();
		
		//Show Settings
		console.log("All settings loaded. Adapter ready.");
		$('.hideOnLoad').show();
		$('.showOnLoad').hide();
		loading = false;
		
		//Reinitialize all the Materialize labels on the page if you are dynamically adding inputs:
		if (M) M.updateTextFields();

		//Get historyInstances
		getHistoryInstances();
		
		//Get Enumerations
		getEnumerations();

		//Get iobrokerObjects
		getIobrokerObjects();
	});

	function getIobrokerObjects(){
		console.log("Getting ioBroker Objects...");
		$('.loadingObjects').show();
		if(!iobrokerObjectsReady){
			var toDo = function(){
				console.log("Subscribing to objectChange");
				socket.on('objectChange', function(id, obj){
					if(obj) iobrokerObjects[id] = obj; else if(obj == null) delete iobrokerObjects[id];
				});
			}
			iobrokerObjectsReadyFunctions.push(toDo);
		}
		iobrokerObjectsReady = false;
		if(parent && parent.gMain && typeof parent.gMain.objects == "object"){
			console.log("...assigning ioBroker Objects via parent.gMain.objects...");
			iobrokerObjects = Object.assign({}, parent.gMain.objects);
			iobrokerObjectsReady = true;
			if(iobrokerObjectsReadyFunctions.length) console.log("There are some functions that were buffered while fetching the ioBroker Objects. They will be executed now...");
			for(i = 0; i < iobrokerObjectsReadyFunctions.length; i++){
				if (typeof iobrokerObjectsReadyFunctions[i] == 'function') iobrokerObjectsReadyFunctions[i]();
			}
			iobrokerObjectsReadyFunctions = [];
			$('.loadingObjects').hide();
			console.log("ioBroker Objects ready.");
		} else {
			setTimeout(function(){
				console.log("...fetching ioBroker Objects via socket...");
				$('.loadingObjects').show();
				socket.emit('getObjects', function (err, _objs) {
					iobrokerObjects = _objs;
					iobrokerObjectsReady = true;
					if(iobrokerObjectsReadyFunctions.length) console.log("There are some functions that were buffered while fetching the ioBroker Objects. They will be executed now...");
					for(i = 0; i < iobrokerObjectsReadyFunctions.length; i++){
						if (typeof iobrokerObjectsReadyFunctions[i] == 'function') iobrokerObjectsReadyFunctions[i]();
					}
					iobrokerObjectsReadyFunctions = [];
					$('.loadingObjects').hide();
					console.log("ioBroker Objects ready.");
				});
			}, 1000);
		}
	}



	//++++++++++ TABS ++++++++++
	//Enhance Tabs with onShow-Function
	$('ul.tabs li a').on('click', function(){ 
		//Scroll tab to middle
		$tab = $(this);
		$parent = $(this).parents('.tabs');
		var tabLeft = $tab.offset().left - $parent.offset().left + $parent.scrollLeft();
		var tabWidth = $tab.innerWidth();
		var parentWidth = $parent.innerWidth();
		$parent.animate({ scrollLeft: (tabLeft + (tabWidth / 2) - (parentWidth / 2)) }, 250);
		//Load onTabShow-Function
		onTabShow($(this).attr('href'));
	});
	function onTabShow(tabId){
		console.log("Open tab: " + tabId);
		switch(tabId){
			case "#tabMain":
			loadTabMain();
			break;
			
			case "#tabAliases":
			loadTabAliases();
			break;
			
			case "#tabAutocreateAlias":
			loadTabAutocreateAlias();
			break;
			
			case "#tabRenameAliases":
			loadTabRenameAliases();
			break;
		}
	}



	//++++++++++ MAIN ++++++++++
	function loadTabMain(){
		//Get Aliases and add them to Tree
		var aliasesMain = getAliasesMain();
		var aliasesMainTree = aliasesMain.reduce(function(total, current){
			current.split('.').reduce(function(currentTotal, currentValue, currentIndex, currentArray){
				var id = currentArray.slice(0, currentIndex + 1).join('.');
				var label = currentArray.slice(currentIndex, currentIndex + 1).join('.');
				var	temp = (currentTotal.children = currentTotal.children || []).find(o => o.id === id);
				if (!temp) currentTotal.children.push(temp = {id: id, label: label});
				return temp;
			}, total);
			return total;
		}, {children: []}).children;
		function mainCreateNestedAliasesMainList(list){
			if(list?.length > 0){
				var html = "<ul class='collapsible expandable mainAliasTreeCollapsible'>";
				list.forEach(function(alias){
					console.log("|- " + alias.id + ":");
					var name = getAliasName(alias.id);
					html += "	<li" + ((alias.id == "alias" || alias.id == "alias.0") ? " class='active'" : "") + ">";
					html += "		<div class='collapsible-header'><i class='material-icons collapsible-header-inactive indigo-text text-darken-4' style='margin: -9px 6px -9px 0px;'>folder</i><i class='material-icons collapsible-header-active indigo-text text-darken-4' style='margin: -9px 6px -9px 0px;'>folder_open</i>";
					html += 			alias.label + (name && name != alias.label ? "<br>(" + name + ")" : "");
					if(alias.id != "alias" && alias.id != "alias.0"){
						html += "		<a class='waves-effect waves-light btn-floating btn-flat btn-small mainAliasListEditButton' data-alias='" + alias.id + "' style='margin: -6px; position: absolute; right: 25px;'><i class='material-icons left' style='color: black;'>edit</i></a>";
					}
					html += "		</div>";
					html += "		<div class='collapsible-body'>";
					html += 			mainCreateNestedAliasesMainList(alias.children);
					var datapoints = Object.keys(aliases).filter(function(element){return (element.indexOf(alias.id) == 0 && element.substr(alias.id.length).lastIndexOf(".") == 0 && aliasesMain.indexOf(element) == -1);});
					if(datapoints){
						html += "		<div style='padding: 10px; overflow-x: auto; cursor: pointer;' class='mainAliasTreeDatapoints' data-alias='" + alias.id + "'><ul>";
						html += "			<li>" + datapoints.join("</li><li>");
						html += "		</ul></div>";
						html += "	</div>";
					}
					html += "	</li>";		
				});
				html += "</ul>";
				return html;
			} else {
				console.log("   has no childs -|");
				return "";
			}
		}
		$('#mainAliasTreeContainer').html(mainCreateNestedAliasesMainList(aliasesMainTree));
		$('.mainAliasTreeCollapsible').collapsible({accordion: false});

		//Get Aliases and add them to Table
		$('#mainAliasListTableBody').empty();
		aliasesMain.forEach(function(alias, index){ 
			var name = getAliasName(alias);
			var tableRow = "";
			tableRow += "<tr class='mainAliasListTableRow' data-alias='" + alias + "' style='cursor: pointer;'>";
			tableRow += "	<td>";
			tableRow += 		alias;
			tableRow += "	</td>";
			tableRow += "	<td>";
			tableRow += 		name;
			tableRow += "	</td>";
			tableRow += "	<td>";
			tableRow += "		<a class='waves-effect waves-light btn-floating btn-flat btn-small mainAliasListEditButton' id='mainAliasListTableEditButton_" + index + "' data-alias='" + alias + "'><i class='material-icons left' style='color: black;'>edit</i></a>";
			tableRow += "	</td>";
			tableRow += "</tr>";
			$('#mainAliasListTableBody').append(tableRow);
		});
		
		//Enhance edit-buttons with function
		$('.mainAliasListEditButton, .mainAliasListTableRow, .mainAliasTreeDatapoints	').off('click').on('click', function(){
			M.Tabs.getInstance($('#tabsTop')).select('tabAliases');
			var aliasPath = $(this).data('alias');
			(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
				var _aliasPath = aliasPath;
				setTimeout(function(){ $('#aliasesSelectedAlias').val(_aliasPath).select().trigger('change'); }, 10);			
			})(); //<--End Closure
		});
	}



	//++++++++++ ALIASES ++++++++++
	var aliasesSelectedAlias = false;
	var aliasesUsedAliasIds = [];
	//Load Tab Aliases
	function loadTabAliases(showAlias){
		$('#aliasesSelectedAlias').addClass('disabled');
		$('#aliasesSelectedAliasProgress').show();
		$('.aliasesContentDiv').hide();
		$('.aliasesNothingSelectedDiv').show();
		
		//Get Aliases and add them to Selectbox
		$('#aliasesSelectedAlias').empty().append("<option disabled" + (showAlias ? "" : " selected") + " value>" + _("Select Alias") + "</option>");
		getAliasesMain().forEach(function(alias, index){ 
			var name = getAliasName(alias);
			$('#aliasesSelectedAlias').append("<option value='" + alias + "' data-index='" + index + "'>" + alias + (name != "" && name != alias ? " (" + name + ")" : "&nbsp;") + "</option>"); 
		});
		$('#aliasesSelectedAlias').removeClass('disabled');
		$('#aliasesSelectedAlias').val(showAlias);
		$('#aliasesSelectedAlias').select().trigger('change');
		$('#aliasesSelectedAliasProgress').hide();
	}
		
	//Enhance aliasesSelectedAlias-Selectbox with functions
	$('#aliasesSelectedAlias').on('change', function(){
		aliasesLoadAlias($('#aliasesSelectedAlias').val());
	});
	
	//Load Alias
	function aliasesLoadAlias(aliasId){
		$('.aliasesDatapointSaveAll').hide();
		aliasesSelectedAlias = aliasId;
		if(aliasesSelectedAlias){
			//Fill Datapoint list
			$('#aliasesAliasMainList').empty();
			$('#aliasesDatapointList').empty();
			aliasesUsedAliasIds = [];
			if(aliases[aliasesSelectedAlias]){
				aliasesDatapointListAddLine(aliasesSelectedAlias, true);
			} else {
				aliases[aliasesSelectedAlias] = {
					UNSAVED_NEW: true,
					type: "channel",
					common: { 
						name: aliasesSelectedAlias.substr(aliasesSelectedAlias.lastIndexOf('.') + 1),
						role: ""
					},
					_id: aliasesSelectedAlias
				};
				aliasesDatapointListAddLine(aliasesSelectedAlias, true);
			}
			var aliasesMain = getAliasesMain();
			var datapoints = Object.keys(aliases).filter(function(element){return (element.indexOf(aliasesSelectedAlias) == 0 && element.substr(aliasesSelectedAlias.length).lastIndexOf(".") == 0 && aliasesMain.indexOf(element) == -1);});
			datapoints.forEach(function(alias){
				aliasesDatapointListAddLine(alias);
			})
			$('.aliasesContentDiv').show();
			$('.aliasesNothingSelectedDiv').hide();
		} else {
			$('.aliasesContentDiv').hide();
			$('.aliasesNothingSelectedDiv').show();
		}		
	}
	
	//Add function to Add Alias Button
	$('#aliasesNewAlias').on('click', function(){
		var aliasId = prompt(_("Please enter ID of alias"), "alias.0.MyNewAlias");
		if(!aliasId) return;
		if(aliasId.indexOf("alias.0.") !== 0) aliasId = "alias.0." + aliasId;
		if(aliasId.length < 9) return;
		if(aliases[aliasId] && !aliases[aliasId].UNSAVED_NEW){
			alert("Error: This alias exists.");
			return;
		}
		$('#aliasesSelectedAlias').append("<option value='" + aliasId + "'>" + aliasId + " [" + _("NOT SAVED") + "]" + "</option>");
		$('#aliasesSelectedAlias').val(aliasId);
		$('#aliasesSelectedAlias').select().trigger('change');
	});

	//Add function to Add Datapoint Button
	$('#aliasesNewDatapoint').on('click', function(){ 
		if(aliasesAddDatapoint()){
			setTimeout(function(){ $(".adapter-body").scrollTop($(".adapter-body")[0].scrollHeight); }, 500);
		}			
	});

	//Add function to Add Datapoint From Existing Button
	var aliasesNewDatapointFromExistingLastSelectId = "";
	$('#aliasesNewDatapointFromExisting').on('click', function(){ 
		$('#dialogSelectId').data('selectidfor', '');
		initSelectId(function (sid) {
			sid.selectId('show', aliasesNewDatapointFromExistingLastSelectId, {type: 'state'}, function (newId) {
				if (newId && iobrokerObjects[newId]) {
					console.log(iobrokerObjects[newId]);
					var r = getDatapointConfiguration(newId);
					if(r & aliasesAddDatapoint(r)){
						setTimeout(function(){ $(".adapter-body").scrollTop($(".adapter-body")[0].scrollHeight); }, 500);
					}
					aliasesNewDatapointFromExistingLastSelectId = newId;
				}
			});
		});		
	});

	//Add function to Copy Button
	$('#aliasesCopyAlias').on('click', function(){
		aliasesCopyAlias();
	});
	
	//Add function to Rename Button
	$('#aliasesRenameAlias').on('click', function(){
		aliasesCopyAlias(true, true);
	});
	
	//Add function to Delete Button
	$('#aliasesDeleteAlias').on('click', function(){
		if(confirm(_("Really delete this Alias with all its datapoints? This cant't be undone!"))){
			var ids = [];
			$('#aliasesDatapointList > li').each(function(){
				ids.push($(this).data('id'));
			});
			ids.push(aliasesSelectedAlias);
			aliasesDeleteDatapoints(ids, function(){
				loadTabAliases();
			});
		}
	});
	
	//Add function to Save all Buttons
	$('.aliasesDatapointSaveAll').on('click', function(){
		var ids = [];
		$('.aliasesDatapoint.save').each(function(){
			if($(this).css('display') != "none") ids.push($(this).data('id'));				
		});
		aliasesSaveDatapoints(ids);
	});

	//Add function to Expand all Button
	$('#aliasesDatapointCollapsibleExpandAll').on('click', function(){
		$('#aliasesDatapointList li.aliasesDatapointCollapsibleItem').removeClass('active');
		$('#aliasesDatapointList').collapsible('open');
		$('#aliasesDatapointList li.aliasesDatapointCollapsibleItem').addClass('active');
	});

	//Add function to Collapse all Button
	$('#aliasesDatapointCollapsibleCollapseAll').on('click', function(){
		$('#aliasesDatapointList li.aliasesDatapointCollapsibleItem').addClass('active');
		$('#aliasesDatapointList').collapsible('close');
		$('#aliasesDatapointList li.aliasesDatapointCollapsibleItem').removeClass('active');
	});

	//Add Line to Datapoint List
	function aliasesDatapointListAddLine(alias, isMain){
		var listContent = "";
		var name = getAliasName(alias) || alias;
		var type = aliases[alias].common.type || "";
		var role = aliases[alias].common.role || "";
		var unit = aliases[alias].common.unit || "";
		var min = aliases[alias].common.min || "";
		var max = aliases[alias].common.max || "";
		var read = aliases[alias].common.read || false;
		var write = aliases[alias].common.write || false;
		var states = aliases[alias].common.states || null;
		var custom = aliases[alias].common.custom || null;
		var unsavedNew = aliases[alias].UNSAVED_NEW || false;
		var convertedToNumber = false;
		if(typeof min != "number" && min != ""){
			if(isNaN(min)) min = ""; else min = parseFloat(min);
			unsavedNew = true;
			convertedToNumber = true;
		}
		if(typeof max != "number" && max != ""){
			if(isNaN(max)) max = ""; else max = parseFloat(max);
			unsavedNew = true;
			convertedToNumber = true;
		}
		var addedNative = false;
		if(typeof aliases[alias].native != "object"){
			unsavedNew = true;			
			addedNative = true;
		}
		var aliasObj = aliases[alias].common.alias || {};
		var aliasId = aliasObj.id || "";
		var aliasRead = aliasObj.read || "";
		var aliasWrite = aliasObj.write || "";
		if(aliasId) aliasesUsedAliasIds.push(aliasId);
		listContent += "<li class='aliasesDatapointCollapsibleItem" + (isMain ? " active" : "") + "' style='background-color: rgba(255,255,255,0.5); border-width: 4px;' data-id='" + alias + "' data-main='" + (isMain ? "true" : "false") + "'>";
		listContent += "<div class='aliasesDatapointCollapsibleHeader collapsible-header' data-id='" + alias + "' data-main='" + (isMain ? "true" : "false") + "'>";
		listContent += "<div class='row aliasesDatapointRow' style='background-color: rgba(0,0,0,0.2);'>";
		if(!isMain && aliases[alias].type == "state") listContent += 	"<i class='aliasesDatapoint copy material-icons' data-id='" + alias + "' data-setting='copy' data-main='" + (isMain ? "true" : "false") + "' style='position:absolute; right:30px; margin-top: 2px; cursor:pointer; color:#000000;'>content_copy</i>";
		if(!isMain) listContent += 	"<i class='aliasesDatapoint delete material-icons' data-id='" + alias + "' data-setting='delete' data-main='" + (isMain ? "true" : "false") + "' style='position:absolute; right:6px; margin-top: 2px; cursor:pointer; color:#ce0000;'>delete</i>";
		listContent += 	"<div class='col s11 m6 l6'>";
		listContent += 		"<h6><i class='material-icons'>keyboard_arrow_down</i><span class='aliasesDatapoint id' data-id='" + alias + "' data-setting='id'>" + alias + "</span>:";
		listContent += 		"</h6>";
		listContent += 	"</div>";
		listContent += 	"<div class='col s12 m5 l5'>";
		listContent += 		"<input class='val aliasesDatapoint' name='aliasesDatapoint_" + alias + "_NAME' id='aliasesDatapoint_" + alias + "_NAME' data-id='" + alias + "' data-setting='name' value='" + name + "' data-main='" + (isMain ? "true" : "false") + "'></input>";
		listContent += 		"<label for='aliasesDatapoint_" + alias + "_NAME' class='translate'></label>";
		listContent += 		"<span class='translate'>Name</span>";
		listContent += 	"</div>";
		listContent += "</div>";
		listContent += "</div>";
		listContent += "<div class='aliasesDatapointCollapsibleBody collapsible-body' data-id='" + alias + "' data-main='" + (isMain ? "true" : "false") + "'>";
		listContent += "<div class='row aliasesDatapointRow' style='background-color: rgba(0,0,255,0.1);'>";
		listContent += 	"<div class='col s12 m6 l4'>";
		listContent += 		"<input class='val aliasesDatapoint' name='aliasesDatapoint_" + alias + "_ROLE' id='aliasesDatapoint_" + alias + "_ROLE' data-id='" + alias + "' data-setting='role' value='" + role + "' data-main='" + (isMain ? "true" : "false") + "'></input>";
		listContent += 		"<label for='aliasesDatapoint_" + alias + "_ROLE' class='translate'></label>";
		listContent += 		"<span class='translate'>common.role</span>";
		listContent += 	"</div>";
		if(aliases[alias].type == "state"){ //STATE
			listContent += 	"<div class='col s12 m6 l4'>";
			listContent += 		"<input class='val aliasesDatapoint' name='aliasesDatapoint_" + alias + "_TYPE' id='aliasesDatapoint_" + alias + "_TYPE' data-id='" + alias + "' data-setting='type' value='" + type + "'></input>";
			listContent += 		"<label for='aliasesDatapoint_" + alias + "_TYPE' class='translate'></label>";
			listContent += 		"<span class='translate'>common.type</span>";
			listContent += 	"</div>";
			listContent += 	"<div class='col s12 m6 l4'>";
			listContent += 		"<input class='val aliasesDatapoint' name='aliasesDatapoint_" + alias + "_UNIT' id='aliasesDatapoint_" + alias + "_UNIT' data-id='" + alias + "' data-setting='unit' value='" + unit + "'></input>";
			listContent += 		"<label for='aliasesDatapoint_" + alias + "_UNIT' class='translate'></label>";
			listContent += 		"<span class='translate'>common.unit</span>";
			listContent += 	"</div>";
			listContent += "</div>";
			listContent += "<div class='row aliasesDatapointRow' style='background-color: rgba(0,255,0,0.1);'>";
			listContent += 	"<div class='col s12 m6 l4'>";
			listContent += 		"<input class='val aliasesDatapoint' data-type='number' type='number' name='aliasesDatapoint_" + alias + "_MIN' id='aliasesDatapoint_" + alias + "_MIN' data-id='" + alias + "' data-setting='min' value='" + min + "'></input>";
			listContent += 		"<label for='aliasesDatapoint_" + alias + "_MIN' class='translate'></label>";
			listContent += 		"<span class='translate'>common.min</span>";
			listContent += 	"</div>";
			listContent += 	"<div class='col s12 m6 l4'>";
			listContent += 		"<input class='val aliasesDatapoint' data-type='number' type='number' name='aliasesDatapoint_" + alias + "_MAX' id='aliasesDatapoint_" + alias + "_MAX' data-id='" + alias + "' data-setting='max' value='" + max + "'></input>";
			listContent += 		"<label for='aliasesDatapoint_" + alias + "_MAX' class='translate'></label>";
			listContent += 		"<span class='translate'>common.max</span>";
			listContent += 	"</div>";
			listContent += 	"<div class='col s12 m6 l4'>";
			listContent += 		"<p><label>";
			listContent += 		"<input class='val aliasesDatapoint checkbox' data-type='checkbox' type='checkbox' name='aliasesDatapoint_" + alias + "_READ' id='aliasesDatapoint_" + alias + "_READ' data-id='" + alias + "' data-setting='read'" + (read ? " checked='checked'" : "") + "></input>";
			listContent += 		"<span class='translate'>common.read</span>";
			listContent += 		"</p></label>";
			listContent += 	"</div>";
			listContent += 	"<div class='col s12 m6 l4'>";
			listContent += 		"<p><label>";
			listContent += 		"<input class='val aliasesDatapoint checkbox' data-type='checkbox' type='checkbox' name='aliasesDatapoint_" + alias + "_WRITE' id='aliasesDatapoint_" + alias + "_WRITE' data-id='" + alias + "' data-setting='write'" + (write ? " checked='checked'" : "") + "></input>";
			listContent += 		"<span class='translate'>common.write</span>";
			listContent += 		"</p></label>";
			listContent += 	"</div>";
			listContent += 	"<div class='col s12 m6 l4' style='padding: 0 0 0 2px;'>";
			listContent += 		"<a class='val button aliasesDatapoint btn-floating" + (states ? " blue" : "") + "' data-type='button' name='aliasesDatapoint_" + alias + "_STATES' id='aliasesDatapoint_" + alias + "_STATES' data-id='" + alias + "' data-setting='states'><i class='material-icons'>view_list</i></a>&nbsp;";
			listContent += 		"<a class='val button aliasesDatapoint btn-floating" + (custom ? " blue" : "") + "' data-type='button' name='aliasesDatapoint_" + alias + "_CUSTOM' id='aliasesDatapoint_" + alias + "_CUSTOM' data-id='" + alias + "' data-setting='custom'><i class='material-icons'>build</i></a>&nbsp;";
			listContent += 	"</div>";
			listContent += "</div>";
			listContent += "<div class='row aliasesDatapointRow'  style='background-color: rgba(255,0,0,0.1);'>";
			listContent += 	"<div class='col s12 m6 l4' style='background-color: rgba(255,0,0,0.1);'>";
			listContent += 		"<input class='val aliasesDatapoint' name='aliasesDatapoint_" + alias + "_ALIAS_ID' id='aliasesDatapoint_" + alias + "_ALIAS_ID' data-id='" + alias + "' data-setting='aliasId' value='" + (typeof aliasId == "object" ? JSON.stringify(aliasId) : aliasId) + "'></input>";
			listContent += 		"<label for='aliasesDatapoint_" + alias + "_ALIAS_ID' class='translate'></label>";
			listContent += 		"<span class='translate'>Alias ID</span>";
			listContent += 		"<i class='material-icons aliasesDatapoint selectId' data-id='" + alias + "' data-selectidfor='aliasesDatapoint_" + alias + "_ALIAS_ID' style='position: absolute; right: 5px; top: 10px; cursor: hand;'>edit</i>";
			listContent += 	"</div>";
			listContent += 	"<div class='col s12 m6 l4'>";
			listContent += 		"<input class='val aliasesDatapoint' name='aliasesDatapoint_" + alias + "_ALIAS_READ' id='aliasesDatapoint_" + alias + "_ALIAS_READ' data-id='" + alias + "' data-setting='aliasRead' value=''></input>"; //Value is set later, because it can contain special chars
			listContent += 		"<label for='aliasesDatapoint_" + alias + "_ALIAS_READ' class='translate'></label>";
			listContent += 		"<span class='translate'>Alias Read-Function (keyword for value is val)</span>";
			listContent += 	"</div>";
			listContent += 	"<div class='col s12 m6 l4'>";
			listContent += 		"<input class='val aliasesDatapoint' name='aliasesDatapoint_" + alias + "_ALIAS_WRITE' id='aliasesDatapoint_" + alias + "_ALIAS_WRITE' data-id='" + alias + "' data-setting='aliasWrite' value=''></input>"; //Value is set later, because it can contain special chars
			listContent += 		"<label for='aliasesDatapoint_" + alias + "_ALIAS_WRITE' class='translate'></label>";
			listContent += 		"<span class='translate'>Alias Write-Function (keyword for value is val)</span>";
			listContent += 	"</div>";
		}
		listContent += "</div>";
		listContent += "</div>";
		listContent += "<div class='row aliasesDatapointRow'>";
		listContent += 	"<div class='col s12 m12 l12'>";
		listContent += 		"<a class='aliasesDatapoint save waves-effect waves-light btn' id='aliasesDatapoint_" + alias + "_SAVE' data-id='" + alias + "' data-setting='save' style='margin: 8px;" + (unsavedNew ? "" : " display: none;") + "'><i class='material-icons left'>save</i><span class='translate'>Save changes</span></a>";
		listContent += 	"</div>";
		listContent += "</div>";
		if(convertedToNumber){
			listContent += "<div class='row aliasesDatapointRow'>";
			listContent += 	"<div class='col s12 m12 l12' style='margin: 2px 0px 2px 8px;'>";
			listContent += 		"<i class='material-icons left' style='vertical-align: middle; font-size: 1rem; margin-right: 6px;'>info</i><span class='translate'>Converted some objects to type number</span>";
			listContent += 	"</div>";			
			listContent += "</div>";			
		}
		if(addedNative){
			listContent += "<div class='row aliasesDatapointRow'>";
			listContent += 	"<div class='col s12 m12 l12' style='margin: 2px 0px 2px 8px;'>";
			listContent += 		"<i class='material-icons left' style='vertical-align: middle; font-size: 1rem; margin-right: 6px;'>info</i><span class='translate'>Added empty native-ojbect to datapoint</span>";
			listContent += 	"</div>";			
			listContent += "</div>";			
		}
		listContent += "</div>";
		listContent += "</li>";
		if(isMain){
			$('#aliasesAliasMainList').append(listContent);
		} else {
			$('#aliasesDatapointList').append(listContent);
		}
		$('.aliasesDatapoint.val[data-id="' + alias + '"][data-setting="aliasRead"]').val(aliasRead);
		$('.aliasesDatapoint.val[data-id="' + alias + '"][data-setting="aliasWrite"]').val(aliasWrite);
		$('.aliasesDatapoint.val[data-id="' + alias + '"][data-setting="states"]').data('value', states);
		$('.aliasesDatapoint.val[data-id="' + alias + '"][data-setting="custom"]').data('value', custom);
		if (M) M.updateTextFields();
		$('.aliasesDatapointCollapsible').collapsible({accordion: false});
		if(unsavedNew) $('.aliasesDatapointSaveAll').show();
		//Show save button on change
		$('.aliasesDatapoint.val[data-id="' + alias + '"]').on('input change', function(){
			$('.aliasesDatapoint.save[data-id="' + $(this).data('id') + '"]').show();
			$('.aliasesDatapointSaveAll').show();
		});
		//Save datapoint
		$('.aliasesDatapoint.save[data-id="' + alias + '"]').on('click', function(){
			aliasesSaveDatapoints([alias]);
		});
		//Copy datapoint
		$('.aliasesDatapoint.copy[data-id="' + alias + '"]').on('click', function(event){
			event.stopPropagation();
			var id = alias.substr(alias.lastIndexOf('.') + 1) || "SET";
			if(aliases[$('#aliasesSelectedAlias').val() + "." + id]){
				var count = 2;
				while(aliases[$('#aliasesSelectedAlias').val() + "." + id + "_" + count]){ count++; }
				id = id + "_" + count;
			}
			if(aliasesAddDatapoint({id: id, name: $('.aliasesDatapoint.val[data-id="' + alias + '"][data-setting="name"]').val(), role: $('.aliasesDatapoint.val[data-id="' + alias + '"][data-setting="role"]').val(), type: $('.aliasesDatapoint.val[data-id="' + alias + '"][data-setting="type"]').val(), unit: $('.aliasesDatapoint.val[data-id="' + alias + '"][data-setting="unit"]').val(), min: $('.aliasesDatapoint.val[data-id="' + alias + '"][data-setting="min"]').val(), max: $('.aliasesDatapoint.val[data-id="' + alias + '"][data-setting="max"]').val(), read: $('.aliasesDatapoint.val[data-id="' + alias + '"][data-setting="read"]').prop('checked'), write: $('.aliasesDatapoint.val[data-id="' + alias + '"][data-setting="write"]').prop('checked'), aliasId: $('.aliasesDatapoint.val[data-id="' + alias + '"][data-setting="aliasId"]').val(), aliasRead: $('.aliasesDatapoint.val[data-id="' + alias + '"][data-setting="aliasRead"]').val(), aliasWrite: $('.aliasesDatapoint.val[data-id="' + alias + '"][data-setting="aliasWrite"]').val(), states: $('.aliasesDatapoint.val[data-id="' + alias + '"][data-setting="states"]').data('value'), custom: $('.aliasesDatapoint.val[data-id="' + alias + '"][data-setting="custom"]').data('value')})){
				setTimeout(function(){ $(".adapter-body").scrollTop($(".adapter-body")[0].scrollHeight); }, 500);
			}
		});
		//Delete datapoint
		$('.aliasesDatapoint.delete[data-id="' + alias + '"]').on('click', function(event){
			event.stopPropagation();
			if(confirm(_("Delete datapoint? This can't be undone!"))) aliasesDeleteDatapoints([alias], function(){
				$('#aliasesDatapointList li[data-id="' + alias + '"]').remove();
			});
		});
		//Edit states
		$('.aliasesDatapoint.val[data-id="' + alias + '"][data-setting="states"]').on('click', function(event){
			event.stopPropagation();
			initDialog('dialogAliasesShowStates', function(){ //save dialog
			});
			$('#dialogAliasesShowStates').data('alias', alias);
			$('#dialogAliasesShowStatesTitle').html(alias);
			var states = $('.aliasesDatapoint.val[data-id="' + alias + '"][data-setting="states"]').data('value');
			if(states && typeof states == "object") states = JSON.stringify(states, null, '\t');
			$('#dialogAliasesShowStatesTable').html("<pre>" + (states ? states : _("Not defined")) + "</pre>");
			$('#dialogAliasesShowStates').modal('open');
			$('#dialogAliasesShowStates').css('z-index', modalZIndexCount++);			
		});
		//Edit custom
		$('.aliasesDatapoint.val[data-id="' + alias + '"][data-setting="custom"]').on('click', function(event){
			event.stopPropagation();
			initDialog('dialogAliasesShowCustom', function(){ //save dialog
			});
			$('#dialogAliasesShowCustom').data('alias', alias);
			$('#dialogAliasesShowCustomTitle').html(alias);
			$('#dialogAliasesShowCustomTableEdit').off('click').on('click', function(){
				if(aliases[alias]?.UNSAVED_NEW) alert("You may need to save it first.");
				var url = window.location.origin + "/#tab-objects/customs/" + encodeURIComponent(alias);
				window.open(url);				
			});
			var custom = $('.aliasesDatapoint.val[data-id="' + alias + '"][data-setting="custom"]').data('value');
			if(custom && typeof custom == "object") custom = JSON.stringify(custom, null, '\t');
			$('#dialogAliasesShowCustomTable').html("<pre>" + (custom ? custom : _("Not defined")) + "</pre>");
			$('#dialogAliasesShowCustom').modal('open');
			$('#dialogAliasesShowCustom').css('z-index', modalZIndexCount++);			
		});
		//Enhance SelectId-Buttons with function
		$('.aliasesDatapoint.selectId[data-id="' + alias + '"]').on('click', function(){
			initDialog('dialogAliasesSelectAliasId', function(){ //save dialog
				if($("#tabsDialogAliasesSelectAliasId a.active").attr('href') == "#dialogAliasesSelectAliasIdSeperateReadWrite"){ //SeperateReadWrite
					var newId = '{"read": "' + $('#dialogAliasesSelectAliasIdSeperateReadWriteAliasIdRead').val() + '", "write": "' + $('#dialogAliasesSelectAliasIdSeperateReadWriteAliasIdWrite').val() + '"}';
				} else { //OneReadWrite
					var newId = $('#dialogAliasesSelectAliasIdOneReadWriteAliasId').val();
				}
				$('#' + $('#dialogAliasesSelectAliasId').data('selectidfor')).val(newId).trigger('change');
			});
			$('#dialogAliasesSelectAliasId').data('selectidfor', $.escapeSelector($(this).data('selectidfor')));
			var val = $('#' + $('#dialogAliasesSelectAliasId').data('selectidfor')).val();
			val = tryParseJSON(val) || val;
			if (typeof val == "object" && (val.read || val.write)) { //SeperateReadWrite
				M.Tabs.getInstance($('#tabsDialogAliasesSelectAliasId')).select('dialogAliasesSelectAliasIdSeperateReadWrite');
				$('#dialogAliasesSelectAliasIdOneReadWriteAliasId').val(val.read || "");
				$('#dialogAliasesSelectAliasIdSeperateReadWriteAliasIdRead').val(val.read || "");
				$('#dialogAliasesSelectAliasIdSeperateReadWriteAliasIdWrite').val(val.write || "");
			} else { //OneReadWrite
				M.Tabs.getInstance($('#tabsDialogAliasesSelectAliasId')).select('dialogAliasesSelectAliasIdOneReadWrite');
				$('#dialogAliasesSelectAliasIdOneReadWriteAliasId').val(val);
				$('#dialogAliasesSelectAliasIdSeperateReadWriteAliasIdRead').val(val);
				$('#dialogAliasesSelectAliasIdSeperateReadWriteAliasIdWrite').val(val);
			}
			$('#dialogAliasesSelectAliasId').modal('open');
			$('#dialogAliasesSelectAliasId').css('z-index', modalZIndexCount++);			
		});
		//Enhance type and role with function
		enhanceTextInputToCombobox('.aliasesDatapoint.val[data-id="' + alias + '"][data-setting="type"]', Object.keys(defaultDatapointRoles).join(";"), false);
		$('.aliasesDatapoint.val[data-id="' + alias + '"][data-setting="type"]').on('change init', function(){
			enhanceTextInputToCombobox('.aliasesDatapoint.val[data-id="' + $(this).data('id') + '"][data-setting="role"]', (defaultDatapointRoles[$(this).val()] || []).join(";"));
		}).trigger('init');
		enhanceTextInputToCombobox('.aliasesDatapoint.val[data-id="' + alias + '"][data-setting="role"][data-main="true"]', defaultMainRoles.join(";"), false);
		//StopPropagation for aliasesDatapoints
		$('.aliasesDatapoint.val:not(.button)').off('click').on('click', function(event){ 
			event.stopPropagation(); 
		});
		
	}
	$('.dialogAliasesSelectAliasIdAliasesDatapoint.selectId').on('click', function(){
		$('#dialogSelectId').data('selectidfor', $.escapeSelector($(this).data('selectidfor')));
		initSelectId(function (sid) {
			sid.selectId('show', $('#' + $('#dialogSelectId').data('selectidfor')).val(), {type: 'state'}, function (newId) {
				if (newId) {
					$('#' + $('#dialogSelectId').data('selectidfor')).val(newId).trigger('change');
				}
			});
		});		
	});

	//AddDatapoint 
	function aliasesAddDatapoint(obj){
		obj = obj || {};
		var id = getNewId($('#aliasesSelectedAlias').val(), obj.id, true);
		if(!id) return false;
		var newObj =  {
			UNSAVED_NEW: true,
			type: "state", 
			common: {
				name: obj.name || id, 
				role: obj.role || "value", 
				type: obj.type || "string", 
				unit: obj.unit || "",
				min: (typeof obj.min != udef ? obj.min : ""),
				max: (typeof obj.max != udef ? obj.max : ""),
				read: (typeof obj.read != udef ? obj.read : true), 
				write: (typeof obj.write != udef ? obj.write : true),
				alias: {id: obj.aliasId || "", read: obj.aliasRead || "", write: obj.aliasWrite || ""}
			},
			_id: $('#aliasesSelectedAlias').val() + "." + id
		};
		if(obj.states) newObj.common.states = obj.states;
		if(obj.custom) newObj.common.custom = obj.custom;
		aliases[$('#aliasesSelectedAlias').val() + "." + id] = newObj;
		aliasesDatapointListAddLine($('#aliasesSelectedAlias').val() + "." + id);
		return true;
	}
	
	//Copy (and rename)
	function aliasesCopyAlias(deleteOld, saveNew){
		initDialog('dialogAliasesCopyAlias', function(){ //save dialog
			var oldName = $('#dialogAliasesCopyAlias').data('oldName');
			var newName = $('#dialogAliasesCopyAliasNewName').val();
			var oldId = aliasesSelectedAlias;
			var newId = $('#dialogAliasesCopyAliasNewId').val();
			var replacements = [];
			$('#dialogAliasesCopyAliasReplaceDatapointsList > li').each(function(){
				var index = $(this).data('index');
				replacements.push({searchValue: $('.dialogAliasesCopyAliasReplaceDatapoints.searchvalue[data-index=' + index + ']').val(), newValue: $('.dialogAliasesCopyAliasReplaceDatapoints.newvalue[data-index=' + index + ']').val()});
			});
			var idsToSave = [];
			var idsToDelete = [];
			for(oldAlias in aliases){
				if(oldAlias.indexOf(oldId) == 0){
					var oldObj = aliases[oldAlias];
					var newAlias = newId + oldAlias.substring(oldId.length);
					if(saveNew) idsToSave.push(newAlias);
					aliases[newAlias] = JSON.parse(JSON.stringify(aliases[oldAlias])); //Copy old alias into new
					if(oldAlias.length == oldId.length){ // Main
						aliases[newAlias].UNSAVED_NEW = true;
						aliases[newAlias].type = oldObj.type || "channel";
						if(typeof aliases[newAlias].common != "object") aliases[newAlias].common = {};
						aliases[newAlias].common.name = newName;
						aliases[newAlias]._id = newAlias; 
					} else { //Datapoint
						aliases[newAlias].UNSAVED_NEW = true;
						aliases[newAlias].type = oldObj.type || "state";
						if(typeof aliases[newAlias].common != "object") aliases[newAlias].common = {};
						aliases[newAlias].common.name = (oldObj.common && oldObj.common.name || newName).replace(oldName, newName);
						if(typeof aliases[newAlias].common.alias != "object") aliases[newAlias].common.alias = {};
						if(oldObj.common && oldObj.common.alias && oldObj.common.alias.id ){
							if(typeof oldObj.common.alias.id == "object"){
								aliases[newAlias].common.alias.id = JSON.parse(multiReplace(JSON.stringify(oldObj.common.alias.id), replacements));
								
							} else {
								aliases[newAlias].common.alias.id = multiReplace(oldObj.common.alias.id || "", replacements);
							}
						} else {
							aliases[newAlias].common.alias.id = "";
						}
						aliases[newAlias]._id = newAlias; 
					}
					if(deleteOld && oldAlias != newAlias){
						idsToDelete.push(oldAlias);
					}
				}
			};
			loadTabAliases(newId);
			aliasesSaveDatapoints(idsToSave, function(err){
				if(!err){
					aliasesDeleteDatapoints(idsToDelete, function(err){
						if(err){
							alert(_("Error deleting old Datapoints"));
						}
					});
				} else {
					alert(_("Error saving Datapoints"));
				}				
			});
		});
		$('#dialogAliasesCopyAlias').data('oldName', getAliasName(aliasesSelectedAlias));
		$('#dialogAliasesCopyAliasNewName').val(getAliasName(aliasesSelectedAlias));
		$('#dialogAliasesCopyAliasNewId').val(aliasesSelectedAlias);
		$('#dialogAliasesCopyAliasReplaceDatapointsList').empty();
		if(deleteOld) $('#dialogAliasesCopyAlias .modal-action.btn-set span').html(_("Rename this alias")); else $('#dialogAliasesCopyAlias .modal-action.btn-set span').html(_("Copy this alias"));
		$('#dialogAliasesCopyAlias').modal('open');
		$('#dialogAliasesCopyAlias').css('z-index', modalZIndexCount++);			
	}
	$('#dialogAliasesCopyAliasReplaceDatapointsAdd').on('click', function(){
		var index = $('#dialogAliasesCopyAliasReplaceDatapointsList').data('length') || 0;
		var listContent = "";
		listContent += "<li class='collection-item' data-index='" + index + "'>";
		listContent += "<div class='row'>";
		listContent += 	"<div class='col s12 m5 l5'>";
		listContent += 		"<input class='val dialogAliasesCopyAliasReplaceDatapoints searchvalue' name='dialogAliasesCopyAliasReplaceDatapoints_" + index + "_SEARCH_VALUE' id='dialogAliasesCopyAliasReplaceDatapoints_" + index + "_SEARCH_VALUE' data-index='" + index + "' data-setting='searchvalue' value=''></input>";
		listContent += 		"<label for='dialogAliasesCopyAliasReplaceDatapoints_" + index + "_SEARCH_VALUE' class='translate'></label>";
		listContent += 		"<span class='translate'>" + _("Replace this string...") + "</span>";
		listContent += 	"</div>";
		listContent += 	"<div class='col s1 m1 l1'>";
		listContent += 		"<i class='material-icons' style='margin-top:35px;'>arrow_forward</i>";
		listContent += 	"</div>";
		listContent += 	"<div class='col s10 m5 l5'>";
		listContent += 		"<input class='val dialogAliasesCopyAliasReplaceDatapoints newvalue' name='dialogAliasesCopyAliasReplaceDatapoints_" + index + "_NEW_VALUE' id='dialogAliasesCopyAliasReplaceDatapoints_" + index + "_NEW_VALUE' data-index='" + index + "' data-setting='newvalue' value=''></input>";
		listContent += 		"<label for='dialogAliasesCopyAliasReplaceDatapoints_" + index + "_NEW_VALUE' class='translate'></label>";
		listContent += 		"<span class='translate'>" + _("...with this string.") + "</span>";
		listContent += 		"<i class='material-icons dialogAliasesCopyAliasReplaceDatapoints selectId' data-index='" + index + "' data-selectidfor='dialogAliasesCopyAliasReplaceDatapoints_" + index + "_NEW_VALUE' style='position: absolute; right: 5px; top: 10px; cursor: hand;'>edit</i>";
		listContent += 	"</div>";
		listContent += 	"<div class='col s1 m1 l1'>";
		listContent += 		"<i class='material-icons'  style='margin-top:35px; cursor:pointer; color:#e60000;' onclick='$(\"#dialogAliasesCopyAliasReplaceDatapointsList li[data-index=" + index + "]\").remove();'>delete</i>";
		listContent += 	"</div>";
		listContent += "</div>";
		listContent += "</li>";
		$('#dialogAliasesCopyAliasReplaceDatapointsList').append(listContent);
		$('#dialogAliasesCopyAliasReplaceDatapointsList').data('length', index + 1);
		enhanceTextInputToCombobox('.dialogAliasesCopyAliasReplaceDatapoints.searchValue', aliasesUsedAliasIds.join(";"), false);
		$('.dialogAliasesCopyAliasReplaceDatapoints.selectId[data-index="' + index + '"]').on('click', function(){
			$('#dialogSelectId').data('selectidfor', $.escapeSelector($(this).data('selectidfor')));
			initSelectId(function (sid) {
				sid.selectId('show', $('#' + $('#dialogSelectId').data('selectidfor')).val(), {type: 'state'}, function (newId) {
					if (newId) {
						$('#' + $('#dialogSelectId').data('selectidfor')).val(newId).trigger('change');
					}
				});
			});
			
		});
	});

	//Save Datapoints
	function aliasesSaveDatapoints(ids, callback){
		alias = ids.pop();
		if(alias){
			var newObj = Object.assign({}, aliases[alias]);
			var isMain = $('.aliasesDatapoint.val[data-id="' + alias + '"][data-setting="name"]').data('main');
			delete newObj.UNSAVED_NEW;
			if(typeof newObj.common != "object") newObj.common = {};
			if(typeof newObj.native != "object") newObj.native = {};
			if(typeof newObj.common.alias != "object" && !isMain) newObj.common.alias = {};
			$('.aliasesDatapoint.val[data-id="' + alias + '"]').each(function(){
				$this = $(this);
				var setting = $this.data('setting');
				if(setting == "aliasId") {
					var val = $this.val();
					val = tryParseJSON(val) || val;
					newObj.common.alias["id"] = val;
				} else if(setting == "aliasRead") {
					if($this.val()) newObj.common.alias["read"] = $this.val(); else delete newObj.common.alias.read;
				} else if(setting == "aliasWrite") {
					if($this.val()) newObj.common.alias["write"] = $this.val(); else delete newObj.common.alias.write;
				} else {
					if ($this.attr('type') === 'checkbox') {
						newObj.common[setting] = $this.prop('checked');
					} else if ($this.attr('type') === 'number') {
						if($this.val() == ""){
							delete newObj.common[setting];
						} else if(isNaN($this.val())){
							alert("Error: NaN");
						} else {
							var numVal = parseFloat($this.val());
							if (numVal != null) newObj.common[setting] = numVal; else delete newObj.common[setting];
						}
					} else {
						if($this.val()){
							var val = $this.val();
							val = tryParseJSON(val) || val;
							newObj.common[setting] = val;
						} else {
							delete newObj.common[setting];
						}	
					}
				}
			});
			if(isMain){ //Update Id and Name in Selectbox
				var name = $('.aliasesDatapoint.val[data-id="' + alias + '"][data-setting="name"]').val() || alias;
				$('#aliasesSelectedAlias option[value="' + alias + '"]').html(alias + (name != alias ? " (" + name + ")" : "&nbsp;"));
				$('#aliasesSelectedAlias').select();
			}
			(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
				var _ids = ids;
				var _alias = alias;
				var _callback = callback;
				socket.emit('setObject', alias, newObj, function(err){
					if(!err) {
						$('.aliasesDatapoint.save[data-id="' + _alias + '"]').hide();
						delete aliases[_alias].UNSAVED_NEW;
						var allSaved = true;
						$('.aliasesDatapoint.save').each(function(){
							if($(this).css('display') != "none") allSaved = false;
						});
						if(allSaved) $('.aliasesDatapointSaveAll').hide();
						if(_ids.length){
							aliasesSaveDatapoints(_ids, _callback);
						} else {
							if(_callback) _callback();
						}
					} else {
						if(_callback) _callback("error");
					}
				});		
			})(); //<--End Closure
		} else {
			if(callback) callback();
		}
	}
	
	//Delete Datapoints
	function aliasesDeleteDatapoints(ids, callback){
		alias = ids.pop();
		if(alias){
			(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
				var _ids = ids;
				var _alias = alias;
				var _callback = callback;
				socket.emit('delObject', alias, function(err){
					if(!err) {
						delete aliases[_alias];
						if(_ids.length){
							aliasesDeleteDatapoints(_ids, _callback);
						} else {
							if(_callback) _callback();
						}
					} else {
						if(_callback) _callback("error");
					}
				});		
			})(); //<--End Closure
		} else {
			if(callback) callback();
		}
	}


	
	//++++++++++ AUTOCREATE ALIAS ++++++++++
	//Load Tab Autocreate Alias
	function loadTabAutocreateAlias(){
		$('#autocreateAliasSourceId').val('').trigger('change');
		$('.autocreateAliasVal').val('');
		autocreateAliasDatapointListEmpty();
		$('.autocreateAliasSaveAll').hide();
	}

	//Add roles to combobox autocreateAliasCommonRole
	enhanceTextInputToCombobox('#autocreateAliasCommonRole', defaultMainRoles.join(";"), false);

	//Enhance autocreateAliasSourceId with function
	$('#autocreateAliasSourceId').on('input change', function(){
		dialogDeviceAutocreateResult = {};
		var toDo = function(){
			if(iobrokerObjects[$('#autocreateAliasSourceId').val()]){
				$('#autocreateAliasSourceIdCommonName').html(iobrokerObjects[$('#autocreateAliasSourceId').val()].common.name);
				$('#autocreateAliasCreatePreview').removeClass('disabled').addClass('pulse');
			} else {
				$('#autocreateAliasSourceIdCommonName').html("");
				$('#autocreateAliasCreatePreview').addClass('disabled').removeClass('pulse');
			}
		}
		if(iobrokerObjectsReady) {
			toDo();
		} else {
			iobrokerObjectsReadyFunctions.push(toDo);
		}
	});
	$('#autocreateAliasSourceIdSelectIdButton').on('click', function(){
		initSelectId(function (sid) {
			sid.selectId('show', $('#autocreateAliasSourceId').val(), {type: 'state'}, function (newId) {
				if (newId) {
					$('#autocreateAliasSourceId').val(newId).trigger('change');
					if (M) M.updateTextFields();
				}
			});
		});
	});

	//Enhance autocreateAliasCreatePreview with function
	$('#autocreateAliasCreatePreview').on('click', function(){
		var sourceId = $('#autocreateAliasSourceId').val();
		if(!sourceId || typeof iobrokerObjects[sourceId] == udef) return;
		$('#autocreateAliasCreatePreview').removeClass('pulse');
		var r = getDatapointConfiguration(sourceId);
		$('#autocreateAliasId').val('alias.0.' + r.name);
		$('#autocreateAliasName').val(r.name);
		$('#autocreateAliasCommonRole').val(r.role);
		$('#autocreateAliasCreatePreview').addClass('disabled').removeClass('pulse');
		$('.autocreateAliasSaveAll').show();
		autocreateAliasDatapointListEmpty();
		//Use ChannelDetector to find out role and matching states
		var channelDetectorResult = channelDetector.detect({
			objects: iobrokerObjects,
			id: sourceId,
			ignoreIndicators: ["STICKY_UNREACH"]
		});
		var channelDetectorUsedDeviceTypeForCommonRole;
		var channelDetectorResultDatapoints = [];
		var channelDetectorResultDatapointAliasIds = [];
		var channelDetectorResultDatapointIds = [];
		if (channelDetectorResult) {
			channelDetectorResult.forEach(function (device){ //Iterate through all all found device-types
				console.log("Detected channel type " + device.type + ":");
				if (!channelDetectorUsedDeviceTypeForCommonRole){ //Role was not matched before
					console.log("   Set this as role for the new device.");
					channelDetectorUsedDeviceTypeForCommonRole = device.type;
				}
				device.states.forEach(function(state){ //Iterate through all found states
					if (state.id) { //This is a state with an id
						r = getDatapointConfiguration(state.id);
						console.log("   Detected " + JSON.stringify(r));
						if(channelDetectorResultDatapointAliasIds.indexOf(state.id) > -1){ //Was matched before
							console.log("      aliasId was mateched before!");
							r.deactivateLine = true;
						}
						if (r.id == "CONNECTED") {
							console.log("      Convert CONNECTED to UNREACH");
							r.id = "UNREACH";
							r.aliasRead = "!val";
							r.aliasWrite = "!val";
						}
						r.detectedId = r.id;
						r.id = getNewId($('#autocreateAliasId').val(), r.id, false, channelDetectorResultDatapointIds);
						if(r.detectedId != r.id){ //Id exists
							console.log("      Id exists - set to new Id " + r.id);
							r.deactivateLine = true;
						}
						channelDetectorResultDatapointIds.push(r.id);
						channelDetectorResultDatapointAliasIds.push(state.id);
						channelDetectorResultDatapoints.push(r);
					}
				});
			});
		} else {
			console.log("No Device detected.");
		}
		//Get unmatchedChildStates to match states, that were not assigned by ChannelDetector
		console.log("Checking for unmatchedChildStates");
		var unmatchedChildStates = [];
		for(id in iobrokerObjects){
			if(id.indexOf(sourceId) == 0 && iobrokerObjects[id].type == 'state' && channelDetectorResultDatapointAliasIds.indexOf(id) == -1) {
				unmatchedChildStates.push(id);
			}
		}
		//unmatchedChildStates.sort().reverse(); //reverse order, so that the top channel of multi-channel-devices wins
		for(i = 0; i < unmatchedChildStates.length; i++){ //Try to match unmatchedChildStates
			var stateId = unmatchedChildStates[i];
			r = getDatapointConfiguration(stateId);
			r.deactivateLine = true;
			console.log("   Unmatched ChildState " + JSON.stringify(r));
			if(channelDetectorResultDatapointAliasIds.indexOf(stateId) > -1){ //Was matched before
				console.log("      aliasId was mateched before!");
			}
			if (r.id == "CONNECTED") {
				console.log("      Convert CONNECTED to UNREACH");
				r.id = "UNREACH";
				r.aliasRead = "!val";
				r.aliasWrite = "!val";
			}
			r.detectedId = r.id;
			r.id = getNewId($('#autocreateAliasId').val(), r.id, false, channelDetectorResultDatapointIds);
			if(r.detectedId != r.id){ //Id exists
				console.log("      Id exists - set to new Id " + r.id);
			}
			channelDetectorResultDatapointIds.push(r.id);
			channelDetectorResultDatapointAliasIds.push(stateId);
			channelDetectorResultDatapoints.push(r);
		}
		console.log("Add detected datapoints to datapoint list");
		for(i = 0; i < channelDetectorResultDatapoints.length; i++){
			r = channelDetectorResultDatapoints[i];
			var deactivateLine = r.deactivateLine;
			delete r.deactivateLine;
			autocreateAliasDatapointListAddLine(r, deactivateLine);
		}
	});	

	//Enhance autocreateAliasAddDatapoint with function
	var autocreateAliasAddDatapointLastSelectId = "";
	$('#autocreateAliasAddDatapoint').on('click', function(){ 
		$('#dialogSelectId').data('selectidfor', '');
		initSelectId(function (sid) {
			sid.selectId('show', autocreateAliasAddDatapointLastSelectId, {type: 'state', noMultiselect: false}, function (newId) {
				if (newId && iobrokerObjects[newId]) {
					console.log(iobrokerObjects[newId]);
					var r = getDatapointConfiguration(newId);
					var excludeList = [];
					$('.autocreateAliasDatapointListVal.id').each(function(){ if($(this).val()) excludeList.push($(this).val()); });
					if(r) r.id = getNewId($('#autocreateAliasId').val() || "", r.id, false, excludeList);
					if(r && autocreateAliasDatapointListAddLine(r)){
						setTimeout(function(){ $(".adapter-body").scrollTop($(".adapter-body")[0].scrollHeight); }, 500);
					}
					autocreateAliasAddDatapointLastSelectId = newId;
				}
			});
		});		
	});
	
	//Enhance autocreateAliasClearDatapoints with function
	$('#autocreateAliasClearDatapoints').on('click', function(){
		autocreateAliasDatapointListEmpty();
	});
		
	//Enhance autocreateAliasSaveAll with function
	$('.autocreateAliasSaveAll').on('click', function(){
		autocreateAliasSaveAll();
	});
	
	//Enhance options with function
	$('#autocreateAliasOptionsAdoptCommonCustom').on('change', function(){
		if($(this).prop('checked')){
			$('input[name=autocreateAliasOptionsAdoptCommonCustomRemoveHistoryFrom]').attr('disabled', null);
		} else {
			$('input[name=autocreateAliasOptionsAdoptCommonCustomRemoveHistoryFrom]').attr('disabled', 'disabled');
		}
	});
		
	//Add Line to datapoint List
	function autocreateAliasDatapointListAddLine(obj, deactivateLine){
		var id = obj.id;
		var index = $('#autocreateAliasDatapointListTableBody').data('length') || 0;
		var tableLine = "";
		tableLine += "<tr class='autocreateAliasDatapointListLine' data-index='" + index + "'>";
		tableLine += "	<td><label><input type='checkbox'" + (deactivateLine ? "" : " checked='checked'") + "' /><span>" + obj.aliasId + "</span></label></td>";
		tableLine += "	<td><input class='autocreateAliasDatapointListVal id' type='text' id='autocreateAliasDatapointListId_" + index + "' value='" + id + "' data-index='" + index + "'/></td>";
		tableLine += "	<td><input class='autocreateAliasDatapointListVal name' type='text' id='autocreateAliasDatapointListName_" + index + "' value='" + obj.name + "' data-index='" + index + "'/></td>";
		tableLine += "	<td>";
		tableLine += "		<a class='autocreateAliasDatapointListDelete btn-flat' onclick='$(\".autocreateAliasDatapointListLine[data-index=" + index + "]\").remove();'><i class='material-icons'>delete</i></a>";
		tableLine += "	</td>";
		tableLine += "</tr>";
		$('#autocreateAliasDatapointListTableBody').append(tableLine);
		$('#autocreateAliasDatapointListTableBody').find('.autocreateAliasDatapointListLine[data-index="' + index + '"]').data('object', obj);
		index++;
		$('#autocreateAliasDatapointListTableBody').data('length', index);
		$('.autocreateAliasSaveAll').show();
		//Show save button on change
		$('.autocreateAliasVal, .autocreateAliasDatapointListLine').off('input change').on('input change', function(){
			$('.autocreateAliasSaveAll').show();
		});
	}
	
	//Empty autocreateAliasDatapointList
	function autocreateAliasDatapointListEmpty(){
		$('#autocreateAliasDatapointListTableBody').empty();
		$('#autocreateAliasDatapointListTableBody').data('length', 0);
	}
	
	//Save Alias with Datapoints
	function autocreateAliasSaveAll(){
		var toDo = function(){
			var aliasPath = $('#autocreateAliasId').val();
			if(!aliasPath){
				alert("Error: Please enter a valid Alias ID");
				return false;
			}
			if(aliasPath.substr(0, 8) != "alias.0."){
				if(!confirm("Warning: Alias ID does not start with 'alias.0', continue anyway?")) return false;
			}
			if(iobrokerObjects[aliasPath]){
				if(!confirm("Warning: Alias ID '" + aliasPath + "' exists. Overwrite?")) return false;
			}
			var ids = ["*MAIN*"];
			$('.autocreateAliasDatapointListLine').each(function(){
				if($(this).find('input[type=checkbox]').prop('checked')) ids.push($(this).find('.autocreateAliasDatapointListVal.id').val());
			});
			if(JSON.stringify(removeDuplicates(ids)) != JSON.stringify(ids)){
				alert("Error: You have duplicated destination IDs. Each destination ID must be unique.");
				return false;
			}
			(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
				var _aliasPath = aliasPath;
				autocreateAliasSave(aliasPath, ids, function(err){
					if(err) {
						alert("Error saving Alias - Please check your aliases.");
					} else {
						alert("Alias successfully saved.");
						loadAliases(function(){
							M.Tabs.getInstance($('#tabsTop')).select('tabAliases');
							setTimeout(function(){ $('#aliasesSelectedAlias').val(_aliasPath).select().trigger('change'); }, 10);
						});
					}
				});
			})(); //<--End Closure
		};
		if(iobrokerObjectsReady) {
			toDo();
		} else {
			iobrokerObjectsReadyFunctions.push(toDo);
		}		
	}
	function autocreateAliasSave(aliasPath, ids, callback){
		alias = ids.pop();
		if(alias){
			var sourceId = "";
			var sourceObject = {};
			var sourceObjectModified = false;
			var newObj = Object.assign({}, aliases[aliasPath + "." + alias]);
			if(alias == "*MAIN*"){
				var isMain = true;
				alias = "";
			} else {
				var isMain = false;
			}
			delete newObj.UNSAVED_NEW;
			if(typeof newObj.common != "object") newObj.common = {};
			if(typeof newObj.native != "object") newObj.native = {};
			if(typeof newObj.common.alias != "object" && !isMain) newObj.common.alias = {};
			if(isMain){
				newObj.type = "channel";
				newObj.common.name = $('#autocreateAliasName').val() || "";
				newObj.common.role = $('#autocreateAliasCommonRole').val() || "";
			} else {
				newObj.type = "state";
				var $line;
				$('.autocreateAliasDatapointListVal.id').each(function(){
					if($(this).val() == alias) $line = $(this).parent('td').parent('tr');
				});
				//var $line = $('.autocreateAliasDatapointListVal.id[val="' + alias + '"]').parent('td').parent('tr');
				var lineObject = $line.data('object') || {};
				newObj.common.name = $line.find('autocreateAliasDatapointListVal.name').val() || alias;
				newObj.common.role = lineObject.role || "value";
				newObj.common.type = lineObject.type || "string";
				newObj.common.unit = lineObject.unit || "";
				newObj.common.min = (typeof lineObject.min != udef ? lineObject.min : "");
				newObj.common.max = (typeof lineObject.max != udef ? lineObject.max : "");
				newObj.common.read = (typeof lineObject.read != udef ? lineObject.read : true);
				newObj.common.write = (typeof lineObject.write != udef ? lineObject.write : true);
				newObj.common.alias.id = lineObject.aliasId || "";
				newObj.common.alias.read =  lineObject.aliasRead || "";
				newObj.common.alias.write =  lineObject.aliasWrite || "";
				if(lineObject.states) newObj.common.states = lineObject.states; 
				if($('#autocreateAliasOptionsAdoptCommonCustom').prop('checked') && lineObject.custom){
					var removeHistoryFrom = $('input[name=autocreateAliasOptionsAdoptCommonCustomRemoveHistoryFrom]:checked').val();	
					if(removeHistoryFrom != "none"){
						sourceId = lineObject.aliasId;
						sourceObject = JSON.parse(JSON.stringify(iobrokerObjects[sourceId] || {}));
						sourceObject = {
							type: sourceObject.type || "state",
							common: sourceObject.common || {},
							native: sourceObject.native || {}
						}
						sourceObjectModified = false;
						historyInstances.forEach(function(historyInstance){
							if(removeHistoryFrom == "source" && sourceObject?.common?.custom?.[historyInstance]){
								sourceObject.common.custom[historyInstance].enabled = false;
								sourceObjectModified = true;
							} else if(removeHistoryFrom == "destination"){
								delete lineObject?.custom?.[historyInstance];
							}
						});
					}
					if(Object.keys(lineObject.custom).length) newObj.common.custom = lineObject.custom; 
				}
			}
			(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
				var _aliasPath = aliasPath;
				var _ids = ids;
				var _alias = alias;
				var _callback = callback;
				var _sourceId = sourceId;
				var _sourceObject = JSON.parse(JSON.stringify(sourceObject));
				var _sourceObjectModified = sourceObjectModified;
				socket.emit('setObject', aliasPath + (alias ? "." + alias : ""), newObj, function(err){
					if(!err) {
						if (_sourceObjectModified) {
							console.log("sourceObjectModified: " + _sourceId + " -> " + JSON.stringify(_sourceObject));
							socket.emit('setObject', _sourceId, _sourceObject, function(){
								if(!err) {
									autocreateAliasSave(_aliasPath, _ids, _callback);
								} else {
									if(_callback) _callback("error");
								}
							});
						} else {
							autocreateAliasSave(_aliasPath, _ids, _callback);
						}
					} else {
						if(_callback) _callback("error");
					}
				});		
			})(); //<--End Closure
		} else {
			if(callback) callback();
		}
	}


	//++++++++++ RENAME ALIASES ++++++++++
	//Load Tab Rename Aliases
	var renameAliasesNamePattern = [];
	function loadTabRenameAliases(){
		//Enhance tableRenameAliasesNamePattern with functions
		values2table("tableRenameAliasesNamePattern", renameAliasesNamePattern, onChange, onTableRenameAliasesNamePatternReady);
		//Get Aliases and add them to Tree
		var aliasesMain = getAliasesMain();
		var aliasesMainTree = aliasesMain.reduce(function(total, current){
			current.split('.').reduce(function(currentTotal, currentValue, currentIndex, currentArray){
				var id = currentArray.slice(0, currentIndex + 1).join('.');
				var label = currentArray.slice(currentIndex, currentIndex + 1).join('.');
				var	temp = (currentTotal.children = currentTotal.children || []).find(o => o.id === id);
				if (!temp) currentTotal.children.push(temp = {id: id, label: label});
				return temp;
			}, total);
			return total;
		}, {children: []}).children;
		function renameAliasesCreateNestedAliasesMainList(list){
			if(list?.length > 0){
				var html = "<ul class='collapsible expandable renameAliasesTreeCollapsible'>";
				list.forEach(function(alias){
					console.log("|- " + alias.id + ":");
					var name = getAliasName(alias.id);
					html += "	<li" + ((alias.id == "alias" || alias.id == "alias.0") ? " class='active'" : "") + ">";
					html += "		<div class='collapsible-header'><i class='material-icons collapsible-header-inactive indigo-text text-darken-4' style='margin: -9px 6px -9px 0px;'>folder</i><i class='material-icons collapsible-header-active indigo-text text-darken-4' style='margin: -9px 6px -9px 0px;'>folder_open</i>";
					html += 			alias.label + (name && name != alias.label ? "<br>(" + name + ")" : "");
					html += "		</div>";
					html += "		<div class='collapsible-body'>";
					html += 			renameAliasesCreateNestedAliasesMainList(alias.children);
					var datapoints = Object.keys(aliases).filter(function(element){return (element.indexOf(alias.id) == 0 && element.substr(alias.id.length).lastIndexOf(".") == 0 && aliasesMain.indexOf(element) == -1);});
					if(datapoints){
						html += "		<div style='padding: 10px; overflow-x: auto; cursor: pointer;' class='renameAliasesAliasTreeDatapoints' data-alias='" + alias.id + "'><ul>";
						html += "			<li>" + datapoints.join("</li><li>");
						html += "		</ul></div>";
						html += "	</div>";
					}
					html += "	</li>";		
				});
				html += "</ul>";
				return html;
			} else {
				console.log("   has no childs -|");
				return "";
			}
		}
		$('#renameAliasesTreeContainer').html(renameAliasesCreateNestedAliasesMainList(aliasesMainTree));
		$('.renameAliasesTreeCollapsible').collapsible({accordion: false});
	}
	
	//Enhance tableRenameAliasesNamePattern with functions
	function onTableRenameAliasesNamePatternReady(){
		var $div = $('#tableRenameAliasesNamePattern');
		var $table = $div.find('.table-values');
		var $lines = $table.find('.table-lines');
		//Selectbox-Functions
		$lines.find('select[data-name]').each(function () {
			var name = $(this).data('name');
			if (name === 'type') {
				var index = $(this).data('index');
				$(this).on('input change', function(){
					$parentLine = $(this).parents('tr');
					$value = $parentLine.find('input[data-name=value]');
					switch($(this).val()){
						case "text":
						case "aliasRoot":
						case "aliasPath":
						case "aliasPathWithoutChannelNumber":
						case "aliasPathWithoutChannel":
						case "aliasParentId":
						case "aliasParentChannelId":
						case "aliasParentDeviceId":
						case "readRoot":
						case "readPath":
						case "readPathWithoutChannelNumber":
						case "readPathWithoutChannel":
						case "readParentId":
						case "readParentChannelId":
						case "readParentDeviceId":
						case "writeRoot":
						case "writePath":
						case "writePathWithoutChannelNumber":
						case "writePathWithoutChannel":
						case "writeParentId":
						case "writeParentChannelId":
						case "writeParentDeviceId":
						$value.css('opacity', '1').prop('disabled', false);
						break;
						
						default:
						$value.css('opacity', '0').prop('disabled', true);
					}
				}).trigger('change');
			}
		});
		//Button-Functions
		$lines.find('a[data-command]').each(function () {
			var command = $(this).data('command');
			//Drag-Icon
			if (command === 'drag_handle') {
				var imageIndex = $(this).data('index');
				$(this).removeClass('btn-floating').addClass('btn-flat transparent').find('i').html('drag_handle');
			}
		});
		//Make table sortable
		$("#tableRenameAliasesNamePattern tbody").sortable({
			helper: fixHelper,
			start: function(event, ui){
				console.log("Drag started...");
			},
			stop: function(event, ui){
				console.log("Drag ended, start resorting...");
				$("#tableRenameAliasesNamePattern tbody").sortable('disable');
				var sequence = [];
				$('#tableRenameAliasesNamePattern').find('.table-values').find('.table-lines').find('tr').each(function(){
					sequence.push($(this).data('index'));
				});
				var tableResorted = [];
				for(var i = 0; i < sequence.length; i++){
					tableResorted.push(renameAliasesNamePattern[sequence[i]]);
				}
				renameAliasesNamePattern = tableResorted;
				onChange();
				values2table('tableRenameAliasesNamePattern', renameAliasesNamePattern, onChange, onTableRenameAliasesNamePatternReady);
				$("#tableRenameAliasesNamePattern tbody").sortable('enable');
				console.log("resorted.");
			},
			axis: "y",
			handle: "a[data-command='drag_handle']"
		});		
	}
}



/************** SAVE *****************************************************************
*** This will be called by the admin adapter when the user presses the save button ***
*************************************************************************************/
function save(callback) {
	//Select elements with class=value and build settings object
	var obj = {};
	$('.value').each(function () {
		var $this = $(this);
		if ($this.attr('type') === 'checkbox') {
			obj[$this.attr('id')] = $this.prop('checked');
		} else {
			obj[$this.attr('id')] = $this.val();
		}
	});
	callback(obj);
}
