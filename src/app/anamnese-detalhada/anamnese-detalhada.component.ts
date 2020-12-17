import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Anamnese } from '../interfaces/anamnese';
import html2pdf from "html2pdf.js";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

@Component({
  selector: 'app-anamnese-detalhada',
  templateUrl: './anamnese-detalhada.component.html',
  styleUrls: ['./anamnese-detalhada.component.css']
})
export class AnamneseDetalhadaComponent implements OnInit {

  anamnese: Anamnese;
  constructor() {
    this.anamnese = JSON.parse(window.localStorage.getItem('current_anamnese'));
  }

  ngOnInit() {
  }

  gerarPDF() {
    const source = document.getElementById('print');

    const doc = new jsPDF('p', 'pt', 'a4')
    doc.setFont('Courier')
    // Titulo
    doc.setFontSize(20)
    doc.text('Relatório da Anamnese', 215, 60)
    doc.line(40, 80, 550, 80)
    // Logo
    // doc.addImage(image, 30, 30)

    // Informação Cabeçalho
    doc.setFontSize(10)
    doc.text(`Nome: ${this.anamnese.paciente.nome}`, 50, 120)
    doc.text(`Idade: ${this.anamnese.paciente.idade}`, 50, 140)
    doc.text(`Cúrtis: ${this.anamnese.paciente.cor}`, 50, 160)
    doc.text(`Estado Cívil: ${this.anamnese.paciente.estado_civil}`, 50, 180)
    doc.text(`Sexo: ${this.anamnese.paciente.sexo}`, 50, 200)
    doc.text(`Orientação Sexual: ${this.anamnese.paciente.posicionamento_sexual}`, 50, 220)
    doc.text(`Nacionalidade: ${this.anamnese.paciente.nacionalidade}`, 50, 240)
    doc.text(`Religião: ${this.anamnese.paciente.religiao}`, 50, 260)
    doc.text(`Profissão: ${this.anamnese.paciente.profissao}`, 50, 280)
    doc.text(`Enfermaria: ${this.anamnese.paciente.enfermaria}`, 50, 300)
    doc.text(`Queixa Principal: ${this.anamnese.paciente.queixa_principal}`, 50, 320)

    doc.save(this.anamnese.paciente.nome+'.pdf')

  }

}
