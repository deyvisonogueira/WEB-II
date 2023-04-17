package interfaceDP;

public class Retangulo implements AreaCalculavel {
	private int lado;
	private int altura;

	public Retangulo(int lado, int altura) {
		this.lado = lado;
		this.altura = altura;
	}

	@Override
	public double calculaArea() {
		return this.altura * this.lado;
	}
}
