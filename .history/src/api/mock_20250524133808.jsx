import Mock from 'mockjs';

//创建第一个拦截接口
Mock.mock(/home\/getData/, function(){
    console.log('被拦截的getData接口');
})