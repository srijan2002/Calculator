new Vue({
    el:'#vue-div',

    data:{

        IN1:"",
        IN2:"",
        RES:"",
        a:0,
        b:0
    },
    methods:{
        add:function(){
            if(this.IN1!=""&&this.IN2!="")
             this.RES= parseFloat(this.IN1)+parseFloat(this.IN2)
        },
        subtract:function(){
            if(this.IN1!=""&&this.IN2!="")
            this.RES= parseFloat(this.IN1)-parseFloat(this.IN2)
       },
       multiply:function(){
        if(this.IN1!=""&&this.IN2!="")
        this.RES= parseFloat(this.IN1)*parseFloat(this.IN2)
   },
   divide:function(){
    if(this.IN1!=""&&this.IN2!="")
    this.RES= parseFloat(this.IN1)/parseFloat(this.IN2)
},
power:function(){
    if(this.IN1!=""&&this.IN2!="")
    this.RES= Math.pow(parseFloat(this.IN1),parseFloat(this.IN2))
},
modulus:function(){
    if(this.IN1!=""&&this.IN2!="")
    this.RES= parseFloat(this.IN1)%parseFloat(this.IN2)
},
log:function(){
    if(this.IN1!=""&&this.IN2!="")
    this.RES= Math.log(parseFloat(this.IN1))/Math.log(parseFloat(this.IN2))
},
xand:function(){
    if(this.IN1!=""&&this.IN2!="")
    this.RES= parseFloat(this.IN1)&parseFloat(this.IN2)
},
min:function(){
    if(this.IN1!=""&&this.IN2!="")
    this.RES= Math.min(parseFloat(this.IN1),parseFloat(this.IN2))
},
max:function(){
    if(this.IN1!=""&&this.IN2!="")
    this.RES=Math.max(parseFloat(this.IN1),parseFloat(this.IN2))
},
root:function(){
    if(this.IN1!=""&&this.IN2!="")
    this.RES= Math.pow(parseFloat(this.IN1),1/parseFloat(this.IN2))
},
xor:function(){
     if(this.IN1!=""&&this.IN2!="")
    this.RES= parseFloat(this.IN1)^parseFloat(this.IN2)
},
back:function(){
    if(this.a==1)
    this.IN1=this.IN1.substring(0,this.IN1.length-1);
    if(this.b==1)
    this.IN2=this.IN2.substring(0,this.IN2.length-1);
   
},
i1:function(){
    this.a=1;
    this.b=0;
},
i2:function(){
    this.a=0;
    this.b=1;
},
n1:function(str){
    if(this.a==1)
    this.IN1=String(this.IN1)+str;
    if(this.b==1)
    this.IN2=String(this.IN2)+str;

},
dot:function(){
    if(this.a==1)
    this.IN1=String(this.IN1)+'.';
    if(this.b==1)
    this.IN2=String(this.IN2)+'.';

}
 
    }
});

