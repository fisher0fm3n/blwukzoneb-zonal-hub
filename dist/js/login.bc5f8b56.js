(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["login"],{a55b:function(e,a,n){"use strict";n.r(a);var o=n("7a23");const s={class:"login"},t={class:"email"},l={class:"password"};function i(e,a,n,i,c,d){return Object(o["w"])(),Object(o["g"])("div",s,[Object(o["h"])("div",t,[Object(o["N"])(Object(o["h"])("input",{type:"email","onUpdate:modelValue":a[0]||(a[0]=e=>c.email=e),placeholder:"email"},null,512),[[o["J"],c.email]])]),Object(o["h"])("div",l,[Object(o["N"])(Object(o["h"])("input",{type:"password","onUpdate:modelValue":a[1]||(a[1]=e=>c.password=e),placeholder:"password"},null,512),[[o["J"],c.password]])]),Object(o["h"])("button",{onClick:a[2]||(a[2]=(...e)=>d.login&&d.login(...e))},"Login")])}var c=n("2591"),d={name:"Login",data(){return{email:"",password:""}},methods:{login:function(){c["a"].auth().signInWithEmailAndPassword(this.email,this.password).then(e=>{console.log("Success")},e=>{alert(e)})}}};d.render=i;a["default"]=d}}]);
//# sourceMappingURL=login.bc5f8b56.js.map