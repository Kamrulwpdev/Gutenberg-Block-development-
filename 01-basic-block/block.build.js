(()=>{wp.i18n.__;var e=wp.blocks.registerBlockType,t=wp.components,n=t.TextControl,l=t.TextareaControl,a=wp.components.SelectControl,c=wp.components.Icon,i=[{label:"Select an icon",value:""},{label:"Star",value:"star"},{label:"Heart",value:"heart"},{label:"Smile",value:"smile"}];e("block-example/block-service-basic-block",{title:"Service Box",icon:"admin-tools",category:"layout",attributes:{title:{type:"string",default:"Service Title"},description:{type:"string",default:"Service Description"},icon:{type:"string",default:""}},edit:function(e){var t=e.attributes,c=e.setAttributes;return React.createElement("div",null,React.createElement(n,{label:"Title",value:t.title,onChange:function(e){return c({title:e})}}),React.createElement(l,{label:"Description",value:t.description,onChange:function(e){return c({description:e})}}),React.createElement(a,{label:"Icon",value:t.icon,options:i,onChange:function(e){return c({icon:e})}}))},save:function(e){var t=e.attributes;return React.createElement("div",null,React.createElement(c,{icon:t.icon}),React.createElement("h2",null,t.title),React.createElement("p",null,t.description))}})})();