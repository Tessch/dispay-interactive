import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import SimpleTable from "./SimpleTable";

type Row = {
  id: number;
  name: string;
};

const columns = [{ field: "name", header: "Name" }];

const rows = [
  { id: 1, name: "Tassadit" },
  { id: 2, name: "Tess" },
];

describe("SimpleTable", () => {
  it("renders table header", () => {
    render(<SimpleTable columns={columns} rows={rows} />);

    const element = screen.getByText("Name");
    expect(element).toBeDefined();
    expect(element).toBeTruthy();
    expect(element).not.toBeNull();
  });

  it("renders table rows", () => {
    render(<SimpleTable columns={columns} rows={rows} />);

    expect(screen.getByText("Tassadit")).toBeDefined();
    expect(screen.getByText("Tess")).toBeDefined();
  });

  it("renders footer", () => {
    render(<SimpleTable columns={columns} rows={rows} footer="Total: 200" />);

    expect(screen.getByText("Total: 200")).toBeDefined();
  });
});
