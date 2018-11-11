Object.prototype.getKey = function(value) {
  var object = this;
  return Object.keys(object).find(key => object[key] === value);
};

const mac_dict = {
	"Q" : "ض",
	"W" : "ص",
	"E" : "ث",
	"R" : "ق",
	"T" : "ف",
	"Y" : "غ",
	"U" : "ع",
	"I" : "ه",
	"O" : "خ",
	"P" : "ح",
	"A" : "ش",
	"S" : "س",
	"D" : "ي",
	"F" : "ب",
	"G" : "ل",
	"H" : "ا",
	"J" : "ت",
	"K" : "ن",
	"L" : "م",
	"Z" : "ظ",
	"X" : "ط",
	"C" : "ذ",
	"V" : "د",
	"B" : "ز",
	"N" : "ر",
	"M" : "و",
	";" : "ك",
	"[" : "ج",
	"]" : "ة",
	"," : "،",
	"'" : "؛",
	"`" : "ـ"
}

const other_dict = {
	"Q" : "ض",
	"W" : "ص",
	"E" : "ث",
	"R" : "ق",
	"T" : "ف",
	"Y" : "غ",
	"U" : "ع",
	"I" : "ه",
	"O" : "خ",
	"P" : "ح",
	"A" : "ش",
	"S" : "س",
	"D" : "ي",
	"F" : "ب",
	"G" : "ل",
	"H" : "ا",
	"J" : "ت",
	"K" : "ن",
	"L" : "م",
	"Z" : "ئ",
	"X" : "ء",
	"C" : "ؤ",
	"V" : "ر",
	"B" : "لا",
	"N" : "ى",
	"M" : "ة",
	"[" : "ج",
	"]" : "د",
	";" : "ك",
	"'" : "ط",
	"," : "و",
	"/" : "ظ",
	"`" : "ذ",
	"." : "ز"
}

exports.translate = function(text,pc,lang){
	if(lang === "ar"){
		if (pc === "mac"){
			return get_arabic(text,mac_dict)
		}
		else {
			return get_arabic(text,other_dict)
		}
	} else {
		if (pc === "mac"){
			return get_english(text,mac_dict)
		}
		else {
			return get_english(text,other_dict)
		}
	}
}

function get_arabic(text,dict){
	let result = ""
	for (var i = 0; i < text.length; i++) {
		char = dict[text.charAt(i).toUpperCase()];
		if(char === undefined){
			result += text.charAt(i);
		}
		else result +=  char;
	}
	return result
}

function get_english(text,dict){
	let result = ""
	for (var i = 0; i < text.length; i++) {
		let key = dict.getKey(text.charAt(i))
		if(key === undefined){
			result += text.charAt(i);
		}
		else result +=  key;
	}
	return result
}