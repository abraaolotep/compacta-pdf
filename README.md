# Compacta PDF — LOTEP

Suíte de ferramentas de PDF da LOTEP (Loteria do Estado da Paraíba) — processamento 100% no navegador, nenhum arquivo é enviado a servidor.

**Acesse:** https://abraaolotep.github.io/compacta-pdf/

## Funções

- **Compactar / Dividir** — reduz PDFs para o limite do destino (PBDOC, PJe, SEI, e-mail) ou divide em volumes sem perda; identificação automática de protocolo/processo (inclusive por OCR em digitalizados) renomeia arquivos e volumes.
- **Juntar** — combina vários PDFs na ordem escolhida.
- **Converter** — PDF→Word, PDF→texto, PDF→imagens; imagens→PDF; fotos→PDF pesquisável (OCR com camada de texto invisível) e fotos→Word.
- **Editar** — extrair páginas, numerar folhas (fl. 001...), carimbo/marca-d'água e organizar páginas com miniaturas (sequência, remoção, inserção de outro PDF).
- **Recibo** — hash SHA-256 dos arquivos gerados, com data e tamanhos.
- **Aplicativo offline** — a página pode ser instalada (PWA) e funciona sem internet após o primeiro acesso.

## Qualidade

Autoteste embutido: abra o site com `?teste=1` para executar os 17 testes automáticos de todas as funções.

## Como reverter uma versão

Todo o histórico fica neste repositório; qualquer versão anterior pode ser restaurada com `git revert`/`git checkout` do commit desejado.
