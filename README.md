# 111
#include<iostream>
using namespace std;
class A{
	protected:
		int a;
		public:
			A(int _a=0):a(_a){
				cout<<"A"<<endl;
			}
			~A(){
				cout<<"~A"<<endl;
			}
}; 
class B:public A{
	protected:
	 	int b;
		public:
			B(int _a=0,int _b=0):A(_a),b(_b){//用基类的构造函数赋值 
				cout<<"B"<<endl;
			}
			~B(){
				cout<<"~B"<<endl;
			}
		
};
class C:public B{// 
	protected:
		int c;
		public:
			C(int _a=0,int _b=0,int _c=0):B(_a,_b),c(_c){//不能初始化a，在A的构造函数里面已经初始化 
				cout<<"C"<<endl;
			}
			~C(){
				cout<<"~C"<<endl;
			}
			void show(){
				cout<<a<<" "<<b<<" "<<c<<endl;// 
			}
};
int main(){
	C t(1,2,3);
	t.show();
}
